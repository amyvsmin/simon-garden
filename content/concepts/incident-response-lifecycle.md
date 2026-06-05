---
title: "事件應變生命週期（Incident Response Lifecycle）"
slug: incident-response-lifecycle
aliases: [incident response lifecycle, NIST IR lifecycle, 事件應變生命週期, 事件回應生命週期, IR lifecycle, NIST incident response lifecycle]
category: 資安
confidence: 待驗證
created: 2026-06-05
query-count: 0
---

## 定義
NIST 專為事件應變展開的四階段框架，是 [[nist-csf]] 在事件應變這塊的細化版。四階段為：準備（Preparation）→ 偵測與分析（Detection and Analysis）→ 遏制、根除與復原（Containment, Eradication, and Recovery）→ 事後活動（Post-incident activity）。它不是線性流程，而是循環——調查過程冒出新發現時，階段之間會重疊、往回走。是 Course 6「Sound the Alarm」的組織骨架。

## 關鍵面向
- **準備（Preparation）**：IR 計畫文件化、CSIRT 組隊、工具與日誌備齊、定期演練
- **偵測與分析（Detection and Analysis）**：靠偵測工具與 log 找出事件、判嚴重度、釐清五個 W
- **遏制、根除與復原（Containment, Eradication, and Recovery）**：隔離、清除、修補、從乾淨備份還原
- **事後活動（Post-incident activity）**：覆盤、final report、把新 IOC 回饋偵測
- **循環非線性**：步驟會重疊、可回頭，跟 [[incident-response]] 的 NIST SP 800-61 四階段一致

## 應用場景
- **Simon 工作場景**：可當公司事件處理 SOP 的階段骨架，對應 ISO 27001 A.16 事件管理；自製的 incident-response skill 六階段可對齊此框架校準
- **一般場景**：SOC 日常事件處理、勒索軟體應變、SSCP／CISSP 必考骨架

## 相關概念
- [[incident-response]]：本生命週期是它的結構化展開（NIST SP 800-61 四階段）
- [[nist-csf]]：上層風險管理框架，IR 生命週期聚焦其 detect／respond／recover
- [[csirt]]：執行此生命週期的團隊

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-2-the-incident-response-lifecycle/2-introduction-to-the-incident-response-lifecycle|Course 6 Module 1 Section 2 Leaf 2 Introduction to the incident response lifecycle]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-5-review-introduction-to-detection-and-incident-response/1-wrap-up|Course 6 Module 1 Section 5 Leaf 1 Wrap-up]]
