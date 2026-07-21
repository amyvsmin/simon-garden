---
title: "單一登入（Single Sign-On / SSO）"
slug: sso-single-sign-on
aliases: [SSO, single sign-on, 單一登入, 單點登入, 統一登入, SAML, OIDC]
category: 資安・身分與存取
confidence: 已驗證
created: 2026-05-25
---

## 定義
使用者只需通過一次 [[authentication]] 即可存取多個系統或應用程式的身份驗證機制。SSO 減少密碼疲勞（password fatigue）、降低重複登入的摩擦，同時集中化身份管理，提升安全可控性。

## 關鍵面向
- **主流協定**：SAML 2.0（企業級 Web SSO）、OIDC/OAuth 2.0（現代 API/App SSO）、Kerberos（Windows AD 內網 SSO）
- **身份提供者**（IdP）：集中管理使用者身份的服務（如 Azure AD、Okta、Google Workspace）
- **安全優勢**：減少密碼數量 → 降低弱密碼與密碼重用風險；帳號停用只需在 IdP 一處操作
- **風險集中**：IdP 被攻陷 = 所有連接系統全部暴露；必須搭配 [[mfa-multi-factor-authentication]] 做縱深防禦
- **使用者體驗**：登入一次就能穿梭多系統，大幅降低使用者抗拒資安措施的心理

## 應用場景
- **Simon 工作場景**：公司 AD 整合的 Windows SSO（Kerberos）；未來 FIDO2 passwordless 可搭配 SSO；若導入 SaaS（如 Omnissa）需與公司 IdP 整合 SSO；SQL Server MFA 專案可能涉及 SSO 整合
- **一般場景**：「用 Google 登入」「用 Apple 登入」就是 OIDC SSO；企業導入 Okta/Azure AD 整合內部數十個系統

## 相關概念
- [[authentication]]：SSO 的基礎——先驗證身份才能發 token
- [[mfa-multi-factor-authentication]]：SSO 必須搭配 MFA 避免單點失陷風險
- [[aaa-framework]]：SSO 處理的是 AAA 中的 Authentication 環節
- [[authorization]]：SSO 解決認證後，授權仍需各系統各自控制
- [[cloud-computing]]：雲端多服務環境是 SSO 的主要場景

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-3-authentication-authorization-and-accounting/2-the-rise-of-sso-and-mfa|Course 5 Module 2 Section 3 Leaf 2 the rise of sso and mfa]]
