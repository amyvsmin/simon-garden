---
title: "電腦資安事件應變小組（CSIRT）"
slug: csirt
aliases: [CSIRT, computer security incident response team, 電腦資安事件應變小組, 事件應變小組, IHT, incident handling team, SIRT, security incident response team]
category: 資安
confidence: 待驗證
created: 2026-06-05
query-count: 0
---

## 定義
受過事件管理與應變訓練的專業資安團隊。三大目標：有效率地管理事件、提供應變與復原所需的服務與資源、預防未來事件再發生。CSIRT 含資安與非資安人員（HR、公關、管理層、IT、法務），結構可以是專責團隊或臨時任務編組；別名 IHT（Incident Handling Team）、SIRT（Security Incident Response Team），有些併入 [[soc]]。

## 關鍵面向
- **三要素**：command（領導與方向）、control（管理技術面、協調資源分派任務）、communication（讓 stakeholder 知情）
- **三大資安角色**：security analyst（triage 告警、root-cause 調查、判嚴重度、升級或自結）→ technical lead（定根因、擬定執行 containment／eradication／recovery、對齊業務優先序）→ incident coordinator（跨部門協調、保持溝通、同步狀態；別名 incident commander／manager）
- **其他角色**：communications lead、legal lead、planning lead
- **跨部門**：資安是共同責任，外洩敏感資料找法務、限期揭露找公關

## 應用場景
- **Simon 工作場景**：公司未必有專責 CSIRT、常一人多角，但 analyst→lead→coordinator 的升級分工可寫進事件處理 SOP，對應 ISO 27001 事件管理
- **一般場景**：企業 SOC、勒索／資料外洩事件的跨部門協同

## 相關概念
- [[incident-response]]：CSIRT 是執行 IR 流程的團隊
- [[soc]]：CSIRT 可獨立或併入 SOC
- [[incident-response-plan]]：CSIRT 依此計畫運作

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-3-incident-response-operations/1-incident-response-teams|Course 6 Module 1 Section 3 Leaf 1 Incident response teams]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-3-incident-response-operations/3-roles-in-response|Course 6 Module 1 Section 3 Leaf 3 Roles in response]]
