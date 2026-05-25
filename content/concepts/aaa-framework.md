---
title: "AAA 框架（Authentication, Authorization, Accounting）"
slug: aaa-framework
aliases: [AAA, AAA framework, 認證授權稽核, 認證授權記帳, authentication authorization accounting, AAA 架構, triple A]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
身份驗證（Authentication）、授權（Authorization）、稽核（Accounting）三位一體的存取控制架構。AAA 回答三個核心問題：你是誰（Authentication）、你能做什麼（Authorization）、你做了什麼（Accounting）。是網路安全與系統存取管理的基本框架。

## 關鍵面向
- **Authentication**（認證）：驗證使用者身份，常見方式包含密碼、[[mfa-multi-factor-authentication]]、憑證、生物辨識
- **Authorization**（授權）：認證通過後判定使用者可存取哪些資源、執行哪些操作；常見模型 DAC / MAC / RBAC / ABAC
- **Accounting**（稽核）：記錄使用者的所有操作行為，提供 [[log]] 供事後追溯與合規審計
- **協定實現**：RADIUS（遠端撥接認證）、TACACS+（Cisco 設備集中管控）、Kerberos（AD 環境 SSO）
- **順序不可逆**：必須先認證 → 再授權 → 全程記帳；跳過任一步驟都是安全漏洞

## 應用場景
- **Simon 工作場景**：公司網路設備（交換器、防火牆）的 AAA 設定（RADIUS/TACACS+）；SQL Server MFA 專案對應 AAA 的 Authentication 強化；ISO 27001 A.9 存取控制整個控制項群對應 AAA 三層；VPN 連線認證流程
- **一般場景**：ISP 用 RADIUS 管理用戶撥號認證與計費、企業 Wi-Fi 802.1X 認證、雲端 IAM 的角色與政策管理

## 相關概念
- [[authentication]]：AAA 的第一個 A
- [[authorization]]：AAA 的第二個 A
- [[log]]：Accounting 的實作就是寫 log
- [[mfa-multi-factor-authentication]]：強化 Authentication 層的主要手段
- [[sso-single-sign-on]]：SSO 集中處理 Authentication，讓 AAA 更易管理
- [[non-repudiation]]：Accounting 日誌支撐不可否認性

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
