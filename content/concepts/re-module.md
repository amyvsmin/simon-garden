---
title: "re 模組（re Module）"
slug: re-module
aliases: [re module, re 模組, re, regular expression module]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

`re` 是 [[python-standard-library]] 裡提供 [[regular-expression]]（正規表達式）功能的 [[module]]。用 regex 前要先 `import re`。regex 在 Python 以**字串**形式儲存，再丟進 `re` 模組的函式（如 [[re-findall]]）去搜尋別的字串。`re` 模組含多個函式，本課程用 `re.findall()`。

## 關鍵面向

- **標準庫模組**：隨 Python 附帶，`import re` 即可用
- **regex 存成字串**：再丟進 `re` 的函式執行
- **含多個函式**：本課用 `re.findall()`（還有 search、match、sub 等）

## 應用場景

- Simon 工作場景：log 解析腳本的入口模組——`import re` 後用 pattern 撈出所需內容
- 一般場景：所有需要文字 pattern 比對的程式

## 相關概念

- [[regular-expression]]：`re` 模組執行的對象
- [[re-findall]]：`re` 模組最常用的函式之一
- [[module]]、[[python-standard-library]]：`re` 是標準庫的一個模組
- [[import-statement]]：用 `import re` 載入

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-3-regular-expressions/1-regular-expressions-in-python|Course 7 Module 3 Section 3 Leaf 1 Regular expressions in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-3-regular-expressions/2-more-about-regular-expressions|Course 7 Module 3 Section 3 Leaf 2 More about regular expressions]]
