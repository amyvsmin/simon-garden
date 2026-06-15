---
title: "網際網路協定（Internet Protocol / IP）"
slug: internet-protocol
aliases: [Internet Protocol, IP, 網際網路協定, IP 協定, ip-address, IP 位址, IP address, 邏輯位址]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
在網路裝置之間負責「路由與定址」資料封包的核心協定。運作在 [[tcp-ip-model]] 的 internet layer（網際網路層），是網際網路所有通訊的基礎，職責是確保封包抵達目的地。

## 關鍵面向
- **郵差類比**：IP 像郵差，不看信封外觀，而是用 [[packet]] header 裡的 IP 位址決定最佳可用路由，把資料在主機之間送達
- **兩個版本**：[[ipv4]]（網際網路通訊的基礎、目前最廣用）與 IPv6（最新版本）；兩者 header 欄位相似、只是名稱不同
- **分層位置**：在 internet layer 運作，接收並遞送整個網路的封包；上層的 transport layer 把資料交給它定址路由
- **定址資訊在 header**：來源／目的 IP 位址、[[ttl]]、Protocol 等欄位就是 internet layer 的運作細節

## 應用場景
- **Simon 工作場景**：機房與網路排錯的底層心法。看封包的 Source／Destination Address 直接回答「誰連到誰」，是入侵跡象判讀的第一步
- **一般場景**：IP 與 internet layer 是 CCNA、Network+ 的硬核基礎；理解 IP 才能往上學 TCP／UDP 與路由

## 相關概念
- [[tcp-ip-model]]：IP 運作的分層框架，IP 在 internet layer
- [[ipv4]]：IP 目前最廣用的版本
- [[packet]]：IP 路由的對象，header 帶定址資訊
- [[ttl]]：IP header 裡防止封包無限繞圈的欄位

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/3-interpret-network-communications-with-packets|Course 6 Module 2 Section 2 Leaf 3 Interpret network communications with packets]]
- [[1-learning/udemy/ccna-all-in-one/section-02-osi-model/9-network-layer|CCNA Section 2 Leaf 9 網路層]]
