---
title: "異常偵測（Anomaly Detection）"
slug: anomaly-detection
aliases: [anomaly detection, 異常偵測, 異常檢測, baseline detection, red flag, 紅旗, 異常行為偵測, behavioral anomaly]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# 異常偵測（Anomaly Detection）

## 定義
找出資料中跟正常 baseline 不符的事件／模式、判定為潛在資安事件；資安分析師查 log 的核心心法、跟「白名單反推」「紅旗思維」相通；Course 6「Sound the Alarm」detection 章節主場、本課程在 SQL filter 應用層先預習。

## 關鍵面向
- **三種典型 red flag**（Module 4 lab 反覆強調）：
  - **地理異常**：來自不營運國家／非預期 region 的登入
  - **時間異常**：非工作時段（如凌晨 3 點）的登入或操作
  - **版本異常**：過久沒 patch 的機器、舊 OS 版本（潛在脆弱端點）
- **baseline 比較**：當天 aggregate 對照過去 30 天平均、超過 N 倍 SD 就 alert
- **Precision vs Recall trade-off**：AND filter 提高精準度（少噪音、可能漏）、OR filter 提高召回（多噪音、不漏）；初篩用 OR、深查用 AND
- **白名單反推**（whitelist reverse）：知道哪些是正常的、用 NOT 排除掉就剩需要查的；比黑名單長期穩定（黑名單會增加、白名單相對穩）
- **跟 [[aggregate-function]] 的搭配**：aggregate 計算 baseline、anomaly detection 比 baseline 找 outlier

## 應用場景
- **Simon 工作場景**：撈非工時失敗登入（時間 anomaly）、撈境外登入（地理 anomaly）、撈舊 patch 機器（版本 anomaly）；ISO 27001 持續監控、BIGFIX 漏洞 detection；公司資安 KPI 月簡報的 anomaly 指標
- **一般場景**：SIEM 規則、UEBA（User and Entity Behavior Analytics）、Zero Trust 持續驗證、fraud detection（金融業）
- **跨課程引用**：Course 6 Detection 全章節主場、Course 7 Python 寫自動化 anomaly detection 腳本

## 相關概念
- [[aggregate-function]]：算 baseline 的計算工具
- [[filtering-concept]]：anomaly 是 filter 的特殊應用
- [[log]]：anomaly detection 的資料來源
- [[sql]]：寫 detection query 的工具

## 尚未解決的疑問
- ML-based anomaly detection（Isolation Forest、Autoencoder）vs rule-based 的選用情境、Course 4 沒教
- False positive 處理流程、tuning baseline 閾值、Course 6 預期會教

## 來源
- [[5-optional-exemplar-perform-a-sql-query|Course 4 Module 4 Section 2 Leaf 5: Optional Exemplar Perform a SQL query]]
- [[10-exemplar-filter-with-and-or-and-not|Course 4 Module 4 Section 3 Leaf 10: Exemplar Filter with AND OR NOT]]
