---
title: "字串串接（String Concatenation）"
slug: string-concatenation
aliases: [String concatenation, 字串串接, 字串連接, string concat]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

字串串接是「把兩個字串接在一起的過程」，用 `+` 運算子。例如 `"Hello" + "world"` 得 `"Helloworld"`——中間**沒有自動加空格**，要空格得自己加（`"Hello" + " " + "world"`）。注意：部分運算子（如減號 `-`）不能用於字串。

## 關鍵面向

- **用 `+` 接兩字串**：`"a" + "b"` 得 `"ab"`
- **無自動空格**：要分隔得自己加 `" "`
- **`-` 不能用於字串**：只有部分運算子對字串有意義

## 應用場景

- Simon 工作場景：把多段資訊（帳號、時間、訊息）組成一條告警字串
- 一般場景：組裝輸出訊息、檔名、路徑

## 相關概念

- [[string]]：串接的對象
- [[list-concatenation]]：對照——清單也用 `+` 串接
- [[str-function]]：數值要先轉字串才能跟字串串接

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/2-string-operations|Course 7 Module 3 Section 1 Leaf 2 String operations]]
