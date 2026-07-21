---
title: "業務營運衝擊分析（Business Impact Analysis / BIA）"
slug: business-impact-analysis
aliases: [Business Impact Analysis, BIA, 業務營運衝擊分析, business impact analysis, 業務衝擊分析, 營運衝擊分析]
category: 資安・風險管理
confidence: 已驗證
created: 2026-06-23
---

## 定義
分析業務功能中斷可能對組織造成哪些影響的流程（Business Impact Analysis, BIA），是營運持續計畫（[[business-continuity-plan]]）的第一步。聚焦「哪些業務功能一旦中斷、會帶來什麼後果」，據此決定復原的優先序與資源分配。

## 關鍵面向
- **BCP 第一步**：先做 BIA，才能替後續的復原步驟排優先序
- **焦點**：業務功能中斷的「可能影響」，而非威脅本身
- **連動 RTO／RPO**（CISSP／實務補充，非本課逐字稿內容）：實務上 BIA 會替每個系統產出復原時間目標（RTO）與復原點目標（RPO）
- **流程定位**：資安團隊四階段流程（辨識資產 → 判斷威脅 → 偵測 → 建 BCP／DRP）裡，BIA 落在最後階段 BCP 的第一步

## 應用場景
- **Simon 工作場景**：ISO 27001 **目前正在做的階段**——盤點哪些系統／主機會影響營運，逐一列 RTO／RPO 與備份備援做法，正是 BIA 的落地
- **一般場景**：CISSP Domain 1（Security & Risk Management）高頻考點，常與 RTO／RPO、BCP／DRP 一起考

## 相關概念
- [[business-continuity-plan]]：BIA 是 BCP 的第一步
- [[disaster-recovery-plan]]：與 BCP 並行，復原資訊系統
- [[asset-classification]]：資產重要性是衝擊分析的輸入

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-3-your-impact-on-data-protection/2-disaster-recovery-and-business-continuity|Course 8 Module 1 Section 3 Leaf 2 Disaster recovery and business continuity]]
