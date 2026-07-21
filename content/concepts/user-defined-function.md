---
title: "使用者自訂函式（User-defined Function）"
slug: user-defined-function
aliases: [User-defined function, 使用者自訂函式, user defined function, 自訂函式, 使用者定義函式]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

使用者自訂函式是「程式設計師為自身特定需求設計的函式」，用 `def` 關鍵字定義。跟 [[built-in-function]]（Python 出廠就有、可直接呼叫）相對：自訂函式是自己造的。兩者都像「大程式裡的小程式」，讓 Python 工作更有效率。定義語法：`def 函式名(parameter):`，header 結尾加冒號、下一行縮排寫 body；可帶 [[parameter]] 接收輸入、用 [[return-statement]] 回傳輸出。

## 關鍵面向

- **`def` 定義語法**：`def 函式名():` header 結尾冒號、body 縮排；定義後才能呼叫
- **帶輸入與輸出**：括號內放 [[parameter]] 收外部資訊、body 內用 [[return-statement]] 送結果回呼叫處
- **模組化好處**：邏輯集中在函式一處，改一次所有呼叫處同步生效

## 應用場景

- Simon 工作場景：把公司重複性的 IT 判斷（登入比對、清單檢查）寫成自訂函式，未來改規則只動一處
- 一般場景：封裝自家業務邏輯成可複用工具

## 相關概念

- [[function]]：自訂函式是函式的一種
- [[built-in-function]]：相對的另一類（Python 內建）
- [[parameter]]、[[return-statement]]：自訂函式接收輸入與回傳輸出的機制

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-1-introduction-to-functions/2-introduction-to-functions|Course 7 Module 2 Section 1 Leaf 2 Introduction to functions]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-1-introduction-to-functions/3-create-a-basic-function|Course 7 Module 2 Section 1 Leaf 3 Create a basic function]]
