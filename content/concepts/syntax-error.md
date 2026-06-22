---
title: "語法錯誤（Syntax Error）"
slug: syntax-error
aliases: [Syntax error, 語法錯誤, syntax error, syntax errors, SyntaxError]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

語法錯誤是「違反 Python 語言規則的用法」，在 Python 非常常見，所以注意正確 [[python-syntax]] 是讓程式跑得起來的關鍵。常見來源有兩類：(1) **資料型別的寫法（字面值語法）**——字串要加引號、整數／float／Boolean 不加引號、list 要用方括號且元素以逗號分隔；(2) **header 漏冒號**——[[conditional-statement]]、[[iterative-statement]]、函式定義的 header 結尾必須加冒號 `:`。注意：這裡指的是「型別字面值寫錯」會造成 SyntaxError；「型別不相容」（如字串 + 數字）則是執行期的 [[type-error]]、不算語法錯誤。熟悉常見錯誤類型有助於更快定位與修正。

## 關鍵面向

- **違反語言規則**：程式無法被正確解讀
- **常見來源一：字面值寫法**：引號用錯（字串漏引號、數值多引號）、list 沒用方括號或逗號（型別不相容是執行期 TypeError、不在此列）
- **常見來源二：header 漏冒號**：條件式／迴圈／函式定義 header 結尾要 `:`
- **debug 第一關**：先檢查這兩類最常見的錯誤

## 應用場景

- Simon 工作場景：腳本跑不動時，先掃漏冒號、漏引號這兩類最常見的語法錯誤
- 一般場景：撰寫與除錯 Python 的基本檢查

## 相關概念

- [[python-syntax]]：語法錯誤即違反語法規則
- [[type-error]]：另一類常見錯誤（型別不相容，屬執行期）
- [[indentation]]：縮排錯誤也是常見語法問題
- [[conditional-statement]]、[[iterative-statement]]：其 header 漏冒號是常見來源

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
