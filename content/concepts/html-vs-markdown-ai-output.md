---
title: "HTML 取代 Markdown 作 AI 輸出格式"
slug: html-vs-markdown-ai-output
aliases: [HTML vs Markdown AI 輸出, HTML 取代 Markdown, AI 原生格式, Thariq HTML 主張]
category: AI
confidence: 待驗證
created: 2026-05-10
---

## 定義

Anthropic Claude Code 工程師 Thariq Shihipar 2026-05 提出的論點：在 AI 工具足夠強大的今天、Markdown 從「最佳輸出格式」變成限制；HTML 因為可互動、可動態渲染、能承載決策介面，是更適合 AI 時代的人機協作格式。論點不是宣判 Markdown 死刑、而是指出在「需要人類確認的關鍵決策時刻」靜態文字牆是設計失誤。

## 關鍵面向

- **三層論點**：(1) HTML 能承載 Claude 能理解的幾乎所有資訊、表達力夠；(2) HTML 文件實際被讀的機率高於 Markdown（動態勝靜態）；(3) HTML 製作有趣、提升投入感跟認知參與
- **核心痛點**：Claude Code CLI 給 10 步驟計畫文件、要改其中一步必須打字描述、腦中先讀完再轉成文字描述、認知負擔極大；Desktop／web 介面只是視覺輔助、本質仍是被動文字
- **替代方案**：每模組一張卡片、選項以按鈕呈現、選完即時更新摘要；決策品質提升因為「真的看到在決定什麼」
- **跟 [[markdown-vs-pdf-token-cost]] 反向**：Markdown 比 PDF 省 token、HTML 又比 Markdown 冗長 3-5 倍；但長對話場景下 HTML 可能反而省（見 [[context-resend-token-paradox]]）
- **五個具體用例**（2026-05-12 NotebookLM 深入解析補）：(1) 探索與企劃：六種版面並排比較；(2) 程式碼／長篇審閱：對比檢視 + 顏色 + 註解；(3) 設計與原型：互動動畫草稿；(4) 研究與學習：論文轉互動學習報告；(5) [[disposable-ui-html]]：30 條待辦變可拖曳看板再匯回文字
- **反建議「不要寫超長 prompt 模板」**：保持「幫我做一個 HTML 檔處理 X」這樣的簡單描述、讓 AI 決定展現方式；真正訣竅是當下清楚知道想解決什麼、不是下了多複雜的指令
- **狀態：待驗證**：Thariq 個人主張、Anthropic 沒有官方背書；Simon 自己的工作流是否適用待驗證

## 應用場景

- Simon 工作場景：跟剛建的 Action「Obsidian Reading 改 HTML 網頁模式」直接對應；KW γ reading 頁從 markdown 改 HTML 是這個論點的具體實作
- 一般場景：AI 工具產出大量計畫／規格／報告需要人類審核時、互動式 HTML 大幅降低認知負擔；對長 markdown 文件閱讀痛苦的工程師

## 相關概念

- [[interactive-confirmation-ui]]：本論點的核心應用場景
- [[disposable-ui-html]]：第五個用例「用完即丟」、最驚豔的具體實作
- [[context-resend-token-paradox]]：本論點對「HTML 太耗 token」反駁的數學基礎
- [[markdown-vs-pdf-token-cost]]：反向比較、形成 PDF→MD→HTML 三層 token vs 表達力光譜
- [[claude-code]]：Thariq 是 CC 工程師、論點直接服務 CC 工作流痛點

## 尚未解決的疑問

- HTML 帶 JS／CSS 的安全風險（XSS、外部 CDN）vs 純文字 Markdown 的安全性如何權衡？
- Markdown 的版本控制／diff 友善度是否值得放棄換 HTML 互動性？

## 來源（自動維護）

- [[2026-05-09-thariq-html-replaces-markdown-ai]]
- [[2026-05-12-notebooklm-html-vs-markdown-deep-dive]]
