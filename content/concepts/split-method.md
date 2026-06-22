---
title: ".split() 方法（Split Method）"
slug: split-method
aliases: [split method, .split(), split, 字串切割, split 方法]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

`.split()` 是字串方法，把一個字串切成 [[list]]（清單）。依傳入的分隔字元切（如 `.split(",")` 依逗號切）；若不傳參數，則遇到任何空白（whitespace，含空格與換行）就切。因為 Python 把換行也算成一種空白，所以「每行一筆」的 [[log]] 用 `.split()` 不給參數就能切成每行一個元素。是 [[parsing]] 的主力方法之一，跟 [[join-method]] 互逆。

## 關鍵面向

- **字串 → 清單**
- **給分隔字元**：依該字元切（連續或前後的分隔會產生空字串）；**不給參數**：依空白（含換行）切，並自動略過多餘空白
- 常配 [[file-handling]] 的 `.read()` 之後使用，把檔案內容當清單處理
- 跟 [[join-method]]（清單→字串）互逆

## 應用場景

- Simon 工作場景：把多行 log 切成清單、逐筆比對 IP／帳號
- 一般場景：CSV／文字資料的欄位切分

## 相關概念

- [[parsing]]：split 是 parsing 的主力方法
- [[join-method]]：互逆操作（清單→字串）
- [[string]]、[[list]]：split 在兩者間轉換

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/3-parse-a-text-file-in-python|Course 7 Module 4 Section 2 Leaf 3 Parse a text file in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/4-work-with-files-in-python|Course 7 Module 4 Section 2 Leaf 4 Work with files in Python]]
