---
title: "NIST SP 800-53（安全與隱私控制措施）"
slug: nist-sp-800-53
aliases: [NIST SP 800-53, 安全與隱私控制措施, Security and Privacy Controls, NIST 800-53, NIST 控制措施目錄]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義

美國 NIST 發布的聯邦資訊系統安全與隱私控制措施目錄。提供超過 1,000 個控制項，涵蓋存取控制、稽核、事件回應、風險評估等 20 個控制家族，組織可依風險等級挑選適用控制項建立安全基線。

## 關鍵面向

- **20 個控制家族**：Access Control（AC）、Audit and Accountability（AU）、Configuration Management（CM）、Incident Response（IR）、Risk Assessment（RA）等，每家族含多個具體控制項
- **三層基線**：Low / Moderate / High，依系統重要性與風險等級選用不同強度的控制措施組合
- **與 SP 800-30 的互補**：[[nist-sp-800-30]] 評估風險等級 → SP 800-53 依等級選控制項 → 組織實施並驗證
- **版本演進**：目前為 Rev. 5（2020），加入隱私控制與供應鏈風險管理；Rev. 5 強調 outcome-based（結果導向）而非 compliance-based（合規導向）
- **與 ISO 27001 的對應**：兩者都是安全控制框架，可交叉對照——ISO 27001 Annex A 114 項 vs SP 800-53 Rev. 5 超過 1,000 項，SP 800-53 更細緻

## 應用場景

- **Simon 工作場景**：ISO 27001 推進中可參考 SP 800-53 補充 Annex A 不夠細的控制措施；存取控制（AC）家族對應 SQL Server MFA 專案；組態管理（CM）家族對應 BIGFIX POC 的端點管理
- **一般場景**：美國聯邦機構強制適用；FedRAMP 雲端認證以 SP 800-53 為基礎；CISSP 考試的核心知識領域之一

## 相關概念

- [[nist-sp-800-30]]：風險評估後依結果挑選 SP 800-53 控制項
- [[nist-csf]]：NIST 網路安全框架引用 SP 800-53 作為實施指引
- [[regulations]]：多國法規引用 SP 800-53 作為合規依據
- [[policy]]：組織政策透過 SP 800-53 控制項落地
- [[standard]]：SP 800-53 本身就是安全控制的標準目錄

## 來源

- Course 5 Assets, Threats, and Vulnerabilities — Module 1+2
