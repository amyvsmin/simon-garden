---
title: "不可變性（Immutability）"
slug: immutability
aliases: [Immutable, 不可變, immutability, 不可變性, 不可變更, immutable object]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

不可變（immutable）指「物件建立並賦值後就無法更改」。[[string]] 是 immutable——不能用 [[bracket-notation]] 改其中的字元（`my_string[1] = "A"` 會報錯）；想「修改」字串，實際上是用切片／串接產生一個**新**字串、存進新變數。對照之下 [[list]] 是可變（mutable），可直接用方括號賦值改元素。[[tuple]] 同樣是不可變、資安用來存不可竄改的識別碼。

## 關鍵面向

- **建立後不能改**：immutable 物件的內容固定
- **字串不可變、清單可變**：這是兩者的關鍵差異
- **「修改」字串＝產生新字串**：用切片／串接重建、存進新變數
- **[[tuple]] 也是不可變**：適合存不該被改的資料

## 應用場景

- Simon 工作場景：理解「字串修改要重建」避免誤用；用 tuple 存不可竄改的軟體識別碼
- 一般場景：資料的可預測性與防竄改

## 相關概念

- [[string]]：不可變
- [[list]]：對照——可變
- [[tuple]]：另一種不可變資料結構
- [[bracket-notation]]：字串不可用它改字元、清單可以

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/3-string-indices-and-slices|Course 7 Module 3 Section 1 Leaf 3 String indices and slices]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/1-list-operations-in-python|Course 7 Module 3 Section 2 Leaf 1 List operations in Python]]
