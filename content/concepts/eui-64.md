---
title: "EUI-64（Extended Unique Identifier-64）"
slug: eui-64
aliases: [EUI-64, EUI64, Extended Unique Identifier, 擴充唯一識別碼, 修改型 EUI-64, Modified EUI-64]
category: 網路基礎
confidence: 已驗證
created: 2026-07-03
---

## 定義
一種**用 48 位 [[mac-address]] 自動推導出 64 位 IPv6 介面 ID** 的機制：在 MAC 正中間插入 `FFFE`、再翻轉第 7 位（U/L bit）。好處是省去手填介面 ID、天然不撞號；缺點是生成的位址難記、可讀性差。

## 關鍵面向
- **三步驟**：①取 48 位 MAC；②在正中間（OUI 與設備識別符之間）插入 `FFFE`（16 位）湊成 64 位；③翻轉第 7 位（U/L bit）0↔1
- **MAC 拆分**：前 24 位＝OUI 組織識別碼、後 24 位＝設備識別符，`FFFE` 插在兩者之間
- **算例**：MAC `AA:BB:CC:00:09:00` → 插 FFFE → `AABB:CCFF:FE00:0900` → `AA`(1010 1010) 翻第 7 位成 `A8`(1010 1000) → 介面 ID `A8BB:CCFF:FE00:0900`
- **特徵辨識**：位址中段出現 `FF:FE` 即 EUI-64 生成
- **優缺點**：不衝突（介面 ID 空間 2⁶⁴、手動易撞）／難記（需登記進文件、拓撲圖）

## 應用場景
- **Simon 工作場景**：在 Cisco 設備啟用 IPv6 時 `ipv6 address ... eui-64` 最省事、不必逐台手算介面 ID；但要把生成位址登記進網路文件方便排錯
- **一般場景**：CCNA 幾乎必考一題「給 MAC 求介面 ID」的 EUI-64 手算；SLAAC 生成位址的核心步驟

## 相關概念
- [[mac-address]]：EUI-64 的輸入來源
- [[ipv6]]：EUI-64 生成 IPv6 介面 ID
- [[slaac]]：SLAAC 常用 EUI-64 生成介面 ID
- [[link-local-address]]：LLA 介面 ID 由 EUI-64 自動生成
- [[global-unicast-address]]：可用 EUI-64 補齊 GUA 介面 ID

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/4-configuring-ipv6-on-cisco|CCNA Section 5 Leaf 4 在 Cisco 設定 IPv6]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/5-configuring-ipv6-on-cisco-router-lab|CCNA Section 5 Leaf 5 IPv6 路由器實驗]]
