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

- **定義**：把資料轉成更易讀／易處理的格式
- **兩個目的**：給程式處理用的格式、給人讀的可讀性
- **主力方法**：[[split-method]] 切開、[[join-method]] 併回
- **資安用途**：把 log 從一大塊文字切成可逐筆分析的結構

## 應用場景

- Simon 工作場景：log 解析腳本、accounting 發票／Veeam CSV 的欄位切分
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
