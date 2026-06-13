---
title: "威脅情報（Threat Intelligence）"
slug: threat-intelligence
aliases: [Threat Intelligence, 威脅情報, 威脅情資, threat intelligence, TIP, threat intelligence platform, 威脅情報平台]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
以證據為基礎、提供既有或新興威脅脈絡的威脅資訊（threat intelligence）。描述攻擊者的戰術技術程序（TTP）、指標與攻擊趨勢，讓組織把外部威脅對照到自己的環境，改善偵測能力。

## 關鍵面向
- **三類來源**：industry reports（產業報告）、government advisories（政府警示）、threat data feeds（威脅資料流，常是 IP／網域／檔案雜湊清單，用來防 [[apt]]）
- **威脅情報平台（TIP）**：集中蒐集、彙整、分析多來源情報，協助識別與排序相關威脅、改善 security posture
- **補脈絡用、不主導偵測**：資料量大且未必符合本組織環境，若直接拿來觸發偵測會大量誤報，應先評估再套用
- **把指標變敘事**：替單一 [[indicator-of-compromise]] 補上關聯，從「一個可疑指標」擴展成「可調查的攻擊敘事」
- **分享機制**：靠 [[crowdsourcing]]、[[isac]]、[[osint]] 讓全球社群共享

## 應用場景
- **Simon 工作場景**：用威脅情報補外部脈絡，對照半導體產業 APT 趨勢，輔助 threat hunting 與 SIEM 規則
- **一般場景**：情報驅動的偵測、SOC 告警脈絡補強、風險排序

## 相關概念
- [[threat-hunting]]：以威脅情報為輸入
- [[indicator-of-compromise]]：威脅情報替其補脈絡
- [[crowdsourcing]]、[[isac]]、[[osint]]：威脅情報的分享與來源管道

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/3-cybersecurity-incident-detection-methods|Course 6 Module 3 Section 1 Leaf 3 Cybersecurity incident detection methods]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/8-analyze-indicators-of-compromise-with-investigative-tools|Course 6 Module 3 Section 1 Leaf 8 Analyze indicators of compromise with investigative tools]]
