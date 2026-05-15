---
title: "Agentic SecOps"
slug: agentic-secops
aliases: [AI 驅動的 SecOps, Agent 化資安營運, agentic security operations, AI SOC 閉環]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

## 定義

以 AI agent 串接 SOC 全流程（偵測 → 分揀 → 調查 → 取證與回應 → 偵測工程）的下一代資安營運範式。重點是把過去人工密集的告警分流、案例摘要、查詢撰寫、規則生成讓 AI 接手，分析師專注在判斷與決策層，從而擴展 SOC 處理量並縮短 MTTD／MTTR。

## 關鍵面向

- **閉環設計**：偵測 → 分揀 → 調查 → 回應 → 偵測工程（產生新規則）→ 回到偵測，AI 在每一段補資料缺口
- **NL 查詢提速**：Gemini 在 Google Security Operations 中讓分析師撰寫查詢速度提升 76%（Google 公開數據）
- **Playbook 助理**：AI 提供建議下一步、規則生成、案例摘要、多輪助理對話
- **與威脅情資聯動**：以 GTI（Google Threat Intelligence）等情資內建提示範本（釣魚演進、TTP 優先化、CVE 分析、後門獵捕）動態決定修補優先序
- **跟「人 in the loop」的關係**：AI 處理 80% 重複性工作，分析師審核 AI 建議再決策，但部分高信心修補可逐步自動化

## 應用場景

- Simon 工作場景：公司若使用 Google Workspace／GCP，可評估 Gemini in SecOps PoC；先從「告警分流自動摘要」「SQL log 異常 NL 查詢」這類低風險入口開始，不必整套上
- 一般場景：MSSP、企業 SOC、大型雲服務商；任何告警量大到人工處理不過來的環境

## 相關概念

- [[ai-vuln-discovery]]：偵測層的 AI 化（找漏洞）
- [[wiz-platform]]：Agentic SecOps 在 cloud security posture 場景的具體實作（Green/Blue/Rule/Red Agent）
- [[cve-weaponization-time]]：Agentic SecOps 必須面對的攻擊速度新基線
- [[secure-ai-framework]]：Agentic SecOps 自身也是 AI 系統，需依此框架治理

## 尚未解決的疑問

- AI agent 跨告警批次的記憶保存與隱私邊界
- 自動修補的可逆性與回滾機制如何設計

## 來源（自動維護）

- [[2026-05-05-google-cloud-agentic-secops-cybersec]]
