---
title: "事件升級（Incident Escalation）"
slug: incident-escalation
aliases: [Incident Escalation, incident escalation, 事件升級, 事故升級, 升級, escalation, 資安事件升級]
category: 資安
confidence: 已驗證
created: 2026-06-23
---

## 定義
辨識一個潛在資安事件、對它做 [[triage]]（分流），並在適當時把它交給更有經驗的團隊成員的過程。核心提醒——不是每個事件都需要升級；入門分析師的價值，在於把該升的 security event 在它惡化成重大 [[security-incident]] 前交到對的人手上。

## 關鍵面向
- **三步驟**：辨識潛在事件 → triage（分流判斷）→（必要時）交給更有經驗者
- **兩項必備技能**：① 注意細節（attention to detail，快速察覺異常）；② 能遵循組織的 [[escalation-policy]]（升級政策）。前者負責「發現」、後者負責「正確處理」
- **不是每件都升**：依 [[incident-criticality]]（危急度）與受影響 [[asset]] 的關鍵度判斷該不該升、多急
- **升給誰**：入門分析師實務上通常升給直屬主管；更細的對口角色見 [[data-governance-roles]]
- **不升的代價**：小事件拖太久會滾成大型外洩，造成金錢損失、客戶資料外洩、商譽受損

## 應用場景
- **Simon 工作場景**：身為公司內部 IT 第一線，查 log／看告警時判斷「自己處理掉就好，還是要往上報主管 Sam、走通報流程」；推 ISO 27001 的事件通報程序正是它的制度化
- **一般場景**：SOC 告警處理、entry-level 分析師日常事件決策、事件管理流程

## 相關概念
- [[triage]]：升級前的分流動作，決定輕重緩急
- [[escalation-policy]]：規範「升給誰、怎麼升」的文件
- [[incident-criticality]]：判斷該不該升、多急的依據
- [[security-incident]]：升級處理的對象（造成或可能造成外洩的事件）
- [[incident-response]]：事件升級是 IR 流程的一環

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-1-escalation-in-cybersecurity/2-the-importance-of-escalation|Course 8 Module 2 Section 1 Leaf 2 The importance of escalation]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-1-escalation-in-cybersecurity/3-escalate-with-a-purpose|Course 8 Module 2 Section 1 Leaf 3 Escalate with a purpose]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/3-escalation-timing|Course 8 Module 2 Section 3 Leaf 3 Escalation timing]]
