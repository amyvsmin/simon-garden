---
title: "Syslog（日誌協定、服務與格式）"
slug: syslog
aliases: [Syslog, syslog protocol, Syslog 協定, Syslog 格式, 系統日誌協定]
category: 資安
confidence: 已驗證
created: 2026-07-19
---

## 定義

用於產生、傳輸與集中處理系統日誌的標準，可同時指協定、log forwarding 服務與訊息格式。它不是一般「[[log]]」的同義詞，而是一套特定的傳輸與格式機制。

## 關鍵面向

- **協定**：把 log 傳到集中式伺服器；課程列出明文 port 514、加密 port 6514。
- **服務**：提供 log forwarding，將多種來源匯聚到單一位置。
- **格式**：常見結構為 header、structured-data、message，並可包含 PRI 優先級。
- **可承載其他格式**：例如 CEF 事件可透過 Syslog 傳輸。

## 應用場景

- 集中收集 Linux、網路設備或安全工具日誌，送往 SIEM 分析。
- 排查資料缺漏時，分清楚問題出在產生日誌、轉送服務、網路傳輸，還是訊息解析。

## 相關概念

- [[log]]：Syslog 所承載與傳輸的事件紀錄上位概念。
- 日誌格式：Syslog 是多種格式之一，不能與所有 log 畫上等號。
- [[siem]]：集中接收與分析 Syslog 的常見平台。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-1-overview-of-logs/6-variations-of-logs|Variations of logs]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-1-overview-of-logs/7-overview-of-log-file-formats|Overview of log file formats]]
