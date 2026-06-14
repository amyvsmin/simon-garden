---
title: "統一資料模型搜尋（Unified Data Model / UDM Search）"
slug: udm
aliases: [UDM, udm, Unified Data Model, 統一資料模型, UDM Search, UDM 搜尋, UDM fields]
category: 資安
confidence: 待驗證
created: 2026-06-14
query-count: 0
---

## 定義
[[google-chronicle]]（Google SecOps）的預設搜尋法，搜尋已 ingest、parse、normalize 的「正規化結構化資料」。因為查已索引且結構化的資料，比 [[raw-log-search]] 快。

## 關鍵面向
- **四類共通欄位**：Entities（實體／名詞，裝置／使用者／程序脈絡，如 hostname／username／IP）、Event metadata（事件類型、timestamp）、Network metadata（網路協定）、Security results（安全結果，如 quarantine）。
- **查詢範例**：`metadata.event_type = "USER_LOGIN" AND security_result.action = "BLOCK"`（找被擋的登入）。
- **對比 raw log search**：UDM 搜正規化資料、快；[[raw-log-search]] 搜原始未正規化、慢但能找漏掉的欄位。

## 應用場景
- **Simon 工作場景**：在 Chronicle 查「被擋的登入」等事件，用 UDM 結構化欄位比關鍵字精準。
- **一般場景**：Chronicle/SecOps 的標準查詢方式。

## 相關概念
- [[google-chronicle]]：UDM 是 Chronicle 的搜尋法
- [[raw-log-search]]：對比的未正規化搜尋
- [[siem]]：UDM 是 SIEM 搜尋的一種

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/4-query-for-events-with-google-secops|Course 6 Module 4 Section 3 Leaf 4 Query for events with Google SecOps]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/5-search-methods-with-siem-tools|Course 6 Module 4 Section 3 Leaf 5 Search methods with SIEM tools]]
