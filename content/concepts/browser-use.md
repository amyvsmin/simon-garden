---
name: Browser Use（瀏覽器自動化）
aliases: [Browser Use, 瀏覽器自動化, Playwright, Puppeteer, agent-browser, 桌面 App 控制]
category: AI
status: active
confidence: 已驗證
created: 2026-05-12
last-queried: ""
query-count: 0
---

# Browser Use（瀏覽器自動化）

## 定義

讓 AI 模擬人類打開瀏覽器、點按鈕、填表單、截圖的操控方式。技術上常用 Playwright／Puppeteer 框架；延伸版 agent-browser 可控 Electron 架構桌面 App（Slack／Discord／VS Code／Obsidian）靠 Chrome DevTools Protocol（CDP）暴露的偵錯埠口（如 `--remote-debugging-port=9222`）。

## 關鍵面向

- **最慢、最不穩**：發一封電子報走 API 幾秒、Browser Use 要 5～10 分鐘
- **網頁改版即壞**：按鈕位置變、AI 找不到、自動化就斷
- **token 消耗大**：每個截圖／DOM 結構都吃 context
- **正當使用情境**：對方平台沒對外 API（抓別人的 FB 貼文）、企業內老系統完全沒 API／CLI、必須自動化的情況
- **AI 操控軟體優先序的最後一名**：能用 [[api]]／[[cli]]／[[mcp]] 都不要用、Browser Use 是「真的沒其他路」的最後手段
- **agent-browser 變體**：用 CDP 控 Electron App、本質仍是 Browser Use 邏輯、只是宿主從網頁變桌面 App

## 應用場景

- Simon 工作場景：Claude Code 的 Playwright MCP 屬於這類、用在抓沒 API 的網站（公司供應商網頁、政府公告）；遠端開 CC 時 Playwright 強制 headless（看不到視窗）、流程設計要避開需互動的步驟；公司 IT 端 Omnissa／Veeam 都有 API、應該避開 Browser Use
- 一般場景：競爭對手社群監控、爬蟲、UI 測試自動化、無 API 的遺留系統整合

## 相關概念

- [[api]]：第一優先、能用就不要走到這層
- [[cli]]：第二優先、比 Browser Use 快十倍以上
- [[mcp]]：第三優先、已包好的工具集
- [[firecrawl]]（待建）：抓網頁的中介層、比直接 Playwright 更穩

## 尚未解決的疑問

- Playwright MCP headless 模式下、需要登入 session 的網站如何處理 cookie／token 持續性
- agent-browser 控 Electron App 在企業環境的合規風險（軟體授權／資安政策）

## 來源（自動維護）

- [[2026-05-12-raymond-ai-controls-software]]
