---
title: "Token 即服務（TaaS）"
slug: token-as-a-service
aliases: [TaaS, Token as a Service, Token 即服務, Token 經濟學, token economics, 思考 token, reasoning tokens, token 計價]
category: AI 與 Agent
confidence: 已驗證
created: 2026-06-12
---

## 定義

AI 服務的計價邏輯從「按帳號／人頭收月費」轉向「按實際消耗的 token 收費」的新階段。每一次模型讀取與生成，都被拆解成 token 計量，使用者買的不再是一個帳號，而是一段可被精算的推論額度。名字仿照 SaaS（軟體即服務）造成 TaaS（Token as a Service）。

## 關鍵面向

- **為什麼變了**：傳統 SaaS 多一個使用者的邊際成本接近零，所以月費吃到飽划算。生成式 AI 不同——每回答一次都要重新燒 GPU 算力，無法零成本複製，一個重度使用者可能比十個輕度使用者還貴。成本壓力逼著計價從「人頭」改成「用量」。
- **思考 token（reasoning tokens）**：會推理的模型在吐出最終答案前，會在後台自我推理、辯證、糾錯，這段「想的過程」也燒 token。所以就算最後回答只有兩句話，背後可能已經燒掉大量 token，讓帳單更難預估。
- **訂閱沒消失、只是換殼**：Claude 跟 Gemini 都還有月費，但「吃到飽」邏輯在退場。2026-06-15 起 Claude 把「人類互動」跟「程式自動化」（Agent SDK／`claude -p`／GitHub Actions）的額度切開計算，用完照標準 API 費率付（見 [[subscription-vs-api-cost]]）；Gemini 改成依複雜度算的 [[compute-based-pricing]]、每 5 小時刷新。模式變成「月費＋算力額度＋額外加值」的混合。
- **省錢手段**：重複送的長上下文（公司規範、固定指令）可用 [[prompt-cache]] 快取、命中後通常省 50% 以上；高頻、隱私敏感、重複性高的初階任務可下放到邊緣 AI（AI PC／手機 NPU）在本機算、不付雲端 token 費。未來算力地圖會走「複雜任務上雲付費、日常任務在地端免費」雙軌。
- **新的競爭指標**：過去比模型參數量跟跑分，現在比「誰處理最多 token、誰推論成本最低」。中國模型（DeepSeek、Qwen、Kimi 等）靠低價 token 與開放權重策略，在全球開發者呼叫量上已連續數週超過美國模型。

## 應用場景

- **Simon 的訂閱決策**：他 2026-05 把 Claude Pro 升 Max 5x（月費 3,300）。TaaS 框架幫他理解，未來該管的不是「開幾個帳號」，而是「自己的推論預算」——尤其 KW γ 批次消化、跑 `claude -p` 排程這類自動化會大量呼叫模型，落在 6/15 新制切出來的「程式化使用」額度桶裡。
- **一般場景**：企業導入 AI 前要先算每個任務的 token 成本（一份財報摘要燒多少、客服機器人每天 10 萬則對話燒多少、一個 agent 跑完採購流程呼叫 20 次模型燒多少），AI 帳單最終會長得像電費單：輸入 token、輸出 token、模型層級、快取命中率、上下文長度、工具呼叫次數逐項計費。

## 相關概念
- [[compute-based-pricing]]：Gemini 走的「依運算量計費」是 TaaS 的一種具體實作。
- [[subscription-vs-api-cost]]：Claude 訂閱與 API 分流、6/15 程式化使用額度，是 TaaS 在 Anthropic 的落地。
- [[prompt-cache]]：控管 token 帳單的關鍵省錢手段。
- [[cloud-computing]]：TaaS 讓 AI 服務在計價邏輯上往雲端運算（按用量計費）靠攏。
- [[context-resend-token-paradox]]：長對話每次重送全文，是 token 消耗暴增的底層原因之一。

## 尚未解決的疑問
- 思考 token 不透明（使用者看不到後台燒了多少）會不會變成計價黑箱、難以稽核？
- 邊緣 AI 真的能分流到多少比例的日常任務、把雲端 token 帳單壓下來？

## 來源（自動維護）
- [[2026-06-12-technews-saas-to-taas-token-economics]]
