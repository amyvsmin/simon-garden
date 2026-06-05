---
title: "偵測結果四象限（True/False Positive/Negative）"
slug: false-positive
aliases: [false positive, 偽陽性, 誤報, false negative, 偽陰性, 漏報, true positive, 真陽性, true negative, 真陰性, detection categories, 偵測結果, 偵測準確度]
category: 資安
confidence: 待驗證
created: 2026-06-05
query-count: 0
---

## 定義
偵測工具（如 IDS）告警是否正確的四種狀態，用來衡量偵測準確度。**True positive**：正確偵測到攻擊。**True negative**：沒有惡意活動、也沒觸發告警。**False positive（誤報）**：把正常活動誤判為威脅、發了不該發的告警。**False negative（漏報）**：真有攻擊卻沒被偵測到。

## 關鍵面向
- **False positive（誤報）**：浪費團隊時間資源去查假告警，是「狼來了」式的干擾
- **False negative（漏報）**：最危險——團隊對真實攻擊毫無察覺，防線形同虛設
- **取捨**：規則太鬆 → 漏報變多；太嚴 → 誤報淹沒團隊；告警調校就是在兩者間找平衡
- **適用範圍**：IDS／IPS／EDR 告警、SIEM 規則、釣魚偵測、任何二元偵測

## 應用場景
- **Simon 工作場景**：直接影響告警調校與規則撰寫；SOC／事件處理 SOP 要在誤報與漏報間取捨
- **一般場景**：偵測規則調優、SIEM 噪音治理、ML 模型評估（混淆矩陣）

## 相關概念
- [[ids]]、[[ips]]、[[edr]]：產生這些偵測結果的工具
- [[anomaly-detection]]：異常偵測的準確度同樣用這四象限衡量
- [[siem]]：規則調校的目標是降低誤報、避免漏報

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/4-overview-of-detection-tools|Course 6 Module 1 Section 4 Leaf 4 Overview of detection tools]]
