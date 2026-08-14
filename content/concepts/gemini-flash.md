---
title: "Gemini Flash（Google 輕量高速代理人模型）"
slug: gemini-flash
aliases: [Gemini Flash, Gemini 3.7 Flash, Gemini 3.6 Flash, Gemini 3.5 Flash, Flash, Google Flash, gemini flash]
category: AI 與 Agent
confidence: 已驗證
created: 2026-05-20
updated: 2026-08-15
---

## 定義

Google 在 I/O 2026 發布的輕量高速 LLM 模型家族，專攻代理人任務與程式編寫，是 [[gemini-spark]]、搜尋 AI Mode、Antigravity、Gemini Enterprise 等代理產品的底層引擎。**當前版本 3.7 Flash（2026-08-13 發布）**。這條線的特徵是迭代極快：3.5 Flash（2026-05-19）→ 3.6 Flash（2026-07-21）→ 3.7 Flash（2026-08-13），最後一段只隔三週；而 I/O 上承諾 2026-06 正式上市的旗艦 3.5 Pro，到 3.7 Flash 發布時仍沒有日期。Google DeepMind 技術長 Koray Kavukcuoglu 當初形容這條線是「前沿智慧 + 行動力」。

<p align="center"><img src="assets/covers/gemini-flash-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

**版本線與定價（每百萬 token，美元）**

| 版本 | 發布 | 輸入 | 輸出 | 知識截止 |
|---|---|---|---|---|
| 3.5 Flash | 2026-05-19 | — | 9.00 | 2025-01 |
| 3.6 Flash | 2026-07-21 | 1.50 | 7.50 | 2026-03 |
| 3.7 Flash | 2026-08-13 | 0.75（介紹價） | 3.75（介紹價） | 2026-03 |

- **3.7 的介紹價只到 2026-12-31**，2027-01-01 起回到 1.50／7.50，也就是跟 3.6 同價。等於年底前用等於半價，這是**限時、會自動漲回去**，別當長期成本估。
- **3.7 的能力躍進集中在程式與代理任務**：DeepSWE v1.1 由 49.0% 升到 65.3%、FrontierCode 1.1 主榜 34.4% → 43.6%、Code Arena（網頁開發）Elo 1538 → 1588、AutomationBench 17.0% → 30.4%、文件理解 22.0% → 34.0%；長文取回 GDM-MRCR v2 拿 97.0%。輸入上限 100 萬 token、輸出上限 6.4 萬 token，可調推理強度換取成本與延遲。
- **3.6 的重點是效率不是分數**：輸出 token 比 3.5 Flash 少 17%（同樣答案更省錢），知識截止日從 2025-01 一路推到 2026-03。
- **同批還分出兩支旁線**（2026-07-21）：Flash-Lite（0.30／2.50，高吞吐量用）與 **Flash Cyber（資安專用、限量試用）**——後者是這家族第一次為資安場景單獨出模型。
- **數據衝突待查**：本頁 2026-05-20 原記 3.5 Flash 的 GDPval-AA 為 1656 Elo（來源 bnext），但 9to5Google 報 3.6 Flash 時寫「1421，前代 1349」。兩個 3.5 Flash 數字對不起來，暫時兩者都不當定論。

## 應用場景

- **Simon 目前的接觸點有三個**：Google One AI Pro 訂閱涵蓋 Gemini App 與 [[gemini-spark]]；Antigravity CLI（`agy`）是第三方審核者的執行環境——但 2026-08-15 實查 `agy models`，1.1.5 版最新仍只到 `gemini-3.6-flash`，3.7 還沒下放，審核預設也照舊維持 `gemini-3.1-pro-high`（重推理線）。
- **值得留意 Flash Cyber**：Simon 是資安 IT，這支是專為資安場景訓練的分支；目前限量試用、拿不到細節，先掛著觀察。
- 一般場景：所有代理人應用底層；速度比品質更重要的場景（搜尋、客服、即時翻譯）。
- 反場景：深度推理（大型重構、學術寫作）仍需 Pro／Opus 級。Flash 這條線再快，定位始終是工作馬而非旗艦。

## 相關概念

- [[gemini-spark]]：Spark 的執行引擎、Flash 速度直接決定 Spark 信任度
- [[information-agent]]：搜尋層代理人、也跑在 Flash
- [[gemini-omni]]：姊妹模型、Omni 主多模態生成、Flash 主代理任務
- [[ai-task-execution]]：Flash 設計目標就是支撐 AI 從問答到執行
- [[agent-os-competition]]：代理人作業系統競賽中 Google 模型層的核心籌碼
- [[compute-based-pricing]]：3.7 的限時半價與到期漲回，是算力計費時代的定價操作

## 尚未解決的疑問

- **版本號通膨？** 三個月內從 3.5 跳到 3.7、最後一段只隔三週，但旗艦 3.5 Pro 反而難產。小版號到底代表多少實質差距，還是行銷節奏，看不出來。
- **3.5 Pro 為什麼一再延？** I/O 2026 承諾 2026-06 正式上市，2026-07-21 只說「與夥伴測試中」，2026-08-13 發 3.7 Flash 時仍未提日期。
- Flash Cyber 的實際能力與開放時程（限量試用、無公開細節）
- 是否會開放開源權重（如 Gemma 系列）、跟 Gemma 家族的定位區隔
- 3.5 Flash 的 GDPval-AA 究竟是 1656 還是 1349（見上節數據衝突）

## 來源（自動維護）

- [[2026-05-20-bnext-google-io-2026-gemini-spark]]

外部查證（2026-08-15 芙莉蓮上網補、非 reading）：

- [Gemini 3.7 Flash 官方模型卡 — Google DeepMind](https://deepmind.google/models/model-cards/gemini-3-7-flash/)
- [Gemini 3.7 Flash launches three weeks after last model — 9to5Google](https://9to5google.com/2026/08/13/gemini-3-7-flash-launch/)
- [Google launches Gemini 3.6 Flash and 3.5 Flash-Lite, teases Gemini 4 — 9to5Google](https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/)
