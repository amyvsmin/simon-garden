---
title: "憑證機構（Certificate Authority）"
slug: certificate-authority
aliases: [CA, certificate authority, 憑證機構, 憑證中心, 認證中心, 憑證簽發機構]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
負責簽發、管理與撤銷數位憑證的受信任第三方機構。CA 用自己的私鑰對 [[digital-certificate]] 簽章，讓依賴方（relying party）能透過 CA 的公鑰驗證憑證真偽，是 [[public-key-infrastructure]] 的信任錨點。

## 關鍵面向
- **層級架構**：Root CA（離線保護私鑰）→ Intermediate CA（日常簽發）→ End-entity Certificate，Root CA 被攻陷等於整條信任鏈崩潰
- **公共 vs 私有**：公共 CA（Let's Encrypt、DigiCert）供外部服務；企業內部 CA（AD CS）供內網系統
- **簽發流程**：申請者產生 CSR（Certificate Signing Request）→ CA 驗證身份 → 簽發憑證
- **撤銷責任**：CA 維護 CRL（憑證撤銷清單）與 OCSP（線上憑證狀態協定）服務
- **信任儲存區**：瀏覽器與作業系統內建受信任 Root CA 清單，決定哪些 CA 被自動信任

## 應用場景
- **Simon 工作場景**：公司若有 Windows AD 環境，AD CS 就是內部 CA；管理伺服器 SSL 憑證到期更新；ISO 27001 A.10.1.2 控制項要求金鑰與憑證管理程序
- **一般場景**：Let's Encrypt 免費自動化憑證、企業 MDM 派發用戶端憑證、程式碼簽署驗證軟體來源

## 相關概念
- [[digital-certificate]]：CA 簽發的產物
- [[public-key-infrastructure]]：CA 所屬的管理框架
- [[non-repudiation]]：CA 簽章讓數位簽章可被第三方驗證
- [[asymmetric-encryption]]：CA 簽章依賴的密碼學基礎

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
