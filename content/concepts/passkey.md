---
title: "Passkey 與 FIDO2（無密碼驗證）"
slug: passkey
aliases: [Passkey, 通行金鑰, FIDO2, WebAuthn, CTAP, 無密碼驗證, passwordless, FIDO]
category: 資安・身分與存取
confidence: 已驗證
created: 2026-07-04
---

## 定義

**FIDO2** 是 FIDO 聯盟與 W3C 共同開發、目標**取代密碼**的開放驗證標準；**Passkey（通行金鑰）**是它的實作技術。基於**公開金鑰密碼系統**：註冊時裝置產生一對公私鑰，**私鑰存在裝置安全晶片、永不離開裝置**，公鑰交給伺服器。登入時裝置用私鑰對伺服器的挑戰訊息簽章、伺服器用公鑰驗證。因為沒有共享密碼可被竊，天生**抗釣魚、抗撞庫、抗伺服器外洩**。

## 關鍵面向

- **FIDO2 組成**：**WebAuthn**（W3C 標準 API，瀏覽器無密碼驗證）＋**CTAP**（Client to Authenticator Protocol，與外接驗證器通訊）。
- **驗證流程**：Face ID／Touch ID／PIN 只在**本機**確認「是本人在操作」→ 解鎖裝置裡的私鑰 → 私鑰對挑戰簽章 → 伺服器用公鑰驗證。生物特徵不會上傳伺服器。
- **常見陷阱**：**Passkey ≠ Face ID／Touch ID**。後者只是本機解鎖手段，Passkey（那對公私鑰）才是真正的登入憑證。
- **與 OTP 的取代關係**：OTP 可被釣魚／中間人竊取，Passkey 因私鑰不離裝置且綁定網域而免疫；新加坡、印度、馬來西亞等國銀行已開始淘汰 OTP 改用 Passkey。

## 應用場景

- **Simon 工作場景**：企業 SSO／MFA 升級方向、公司帳號防釣魚的下一步；評估以 Passkey 取代簡訊 OTP。
- **一般場景**：Google／Apple／Microsoft 帳號、各大網站無密碼登入。

## 相關概念

- [[authentication]]：Passkey 是無密碼身份驗證的主流實作
- [[mfa-multi-factor-authentication]]：Passkey 本身即結合持有因子（裝置）＋生物／PIN
- [[asymmetric-encryption]]：Passkey 的公私鑰機制建立在非對稱加密上
- [[digital-signature]]：登入靠私鑰對挑戰訊息簽章

## 來源

- [[1-learning/ipas/subject-1-planning/training-day1/2-cryptography-iam-and-risk|iPAS 培訓班 Day 1 下午 · 密碼學/IAM/風險]]
