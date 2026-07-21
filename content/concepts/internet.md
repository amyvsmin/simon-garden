---
title: "網際網路（Internet，去中心化公共基礎設施）"
slug: internet
aliases: [Internet, 網際網路, 互聯網]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
網際網路（Internet）是**不屬於任何單一實體、去中心化**的公共網路，本質是一種**基礎設施**，讓全球的個人與組織互相存取資源。關鍵區分——LAN/MAN/WAN 是「某個人或組織自己的網路」，而 Internet 是「大家共用的公共平台」，**Internet ≠ WAN**。

## 關鍵面向
- **去中心化**：不屬於任何單一實體、無中央擁有者。
- **≠ WAN（load-bearing 區分）**：[[wide-area-network]] 等是「自己的網路」，Internet 是公共基礎設施。
- **企業借用公共 Internet 串遠端**：如 [[vpn]] 在公共網路上建加密通道連據點。
- **相對電信商私有服務**：MPLS、專線走電信商專屬電路、不走公共 Internet（見 [[wide-area-network]]）。

## 應用場景
- **Simon 工作場景**：公司對外服務與遠端存取都經公共 Internet；理解「Internet 是公共平台、VPN 才是在其上建的私有通道」有助資安評估（跨 Internet 段的加密與端點風險）。
- **一般場景**：CCNA 常考「Internet 是否等於 WAN」（否）與去中心化定位。

## 相關概念
- [[wide-area-network]]：組織自己的廣域網路，別與 Internet 混淆
- [[local-area-network]]：組織自己的區域網路
- [[vpn]]：在公共 Internet 上建加密通道

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/1-lan-man-wan-and-internet|CCNA Section 6 Leaf 1 LAN/MAN/WAN 與 Internet]]
