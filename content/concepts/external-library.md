---
title: "外部函式庫（External Library）"
slug: external-library
aliases: [External library, 外部函式庫, external library, 第三方函式庫, 外部庫, 外部程式庫]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

外部函式庫是「[[python-standard-library]] 以外、可另外下載並併入自己 Python 程式的 library」。例子：Beautiful Soup（`bs4`，解析 HTML 網頁檔）、NumPy（`numpy`，陣列與數學運算）。對資安分析師的用途包含網路流量分析、log 檔解析、複雜數學運算。在 Jupyter Notebook／Google Colab 使用前要**先安裝**（如 `%pip install numpy`）、再用 [[import-statement]] 匯入。跟標準函式庫相對——標準庫內附、外部庫需另外取得。

## 關鍵面向

- **需另外下載安裝**：`%pip install numpy` 後才能用
- **常見例子**：Beautiful Soup（HTML 解析）、NumPy（數學運算）
- **裝完用 import 匯入**：語法跟匯入標準庫 module 相同
- **與標準庫的差別**：標準庫隨 Python 附帶、外部庫需先安裝

## 應用場景

- Simon 工作場景：用 Beautiful Soup 解析網頁、NumPy 做批次數學；對應網路流量分析與 log 解析
- 一般場景：借社群現成套件快速擴充能力

## 相關概念

- [[python-standard-library]]：相對的內附 library
- [[library]]：外部庫是 library 的一種
- [[module]]：library 由 module 組成
- [[import-statement]]：安裝後用它匯入

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/1-modules-and-libraries|Course 7 Module 2 Section 3 Leaf 1 Modules and libraries]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/2-import-modules-and-libraries-in-python|Course 7 Module 2 Section 3 Leaf 2 Import modules and libraries in Python]]
