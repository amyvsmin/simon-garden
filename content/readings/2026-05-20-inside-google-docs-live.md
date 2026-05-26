---
title: "【Google I/O 2026】Docs Live 來了！口頭整理思緒，秒成正式文件"
date: 2026-05-20
type: 來源分析
url: "https://www.inside.com.tw/article/41333-google-io-2026-docs-live"
inbox-id: "366f85da-554f-81d6-b885-cee169bf89f2"
concepts: [docs-live]
projects: []
impact: low
created: 2026-05-20
---

## 為什麼讀

從 Notion inbox 帶進來、share.google 短連結指向 INSIDE Sisley 報導；Simon 在 I/O 2026 期間追 Google AI 戰略動作、Docs 是日常會接觸的 Workspace 元件、值得掃描看是否動既有寫文件流程。同日 inbox 還有 bnext 的全景版（[[2026-05-20-bnext-google-io-2026-gemini-spark]]）、各看一篇。

## 摘要

Google 在 I/O 2026 推出 [[docs-live]]、把 Gemini 語音模型整合進 Google 文件、讓使用者用自然口語語速直接編輯文件、不再需要精準輸入提示詞。三大特色：跨服務擷取（從 Drive 抓履歷、從 Gmail 抓活動時地細節塞入文件）／語音排版與樣式控制（「格式化成表格」「設為粗體」）／內容創意增強（請 AI 想譬喻、把生硬段落變生動）。預計 2026 夏天先給 Google AI Pro 與 Ultra 訂閱者、免費 Workspace 用戶未涵蓋。對使用者工作流意義在於：寫公司報表、會議記錄、簡報初稿從打字 + prompt 工程門檻、轉為「能說話就會用」、降低 AI 文件協作的使用門檻。文章未提供具體價格、僅標示訂閱方案名稱、屬 I/O 2026 短訊類報導。

![[2026-05-20-inside-google-docs-live-docs-live.png|275]]

## 核心概念

- [[docs-live]]：本支報導主題、Google Docs 內語音 AI 編輯功能、跨服務擷取 + 排版控制 + 內容創意三類操作

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

兩類分開列：

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- ⏳ **暫無**：Docs Live 是 Google 端封閉產品、不影響 Claude Code 工作流；無 rules／skill 可調

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- ⏳ **2026 夏天上線時試一次**：Simon 已是 Google AI Pro 訂戶（透過 Google One Pro Plan？或 Gemini Advanced 訂閱？）、確認自己方案有沒有涵蓋 Docs Live；寫公司資安 KPI 月簡報、ISO 27001 政策文件時口頭試用、跟既有 Word／Notion 流程比效率
- ⏳ **公司資料隱私確認**：公司資安政策／ISO 文件草稿能否餵 Google AI（B2B Workspace 可能預設不啟用跨服務擷取）；先跑個人案例、公司案例需內部走 InfoSec review
- ⏳ **跟 [[gemini-spark]] 一起評估**：Spark 是跨 app 代理人入口、Docs Live 是 Docs 內語音層；兩者搭配最大化、但都要 Ultra／Pro 訂閱、Simon 可能要重新比 Google AI Pro vs Anthropic Claude Max 5x 訂閱組合（[[subscription-vs-api-cost]]）

## 原文要點

- **發布脈絡**：Google I/O 2026 大會 2026-05-19 舉行、Docs Live 是 Gemini 在 Workspace 落地的重點之一
- **過去痛點**：需要精準文字提示、AI 才知道怎麼幫忙改 Docs；門檻在 prompt 工程能力
- **解決方式**：使用者用「白話傾吐」腦中所有想法、Gemini 自動完成草稿撰寫與整理；介面從「side panel 對話」升級為「主要編輯介面」
- **三大特色**：
  1. **跨服務擷取資訊**：語音命令從 Google Drive 抓履歷、從特定 email 擷取活動時間／地點塞入文件
  2. **語音控制排版**：「格式化成表格」「設為粗體」直接下指令
  3. **內容創意**：口頭請 AI 想譬喻、讓生硬內容更生動
- **上線時程**：2026 夏天、率先給 Google AI Pro 與 Ultra 訂閱者
- **未提供細節**：具體價格、語音識別語言支援度、企業帳號隱私邊界、跟既有 Gemini in Docs 的差異
- **官方語**：「Docs Live 大幅降低了操作門檻、讓使用者能以最自然說話的速度與方式來完成文件編輯」

## 原始連結

- https://www.inside.com.tw/article/41333-google-io-2026-docs-live

## 落地動作與效益

### A 類芙莉蓮優化

**有優化**：無

**不優化**：

- ❌ **整篇無可套到 Claude Code／skill／rules／CLAUDE.md／user-memory 的優化點**
  - 原因：Docs Live 是 Google 端封閉產品、跟本地 Claude Code 工作流無交集；屬於「該追蹤但不該動規則」類 reading

### B 類 Simon 個人動作（後續維護狀態）

- ❌ **2026 夏天上線時試一次 Docs Live**：Simon 2026-05-23 評估後決定不做；公司資料隱私不便餵 Google、個人寫作場景靠 vault + Claude Code 已順、無實際痛點
- ❌ **公司資料隱私確認**：B 類 #1 ✗ 後連帶不需要
- ❌ **跟 [[gemini-spark]] 一起評估**：併 reading 2 落地紀錄處理、不重複
