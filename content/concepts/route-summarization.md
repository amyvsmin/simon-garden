---
title: "地址聚合／路由匯總（Route Summarization）"
slug: route-summarization
aliases: [Route Summarization, 路由匯總, 地址聚合, 位址聚合, address aggregation, route aggregation, supernetting, 超網]
category: 資安
confidence: 已驗證
created: 2026-06-28
---

## 定義
[[cidr]] 把遮罩往左縮短的應用——**把多個連續網段合併成一個更大的網段**，用一條路由條目取代多條，顯著縮小路由表、提升路由效率。是 [[subnetting]] 子網切分的逆操作。

## 關鍵面向
- **四步驟**：① 確認要聚合的子網（**必須連續**）② 各網段轉二進位 ③ 找公共前綴（前面相同的位）④ 公共前綴長度 ＝ 新遮罩位數
- **範例**：192.168.0.0/24、1.0/24、2.0/24、3.0/24（前 22 位相同）→ 聚合為 192.168.0.0/22（涵蓋 .0.0–.3.255）
- **連續是前提**：不連續的網段不能聚合成一個乾淨的前綴
- **目的**：縮小路由表——對骨幹路由器尤其關鍵（要處理海量路由條目）
- **別名**：supernetting（超網），與 subnetting 方向相反

## 應用場景
- **Simon 工作場景**：核心路由/防火牆上把多個分公司連續網段匯總成一條，路由表乾淨好維護、排錯快
- **一般場景**：CCNA 必考；OSPF/EIGRP/BGP 的路由匯總直接用這套

## 相關概念
- [[cidr]]：地址聚合是其往左縮短的應用
- [[subnetting]]：方向相反的操作
- [[subnet-mask]]：聚合就是縮短遮罩、取公共前綴
- [[vlsm]]：切分工具，聚合是其逆向

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/5-subnetting-and-aggregation-calculation|CCNA Section 4 Leaf 5 子網切分與聚合計算]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/4-vlsm-and-cidr|CCNA Section 4 Leaf 4 VLSM 與 CIDR]]
