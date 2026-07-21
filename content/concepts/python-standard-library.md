---
title: "Python 標準函式庫（Python Standard Library）"
slug: python-standard-library
aliases: [Python Standard Library, Python 標準函式庫, standard library, 標準庫, 標準函式庫]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

Python 標準函式庫是「通常隨 Python 一起打包的大量 Python 程式碼集合」，包含多個各自圍繞某類任務的 [[module]]。對資安分析師特別有用的有：`re`（在 log 檔搜尋 pattern）、`csv`（處理 CSV 檔）、`os`（作業系統／路徑操作）、`glob`（檔名比對）、`time`／`datetime`（處理時間戳）、`statistics`（`mean()` 算平均、`median()` 算中位數）。用其中任一 module 需先用 [[import-statement]] 匯入。跟 [[external-library]] 相對——標準庫內附、外部庫要另外下載安裝。

## 關鍵面向

- **隨 Python 附帶**：不必額外安裝
- **常見 module**：`re`、`csv`、`os`／`glob`、`time`／`datetime`、`statistics`
- **用前要 [[import-statement]]**：`import statistics` 後用 `statistics.mean()`
- **與外部庫的差別**：標準庫內附、[[external-library]] 需先安裝

## 應用場景

- Simon 工作場景：`re` 比對 log pattern、`statistics` 算每月失敗登入的平均與中位數（離群值多時 median 更代表常態）
- 一般場景：大量常見任務不必自己寫、直接用標準庫

## 相關概念

- [[module]]：標準庫由眾多 module 組成
- [[library]]：標準庫是 library 的一種
- [[external-library]]：相對的另一種（需下載）
- [[import-statement]]：取用標準庫 module 的語法

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/1-modules-and-libraries|Course 7 Module 2 Section 3 Leaf 1 Modules and libraries]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/2-import-modules-and-libraries-in-python|Course 7 Module 2 Section 3 Leaf 2 Import modules and libraries in Python]]
