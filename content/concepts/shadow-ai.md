---
title: "Shadow AI"
slug: shadow-ai
aliases: [Shadow AI, 影子 AI, 未授權 AI 使用]
category: 資安
confidence: 已驗證
created: 2026-05-06
query-count: 0
---

## 定義

員工在未經組織批准、無 governance 機制的狀況下、使用 AI 工具（ChatGPT、Gemini、Cursor、Copilot 等）處理日常工作所形成的不可見資料外洩風險。Shadow IT 概念在 AI 時代的延伸。

## 關鍵面向

- **規模迅速擴大**：1B 用戶用 AI 只花 3 年（原預測 7 年）、企業導入跟不上員工自行採用
- **可見性盲點**：公司不知道員工把什麼資料丟進哪些 AI 工具、形成新的 insider threat 子類
- **核心統計**：73% 組織擔心 AI 使用導致資料外洩、僅 18% 有 AI 治理機制（Ponemon 2026）
- **典型情境**：業務貼客戶資料給 ChatGPT、工程師貼程式碼給 Cursor、PM 用 AI 摘要會議
- **對應治理**：(1) 流量盤點（SASE／Egress 偵測）（2) 批准的 AI 工具白名單（3) DLP 規則更新（4) 員工教育

## 應用場景

- Simon 工作場景：公司目前無 AI 工具盤點、員工 AI 使用是 ISO 27001 治理盲點；下一步先做 SaaS 流量盤點、列出實際在用的工具清單、再考慮治理章節
- 一般場景：所有導入 ISO 27001／NIST CSF／SOC 2 的組織；金融、醫療、半導體特別關鍵

## 相關概念

- [[insider-threat]]：Shadow AI 是新型 insider 子類
- [[insider-threat-program]]：ITP 應納入 AI 治理章節

## 尚未解決的疑問

- 全面禁用 vs 受控允許的 trade-off
- 員工接受度與資安強度的平衡點

## 來源（自動維護）

- [[2026-05-06-palo-alto-harvest-now-decrypt-later-cybersec]]
