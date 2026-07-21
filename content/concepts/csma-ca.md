---
title: "CSMA/CA 載波偵聽多重存取／碰撞避免（Carrier Sense Multiple Access with Collision Avoidance）"
slug: csma-ca
aliases: [CSMA/CA, Carrier Sense Multiple Access with Collision Avoidance, 載波偵聽多重存取碰撞避免, 碰撞避免]
category: 網路基礎
confidence: 已驗證
created: 2026-06-15
---

## 定義
CSMA/CA 是 WiFi 無線（802.11）在 [[data-link-layer]] MAC 子層採用的介質存取控制方法。因為無線環境很難偵測碰撞，它的重點是事先避免碰撞，而非像 [[csma-cd]] 那樣事後偵測再處理。兩者僅一字之差，但策略相反。

## 關鍵面向
- **為何用避免**：無線收發訊號強弱差異大、難以偵測碰撞，只能事前降低撞機率。
- **DIFS 等待**：偵聽到空閒後不直接發，先用 DIFS（DCF Inter-Frame Space）再等一小段，確保通道持續閒置。
- **隨機退避計時器**：每台設備設不同隨機等待，降低多台同時偵測到空閒後又撞在一起。
- **RTS/CTS 握手**：可選的「請求傳送／清除傳送」握手，進一步避撞。
- **ACK 確認**：接收方收到後回 ACK；發送方在時限內沒收到 ACK 即判定碰撞、進入重傳。

## 應用場景
- **Simon 工作場景**：管理公司無線存取點（WAP）與 WiFi 時，理解 CSMA/CA 機制有助於判讀無線通道壅塞、隱藏節點問題與重傳偏高的成因。
- **一般場景**：CCNA Network Access 模組考點，需能與 CSMA/CD 對比說出環境（無線 vs 有線）與「避免 vs 偵測」策略差異；Network+ 同樣涵蓋。

## 相關概念
- [[csma-cd]]：有線乙太網路對應方法，事後偵測碰撞再退避。
- [[data-link-layer]]：CSMA/CA 所屬的 MAC 子層層級。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
