---
title: "私有 IP 位址（Private IP Address）"
slug: private-ip-address
aliases: [Private IP Address, 私有 IP 位址, 私有位址, 私有網路地址, private address, RFC 1918, 內網位址]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
RFC 1918 保留給組織**內部網路**使用的 [[ipv4]] 位址段，**不能在公網被路由器路由**，可在不消耗公共 IP 的情況下實現內網互通。是緩解 [[ipv4-address-exhaustion]] 的關鍵手段（搭配 NAT）。

## 關鍵面向
- **三段（對應 A/B/C）**：`10.0.0.0/8`（A）、`172.16.0.0 – 172.31.255.255`（/12，B）、`192.168.0.0/16`（C）
- **最常見**：家用路由器、辦公室、網咖多用 192.168 開頭；家用路由器管理位址常是 192.168.0.1 或 .1.1
- **不可公網路由**：封包帶私有來源/目的，出公網要靠 NAT 轉成公共 IP
- **vs 其他特殊位址**：與 loopback（127/8）、[[apipa]]（169.254/16）並列「不上公網」的特殊段，但用途不同
- **由來**：IPv4 位址不夠用，私有段讓海量內網裝置共用少數公共 IP

## 應用場景
- **Simon 工作場景**：公司內網全是私有段 + NAT；規劃 VLAN/網段、看防火牆 NAT 規則、判斷某 IP 是內網還外網的第一直覺
- **一般場景**：CCNA／Network+／資安基礎必背；滲透測試判斷標靶是否內網資產

## 相關概念
- [[ipv4]]：私有位址是其保留段
- [[classful-addressing]]：三段分別落在 A/B/C 類
- [[ip-address]]：私有是相對於公共位址
- [[apipa]]：另一種不上公網的自動位址

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
