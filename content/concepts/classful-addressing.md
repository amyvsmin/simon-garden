---
title: "有類別定址（Classful Addressing）"
slug: classful-addressing
aliases: [Classful Addressing, 有類別定址, 有類別位址, 分類定址, A 類, B 類, C 類, D 類, E 類, IP address class]
category: 資安
confidence: 已驗證
created: 2026-06-28
---

## 定義
IETF 早期依**位址開頭固定的位元**把 [[ipv4]] 切成五大類（A–E）的傳統分類法。A（0 開頭）、B（10）、C（110）用於一般主機定址，D（1110）作多播，E（1111）保留。每類有固定的預設 [[subnet-mask]]、網路數與每網段主機數。後被 [[cidr]] 的無類別切分取代。

## 關鍵面向
- **開頭位元定類別**：A=`0xxxxxxx`、B=`10xxxxxx`、C=`110xxxxx`、D=`1110`、E=`1111`；看第一段十進位即可判：1–126 A、128–191 B、192–223 C、224–239 D、240–255 E
- **預設遮罩**：A=/8（255.0.0.0）、B=/16（255.255.0.0）、C=/24（255.255.255.0）
- **網路數 vs 主機數（A→C 一增一減）**：A 可用 126 網路（首位固定 0、實為 7 網路位、扣 0/127）、每網段 2²⁴−2 主機；B 16,384 網路、65,534 主機；C 2²¹ 網路、254 主機
- **−2 規則**：每網段首位址＝網路位址、末位址＝廣播位址，不可配主機
- **僵硬→被取代**：只有 /8、/16、/24 三種顆粒、浪費大，催生 [[vlsm]]／[[cidr]]

## 應用場景
- **Simon 工作場景**：快速判斷一個 IP 屬哪類、預設遮罩多少；內網私有網段（10/172.16/192.168）正對應 A/B/C 私有段
- **一般場景**：CCNA 必考，A–E 範圍與預設遮罩是基礎送分題

## 相關概念
- [[ipv4]]：被分成 A–E 五類
- [[subnet-mask]]：各類有預設遮罩
- [[cidr]]：打破類別的無類別替代
- [[private-ip-address]]：各類中保留作私有的網段
- [[ip-address]]：分類的對象

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
