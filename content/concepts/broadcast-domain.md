---
title: "廣播域（Broadcast Domain）"
slug: broadcast-domain
aliases: [Broadcast Domain, 廣播域]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
廣播域是廣播訊框能夠到達的範圍，範圍內所有設備都會收到發往廣播位址的資料。它是 [[data-link-layer]]（L2）與 [[network-layer]]（L3）共同涉及的概念，與 [[collision-domain]] 成對對照，是 CCNA 高頻考點。

## 關鍵面向
- **預設不分割**：Hub 與交換器整台預設都只有 1 個廣播域。
- **交換器分割廣播域**：交換器要靠 VLAN 才能把單一廣播域切成多個，否則所有埠同屬一個廣播域。
- **路由器（Router）**：每個介面 1 個廣播域，因各介面在不同網段，自然隔開廣播。
- **三種廣播位址**：L2 全 F MAC（FF:FF:FF:FF:FF:FF）、L3 的 255.255.255.255、各子網的最後一個位址。
- **廣播風暴**：廣播域過大時廣播流量會放大，VLAN 切小廣播域可降低風暴並隔離部門。

## 應用場景
- **Simon 工作場景**：在公司交換器上用 VLAN 切廣播域，縮小廣播風暴範圍、隔離不同部門網段；遇到不明大量廣播流量時，先確認廣播域邊界與 VLAN 配置。
- **一般場景**：CCNA 需默畫 Hub（1）／4 埠 Switch（1，VLAN 才分）／4 埠 Router（4）的廣播域數；Network+、SSCP 涵蓋 VLAN 與網段隔離。

## 相關概念
- [[collision-domain]]：成對對照；廣播域是廣播能到的範圍，衝突域是會互撞的範圍。
- [[data-link-layer]]：L2 全 F MAC 廣播位址所屬層級。
- [[network-layer]]：L3 廣播位址（255.255.255.255、子網最後一位）所屬層級。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
