---
title: "CIDR 無類別域間路由（Classless Inter-Domain Routing）"
slug: cidr
aliases: [CIDR, Classless Inter-Domain Routing, 無類別域間路由, 無類別定址, 前綴長度, prefix length]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
IETF 於 1993 年（RFC 1519，CIDR 系列含 1518/1519）提出的位址分配與路由方法，用 **`/n` 前綴長度**表示 [[subnet-mask]]，並**打破 A/B/C 類邊界**。與 [[vlsm]] 的關鍵差異：CIDR 遮罩**既能往右延長（切更多子網）、也能往左縮短（[[route-summarization]] 地址聚合）**，是 VLSM 的更廣義延伸與升級。

## 關鍵面向
- **/n 前綴表示法**：`/24` ＝ 遮罩前 24 位為 1（255.255.255.0）；比點分十進位好讀好寫
- **打破類別**：可把 C 類位址 192.168.0.0 寫成 /16（B 類遮罩）或 /27，不再受 A/B/C 限制
- **vs VLSM**：VLSM 只能延長、切完仍在原類別內；CIDR 可延長可縮短、無類別
- **地址聚合（往左縮短）**：把連續網段併成大網段（4 個 /24 → 1 個 /22），縮小路由表
- **任意大小位址塊**：IANA→RIR→ISP 各層用 CIDR 切出剛好夠用的塊

## 應用場景
- **Simon 工作場景**：看路由/防火牆設定時的 /n 寫法、路由匯總；公司公網位址塊就是 ISP 用 CIDR 切給的
- **一般場景**：CCNA／Network+ 核心，路由協定（OSPF/EIGRP/BGP）的匯總全靠 CIDR

## 相關概念
- [[subnet-mask]]：CIDR 用 /n 表示遮罩
- [[vlsm]]：CIDR 是其更廣義的延伸
- [[route-summarization]]：CIDR 往左縮短遮罩的應用
- [[classful-addressing]]：被 CIDR 取代的有類別法
- [[subnetting]]：往右延長遮罩切子網

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/4-vlsm-and-cidr|CCNA Section 4 Leaf 4 VLSM 與 CIDR]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/5-subnetting-and-aggregation-calculation|CCNA Section 4 Leaf 5 子網切分與聚合計算]]
