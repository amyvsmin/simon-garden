---
title: "Log 轉送器（Log Forwarder）"
slug: log-forwarder
aliases: [log forwarder, Log Forwarder, log 轉送器, 日誌轉送器, log shipper, log forwarding, filebeat]
category: 資安
confidence: 待驗證
created: 2026-06-14
query-count: 0
---

## 定義
自動化收集與傳送 log 資料的軟體，把各來源 log 送進 [[siem]]，是 [[log-ingestion]] 的實作工具，取代低效的人工上傳。

## 關鍵面向
- **原生 vs 第三方**：有些作業系統內建原生轉送器；沒有的話要在裝置上安裝第三方軟體（如 filebeat、Fluentd、rsyslog、Splunk Universal Forwarder）。
- **設定兩件事**：指定「轉送哪些 log」與「送到哪裡」（例如送到 SIEM）。
- **專屬 vs 開源**：許多 SIEM 用自家專屬轉送器，也能整合開源轉送器；選擇取決於系統需求、與既有架構相容性等。

## 應用場景
- **Simon 工作場景**：Windows 用原生事件轉送（WEF/WinRM）、Linux 用 rsyslog/syslog-ng 或裝 agent（filebeat、Fluentd），把 log 自動送進 SIEM。
- **一般場景**：SOC 大規模 log 收集的標準做法、避免人工上傳。

## 相關概念
- [[log-ingestion]]：log-forwarder 是收錄的自動化工具
- [[siem]]：log 的目的地
- [[log]]：轉送的對象

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/2-log-sources-and-log-ingestion|Course 6 Module 4 Section 3 Leaf 2 Log sources and log ingestion]]
