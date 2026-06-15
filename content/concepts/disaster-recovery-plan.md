---
title: "災難復原計畫（Disaster Recovery Plan / DRP）"
slug: disaster-recovery-plan
aliases: [Disaster Recovery Plan, DRP, 災難復原計畫, 災害復原計畫, disaster recovery plan, 災備計畫]
category: 資安
confidence: 待驗證
created: 2026-06-13
---

## 定義
在重大災難後復原「資訊系統」的計畫（Disaster Recovery Plan, DRP）。災難範圍從硬體故障到天災（如洪水）摧毀設施都算。DRP 聚焦在資訊系統的復原，與著眼整體營運的 [[business-continuity-plan]]（BCP）互補但不同。

## 關鍵面向
- **聚焦資訊系統**：對象是資訊系統的復原，範圍比 BCP 窄
- **與 BCP 的差別**：BCP 維持「整體營運持續」；DRP 只負責「資訊系統在災後的復原」——常被一起討論但分工不同
- **災難範圍廣**：含硬體故障、設施被天災摧毀等，不限資安事件
- **與復原動作的關係**：實作時用 [[recovery]] 動作（reimaging、還原備份）與 [[site-resilience]]（備援站點）

## 應用場景
- **Simon 工作場景**：對應 ISO 27001 的 IT 服務持續與備份備援；機房、伺服器、儲存的災後還原規劃
- **一般場景**：資料中心災備、IT 服務復原、備份還原演練

## 相關概念
- [[business-continuity-plan]]：著眼整體營運，與 DRP 互補
- [[recovery]]：DRP 落地時的復原動作
- [[site-resilience]]：DRP 倚賴的備援站點策略

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/5-business-continuity-considerations|Course 6 Module 3 Section 3 Leaf 5 Business continuity considerations]]
