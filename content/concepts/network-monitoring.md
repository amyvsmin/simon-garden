---
title: "網路監看（Network Monitoring）"
slug: network-monitoring
aliases: [Network Monitoring, 網路監看, 網路監控, 流量監看]
category: 資安・網路安全
confidence: 已驗證
created: 2026-06-15
---

## 定義
持續收集並分析 [[network-traffic]]（網路流量），維持對網路活動「情境覺察」（situational awareness）的實務，藉此偵測可疑行為。前提是先知道要監看什麼——你無法保護你不了解的東西。

## 關鍵面向
- **先建 [[baseline]] 再抓偏離**：知道正常流量長怎樣，才認得出異常；偏離基線就是該調查的訊號
- **三類可監看元件**：① flow analysis（看 packet／protocol／[[port]]，揪 [[command-and-control]] 的錯配）；② packet payload（看實際資料，揪敏感資料外送＝可能的 [[data-exfiltration]]）；③ temporal patterns（看時間，離峰大量流量＝off baseline）
- **NOC vs [[soc]]**：NOC（網路維運中心）顧網路效能、可用性與正常運行時間；SOC 顧資安偵測與回應，兩者都監看網路但職責不同
- **兩類工具**：[[ids]]（自動監看、對設定好的偏差發告警，多比對 payload 找 malware／phishing 特徵）與 [[network-protocol-analyzer]]（手動細看，如 [[tcpdump]]、Wireshark）

## 應用場景
- **Simon 工作場景**：直接對應機房／伺服器監看與 ISO 27001。port／協定錯配、離峰大量外送都是該設告警的 IoC；可評估導入 IDS（Suricata／Snort）
- **一般場景**：network monitoring 是 SSCP「Monitoring and Analysis」、CISSP「Security Operations」核心

## 相關概念
- [[network-traffic]]：監看的對象
- [[baseline]]：監看的參照點
- [[indicator-of-compromise]]：監看要找的訊號
- [[ids]]、[[network-protocol-analyzer]]：監看工具

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/4-maintain-awareness-with-network-monitoring|Course 6 Module 2 Section 1 Leaf 4 Maintain awareness with network monitoring]]
