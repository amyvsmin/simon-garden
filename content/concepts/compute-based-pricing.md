---
title: "Compute-based pricing（運算量計費）"
slug: compute-based-pricing
aliases: [Compute-based pricing, 運算量計費, 算力計費, compute pricing, AI 訂閱計費, Google AI 新計費]
category: AI
confidence: 待驗證
created: 2026-05-20
query-count: 0
---

## 定義

Google I/O 2026 隨 [[gemini-spark]] 公佈的新訂閱計費邏輯；從「每日提示次數上限」轉為「依運算量計費」；依提示複雜度／使用功能／對話長度計算實際消耗；達上限自動降模型；Pro／Ultra 用戶可額外購買 pay-as-you-go 點數續用；每 5 小時刷新直到週上限。

## 關鍵面向

- **舊模型**：「每日 prompt 次數上限」（如 ChatGPT Plus 80 messages / 3 hours、Claude Pro 每 5 小時 X messages）
- **新模型**：依「實際運算量」計費；複雜推理／長對話／多模態調用各自吃不同算力
- **降級備援**：到上限自動切較小模型（如 Pro 降 Lite）、不直接斷服務
- **加買機制**：Pro／Ultra 訂戶可購 pay-as-you-go 點數續用、避開上限
- **重新整理週期**：每 5 小時刷新一次、直到週上限
- **競爭脈絡**：跟 Claude 既有「按 token + 訂閱配額混合」的 [[subscription-vs-api-cost]] 邏輯類似、但 Google 把算力具體量化呈現
- **意涵**：訂戶為「值得多少算力」付錢、不再被「次數」綁；重度使用者算力消耗反映在費用、輕度使用者不買單

## 應用場景

- Simon 工作場景：選 Google AI 訂閱方案時新指標 — Pro $20／月 vs Ultra $100／$200／月不再只是「次數差」、是「算力差」；長對話／代理人任務多的場景上限到得快
- 一般場景：算力高消耗（程式編寫、研究、影片生成）值得 Ultra；輕度使用（問問答、寫信）Pro 即可
- 反場景：算力浮動估算難、消費者不一定能感受「我這次用了多少算力」、UI 設計挑戰

## 相關概念

- [[gemini-spark]]：Spark 重度使用會帶動運算量計費模式進主流
- [[subscription-vs-api-cost]]：Claude 端的訂閱／API 分軌邏輯、Google 新計費類似精神（訂閱 + 加買）
- [[token-saving-rules]]：使用者端對應策略：省 token、降運算量、延長配額壽命
- [[claude-usage-dashboard]]：對標 Claude 端三層額度面板、Google 端可能會推類似 dashboard

## 尚未解決的疑問

- 「運算量」是否量化展示給用戶（如 Anthropic 的 5h / weekly meter）
- 跟 token-based 計費的精確換算公式
- 多模態（影片生成、語音）的算力換算
- Pro／Ultra 額外點數價格
- 競爭對手是否會跟進、ChatGPT／Claude 是否會調整

## 來源（自動維護）

- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
