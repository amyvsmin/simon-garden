---
title: "LM Studio"
slug: lm-studio
aliases: [LM Studio, lmstudio, 本機 AI GUI, LM Studio 圖形介面]
category: AI／生產力
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

## 定義

對初學者友善的本機 LLM 圖形介面工具，提供模型搜尋／下載／管理／聊天／MCP 整合／程式碼助手後端等完整工作流；對比 Ollama 走 CLI 路線，LM Studio 走 GUI 路線、降低本機 AI 入門門檻。

## 關鍵面向

- 模型清單：內建熱門模型清單、可按下載次數／受歡迎度排序、綠色標籤代表「你的電腦跑得動」
- 設定面板：Context Length（記憶長度）／System Prompt（常駐規則、可設「用繁體中文回覆」「不知道就說不知道」）
- 三能力標籤：視覺／使用工具／推理；MCP 接入靠「工具」標籤的模型
- Branch 功能：聊天中切分支保留前段 context、用來測不同提示詞不弄亂主對話
- 檔案上傳：可上傳 Word／CSV／圖片／音訊讓本機 LLM 分析、不離開本機
- MCP 接入：右側設定面板「工具」標籤、輸入 MCP server 設定資訊（需 Node.js 安裝、Brave Search／檔案管理皆可）
- 開發者頁面：可開本地 OpenAI 相容伺服器、讓 VS Code Continue 擴充等外部工具串接

## 應用場景

- Simon 工作場景：本機 Gemma 4 POC 主要介面、教同事用 GUI 比 Ollama CLI 友善
- Simon 工作場景：System Prompt 設「繁體中文回覆」避免簡體混入、對齊全域 CLAUDE.md §3 語言要求
- 一般場景：上傳會議記錄 Word 檔請本機 AI 改成 email、敏感內容不離本機

## 相關概念

- [[local-llm]]：LM Studio 是本機 LLM 的主要 GUI 工具
- [[mcp]]：LM Studio 端 MCP server 整合方式
- [[cli]]：對比 Ollama 純 CLI 路線、LM Studio 屬 GUI 取向

## 尚未解決的疑問

- LM Studio 跟 Ollama 同時裝會不會衝突？模型檔可否共用？
- Windows 跟 WSL 端各裝一份是否合理

## 來源（自動維護）

- [[2026-05-12-gemma-4-lm-studio-local-ai]]
