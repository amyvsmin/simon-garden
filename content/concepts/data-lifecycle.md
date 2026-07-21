---
title: "資料生命週期（Data Lifecycle）"
slug: data-lifecycle
aliases: [data lifecycle, 資料生命週期, 資料生命週期管理, data lifecycle management, DLM, 資料全生命週期]
category: 資安・資產安全
confidence: 已驗證
created: 2026-05-25
---

## 定義
資料從建立、儲存、使用、分享、封存到銷毀的完整歷程。每個階段都有對應的安全控制需求，確保資料在整個生命週期中受到適當保護，是 [[data-governance]] 落地的操作框架。

## 關鍵面向
- **六階段**：建立（Create）→ 儲存（Store）→ 使用（Use）→ 分享（Share）→ 封存（Archive）→ 銷毀（Destroy）
- **分類與標記**：資料建立時就該依敏感度分級（public 公開／private 私有／sensitive 敏感／confidential 機密，見 [[data-classification]]）標記，決定後續保護強度
- **加密需求**：靜態（at rest）、傳輸中（in transit）、使用中（in use）三種狀態各有加密策略
- **保留政策**：法規與業務需求決定資料保留期限，到期後依銷毀程序處理
- **銷毀方式**：邏輯刪除（格式化）不等於物理銷毀（消磁、粉碎），機密資料需物理銷毀

## 應用場景
- **Simon 工作場景**：ISO 27001 A.8 資產管理要求定義資料分類與保留政策；Veeam 備份即「封存」階段的實作；硬碟報廢前的資料銷毀程序；公司資料保留年限與法規（個資法）對齊
- **一般場景**：GDPR 要求資料最小化與刪除權（Right to Erasure）；雲端儲存的資料生命週期自動化（AWS S3 Lifecycle Policy）

## 相關概念
- [[data-governance]]：資料生命週期是治理框架的操作層
- [[information-privacy]]：隱私保護貫穿生命週期每個階段
- [[cryptography]]：各階段的資料保護手段
- [[cia-triad]]：生命週期管理的目標是維護 CIA 三要素

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-1-safeguard-information/4-the-data-lifecycle|Course 5 Module 2 Section 1 Leaf 4 the data lifecycle]]
