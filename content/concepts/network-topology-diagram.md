---
title: "網路拓樸圖（Network Topology Diagram，邏輯 vs 實體）"
slug: network-topology-diagram
aliases: [Network Topology Diagram, 網路拓樸圖, 拓樸圖, 拓撲圖, 邏輯拓撲圖, 實體佈置圖, topology diagram]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
拓樸圖是**只考慮節點之間邏輯連接關係（誰透過哪個介面連誰）、不考慮實體位置與距離**的網路圖。topology 源自數學名詞。與之相對的是**實體佈置圖**——畫設備在真實環境中的安裝部署位置（在哪棟樓、哪一層、哪個機櫃）。正式文件用拓樸圖呈現網路方案的設計，是所有 CCNA 實驗與設計文件的閱讀基礎。

## 關鍵面向
- **邏輯 vs 實體**：拓樸圖表達邏輯（介面對介面的連接）；實體佈置圖表達實體（真實安裝位置）。實體位置在專案前期結合現場規劃。
- **只表達連接、不表達位置**：看得出誰連誰、走哪個介面，看不出設備分佈在哪裡、間隔多遠。
- **圖標規範非強制**：但通常用大部分人都看得懂的通用圖標（線纜、各類設備），現多統一用直線表示各類連接。
- **與「拓撲類型」不同**：本概念是「圖的畫法」；星形/匯流排/環形/網狀等「拓撲類型結構」是另一件事（見 Section 6 網路拓撲）。
- **繪製工具**：Visio（可載 Cisco/HP/Juniper 官方圖庫）、PowerPoint（Shift 等比縮放、圖層概念）。

## 應用場景
- **Simon 工作場景**：交接、稽核、排錯時最省溝通成本的資產。機房設備盤點（ISO 27001 BIA）配一張現網拓樸圖，追「這台掛了影響哪些下游」時順著介面連線就能追；建議用 Cisco 官方 Visio 圖庫把核心/分佈/存取三層畫成標準底圖，每次變更改這張、不重畫。
- **一般場景**：CCNA 大量題目與 Packet Tracer 實驗都建立在「看得懂拓樸圖」上；設備圖標與 OSI 分層的對應是高頻觀念題。

## 相關概念
- [[physical-layer]]：拓樸與線纜屬實體層範疇
- [[data-link-layer]]：交換器等 L2 設備在拓樸圖上的節點

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/1-network-devices-and-topology-diagrams|CCNA Section 7 Leaf 1 網路設備與拓樸圖]]
