---
title: "網路拓撲類型（Network Topology，匯流排/星形/環形/網狀/樹形/混合）"
slug: network-topology
aliases: [Network Topology, 網路拓撲, 網路拓撲類型, 拓撲類型, 拓樸類型]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
網路拓撲描述網路中**節點與連結的排列型態**（實體接線或邏輯路徑）。不同拓撲在成本、易管理性、容錯性、擴展性之間各有取捨。

> **與 [[network-topology-diagram]] 區分**：本概念是「排列**型態**」（星/匯流排/網狀…）；network-topology-diagram 是「**畫法**」（邏輯 vs 實體佈置圖）。兩者常被混淆。

## 關鍵面向
- **匯流排 Bus（已淘汰）**：所有節點掛在一條共用同軸電纜、兩端裝終端電阻；70–80 年代早期乙太網路。
- **點對點 Point-to-Point**：兩設備直連，簡單快速、擴展性差。
- **星形 Star（現役主流）**：所有節點連到中心交換器，是現代 LAN 主流；弱點是中心單點故障（見 [[star-topology]]）。
- **環形 Ring（已淘汰）**：節點串成環；Token Ring、FDDI。
- **網狀 Mesh**：多重互連、高容錯，用於資料中心/無線；極端形式**全連結（Full Mesh）**每點連所有點（連結數 n(n-1)/2）。
- **樹形 Tree**：分層結構，是**園區三層架構的原型**（見 [[campus-network-design]]）。
- **混合 Hybrid**：綜合運用多種拓撲。

## 應用場景
- **Simon 工作場景**：公司內網幾乎清一色星形（單點故障在中心交換器）；關鍵機房/核心層用網狀或雙上聯提高容錯，資料中心兩台核心交換器拉多條互連就是網狀思維落地。
- **一般場景**：CCNA 常考「哪種拓撲單點故障最易癱瘓全網」「資料中心高可靠首選哪種」；記每種的代表範例＋一句優缺點。

## 相關概念
- [[star-topology]]：現役主流的星形拓撲，單獨成頁
- [[network-topology-diagram]]：拓撲「畫法」，勿與本概念（拓撲「型態」）混淆
- [[campus-network-design]]：樹形拓撲的實務落地（三層架構）
- [[spine-and-leaf-architecture]]：資料中心的網狀思維落地

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/2-network-topology-types|CCNA Section 6 Leaf 2 網路拓撲類型]]
