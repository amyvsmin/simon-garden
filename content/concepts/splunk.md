---
title: "Splunk（資料分析平台 / SIEM）"
slug: splunk
aliases: [Splunk, splunk, Splunk Enterprise Security, 資料分析平台, Splunk SIEM]
category: 資安
confidence: 已驗證
created: 2026-06-14
---

## 定義
資料分析平台；Splunk Enterprise Security 提供 [[siem]] 解決方案，讓你搜尋、分析、視覺化資安資料。是業界主流 SIEM 工具之一。

## 關鍵面向
- **資料流程**：從不同來源收集 → 處理後存進 index → 透過搜尋等多種方式存取。
- **查詢語言**：用自家的 [[spl]]（Search Processing Language）。
- **對比 Chronicle**：跟 [[google-chronicle]] 並列業界領導；Splunk 走關鍵字 + SPL，Chronicle 走結構化 UDM 欄位查詢。
- **存取門檻**：免費試用與學生存取受限（常要企業 email），開源替代見 [[wazuh]]。

## 應用場景
- **Simon 工作場景**：公司評估／導入 SIEM 的候選之一；理解 Splunk 流程有助規劃 log 接入與查詢。
- **一般場景**：SOC 主流 SIEM、事件調查與監看。

## 相關概念
- [[siem]]：Splunk 是 SIEM 工具
- [[spl]]：Splunk 的查詢語言
- [[google-chronicle]]：另一主流 SIEM
- [[wazuh]]：開源替代

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/1-reexamine-siem-tools|Course 6 Module 4 Section 3 Leaf 1 Reexamine SIEM tools]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/3-query-for-events-with-splunk|Course 6 Module 4 Section 3 Leaf 3 Query for events with Splunk]]
