---
title: "分片（Fragmentation）"
slug: fragmentation
aliases: [Fragmentation, 分片, IP 分片, 封包分片]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
[[ipv4]] 封包被切成小塊（chunks）傳輸、抵達目的地後再重組的機制。由 IPv4 header 的三個欄位協同處理：Identification、Flags、Fragment Offset。

## 關鍵面向
- **三個欄位分工**：Identification 是重組用的識別碼、Flags 標示是否使用了分片、Fragment Offset 標示分片如何按正確順序重組
- **為什麼要分片**：不同網路路段能承載的封包大小不同，過大的封包需切小才能通過
- **類比**：像郵件經過信箱、處理中心、飛機、郵車等多重路徑運送，最後在目的地按順序拼回
- **資安意義**：異常或重疊的分片曾被用來規避偵測，是封包分析時值得留意的細節

## 應用場景
- **Simon 工作場景**：手讀封包時，看 Identification／Flags／Fragment Offset 判斷封包是否被分片、能否正確重組，是排查傳輸異常的線索
- **一般場景**：fragmentation 是 CCNA、Network+ 與 SSCP 的封包結構考點

## 相關概念
- [[ipv4]]：分片由 IPv4 header 三欄位處理
- [[packet]]：分片是封包傳輸的一種狀態
- [[ttl]]：與分片同屬 IPv4 header 的關鍵欄位

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
