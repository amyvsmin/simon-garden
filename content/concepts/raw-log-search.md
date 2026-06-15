---
title: "原始 Log 搜尋（Raw Log Search）"
slug: raw-log-search
aliases: [raw log search, Raw Log Search, 原始 log 搜尋, 原始日誌搜尋, raw log, 未正規化搜尋]
category: 資安
confidence: 已驗證
created: 2026-06-14
---

## 定義
在 SIEM 中搜尋「未經正規化／解析的原始 log」的搜尋方式，對比搜尋正規化結構化資料的方法（如 Chronicle 的 [[udm]] search）。因為搜尋時才即時抽取欄位、或搜未索引資料，效能比結構化搜尋慢。

## 關鍵面向
- **何時用**：當正規化資料裡找不到要的東西時——找沒被正規化的特定欄位、或排查資料收錄（ingestion）問題。
- **較慢原因**：[[splunk]] 的 raw log search 在搜尋當下才抽取 log 欄位；[[google-chronicle]] 的 raw log search 搜未解析 log。
- **支援 regex**：Chronicle 的 raw log search 支援正規表達式，匹配特定模式。
- **對比結構化搜尋**：[[udm]] search（Chronicle）/ indexed search 搜正規化資料、較快。

## 應用場景
- **Simon 工作場景**：當 SIEM 正規化漏掉某欄位、或懷疑 log 收錄有問題時，用 raw log search 直接翻原始 log。
- **一般場景**：SOC 深度調查、troubleshoot log pipeline。

## 相關概念
- [[udm]]：搜正規化資料，對比 raw log search
- [[siem]]：兩種搜尋都在 SIEM 內
- [[spl]]：Splunk 的 raw log search 用 SPL

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/3-query-for-events-with-splunk|Course 6 Module 4 Section 3 Leaf 3 Query for events with Splunk]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/4-query-for-events-with-google-secops|Course 6 Module 4 Section 3 Leaf 4 Query for events with Google SecOps]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/5-search-methods-with-siem-tools|Course 6 Module 4 Section 3 Leaf 5 Search methods with SIEM tools]]
