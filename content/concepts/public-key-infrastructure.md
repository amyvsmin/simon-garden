---
title: "公鑰基礎建設（PKI）"
slug: public-key-infrastructure
aliases: [PKI, public key infrastructure, 公鑰基礎建設, 公鑰架構, 公開金鑰基礎建設]
category: 資安・架構與工程
confidence: 已驗證
created: 2026-05-25
updated: 2026-07-06
---

## 定義
管理數位憑證（digital certificate）與公私鑰對的加密框架，涵蓋憑證的簽發、分配、儲存、撤銷與驗證全流程。PKI 是 [[asymmetric-encryption]] 在真實世界大規模部署的信任基礎。

## 關鍵面向
- **核心元件（PKI 三角色）**：[[certificate-authority]]（CA）簽發與管理憑證、**RA**（Registration Authority，註冊中心）審查並驗證申請者身份、**VA**（Validation Authority，驗證中心）提供憑證狀態查詢
- **撤銷查詢兩法**：**CRL**（Certificate Revocation List，下載完整撤銷清單、可離線查）vs **OCSP**（Online Certificate Status Protocol，線上即時查單筆憑證狀態）
- **信任鏈**：Root CA → Intermediate CA → End-entity Certificate，層層簽署形成信任鏈（chain of trust）
- **憑證生命週期**：申請 → 簽發 → 使用 → 續期 → 撤銷，每階段都有安全控制
- **應用協定**：TLS/SSL（HTTPS）、S/MIME（郵件簽章）、程式碼簽署（code signing）
- **後量子挑戰**：[[post-quantum-cryptography]] 遷移將影響整個 PKI 體系的演算法基礎

## 應用場景
- **Simon 工作場景**：公司內部 CA 管理伺服器 SSL 憑證；SQL Server 連線加密依賴 PKI；ISO 27001 A.10.1.2 金鑰管理對應；未來 FIDO2 passwordless 也依賴 PKI
- **一般場景**：HTTPS 網站憑證管理、企業 VPN 身份驗證、電子簽章、IoT 裝置身份驗證

## 相關概念
- [[certificate-authority]]：PKI 的核心信任錨點
- [[digital-certificate]]：PKI 簽發的產物
- [[asymmetric-encryption]]：PKI 的密碼學基礎
- [[non-repudiation]]：PKI 提供不可否認性的技術支撐
- [[post-quantum-cryptography]]：PKI 未來需遷移的方向

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-2-encryption-methods/2-public-key-infrastructure|Course 5 Module 2 Section 2 Leaf 2 public key infrastructure]]
