---
title: "Log（系統日誌）"
slug: log
aliases: [log, 日誌, 系統日誌, security log, audit log, event log, syslog, 紀錄, 事件紀錄]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# Log（系統日誌）

## 定義
組織系統內事件的紀錄檔、記錄誰在何時做了什麼；資安分析師日常 80% 工作的對象、incident response 還原事件全貌的核心資料來源；跟 [[log-traceability]] 的 vault 內部 audit log 不同、本概念指企業 IT 系統的 system log。

## 關鍵面向
- **常見類型**：
  - System log（OS 層、`/var/log/syslog`、Windows Event Log）
  - Application log（應用層、`/var/log/apache2/access.log`、自訂 app log）
  - Security/Audit log（資安專用、SQL Server audit log、AWS CloudTrail、Linux auditd）
  - Network log（防火牆、IDS／IPS、proxy log）
- **儲存形式**：純文字（grep／sed／cut 處理）or 結構化 DB（SQL query）or 半結構化 JSON（jq 處理）
- **三大典型欄位**：timestamp、actor（誰）、action（做了什麼）；分析師最常 query 這三個維度
- **資安分析的角色**：detection（找 anomaly）、forensics（事後還原）、compliance（稽核佐證）、debugging（找問題）
- **保留週期**：法規要求（PCI DSS 1 年、ISO 27001 視 control 而定）vs 儲存成本、要 trade-off

## 應用場景
- **Simon 工作場景**：公司 SQL Server audit log 用 SQL 查；Veeam 備份 log 用 grep／awk；Apache log 用 cut／sort／uniq；Omnissa MDM 機台 log 走 SQL；ISO 27001 持續監控的核心資料來源
- **一般場景**：SOC 24×7 監控、incident response 蒐證、compliance 稽核、debugging
- **跨課程引用**：Course 6 Detection 直接用 log；Course 7 Python 自動化 log 解析；CCNA／SSCP／CISSP 必考 log retention 跟 review

## 相關概念
- [[anomaly-detection]]：log 是 anomaly 的資料來源
- [[sql]]：query 結構化 log 的工具
- [[filtering-concept]]：log 分析 = filtering
- [[log-traceability]]：vault 內部 audit log（Knowledge Wiki 變更紀錄）、跟本概念分屬不同範圍

## 尚未解決的疑問
- SIEM 跟 log aggregation 平台（Splunk／ELK／Wazuh）實作、Course 4 沒深入
- Log 解析的 regex 跟 grok pattern 設計、實務經驗養成

## 來源
- [[3-query-databases-with-sql|Course 4 Module 4 Section 1 Leaf 3: Query databases with SQL]]
- [[5-optional-exemplar-perform-a-sql-query|Course 4 Module 4 Section 2 Leaf 5: Optional Exemplar]]
