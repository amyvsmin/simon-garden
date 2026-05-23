---
title: "Gemini Flash（Google 輕量高速代理人模型）"
slug: gemini-flash
aliases: [Gemini Flash, Gemini 3.5 Flash, Flash, Google Flash, 3.5 Flash, gemini flash]
category: AI
confidence: 待驗證
created: 2026-05-20
query-count: 0
---

## 定義

Google 在 I/O 2026 發布的輕量高速 LLM 模型家族；專攻代理人任務跟程式編寫；當前版本 3.5 Flash 是 [[gemini-spark]]、AI Mode、Antigravity、Gemini Enterprise 等代理產品的底層；輸出 token 速度比其他前沿模型快 4 倍；Google DeepMind 技術長 Koray Kavukcuoglu 形容為「前沿智慧 + 行動力」。

## 關鍵面向

- **效能指標**（3.5 Flash 版）：Terminal-Bench 2.1 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%、CharXiv Reasoning 84.2%
- **核心特色**：token 輸出速度比其他前沿模型快 4 倍（代理人時代信任關鍵）
- **設計目標**：拆解任務 → 讀取多資料源 → 呼叫工具 → 產出結果，全程「快」；定位「代理人時代的預設工作馬」
- **上線**：3.5 Flash 即日全球開放（Gemini App、Google 搜尋 AI Mode、Antigravity、Gemini Enterprise）；3.5 Pro 已在 Google 內部使用、預計下月推出
- **跟 Spark 的關係**：[[gemini-spark]] 整個跑在 Flash 上、所以 Flash 速度直接決定 Spark 體驗
- **競爭對標**：Anthropic Haiku、OpenAI o-mini／4.1-mini 同層級「速度優先」模型；多項基準贏 Gemini 3.1 Pro

## 應用場景

- Simon 工作場景：透過 [[gemini-spark]] 間接用到、不直接 prompt；如果改 API 應用、可以拿來跑 batch 任務（資安日誌摘要、月報整理）
- 一般場景：所有代理人應用底層；速度比品質更重要的場景（搜尋、客服、即時翻譯）
- 反場景：深度推理（programming refactor、學術論文撰寫）仍需 Pro／Opus 級

## 相關概念

- [[gemini-spark]]：Spark 的執行引擎、Flash 速度直接決定 Spark 信任度
- [[information-agent]]：搜尋層代理人、也跑在 Flash
- [[gemini-omni]]：姊妹模型、Omni 主多模態生成、Flash 主代理任務
- [[ai-task-execution]]：Flash 設計目標就是支撐 AI 從問答到執行
- [[agent-os-competition]]：代理人作業系統競賽中 Google 模型層的核心籌碼

## 尚未解決的疑問

- 跟 Gemini 2.5 Flash／3.0 Flash 的差異、是否同家族迭代
- API 計費結構、token 費率
- 是否會開放開源權重（如 Gemma 系列）
- 跟 Gemma 開源家族的定位區隔

## 來源（自動維護）

- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
