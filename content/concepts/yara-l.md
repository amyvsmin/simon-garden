---
title: "YARA-L（Chronicle 偵測規則語言）"
slug: yara-l
aliases: [YARA-L, yara-l, YARA-L language, Chronicle 規則語言, YARA-L 規則]
category: 資安
confidence: 已驗證
created: 2026-06-14
---

## 定義
[[google-chronicle]]（Google SecOps）用來定義偵測規則的電腦語言，用來寫規則去搜尋已收錄（ingested）的 log。例如可寫規則偵測資料外傳（exfiltration）等特定活動。

## 關鍵面向
- **用途**：建立偵測規則、在已收錄 log 上比對找特定活動。
- **跟搜尋的關係**：Chronicle 搜尋分 [[udm]] search 與 [[raw-log-search]]；YARA-L 用於規則化的偵測（非臨時查詢）。
- **類比**：類似 Splunk 用 [[spl]]、Suricata 用 signature；YARA-L 是 Chronicle 的偵測規則語言。
- **名稱**：源自 YARA（惡意軟體規則語言）的延伸，-L 適用於 log。

## 應用場景
- **Simon 工作場景**：公司若用 Google SecOps，YARA-L 規則是寫偵測告警的基礎。
- **一般場景**：Chronicle SOC 的偵測工程（detection engineering）。

## 相關概念
- [[google-chronicle]]：YARA-L 是 Chronicle 的規則語言
- [[udm]]：Chronicle 的搜尋方式
- [[siem]]：偵測規則用於 SIEM

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/4-query-for-events-with-google-secops|Course 6 Module 4 Section 3 Leaf 4 Query for events with Google SecOps]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/5-search-methods-with-siem-tools|Course 6 Module 4 Section 3 Leaf 5 Search methods with SIEM tools]]
