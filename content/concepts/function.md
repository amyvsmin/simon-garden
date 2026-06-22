---
title: "函式（Function）"
slug: function
aliases: [Function, 函式, functions, 函數]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

函式是「可在程式中重複使用的一段程式碼」。隨著程式變複雜，會一再重打同樣的碼；函式把一組指令打包成可重複呼叫的單位，省時又讓程式更好讀。分兩類：[[built-in-function]]（Python 內建、可直接呼叫，如 `print()`）與 [[user-defined-function]]（用 `def` 自己定義）。兩者都像「大程式裡的小程式」。另一個好處：要改邏輯時只改函式本身一處，所有呼叫它的地方同步生效。

## 關鍵面向

- **定義與呼叫**：自訂函式用 `def 函式名():` 開頭（header 結尾冒號、body 縮排）；呼叫用 `函式名()`，可在程式任何位置、呼叫任意次
- **兩類**：[[built-in-function]]（出廠就有）與 [[user-defined-function]]（自己造）
- **輸入與輸出**：可帶 [[parameter]] 接收外部資訊（呼叫時傳 [[argument]]），用 [[return-statement]] 把結果送回
- **模組化好處**：改一處全生效，勝過在程式各處重複改同樣的內容

## 應用場景

- Simon 工作場景：把「判斷一筆登入是否可疑」寫成函式重複套用到每個帳號，要改規則只改函式一處
- 一般場景：把重複任務封裝成可複用單位，是寫可維護自動化腳本的基本功

## 相關概念

- [[built-in-function]]、[[user-defined-function]]：函式的兩大分類
- [[parameter]]、[[argument]]：函式接收輸入的機制
- [[return-statement]]：函式送回輸出的機制

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-1-introduction-to-functions/2-introduction-to-functions|Course 7 Module 2 Section 1 Leaf 2 Introduction to functions]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-1-introduction-to-functions/3-create-a-basic-function|Course 7 Module 2 Section 1 Leaf 3 Create a basic function]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-1-introduction-to-functions/4-python-functions-in-cybersecurity|Course 7 Module 2 Section 1 Leaf 4 Python functions in cybersecurity]]
