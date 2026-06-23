---
title: "事件危急度（Incident Criticality）"
slug: incident-criticality
aliases: [Incident Criticality, incident criticality, 事件危急度, 危急度, 事件危急程度, criticality level, 事件急迫度]
category: 資安
confidence: 已驗證
created: 2026-06-23
---

## 定義
標示一個資安事件對組織損害程度的等級（高／中／低）。當分析師資訊不足、無法判斷損害程度時，先以「中（medium）」升級；待更有經驗的事件處理者檢視後，再上調或下修到「高」或「低」。事件的急迫度取決於它影響到的 [[asset]] 有多關鍵。

## 關鍵面向
- **三級**：high／medium／low
- **預設中、再調整**：資訊不足先給 medium、由資深處理者依更多資訊上調或下修
- **急迫度依資產關鍵度**：直接衝擊「營運必要資產」的事件，永遠優先於不影響營運的事件
- **對比例**：員工忘記密碼的多次登入失敗（低）vs 攻擊者對存放 PII 的資料庫或製造應用取得未授權存取（高）
- **與 triage 的關係**：[[triage]] 是「分流動作」、criticality 是「危急度等級」；分流時就是在替事件定危急度與優先序

## 應用場景
- **Simon 工作場景**：替告警設危急度，對應 ISO 27001 BIA 替系統排 RTO／RPO（越關鍵的系統、事件越急）
- **一般場景**：SOC 告警優先級、事件分流、值班處理順序

## 相關概念
- [[triage]]：分流時替事件定危急度與優先序
- [[incident-escalation]]：危急度決定該不該升、多急
- [[asset]]：資產關鍵度是急迫度的判準
- [[asset-classification]]：資產分級提供「哪些資產更關鍵」的依據

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/1-from-simple-activity-to-major-data-breach|Course 8 Module 2 Section 3 Leaf 1 From simple activity to major data breach]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/3-escalation-timing|Course 8 Module 2 Section 3 Leaf 3 Escalation timing]]
