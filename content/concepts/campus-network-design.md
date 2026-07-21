---
title: "園區網路設計（Campus Network Design，五原則＋核心/分佈/存取三層架構）"
slug: campus-network-design
aliases: [Campus Network Design, 園區網路設計, campus-network, 園區網路]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
園區網路是政府、企業、工廠、醫院、校園這類**單一大型場域**內部署的超大型網路（可視為「一個超大的 [[local-area-network]]」）。園區網路設計遵**五大原則**，並採**核心 → 分佈 → 存取三層架構**（樹形拓撲的實作）把「跑骨幹、做策略、接終端」三種責任拆開。

## 關鍵面向
- **五大設計原則**：可擴展性、可靠性、安全性、效能、管理性。
- **存取層 Access（接終端）**：連接終端（電腦/印表機/IP 電話/AP）；使用者認證、VLAN 分段、QoS、[[power-over-ethernet]] 供電、本地流量處理。
- **分佈層 Distribution（匯聚與策略）**：**VLAN 間路由**、ACL 存取控制/流量過濾、負載平衡、冗餘；設備多為多層交換器（[[layer-3-switch]]）。
- **核心層 Core（高速骨幹）**：高速轉發、低延遲、冗餘容錯、流量匯聚、**全網路由**。
- **兩層壓縮（Collapsed Core）**：小型園區把分佈層併入核心，壓成「存取＋核心」兩層省成本。
- **高頻考點對應**：VLAN 間路由＝分佈層、使用者認證/PoE＝存取層、全網路由＝核心層。

## 應用場景
- **Simon 工作場景**：幾乎是公司網路的實體寫照——桌機/IP 電話/AP 接存取層（VLAN/802.1X/PoE 都在這層）、機房分佈/核心負責 VLAN 間路由與骨幹備援。理解分層對三件事有用：排障快速定位接取端 vs 骨幹層、ISO 27001 網路分割靠存取層 VLAN＋分佈層 ACL、評估網路備援看核心/分佈冗餘。中小廠區用兩層壓縮即可。
- **一般場景**：CCNA 高頻考「哪一層做什麼」對應題；三層架構在 VLAN、STP、Inter-VLAN Routing、FHRP 反覆出現。

## 相關概念
- [[local-area-network]]：園區＝一個超大 LAN
- [[network-topology]]：三層架構是樹形拓撲的實作
- [[spine-and-leaf-architecture]]：資料中心用脊葉架構、不套園區三層
- [[layer-3-switch]]：分佈層做 VLAN 間路由的設備
- [[power-over-ethernet]]：存取層供電給 AP/IP 電話

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/3-campus-network-design|CCNA Section 6 Leaf 3 園區網路設計]]
