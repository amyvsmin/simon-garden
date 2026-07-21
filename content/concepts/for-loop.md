---
title: "for 迴圈（For Loop）"
slug: for-loop
aliases: [For loop, for 迴圈, for loop, for-loop, for 迴圈陳述]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

for 迴圈是 [[iterative-statement]] 的一種，對「指定的序列」重複執行（例如印出 list 裡每個元素、走訪字串逐字元）。以關鍵字 `for` 開頭。loop header＝`for` + [[loop-variable]] + `in` + 要走訪的序列 + 冒號；loop body 是 header 下方縮排、每次迭代重複的動作。配 [[range-function]] 可重複固定次數。

## 關鍵面向

- **結構**：`for i in 序列:` 接縮排 body；[[loop-variable]] 緊接 `for`（常叫 `i`、只在迴圈內用）
- **`in` 運算子的兩種用途**：for 裡接「要走訪的序列」；條件式裡判斷「物件是否屬於某序列」（如 `if "elarson" in [...]`）
- **可走訪對象**：list、字串（逐字元），以及 [[range-function]] 產生的數字序列
- **流程控制**：body 內可用 `break`（跳出）、`continue`（跳過本次迭代）

## 應用場景

- Simon 工作場景：走訪允許 IP 清單比對登入來源、對一批主機套同一告警動作、逐筆檢查資產清單
- 一般場景：批次處理、資料轉換、固定次數重試

## 相關概念

- [[iterative-statement]]：for 是迭代陳述的兩種之一
- [[while-loop]]：另一種迴圈、依條件而非序列重複
- [[range-function]]：配 for 重複固定次數
- [[loop-variable]]：for header 內建立的控制變數

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/5-for-loops|Course 7 Module 1 Section 4 Leaf 5 For loops]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/7-more-on-loops-in-python|Course 7 Module 1 Section 4 Leaf 7 More on loops in Python]]
