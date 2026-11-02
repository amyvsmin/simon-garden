---
title: "事件應變生命週期（Incident Response Lifecycle）"
slug: incident-response-lifecycle
aliases: [incident response lifecycle, NIST IR lifecycle, 事件應變生命週期, 事件回應生命週期, 事件應變四階段, IR lifecycle, NIST incident response lifecycle]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-05
---

## 定義
NIST SP 800-61 Rev. 2（2012）定義的事件應變四階段框架，課程把它對照到 [[nist-csf]] 的 detect／respond／recover 來教。四階段為：準備（Preparation）→ 偵測與分析（Detection and Analysis）→ 遏制、根除與復原（Containment, Eradication, and Recovery）→ 事後活動（Post-incident activity）。它不是線性流程，而是循環——調查過程冒出新發現時，階段之間會重疊、往回走。是 Course 6「Sound the Alarm」的組織骨架。

## 關鍵面向
- **準備（Preparation）**：IR 計畫文件化、CSIRT 組隊、工具、runbook 與日誌備齊、定期演練
- **偵測與分析（Detection and Analysis）**：靠 [[log]] 分析、[[anomaly-detection]] 告警與 IOC（入侵指標）比對找出事件，判嚴重度（severity）、釐清五個 W
- **遏制、根除與復原（Containment, Eradication, and Recovery）**：遏制分短期（先隔離受影響系統止血）與長期（修補漏洞後再重新上線）；根除是清除惡意程式、修補漏洞；復原是從乾淨備份還原並驗證系統完整性
- **事後活動（Post-incident activity）**：Lessons Learned 覆盤、final report、更新 IR 計畫、把新 IOC 回饋偵測系統
- **循環非線性**：步驟會重疊、可回頭；這是 NIST SP 800-61 Rev. 2（2012）的四階段，2025-04 的 Rev. 3 已取代 Rev. 2，改以 [[nist-csf]] 2.0 為框架談事件回應；是否完全取代四階段圖待驗證（見 [[incident-response]] 的框架版本說明）
- **資安署在地操作化版本**：準備 → 偵測與應變處理 → 通報與外部溝通 → 復原與持續改善；這是強調治理與溝通的互補變體，不取代 NIST 骨架

## 應用場景
- **Simon 工作場景**：可當公司事件處理 SOP 的階段骨架，對應 ISO 27001 A.16 事件管理；自製的 incident-response skill 六階段可對齊此框架校準
- **一般場景**：SOC 日常事件處理、勒索軟體應變、SSCP／CISSP 必考骨架

## 相關概念
- [[incident-response]]：母卡（定義、重要性、導覽）；本卡是它的結構化展開，四階段細節統一放在這裡
- [[log]]、[[anomaly-detection]]：偵測與分析階段的資料來源與機制
- [[patch-management]]：根除階段常需要緊急修補
- [[nist-csf]]：上層風險管理框架，IR 生命週期聚焦其 detect／respond／recover
- [[csirt]]：執行此生命週期的團隊

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-2-the-incident-response-lifecycle/2-introduction-to-the-incident-response-lifecycle|Course 6 Module 1 Section 2 Leaf 2 Introduction to the incident response lifecycle]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-5-review-introduction-to-detection-and-incident-response/1-wrap-up|Course 6 Module 1 Section 5 Leaf 1 Wrap-up]]
- [[2026-08-04-moda-security-incident-response-guide]]
