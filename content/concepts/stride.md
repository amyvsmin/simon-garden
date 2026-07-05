---
title: "STRIDE 威脅建模框架"
slug: stride
aliases: [STRIDE, STRIDE 模型, STRIDE 框架, Spoofing Tampering Repudiation, 微軟威脅建模]
category: 資安
confidence: 已驗證
created: 2026-05-30
---

## 定義

STRIDE 是微軟開發的威脅建模框架，用來逐一檢查六類攻擊向量。字首縮寫 STRIDE 各代表一種威脅類型，可直接當威脅檢查清單使用。

## 關鍵面向

- **六類威脅（STRIDE）**：**S**poofing（偽冒身分）、**T**ampering（竄改資料）、**R**epudiation（否認行為）、**I**nformation disclosure（資訊洩漏）、**D**enial of service（阻斷服務）、**E**levation of privilege（權限提升）
- **逐向量盤點**：跟 [[pasta-framework]] 的風險導向不同，STRIDE 偏「逐一檢查每種威脅類型有沒有可能發生」，適合當入門 checklist
- **微軟出身**：源自微軟軟體開發安全實踐，常用於應用程式設計階段
- **對應防禦**：每類威脅有對應的防禦目標（如 Spoofing↔認證、Tampering↔完整性、Repudiation↔稽核紀錄）

## 應用場景

- **Simon 工作場景**：對公司系統做第一次威脅建模時，STRIDE 六個字母最直覺——當檢查清單逐項問「這個系統會不會被偽冒／竄改／否認／洩漏／阻斷／提權」；資產盤點後可接 STRIDE 做威脅識別
- **一般場景**：SDLC 安全設計、應用程式威脅建模、資安證照考試（CISSP Domain 8 必背六字母）

## 相關概念

- [[threat-modeling]]：STRIDE 是其中一種框架
- [[pasta-framework]]：另一個常見框架（風險導向、證據為本）
- [[attack-vector]]：STRIDE 逐一檢查的對象
- [[cia-triad]]：STRIDE 六類威脅多對應到破壞 CIA 的某一面向

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/5-traits-of-an-effective-threat-model|Course 5 Module 4 Section 4 Leaf 5 Traits of an effective threat model]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
