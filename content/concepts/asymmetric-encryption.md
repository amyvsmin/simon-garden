---
title: "非對稱加密（Asymmetric Encryption）"
slug: asymmetric-encryption
aliases: [Asymmetric Encryption, 非對稱加密, 非對稱式加密, public key cryptography, 公鑰加密, 公開金鑰加密]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
使用公鑰（public key）與私鑰（private key）成對的加密方法。公鑰加密、私鑰解密（確保機密性）；私鑰簽章、公鑰驗證（確保身份鑑別與不可否認性）。解決了對稱加密的金鑰分發問題，但運算速度較慢。

## 關鍵面向
- **代表演算法**：RSA（基於大數質因數分解）、ECC（基於橢圓曲線、同等安全性金鑰更短）
- **兩種用途**：加密（公鑰加密 → 私鑰解密）與數位簽章（私鑰簽章 → 公鑰驗證）
- **金鑰分發優勢**：公鑰可公開、不怕被截獲；解決了 [[symmetric-encryption]] 的核心難題
- **速度劣勢**：比對稱加密慢數百倍，不適合大量資料；實務上用來交換對稱金鑰（混合加密）
- **量子威脅**：RSA 與 ECC 都會被量子電腦破解（Shor 演算法），[[post-quantum-cryptography]] 正在取代

## 應用場景
- **Simon 工作場景**：SSH key pair 登入伺服器、SSL/TLS 憑證管理、程式碼簽章驗證軟體來源
- **一般場景**：HTTPS 網頁加密的金鑰交換階段、電子郵件加密（PGP）、區塊鏈交易簽章

## 相關概念
- [[symmetric-encryption]]：對偶概念，實務上兩者搭配使用
- [[cryptography]]：非對稱加密是密碼學的兩大分支之一
- [[hash-function]]：數位簽章 = 先雜湊再用私鑰加密
- [[authentication]]：數位簽章用於身份鑑別
- [[post-quantum-cryptography]]：RSA/ECC 的下一代替代方案

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
