---
title: "基線（Baseline）"
slug: baseline
aliases: [Baseline, 基線, 基準線, 正常行為基準, expected network traffic flow]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
用來比較的參考點。在資安裡，baseline 是系統、設備、網路「正常或預期行為」的標準；先知道什麼是正常，才有辦法認出異常。

## 關鍵面向
- **異常偵測的前提**：baseline 是 [[anomaly-detection]] 的基礎——沒有正常的參照點，就無從判斷什麼算偏離
- **用什麼素材建**：連線資訊（來源／目的 IP、傳輸量、日期時間）累積出「正常流量」的樣貌，形成 expected network traffic flow（預期網路流量）
- **預算類比（打到 Simon）**：像每月固定的買菜金額，有了這個參考點，花費的異常波動一眼就看得出來；網路 baseline 同理
- **off baseline 即訊號**：例如北美公司正常流量集中 9–17 點，離峰突然冒出大量流量就是偏離基線、該調查

## 應用場景
- **Simon 工作場景**：先用公司既有流量監控與防火牆 log 建立網路流量基線，之後任何離峰大量外送、port 錯配都跳得出來，是該排進 ISO 27001 監控的依據
- **一般場景**：baseline 與偏離偵測是 SSCP「Monitoring and Analysis」、CISSP「Security Operations」核心

## 相關概念
- [[anomaly-detection]]：以 baseline 為前提
- [[network-monitoring]]：先建 baseline 再抓偏離
- [[network-traffic]]：流量基線是 baseline 的常見對象
- [[indicator-of-compromise]]：偏離 baseline 常是 IoC

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/4-maintain-awareness-with-network-monitoring|Course 6 Module 2 Section 1 Leaf 4 Maintain awareness with network monitoring]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/3-the-importance-of-network-traffic-flows|Course 6 Module 2 Section 1 Leaf 3 The importance of network traffic flows]]
