---
title: "密碼敏捷性"
slug: crypto-agility
aliases: [Cryptographic Agility, Crypto Agility, 密碼敏捷, 演算法可換, 加密敏捷性]
category: 資安
confidence: 已驗證
created: 2026-05-07
query-count: 0
---

# 密碼敏捷性

## 定義

系統設計時把加密演算法當成可替換的元件、而非寫死在程式碼裡的能力。當演算法被破解、被棄用、或被新標準取代時、能在不重做整個系統的前提下換掉。陳君明 PQC Forum 強調：在 PQC 標準仍會持續修訂、攻擊面持續演進的背景下、密碼敏捷性是比「選對演算法」更重要的長期能力。

## 關鍵面向

- **設計原則**：演算法、金鑰長度、模式、padding 全都用設定檔／OID／套件版本可換、不寫死
- **混合密碼（Hybrid）**：過渡期常見實作模式、傳統演算法（RSA/ECC）+ PQC 並列、任一者破解仍有保護；composite 與 non-composite 兩種混合方式
- **協定層支援**：TLS 1.3 hybrid key exchange、X.509 hybrid certificate、IPsec／QUIC／S/MIME 都需協定升級
- **挑戰**：營運複雜度上升、雙棧維護成本、相容性測試矩陣指數膨脹
- **政策驅動**：NIST、歐盟路線圖都把 crypto agility 列為長期治理目標、不只是 PQC 一次性遷移

## 應用場景

- Simon 工作場景：公司既有 SSL/TLS 終端設備、HSM、CA 採購規格時加上「演算法可換」條款；OpenSSL 等基礎函式庫升級時驗證敏捷介面
- 一般場景：金融、政府、雲端服務、任何長期維運的加密系統

## 相關概念

- [[post-quantum-cryptography]]：PQC 標準會持續演進、敏捷性是長線解
- [[mosca-theorem]]：敏捷性可大幅縮短遷移期 y、提升安全餘裕
- [[cbom]]：先有盤點才能談敏捷、CBOM 是基礎

## 尚未解決的疑問

- 如何量化「敏捷成熟度」、目前無業界統一指標
- 混合密碼的長期維運成本是否會反過來阻礙 agility

## 來源（自動維護）

- [[2026-05-07-jimmy-chen-pqc-migration-cybersec]]
