---
title: "二進位（Binary）"
slug: binary
aliases: [Binary, 二進位, 二進制, 二進位數, base 2, binary number]
category: 運算基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
基數（base）為 2 的計數系統，只有 **0 和 1** 兩個數位，直接對應電腦元件的**高/低電平兩種狀態**，是電腦內部儲存與運算的根本。優點是硬體對應直接、易檢錯；缺點是位數冗長、人難讀（故常用 [[hexadecimal]] 縮短）。

## 關鍵面向
- **兩個數位**：0、1；位值由右至左為 2⁰、2¹、2²…（1、2、4、8、16、32、64、128）
- **⇄ 十進位**：二轉十＝各位 × 位值相加（1010＝8+2＝10）；十轉二＝連除 2 取餘、倒序排列
- **8 位一組（byte）**：8 個 1 ＝ 255，是 [[ip-address]] 每段的上限；網路必背 128/64/32/16/8/4/2/1
- **位元運算**：[[bitwise-operation]]（AND/OR/NOT/XOR）逐位元處理
- **為何用**：電腦元件只辨識兩種電平狀態，1/0 恰好對應

## 應用場景
- **Simon 工作場景**：手算子網（[[subnetting]]）、看 [[subnet-mask]] AND 取網路位址、判讀封包旗標都要把數字攤成二進位
- **一般場景**：CCNA 子網計算的底層能力；資安、程式底層皆用

## 相關概念
- [[hexadecimal]]：每 4 位二進位對應 1 位十六進位、用來縮短表示
- [[bitwise-operation]]：對二進位逐位元做邏輯運算
- [[subnet-mask]]、[[subnetting]]：靠二進位 ⇄ 十進位手算
- [[ip-address]]：32 bit 二進位寫成點分十進位

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/2-number-systems-and-base-conversion|CCNA Section 4 Leaf 2 數字計數系統與進制轉換]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
