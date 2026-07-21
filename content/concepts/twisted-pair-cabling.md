---
title: "雙絞線（Twisted Pair，含 UTP/STP・Cat 分類・T568A/B・直通/交叉線）"
slug: twisted-pair-cabling
aliases: [Twisted Pair, 雙絞線, UTP, STP, RJ45, Cat5, Cat5e, Cat6, Cat6A, Cat8, T568A, T568B, straight-through-vs-crossover-cable, 直通線, 交叉線, Auto-MDIX]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
雙絞線是乙太網路環境用最多的銅纜，共 **8 條線、分 4 組**（白橙橙、白綠綠、白藍藍、白棕棕），每組兩根導線纏繞成絞合狀。**絞合能有效減少電磁波干擾**。加屏蔽層的稱 **STP（屏蔽雙絞線）**、不加的稱 **UTP（非屏蔽雙絞線）**。接頭為 **RJ45**（FCC 定義、8 針）。

## 關鍵面向
- **UTP vs STP**：STP 多一層屏蔽、抗干擾更強；等級越高用更純更粗的銅線、更密絞纏、中間加加強筋抗拉。
- **Cat 分類**：Cat5(100M)/Cat5e(1G)/Cat6(1G,更嚴規範)/Cat6A(10G@100m)/Cat7A(40–100G)/Cat8(40G但距離≤30m,資料中心)；頻寬(MHz)越高、傳資料能力越強。分類由 ANSI/EIA(TIA/EIA) 制定。
- **T568A/B 線序**：定義每根線在 RJ45 的位置。T568B 商業網路最廣用、T568A 住宅常用。
- **直通線 vs 交叉線**：兩端同標準(都 A 或都 B)=直通線；一端 A 一端 B=交叉線。**同層設備用交叉、不同層用直通**（Pin 1,2=TX 發送、3,6=RX 接收；同層直通會 send↔send 碰撞）。
- **Auto-MDIX**：現代設備能自動協商重定義針腳，直通/交叉之分已是歷史遺留、不必手工分。
- **用線量**：100Mbps 及以下只用 2 組（白橙橙+白綠綠）、千兆及以上用全 8 根 4 組（全雙工）。

## 應用場景
- **Simon 工作場景**：採購佈線看 Cat 等級對應速率上限——跑 10G 至少 Cat6A、資料中心短距高速才 Cat8(距離限 30m)；新拉線一律 Cat6A 以上留餘裕；Auto-MDIX 後線序不再是排錯嫌疑犯，先查介面協商速率/雙工。
- **一般場景**：CCNA 考纜線選型（銅纜 vs 光纖、Cat 等級、距離）、UTP/STP、直通/交叉線使用時機（雖靠 Auto-MDIX 仍要會判）。

## 相關概念
- [[ethernet]]：雙絞線是乙太網路最常用的介質
- [[fiber-optic-cabling]]：另一種主流介質，長距/抗干擾更強
- [[physical-layer]]：線纜與接頭屬實體層
- [[csma-cd]]：全雙工雙絞線交換網路已不需碰撞偵測

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/2-twisted-pair-cabling|CCNA Section 7 Leaf 2 雙絞線]]
