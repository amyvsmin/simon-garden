---
title: "doc-to-md（PDF→MD 知識庫轉換工具）"
slug: doc-to-md
aliases: [doc-to-md, PDF 轉 MD, PDF 轉 Markdown, 知識庫轉 MD 工具, doc to md, document to markdown]
category: AI
confidence: 待驗證
created: 2026-05-18
query-count: 0
---

## 定義

李佳達師父班釋出的本機轉檔工具、一鍵把 PDF 轉成 MD 格式進個人知識庫、不依賴 LLM 上下文窗、不花 Token、避免 ChatGPT 直接轉長文會嚴重省略的問題。

## 關鍵面向

- **走本機程式**：用終端機跑 `install.sh` 安裝、Claude 上傳 Skill 觸發；轉檔過程不丟 LLM
- **不受上下文限制**：傳統「PDF 丟 ChatGPT 請它轉 MD」會被 context window 截斷、長文會省略；本機轉檔沒這個問題
- **不花 Token**：純本機運算、token cost = 0；對應 [[markdown-vs-pdf-token-cost]] 20 倍差距的根本解
- **加標籤**：轉檔時可請 AI 加入思考習慣標籤（如 `#問對問題`）、未來搜尋更快
- **圖片限制**：本版只處理純文字、圖片（VLM）下次直播會做專門工具

## 應用場景

- Simon 工作場景：個人技術書／PDF 文件統一走 doc-to-md 進 vault、不直接丟 Claude 整本 PDF；對應 [[token-saving-rules]] 資料降噪原則
- 一般場景：建個人知識庫的 PDF／EPUB 批次處理；研究員整理論文

## 相關概念

- [[skill]]：doc-to-md 本身是 Claude Skill 形式打包
- [[markdown-vs-pdf-token-cost]]：解這個 token 成本問題的工具實作
- [[notebooklm-as-rag]]：另一條 token 卸載路線（外掛 RAG 引擎）；doc-to-md 是本機轉檔、互補

## 尚未解決的疑問

- 工具實際效果跟 ChatGPT 對比的數據
- 跟其他 PDF→MD 開源工具（marker、pymupdf4llm）的差異

## 來源（自動維護）

- [[2026-05-18-li-jiada-skill-pack-install-demo]]
