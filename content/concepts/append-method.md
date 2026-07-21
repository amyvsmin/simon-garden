---
title: ".append() 方法（Append Method）"
slug: append-method
aliases: [append method, .append() 方法, append, list append, 附加方法]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

`.append()` 是 [[list]] 的 [[method]]，把輸入加到 list 的**末尾**，只吃一個引數（要加的元素），其餘元素位置不變。`.append()` 常配 [[for-loop]] 把元素逐一填進一個空 list（建空 list → for 走訪來源 → 每次 append 處理結果），是「把處理結果一筆筆收集起來」的萬用模式（如擷取每個 IP 的網段、抽出每筆 log 的欄位）。

## 關鍵面向

- **加到末尾**：`.append(x)`，其他元素不動
- **配 for loop 填空 list**：`for i in ...: lst.append(...)`
- **收集結果的萬用模式**：演算法裡常見的「逐筆累積」寫法

## 應用場景

- Simon 工作場景：把新發現的惡意 IP 加到名單末尾；或在 log 解析迴圈裡逐筆收集擷取結果
- 一般場景：動態建立清單、累積運算結果

## 相關概念

- [[list]]：append 作用的對象
- [[method]]：append 是清單方法
- [[insert-method]]、[[remove-method]]：其他清單增刪方法
- [[for-loop]]、[[algorithm]]：append 常用於迴圈與演算法的「收集」步驟

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/2-write-a-simple-algorithm|Course 7 Module 3 Section 2 Leaf 2 Write a simple algorithm]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
