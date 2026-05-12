---
name: API（應用程式介面）
aliases: [API, Application Programming Interface, 應用程式介面, 程式介面]
category: AI
status: active
confidence: 已驗證
created: 2026-05-12
last-queried: ""
query-count: 0
---

# API（應用程式介面）

## 定義

讓程式可以直接呼叫另一個程式的標準化接口。GUI 是給人類點按鈕用的介面、API 則是把同一個動作回到本質：程式跟程式之間用結構化資料直接溝通，省去模擬人類操作的繞路。

## 關鍵面向

- **速度極快、穩定度極高**：直接走資料層、沒有 UI 渲染等待、改版時介面變但 API 規約多半保留
- **AI 操控軟體優先序的第一名**：能用 API 就不用 MCP；能用 MCP 就不用 Browser Use（雷蒙實戰結論）
- **覆蓋度**：主流服務（Notion／Google／WordPress／GitHub／Slack／Discord）幾乎都開放 API
- **常見死路**：抓「別人的」社群貼文（Facebook、Threads）通常沒對外 API、必須走 Browser Use
- **vs MCP 取捨**：MCP 是包好的 API 子集、功能權限常少於原生 API；Notion／WordPress 雷蒙最終還是回去用 API、因為功能全開

## 應用場景

- Simon 工作場景：Claude Code 經 MCP 操作 Notion 是 API 包好的、但 KW γ 流程裡的 Notion 寫入本質還是走 Notion API；公司 IT 端 ISO 27001 資產盤點未來考慮接 Notion API + 自動化、避免手動填欄位漏掉；Veeam／Omnissa／Silverfort 整合也優先看 API
- 一般場景：自動化串接、AI agent 工具能力擴充、資料 ETL、企業內部系統整合

## 相關概念

- [[cli]]：API 的人性化版本、語法用單字而非函式呼叫
- [[mcp]]：把 API 包成 AI 可直接挑用的工具包
- [[browser-use]]：API 真的沒得用才走的最後手段

## 尚未解決的疑問

- API rate limit 在 KW γ 批次消化時的影響量化（Notion 免費方案每秒 3 次）
- 何時值得寫 thin wrapper 把 API 包成本地 CLI、Claude Code 用起來更順

## 來源（自動維護）

- [[2026-05-12-raymond-ai-controls-software]]
