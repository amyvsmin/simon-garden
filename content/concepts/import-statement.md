---
title: "import 陳述（Import Statement）"
slug: import-statement
aliases: [Import statement, import 陳述, import, from import, 匯入陳述, import keyword]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

import 陳述是把 [[module]] 或 [[library]] 在系統中找到、載入當前 Python 環境，以便使用其函式的語法。兩種寫法：(1) **import 整個 module**——`import statistics`，此後呼叫函式必須加 module 名前綴（`statistics.mean()`）；(2) **from … import 特定函式**——`from statistics import mean, median`，此後呼叫不必加前綴（直接 `mean()`）。多個函式以逗號分隔。[[external-library]] 要先安裝（如 `%pip install`）再 import。

## 關鍵面向

- **import 整個 module**：呼叫要加前綴 `模組.函式()`
- **from … import 特定函式**：呼叫不加前綴、直接 `函式()`；多函式逗號分隔
- **外部庫先安裝再 import**：`%pip install` 後才能匯入
- **語法一致**：匯入標準庫與外部庫用法相同

## 應用場景

- Simon 工作場景：`import statistics` 算登入失敗的平均／中位數、`import re` 解析 log pattern
- 一般場景：把標準庫與外部庫的能力接進自己的腳本

## 相關概念

- [[module]]：import 的對象之一
- [[library]]：import 的對象之一
- [[python-standard-library]]：常用 import 來源
- [[external-library]]：需先安裝再 import

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/2-import-modules-and-libraries-in-python|Course 7 Module 2 Section 3 Leaf 2 Import modules and libraries in Python]]
