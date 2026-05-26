---
title: "數位憑證（Digital Certificate）"
slug: digital-certificate
aliases: [digital certificate, 數位憑證, 電子憑證, X.509, SSL certificate, TLS certificate, 憑證]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
由 [[certificate-authority]]（CA）簽發的電子文件，將公鑰與持有者身份綁定在一起。最常見的格式是 X.509 v3，包含主體名稱、公鑰、有效期限、簽發者、序號與 CA 的數位簽章。

## 關鍵面向
- **內容結構**：主體（Subject）、公鑰、有效期、簽發者（Issuer）、序號、擴充欄位（SAN、Key Usage）
- **驗證流程**：用簽發 CA 的公鑰驗證憑證上的簽章 → 檢查有效期 → 檢查撤銷狀態（CRL/OCSP）
- **種類**：DV（網域驗證）、OV（組織驗證）、EV（延伸驗證）；依驗證嚴格度遞增
- **自簽憑證**：不經 CA 簽發、僅適合內部測試環境，瀏覽器會跳警告
- **撤銷機制**：私鑰外洩或組織變更時需即時撤銷，CRL 延遲問題用 OCSP Stapling 改善

## 應用場景
- **Simon 工作場景**：公司網站與內部系統的 SSL/TLS 憑證管理；到期前提醒更新避免服務中斷；ISO 27001 A.10.1.2 金鑰管理；SQL Server 連線加密憑證設定
- **一般場景**：HTTPS 加密、電子郵件簽章（S/MIME）、程式碼簽署、Wi-Fi 802.1X 認證

## 相關概念
- [[certificate-authority]]：簽發憑證的受信任機構
- [[public-key-infrastructure]]：憑證所屬的管理框架
- [[asymmetric-encryption]]：憑證的密碼學基礎
- [[non-repudiation]]：憑證讓數位簽章可驗證，支撐不可否認性

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
