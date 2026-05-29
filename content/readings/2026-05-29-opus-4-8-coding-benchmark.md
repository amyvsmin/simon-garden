---
title: "I Tested NEW Opus 4.8 on Four Projects (Updated LLM Leaderboard)"
date: 2026-05-29
type: 來源分析
url: "https://youtu.be/urmLUZbthcM"
inbox-id: "36ff85da554f816a96b5ef33ff4c5bd6"
concepts: [claude-code-effort-level, ai-evaluation-rubric, subagents, claude-code]
projects: []
impact: high
transcript_source: "whisper-large-v3"
tldr: "AI Coding Daily 用四個真實專案、各跑五次自動化測試比較 Opus 4.8 與 4.7。結論：4.8 medium 已達 4.7 high 的滿分水準、更快也略便宜，差距不大但同價位沒有不升級的理由。benchmark 太簡單已測不出差異、作者打算改設計更難的測試。"
stage: evergreen
icon: "⚡"
created: 2026-05-29
---

## 為什麼讀

Simon 指定收這篇，當作 yt-fancy-transcript v4.0（本地 Whisper 收錄管線）的端到端驗證樣本。主題本身也正在追——Opus 4.8 正是 Simon 現在每天用的模型，這支影片用客觀測試量化了它跟前一代 4.7 的實際差距。

## 摘要

AI Coding Daily 頻道用自己公開的「LLM Leaderboard」方法，實測 Opus 4.8 的程式能力：四個真實專案（三個後端、一個前端），每個專案用同一段 prompt 連跑五次，靠自動化測試（後端 PHP 測試、前端 Playwright 測試）判定全過才得分。結果 Opus 4.8 medium 拿下 20 項任務滿分，等於追平上一代必須開到 high 力道才能達到的成績，而且平均更快、在 React/TypeScript 專案上速度幾乎快一倍、token 用量略低。作者另外觀察到三個 4.8 的行為差異：對 React 反應更快、會「主動糾正」prompt 作者寫錯的測試值（創意型思考，4.7 不會）、能正確讀懂冷門套件文件避開 N+1 查詢。他也誠實點出：這批 benchmark 對這一代模型已經太簡單、medium 全過測不出高下，下一步要設計更難的測試。影片尾段提到 Opus 4.8 主打跨長 session 維持專注 + dynamic workflow 編排 subagent，但作者尚未測。

<p align="center"><img src="assets/covers/2026-05-29-opus-4-8-coding-benchmark-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[claude-code-effort-level]]：Claude Code 的推理力道（low／medium／high）是品質旋鈕。這支影片的主軸就是力道——4.7 在幾個簡單專案上 medium 會出小差錯、得開到 high 才滿分；4.8 medium 就直接滿分。意思是模型升級等於「同樣力道、更高品質」，原本要靠高力道補的事，新模型用 medium 就做到了。作者也提醒升級後重啟 Claude Code 會自動跳到 high 力道，記得確認自己停在哪一檔。
- [[ai-evaluation-rubric]]：作者比較模型的方式是一份可自動執行的評估量表——不靠人工打分，直接拿自動化測試當判準（全過得一分、每專案重跑五次取平均）。程式碼領域的 rubric 有對錯客觀答案、可完全自動，但作者也踩到限制：任務一旦簡單到所有模型都全過，rubric 就失去區分力。
- [[subagents]]：影片尾段提到 Opus 4.8 官方主打兩件事——跨長時間 session 維持專注、以及一個叫 dynamic workflow 的功能，讓你輕鬆編排多個 subagent 處理更大的任務。作者還沒實測，但這指出模型演進的方向是「扛更大、更長的任務」。
- [[claude-code]]：整個測試都在 Claude Code 環境裡跑，包含用 `/usage` 看單次 session 花費、用官方名稱 `claude-opus-4-7` 手動切回舊模型做對照（升級後 `/model` 清單預設只剩 4.8）。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- **術語表缺口（已驗到）**：這支英文影片把「Claude」聽成「cloud」（cloud code）、「Codex」聽成「codecs」，兩個都不在 `transcript-glossary/ai.yaml`。建議把 `Claude`→[`cloud`]、`Codex`→[`codecs`]、`OpenCode`→[`open code`]、`LLM`→[`lms`] 加進 ai.yaml。已照 KW γ Step 1c 寫成 glossary 提議進 changelog，等 Simon 確認再改 yaml。
- **腳本層發現：中文 initial_prompt 拖累英文開頭**：`yt-transcript.py` 的 `GENERIC_PROMPT` 是中文，對英文影片造成偏置——這支前 3 分鐘逐字稿全小寫無標點，第 31 行後才恢復正常。可考慮依偵測語言切換 initial_prompt（英文影片給英文版術語提示），或乾脆對英文來源不帶中文 prompt。屬腳本品質優化、非阻塞。

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- 既然 4.8 medium 已達 4.7 high 水準，下次跑「中等難度」任務時可以實際感受一下 medium 夠不夠用，當作自己對力道檔位的校準（不是要你預設降檔，是給個重新評估的時機點）。
- 影片提到的 dynamic workflow（編排多個 subagent）剛好對應你最近在玩的多代理工作流，值得之後親自試一輪看實際效果。
- 作者用 `/usage` 量每次 session 的實際花費來做成本對照——這個習慣可以借來追自己的 Claude Code 用量。

## 原文要點

- **測試方法**：四個真實專案（三後端一前端），每個專案同一段 prompt 連跑五次取平均；判分靠自動化測試——後端 PHP 測試驗邏輯、前端 Playwright 測試驗畫面，全過才得一分，滿分 20。
- **四個專案**：① 建一個有特定需求的 API；② Filament 後台面板、要按最佳實務正確使用 PHP enum class（冷門套件，模型訓練資料少）；③ 一個全新冷門套件，要照 README 正確使用、避開 N+1 查詢；④ React + TypeScript 產出七個指定元件、七個情境不能漏。
- **結果**：Opus 4.8 medium 拿 20/20 滿分，追平 4.7 high。React 專案速度幾乎快一倍、token 略省（作者用 $20 方案、每段 prompt 約佔五小時額度的 3%）；建完整 API 那個專案花費約 US$1.25。
- **三個行為差異**：① React 反應更快（可能 4.8 在 React/TS 上多訓練）；② 會「主動糾正」——測試期待值寫 `review`，4.8 自己改成更口語的 `in review`，導致測試掛掉但其實是模型在糾正作者，4.7 完全不會這樣（4.8 在五次中有四次這樣做）；③ 能讀懂冷門套件長 README 正確避開 N+1，4.7 兩次失手。
- **誠實的限制**：medium 全過代表這批 benchmark 對這代模型太簡單、測不出高下；長任務難自動評估（缺確定性測試只能靠 vibes），作者打算設計更難的 benchmark。
- **跨模型對照**：作者請 Codex 幫忙比對 4.7 vs 4.8 的執行 log（模型分析文字比人快）；結論是沒有驚人差異，4.8 看起來更乾淨更快、4.7 偶爾做多餘的驗證。便宜模型與中國模型（作者點名 Kimi、MiMo 表現相對好）較常失手。
- **官方賣點（未測）**：Opus 4.8 主打跨長 session 維持專注 + dynamic workflow 編排 subagent；同價位下作者結論是「沒有不升級到 4.8 的理由」。

## 原文全文

## 原始連結

- https://youtu.be/urmLUZbthcM

## 落地動作與效益

收這篇時本身也是 yt-fancy-transcript v4.0 收錄管線的端到端驗證（Task 14），下列是討論後的處理結果。

**A 類芙莉蓮優化**

- ✅ **initial_prompt 語言感知修正**：英文影片前 3 分鐘全小寫無標點，根因是 `yt-transcript.py` 寫死中文 prompt 偏置 Whisper。已改 `yt_transcript_lib.py` 的 `initial_prompt_for(lang)`：auto 模式先偵測語言、zh 用中文 prompt、其餘用帶標點的英文 prompt（並塞 Claude Code／Codex 術語提示從源頭降誤聽）。3 個單元測試 + 真影片重跑驗證開頭恢復標點。commit `ce9f9cd`（`~/.claude` repo）。效益：之後英文 AI 影片轉錄品質提升、不再需要靠下游補大量標點。
- ❌ **不把誤聽術語硬加進 glossary**：`cloud code→Claude Code`、`codecs→Codex` 等誤聽，討論後決定不寫進 `transcript-glossary/ai.yaml`。理由：`cloud`／`codecs` 是一詞多義的常用字，固定字串對應會誤改（「cloud computing 雲端運算」被改成「Claude 運算」）。改靠芙莉蓮收錄當下的上下文判斷修正。已存規則記憶 `feedback_glossary_context_over_hardcode`，往後只對唯一解的領域術語才提議入表。

**B 類 Simon 個人動作**（Simon 後續自行維護狀態）

- ⏸ 下次跑中等難度任務時感受 medium 力道夠不夠用，當作對 effort 檔位的校準
- ⏸ 親自試一輪 Opus 4.8 的 dynamic workflow（編排多個 subagent），對照最近在玩的多代理工作流
- ⏸ 借用作者用 `/usage` 量每次 session 花費的習慣，追自己的 Claude Code 用量

**收錄管線旁支結果**

- 舊備援腳本 `yt-gemini-transcribe.py` 已廢除（commit `f8d20f0`、`~/.claude` repo）；v4.0 後手鏈不再用 Gemini。
- NotebookLM 多媒體：音訊 + 簡報已下載到 `C:\Users\User\Documents\NotebookLM\`；影片生成成功但 MCP 下載失敗（DASH 串流），需從 notebook 網頁手動抓。
