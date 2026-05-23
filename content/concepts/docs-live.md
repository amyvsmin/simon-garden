---
title: "Docs Live（語音文件編輯）"
slug: docs-live
aliases: [Docs Live, Google Docs Live, 語音文件編輯, voice document editing, voice-controlled docs]
category: AI
confidence: 待驗證
created: 2026-05-20
query-count: 0
---

## 定義

Google 在 I/O 2026 推出的 Google 文件語音 AI 編輯功能；使用者用「白話傾吐」自然語速說話、Gemini 直接完成草稿撰寫、排版、跨服務資訊擷取與內容修飾、不必精準下指令或寫提示詞。

## 關鍵面向

- **三類語音操作**：跨服務擷取（從 Drive 拉履歷、從 Gmail 拉活動時間地點）／排版與樣式控制（口頭「格式化成表格」「設為粗體」）／內容創意（口頭請 AI 想譬喻、活化生硬段落）
- **痛點換位**：跟 [[gemini-spark]] 同方向、把 [[ai-task-execution]] 範式推進到 Docs 內部；過去 prompt 工程門檻轉為「能說話就會用」
- **訂閱方案綁定**：2026 夏天先給 Google AI Pro 與 Ultra 訂閱者；免費 Workspace 用戶未涵蓋
- **跟 Spark 的關係**：Spark 是跨 app 代理人入口、Docs Live 是 Docs 內部的語音介面；兩者都靠 [[gemini-flash]] 撐
- **跟 Gemini Omni 的差別**：Omni 產影片／圖像、Docs Live 處理文字文件編輯；同屬 [[ai-task-execution]] 但模態不同

## 應用場景

- Simon 工作場景：寫公司資安 KPI 月簡報、ISO 27001 政策文件草稿時、口頭整理思緒比打字快；但需要繁中支援度與本地隱私確認（公司資料能不能餵 Google AI）
- 一般場景：會議結束後口頭講「把剛才的會議重點抓成表格、Action items 抽出來」、Docs 自動排版；不熟打字長者／視障使用者降低門檻
- 反場景：嚴謹文件（合約、技術 spec）仍需精準措詞，語音口語化稿仍要人手修

## 相關概念

- [[ai-task-execution]]：Docs Live 是「AI 從問答到執行」在文件編輯場景的落地
- [[gemini-spark]]：同 I/O 2026 發布、Spark 是跨 app 代理人入口、Docs Live 是 Docs 內語音層
- [[gemini-flash]]：Docs Live 推測由 Flash 撐速度（語音對話需即時回應）
- [[gemini-omni]]：同 I/O 2026 發布、跨模態生成的姊妹產品

## 尚未解決的疑問

- 繁體中文語音識別準確度、台灣口音支援度
- 公司／企業帳號隱私邊界（B2B Workspace 是否預設關閉跨服務擷取）
- 跟既有 Gemini in Docs 的差異（Gemini 已可在 Docs 內側欄協作、Docs Live 是把 Gemini 升級成主要介面？）
- Pro 跟 Ultra 之間額度差異是否影響語音長度／頻率

## 來源（自動維護）

- [[2026-05-20-inside-google-docs-live]]
