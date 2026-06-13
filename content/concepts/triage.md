---
title: "分流（Triage）"
slug: triage
aliases: [Triage, 分流, 檢傷分類, 事件分流, 告警分流, triage, 優先級排序]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
依重要性或急迫性排序事件、決定處理先後的流程（triage），源自醫療檢傷分類。資安團隊每天被大量告警淹沒、資源有限，分流幫團隊評估與排序告警、有效分配資源，讓最關鍵的問題先處理。告警在升級前會先經過分流。

## 關鍵面向
- **排序依據**：依事件對 [[cia-triad]]（機密性／完整性／可用性）的威脅程度排優先級（如勒索軟體 > 單一釣魚信）
- **三步驟**：① Receive and assess（接收並評估，判是否 [[false-positive]]、是否關聯既有事件、是否已知 [[vulnerability]]、嚴重性）② Assign priority（依組織政策指派優先級）③ Collect and analyze（蒐證分析，必要時升級給 L2 分析師或主管）
- **優先級三因子**：functional impact（功能衝擊）、information impact（資訊衝擊，如 [[data-exfiltration]]）、recoverability（可復原性）
- **加上脈絡**：用提問（是否異常？多次失敗？非上班時間？網路外部？）替告警補背景，避免靠假設下不完整或錯誤結論（呼應 [[anomaly-detection]]）
- **好處**：資源管理（集中在緊急威脅）＋標準化處理（用 [[playbook]] 讓告警走一致流程）

## 應用場景
- **Simon 工作場景**：EDR／防火牆／登入失敗告警量大時，依「判誤報 → 依 CIA 威脅排序 → 補脈絡再判斷」分流；recoverability 呼應 ISO 27001 BIA 的 RTO／RPO
- **一般場景**：SOC 告警分流、事件優先級管理、升級判斷

## 相關概念
- [[false-positive]]：分流第一關要排除的誤報
- [[cia-triad]]：排序的衝擊評估維度
- [[playbook]]：提供標準化分流流程
- [[incident-response-lifecycle]]：分流屬偵測與分析階段

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/1-the-role-of-triage-in-incident-response|Course 6 Module 3 Section 3 Leaf 1 The role of triage in incident response]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/3-the-triage-process|Course 6 Module 3 Section 3 Leaf 3 The triage process]]
