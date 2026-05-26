---
title: "注入攻擊（Injection）"
slug: injection
aliases: [Injection, 注入攻擊, SQL Injection, SQL 注入, 注入漏洞, code injection, 程式碼注入, XSS, Cross-Site Scripting]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
攻擊者在應用程式的輸入欄位中夾帶惡意指令，使系統執行非預期操作的攻擊手法。SQL injection 是最經典的類型——攻擊者在輸入中嵌入 SQL 語句，直接操控資料庫。

## 關鍵面向
- **SQL Injection**：在輸入欄位注入 SQL 指令（如 `' OR 1=1 --`），繞過認證或竊取資料
- **XSS（Cross-Site Scripting）**：在網頁中注入惡意 JavaScript，竊取使用者 cookie 或 session
- **Command Injection**：注入作業系統指令，直接在伺服器上執行命令
- **防禦手段**：參數化查詢（Prepared Statement）、輸入驗證與清理、最小權限資料庫帳號、WAF 規則
- **OWASP 排名**：在 [[owasp-top-10]] 2021 版中排名第三（2017 版曾排第一）

## 應用場景
- **Simon 工作場景**：公司 ERP / MES 等內部 Web 系統的輸入驗證檢查、SQL Server 的帳號權限應限縮避免注入後擴大損害
- **一般場景**：Web 應用滲透測試的必測項目、SAST/DAST 工具的自動偵測目標、Bug Bounty 計畫中最常見的提交類型之一

## 相關概念
- [[owasp-top-10]]：注入攻擊是 OWASP 長期關注的風險類別
- [[vulnerability]]：注入弱點通常源自缺乏輸入驗證
- [[defense-in-depth]]：WAF + 參數化查詢 + 最小權限帳號 = 多層防禦注入
- [[security-control]]：輸入驗證與參數化查詢都是技術性控制措施

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
