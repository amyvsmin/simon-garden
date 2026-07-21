---
title: "range() 函式（Range Function）"
slug: range-function
aliases: [range function, range() 函式, range, range 函式]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

`range()` 是 [[python]] 的內建函式，產生一串數字序列，常配 [[for-loop]] 重複固定次數。語法 `range(start, stop, increment)`——**起點含、終點排除**。起點預設 0、增量預設 1，是預設值時可省略（`range(5)` 等同 `range(0, 5, 1)`），但終點一定要寫。

## 關鍵面向

- **終點排除（off-by-one 重點）**：`range(0, 10)` 產生 0~9（不含 10）、共 10 個數；`range(0, 5, 1)` 產生 0~4
- **預設值**：不給起點從 0 起、不給增量為 1；`range(5)` = `range(0,5,1)`
- **何時要明寫**：起點非 0 或增量非 1 時要指定
- **配 for 重複固定次數**：`for i in range(10):` 把動作重複 10 次、不必手打十遍

## 應用場景

- Simon 工作場景：重試 N 次、產生 N 筆連號（員工 ID／批次編號）、固定次數的批次任務
- 一般場景：計數迴圈、索引走訪、分頁產生

## 相關概念

- [[for-loop]]：range() 最常配 for 使用
- [[iterative-statement]]：range 是「重複固定次數」的工具
- [[loop-variable]]：for 迴圈變數逐一取 range 產生的數字

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/5-for-loops|Course 7 Module 1 Section 4 Leaf 5 For loops]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/7-more-on-loops-in-python|Course 7 Module 1 Section 4 Leaf 7 More on loops in Python]]
