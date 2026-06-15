---
title: "CSMA/CD 載波偵聽多重存取／碰撞偵測（Carrier Sense Multiple Access with Collision Detection）"
slug: csma-cd
aliases: [CSMA/CD, Carrier Sense Multiple Access with Collision Detection, 載波偵聽多重存取碰撞偵測, 碰撞偵測]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
CSMA/CD 是有線乙太網路在 [[data-link-layer]] MAC 子層採用的介質存取控制方法，讓多台設備共享同一介質時更有效發送、並在偵測到碰撞時妥善處理。名字三段：CS 載波偵聽＋MA 多重存取＋CD 碰撞偵測。它與無線用的 [[csma-ca]] 一字之差，作用在同一個 [[collision-domain]] 內。

## 關鍵面向
- **載波偵聽（CS）**：發送前先偵聽介質是否空閒。
- **多重存取（MA）**：多台設備共享同一傳輸介質。
- **碰撞偵測（CD）**：空閒就發送並邊送邊監聽，偵測到碰撞後處理。
- **流程**：偵聽空閒 → 傳送邊聽 → 偵測碰撞發 Jamming 干擾訊號 → 只有參與碰撞的設備跑 Backoff 退避（各取不同等待時間）→ 回到偵聽、重複至成功。
- **現代已罕用**：它是 Hub／半雙工時代產物；現今交換器埠多為全雙工、收發各走一對線、不會碰撞，CSMA/CD 形同關閉。

## 應用場景
- **Simon 工作場景**：理解為何全雙工交換網路不再需要 CSMA/CD，是判讀介面雙工設定與 late collision 異常的背景知識；遇到 duplex mismatch 時碰撞行為會回到半雙工邏輯。
- **一般場景**：CCNA Network Access 模組考點，需能與 CSMA/CA 對比說出環境（有線 vs 無線）與策略差異；Network+ 同樣涵蓋。

## 相關概念
- [[csma-ca]]：無線（WiFi）對應方法，重點是事先避免而非事後偵測。
- [[collision-domain]]：CSMA/CD 所處理碰撞的範圍。
- [[ethernet-frame]]：CSMA/CD 規範下傳輸的資料單位。
- [[data-link-layer]]：CSMA/CD 所屬的 MAC 子層層級。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
