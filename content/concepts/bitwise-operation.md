---
title: "位元運算（Bitwise Operation）"
slug: bitwise-operation
aliases: [Bitwise Operation, 位元運算, 邏輯運算, AND, OR, NOT, XOR, 與或非異或, bitwise]
category: 運算基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
對 [[binary]] 數值**逐位元**做邏輯運算（AND/OR/NOT/XOR），1＝真、0＝假。網路學習裡用最多的是 **AND**——用 [[subnet-mask]] 或萬用字元（wildcard）比對、取出 [[ip-address]] 的網路部分時就靠它。

## 關鍵面向
- **AND（與）**：全 1 才 1、有 0 即 0（1·1=1、其餘 0）；取網路位址用它
- **OR（或）**：見 1 為 1、全 0 為 0
- **NOT（非）**：取反（1→0、0→1）
- **XOR（異或）**：相異為 1、相同為 0
- **AND ≠ 乘法**：對單一 bit 而言 AND 結果剛好等於相乘，但**不可把整個十進位數相乘**，必須轉二進位逐位元做

## 應用場景
- **Simon 工作場景**：理解 [[subnet-mask]] 怎麼 AND 出網路位址、ACL 的 wildcard 比對；判讀封包旗標位元
- **一般場景**：CCNA 子網計算的底層原理；程式、加密、雜湊皆用位元運算

## 相關概念
- [[binary]]：位元運算的對象
- [[subnet-mask]]：用 AND 取網路位址
- [[hexadecimal]]：底層同樣是位元
- [[ip-address]]：AND 遮罩後得其網路部分

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/2-number-systems-and-base-conversion|CCNA Section 4 Leaf 2 數字計數系統與進制轉換]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
