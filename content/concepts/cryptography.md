---
title: "密碼學（Cryptography）"
slug: cryptography
aliases: [Cryptography, 密碼學, 加密技術, 加密學, encryption, 加密]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
把可讀訊息（明文，plaintext）轉為不可讀形式（密文，ciphertext）、確保通訊安全的技術與科學。密碼學是實現機密性（[[cia-triad]]）的核心技術手段，同時也用於完整性驗證與身份鑑別。

## 關鍵面向
- **加密與解密**：加密（encrypt）把明文變密文、解密（decrypt）把密文還原明文；需要金鑰（key）
- **兩大類型**：[[symmetric-encryption]]（對稱，同一把金鑰）與 [[asymmetric-encryption]]（非對稱，公私鑰成對）
- **密碼學不只是加密**：還包含雜湊（[[hash-function]]）、數位簽章、金鑰交換協定
- **Kerckhoffs 原則**：演算法可公開、安全性只依賴金鑰保密；現代密碼學的基本假設
- **歷史演進**：凱撒密碼 → Enigma → DES → AES → RSA → ECC → [[post-quantum-cryptography]]

## 應用場景
- **Simon 工作場景**：SQL Server TLS 連線加密、Veeam 備份加密、Obsidian Sync 的 E2E 加密（密碼已存密碼管理器）、ISO 27001 密碼控制項 A.10
- **一般場景**：HTTPS 網頁加密、VPN 通道、電子郵件加密（PGP/S-MIME）、磁碟加密

## 相關概念
- [[symmetric-encryption]]：對稱加密，用同一把金鑰加解密
- [[asymmetric-encryption]]：非對稱加密，公私鑰成對
- [[hash-function]]：單向轉換，不是加密但屬密碼學範疇
- [[cia-triad]]：密碼學主要維護機密性與完整性
- [[data-states]]：三態資料各需不同加密策略
- [[post-quantum-cryptography]]：下一代抗量子密碼學

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
