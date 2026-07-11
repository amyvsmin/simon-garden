---
title: "三層交換機（Layer 3 Switch，含二層/多層對比）"
slug: layer-3-switch
aliases: [Layer 3 Switch, 三層交換機, 三層交換器, L3 switch, 二層交換機, Layer 2 Switch, 多層交換機, Multilayer Switch]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
三層交換機主體仍工作在 [[data-link-layer]]（L2）、**基於 [[mac-address]] 做訊框轉送與過濾**（提供高效的 L2 交換），但**同時能處理 IP 封包、支援子網路之間的通訊**，所以稱「三層」。它是把交換的速度與路由的能力結合在同一台設備的產物。

## 關鍵面向
- **二層交換機（L2）**：只基於 MAC 位址在資料連結層轉送/過濾訊框。
- **三層交換機（L3）**：L2 為主，但能處理 IP 封包、做**子網路（VLAN）間路由**；常搭 [[svi]] 當各 VLAN 的 [[default-gateway]]。
- **多層交換機（Multilayer）**：再往上能處理**傳輸層 L4 埠號**資訊（如依 TCP/UDP 埠號的流量控制、負載平衡）。
- **資料中心交換機**：專為資料中心設計的高效能交換機（高頻寬/低延遲/高可靠），用於伺服器互聯、伺服器與儲存互聯。
- **為何重要**：三層交換機是園區網路「分佈層做 VLAN 間路由」的主力設備，比路由器介面更高效。

## 應用場景
- **Simon 工作場景**：公司核心/分佈層通常用三層交換機做 VLAN 間路由，比拿路由器逐介面路由高效；規劃 VLAN 與網段時對照「哪台做 L3 閘道」。
- **一般場景**：CCNA VLAN、inter-VLAN routing、SVI、園區設計反覆用到；常考「三層交換機 vs 路由器差在哪」「多層交換機能處理到 OSI 哪一層」。

## 相關概念
- [[data-link-layer]]：三層交換機主體工作的層級
- [[svi]]：三層交換機做 VLAN 間路由的虛擬介面
- [[default-gateway]]：三層交換機常擔任各 VLAN 的預設閘道
- [[mac-address]]：L2 轉送訊框的依據

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/1-network-devices-and-topology-diagrams|CCNA Section 7 Leaf 1 網路設備與拓樸圖]]
