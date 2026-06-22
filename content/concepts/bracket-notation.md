---
title: "方括號取值（Bracket Notation）"
slug: bracket-notation
aliases: [Bracket notation, 方括號取值, 方括號表示法, bracket, 中括號取值]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

方括號取值是「把 [[index-concept|index]] 放在方括號 `[]` 裡」來存取序列元素或片段的寫法。可用在 [[string]]／[[list]] 的字面值或存它的變數（`device_id[0]`、`"h32rb17"[0:3]`）。三種用途：取單一元素（`序列[i]`）、取 [[slice|切片]]（`序列[起:終]`）、以及改 [[list]] 元素（`list[i] = x`——只有清單可以，字串因 [[immutability|不可變]]不行）。

## 關鍵面向

- **index 放方括號**：`序列[index]`
- **三種用途**：取元素、取切片、改清單元素
- **字面值或變數都可用**：`"h32rb17"[0]` 或 `device_id[0]`
- **改元素僅限清單**：字串不可變、賦值會報錯

## 應用場景

- Simon 工作場景：取出 IP／ID 的特定位元組或片段、就地修改名單中的某筆
- 一般場景：序列資料的讀寫

## 相關概念

- [[index-concept|index]]、[[slice]]：方括號裡放的索引或範圍
- [[string]]、[[list]]：作用的兩種序列
- [[immutability]]：字串不可變，故方括號賦值只能用於清單

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/1-list-operations-in-python|Course 7 Module 3 Section 2 Leaf 1 List operations in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
