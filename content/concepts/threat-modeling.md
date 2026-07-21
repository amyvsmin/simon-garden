---
title: "威脅建模（Threat Modeling）"
slug: threat-modeling
aliases: [Threat Modeling, 威脅建模, 威脅模型, threat model, 威脅分析]
category: 資安・風險管理
confidence: 已驗證
created: 2026-05-25
---

## 定義

系統性識別資產、威脅、弱點，並排定優先順序以決定防禦資源配置的流程。目標是在攻擊發生前就理解「什麼值得保護、誰會來攻擊、怎麼攻擊、防禦優先序如何」。

## 關鍵面向

- **PASTA 框架**：Process for Attack Simulation and Threat Analysis，七階段風險導向方法論，從定義業務目標到攻擊模擬到殘餘風險分析
- **STRIDE 模型**：微軟提出，六大威脅類型——Spoofing（欺騙身份）、Tampering（竄改）、Repudiation（否認）、Information Disclosure（資訊洩漏）、Denial of Service（阻斷服務）、Elevation of Privilege（權限提升）
- **輸入要素**：資產清單（[[asset]]）、[[threat-actor]] 類型、已知 [[vulnerability]]、[[attack-vector]] 列表
- **輸出產物**：威脅清單 + 風險排序 + 建議控制措施 + 殘餘風險聲明
- **持續性**：不是一次性活動，系統架構變更、新威脅情報出現時都要重新執行

## 應用場景

- **Simon 工作場景**：ISO 27001 A.8.2 要求做資訊資產風險評鑑，威脅建模是核心方法；新系統導入（如 BIGFIX、Omnissa MDM）時可用 STRIDE 快速掃描潛在威脅；SQL Server MFA 專案的設計決策可用威脅建模驗證
- **一般場景**：軟體開發生命週期（SDLC）中的安全設計階段；雲端遷移前的風險評估；合規稽核（PCI DSS、HIPAA）的風險分析依據

## 相關概念

- [[threat-actor]]：威脅建模需辨識可能的攻擊者
- [[attack-vector]]：列舉攻擊路徑是建模的關鍵步驟
- [[risk]]：威脅建模的目的是量化與排序風險
- [[nist-sp-800-30]]：NIST 風險評估指南提供互補的方法論
- [[vulnerability]]：弱點盤點是威脅建模的必要輸入

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/1-a-proactive-approach-to-security|Course 5 Module 4 Section 4 Leaf 1 a proactive approach to security]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/4-pasta-the-process-for-attack-simulation-and-threat-analysis|Course 5 Module 4 Section 4 Leaf 4 pasta the process for attack simulation and threat analysis]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
