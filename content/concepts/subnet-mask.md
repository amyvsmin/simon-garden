---
title: "子網路遮罩（Subnet Mask）"
slug: subnet-mask
aliases: [Subnet Mask, 子網路遮罩, 子網掩碼, 網路掩碼, netmask, network mask, 掩碼]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
一串「**以連續 1 開頭、其餘為 0**」的 32 bit，用來把 [[ip-address]] 切成**網路部分（遮罩為 1 的位）＋主機部分（遮罩為 0 的位）**。把 IP 位址與遮罩做**逐位元 AND（[[bitwise-operation]]）**即取出網路位址。

## 關鍵面向
- **AND 取網路位址**：IP AND 遮罩——遮罩為 1 的位保留原值（網路），為 0 的位歸零（主機）。⚠️ 是逐位元邏輯運算、**不是把十進位數相乘**
- **格式硬規定**：必須連續 1 開頭，一旦出現 0 就全為 0 到底，不能 1/0 交錯
- **三種寫法**：二進位、點分十進位（255.255.255.0）、[[cidr]] 前綴（/24）
- **可用主機數**：2^(主機位數) − 2（扣網路位址與廣播位址）
- **延伸**：往右延長遮罩＝[[subnetting]]／[[vlsm]]，往左縮短＝[[route-summarization]]

## 應用場景
- **Simon 工作場景**：判斷兩台主機是否同網段、設裝置 IP/閘道、規劃部門子網大小；遮罩錯了會導致「設了 IP 卻不通」
- **一般場景**：CCNA／Network+ 子網計算的核心，每道子網題都圍繞遮罩

## 相關概念
- [[ip-address]]：被遮罩切成網路/主機部分
- [[bitwise-operation]]：AND 是取網路位址的運算
- [[cidr]]：/n 前綴長度表示遮罩
- [[subnetting]]、[[vlsm]]：延長遮罩切子網
- [[classful-addressing]]：A/B/C 各有預設遮罩

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/5-subnetting-and-aggregation-calculation|CCNA Section 4 Leaf 5 子網切分與聚合計算]]
