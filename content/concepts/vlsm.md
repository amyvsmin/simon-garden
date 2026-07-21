---
title: "VLSM 可變長子網遮罩（Variable Length Subnet Mask）"
slug: vlsm
aliases: [VLSM, Variable Length Subnet Mask, 可變長子網遮罩, 可變長子網掩碼, 變長子網]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
一種靈活的子網切分方式（源於 RFC 950 子網切割），**把原本表示主機的位「借」過來當子網位（網路位）**，用不同長度的 [[subnet-mask]] 在同一個網段裡切出大小不一的子網，更有效利用位址空間。關鍵限制：VLSM **只能把標準遮罩往右延長、不能往左縮短**，切完的網段本質上仍在原 A/B/C 類範疇內（這也是它叫「可變長子網遮罩」、而非無類別的原因）。

## 關鍵面向
- **借位切子網**：遮罩 /x 往右加 n 位變 /(x+n)，被借的主機位變子網位；**子網數 ＝ 2ⁿ**
- **每子網主機數**：2^(剩餘主機位) − 2（扣網路位址與廣播位址）
- **只能延長**：與 [[cidr]] 對比——VLSM 不能往左縮短聚合、不能打破類別
- **逐層分配的工具**：IANA→RIR→NIR→ISP 每層都用 VLSM 把大塊切細往下發
- **範例**：192.168.1.0/24 借 2 位 → /26 → 4 個子網（.0/.64/.128/.192）、各 62 主機

## 應用場景
- **Simon 工作場景**：把一個 /24 依部門需求切成 /26、/27 等大小不一的子網，省位址又便於 ACL/VLAN 隔離
- **一般場景**：CCNA 必考，子網切分計算（[[subnetting]]）的核心方法

## 相關概念
- [[subnet-mask]]：VLSM 改變的就是遮罩長度
- [[subnetting]]：VLSM 的具體手算流程
- [[cidr]]：VLSM 的更廣義延伸（可縮短、無類別）
- [[classful-addressing]]：VLSM 切完仍在其類別內
- [[route-summarization]]：方向相反的聚合操作

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/4-vlsm-and-cidr|CCNA Section 4 Leaf 4 VLSM 與 CIDR]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/5-subnetting-and-aggregation-calculation|CCNA Section 4 Leaf 5 子網切分與聚合計算]]
