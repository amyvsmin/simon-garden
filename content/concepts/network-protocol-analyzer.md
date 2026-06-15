---
title: "網路協定分析器（Network Protocol Analyzer / Packet Sniffer）"
slug: network-protocol-analyzer
aliases: [Network Protocol Analyzer, packet sniffer, 網路協定分析器, 封包嗅探器, protocol analyzer, 封包分析器]
category: 資安
confidence: 已驗證
created: 2026-06-07
---

## 定義
設計用來擷取並分析網路流量的工具，又稱 packet sniffer（封包嗅探器）。封包本身看不見（像氣味看不見卻聞得到），但能被它擷取成 [[packet-capture]] 供檢視。資安分析師用它檢視封包、找 [[indicator-of-compromise]]。

## 關鍵面向
- **兩大代表工具**：[[tcpdump]]（命令列 CLI）與 [[wireshark]]（圖形介面 GUI）
- **共同特性**：都免費開源、共用 libpcap/pcap 檔格式、擷取即時流量都需 root／`sudo`、都支援過濾隔離流量（[[filtering-concept]]）
- **跟 [[ids]] 的分工**：IDS 自動監看、對設定好的偏差即時告警（偏自動）；協定分析器偏人工、深入細看流量內容
- **CLI vs GUI 取捨**：遠端 server 抓存用 tcpdump、互動式深度分析用 Wireshark；共用 pcap 格式讓「現場抓、回去看」不需轉檔

## 應用場景
- **Simon 工作場景**：機房可疑連線排查（tcpdump 現場抓、Wireshark 回看），對應 ISO 27001 與事件回應
- **一般場景**：封包層調查、網路排錯、惡意活動辨識

## 相關概念
- [[tcpdump]]、[[wireshark]]：兩大實作
- [[packet-capture]]：分析器的產出
- [[ids]]：自動化偵測的對照工具

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/1-packets-and-packet-captures|Course 6 Module 2 Section 2 Leaf 1 Packets and packet captures]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/4-maintain-awareness-with-network-monitoring|Course 6 Module 2 Section 1 Leaf 4 Maintain awareness with network monitoring]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/7-activity-research-network-protocol-analyzers|Course 6 Module 2 Section 3 Leaf 7 Activity Research network protocol analyzers]]
