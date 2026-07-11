---
title: "光纖（Fiber Optic，含單模 vs 多模・接頭・FTTH）"
slug: fiber-optic-cabling
aliases: [Fiber Optic, 光纖, 光纖線, single-mode-vs-multimode-fiber, 單模光纖, 多模光纖, single-mode, multimode, LC, SC, ST, FC, MPO, MTP, FTTH]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
光纖是以**光訊號**傳輸的介質，分**線纜本身**與**接頭**兩部分。應用從骨幹網路一路覆蓋到網路邊緣（許多地方已實現 **FTTH 光纖入戶**）。核心是**單模 vs 多模**的區分。光纖比雙絞線脆弱許多，但長距、抗干擾、頻寬都更佳。

## 關鍵面向
- **單模光纖**：纖芯小（8–10μm）、光走**單一路徑**、傳單組訊號、反射少；**低衰減/高頻寬/低色散**，適合**長距離**；常見波長 **1310nm**（中短距、低色散）與 **1550nm**（長距、抗衰減好）。
- **多模光纖**：纖芯大（50 或 62.5μm）、可傳**多組訊號**，但距離與速度都不如單模，適合**短距離/成本敏感**。
- **標準**：單模依 ITU-T、多模依 TIA/EIA 分類。
- **接頭**：LC（1.25mm 套管、最常見、單模為主）、SC（2.5mm、單/多模）、ST（卡式、多模）、FC（螺紋、單模、少見）、MTP/MPO（多光纖 12–24 條、高速）。
- **搭配光模組**：光纖靠 [[transceiver-module]]（SFP/QSFP）插進設備介面收發。

## 應用場景
- **Simon 工作場景**：機房核心交換機之間、跨棟拉線走**單模**（距離遠）；同機櫃/機房內短距高速互聯用**多模**省成本；光纖脆弱、佈線搬移注意彎折半徑。
- **一般場景**：CCNA 考銅纜 vs 光纖選型、單模 vs 多模差異與適用距離；接頭型號偏覺察級、知道名詞對應即可。

## 相關概念
- [[transceiver-module]]：光纖靠光模組（SFP/QSFP）收發
- [[twisted-pair-cabling]]：另一種主流介質，短距/低成本有優勢
- [[physical-layer]]：光訊號與介質屬實體層

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/3-fiber-optic-cabling|CCNA Section 7 Leaf 3 光纖]]
