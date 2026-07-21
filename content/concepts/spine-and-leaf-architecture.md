---
title: "Spine-and-Leaf 脊葉式架構（資料中心互聯拓撲）"
slug: spine-and-leaf-architecture
aliases: [Spine-and-Leaf, spine and leaf, 脊葉式架構, 脊葉架構, Spine, Leaf, 脊, 葉]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
Spine-and-Leaf（脊葉式架構）是**資料中心（Data Center）**設備採用的兩層互聯拓撲：上層 **Spine（脊）**、下層 **Leaf（葉）**。**每一台 Leaf 都連到每一台 Spine（脊葉間全連接），但 Leaf 之間、Spine 之間彼此不直連。** 任意兩台 Leaf 溝通固定經過一台 Spine 中轉，路徑長度與延遲因此可預測。CCNA 只要求「認得它、知道存在」，細節屬 CCNP 資料中心方向。

## 關鍵面向
- **兩層**：Spine（脊、上層骨幹）＋ Leaf（葉、下層接伺服器）。
- **硬規則**：葉↔脊全連接；**葉↔葉不連、脊↔脊不連**（同層不互連）。
- **延遲可預測**：任意兩葉固定兩跳（經一台 Spine）。
- **像園區兩層架構但不同**：外觀像 [[campus-network-design]] 的 Collapsed Core（核心＋分佈合併），差在多了「同層不互連」這條嚴格規則、且用途是資料中心。
- **水平擴充**：加一台 Spine 就整體加頻寬，適合東西向（伺服器對伺服器）大流量。

## 應用場景
- **Simon 工作場景**：若公司機房走虛擬化/伺服器叢集、東西向流量大，脊葉式是業界標準解（任意伺服器互通固定跳數、頻寬好水平擴充）。CCNA 階段知道「資料中心不套園區三層、改用脊葉式」這個對照即可，導入屬 CCNP/資料中心專業。
- **一般場景**：CCNA 覺察級——認得拓撲、知道存在與硬規則即可。

## 相關概念
- [[campus-network-design]]：外觀像其兩層壓縮（Collapsed Core），但脊葉多了同層不互連規則
- [[network-topology]]：脊葉是網狀思維在資料中心的具體落地

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/5-spine-and-leaf-architecture|CCNA Section 6 Leaf 5 Spine-and-Leaf 脊葉式架構]]
