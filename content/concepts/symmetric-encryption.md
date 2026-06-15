---
title: "對稱加密（Symmetric Encryption）"
slug: symmetric-encryption
aliases: [Symmetric Encryption, 對稱加密, 對稱式加密, symmetric key, 對稱金鑰, secret key encryption]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
加密與解密使用同一把金鑰的加密方法。速度快、運算成本低，適合大量資料加密。主要挑戰在於金鑰分發——如何安全地把金鑰傳給對方。

## 關鍵面向
- **代表演算法**：AES（Advanced Encryption Standard，目前業界標準）、3DES（已逐步淘汰）、ChaCha20（行動裝置常用）
- **AES 金鑰長度**：128 / 192 / 256 位元；256 位元被認為足以抵抗量子攻擊
- **優點**：加解密速度快、適合大量資料（磁碟加密、資料庫加密、檔案加密）
- **缺點**：金鑰分發問題——需先有安全通道傳遞金鑰；通常用 [[asymmetric-encryption]] 交換對稱金鑰
- **與非對稱加密的搭配**：實務上 TLS/HTTPS 用非對稱加密交換對稱金鑰、再用對稱加密傳輸資料（混合加密）

## 應用場景
- **Simon 工作場景**：Veeam 備份加密（AES-256）、SQL Server TDE 使用對稱金鑰加密資料庫、BitLocker 磁碟加密
- **一般場景**：Wi-Fi WPA3 加密、VPN 隧道資料加密、雲端儲存加密

## 相關概念
- [[asymmetric-encryption]]：對偶概念，用公私鑰成對加解密
- [[cryptography]]：對稱加密是密碼學的兩大分支之一
- [[data-states]]：at rest 加密主要用對稱加密
- [[hash-function]]：常與對稱加密搭配用於完整性驗證

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-2-encryption-methods/3-symmetric-and-asymmetric-encryption|Course 5 Module 2 Section 2 Leaf 3 symmetric and asymmetric encryption]]
