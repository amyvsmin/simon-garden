---
title: "NIST AI RMF（AI 風險管理框架）"
slug: nist-ai-rmf
aliases: [NIST AI RMF, AI Risk Management Framework, AI 風險管理框架, NIST AI 100-1, AI RMF]
category: AI 與 Agent
confidence: 已驗證
created: 2026-07-06
---

## 定義

美國 NIST 發布的 **AI 風險管理框架（AI RMF 1.0，NIST AI 100-1，2023 年 1 月）**，協助組織識別、評估、管理 AI 系統的風險。性質是**指導性／自願性**框架（不是強制法令、也不發驗證證書），與 EU AI Act（強制法令）、ISO 42001（可驗證管理系統）、Google SAIF 併列，是近年 AI 治理體系裡常考「哪個適用／不適用」的一員。

## 關鍵面向

- **四大核心功能**：**治理（Govern）**——貫穿其餘三者、建立 AI 風險文化與權責；**界定（Map）**——釐清使用脈絡與風險；**量測（Measure）**——分析、評估、追蹤風險；**管理（Manage）**——依優先序處置風險。
- **七項可信任性特性**（呼應 [[ai-trustworthiness]]）：有效可靠、安全、安全且具韌性、可歸責且透明、可解釋且可詮釋、隱私增強、公平且管理有害偏差。
- **性質定位（常考對照）**：指導性框架，回答「怎麼管理 AI 風險」；不像 EU AI Act 有強制力、也不像 ISO 42001 可拿驗證。
- **AI 治理框架對照表**：

  | 標準 | 性質 | 適用 |
  |---|---|---|
  | ISO 42001（AIMS） | 管理系統、可驗證 | 組織建立 AI 治理制度 |
  | NIST AI RMF | 風險框架、指導性 | 識別評估管理 AI 風險 |
  | EU AI Act | 法令、強制 | 在歐盟營運的 AI 系統合規（風險四級） |
  | Google SAIF | 廠商框架 | AI 全生命週期安全治理 |
  | ❌ ISO 27006 | 認證機構規範 | 與 AI 治理**無關**（常見干擾項） |

## 應用場景

- **Simon 工作場景**：公司評估導入 AI 工具（如 AI 客服、AI 資安維運）時，用 Govern→Map→Measure→Manage 盤點風險並對照 ISO 42001 建制度；回答稽核「我們怎麼管 AI 風險」時有框架可依。
- **一般場景**：企業 AI 治理制度、[[ai-trustworthiness]] 落地、iPAS 中級 AI 治理標準辨識題。

## 相關概念

- [[ai-trustworthiness]]：AI RMF 的七項特性就是可信任性的具體拆解
- [[secure-ai-framework]]：Google SAIF 與 AI RMF 同為 AI 治理框架、角度互補
- [[ai-security-risk]]：AI RMF 是系統性管理這些風險的方法
- [[risk]]：AI RMF 是通用風險管理在 AI 領域的專門化

## 來源

- [HackMD·iPAS 中級考試重點整理（hiiii）](https://hackmd.io/@hiiii/H1ZZ-8qBbx)
- NIST AI RMF 1.0（NIST AI 100-1，2023-01）
