---
title: "搜尋處理語言（Search Processing Language / SPL）"
slug: spl
aliases: [SPL, spl, Search Processing Language, 搜尋處理語言, Splunk 查詢語言, Splunk query language]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-14
---

## 定義
[[splunk]] 自家的查詢語言，用來從 index 搜尋並取出事件。一條 SPL 查詢可含多個 command 與 argument，能搜尋、過濾、轉換結果。

## 關鍵面向
- **基本語法**：`index=main fail`——指定 index + search term。
- **pipe `|`**：跟 Linux bash 的管線同源（見 [[linux-filter-commands]]），把前一命令輸出餵下一命令、串接命令。例 `index=main fail | chart count by host`（依 host 統計畫圖）。
- **wildcard `*`**：`fail*` 匹配 fail 開頭的所有結尾（failed、failure）。
- **雙引號**：`"login failure"` 精確片語搜尋。
- **raw log search**：SPL 的 [[raw-log-search]] 在搜尋時抽欄位、較慢。

## 應用場景
- **Simon 工作場景**：若公司導入 Splunk，SPL 是查 log、建 dashboard、寫告警的核心操作。
- **一般場景**：SOC analyst 用 Splunk 調查事件的日常技能。

## 相關概念
- [[splunk]]：SPL 是 Splunk 的查詢語言
- [[linux-filter-commands]]：SPL 的 pipe 跟 Linux pipe 同源
- [[raw-log-search]]：SPL 的一種搜尋

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/3-query-for-events-with-splunk|Course 6 Module 4 Section 3 Leaf 3 Query for events with Splunk]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/5-search-methods-with-siem-tools|Course 6 Module 4 Section 3 Leaf 5 Search methods with SIEM tools]]
