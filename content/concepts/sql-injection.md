---
title: "SQL 注入（SQL Injection）"
slug: sql-injection
aliases: [SQL injection, SQL 注入, SQLi, 資料庫注入攻擊, SQL injection attack]
category: 資安
confidence: 已驗證
created: 2026-05-30
---

## 定義

SQL 注入是在資料庫上執行非預期查詢的 [[injection]] 攻擊——攻擊者在應用程式輸入欄位中嵌入惡意 SQL 語句，直接操控資料庫（讀取、竄改、刪除資料或繞過認證）。

## 關鍵面向

- **根因**：應用程式把使用者輸入直接拼接進 SQL 查詢、未做 input validation
- **核心防禦：prepared statement（參數化查詢）**——在傳給資料庫前先處理 SQL 語句，讓使用者輸入只能當「資料」、不會被當「指令」執行
- **常見後果**：資料外洩、認證繞過、整個資料庫被讀取或破壞
- **威脅建模對照**：是 [[attack-tree]] 範例中「帳密 → 資料庫」這條分支的核心攻擊向量

## 應用場景

- **Simon 工作場景**：直接接你的 SQL Server 主場——資料庫安全（MFA／Kerberos／Silverfort 之外，應用層的 prepared statement 是開發側防線）；弱點掃描追蹤此類漏洞
- **一般場景**：OWASP Top 10 長年高位、CISSP Domain 8／SSCP 必考、滲透測試的標準項目

## 相關概念

- [[injection]]：SQL injection 是注入攻擊最經典的類型
- [[web-based-exploit]]：SQL injection 是網頁型攻擊的代表
- [[cross-site-scripting]]：另一種常見注入攻擊
- [[attack-tree]]：SQL injection 常出現在 attack tree 的資料庫分支

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-3-web-based-exploits/2-exploitable-gaps-in-databases|Course 5 Module 4 Section 3 Leaf 2 Exploitable gaps in databases]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-3-web-based-exploits/3-prevent-injection-attacks|Course 5 Module 4 Section 3 Leaf 3 Prevent injection attacks]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
