---
title: ".insert() 方法（Insert Method）"
slug: insert-method
aliases: [insert method, .insert() 方法, insert, list insert, 插入方法]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

`.insert()` 是 [[list]] 的 [[method]]，在指定位置插入一個元素，吃兩個引數——`list.insert(位置, 元素)`：第一個是要插入的 index、第二個是要插入的元素。跟用 [[bracket-notation]] 賦值改元素不同：插入**不會取代**該位置原本的元素，而是把含該位置在內的後續元素全部往後移一位（list 長度加一）。

## 關鍵面向

- **兩個引數**：`.insert(index, element)`
- **不取代、會位移**：原位置之後的元素全部後移一位
- **對照 bracket 賦值**：`list[i] = x` 是取代、不位移

## 應用場景

- Simon 工作場景：在名單的特定位置插入一筆（如依優先序插入某條規則）
- 一般場景：在序列中段插入資料

## 相關概念

- [[list]]：insert 作用的對象
- [[method]]：insert 是清單方法
- [[remove-method]]、[[append-method]]：其他清單增刪方法
- [[bracket-notation]]：對照——賦值改元素是取代、不位移

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/1-list-operations-in-python|Course 7 Module 3 Section 2 Leaf 1 List operations in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
