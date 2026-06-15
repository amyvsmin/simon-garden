---
title: "算力計費（Compute-based Pricing）"
slug: compute-based-pricing
aliases: [Compute-based Pricing, 算力計費, 運算量計費, compute-based pricing, usage-based AI pricing, 依運算量計費]
category: AI
confidence: 已驗證
created: 2026-06-07
---

## 定義
AI 訂閱方案從「固定次數／提示上限」轉向「依實際運算量計費」的計費邏輯。Google 在 I/O 2026（2026-05-19）對 Gemini 訂閱導入：費用依問題複雜度、使用的功能、對話長度綜合計算，而非單純算「問了幾次」。

## 關鍵面向
- **計費依據**：複雜度 + 使用功能 + 對話長度（取代「每日提示次數上限」）
- **刷新與降級**：每 5 小時刷新到週上限、達上限自動降模型
- **加買**：Pro／Ultra 用戶可購 pay-as-you-go 點數補額度
- **趨勢意義**：代理人時代單次任務的算力差異極大（一句閒聊 vs 一個多步驟代理任務），次數計費失準，算力計費更貼合成本；是 [[agent-os-competition]] 下各家計費的新嘗試
- **路線對照**：Anthropic 走 [[subscription-vs-api-cost]]（訂閱 vs API 兩線分開）+ token 計費；Google 改算力計費是不同路線

## 應用場景
- **Simon 工作場景**：評估 Google AI Pro／Ultra vs Claude Max 5x 時，要看的不只月費數字、而是自己的用量型態（代理任務多 → 算力計費可能更貴）；訂閱決策的判斷維度
- **一般場景**：AI 訂閱選型、企業 AI 成本控管

## 相關概念
- [[agent-os-competition]]：算力計費是代理人競賽下的計費新嘗試
- [[subscription-vs-api-cost]]：Anthropic 的對照計費結構
- [[gemini-spark]]、[[gemini-flash]]：Google 端搭配推出的代理人產品

## 來源
- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
