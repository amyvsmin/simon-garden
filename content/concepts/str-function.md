---
title: "str() 函式（String Function）"
slug: str-function
aliases: [str function, str() 函式, string function, str, 字串函式]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

str() 是把輸入物件轉成 [[string]]（字串）的 [[built-in-function]]。把整數或 float 轉成字串後，就能做「只有字串能做的事」——搜尋、切片、移除或重排其中的字元（這些對數值型別很難或無法做）。資安用途：把數字型的員工／裝置 ID 用 `str()` 轉成字串，之後才能對它搜尋與切片。

## 關鍵面向

- **轉成字串**：`str(123)` 得 `"123"`、`str(19329302)` 得字串員工 ID
- **轉後可處理**：轉成字串才能搜尋、切片、用字串方法
- **常與 [[type-function]] 搭配**：用 `type()` 確認轉換結果是字串

## 應用場景

- Simon 工作場景：把 log 裡數字型的 ID 轉成字串，以便比對與抽取片段
- 一般場景：資料型別轉換、輸出格式化

## 相關概念

- [[string]]：str() 的輸出型別
- [[len-function]]、[[type-function]]：常一起使用的內建函式
- [[built-in-function]]：str() 是內建函式
- [[data-type]]：型別轉換的對象

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/2-string-operations|Course 7 Module 3 Section 1 Leaf 2 String operations]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
