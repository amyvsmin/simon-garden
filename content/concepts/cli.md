---
name: CLI（命令列介面）
aliases: [CLI, Command Line Interface, 命令列介面, 命令列工具, 終端指令]
category: AI
status: active
confidence: 已驗證
created: 2026-05-12
last-queried: ""
query-count: 0
---

## 定義

在終端機用人類可讀的單字指令操作軟體的介面。介於 [[api]] 跟 GUI 之間：沒有畫面、但語法是英文單字而非函式呼叫，比 API 更貼近自然語言、又比 GUI 穩定。

## 關鍵面向

- **比 GUI 穩定**：App 改版按鈕會搬家、指令格式幾乎不變
- **比 Browser Use 快**：不必開瀏覽器、不必等頁面載入
- **比 API 更適合 AI**：指令是簡單英文單字、AI 寫錯的機率比直接呼叫 API 低
- **AI 時代復興**：原本被視為「工程師專屬」、但 AI agent 用 CLI 比模擬 GUI 點按鈕順太多、CLI 反而是 AI 友善介面的代表
- **延伸**：Obsidian 2026 推出 CLI plugin、Discord/Slack/GitHub 都有官方 CLI、形成「軟體都應該有 CLI」的新預期

## 應用場景

- Simon 工作場景：Claude Code 本身就是 CLI 介面；KW γ 流程裡的 yt-transcript.py、yt-gemini-transcribe.py、sync-garden.sh 都是 CLI；機房管理跑 PowerShell／bash／kubectl 也是 CLI；資安日常 grep / find / less 都是 CLI 過濾命令
- 一般場景：自動化腳本、CI/CD 流程、伺服器運維、開發者工作流

## 相關概念

- [[api]]：CLI 多半是 API 的薄包裝層、優先序略低於 API
- [[obsidian-cli-plugin]]：Obsidian 2026 推出的 CLI 介面、讓 Claude Code 直接呼叫 Obsidian 動作
- [[linux-command]]：CLI 的具體實作形態之一

## 尚未解決的疑問

- 自己用 Click／Typer 把私人 API 包成 local CLI 的投資報酬率
- CLI 跟 MCP 的最佳分界：哪些動作做成 CLI、哪些做成 MCP server

## 來源（自動維護）

- [[2026-05-12-raymond-ai-controls-software]]
