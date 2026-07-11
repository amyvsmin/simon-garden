---
title: "星形拓撲（Star Topology，現代 LAN 主流）"
slug: star-topology
aliases: [Star Topology, 星形拓撲, 星型拓撲, 星狀拓撲]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
星形拓撲是所有節點都連到一個**中心設備（交換器）**的拓撲。從 1980 年代至今是**區域網路的主流**——例如透過交換器建構的網路就是最典型的星形。易於管理、建置成本低；缺點是**中心節點故障會導致整個網路癱瘓**（單點故障集中在中心）。

## 關鍵面向
- **交換器為中心**：所有終端放射狀連入中心交換器。
- **現代 LAN 主流**：1980 年代至今，是 [[local-area-network]] 的標準拓撲。
- **弱點＝中心單點故障**：中心交換器一倒、整網癱瘓。
- **銜接後續章節**：「星形中心不能倒」正是後面 **STP、EtherChannel、FHRP** 要解的問題——加冗餘上聯提高可用性 → 產生迴圈 → STP 解迴圈。這條敘事貫穿 CCNA 交換與備援部分。

## 應用場景
- **Simon 工作場景**：公司內網就是星形（桌機/AP 全接到接取層交換器）；維運重點是「中心交換器是單點故障」，關鍵機房才用雙上聯/冗餘化解。
- **一般場景**：CCNA 高頻考「現代 LAN 最主流拓撲」（星形）與其單點故障弱點。

## 相關概念
- [[network-topology]]：星形是拓撲型態的一種
- [[local-area-network]]：星形是現代 LAN 的主流拓撲
- [[campus-network-design]]：園區三層架構的接取層即以星形接終端

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/2-network-topology-types|CCNA Section 6 Leaf 2 網路拓撲類型]]
