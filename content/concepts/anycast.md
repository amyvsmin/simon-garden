---
title: "任意播（Anycast）"
slug: anycast
aliases: [Anycast, 任意播, 任播, 選播, anycast address, 任意播位址]
category: 資安
confidence: 已驗證
created: 2026-07-03
---

## 定義
一種**讓多台設備共享同一個 IP 位址**、封包會被網路**路由到「距離發送者最近的一台」**的定址方式。是 IPv6 三大位址類型（單播／多播／任意播）之一，首見於 RFC 1546，IETF 定義主要用於 DNS 或 HTTP 服務。

## 關鍵面向
- **多設備共享一 IP**：這是任意播最核心的特徵
- **路由到最近**：網路以演算法把封包導向最近的一台設備
- **無專屬前綴／範圍**：可用 IPv6 中任何一個位址當任意播位址
- **對照多播**：多播是「送給一群全部」，任意播是「送給一群中最近的一個」
- **廣泛應用**：DNS 根伺服器、CDN 內容遞送、IPv6 的 NDP

## 應用場景
- **Simon 工作場景**：理解為何全球 DNS 根伺服器用少數 IP 卻能就近服務、CDN 如何把使用者導到最近節點；評估對外服務的高可用架構時的觀念基礎
- **一般場景**：CCNA 考 IPv6 三大類與「任意播＝共享 IP、路由到最近」；現代網路高可用與低延遲的關鍵手段

## 相關概念
- [[ipv6]]：任意播是 IPv6 的位址類型之一
- [[global-unicast-address]]：任意播可用一般 GUA 位址充當
- [[dns]]：DNS 根伺服器是任意播的典型應用

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
