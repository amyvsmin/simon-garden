---
title: "函式庫（Library）"
slug: library
aliases: [Library, 函式庫, libraries, 程式庫, 函數庫, Python library]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

函式庫是「一組 module 的集合，提供使用者可在自己程式裡取用的程式碼」。要用 [[built-in-function]] 以外的現成功能，就 import 一個 library。所有 library 一般由數個 [[module]] 組成。分兩種：[[python-standard-library]]（通常隨 Python 一起打包）與 [[external-library]]（需另外下載安裝，如 Beautiful Soup、NumPy）。函式庫的價值在於提供現成的 function 與 variable、省下使用者的時間。

## 關鍵面向

- **多個 module 的集合**：library 由數個 [[module]] 組成
- **兩種來源**：[[python-standard-library]]（內附）與 [[external-library]]（外部下載）
- **用 [[import-statement]] 取用**：匯入後才能用裡面的功能
- **外部庫需先安裝**：如 `%pip install numpy` 後才能 import

## 應用場景

- Simon 工作場景：用標準庫處理 log／CSV／時間戳，用外部庫做 HTML 解析（Beautiful Soup）或數學運算（NumPy）
- 一般場景：站在現成程式碼上、不重造輪子

## 相關概念

- [[module]]：library 的組成單位
- [[python-standard-library]]：隨 Python 附帶的 library
- [[external-library]]：需另外下載的 library
- [[import-statement]]：取用 library／module 的語法

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/1-modules-and-libraries|Course 7 Module 2 Section 3 Leaf 1 Modules and libraries]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/2-import-modules-and-libraries-in-python|Course 7 Module 2 Section 3 Leaf 2 Import modules and libraries in Python]]
