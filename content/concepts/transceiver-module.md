---
title: "收發模組（Transceiver Module，SFP/QSFP・光口 vs 電口）"
slug: transceiver-module
aliases: [Transceiver Module, 收發模組, 光模組, 光口模組, 電口模組, SFP, SFP+, XFP, SFP28, QSFP, QSFP28, 準系統]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
收發模組是**插入交換機/路由器介面槽位的可插拔收發器**。現代設備越來越多採模組化設計、延伸到介面級——某些 Catalyst、Nexus 交換機買來只是**準系統（barebone）**，要依需求另購模組（光口或電口）插上才能用。

## 關鍵面向
- **模組化/準系統**：如 Nexus 9200 所有介面都需安裝介面模組，把模組插入對應槽位即可。
- **光口模組**：SFP、SFP+、XFP、SFP28、QSFP+/28/56、DD 等。**SFP**（Small Form-factor Pluggable，小型可拔插）單通道、廣用於千兆乙太網與光纖通道；**QSFP** 的 Q=Quad（四通道），提供更高速度。
- **電口模組**：對應標準的 RJ45 電口模組。
- **光口 vs 電口取捨**：電口**便宜、可提供 PoE，但發熱大、抗干擾差**；光口**發熱小、抗干擾強，但成本高**。
- **搭配介質**：光口模組配光纖（[[fiber-optic-cabling]]）、電口模組配雙絞線（[[twisted-pair-cabling]]）。

## 應用場景
- **Simon 工作場景**：採購交換機要把「光模組是分開買的」算進預算，別買了準系統機身卻沒配模組；盤點時記每台交換機槽位、已插模組型號（SFP/SFP+/QSFP）、對應波長與距離，換線/擴容直接對。
- **一般場景**：CCNA 覺察級——知道 SFP/QSFP 名詞對應、光口 vs 電口取捨即可，細部規格 CCNP/資料中心方向才深入。

## 相關概念
- [[fiber-optic-cabling]]：光口模組收發的介質
- [[twisted-pair-cabling]]：電口模組收發的介質
- [[power-over-ethernet]]：電口模組可提供 PoE 供電

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/3-fiber-optic-cabling|CCNA Section 7 Leaf 3 光纖]]
