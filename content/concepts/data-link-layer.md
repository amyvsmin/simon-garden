---
title: "資料連結層（Data Link Layer，OSI L2）"
slug: data-link-layer
aliases: [Data Link Layer, 資料連結層, 資料鏈結層, OSI 第二層, L2]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
資料連結層是 OSI 第 2 層，負責同一網段內、相鄰節點之間的可靠傳輸。它用 [[mac-address]] 加交換器定址，把上層的 L3 封包封裝成 [[ethernet-frame]]，並做錯誤偵測。對照記憶：L3 靠 IP＋路由器跨網段，L2 靠 MAC＋交換器在同網段內通訊。

## 關鍵面向
- **兩個子層**：LLC（邏輯鏈結控制，對上層介面，管多工/流量控制/錯誤校驗）與 MAC（媒體存取控制，對下層，管介質存取 [[csma-cd]]/[[csma-ca]] 與訊框封裝）。
- **訊框封裝**：把 L3 封包加上來源/目標 MAC、類型等資訊封成 [[ethernet-frame]]，接收端再解封裝。
- **介質存取控制**：用 [[csma-cd]]（有線、撞了 Jamming＋Backoff）與 [[csma-ca]]（無線、DIFS＋隨機退避＋ACK）確保同一時間只有一台設備傳輸。
- **域的劃分**：牽涉 [[collision-domain]]/[[broadcast-domain]]；交換器隔離衝突域、廣播域需 VLAN 才能分。
- **工作設備**：交換器、網橋、無線存取點（WAP）、網卡（NIC）。

## 應用場景
- **Simon 工作場景**：管交換器的主場——查 MAC 位址表、用 VLAN 切廣播域縮小廣播風暴與隔離部門；FCS/CRC 錯誤或 duplex mismatch 引發的 late collision 都在這層排查。
- **一般場景**：CCNA/Network+/SSCP 的交換技術根基，VLAN、衝突/廣播域、訊框結構全直接考。

## 相關概念
- [[osi-model]]：資料連結層是其中的第 2 層
- [[mac-address]]：本層用來定址的硬體位址
- [[ethernet-frame]]：本層的封裝單位
- [[csma-cd]]：本層 MAC 子層的介質存取機制
- [[collision-domain]]：本層設備劃分與隔離的範圍

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
