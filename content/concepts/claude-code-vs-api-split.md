---
name: 「我」(Claude Code) vs Claude API 分工
aliases: [三個 Claude 形態, 設計師員工分工, Claude runtime 比較]
category: AI
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34df85da-554f-810d-a2f7-c23878f28f60
---

# 定義

Claude 在不同 runtime 有三種形態（Claude Code、API、Claude.ai），三者用同一底層模型但能力與記憶完全不同；設計時用 Claude Code 寫 prompt 食譜、部署後 Claude API 按食譜執行——前者像廚師，後者像機器手臂。

# 關鍵面向

- **設計時用 Claude Code**（「我」）：對話式展開、用 MCP 撈資料、討論架構、寫 prompt、設計 skill
- **部署後用 Claude API**：產出的 prompt 固化在程式碼，由 API 在自動化流程中執行
- **比喻**：Claude Code = 廚師（懂菜、設計食譜）；Claude API = 機器手臂（按食譜做菜，無判斷力）；Workers / 程式碼 = 廚房（送食材、出餐）
- **記憶差異**：Claude Code 透過 CLAUDE.md + memory 累積；Claude API 每次 call 都是孤立的；Claude.ai 用對話歷史

# 應用場景

- Simon 工作場景：LINE bot 後端 Workers code 呼叫 Claude API 跑總結邏輯。設計 prompt 階段用 Claude Code 對話式展開、確認品質、再固化進 Workers 程式碼
- 一般場景：任何「設計 + 自動化」工作流。設計階段用對話式 Claude，產出固化後給 API 在 server / cron 執行

# 相關概念

- [[subscription-vs-api-cost]]：兩種計費結構

# 尚未解決的疑問

- Claude Code 寫死 prompt 後，模型版本升級時 API 那邊如何同步

# 來源（自動維護）

- [[2026-04-25-line-bot-journal-design]]
