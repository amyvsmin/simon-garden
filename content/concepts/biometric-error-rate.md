---
title: "生物辨識錯誤率（FAR / FRR / CER）"
slug: biometric-error-rate
aliases: [生物辨識錯誤率, Biometric Error Rate, FAR, FRR, CER, EER, 錯誤接受率, 錯誤拒絕率, 交叉錯誤率, 等錯誤率]
category: 資安
confidence: 已驗證
created: 2026-07-04
---

## 定義

衡量生物辨識系統準確度的三個指標。系統靈敏度可調，但調高調低會在「放錯人進來」與「把本人擋在外面」之間拉扯，FAR 與 FRR 就是這兩種錯誤的比率，CER 則用來標定最佳平衡點。

## 關鍵面向

- **FAR（錯誤接受率，False Acceptance Rate）**：把**不合法者誤認為合法**（漏判、放錯人進來）。靈敏度**調低**時偏高，是**資安上比較危險**的錯誤。
- **FRR（錯誤拒絕率，False Rejection Rate）**：把**合法者誤認為不合法**（誤判、把本人擋掉）。靈敏度**調高**時偏高，傷害的是**使用者體驗**。
- **CER（交叉錯誤率，Crossover Error Rate，又稱 EER 等錯誤率）**：FAR 與 FRR 兩條曲線的**交叉點**，代表系統整體準確度的單一指標。**CER 越低、系統越準**；比較不同生物辨識產品時看 CER。
- **權衡**：門禁高安全場所寧可 FRR 高一點（多驗幾次）也要壓低 FAR；便利導向場景則反過來。

## 應用場景

- **Simon 工作場景**：評估指紋／臉部門禁與筆電生物登入方案時，用 CER 比較產品，依場所安全需求調靈敏度。
- **一般場景**：手機解鎖、機場通關、銀行生物驗證。

## 相關概念

- [[authentication]]：生物辨識屬「something you are」認證因子
- [[mfa-multi-factor-authentication]]：生物因子常作為 MFA 的一環

## 來源

- [[1-learning/ipas/subject-1-planning/training-day1/2-cryptography-iam-and-risk|iPAS 培訓班 Day 1 下午 · 密碼學/IAM/風險]]
