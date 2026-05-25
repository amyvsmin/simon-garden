---
title: "資料治理（Data Governance）"
slug: data-governance
aliases: [data governance, 資料治理, 資料管理, 資料管治, data management governance]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
確保組織資料在品質、安全、合規、可用性各面向達標的政策、流程與角色體系。資料治理是 [[data-lifecycle]] 的上位框架，回答「誰有權對哪些資料做什麼」與「資料品質如何維持」兩個核心問題。

## 關鍵面向
- **角色分工**：Data Owner（資料擁有者，決定分類與存取政策）、Data Custodian（資料保管者，執行技術控制）、Data Steward（資料管家，維護品質與一致性）
- **資料分類**：依機密等級（公開／內部／機密／極機密）分類，決定存取、加密、保留與銷毀策略
- **合規對齊**：個資法、GDPR、HIPAA 等法規對資料蒐集、處理、跨境傳輸有硬性要求
- **資料品質**：準確性、完整性、一致性、時效性四大維度
- **稽核與追蹤**：所有資料存取與變更需留稽核日誌（[[log]]），支持 [[non-repudiation]]

## 應用場景
- **Simon 工作場景**：ISO 27001 A.8 資產管理要求建立資料分類與責任歸屬；資產盤點（目前進行中）就是資料治理的第一步；月度資安 KPI 簡報需回報資料保護指標
- **一般場景**：金融業法遵報告、醫療業 HIPAA 合規、跨國企業 GDPR 資料保護官（DPO）制度

## 相關概念
- [[data-lifecycle]]：治理框架在操作層的展開
- [[information-privacy]]：隱私保護是治理的子議題
- [[cia-triad]]：治理的最終目標是維護 CIA
- [[separation-of-duties]]：Data Owner / Custodian / Steward 的角色分離體現 SoD

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
