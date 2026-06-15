---
title: "衝突域（Collision Domain）"
slug: collision-domain
aliases: [Collision Domain, 衝突域, 碰撞域]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
衝突域是一組共享同一傳輸介質的設備所在範圍，範圍內若兩台以上同時發送，訊框會在介質上互相碰撞而需重送。碰撞由 [[csma-cd]] 偵測並處理。衝突域屬於 [[data-link-layer]]（L2）與實體層的概念，與 [[broadcast-domain]] 是 CCNA 高頻對照考點。

## 關鍵面向
- **共享介質**：同一衝突域內同一時刻最好只有一台設備發送，否則互撞、效率低落。
- **Hub（集線器）**：整台只有 1 個衝突域，所有埠共享頻寬、同一時刻只能一台傳，因此早已被淘汰。
- **交換器（Switch）**：每個埠各自 1 個衝突域，隔離了衝突域，各埠連的設備可同時傳輸不互撞。
- **路由器（Router）**：每個介面 1 個衝突域（各介面在不同網段）。
- **碰撞處理**：偵測到碰撞時送 Jamming 干擾訊號，參與碰撞的設備跑 Backoff 退避演算法。

## 應用場景
- **Simon 工作場景**：管交換器時，每個埠是獨立衝突域，現代全雙工交換網路幾乎無碰撞；若 late collision 計數飆高，常代表 duplex mismatch（半／全雙工不一致）或線材問題，是排查介面故障的線索。
- **一般場景**：CCNA Network Access 模組核心考點，需默畫 Hub（1）／4 埠 Switch（4）／4 埠 Router（4）的衝突域數；Network+、SSCP 也涵蓋此網段隔離概念。

## 相關概念
- [[broadcast-domain]]：成對對照；衝突域是會互撞的範圍，廣播域是廣播能到達的範圍。
- [[csma-cd]]：負責偵測與處理同一衝突域內的碰撞。
- [[data-link-layer]]：衝突域所屬的 OSI 層級。
- [[ethernet-frame]]：在衝突域內傳輸、發生碰撞的資料單位。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
