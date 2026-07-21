---
title: "預設閘道（Default Gateway）"
slug: default-gateway
aliases: [Default Gateway, 預設閘道, 預設網關, 缺省網關, gateway, 閘道]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
本網段對外的出口位址——當主機要送封包到**不在自己網段**的目標時，會把封包交給預設閘道（通常是該網段路由器或三層交換器 [[svi]] 的介面 IP）代為轉發。手動設定 [[ip-address]] 時，閘道與 DNS 是必填項，否則只能內網通、出不去。

## 關鍵面向
- **角色**：跨網段通訊的「第一跳」出口；同網段直接走 L2、跨網段才找閘道
- **手動設定要素**：IP／遮罩／**預設閘道**／DNS 四件套缺一不可（漏閘道＝上不了外網）
- **通常是誰**：該網段路由器介面、或三層交換器對應 VLAN 的 SVI 位址
- **路由表的兜底**：對主機而言，閘道相當於「目標不在本網段就送這裡」，呼應路由器的預設路由（0.0.0.0/0）
- **常見值**：內網常見 192.168.x.254 或 .1 之類

## 應用場景
- **Simon 工作場景**：設裝置/伺服器 IP 必設閘道；排錯「內網通、外網不通」第一個查閘道對不對；規劃 VLAN 時每段都要有閘道（路由器子介面或三層交換器 SVI）
- **一般場景**：CCNA／Network+／桌面支援基礎

## 相關概念
- [[ip-address]]：手動設定時與閘道一起填
- [[svi]]：三層交換器常用 SVI 當各 VLAN 閘道
- [[subnet-mask]]：決定哪些目標算「跨網段」、需走閘道
- [[apipa]]：APIPA 狀態通常無有效閘道

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/6-configuring-ipv4-on-cisco-windows-linux|CCNA Section 4 Leaf 6 設定 IPv4]]
