---
name: 訂閱不共吃 API（Max ≠ Claude API）
aliases: [Claude 訂閱, API 計費, Max 訂閱, Anthropic 計費結構]
category: AI
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34df85da-554f-8102-8ae3-c426a160ac11
---

# 定義

Claude Pro / Max 訂閱（個人月費）與 Claude API（按 token 計費）是兩個獨立產品線，計費完全分開；訂閱不能拿來打 API，API 帳單跟訂閱不互相 cover。

# 關鍵面向

- **Claude Pro / Max**：用在 Claude.ai、Claude Code；月費固定；有 rate limit 但不按 token 算
- **Claude API**：在 console.anthropic.com 申請開發者帳號；按 input / output token 計費；給程式碼或第三方應用呼叫
- **共通**：底層模型一樣（Opus / Sonnet / Haiku），但 runtime 與配額完全分開
- **三 tier 月費（一天總結 1 次）**：Sonnet 4.6 + medium thinking ~100 NTD / Opus 4.7 + medium ~470 NTD / Opus 4.7 + xhigh thinking ~1500 NTD

# 應用場景

- Simon 工作場景：原本 LINE bot 規劃要用 Claude API 跑總結，月費另算。Max 訂閱涵蓋不到。最終決策避開 API、把 AI 留在 Claude Code 訂閱涵蓋範圍（版本 B）
- 一般場景：任何把 LLM 接到 webhook、cron、或自動化的場景

# 相關概念

- [[claude-code-vs-api-split]]：兩種 runtime 的分工
- [[ai-tier-trickledown]]：「同品牌、不同層級、計費／功能不互通」mental model 相似

# 尚未解決的疑問

- Anthropic 將來是否會推出「訂閱可換 API 額度」的方案

# 來源（自動維護）

- [[2026-04-25-line-bot-journal-design]]
