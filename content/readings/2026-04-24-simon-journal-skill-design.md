---
title: Simon-Journal /journal skill 設計過程
date: 2026-04-24
type: 綜覽
url: ""
tags: [claude-code, skill, journal, notion]
concepts: [reverse-skill-design, sentinel-test, pure-receive-immediate-write, directory-as-trigger, simplicity-over-control]
notion-page-id: 34cf85da-554f-815a-bc80-cd9d56b62ef4
---

## 摘要

2026-04-24 完整設計記錄：Simon 把日記流程從 ChatGPT GPTs「AI 生產力日記助手」搬到 Claude Code `/journal` skill。核心反轉是動機優先序：從「資料主控」改成「簡化流程 > 資料主控」。決策骨幹為 Notion 當日記 sink、Obsidian vault 當 WIKI 知識、Heptabase 退訂；入口採目錄即觸發（C9）、純接收 + 即時落地（A3 + C7）；輸出結構三段本文 + 8 位導師池挑 3。Phase 1–5 Notion 回寫測試全綠，發現 MCP 不支援封存、rich text 可行但 Simon 選純文字方向 A、冪等需 fetch-then-replace、API 會回暫時 502 須重試。下一步實作 skill 本體、自試實測、週復盤機制設計。

## 核心概念

- [[reverse-skill-design]]：撈 5 篇 2026-04-19 ~ 04-23 GPTs 產出的日記，逐題反推出 B-1 ~ B-3 輸出格式、A1 ~ A10 行為、C1 ~ C12 控制流
- [[sentinel-test]]：在 production DB 用 1900-01-01 + `[TEST-PHASE-N]` 前綴跑 Phase 1 ~ 5，取代建獨立測試 DB
- [[pure-receive-immediate-write]]：A3 不追問、C7 即時 append、C12 互動逃脫「這句回答不會寫進日記」
- [[directory-as-trigger]]：C9 進 /Simon-Journal = 自動接收模式；C10 目錄分工避免 meta 污染
- [[simplicity-over-control]]：2026-04-24 反轉動機的主判準，同時適用於 Notion vs Obsidian 分工、Heptabase 退訂、rich text 放棄

## 對 Simon 的應用

- **每天的日記流程**：打開 Claude Code 進入 /Simon-Journal 目錄即可直接寫，不需要再貼回 Notion；跨裝置（手機、電腦、網頁）體感一致
- **設計方法論可重用**：Q5 反推、Sentinel、目錄即觸發、純接收 + 即時落地四個方法未來設計其他 skill 都能拿來用
- **系統分工穩固**：Notion = 日記 + 任務 + 復盤，vault = WIKI 知識，Heptabase 退訂（每年省 3,455 元）
- **Claude Code 能力邊界**：清楚知道 MCP 不支援封存、rich text 可寫入、需自行做 fetch-then-replace 冪等、API 會回 502 要重試，未來設計任何 Notion skill 都能繞過這些坑

## 原文要點

## 歷史脈絡

- 三年前試用 Heptabase Journal 約三個月後棄用
- 近期用 ChatGPT GPTs「AI 生產力日記助手」，產出手動貼回 Notion
- 2026-04-22 起想搬到 Obsidian + Claude

## 04-23：Obsidian-as-sink 假設

- 原想 vault 當日記 sink、Claude 總結、Notion 鏡像
- 動機偏「資料主控」：Markdown + Git + Graph view
- 討論 cross-link、Approach 1b（Obsidian 主 / Notion 鏡）

## 04-24 早盤：動機反轉

- 比對 ChatGPT / Gemini / Claude 三家建議，共識：Obsidian 當 sink 會新增流程阻力
- 動機優先序改為「簡化流程 > 資料主控」
- 決策：Notion = 日記 sink、vault = WIKI、Heptabase 退訂

## 04-24 晚盤：design session

- Q5 反推法從 5 篇舊日記定出所有規則
- Simon 三次拒絕過度工程：建測試 DB（→ Sentinel）、跨裝置觸發詞（→ 目錄即觸發）、導師名單被動（→ 主動反問）
- 日記區保持敘事溫度：三次拒絕結構化增強（自動勾 checklist、Action 列表、title 情緒 emoji）
- 定出 8 位導師池、sentinel 測試法、C9 自動觸發、C7 即時落地、C11 補寫、C12 互動逃脫
- skill-spec.md + notion-write-test-plan.md 寫完

## Phase 1 ~ 5 測試（2026-04-24 全綠）

- Phase 2.3：MCP 不支援封存，清理改方案 B 手動
- Phase 3.6：rich text round-trip 可行 + UI 渲染正確，但 Simon 選純文字方向 A
- Phase 4.7 + 5.4：old_str 找不到回 validation_error，skill 要 fetch-then-replace
- Body bullet 用 `-`、Property bullet 用 `•`
- Callout base64 data URI 會被截斷，模板 icon 改 emoji / svg 路徑
- API 會回暫時 502，需重試機制（§6.5）

## 2026-04-26 首次自試 + C6 bug 修正

場景：Simon 全天透過 LINE bot 寫日記內容（4 段），晚上進 `/Simon-Journal` 跳 `總結今日日記` 試圖跨 session 接上總結。

遇到的 bug：助手以為當日頁不存在，提出三個錯誤選項。

根因：助手誤用 `notion-search`（語意搜尋）去找 2026-04-26 頁；但當日頁標題是 Notion 自動化建的「@今天」模板，標題本身不含日期字樣，semantic search 撈不到。

修正：C6 改寫顯式「不要用 notion-search」+ 「唯一正確方法用 query view + client-side date filter」+ 把本次自試當反面案例寫進 spec。

## 原始連結

無原文 URL（原創設計記錄）。

本機 docs：
- `/home/simon/projects/Simon-Journal/CLAUDE.md`
- `/home/simon/projects/Simon-Journal/docs/skill-spec.md`
- `/home/simon/projects/Simon-Journal/docs/notion-write-test-plan.md`

vault 端：
- `/home/simon/vaults/SimonVault/Projects/Simon-Journal/README.md`
