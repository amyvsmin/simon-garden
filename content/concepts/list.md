---
title: "清單（List）"
slug: list
aliases: [List, 清單, list data, 清單資料, lists]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

清單是「序列形式的資料集合」，是 [[data-type]] 之一，能在單一變數裡存多個元素、且可同時含多種資料型別。元素用逗號分隔、外面用方括號 `[]` 包住。資安常用來存 IP 位址、使用者名稱、URL、裝置 ID 等。跟 [[string]] 最大的不同：list **可變（mutable）**——可用 [[bracket-notation]] 賦值改元素、用 [[insert-method]]／[[remove-method]]／[[append-method]] 增刪。可用 [[index-concept|index]]／[[slice]] 取值、配 [[for-loop]] 走訪做批次處理。

## 關鍵面向

- **方括號、逗號分隔**：`["a", "b", "c"]`
- **可存多種型別**：同一 list 可混字串、數字、布林
- **可變（mutable）**：可改、可增、可刪（對照字串不可變）
- **配 [[for-loop]] 批次處理**：走訪每個元素、配條件式篩選

## 應用場景

- Simon 工作場景：維護會變動的名單——惡意 IP 黑名單、允許清單、IoC 清單、資產清單
- 一般場景：批次資料的儲存與處理

## 相關概念

- [[data-type]]：清單是資料型別之一
- [[string]]：對照——字串不可變、清單可變
- [[index-concept|index]]、[[slice]]、[[bracket-notation]]：取清單元素或子清單
- [[insert-method]]、[[remove-method]]、[[append-method]]、[[index-method]]：清單方法
- [[for-loop]]：走訪清單

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/1-list-operations-in-python|Course 7 Module 3 Section 2 Leaf 1 List operations in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
