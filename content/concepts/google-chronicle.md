---
title: "Google Chronicle / Google SecOps（雲端 SIEM）"
slug: google-chronicle
aliases: [Chronicle, google chronicle, Google Chronicle, Google SecOps, Chronicle SIEM, 谷歌 SIEM, Google Security Operations]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-14
---

## 定義
Google Cloud 的 [[siem]]（後更名 Google SecOps），儲存資安資料供搜尋、分析、視覺化。是業界主流 SIEM 工具之一。

## 關鍵面向
- **資料流程**：資料 forward 到 Chronicle → normalize（正規化／清理）→ index → 透過搜尋列存取。
- **兩種搜尋**：[[udm]] search（預設，搜正規化資料、較快）與 [[raw-log-search]]（搜未正規化 log）。
- **規則語言**：用 [[yara-l]] 定義偵測規則。
- **Procedural Filtering**：對結果再依事件類型／log 來源納入或排除。
- **對比 Splunk**：跟 [[splunk]] 並列；Chronicle 走結構化 UDM 欄位查詢。

## 應用場景
- **Simon 工作場景**：公司若用 Google Cloud 生態，Chronicle/SecOps 是 SIEM 候選；UDM 欄位是寫查詢與偵測規則的骨架。
- **一般場景**：雲原生 SOC 的 SIEM、大規模 log 分析。

## 相關概念
- [[siem]]：Chronicle 是 SIEM 工具
- [[udm]]：Chronicle 的正規化搜尋
- [[yara-l]]：Chronicle 的規則語言
- [[splunk]]：另一主流 SIEM

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/1-reexamine-siem-tools|Course 6 Module 4 Section 3 Leaf 1 Reexamine SIEM tools]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/4-query-for-events-with-google-secops|Course 6 Module 4 Section 3 Leaf 4 Query for events with Google SecOps]]
