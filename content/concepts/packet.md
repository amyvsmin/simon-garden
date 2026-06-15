---
title: "封包（Packet）"
slug: packet
aliases: [Packet, 封包, 資料封包, data packet, network packet, 網路封包]
category: 資安
confidence: 已驗證
created: 2026-06-07
---

## 定義
資料在網路上傳送時被切分成的傳輸單位。像一個寫好地址的信封，帶著路由所需的投遞資訊，把資料從來源送到目的地。一個封包由三部分組成：header（標頭，投遞資訊）、payload（酬載，實際資料）、footer（結尾，標示封包結束）。

## 關鍵面向
- **三部件**：header 含網路協定類型、[[port]]、來源／目的 IP（信封上的姓名與地址）；payload 是實際遞送的資料（信封裡的信）；footer 標示封包結束（封口）
- **IPv4 header 13 欄位**（手讀重點）：Version、Protocol（數值對應協定，6＝TCP、17＝UDP、1＝ICMP）、[[ttl]]（Time to Live，存活上限、防無限繞圈）、Source／Destination Address、與分片三欄（Identification／Flags／Fragment Offset，處理 [[fragmentation]]）
- **看不見但可被擷取**：封包像氣味看不見卻聞得到，用 [[network-protocol-analyzer]]（封包嗅探器）擷取成 [[packet-capture]]，供事後分析
- **分層位置**：IP 封包在 [[tcp-ip-model]] 的 internet layer 由 [[internet-protocol]] 負責路由

## 應用場景
- **Simon 工作場景**：機房／網路排錯與入侵跡象判讀的底層能力。手讀 IPv4 header——看 TTL 推測來源作業系統與大概經過幾個 hop、看 Protocol 欄快速分流封包、看 Source／Destination Address 直接回答「誰連到誰」
- **一般場景**：封包結構是 CCNA／Network+ 的硬核基礎；事件調查用封包重建設備間通訊的故事線

## 相關概念
- [[packet-capture]]：封包被擷取後留存的檔
- [[network-protocol-analyzer]]：擷取與分析封包的工具
- [[tcp-ip-model]]：封包傳輸的分層框架
- [[network-traffic]]：大量封包在網路上移動構成流量

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/1-packets-and-packet-captures|Course 6 Module 2 Section 2 Leaf 1 Packets and packet captures]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
