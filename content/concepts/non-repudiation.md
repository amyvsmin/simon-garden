---
title: "不可否認性（Non-Repudiation）"
slug: non-repudiation
aliases: [non-repudiation, 不可否認性, 不可抵賴性, 不可否認, non repudiation]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
確保行為人無法事後否認自己曾執行某項操作或發送某筆資料的安全屬性。透過數位簽章（digital signature）與雜湊函數（hash function）實現，是 [[cia-triad]] 之外常被獨立討論的第四大安全目標。

## 關鍵面向
- **數位簽章**：發送方用私鑰簽署、接收方用公鑰驗證，事後發送方無法否認簽署行為
- **雜湊驗證**：[[hash-function]] 產出固定長度摘要，確保資料未被竄改，間接支撐不可否認性
- **時間戳記**：搭配可信時間戳記服務（TSA），鎖定事件發生的確切時間
- **稽核日誌**：系統層面的 [[log]] 紀錄是不可否認性的輔助證據
- **法律效力**：數位簽章法賦予電子簽章與實體簽章同等法律地位

## 應用場景
- **Simon 工作場景**：ISO 27001 稽核時需要證明變更紀錄不可竄改；SQL Server 操作日誌搭配 MFA 確保操作者身份可追溯；Veeam 備份日誌的完整性驗證
- **一般場景**：電子商務交易確認、合約電子簽署、金融交易不可否認、電子郵件 S/MIME 簽署

## 相關概念
- [[hash-function]]：提供資料完整性驗證，支撐不可否認性
- [[cryptography]]：不可否認性的底層技術基礎
- [[digital-certificate]]：綁定身份與公鑰，讓簽章可驗證
- [[public-key-infrastructure]]：管理憑證與金鑰的框架
- [[log]]：稽核日誌是不可否認性的輔助機制

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-2-encryption-methods/9-non-repudiation-and-hashing|Course 5 Module 2 Section 2 Leaf 9 non repudiation and hashing]]
