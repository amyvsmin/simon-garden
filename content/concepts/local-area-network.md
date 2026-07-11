---
title: "區域網路（LAN，Local Area Network）"
slug: local-area-network
aliases: [Local Area Network, LAN, 區域網路, 局域網]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
區域網路（LAN）是連接**相對小範圍**（單一建築物或一個園區內）電腦與裝置的網路。特點是覆蓋範圍小（數十米、最多數公里）、設計維護容易，適用於家庭、辦公室、學校、中小型企業。**這是 CCNA 絕大多數內容（交換、VLAN、STP）的舞台。**

## 關鍵面向
- **覆蓋範圍小**：數十米到最多數公里，限單一建築或園區內。
- **設計維護容易**：相對 MAN/WAN 門檻低。
- **CCNA 主場**：交換、VLAN、[[star-topology]]、STP 等幾乎都在 LAN 範疇內發生。
- **與 MAN/WAN 對比**：LAN 範圍最小；更大範圍見 [[wide-area-network]]（MAN 同城、WAN 跨國）。
- **與 Internet 的區分**：LAN 是「你自己的網路」，[[internet]] 是不屬任何單一實體的公共基礎設施。

## 應用場景
- **Simon 工作場景**：公司內網（桌機/印表機/IP 電話/AP 接到接取層交換器）就是典型 LAN，是日常維運與 ISO 27001 網路分割的主要範圍。
- **一般場景**：CCNA「Network Fundamentals」以 LAN 為基礎；常考 LAN vs MAN vs WAN 的範圍分類。

## 相關概念
- [[wide-area-network]]：更大範圍的網路（MAN 同城、WAN 跨國）
- [[internet]]：公共基礎設施，相對於「自己的 LAN」
- [[campus-network-design]]：園區網路可視為「一個超大的 LAN」
- [[network-topology]]：LAN 常用星形拓撲

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/1-lan-man-wan-and-internet|CCNA Section 6 Leaf 1 LAN/MAN/WAN 與 Internet]]
