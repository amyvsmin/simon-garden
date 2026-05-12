---
name: MCP (Model Context Protocol)
aliases: [Model Context Protocol, AI USB-C]
category: AI
status: active
confidence: unverified
last-queried: 2026-04-21
query-count: 1
notion-page-id: 349f85da-554f-8102-b895-fc351ae61f09
---

# 定義

AI 模型與外部工具之間的標準化協議，讓 Claude 能透過統一介面串接 Figma、Notion、Gmail、Calendar 等服務，被稱為「AI 世界的 USB-C」。

# 關鍵面向

- **標準化**：統一協議，各服務方各自實作 MCP server
- **可組合**：多個 MCP server 可同時掛載，動態擴展 AI 能力
- **安全邊界**：權限控制由 MCP client（如 Claude Code）管理，每次工具呼叫可要求使用者授權
- **生態系**：Anthropic 推動的開放標準，社群與官方皆有 server 實作
- **傳輸模式**：stdio（本地）、SSE / HTTP（遠端）
- **跟 API 的取捨（雷蒙觀點）**：MCP 是有人幫你包好的 API 子集、功能權限常少於原生 API；Notion 官方 MCP 跟 Notion API 比缺很多、WordPress 也是；功能要全開時最終還是回到 [[api]] 自己寫
- **裝太多會吃 context window**：每個 MCP server 在 Claude session 載入時都佔 token、無腦多裝會榨乾 AI 記憶空間
- **判斷法**：要新工具能力時直接問 AI「這個工具在 MCP 跟 API 上、功能跟使用上的差異？」、AI 評估後給比較表

# 應用場景

- Simon 工作場景：已掛載 Notion / Gmail / Calendar / Drive / Playwright / Firecrawl / Filesystem 等 MCP；Knowledge Wiki 的 Notion 寫入完全走 MCP
- 一般場景：企業內部工具整合、自動化流程串接、AI 代理與現有系統對接

# 相關概念

- [[claude-code]]：MCP 的主要宿主平台，CC 啟動時載入已註冊的 MCP server
- [[skill]]：Skill 本身不是 MCP，但 Skill 的執行經常呼叫 MCP 工具
- [[api]]：MCP 是 API 的包裝層、不是替代品
- [[cli]]：CLI 也常是 API 的包裝、跟 MCP 互為替代選項

# 尚未解決的疑問

- 企業版 MCP 的權限治理（誰能掛哪個 server、稽核？）
- 多 MCP 並用時的 token 消耗與延遲如何量測
- 自己寫 MCP server 的最低成本實作模式

# 來源（自動維護）

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-05-02-haiuncle-claude-code-intro]]
- [[2026-05-12-raymond-ai-controls-software]]
