---
title: Gemini
slug: gemini
type: topic
topic_kind: entity
entity_type: product
status: living
aliases: [Gemini]
created: 2026-07-04
last_updated: 2026-08-15
tags:
  - ai-tool
  - gemini
  - google
  - llm
---

> 實體彙整頁（entity）。把散在多篇 reading 與多個 concept 裡、關於 Gemini 這個對象的東西收攏成一頁：它是什麼、我目前怎麼定位它、它在我知識庫裡的各個切面（連出去、不重抄）、怎麼一路演化、還有哪些沒拍板。深入單一切面的內容留在各自的 concept。

## 一句話身份

Gemini 是 Google 的 AI 核心品牌與代理人生態系統：從單純的聊天機器人，到 2026 年 Google I/O 一口氣推出跨 Workspace 代理入口（Spark）、高速模型底層（Flash）、搜尋層代理人（Information Agent）與多模態影片生成（Omni）四路產品，再加上手機端既有的即時隨行助理（Live），全面推向「不只回答、還會行動」的代理人時代。

## 我的當前定論

- **定位**：Gemini 是 Google 的 AI 主品牌傘，底下分四路各司其職——[[gemini-spark]] 是跨 Workspace 代理人入口、[[gemini-flash]] 是撐起代理人任務的高速模型底層、[[gemini-omni]] 管多模態影片生成、[[gemini-live]] 管手機端即時隨行互動。細節見各自 concept。
- **跟 NotebookLM 互補分工**：[[gemini-live]] 管「行中」即時應對（開鏡頭問路邊植物、翻菜單），NotebookLM 管「行前」資料整合（收藏截圖、討論錄音彙整成筆記本）；這個分工目前只在單一實際案例驗證過，算初步定論。
- **強在哪**：生態深度（8 個 Workspace 服務原生整合）、模型迭代速度（[[gemini-flash]] 三個月內連發 3.5／3.6／3.7 三版，最後一段只隔三週）、隨行即時互動（Live 鏡頭辨識＋翻譯）、診斷式學習功能（Study notebooks 主動抓弱點、排複習順序）。
- **弱在哪／限制**：**旗艦線難產**——I/O 2026 承諾 2026-06 正式上市的 3.5 Pro，到 2026-08-13 發 3.7 Flash 時仍沒有日期，Google 的節奏全押在輕量 Flash 線上。台灣可用性則已明顯改善（見下條），不再是主要限制。Simon 2026-05-23 評估後決定「當前 Claude Code＋Notion＋Obsidian＋Substack 工作流已順、無痛點驅動切換」，這個結論尚未依 2026-07-30 的開放重新檢視。
- **Spark 台灣推定已可用、待實測（2026-08-15 更新）**：2026-07-30 起 Google 把 Spark 開放給 **Google AI Pro** 訂戶、擴及 160 個以上國家，排除清單只有歐洲經濟區、德國、瑞士、英國、奈及利亞，**不含台灣**。Simon 有 Google One AI Pro（月費 650），依此推定他現在開得起 Spark。**沒有任何一份來源逐字列出台灣，這是從排除清單反推、待 Simon 實際開 App 確認。**（Chrome 自動瀏覽這項子功能仍先限美國。）
- **Simon 沒有為 Gemini 單獨付費**，但 Google One AI Pro（650／月）本來就涵蓋 Gemini App 與 Spark；另主要透過 NotebookLM（內建 Gemini）間接受益、目的是省 Claude token。唯一一次把 Gemini 當工具直接接進管線，是拿 Gemini 2.5 Flash 當 KW γ 的 YouTube 轉錄備援，2026-05-29 已隨管線升級到本機 Whisper 廢除。
- **計費邏輯正跟 Claude 同步從「吃到飽」轉向「算力計費」**，是整個 AI 產業訂閱模式轉型的一部分，不是 Gemini 獨有的現象。

## 切面地圖

Gemini 在我知識庫裡被這些 concept 各咬一個角度（一行帶過、深入內容在該 concept）：

- [[gemini-spark]]：跨 Workspace 代理人入口，Tasks／Skills／Schedules 三模組，跑在 Flash 底層。
- [[gemini-flash]]：輕量高速模型家族，Spark／搜尋代理人／Antigravity 的執行引擎，代理人時代的「預設工作馬」。
- [[gemini-omni]]：多模態生成模型，接續 Nano Banana 延伸到影片，含 Avatars 用使用者聲音生影片與 SynthID 浮水印。
- [[gemini-live]]：手機 App 內建的即時多模態隨行助理，鏡頭辨識＋翻譯＋情境任務；跟 NotebookLM 互補分工——NotebookLM 管行前資料整合、Gemini Live 管行中即時應對。

其餘只在 `docs-live`（同日 I/O 發布、Gemini 語音整合進 Google 文件）、`information-agent`（搜尋層代理人姊妹產品）、`notebooklm-as-rag`（NotebookLM 內建 Gemini、互補分工）、`compute-based-pricing`（Gemini 的算力計費機制）裡被提及，不納入本頁切面地圖、避免灌水。

## 演化時間軸

- **2026-04-26／2026-04-29（工具用途）**：Gemini 2.5 Flash 一度是 KW γ 收錄流程的 YouTube 影片轉錄備援路徑（v0.4），直接吃影片產出逐字稿。來源 [[2026-04-26-bonnie-galaxy-a57-review]]、[[2026-04-29-ipas-ai-planner-2026-strategy]]。
- **2026-05-19／2026-05-20（Google I/O 2026）**：Google 一次推出四路產品線打代理人作業系統競賽——[[gemini-spark]] 跨 Workspace 代理人入口、3.5 [[gemini-flash]] 即日全球開放、搜尋升級為 information-agent、[[gemini-omni]] 多模態影片生成；同日 docs-live（Gemini 語音整合進 Google 文件）也發布；訂閱計費同步從「次數上限」轉向算力計費。來源 [[2026-05-20-bnext-google-io-2026-gemini-spark]]、[[2026-05-20-inside-google-docs-live]]。
- **2026-05-26（介面整合）**：Google 把 Gemini（推理執行）、NotebookLM（知識基底）、Gems（固定人設）三層併進同一介面，Gemini 左側新增「筆記本」入口可直接讀 NotebookLM 資料；同時揭露 Personal Intelligence、排定的動作、個人化記憶搬家等隱藏功能。來源 [[2026-05-26-yt-guoyu-gemini-notebooklm-gems-integration]]。
- **2026-05-29（收尾）**：Simon 的 KW γ 收錄管線升級到本機 Whisper（v4.0），原本靠 Gemini 2.5 Flash 當 YouTube 轉錄備援的腳本正式廢除，Gemini 不再是收錄鏈的一環。來源 [[2026-05-29-opus-4-8-coding-benchmark]]。
- **2026-06-10（第一個完整應用案例）**：5/26 介面整合後首個端到端案例——Gemini 查即時資訊、NotebookLM 整合零散資料、Gemini 筆記本＋Canvas 排行程、CSV 匯入 Google My Maps 導航、[[gemini-live]] 當隨行助理，確立「NotebookLM 管行前、Gemini Live 管行中」的分工。來源 [[2026-06-10-pansci-ai-travel-planning]]。
- **2026-06-29（學習新功能）**：Gemini 推出「讀書與學習」（Study notebooks），從被動問答升級為主動診斷弱點、拆短課程、進度儀表板的讀書教練，並串接 NotebookLM 產 Flashcards／影片摘要。來源 [[2026-06-29-gemini-study-notebooks]]。
- **2026-07-21（模型三連發）**：[[gemini-flash]] 出 3.6 版（1.50／7.50 美元每百萬 token，輸出 token 比 3.5 Flash 少 17%，知識截止推到 2026-03），同批另分出 Flash-Lite（0.30／2.50，高吞吐量）與 **Flash Cyber（資安專用、限量試用）**；DeepMind 同時透露 Gemini 4「已展開至今最大規模的預訓練」，而 3.5 Pro 只說「與夥伴測試中」。來源見 [[gemini-flash]] 外部查證段。
- **2026-07-30（Spark 開放門檻大降）**：Spark 從「美國 AI Ultra 測試」擴到 **Google AI Pro 也能用、涵蓋 160 個以上國家**，排除清單只剩歐洲經濟區、德國、瑞士、英國、奈及利亞；同日 Spark 取得直接操控桌面 Chrome 的能力（用已登入帳號與已存密碼自行完成瑣事，此項先限美國）。這條直接改變 Simon 的可用性判斷。
- **2026-08-13（三週後再一版）**：[[gemini-flash]] 出 3.7 版，主打程式與代理任務（DeepSWE v1.1 49.0% → 65.3%、AutomationBench 17.0% → 30.4%），介紹價砍半到 0.75／3.75 美元、只到 2026-12-31。距 3.6 僅三週，而 3.5 Pro 依然沒有日期。來源見 [[gemini-flash]] 外部查證段。

## 矛盾／未決

- **NotebookLM／Gemini Live 分工是否穩定**：目前認定「行前資料整合交 NotebookLM、行中即時應對交 Gemini Live」，但這個分工只在單一實例（[[2026-06-10-pansci-ai-travel-planning]]）驗證過，尚未經多次不同場景反覆確認，算初步定論而非穩定結論。
- **Spark 台灣可用性已推定翻轉、但未實測（2026-08-15）**：2026-07-30 的 160 國開放排除清單不含台灣、且 AI Pro 即可用，與 [[2026-05-20-bnext-google-io-2026-gemini-spark]] 記的「只給美國 AI Ultra Beta」已不符。但沒有來源逐字確認台灣，Simon 也還沒開來看過。**在他實測前，這頁只把它當推定、不當事實。** 連帶的：Simon 2026-05-23 那句「無痛點驅動切換」是在門檻高得多的前提下做的判斷，值得依新條件重估一次。
- **Information Agent／Omni 台灣時程仍未知**：2026-07-30 的開放只涵蓋 Spark，另外兩支沒有對應消息。
- **輕量線狂奔、旗艦線難產的原因不明**：三個月內 Flash 連發三版、最後一段只隔三週，3.5 Pro 卻從承諾的 2026-06 一路拖過 2026-08 仍無日期。是算力全押代理人場景、還是旗艦訓練遇到問題，公開資訊看不出來。
- **cert-quiz 與 Gemini Study notebooks 該共存還是擇一未拍板**：[[2026-06-29-gemini-study-notebooks]] 記錄 Simon 查證後認為「前置一次性診斷」對既有 cert-quiz（滾動式診斷）增量幾乎為零、撤回優化候選，但沒有正式決定要不要實際試用 Gemini 版本對照，仍是待走的一步。
- **Gemini 讀書與學習功能本身未經實測**：[[2026-06-29-gemini-study-notebooks]] 是科技媒體二手整理 Google 官方 blog，「診斷測驗準不準」「拆課程品質如何」都只是功能描述，沒有任何使用經驗或數據佐證效果。

## 來源（自動維護）

核心素材：

- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
- [[2026-05-20-inside-google-docs-live]]
- [[2026-05-26-yt-guoyu-gemini-notebooklm-gems-integration]]
- [[2026-06-10-pansci-ai-travel-planning]]
- [[2026-06-29-gemini-study-notebooks]]

半相關（Gemini 只當轉錄工具、底層引擎或對照例子）：

- [[2026-04-26-bonnie-galaxy-a57-review]]
- [[2026-04-29-ipas-ai-planner-2026-strategy]]
- [[2026-05-13-hc-notebooklm-claude-code-rag]]
- [[2026-05-29-opus-4-8-coding-benchmark]]
- [[2026-06-12-bnext-notebooklm-22-use-cases-map]]
- [[2026-06-12-technews-saas-to-taas-token-economics]]

相關 concept：[[gemini-flash]]、[[gemini-live]]、[[gemini-omni]]、[[gemini-spark]]

外部查證（2026-08-15 芙莉蓮上網補、非 reading）：

- [Gemini 3.7 Flash 官方模型卡 — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
- [Gemini 3.7 Flash launches three weeks after last model — 9to5Google](https://9to5google.com/2026/08/13/gemini-3-7-flash-launch/)
- [Google launches Gemini 3.6 Flash and 3.5 Flash-Lite, teases Gemini 4 — 9to5Google](https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/)
- [Gemini Spark can now use Chrome to auto browse, AI Pro access goes international — 9to5Google](https://9to5google.com/2026/07/30/gemini-spark-chrome-auto-browse/)

## 維護（entity 頁更新規則）

- **更新時機**：之後有新 reading 觸及 Gemini，就回這頁追加來源、刷新「我的當前定論」與「演化時間軸」、把過時的疑問結掉。frontmatter `status: living` 代表這頁要保持當前、不是寫完封存。
- **不重抄**：切面的深入內容永遠留在各自 concept，本頁只連、不複製。
