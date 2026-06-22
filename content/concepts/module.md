---
title: "模組（Module）"
slug: module
aliases: [Module, 模組, modules, 模塊, Python module]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

模組是「一個含有額外 function、variable、class 與任何可執行碼的 Python 檔」，可想成「存起來、裝有用功能的 Python 檔」。多個 module 組成一個 [[library]]。模組可大可小，目的都是省時、讓程式更好讀。要用某個 module 裡的功能，需先用 [[import-statement]] 匯入。常見如 `re`、`csv`、`os`、`glob`、`time`、`datetime`、`statistics`（都屬 [[python-standard-library]]）。

## 關鍵面向

- **單一 Python 檔**：內含 function、variable、class 與可執行碼
- **組成函式庫**：多個 module 組成一個 [[library]]
- **用前要匯入**：透過 [[import-statement]] 載入
- **標準庫常見 module**：`re`（找 pattern）、`csv`、`os`（作業系統／路徑操作）、`glob`（檔名比對）、`time`／`datetime`（時間戳）、`statistics`（mean／median）

## 應用場景

- Simon 工作場景：用 `re` 解析 log 的 pattern、`csv` 處理發票／報表、`datetime` 抓事件時間戳
- 一般場景：把功能拆成模組、跨程式複用

## 相關概念

- [[library]]：多個 module 的集合
- [[python-standard-library]]：隨 Python 附帶的 module 集合
- [[external-library]]：需另外下載的 library
- [[import-statement]]：載入 module 的語法

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/1-modules-and-libraries|Course 7 Module 2 Section 3 Leaf 1 Modules and libraries]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/2-import-modules-and-libraries-in-python|Course 7 Module 2 Section 3 Leaf 2 Import modules and libraries in Python]]
