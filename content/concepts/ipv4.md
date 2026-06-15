---
title: "IPv4（網際網路協定第 4 版）"
slug: ipv4
aliases: [IPv4, IP version 4, 網際網路協定第四版, IPv4 header]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
[[internet-protocol]]（IP）的第 4 版，是目前網際網路通訊最廣用的版本。它的 header（標頭）共 13 個欄位，帶著封包路由與重組所需的全部資訊；最新版的 IPv6 欄位相似、只是名稱不同。

## 關鍵面向
- **13 欄位 header（手讀重點）**：Version（IP 版本）、IHL（header 長度）、ToS、Total Length、Identification／Flags／Fragment Offset（處理 [[fragmentation]]）、[[ttl]]、Protocol（值對應協定，6＝TCP、17＝UDP、1＝ICMP）、Header Checksum、Source／Destination Address、Options
- **郵寄類比**：Version 像郵件等級、ToS 像「易碎」貼紙、Total Length 像信封尺寸重量、Source／Destination Address 像寄收件人資訊、Options 像郵寄保險（用了 header 會變長）
- **header 之後是 payload**：欄位結束後接的就是封包實際資料，像 email 的內文
- **vs IPv6**：IPv4 仍最廣用，故課程與多數排錯場景先學 IPv4 header

## 應用場景
- **Simon 工作場景**：用 Wireshark／[[tcpdump]] 手讀 IPv4 header——看 [[ttl]] 推測來源作業系統與經過幾個 hop、看 Protocol 欄快速分流封包
- **一般場景**：IPv4 header 13 欄位是 CCNA 必背重點，也是 SSCP、Network+ 的高頻題

## 相關概念
- [[internet-protocol]]：IPv4 是其最廣用版本
- [[packet]]：IPv4 header 是封包的關鍵部件
- [[ttl]]：IPv4 header 欄位之一
- [[fragmentation]]：由 IPv4 header 三個欄位處理

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
