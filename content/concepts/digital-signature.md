---
title: "數位簽章（Digital Signature）"
slug: digital-signature
aliases: [Digital Signature, 數位簽章, 數位簽署, digital sign]
category: 資安
confidence: 已驗證
created: 2026-07-04
---

## 定義

用**簽章者的私鑰**對訊息（實務上是訊息的雜湊值）加密產生一段簽章，任何人都能用對應的**公鑰驗證**。同時提供**完整性**（訊息被改就驗不過）與**不可否認性**（只有私鑰持有者簽得出來）。方向與非對稱「加密」相反——加密用**對方公鑰**、簽章用**自己私鑰**。

## 關鍵面向

- **流程**：訊息 → 算雜湊 → 用**自己私鑰**簽 → 附在訊息後送出；收方用**簽章者公鑰**還原雜湊、與自己重算的雜湊比對，一致即通過。
- **提供什麼**：完整性（[[hash-function]]）＋不可否認性（[[non-repudiation]]）＋身份鑑別；**不提供機密性**（簽章不等於加密、內容仍是明文）。
- **與加密方向相反（最愛考的陷阱）**：加密＝對方公鑰加密／對方私鑰解；簽章＝自己私鑰簽／對方用我公鑰驗。
- **演算法**：RSA、DSA、ECDSA、EdDSA；後量子對應 [[post-quantum-cryptography]] 的 **FIPS 204 ML-DSA**、**FIPS 205 SLH-DSA**。
- **實作依託**：憑證與信任鏈由 [[public-key-infrastructure]]／[[digital-certificate]] 提供。

## 應用場景

- **Simon 工作場景**：程式碼／驅動簽章（Windows Authenticode）、[[secure-boot]] 韌體驗證、伺服器 TLS 憑證、電子公文與 email 簽章。
- **一般場景**：軟體更新完整性驗證、區塊鏈交易簽章、電子契約。

## 相關概念

- [[asymmetric-encryption]]：數位簽章是非對稱加密的兩大用途之一（另一是加密）
- [[non-repudiation]]：數位簽章是實現不可否認性的主要手段
- [[hash-function]]：簽章實際簽的是訊息雜湊、不是整份訊息
- [[public-key-infrastructure]]：提供公鑰真偽的信任基礎
- [[post-quantum-cryptography]]：量子威脅下數位簽章遷移到 ML-DSA／SLH-DSA

## 來源

- [[1-learning/ipas/subject-1-planning/training-day1/2-cryptography-iam-and-risk|iPAS 培訓班 Day 1 下午 · 密碼學/IAM/風險]]
