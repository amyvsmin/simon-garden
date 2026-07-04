---
title: "數位信封（Digital Envelope / 混合式加密）"
slug: digital-envelope
aliases: [Digital Envelope, 數位信封, 混合加密, 混合式加密, Hybrid Encryption, 數位信封加密]
category: 資安
confidence: 已驗證
created: 2026-07-04
---

## 定義

結合對稱式與非對稱式加密優點的機制：用**對稱金鑰**（速度快）加密實際資料、再用**對方公鑰**（安全、免金鑰分發）把那把對稱金鑰包起來成「信封」。解決了對稱加密的金鑰分發難題，又避開非對稱加密加密大量資料太慢的問題。

## 關鍵面向

- **加密流程（四步）**：① 用對稱金鑰對明文加密 → 密文；② 用**對方公鑰**加密「對稱金鑰」→ 信封；③ 對方用**自己私鑰**解開信封取回對稱金鑰；④ 用對稱金鑰解密文得明文。
- **為什麼這樣設計**：非對稱加密算大量資料太慢、對稱加密卡在金鑰怎麼安全送過去；數位信封讓對稱金鑰搭非對稱的便車安全遞送、大資料仍走快速的對稱加密。
- **真實實例**：TLS／HTTPS 交握、PGP／GPG email 加密、S/MIME 都是數位信封的落地。
- **與數位簽章併用**：實務常「先簽章再裝信封」，同時達到機密性＋完整性＋不可否認性。

## 應用場景

- **Simon 工作場景**：TLS 憑證保護的內部網站與 API、加密 email（S/MIME）、VPN 金鑰交換。
- **一般場景**：任何「要加密傳大量資料、又沒有事先共享金鑰」的通訊。

## 相關概念

- [[symmetric-encryption]]：負責加密實際資料本體（快）
- [[asymmetric-encryption]]：負責把對稱金鑰安全包成信封
- [[cryptography]]：數位信封是混合式加密的代表做法
- [[digital-signature]]：常與數位信封搭配、補上完整性與不可否認性

## 來源

- [[1-learning/ipas/subject-1-planning/training-day1/2-cryptography-iam-and-risk|iPAS 培訓班 Day 1 下午 · 密碼學/IAM/風險]]
