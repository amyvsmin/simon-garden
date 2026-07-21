---
title: "文件字串（Docstring）"
slug: docstring
aliases: [Docstring, 文件字串, documentation string, docstrings]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

文件字串是「用三引號 `""" """` 包住、用來記錄程式碼的多行字串」，本質是字串、不是真正的註解語法。它的作用由**位置**決定：放在函式／類別／模組的**第一個語句**時是真正的 docstring，會被存進 `__doc__`、`help()` 與文件工具讀得到；放在其他位置的三引號字串只是「被計算後丟掉、被忽略的字串字面值」，可拿來當多行 [[code-comment]]。常用在函式開頭，描述其 [[parameter]] 型別與回傳值。

## 關鍵面向

- **三引號多行字串**：`""" ... """`
- **位置決定行為**：首句位置進 `__doc__`（真 docstring）、其他位置只是被忽略的字串
- **可當多行註解**：非首句的三引號字串不影響程式、可拿來說明
- **常記錄函式介面**：描述參數型別與回傳值

## 應用場景

- Simon 工作場景：在自動化函式開頭用 docstring 記下「吃什麼參數、回傳什麼」，接手的人一打開就懂
- 一般場景：自動產生文件、IDE 與 `help()` 的說明來源

## 相關概念

- [[code-comment]]：docstring 可充當多行註解
- [[function]]、[[user-defined-function]]：docstring 常放在函式開頭
- [[parameter]]：docstring 常用來描述參數

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
