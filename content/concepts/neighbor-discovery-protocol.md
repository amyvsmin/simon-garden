---
title: "NDP 鄰居發現協定（Neighbor Discovery Protocol）"
slug: neighbor-discovery-protocol
aliases: [NDP, Neighbor Discovery Protocol, 鄰居發現協定, 鄰居發現協議, 鄰居探索協定, ICMPv6 NDP]
category: 資安
confidence: 已驗證
created: 2026-07-03
---

## 定義
IPv6 中基於 **ICMPv6** 的鄰居發現協定，**取代 [[ipv4]] 的 [[arp]]**。透過懇求節點多播位址，提供兩大基本功能：**位址解析**（查同鏈路其他設備的 [[mac-address]]）與 **DAD 重複位址偵測**（確認本鏈路上位址唯一）。是 IPv6「免 ARP」的關鍵。

## 關鍵面向
- **基於 ICMPv6**：用 ICMPv6 訊息（RS/RA/NS/NA）運作，非獨立協定
- **取代 ARP**：功能對應 ARP，但省掉 ARP 的廣播請求與第一包逾時
- **位址解析**：靠懇求節點多播位址查對方 MAC，比 ARP 全網廣播精準
- **DAD 重複位址偵測**：配位址前先確認本鏈路無人使用、避免衝突
- **免 ARP 的效率**：ping IPv6 不像 IPv4 第一包因 ARP 逾時、封包全通

## 應用場景
- **Simon 工作場景**：排查 IPv6 連通時，看到 ping 第一包不掉、`show ipv6 neighbors` 有鄰居表，就知道 NDP 正常運作、不是故障
- **一般場景**：CCNA 考「IPv6 用什麼取代 ARP」；SLAAC 取得前綴（RA 路由器通告）也靠 NDP

## 相關概念
- [[arp]]：NDP 取代的 IPv4 協定
- [[ipv6]]：NDP 是 IPv6 的核心鄰居機制
- [[mac-address]]：位址解析查的目標
- [[link-local-address]]：NDP 控制流量以 LLA 為載體
- [[slaac]]：SLAAC 靠 NDP 的路由器通告取得前綴

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/5-configuring-ipv6-on-cisco-router-lab|CCNA Section 5 Leaf 5 IPv6 路由器實驗]]
