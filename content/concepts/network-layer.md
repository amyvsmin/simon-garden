---
title: "網路層（Network Layer，OSI L3）"
slug: network-layer
aliases: [Network Layer, 網路層, OSI 第三層, L3]
category: 網路基礎
confidence: 已驗證
created: 2026-06-15
---

## 定義
網路層是 [[osi-model]] 的第 3 層，負責**跨網段、端到端的封包遞送與路徑選擇（路由）**。它用 IP 邏輯位址替設備定址，由路由器查路由表決定如何轉發封包到目標網段。相對於傳輸層管「應用到應用」，網路層管的是「主機到主機跨網路」。

## 關鍵面向
- **核心職責**：邏輯位址定址 + 封包轉發（路由）+ 分片重組 + 診斷（[[icmp]]）+ 安全（IPsec，純文字）。
- **本層協定**：[[internet-protocol]]（IP）、[[icmp]]、[[arp]]、NAT（純文字、不另立概念）。
- **分片重組**：封包大於 MTU（最大傳輸單元）時切成小片傳、到目標再重組。
- **工作設備**：路由器、三層交換器（L3 switch）、防火牆，皆能依 IP 位址做轉發與策略。
- **邏輯 vs 實體位址**：IP（L3）可規劃可變動，[[mac-address]]（L2）燒在網卡上。

## 應用場景
- **Simon 工作場景**：內網維運主場——IP 規劃與子網切割、防火牆上的 NAT、三層交換器做 VLAN 間路由、用 ping/traceroute 與 ARP 表排查連通與位址衝突。
- **一般場景**：CCNA 的核心骨幹（IPv4/IPv6 定址、靜態與動態路由、NAT、ACL 全建立在這層），也是 Network+/SSCP 的必考層。

## 相關概念
- [[osi-model]]：網路層為其第 3 層
- [[internet-protocol]]：本層的核心定址協定
- [[routing-protocols]]：在本層生成路由表的動態協定
- [[arp]]：本層連結 L3↔L2 的地址解析
- [[icmp]]：本層的控制與診斷協定

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/9-network-layer|CCNA Section 2 Leaf 9 網路層]]
