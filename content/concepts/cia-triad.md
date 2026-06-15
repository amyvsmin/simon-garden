---
title: "機密性完整性可用性三要素（CIA Triad）"
slug: cia-triad
aliases: [CIA Triad, CIA 三元組, 機密性完整性可用性, Confidentiality Integrity Availability, CIA, 資安三要素]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
資訊安全的基石模型，由三個核心目標構成：機密性（Confidentiality，確保只有授權者能存取）、完整性（Integrity，確保資料未被未授權篡改）、可用性（Availability，確保授權者在需要時能存取）。幾乎所有資安控制措施都是為了維護這三者之一或多者。

## 關鍵面向
- **機密性（Confidentiality）**：透過加密（[[cryptography]]）、存取控制（[[authorization]]）、資料分級實現
- **完整性（Integrity）**：透過雜湊（[[hash-function]]）、數位簽章、版本控制確保資料未被竄改
- **可用性（Availability）**：透過備援、負載平衡、災難復原確保服務不中斷
- **三者的張力**：加強機密性（如嚴格加密）可能降低可用性；實務上需依業務需求取捨平衡
- **延伸模型**：有些框架加入不可否認性（Non-repudiation）、鑑別性（Authenticity）

## 應用場景
- **Simon 工作場景**：ISO 27001 控制項對應（每個控制項都在維護 C、I 或 A）、Veeam 備份確保可用性、SQL Server MFA 強化機密性、資安 KPI 月簡報按 CIA 分類事件
- **一般場景**：資安政策制定的指導原則、弱點評估報告分類、安全架構設計審查

## 相關概念
- [[information-security]]：CIA Triad 是資訊安全的核心目標
- [[cryptography]]：實現機密性的主要技術手段
- [[hash-function]]：驗證完整性的工具
- [[risk]]：風險評估衡量的是 CIA 哪一面向受損
- [[compliance]]：法規通常要求保護 CIA 三面向

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 1
