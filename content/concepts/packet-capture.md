---
title: "封包擷取（Packet Capture / P-cap）"
slug: packet-capture
aliases: [Packet Capture, P-cap, pcap, 封包擷取, 封包擷取檔, packet sniffing, 封包嗅探, libpcap]
category: 資安・網路安全
confidence: 已驗證
created: 2026-06-07
---

## 定義
從某個介面或網路攔截下來的封包資料檔（簡稱 p-cap），把網路上流動的封包擷取並留存供事後分析或分享。對應的動作叫 packet sniffing（封包嗅探）——擷取並檢視網路上封包的做法。像把信件在郵途中攔截下來檢視。

## 關鍵面向
- **用途**：對事件調查極有用，讓你存取設備間的實際通訊、重建「故事線」（storyline）還原到底發生了什麼
- **工具**：用 [[network-protocol-analyzer]]（[[tcpdump]]、[[wireshark]]）擷取；tcpdump 用 `-w` 寫檔、`-r` 讀檔
- **檔格式互通**：標準 libpcap/pcap 格式，跨工具通用——tcpdump `-w` 抓的檔可直接拿 Wireshark 開，不需轉檔
- **限制**：流量常加密，檢視可能需用對應私鑰先解密；擷取即時流量需管理員權限（root／`sudo`）

## 應用場景
- **Simon 工作場景**：遠端無圖形介面的 Linux server 用 tcpdump `-w` 現場抓存，帶回工作站用 Wireshark 細看；p-cap 可附進 incident 紀錄留證
- **一般場景**：封包層事件鑑識、網路排錯、可疑外連調查的核心素材

## 相關概念
- [[packet]]：p-cap 收集的單位
- [[network-protocol-analyzer]]、[[tcpdump]]、[[wireshark]]：產生 p-cap 的工具
- [[indicator-of-compromise]]：分析 p-cap 的目的是找 IoC

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/1-packets-and-packet-captures|Course 6 Module 2 Section 2 Leaf 1 Packets and packet captures]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/2-overview-of-tcpdump|Course 6 Module 2 Section 3 Leaf 2 Overview of tcpdump]]
