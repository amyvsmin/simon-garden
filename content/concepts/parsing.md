---
title: "解析（Parsing）"
slug: parsing
aliases: [Parsing, 解析, parse, 剖析, 解析檔案]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

解析（parsing）是「把資料轉換成更易讀（更好處理）格式的過程」。資安分析師常面對又長又難判讀的 [[log]]，把整塊文字切成有結構的單位（例如每行一筆、或拆成 username／IP／timestamp 欄位），才能用 [[python]] 自動分析。兩個目的：(1) 轉成 Python 特定處理所需的格式、(2) 讓寫程式的人更容易讀懂結果。主力方法是 [[split-method]]（字串→清單）與 [[join-method]]（清單→字串）。

## 關鍵面向

- **兩個目的**：給程式處理用的格式、給人讀的可讀性
- **四個步驟，順序不能跳**：①認清輸入格式（純文字 log、CSV、JSON）→ ②切出紀錄邊界（一筆是一行、還是一個物件）→ ③在每筆紀錄裡切欄位 → ④處理異常（空行、欄位數不對、編碼錯）。最常見的錯是跳過第 ②步，直接對整塊文字切欄位
- **紀錄邊界的例子**：課程範例的 log 每行只有一個 username，`.split()` 剛好切成每行一筆。一行有「帳號 IP」兩欄時就不行，`.split()` 會把兩行四個字切成四個平行元素；要先 `.splitlines()` 按行、再逐行 `.split()`，限制與範例見 [[split-method]]
- **欄位的例子**：CSV 若有欄位值含逗號（`"Smith, A",10.0.0.1`），自己 `.split(',')` 會切出三段、引號還留在值裡；用 Python 內建 `csv` 模組才會正確得到 `['Smith, A', '10.0.0.1']`（Python 3.12 實跑確認）。格式有標準的就用對應模組（`csv`、`json`），別手刻
- **異常要大聲**：欄位數不符預期的那一行，記下行號跳過或直接停下，不要默默當成正常資料往下算
- **主力方法**：[[split-method]] 切開、[[join-method]] 併回

## 應用場景

- Simon 工作場景：log 解析腳本（失敗登入計數、比對 IP／帳號）、accounting 電子發票 xlsx 與 Veeam CSV 的欄位切分；Veeam 報表這類 CSV 優先走 `csv` 模組
- 一般場景：任何把原始文字轉成結構化資料的前處理

## 相關概念

- [[split-method]]、[[join-method]]：parsing 的兩個主力方法
- [[string]]、[[list]]：parsing 在這兩種型別間轉換
- [[log]]：最常被 parse 的資安資料
- [[automation]]：parsing 是自動化 log 分析的前置步驟

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/3-parse-a-text-file-in-python|Course 7 Module 4 Section 2 Leaf 3 Parse a text file in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/4-work-with-files-in-python|Course 7 Module 4 Section 2 Leaf 4 Work with files in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/7-develop-a-parsing-algorithm-in-python|Course 7 Module 4 Section 2 Leaf 7 Develop a parsing algorithm in Python]]
