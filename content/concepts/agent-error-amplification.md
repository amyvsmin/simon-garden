---
title: "代理人決策鏈誤差放大（3% 源頭誤差複合）"
slug: agent-error-amplification
aliases: [代理人誤差放大, 代理人決策鏈誤差, 3% 誤差複合, agent error propagation, agent error amplification, 上游資料污染]
category: AI
confidence: 待驗證
created: 2026-05-18
query-count: 0
---

## 定義

AI 代理人多步驟決策鏈中、上游資料／推理的微小誤差（如 3%）會在每一步複合放大、最終導致整個營運邏輯偏差的系統性風險；強調上游驗證比下游補救成本低 100 倍。

## 關鍵面向

- **複合效應**：每步 3% 誤差、10 步後累積偏差可能達 30%+；不是線性誤差、是乘性放大
- **上游驗證優先**：嚴格驗證輸入資料／第一步推理結果、勝過下游修正
- **跟 [[loud-failure]] 的對應**：loud-failure 是「個別動作不確定時暴露」、agent-error-amplification 是「鏈式系統層誤差累積」、loud-failure 是其防禦手段之一
- **典型場景**：代理人營運自動化（資料拉取→分類→決策→執行）、agent SOC 自動回應（log→分類→TTPs→回應動作）
- **反模式**：信任代理人鏈式輸出而不抽樣驗證；只看最終結果不看中間步驟

## 應用場景

- Simon 工作場景：KW γ 批次收錄流程（每篇 ingest 都要顯式檢查點、不假裝成功）；ISO 27001 自動化資產盤點（上游 CMDB 資料污染會放大到全公司風險評估）；agent SOC 設計時優先驗證 detection 階段
- 一般場景：任何多步代理人 pipeline 設計、AI 營運決策、資安自動化

## 相關概念

- [[loud-failure]]：個別動作層的暴露機制、是 agent-error-amplification 的防禦手段
- [[agent-os-competition]]：桌面 AI 競賽下、各廠商對誤差處理策略差異會成為選型考量
- [[agentic-secops]]：AI SOC 自動化、特別需要防誤差放大
- [[claude-md-12-rules]]：規則 10「多步驟任務每步完成後回報進度」直接對應誤差放大防禦

## 尚未解決的疑問

- 多少誤差率（1%／3%／5%）下放大效應變致命的閾值
- 如何在 ingest pipeline 設「抽樣驗證」機制、不全人工複核

## 來源（自動維護）

- [[2026-05-16-bnext-agent-os-codex-vs-claude]]
