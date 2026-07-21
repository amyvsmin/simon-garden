---
title: "網路流量（Network Traffic）"
slug: network-traffic
aliases: [Network Traffic, 網路流量, network data, 網路資料, expected network traffic flow, 預期網路流量]
category: 資安・網路安全
confidence: 已驗證
created: 2026-06-07
---

## 定義
在網路上移動的資料「量」（強調多少）；對照 network data（網路資料）是設備之間實際傳輸的資料「內容」。組織越大，任一瞬間的流量體積越驚人，例如跨國公司數千名員工同時收發 email。

## 關鍵面向
- **偵測前提是基線**：理解資料應該怎麼流動、形成 expected network traffic flow（預期網路流量）與 [[baseline]]，知道正常才認得出異常，這是 [[anomaly-detection]] 的前提（「車流」類比：懂正常車流才認得出異常車禍）
- **流量是 IoC 來源**：透過觀察流量異常捕捉 [[indicator-of-compromise]]，例如某主機大量 outbound（對外）流量＝可能的 [[data-exfiltration]]
- **可監看的三類元件**：flow analysis（packet/protocol/port，揪 [[command-and-control]] 的 port 與協定錯配）、packet payload（揪敏感資料外送）、temporal patterns（離峰大量流量＝off baseline）

## 應用場景
- **Simon 工作場景**：機房／伺服器監看。某台主機在離峰時段冒出大量對外流量，就是該查的 IoC；可結合公司既有流量監控與防火牆 log 先建立網路流量基線
- **一般場景**：SSCP「Monitoring and Analysis」、CISSP「Security Operations」的核心

## 相關概念
- [[packet]]：流量的組成單位
- [[baseline]]、[[anomaly-detection]]：判斷流量異常的基礎
- [[network-monitoring]]：對流量的持續收集與分析
- [[data-exfiltration]]：流量異常的典型威脅

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/3-the-importance-of-network-traffic-flows|Course 6 Module 2 Section 1 Leaf 3 The importance of network traffic flows]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/4-maintain-awareness-with-network-monitoring|Course 6 Module 2 Section 1 Leaf 4 Maintain awareness with network monitoring]]
