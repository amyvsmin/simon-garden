---
title: "len() 函式（Length Function）"
slug: len-function
aliases: [len function, len() 函式, length function, len, 長度函式]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

len() 是回傳物件「元素數量」的 [[built-in-function]]；用在 [[string]] 上就是字元數。資安用途：驗證長度——例如 IPv4 位址最多 15 字元（長度 > 15 即無效）、裝置 ID 是否剛好 N 個字元，常配 [[conditional-statement]] 做檢查。

## 關鍵面向

- **回傳元素數量**：用在字串＝字元數，用在 [[list]]＝元素數
- **配條件式驗長度**：`if len("h32rb17") == 7:` 驗裝置 ID
- **巢狀於 print**：`print(len("Hello"))` 先算長度再印（得 5）

## 應用場景

- Simon 工作場景：驗證 IP、帳號、裝置 ID 是否符合長度規則
- 一般場景：輸入驗證、資料品質檢查

## 相關概念

- [[string]]、[[list]]：len() 常作用的對象
- [[str-function]]、[[built-in-function]]：相關內建函式
- [[conditional-statement]]：len() 常與條件式搭配做驗證

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/2-string-operations|Course 7 Module 3 Section 1 Leaf 2 String operations]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
