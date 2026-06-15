---
title: "營運持續計畫（Business Continuity Plan / BCP）"
slug: business-continuity-plan
aliases: [Business Continuity Plan, BCP, 營運持續計畫, 業務持續計畫, business continuity plan, 營運不中斷計畫]
category: 資安
confidence: 已驗證
created: 2026-06-13
---

## 定義
列出在重大中斷期間與之後維持營運的程序的文件（Business Continuity Plan, BCP）。跟 [[incident-response-plan]] 類似，目的是確保關鍵業務功能在事件發生時能持續或快速恢復。系統與服務的長期中斷會造成法律、財務、商譽損害，BCP 讓組織在重大中斷中仍能運作。入門級分析師通常不負責 BCP 的開發與測試，但要理解它提供的「結構化應變與復原方式」。

## 關鍵面向
- **著眼整體營運**：維持「整體業務營運」的持續，不只是資訊系統
- **與 DRP 的差別**：[[disaster-recovery-plan]]（DRP）聚焦在重大災難後復原「資訊系統」；BCP 範圍更廣、涵蓋整體營運
- **含復原策略**：可納入 [[site-resilience]]（站點韌性，hot／warm／cold site）等 [[recovery]] 策略
- **關鍵基礎設施情境**：勒索軟體攻擊 [[critical-infrastructure]]（如醫療）可癱瘓必要服務，BCP 把營運中斷降到最低
- **損害面向**：避免長期中斷造成法律、財務、商譽三重損害

## 應用場景
- **Simon 工作場景**：對應 ISO 27001 BIA／RTO／RPO 與備份備援規劃；公司 Veeam 備份、異地備援是其落地
- **一般場景**：企業營運韌性、合規要求的持續營運計畫

## 相關概念
- [[disaster-recovery-plan]]：聚焦資訊系統復原，與 BCP 互補
- [[site-resilience]]：BCP 的復原策略之一
- [[recovery]]、[[incident-response-plan]]：相關的應變與復原文件
- [[critical-infrastructure]]：BCP 在關鍵基礎設施特別重要

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/5-business-continuity-considerations|Course 6 Module 3 Section 3 Leaf 5 Business continuity considerations]]
