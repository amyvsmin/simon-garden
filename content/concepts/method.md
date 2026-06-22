---
title: "方法（Method）"
slug: method
aliases: [Method, 方法, methods, 物件方法]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

方法是「屬於特定資料型別的 [[function]]」。跟一般函式不同：method 綁在某個資料型別上，語法寫在資料**後面**、用句點 `.` 接（`"Hello".upper()`）；用在別的型別會出錯。例：字串方法 `.upper()`／`.lower()`／`.index()`，清單方法 `.insert()`／`.remove()`／`.append()`／`.index()`。同名方法（如 `.index()`）在不同型別其實是不同的方法。

## 關鍵面向

- **屬於某資料型別的函式**：與獨立的 [[function]] 不同
- **語法 `資料.method()`**：寫在資料後、用句點接
- **用錯型別會出錯**：字串方法用在整數會報錯
- **同名不同型別＝不同方法**：如字串 `.index()` ≠ 清單 `.index()`

## 應用場景

- Simon 工作場景：用字串／清單方法處理 log 與名單（轉大小寫、搜尋、增刪）
- 一般場景：物件導向程式的常見操作

## 相關概念

- [[function]]：方法是綁在型別上的函式
- [[string]]、[[list]]：各有自己的方法
- [[index-method]]、[[insert-method]]、[[remove-method]]、[[append-method]]：具體的方法例子
- [[built-in-function]]：對照——內建函式是獨立呼叫、方法寫在資料後

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/2-string-operations|Course 7 Module 3 Section 1 Leaf 2 String operations]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
