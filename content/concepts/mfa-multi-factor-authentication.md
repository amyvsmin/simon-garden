---
title: "多因子認證（Multi-Factor Authentication / MFA）"
slug: mfa-multi-factor-authentication
aliases: [MFA, multi-factor authentication, 多因子認證, 多因子驗證, 雙因子認證, 2FA, two-factor authentication, 多重驗證]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
要求使用者在 [[authentication]] 過程中提供兩個或以上不同類別認證因子的安全機制。三大因子類別：知識因子（你知道的——密碼、PIN）、持有因子（你擁有的——手機、硬體 token）、生物因子（你是的——指紋、臉部辨識）。同類別的兩個因子（如密碼 + 安全問題）不算 MFA。

## 關鍵面向
- **三大因子**：Knowledge（知識）/ Possession（持有）/ Inherence（生物）；部分框架加入 Location（位置）與 Behavior（行為）
- **常見組合**：密碼 + OTP（TOTP/SMS）、密碼 + 硬體金鑰（YubiKey）、生物辨識 + PIN
- **SMS OTP 的弱點**：SIM swap 攻擊、SS7 協定漏洞；NIST 建議優先使用 TOTP 或 FIDO2
- **FIDO2/WebAuthn**：無密碼（passwordless）的進階型態，用公鑰密碼學取代知識因子
- **使用者摩擦**：MFA 增加登入步驟，需在安全性與使用者體驗之間平衡

## 應用場景
- **Simon 工作場景**：**SQL Server MFA 專案**（目前進行中）——為資料庫存取加上多因子驗證；公司 VPN 登入 MFA；Omnissa MDM 管理後台 MFA；ISO 27001 A.9.4.2 安全登入程序
- **一般場景**：銀行網路銀行強制 MFA、雲端服務（AWS/Azure/GCP）root 帳號 MFA、企業 Email MFA

## 相關概念
- [[authentication]]：MFA 是 authentication 的增強版
- [[sso-single-sign-on]]：SSO + MFA 是現代企業身份管理標配
- [[aaa-framework]]：MFA 強化 AAA 的第一個 A（Authentication）
- [[principle-of-least-privilege]]：MFA 保護的是進入系統的大門，PoLP 管的是進門後能做什麼
- [[public-key-infrastructure]]：FIDO2 依賴 PKI 架構

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-3-authentication-authorization-and-accounting/2-the-rise-of-sso-and-mfa|Course 5 Module 2 Section 3 Leaf 2 the rise of sso and mfa]]
