---
title: "晶格密碼學"
slug: lattice-based-cryptography
aliases: [Lattice-based Cryptography, 晶格加密, LWE, Module-LWE, Learning With Errors]
category: 資安
confidence: 已驗證
created: 2026-05-07
query-count: 0
---

# 晶格密碼學

## 定義

以高維晶格（lattice）的數學難題為安全基礎的後量子密碼學分支。核心難題是 LWE（Learning With Errors）：給定矩陣 A 與向量 b = A·s + e，已知 A 與 b 求 s 與 e 是計算上不可行的。錯誤項 e 讓量子電腦也無法把它化約為「找週期」問題、避開 Shor 演算法。NIST PQC 三大主力 ML-KEM（Kyber）、ML-DSA（Dilithium）、FALCON 都建立於晶格之上。

## 關鍵面向

- **核心難題**：SVP（最短向量問題）、CVP（最近向量問題）、Basis Reduction（基底約簡）
- **維度要求**：實作上需上千維、二維的「直覺難題」其實不難、高維才產生計算上不可行
- **代數結構**：Kyber/Dilithium 在 Rq=Zq[x]/(x^256+1) 多項式環上運作、用 NTT（Number Theoretic Transform）加速
- **參數**：Kyber q=3329（係數範圍 0–3328）、Dilithium q=8,380,417；都是 256 個係數的多項式
- **公私鑰結構**：公鑰=(A, T)、私鑰=短向量(s, e)、T = A·s + e；逆推 s, e 即使量子電腦也算不出來
- **尺寸代價**：比 RSA/ECC 大、Kyber L1 公鑰 800 bytes、密文 1632 bytes；Dilithium 簽章數千 bytes
- **變體 Module-LWE**：把純 LWE 矩陣換成多項式環模組、降低尺寸與運算量、是 ML-KEM 的「ML」由來

## 應用場景

- Simon 工作場景：理解為什麼 PQC 物件膨脹（規劃 TLS 握手 MTU、協定升級時要評估）；CISSP Domain 3 / SSCP 出題重點
- 一般場景：所有 NIST PQC 主力演算法、Hybrid TLS、企業 VPN／PKI 的後量子升級

## 相關概念

- [[post-quantum-cryptography]]：晶格密碼是 PQC 主流分支
- [[mosca-theorem]]：晶格密碼工具鏈成熟讓遷移期 y 可以壓短

## 尚未解決的疑問

- 晶格密碼是否在數十年後仍會被新數學工具破解
- 側信道防護成熟度（常數時間實作普及度）

## 來源（自動維護）

- [[2026-05-07-jimmy-chen-pqc-migration-cybersec]]
