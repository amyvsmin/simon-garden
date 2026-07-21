---
title: "IP 位址（IP Address）"
slug: ip-address
aliases: [IP Address, IP 位址, IP 地址, 邏輯位址, logical address, 點分十進位, dotted-decimal notation]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
在網路上**唯一標識一台裝置的邏輯位址**，依 [[internet-protocol]] 的規則編制，確保封包能正確送達目標。[[ipv4]] 位址是 32 bit，實務寫成**點分十進位**（4 段、每段 8 bit、值 0–255，如 192.168.1.1）。與 L2 寫死的 [[mac-address]] 不同，IP 是「邏輯」可規劃、可變動的。

## 關鍵面向
- **32 bit → 點分十進位**：用 3 個點切成 4 個 byte，每段 8 bit 換 0–255（8 個 1 ＝ 255 是上限）；二進位寫法難讀，故配置一律用點分十進位
- **網路部分＋主機部分**：靠 [[subnet-mask]] 劃分（遮罩為 1 的位＝網路、0 的位＝主機）
- **分類與切分**：傳統用 [[classful-addressing]]（A–E 五類）切，現代用 [[cidr]]／[[vlsm]] 任意長度切
- **特殊用途**：含 [[private-ip-address]]（內網專用）、loopback（127/8）、[[apipa]]（169.254/16）等

## 應用場景
- **Simon 工作場景**：規劃公司內網網段、設定伺服器/裝置位址、排查連線（先確認 IP 與遮罩、是否同網段）；ISO 27001 網路架構圖與資產範圍都用 IP/網段描述
- **一般場景**：CCNA／Network+／SSCP 必背基礎，所有路由、ACL、子網計算的起點

## 相關概念
- [[internet-protocol]]：IP 位址依其規則編制
- [[ipv4]]：32 bit 版本的 IP 位址
- [[subnet-mask]]：把位址切成網路/主機部分
- [[mac-address]]：L2 實體位址，與 IP 邏輯位址對照
- [[classful-addressing]]、[[cidr]]：位址分類與無類別切分

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/1-ipv4-history|CCNA Section 4 Leaf 1 IPv4 歷史]]
