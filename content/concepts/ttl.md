---
title: "TTL（存活時間，Time to Live）"
slug: ttl
aliases: [TTL, Time to Live, 存活時間, 存活上限]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
[[ipv4]] header 裡的一個欄位，決定一個 [[packet]]（封包）被丟棄前還能存活多久。它的存在是為了防止封包在路由器之間無限繞圈（endless loop）。

## 關鍵面向
- **防無限繞圈**：每經過一個路由器 TTL 遞減，歸零就丟棄；沒有這個欄位，路由迴圈會讓封包永遠在網路裡打轉
- **類比**：像郵件的追蹤碼／預計送達日，標示這件東西的「時效」
- **排錯線索**：收到封包的 TTL 值可反推來源作業系統（不同 OS 預設 TTL 不同）、以及大概經過幾個 hop（躍點）
- **位置**：屬 IPv4 header 13 欄位之一，與 Protocol、Source／Destination Address 並列

## 應用場景
- **Simon 工作場景**：手讀封包時看 TTL 推測對方系統與網路距離，是判讀連線來源的快速線索
- **一般場景**：TTL 是 CCNA、Network+ 的高頻概念；`ping`／`traceroute` 的運作也建立在 TTL 遞減上

## 相關概念
- [[ipv4]]：TTL 是其 header 欄位
- [[packet]]：TTL 控制封包的存活上限
- [[internet-protocol]]：TTL 服務於 IP 的路由機制

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
