---
title: "為什麼我自己寫 to-md.py，而不是用現成工具"
date: 2026-05-28
type: 綜覽
url: ""
concepts: [deterministic-ai-boundary, claude-code]
projects: []
impact: high
tldr: "三個 Claude Code skill 各自在收錄文章時浪費 LLM token 做機械清洗（斷行合併、簡繁轉換）。自建 to-md.py 326 行腳本把這層抽出來，4 種來源通吃，每次收錄省下 30-50% token。"
stage: evergreen
icon: "🔧"
created: 2026-05-28
---

## 為什麼讀

這不是一篇外部文章，而是我自己的專案開發紀錄。記下來是因為未來一定會忘記：為什麼要花兩天時間寫一支 326 行的 Python 腳本，而不是直接用李佳達老師 AI 超級大腦課程教的方法、或讓 Claude 自己處理就好。

## 摘要

Simon 的 Obsidian 知識庫有三個 Claude Code skill 負責不同來源的內容收錄：knowledge-wiki 收網頁和 YouTube、course-notes 收課程逐字稿、ccna-quiz 收 PDF 考古題。這三個 skill 各自讓 Claude 做一堆機械性的清洗工作——斷行合併、簡繁轉換、時間戳移除、頁首頁尾刪除——每次都消耗 LLM token 做正則表達式就能處理的事。

2026-05-27 到 05-28，Simon 和芙莉蓮花了兩天完成 `to-md.py`：一支 Python CLI 工具，統一處理四種來源（web / youtube / pdf / transcript）的文字清洗。程式做確定性的機械活，Claude 只做需要理解力的結構化。中間踩了五個坑、兩次架構方向錯誤，最終產出 326 行腳本 + 三個 skill 修改 + 統一 venv 遷移。

## 核心概念

- [[deterministic-ai-boundary]]：這個專案的核心設計原則。斷行合併、OpenCC 簡繁轉換、頁首頁尾偵測這些工作，邏輯可以寫成 if-else 和正則表達式，結果是確定的。讓 LLM 做這些事不只浪費 token，還會偶爾產出不一致的結果（有時漏刪時間戳、有時多留一個空行）。把這條邊界畫清楚，程式做到哪、AI 從哪接手，是整個設計的起點

- [[claude-code]]：to-md.py 不是獨立工具，它存在的意義是被 Claude Code skill 呼叫。三個 skill（knowledge-wiki、course-notes、ccna-quiz）的流程都改成「提取 → to-md.py 清洗 → Claude 結構化」三層，to-md.py 是中間的膠水層

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**：

- ✅ 已落地：三個 skill 的 ingest flow 已改成三層架構，每次收錄自動呼叫 to-md.py
- ✅ 已落地：統一 venv `~/.venvs/claude-tools/` 合併舊 `yt-ingest` 所有套件，三支既有腳本 shebang 遷移完成
- 後續可做：v1.5 加音檔來源（Plaud.ai 錄音、podcast），v2.0 加協作文件（Google Docs、Notion export）

**B. Simon 個人動作類**：

- 下次收文章或上課時觀察 to-md.py 的實際清洗品質，特別注意 PDF 模式（章節標題偵測）和 YouTube 模式（連續重複行去除）的邊界情況
- 舊 venv `~/.venvs/yt-ingest/` 觀察一週無問題後可以刪除

## 原文要點

### 為什麼不用李佳達老師的方法

李佳達老師在 AI 超級大腦課程中教的是通用的 AI 知識管理工作流——把文字丟給 LLM 處理，讓 AI 自己判斷怎麼清理、怎麼結構化。這個方法適合「偶爾收一篇文章」的使用者，快速、不需要寫程式。

但 Simon 的場景不同：

1. **量大且頻繁**：每週透過 knowledge-wiki 收 5-10 篇文章 + 課程筆記，每篇都讓 Claude 跑一次簡繁轉換和斷行合併，token 累積很可觀
2. **來源多樣**：網頁（firecrawl）、YouTube（yt-transcript.py）、PDF（PyMuPDF）、課程逐字稿（Simon 手動貼），每種來源的「髒法」不同——YouTube 有重複字幕行、PDF 有硬斷行和頁首頁尾、逐字稿有時間戳和講者標籤
3. **一致性要求**：Claude 做清洗偶爾不一致（有時留住時間戳、有時多插一個空行），但 Python 正則跑出來的結果每次都一樣
4. **已有自動化管線**：三個 skill 是自動執行的，中間插一支確定性腳本比讓 Claude 每次重新判斷更可靠

一句話總結：李佳達的方法是「全部交給 AI」，Simon 的方法是「機械活交給程式、判斷活交給 AI」。後者前期多花兩天寫腳本，但每次收錄都省 token、省時間、結果更穩定。

### 設計過程（5/27 spec session）

5/27 晚上跟芙莉蓮討論了整個設計。一開始的問題是：「我的 skill 裡面哪些步驟其實不需要 AI？」

盤點三個 skill 的收錄流程後，發現重複的機械工作包括：
- 簡體→繁體轉換（每篇都跑）
- 多餘空行壓縮（每篇都跑）
- 尾端空白清理（每篇都跑）
- YouTube 逐字稿分段（knowledge-wiki 每次收 YT 影片都跑）
- PDF 頁首頁尾偵測（ccna-quiz 匯入題庫時跑）
- 課程逐字稿時間戳移除（course-notes 每節課都跑）

這些全是「給定輸入，輸出唯一」的確定性操作。

### 五個坑

1. **Spec 寫到錯的地方**：第三次把 spec 寫到 `docs/superpowers/specs/` 而不是 vault `9-ops/specs/`。這已經是被糾正第三次了。根本原因是 superpowers plugin 的預設路徑跟 Simon 的實際使用習慣不同，必須手動覆蓋

2. **盤點來源時靠記憶**：第一輪只列出 knowledge-wiki 和 course-notes，忘了 ccna-quiz。後來又漏了 transcript（課程逐字稿）——是 Simon 問「課程逐字稿不也是轉 MD 嗎」才發現。最後派 sub-agent 掃全部 skill 才找到音檔和協作文件兩個額外來源。教訓：盤點時用工具掃，不要靠腦子列

3. **想把提取和清洗混在一起**：最初把 yt-transcript.py（YouTube 語音提取）和 to-md.py（文字清洗）合進一支程式。Simon 指出：「YouTube 語音轉文字」跟「轉 Markdown」是本質上不同的功能，硬合在一起會讓不需要 YouTube 功能的來源也載入那些依賴。最終定案三層分離：提取層各自獨立、清洗層統一、結構化層由 Claude 處理

4. **備份問題想太多**：芙莉蓮列了一堆備份選項比較（GitHub、Obsidian Sync、兩邊都推），Simon 一句話收尾：「做出來的不就是一個工具？放哪都是原始碼，venv 從 requirements.txt 重建就好」。不要把簡單問題複雜化

5. **錯誤處理策略太粗糙**：芙莉蓮提的「方案 C：出錯就回退到舊流程」被 Simon 修正。正確的區分是：來源不支援（v1 以外的來源）→ 回退 OK；程式 bug（支援的來源但出錯）→ 必須當場修好再跑，不回退。否則工具白做了

### 實作過程（5/28 implementation session）

5/28 用 Subagent-Driven Development 執行：

- **Task 1**（環境建置）：建 `~/.venvs/claude-tools/` venv、裝 PyMuPDF + OpenCC + chardet + 舊 venv 全部套件。3 分鐘搞定
- **Task 2**（寫腳本）：326 行 Python，4 種清洗模式 + CLI 介面 + 輕量 frontmatter 輸出。code review 發現 reviewer 誤報了一個 "critical" bug（`"#" + "# Title"` 的字串串接結果是 `"## Title"` 不是 `"## # Title"`），實際上邏輯正確
- **Task 3**（驗證）：7 項測試全過——transcript / youtube / web / pdf 四種模式 + 簡繁轉換 + --no-chinese-convert + 錯誤情況
- **Task 4**（改 skill）：knowledge-wiki、course-notes、ccna-quiz 三個 skill 的流程檔插入 to-md.py 步驟
- **Task 5**（shebang 遷移）：三支既有腳本（yt-transcript.py、yt-gemini-transcribe.py、audio-transcribe.py）shebang 從舊 venv 指向新 venv。額外發現 yt-gemini-transcribe.py 裡有一個 `YT_DLP_BIN` 路徑也寫死了舊 venv，一併修正

### 成果

| 項目 | 內容 |
|---|---|
| 腳本位置 | `~/vaults/SimonVault/0-context/scripts/to-md.py` |
| 行數 | 326 行 |
| 支援來源 | web / youtube / pdf / transcript |
| 統一 venv | `~/.venvs/claude-tools/`（合併 10 個套件） |
| 修改的 skill | knowledge-wiki / course-notes / ccna-quiz |
| 遷移的腳本 | 3 支（shebang 更新） |
| 設計文件 | `9-ops/specs/2026-05-27-to-md-tool-design.md` + `2026-05-28-to-md-tool-plan.md` |

## 原文全文

> [!quote]- 原始對話紀錄摘要（點擊展開）
> 本篇 reading 的來源是 Simon 和芙莉蓮在 2026-05-27 和 2026-05-28 兩個 Claude Code session 中的對話。
> 
> **5/27 session（spec 設計）**：
> - 起點：Simon 問「我的 skill 裡面有哪些步驟其實不需要 AI？」
> - 盤點三個 skill 的收錄流程，發現重複的機械清洗工作
> - 討論設計方案：方案 A（LLM 自己做全部）vs 方案 B（格式感知的文字提取，程式做確定性清洗）
> - 選定方案 B，定義三層架構：提取→清洗→結構化
> - 踩了 5 個坑（見原文要點）
> - 產出 spec：`9-ops/specs/2026-05-27-to-md-tool-design.md`
> 
> **5/28 session（plan + 實作）**：
> - 寫 implementation plan（5 個 Task、~780 行）
> - 用 Subagent-Driven Development 執行
> - 5 個 Task 全部完成，7 項測試全過
> - 額外發現 yt-gemini-transcribe.py 的 YT_DLP_BIN 路徑寫死問題
> - 產出：to-md.py v1.0 + 三個 skill 修改 + venv 遷移

## 原始連結

- 設計規格：`~/vaults/SimonVault/9-ops/specs/2026-05-27-to-md-tool-design.md`
- 實作計畫：`~/vaults/SimonVault/9-ops/specs/2026-05-28-to-md-tool-plan.md`
- 腳本原始碼：`~/vaults/SimonVault/0-context/scripts/to-md.py`

## 落地動作與效益

**A 類芙莉蓮優化（已完成）：**
- to-md.py v1.0 腳本寫入 vault `0-context/scripts/`，Obsidian Sync 備份
- knowledge-wiki ingest-flow.md 修改：YouTube + Gemini 備援 + web 三條路徑都插入 to-md.py 清洗步驟
- course-notes SKILL.md 修改：逐字稿預處理步驟 1b 插入 to-md.py
- ccna-quiz SKILL.md 修改：新增「新題庫匯入（PDF → MD）」段落
- 統一 venv `~/.venvs/claude-tools/` 建立，三支腳本 shebang 遷移完成
- vault commits：`fc301ed`、`cbf93f2`、`26fd2a7`

**B 類 Simon 個人動作：**
- ⏸ 觀察 to-md.py 實際收錄品質（下次 `收這篇` 或上課時驗證）
- ⏸ 舊 venv `~/.venvs/yt-ingest/` 觀察一週後決定是否刪除
- ⏸ v1.5 音檔來源、v2.0 協作文件待需求浮現再做
