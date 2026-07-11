---
title: "胖 AP vs 瘦 AP（Fat AP vs Thin AP）"
slug: fat-ap-vs-thin-ap
aliases: [Fat AP, Thin AP, 胖AP, 瘦AP, Fat Access Point, Thin Access Point, Autonomous AP, Lightweight AP, 自主式AP, 輕量型AP]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
無線存取點（AP）的兩種架構。**胖 AP（Fat AP）**就是家用**無線路由器**——集成交換機、路由器、無線 AP 的功能，可**獨立設定管理、不依賴中央控制器**。**瘦 AP（Thin AP）**是企業用的存取點——**只負責最基本的無線訊號傳輸與存取**，所有設定管理都交給 [[wireless-lan-controller]] 集中處理。

## 關鍵面向
- **胖 AP**：集成體（交換+路由+無線一體）、每台可獨立設定管理、不依賴控制器；典型即家用無線路由器。
- **瘦 AP**：只做無線訊號傳輸/存取；設定與管理全交給控制器；透過有線方式上聯到 WLC。
- **適用場景**：家用單台胖 AP 各自為政即可；大型企業/飯店/醫院/商場用大量瘦 AP + WLC 集中管理、統一覆蓋規劃。
- **供電**：企業瘦 AP 常是 PoE 的受電端（[[power-over-ethernet]] 的 PD）。
- **後續**：胖/瘦 AP 與 WLC 的架構差異在 CCNA Section 22 WLAN 深入。

## 應用場景
- **Simon 工作場景**：公司無線佈點用瘦 AP + WLC 集中管理，比一台台胖 AP 各自設定省維運；AP 靠接取層 PoE 交換機供電。
- **一般場景**：CCNA WLAN 章節考 AP 模式（autonomous vs lightweight）、與 WLC 的關係、CAPWAP。

## 相關概念
- [[wireless-lan-controller]]：集中管理瘦 AP 的控制器
- [[power-over-ethernet]]：瘦 AP 常是 PoE 受電端
- [[network-topology-diagram]]：AP 在拓樸圖上的圖標與角色

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/1-network-devices-and-topology-diagrams|CCNA Section 7 Leaf 1 網路設備與拓樸圖]]
