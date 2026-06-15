---
title: "OAuth 授權（OAuth Authorization）"
slug: oauth-authorization
aliases: [OAuth, OAuth 2.0, OAuth Authorization, OAuth 授權, 開放授權, OAuth 授權框架]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
讓第三方應用程式在不取得使用者密碼的情況下，存取使用者資源的開放授權框架。OAuth 透過 token（權杖）機制將「認證」與「授權」分離，使用者只需同意授權範圍，不必交出帳密。

## 關鍵面向
- **核心流程**：使用者同意 → 授權伺服器發 token → 第三方用 token 存取資源；密碼全程不經過第三方
- **OAuth 2.0 四種授權流程**：Authorization Code（最安全、Server-side）、Implicit、Client Credentials、Resource Owner Password
- **Scope（範圍）**：限定 token 能存取的資源粒度，落實 [[principle-of-least-privilege]]
- **Token 生命週期**：Access Token 短效 + Refresh Token 長效，降低 token 外洩風險
- **與 authentication 的區別**：OAuth 本身是授權框架，不是認證協定；OIDC（OpenID Connect）才在 OAuth 上層加認證

## 應用場景
- **Simon 工作場景**：公司系統對接第三方 SaaS 時的 SSO 授權評估、ISO 27001 A.9.4.1 存取控制中審查第三方應用的授權範圍
- **一般場景**：用 Google 帳號登入第三方網站、GitHub OAuth App 授權存取 repo、API gateway 的 OAuth scope 管控

## 相關概念
- [[authentication]]：OAuth 處理授權、OIDC 加在上面才處理認證
- [[authorization]]：OAuth 是授權的實作框架之一
- [[principle-of-least-privilege]]：OAuth scope 設計的指導原則
- [[api]]：OAuth token 常用於 API 存取控制

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
