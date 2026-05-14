---
name: CLI → API → MCP → Browser Use 優先順序
aliases: [CLI → API → MCP → Browser Use 優先順序, CLI API MCP 優先順序, AI 操控軟體優先順序, AI tool priority, 雷蒙協定優先順序, raymond protocol priority, ai-controls-software-priority]
category: AI
status: active
confidence: 已驗證
created: 2026-05-14
last-queried: ""
query-count: 0
---

# CLI → API → MCP → Browser Use 優先順序

## 定義

AI 操控軟體時的工具優先順序——CLI > API > MCP > Browser Use、底層協定優先、瀏覽器自動化是最後手段。出處：雷蒙迷你課 2-3「把工具授權給 AI、組合出你的每日工作流」+ 部落格長文 `how-ai-controls-software-api-cli-mcp-browser-use`。Simon 加上 CLI 在前的分層細化、寫進 user-memory `feedback_tool_awareness`。

## 關鍵面向

- **CLI 第一**：能用 `gh`／`git`／`curl`／`wrangler`／`ffmpeg`／`python3` 一行解決就先用；輸出可控、不吃脈絡、可組合 pipe
- **API 第二**：CLI 不夠時用 REST／SDK（含 `gh api`、`curl` 帶 token）；仍是純文字、可控
- **MCP 第三**：需要長期語意搜尋（Notion semantic search）、跨對話狀態（Calendar 帳號授權）、或工具語意比 CLI 更貼近領域（Gmail label／thread）才用；**每個 MCP server 都吃脈絡、有斷線風險**、不無腦推
- **[[browser-use]] 最後**：只有純人類網頁（沒 API／CLI 入口、需要 JS render、需要互動式登入）才走；遠端 setup headless（看不到視窗）
- **雷蒙原版只到 3 層**：API > MCP > Browser Use（出處部落格長文）；Simon 補 CLI 在前是 IT 工程師視角的細化、本概念採用 Simon 版

## 應用場景

- **正例（2026-05-12 對話實踐）**：抓雷蒙課私有 repo markdown、先試 `curl` raw URL → 失敗（私有）→ `gh api contents` → base64 解出、全程沒碰 MCP；對應「能用 CLI 不用 MCP」
- **正例（2026-05-04 日本旅行記帳案例）**：雷蒙寫日本記帳工具直接呼叫 Gemini API、沒走 Browser Use 模擬日文 OCR 網站
- **反例（要避免）**：抓 GitHub markdown 走 firecrawl MCP（吃脈絡 + 慢）、查 git history 走 MCP filesystem（不如 `git log`）、簡單 HTTP request 包成 MCP server
- **Simon 工作場景**：公司 IT 端 Omnissa／Veeam 都有 API、應該避開 Browser Use；Notion 自動化先想 API／CLI、再考慮 MCP

## 相關概念

- [[api]]：第二優先層、本條的核心
- [[mcp]]：第三優先層、實際情境下最常用但要克制
- [[browser-use]]：第四優先層、最後手段
- [[claude-md-reflexive-law]]：本優先順序就是寫進 CLAUDE.md／feedback 的反射律具體應用

## 尚未解決的疑問

- CLI 跟 API 的真實切換條件？某些任務 CLI（`gh api`）本質就在呼叫 API、邊界模糊；目前 Simon 用法是「能一行 shell 解決就 CLI、要寫腳本／處理 response 才 API」、邊界靠經驗
