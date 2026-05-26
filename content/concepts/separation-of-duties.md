---
title: "職責分離（Separation of Duties / SoD）"
slug: separation-of-duties
aliases: [separation of duties, SoD, 職責分離, 權責分離, 分權制衡, segregation of duties]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
將關鍵業務流程或系統操作拆分給不同人員負責，防止任何單一個人擁有完成整個流程的權力，藉此降低錯誤、詐欺與濫權風險。與 [[principle-of-least-privilege]] 並列為存取控制的核心原則。

## 關鍵面向
- **核心邏輯**：「申請者 ≠ 審核者 ≠ 執行者」，至少兩人以上才能完成一筆關鍵操作
- **雙人控制**（Dual Control）：高風險操作需兩人同時在場或同時授權（如金庫開啟、Root CA 金鑰儀式）
- **角色衝突矩陣**：定義哪些角色不能同時由一人擔任（如系統管理員 ≠ 稽核人員）
- **小團隊的挑戰**：人力不足時難以完全分離，可用補償性控制（如加強日誌審查）彌補
- **IT 落實**：RBAC（Role-Based Access Control）、工作流審核機制、權限審查定期清點

## 應用場景
- **Simon 工作場景**：ISO 27001 A.6.1.2 要求職責分離；伺服器管理（操作者）與日誌審查（稽核者）不應同一人；財務系統付款申請與核可需分開；公司 IT 人力有限時需文件化補償控制
- **一般場景**：銀行轉帳審核流程、軟體開發中 code review（開發者 ≠ 審核者）、資料庫 DBA 與資安稽核分離

## 相關概念
- [[principle-of-least-privilege]]：SoD 與 PoLP 共同構成存取控制雙支柱
- [[data-governance]]：Data Owner / Custodian / Steward 角色分離體現 SoD
- [[authorization]]：SoD 透過授權機制落實
- [[privilege-creep]]：未落實 SoD 時權限容易蔓延

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
