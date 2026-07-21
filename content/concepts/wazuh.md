---
title: "Wazuh（開源 SIEM）"
slug: wazuh
aliases: [Wazuh, wazuh, 開源 SIEM, open-source SIEM, Wazuh 平台]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-14
---

## 定義
強大的開源、免費 [[siem]] 平台，跟其他 SIEM 一樣收集、彙整、分析大量資安資料以偵測與回應威脅。是 [[splunk]]、[[google-chronicle]] 的無門檻替代方案。

## 關鍵面向
- **為何用**：Splunk、Google SecOps 雖是業界領導，但免費試用與學生存取日益受限（常要企業 email）；Wazuh 完全開源免費、無門檻。
- **完全掌控**：可在自己完全掌控的系統上練 log 分析、威脅偵測、事件調查。
- **部署**：用 VirtualBox 匯入預建 OVA 映像檔跑本機 server；用 filebeat（[[log-forwarder]]）依 ingest.yml 收錄 log；在 Discover 介面查詢。
- **查詢語法**：dashboard 用 OpenSearch/Kibana 風格的 field 過濾（`field.keyword: value` + AND + wildcard）。

## 應用場景
- **Simon 工作場景**：不花錢、不需公司 email 就能練 SIEM 的最佳沙盒；公司若評估開源 SIEM，Wazuh 是 Splunk/SecOps 以外的務實選項。
- **一般場景**：資安學習練習環境、中小組織的開源 SIEM 方案。

## 相關概念
- [[siem]]：Wazuh 是 SIEM 的一種
- [[splunk]]：商業 SIEM，Wazuh 是開源替代
- [[google-chronicle]]：商業 SIEM，Wazuh 是開源替代
- [[log-forwarder]]：Wazuh 用 filebeat 收錄

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/6-follow-along-guide-for-wazuh-setup|Course 6 Module 4 Section 3 Leaf 6 Follow-along guide for Wazuh setup]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/7-activity-perform-a-query-with-wazuh|Course 6 Module 4 Section 3 Leaf 7 Activity Perform a query with Wazuh]]
