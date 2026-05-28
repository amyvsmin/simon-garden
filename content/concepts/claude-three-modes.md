---
title: "Claude 三工作模式（Chat / Cowork / Code）"
slug: claude-three-modes
aliases: [Claude 三模式, Chat Cowork Code, Claude 工作模式, Claude 模式選擇, 三個 Claude 形態, 設計師員工分工, Claude runtime 比較, Claude Code vs API 分工]
category: AI
confidence: 待驗證
created: 2026-05-20
query-count: 0
---

## 定義

AccuHit 2026-04 整理的 Claude 三種工作模式框架：Chat（諮詢對話）、Cowork（協作自動化）、Code（程式開發終端）。三者適用情境不同，分別對應「策略顧問」「自動化執行者」「開發助手」三個角色，選對模式才能發揮 Claude 最大效益。

## 關鍵面向

- **Chat 模式**：傳統對話介面，可存取本機檔案與雲端儲存，適合腦力激盪、情報蒐集、策略諮詢；不直接執行任務，而是提供建議
- **Cowork 模式**：直接操作桌面程式和雲端服務，可平行執行多個任務；使用者可在背景繼續其他工作，透過 connector 串接 Notion 等平台；是三種模式中自動化程度最高的
- **Code 模式**：終端介面，讀取並修改實際檔案；不只限開發者，有基礎軟體概念的非工程師也能使用；Vibe Coding 的主要落地路徑
- **選模式邏輯**：只要問答 → Chat；需要跨平台執行任務 → Cowork；要改檔案 / 寫程式 → Code

## 應用場景

- Simon 工作場景：日常問題諮詢、KB 查詢走 Chat；自動化報表產出、Notion 資料填寫走 Cowork；修 script、跑 KW γ 流程走 Code（Claude Code terminal）
- 一般場景：行銷人員用 Cowork 做內容自動化排程、工程師用 Code 做 Vibe Coding、業務用 Chat 做提案思考

## 相關概念

- [[vibe-coding]]：Code 模式對應的開發風格
- [[claude-code]]：Code 模式的具體工具
- [[ai-task-execution]]：Cowork 模式背後的 AI 範式轉移
- [[subscription-vs-api-cost]]：兩種計費結構

## Claude Code vs API 分工（設計時 vs 部署時）

Claude 在不同 runtime 有三種形態（Claude Code、API、Claude.ai），三者用同一底層模型但能力與記憶完全不同：
- **設計時用 Claude Code**（「我」）：對話式展開、用 MCP 撈資料、討論架構、寫 prompt、設計 skill
- **部署後用 Claude API**：產出的 prompt 固化在程式碼，由 API 在自動化流程中執行
- **比喻**：Claude Code = 廚師（懂菜、設計食譜）；Claude API = 機器手臂（按食譜做菜，無判斷力）；Workers / 程式碼 = 廚房（送食材、出餐）
- **記憶差異**：Claude Code 透過 CLAUDE.md + memory 累積；Claude API 每次 call 都是孤立的；Claude.ai 用對話歷史
- **Simon 場景**：LINE bot 後端 Workers code 呼叫 Claude API 跑總結邏輯。設計 prompt 階段用 Claude Code 對話式展開、確認品質、再固化進 Workers 程式碼

### 分工尚未解決的疑問
- Claude Code 寫死 prompt 後，模型版本升級時 API 那邊如何同步

## 尚未解決的疑問

- Cowork 模式（Claude Desktop connector）目前在台灣的可用性與限制
- Cowork 與 Claude Code 之間的邊界：執行複雜任務時哪個更穩？

## 來源（自動維護）

- [[2026-05-20-accuhit-claude-ai-complete-guide]]
- [[2026-04-25-line-bot-journal-design]]
