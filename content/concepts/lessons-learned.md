---
title: "經驗學習會議（Lessons Learned Meeting）"
slug: lessons-learned
aliases: [Lessons Learned Meeting, lessons learned, 經驗學習會議, 事後檢討, 事後檢討會議, post-mortem, 復盤會議, 教訓學習]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
重大事件後納入所有參與者、回顧事件以找出改進處的會議（lessons learned meeting，又稱 post-mortem 事後檢討）。是 [[incident-response-lifecycle]] 事後活動階段的核心活動，目的是學習與改進、**不是究責**。應在事件成功修復後兩週內舉行。

## 關鍵面向
- **與會者與時機**：所有參與事件的人；事件修復後兩週內；視範圍可開多場
- **不究責文化**：回顧可能揭露人為錯誤（分析師漏步驟、員工點釣魚連結），但應視為學習機會而非追責
- **核心提問**：發生什麼、何時、誰發現、如何遏制、復原採取什麼行動、有什麼可以做得不一樣
- **是否需要**：依規模與嚴重性決定；重大事件（如勒索軟體）應開專屬會議
- **進行要點**：事先發 agenda、分派 moderator（主持）與 scribe（記錄）
- **產出**：優先排序的可行建議清單，改進事件處理流程與整體 security posture（如更新 [[playbook]]、導入新工具）；主要參考文件是 [[final-report]]

## 應用場景
- **Simon 工作場景**：事件後兩週內開檢討會、由你或主管當 moderator、指定記錄、產出優先改進項；對應 [[incident-response]] skill 第六步與 ISO 27001 持續改善
- **一般場景**：SOC 事後復盤、跨部門檢討、流程改進

## 相關概念
- [[final-report]]：lessons learned meeting 的主要參考文件
- [[incident-response-lifecycle]]：lessons learned 屬事後活動階段
- [[playbook]]：常見的改進產出之一

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-4-post-incident-actions/1-the-post-incident-activity-phase-of-the-lifecycle|Course 6 Module 3 Section 4 Leaf 1 The post-incident activity phase of the lifecycle]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-4-post-incident-actions/2-post-incident-review|Course 6 Module 3 Section 4 Leaf 2 Post-incident review]]
