---
title: "內建函式（Built-in Function）"
slug: built-in-function
aliases: [Built-in function, 內建函式, builtin function, built-in functions, 內建函數]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

內建函式是「存在於 Python 內、可直接呼叫的函式」，預設就能用、唯一要做的是用名字呼叫它。常見例子：`print()`（把指定物件輸出到螢幕）、`type()`（回傳輸入的資料型別）、`max()`／`min()`（回傳最大／最小值）、`sorted()`（排序 list）。用任一內建函式前要先清楚它「需要幾個 [[parameter]]、接受哪些資料型別、回傳什麼」，用錯型別會回 [[type-error]]。跟 [[user-defined-function]]（自己定義的）同為函式的兩大分類。

## 關鍵面向

- **常見內建函式**：`print()` 接任意型別／任意數量 argument；`type()` 只接一個；`max()`／`min()` 吃多個數值或一個 iterable；`sorted()` 回傳排好的新 list、不改原 list
- **巢狀呼叫**：把一函式回傳值當另一函式的 argument，內層先執行（如 `print(type(x))` 先算 `type(x)` 再印）
- **輸入輸出規格各異**：用前先確認 parameter 數、可接型別、回傳型別

## 應用場景

- Simon 工作場景：用 `sorted()` 把 log 事件依時間／帳號排序、用 `max()`／`min()` 找最長／最短登入區間
- 一般場景：善用標準工具直接完成任務、不重造輪子

## 相關概念

- [[function]]：內建函式是函式的一種
- [[user-defined-function]]：相對的另一類（自己用 `def` 定義）
- [[type-function]]：常與 `print()` 巢狀使用的內建函式
- [[type-error]]：傳錯資料型別時會觸發

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-1-introduction-to-functions/2-introduction-to-functions|Course 7 Module 2 Section 1 Leaf 2 Introduction to functions]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/4-explore-built-in-functions|Course 7 Module 2 Section 2 Leaf 4 Explore built-in functions]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/5-work-with-built-in-functions|Course 7 Module 2 Section 2 Leaf 5 Work with built-in functions]]
