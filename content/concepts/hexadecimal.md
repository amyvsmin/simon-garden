---
title: "十六進位（Hexadecimal）"
slug: hexadecimal
aliases: [Hexadecimal, 十六進位, 十六進制, hex, base 16, 0x]
category: 運算基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
基數（base）為 16 的計數系統，16 個數位為 **0–9 與 A–F**（A=10、B=11…F=15）。因為**每 4 位 [[binary]] 剛好對應 1 位十六進位**，能在不失真下把冗長的二進位大幅縮短，廣用於記憶體位址、機器碼、顏色編碼、[[mac-address]]、IPv6、數位憑證等。

## 關鍵面向
- **16 個數位**：0–9、A–F；前綴 `0x`（如 0x1A3）
- **4 bit ↔ 1 位**：FF ＝ 1111 1111 ＝十進位 255；緊湊好讀是最大優勢
- **⇄ 十進位**：十六轉十＝各位 × 16 的次冪相加（1A3 ＝ 256+160+3 ＝ 419）；十轉十六＝連除 16 取餘、倒序（餘 10–15 寫 A–F）
- **位值**：由右至左 16⁰、16¹、16²…（1、16、256…）
- **常見場景**：MAC 位址（00:1A:2B…）、IPv6、HTML 顏色碼、機器碼

## 應用場景
- **Simon 工作場景**：判讀 [[mac-address]]、IPv6 位址、看記憶體/機器碼 dump；資安分析常見十六進位 payload
- **一般場景**：CCNA（MAC/IPv6）、程式底層、逆向工程基礎

## 相關概念
- [[binary]]：每 4 位二進位對應 1 位十六進位
- [[mac-address]]：以十六進位表示
- [[bitwise-operation]]：底層仍是位元運算
- [[ip-address]]：IPv6 即以十六進位表示

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/2-number-systems-and-base-conversion|CCNA Section 4 Leaf 2 數字計數系統與進制轉換]]
