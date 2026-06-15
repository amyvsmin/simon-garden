---
title: "MAC 位址（Media Access Control Address）"
slug: mac-address
aliases: [MAC Address, MAC 位址, 媒體存取控制位址, 實體位址, 硬體位址]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
MAC 位址是燒在網卡上的硬體位址，在 [[data-link-layer]]（OSI L2）用來為相鄰節點定址。它理論上全球唯一、不像 IP 可隨意更改，但仍可用軟體偽改（如手機連 WiFi 用隨機 MAC 保護隱私）。長度為 48 bits（6 bytes），是封進 [[ethernet-frame]] 的來源與目標位址。

## 關鍵面向
- **長度**：48 bits＝6 bytes＝2⁴⁸ 個位址；因為長，慣用十六進位書寫。
- **三種表示法**：冒號分隔 `AA:BB:CC:DD:EE:FF`（Unix/Linux）、連字號分隔 `AA-BB-CC-DD-EE-FF`（Windows）、點分十六進位 `AABB.CCDD.EEFF`（Cisco 設備）。
- **兩部分結構**：前 3 bytes＝OUI（組織唯一識別碼，IEEE 分配給廠商）、後 3 bytes＝裝置識別碼（廠商自行給每台設備）。
- **可被偽改**：雖燒在網卡、理論不可改，但為隱私或安全可用軟體改寫。
- **誰有 MAC**：任何能連網的網卡（有線/無線/藍牙）、伺服器、路由器、交換器、防火牆都需要 MAC 當最基本身份。

## 應用場景
- **Simon 工作場景**：管交換器的日常——看 MAC 位址表定位某 MAC 接在哪個埠、查 OUI 認出設備廠商以排查不明設備接入；MAC 隨機化讓 BYOD 裝置追蹤變難。
- **一般場景**：CCNA/Network+/SSCP 的 L2 必考基礎，是交換、VLAN、MAC 表轉發的根基。

## 相關概念
- [[data-link-layer]]：MAC 位址運作的所在層（OSI L2）
- [[ethernet-frame]]：MAC 位址作為訊框的來源/目標欄位
- [[arp]]：已知 IP 求出 MAC，連接 L3 與 L2

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
