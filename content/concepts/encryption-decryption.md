---
title: "加密與解密（Encryption & Decryption）"
slug: encryption-decryption
aliases: [encryption, decryption, 加密, 解密, 加密與解密, encryption and decryption, 密文, 明文, ciphertext, plaintext]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
將明文（plaintext）透過演算法與金鑰轉換為不可讀的密文（ciphertext）稱為加密；反向以正確金鑰將密文還原為明文稱為解密。加解密是 [[cryptography]] 的核心操作，保護資料的機密性（[[cia-triad]] 中的 Confidentiality）。

## 關鍵面向
- **對稱式加密**：[[symmetric-encryption]] 加解密用同一把金鑰，速度快，適合大量資料（AES、ChaCha20）
- **非對稱式加密**：[[asymmetric-encryption]] 用公鑰加密、私鑰解密，解決金鑰交換問題（RSA、ECC）
- **混合加密**：實務上常以非對稱加密交換對稱金鑰，再用對稱加密傳資料（TLS 握手）
- **加密狀態**：資料在傳輸中（in transit）、靜止時（at rest）、使用中（in use）三種狀態都需要加密策略
- **金鑰管理**：加密強度取決於金鑰管理而非演算法保密（Kerckhoffs 原則）

## 應用場景
- **Simon 工作場景**：SQL Server TDE（透明資料加密）保護靜態資料；公司 VPN 加密傳輸中資料；Veeam 備份加密防止備份資料外洩；ISO 27001 A.10.1 加密政策對應
- **一般場景**：HTTPS/TLS 網頁加密、磁碟全加密（BitLocker/LUKS）、端到端加密通訊（Signal）

## 相關概念
- [[cryptography]]：加解密所屬的上位學科
- [[symmetric-encryption]]：單金鑰加密方式
- [[asymmetric-encryption]]：雙金鑰加密方式
- [[hash-function]]：單向運算，不屬於加解密但常搭配使用
- [[public-key-infrastructure]]：管理非對稱加密金鑰的框架

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
