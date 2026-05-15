---
name: Claude Code
aliases: [CC, Claude CLI]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 349f85da-554f-8173-a1df-f3f2de223af3
---

## 定義

Anthropic 推出的終端型 AI 助手，運行於本地 shell，具備完整「讀檔、改檔、跑指令、搜資料、串服務」的自主迴圈能力，是 Claude 三大產品線中自主性最高的一端。

## 關鍵面向

- **執行環境**：本地 terminal，需安裝 `claude` CLI；跨平台支援 macOS / Linux / Windows（WSL）
- **自主層級**：最高，可獨立完成多步驟任務；對照 Claude App（單次對話）、Cowork（背景任務）
- **配置檔**：CLAUDE.md（規則）、MEMORY.md（記憶），專案級與使用者全域兩層
- **擴展機制**：Skill、MCP、Hooks、Subagents、Plan Mode、Plugins
- **與開發環境整合**：可在 VSCode / JetBrains 終端內啟動，自然融入日常編輯流程

## 應用場景

- Simon 工作場景：個人自動化（Knowledge Wiki、n8n 輔助設計）、知識庫建置、伺服器維運輔助、證照筆記整理
- 一般場景：寫程式、重構、批次處理、多步驟任務自動化、文件生成

## 相關概念

- [[mcp]]：Claude Code 透過 MCP 連接外部工具，兩者是「平台」與「協議」的關係
- [[skill]] / [[hooks]] / [[subagents]]：都是 Claude Code 之上的擴展機制，各自解決「可重用技能」「確定性觸發」「多代理協作」不同問題

## 尚未解決的疑問

- 跨平台（手機 / 外網）呼叫家裡 Claude Code 的最佳路徑
- 不同產品線（App / Cowork / Code）之間的資料流該如何設計，避免重複

## 來源（自動維護）

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-05-02-haiuncle-claude-code-intro]]
- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
- [[2026-05-02-hermes-agent-vs-openclaw]]
