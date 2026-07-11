---
title: "廣域網路（WAN）與 MAN／WAN 連接技術（專線・VPN・MPLS・SD-WAN・城域乙太網）"
slug: wide-area-network
aliases: [Wide Area Network, WAN, 廣域網路, Metropolitan Area Network, MAN, 都會網路, 城域網, leased-line, 專線, MPLS, sd-wan, SD-WAN, 軟體定義廣域網, metro-ethernet, 城域乙太網, 都會乙太網, wan-connectivity]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
廣域網路（WAN）是覆蓋地理範圍最大的網路，跨越城市、國家甚至大陸；MAN（都會網路）介於 LAN 與 WAN 之間、覆蓋一個城市（可視為多個 LAN 組成）。要把總部與**遠端分支機構**串起來，就用 MAN／WAN 連接技術——**專線、VPN、MPLS、SD-WAN、城域乙太網**。CCNA 只要求「知道有這些技術、各自特性」，細節屬 CCNP。

## 關鍵面向
- **範圍**：WAN 跨城/跨國（數百~數千公里、設計非常複雜）；MAN 同城多據點。
- **專線（Leased Line）**：獨立線纜、獨享；高頻寬低延遲，但**成本非常高**；軍事/金融等敏感領域。
- **VPN**：公共 [[internet]] 上建加密通道；便宜易部署，但效能與可靠性差（見 [[vpn]]）。
- **MPLS（多協議標籤交換）**：電信商級、標籤轉發、**支援 QoS、高可靠/冗餘、安全**；貴、難維護；關鍵應用。
- **SD-WAN（軟體定義廣域網）**：軟體集中管、**聚合多鏈路（寬頻/LTE/MPLS）、動態選路最佳化**；配置較複雜；現代多分支主流。
- **城域乙太網（Metro Ethernet）**：乙太網路技術的城市級連接；高頻寬低延遲、彈性；**覆蓋限城市**。
- **選型四因素**：業務需求／預算／安全性／可擴展性。

## 應用場景
- **Simon 工作場景**：連接總部與外縣市/海外廠區的採購決策。多數公司「MPLS 或專線跑關鍵流量＋VPN 當備援」；SD-WAN 近年逐步取代純 MPLS（便宜寬頻＋貴 MPLS 混用、集中管理）。對接 ISO 27001，跨公共 Internet 的 VPN 段是資安評估重點。
- **一般場景**：CCNA 送分概念題（「成本最低但可靠性最差」→VPN；「原生支援 QoS 且高可靠」→MPLS）；細部設定 CCNP 才展開。

## 相關概念
- [[local-area-network]]：範圍最小的網路，WAN 串起多個 LAN 據點
- [[vpn]]：WAN 連接的低成本選項（公共 Internet 加密通道）
- [[internet]]：VPN 借用的公共基礎設施

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/1-lan-man-wan-and-internet|CCNA Section 6 Leaf 1 LAN/MAN/WAN 與 Internet]]
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/4-man-and-wan-topologies|CCNA Section 6 Leaf 4 MAN/WAN 連接技術]]
