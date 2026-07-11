---
title: "乙太網路（Ethernet，含 10BASE-T 命名法）"
slug: ethernet
aliases: [Ethernet, 乙太網路, 以太網, IEEE 802.3, ethernet-naming-convention, 乙太網路命名法, 10BASE-T, 1000BASE-T, BASE-T]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
乙太網路是最普遍應用的**區域網路技術**，1973 年由施樂（Xerox）發明、1980 年公開，對應 **IEEE 802.3** 系列標準。傳輸速度從最初 3Mbps 發展到目前 1600Gbps 並持續提高，主要傳輸媒介有雙絞線、光纖（同軸電纜已淘汰）。它靠 [[csma-cd]] 處理共享介質上的碰撞，資料封裝成 [[ethernet-frame]]。

## 關鍵面向
- **起源與標準**：Xerox 1973 發明、1980 公開；IEEE 802.3 標準族，最新 802.3df 可達 1600G。
- **CSMA/CD**：早期共享介質的存取控制（偵聽→傳→撞了退避）；全雙工交換網路已幾乎不用。
- **10BASE-T 命名法（拆三段）**：**前數字**=速率 bps（10/100/1000/2.5G/40G…）；**BASE**=基頻訊號（baseband，不經調製直接傳）；**後字母/數字**=介質（**T**=雙絞線、**F**=光纖、2/5 等=同軸；除 T 外的字母基本指光纖）。
- **速率演進**：10M→100M→1G→10G→…→1600G，向下相容。
- **媒介**：雙絞線（[[twisted-pair-cabling]]）、光纖（[[fiber-optic-cabling]]）；同軸在資料傳輸已淘汰。

## 應用場景
- **Simon 工作場景**：公司內網幾乎全是乙太網路；看介面標識（如 1000BASE-T）就知道該埠速率與介質，排錯時先確認協商速率/雙工。
- **一般場景**：CCNA「Network Fundamentals」考 10BASE-T 命名法解碼、乙太網路標準與速率、CSMA/CD 概念。

## 相關概念
- [[csma-cd]]：乙太網路共享介質的存取控制機制
- [[ethernet-frame]]：乙太網路的 L2 封裝單位
- [[twisted-pair-cabling]]：乙太網路最常用的銅纜介質
- [[fiber-optic-cabling]]：乙太網路的光纖介質
- [[physical-layer]]：命名法中的介質與訊號屬實體層

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/2-twisted-pair-cabling|CCNA Section 7 Leaf 2 雙絞線]]
