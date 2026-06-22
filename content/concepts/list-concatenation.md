---
title: "清單串接（List Concatenation）"
slug: list-concatenation
aliases: [List concatenation, 清單串接, 清單連接, list concat]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

清單串接是「把兩個 [[list]] 合併成一個」的概念，做法是把第二個 list 的元素直接接在第一個 list 的元素之後，用 `+` 運算子。例如 `["a", "b"] + [1, 2]` 得 `["a", "b", 1, 2]`。

## 關鍵面向

- **用 `+` 合併兩個 list**
- **第二個接在第一個之後**：保留各自順序
- **對照 [[string-concatenation]]**：字串與清單都用 `+` 串接

## 應用場景

- Simon 工作場景：把兩份名單（如多來源的 IP 清單）合併成一份再統一處理
- 一般場景：資料集合的合併

## 相關概念

- [[list]]：串接的對象
- [[string-concatenation]]：對照——字串也用 `+` 串接
- [[append-method]]：另一種把元素加進 list 的方式（加單一元素到末尾）

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/1-list-operations-in-python|Course 7 Module 3 Section 2 Leaf 1 List operations in Python]]
