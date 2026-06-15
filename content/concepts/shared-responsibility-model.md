---
title: "共同責任模型（Shared Responsibility Model）"
slug: shared-responsibility-model
aliases: [Shared Responsibility Model, 共同責任模型, 責任共擔模型, cloud shared responsibility, 雲端共同責任]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
雲端環境中、客戶與雲端服務供應商（CSP）各自負責的安全區域劃分。供應商負責「雲的安全」（基礎設施、實體機房、網路骨幹），客戶負責「雲中的安全」（資料、存取控制、應用程式設定）。責任範圍依服務模型（IaaS/PaaS/SaaS）不同而異。

## 關鍵面向
- **IaaS（如 AWS EC2）**：客戶責任最重——OS 以上全包（patch、防火牆規則、資料加密）
- **PaaS（如 Azure App Service）**：供應商管 OS 與 runtime、客戶管應用程式碼與資料
- **SaaS（如 Microsoft 365）**：供應商管幾乎全部、客戶仍需管存取控制與資料分級
- **常見誤解**：「上雲就安全了」——實際上客戶端設定錯誤（如 S3 bucket 公開）是雲端資安事件主因之一
- **文件化**：各 CSP 都有官方共同責任文件（AWS、Azure、GCP），必須讀

## 應用場景
- **Simon 工作場景**：公司使用雲端服務時釐清供應商與自己的安全邊界、ISO 27001 供應商管理（A.15）需確認雲端責任劃分、評估新雲端服務時的安全審查
- **一般場景**：雲端遷移評估、供應商合約資安條款談判、雲端安全架構設計

## 相關概念
- [[risk]]：責任劃分不清本身就是風險
- [[compliance]]：合規責任也依共同責任模型分擔
- [[information-security]]：共同責任模型是雲端資訊安全的基礎概念
- [[asset]]：雲端資產的所有權與保護責任需明確

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 1
