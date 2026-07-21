---
title: "關聯分析（Correlation）"
slug: correlation
aliases: [correlation, 關聯分析, 事件關聯, log correlation, event correlation]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-05
---

## 定義
比對多筆 [[log]] 事件、找出代表潛在威脅的共同模式的分析動作，是 [[siem]] analyze 步驟的一部分。單一 log 可能不起眼，但把跨來源、跨時間的多筆事件關聯起來，就能浮現攻擊鏈或異常模式（例如同一帳號短時間內多次失敗登入後成功登入再大量下載）。

## 關鍵面向
- **跨事件比對**：把分散的 log 事件依時間、來源、帳號等維度串起來看
- **規則驅動**：SIEM 用 correlation rule 定義「哪些事件組合代表威脅」
- **在流程中的位置**：SIEM 三步驟的 analyze 階段（collect & aggregate → normalize → analyze）
- **價值**：把「單點噪音」轉成「有意義的攻擊敘事」，降低漏報

## 應用場景
- **Simon 工作場景**：規劃 SIEM 規則時，correlation rule 是把多來源 log 變成可行動告警的關鍵；對應事件調查還原攻擊鏈
- **一般場景**：SOC 告警產生、攻擊鏈偵測、UEBA 行為關聯

## 相關概念
- [[siem]]：correlation 是 SIEM 分析的核心動作
- [[log]]：correlation 的原料
- [[anomaly-detection]]：與關聯分析互補的偵測心法

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/7-overview-of-siem-technology|Course 6 Module 1 Section 4 Leaf 7 Overview of SIEM technology]]
