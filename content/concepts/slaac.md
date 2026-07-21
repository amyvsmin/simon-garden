---
title: "SLAAC 無狀態位址自動配置（Stateless Address Autoconfiguration）"
slug: slaac
aliases: [SLAAC, Stateless Address Autoconfiguration, 無狀態位址自動配置, 無狀態自動配置, 無狀態位址自動組態]
category: 網路基礎
confidence: 已驗證
created: 2026-07-03
---

## 定義
IPv6 中設備**不依賴 DHCP 伺服器、自行生成 [[global-unicast-address]]** 的動態配置方式。「無狀態」是相對 DHCPv6 的「有狀態」——沒有伺服器記錄「誰拿了哪個位址」，設備靠路由器通告的前綴＋自算的介面 ID（常用 [[eui-64]]）自主組出位址。

## 關鍵面向
- **無狀態 vs 有狀態**：SLAAC 無伺服器追蹤租約；DHCPv6 有狀態則像 IPv4 [[dhcp]] 記錄分配
- **前綴來源**：靠 [[neighbor-discovery-protocol]] 的路由器通告（RA）取得網路前綴
- **介面 ID**：常用 [[eui-64]] 由 MAC 生成，或隨機化（隱私考量）
- **取得 GUA 三方式之一**：手動靜態／SLAAC／DHCPv6 有狀態
- **省管理**：大量設備免逐台配 IP、也免架 DHCP 伺服器

## 應用場景
- **Simon 工作場景**：IPv6 網路可讓終端走 SLAAC 自動取址、減少 DHCP 維護負擔；但要位址可追蹤、可控管時仍會選 DHCPv6
- **一般場景**：CCNA 考「IPv6 動態取址的兩種方式（SLAAC vs DHCPv6）」與無狀態／有狀態之別

## 相關概念
- [[eui-64]]：SLAAC 常用它生成介面 ID
- [[ipv6]]：SLAAC 是 IPv6 的自動配置機制
- [[global-unicast-address]]：SLAAC 生成的目標位址
- [[dhcp]]：對照 IPv4 動態取址／DHCPv6 有狀態方式
- [[neighbor-discovery-protocol]]：SLAAC 靠 RA 取得前綴

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/4-configuring-ipv6-on-cisco|CCNA Section 5 Leaf 4 在 Cisco 設定 IPv6]]
