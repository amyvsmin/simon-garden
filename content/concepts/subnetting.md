---
title: "子網切分（Subnetting）"
slug: subnetting
aliases: [Subnetting, 子網切分, 子網劃分, 子網切割, 切子網, subnet calculation]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
把一個網段依需求切成多個小子網的計算，是 [[vlsm]] 的具體手算流程、CCNA 必考。兩條公式：**子網數 ＝ 2ⁿ**（n＝向主機位借的位數）、**每子網可用主機數 ＝ 2^(32−前綴長度) − 2**（−2 扣網路位址與廣播位址）。

## 關鍵面向
- **兩種出發點**：依「要幾個子網」（2ⁿ ≥ 需求 → 求借位 n）；依「每子網要幾個主機」（2ⁿ−2 ≥ 需求 → 求主機位 n、前綴 ＝ 32−n）
- **進位到 2 的次方**：要 5 或 6 個子網都取 8（n=3）；不是「奇數加一變偶數」
- **區塊大小（跨度）**：相鄰子網網路號的增量 ＝ **256 − 遮罩該段值**（/26→64、/19 在第 3 段→32）
- **每子網要素**：網路位址（首）、廣播位址（末）、可用主機範圍（中間）
- **逆操作**：[[route-summarization]] 地址聚合（把多個子網併回一個）

## 應用場景
- **Simon 工作場景**：規劃公司內網——某部門 50 台 → /26（62 可用）、小網段 /28；子網邊界即天然的 VLAN/ACL/資產分區界線
- **一般場景**：CCNA 計算題核心；後續 OSPF/EIGRP 路由匯總直接沿用

## 相關概念
- [[vlsm]]：子網切分是其手算實現
- [[subnet-mask]]：切分就是調整遮罩長度
- [[cidr]]：/n 前綴與無類別切分
- [[route-summarization]]：方向相反的聚合
- [[binary]]：手算子網靠二進位 ⇄ 十進位

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/5-subnetting-and-aggregation-calculation|CCNA Section 4 Leaf 5 子網切分與聚合計算]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/4-vlsm-and-cidr|CCNA Section 4 Leaf 4 VLSM 與 CIDR]]
