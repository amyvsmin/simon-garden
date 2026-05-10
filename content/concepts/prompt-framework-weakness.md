---
name: 提示工程框架死穴
aliases: [Prompt Engineering, CoT, ToT, ReAct]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-818c-ad2b-cb70d2c5f486
---

# 定義

精準掌握 CoT、ToT、ReAct 三種提示工程框架各自的致命弱點：CoT 是骨牌效應、ToT 是 token 消耗大、ReAct 是過度依賴外部工具 API 不穩。

# 關鍵面向

- CoT（Chain of Thought）：步驟之間錯一步全錯
- ToT（Tree of Thought）：探索分支爆炸，token 飆高
- ReAct（Reason + Act）：依賴外部工具 API，工具掛了整套停

# 應用場景

- Simon 工作場景：Claude Code 自架環境、n8n AI Agent、KW 收錄流程設計都可選對提示策略避開死穴
- 一般場景：LLM 應用開發者、prompt engineer

# 相關概念

- [[consultant-mindset]]：選 prompt 框架是顧問決策
- [[decision-triangle]]：CoT / ToT / ReAct 各踩三軸的不同點

# 尚未解決的疑問

- 混合框架（CoT + ReAct）的最佳組合條件

# 來源（自動維護）

- [[2026-04-29-ipas-ai-planner-2026-strategy]]
