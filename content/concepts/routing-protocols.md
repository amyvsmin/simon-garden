---
title: "路由協定（Routing Protocols：RIP/OSPF/EIGRP/BGP）"
slug: routing-protocols
aliases: [Routing Protocols, 路由協定, 動態路由協定, RIP OSPF EIGRP BGP]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
路由協定是讓路由器**自動學習網路拓樸、生成路由表**的一類協定（RIP、OSPF、EIGRP、BGP）。本質上是裝在路由器作業系統裡的軟體程式（控制平面、負責算路由），照表轉發封包則由資料平面（[[network-layer]]）執行；和管理員手動設定的靜態路由相對。

## 關鍵面向
- **承載與號碼**：RIP 走 UDP 520、BGP 走 TCP 179、OSPF 走 IP 協定號 89、EIGRP 走 IP 協定號 88（OSPF/EIGRP 直接騎 [[internet-protocol]]、用 IP 協定號而非 [[port]] 埠）。
- **控制平面 vs 資料平面**：路由協定算路由（控制平面），轉發封包是資料平面。
- **靜態 vs 動態**：靜態由管理員手動配置路由表、動態由協定用演算法自動生成。
- **OSI 分層爭議**：「屬哪一層」是經典老問題、各家說法不一，**非 CCNA 考點**；重點放原理與設定。

## 應用場景
- **Simon 工作場景**：最實用的是號碼——防火牆/ACL 放行路由協定時，OSPF 放 IP 協定號 89、EIGRP 放 88、BGP 放 TCP 179、RIP 放 UDP 520；漏放 IP 協定號是「路由鄰居起不來」的常見原因。
- **一般場景**：CCNA 路由章（RIP/EIGRP/OSPF）主角，BGP 與控制/資料平面分離在 SSCP/CISSP 與 SDN 主題會再深入。

## 相關概念
- [[network-layer]]：路由協定服務的層，轉發發生在此（資料平面）
- [[port]]：RIP/BGP 用埠號承載（OSPF/EIGRP 不用、改用 IP 協定號）
- [[internet-protocol]]：OSPF/EIGRP 直接承載於其上

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/10-routing-protocols-osi-layer-debate|CCNA Section 2 Leaf 10 路由協定屬於 OSI 哪一層]]
