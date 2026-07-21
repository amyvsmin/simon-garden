---
title: ".index() 方法（Index Method）"
slug: index-method
aliases: [index method, .index() 方法, list index, string index, 索引方法]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

`.index()` 是一個 [[method]]，找輸入在序列中「第一個出現」的位置、回傳其 [[index-concept|index]]。用於 [[string]]（找字元或 [[substring]]）與 [[list]]（找元素）。三個重點：**只回第一個出現**、**大小寫敏感**、**找不到會報錯（ValueError）**。重要：字串的 `.index()` 與清單的 `.index()` **同名但不是同一個方法**——方法在定義資料型別時就定義好了，字串與清單定義不同，方法也不同。

## 關鍵面向

- **回第一個出現的 index**：重複只回第一個
- **大小寫敏感**：要用對的大小寫
- **找不到報錯**：回 ValueError，實務上要先確認存在或用例外處理
- **字串版 ≠ 清單版**：同名、不同方法

## 應用場景

- Simon 工作場景：找 email 裡 `@` 的位置、定位使用者名單中某帳號的位置
- 一般場景：序列中的搜尋定位

## 相關概念

- [[index-concept|index]]：`.index()` 回傳的就是索引
- [[method]]：`.index()` 是方法
- [[string]]、[[list]]、[[substring]]：可用 `.index()` 搜尋的對象

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/3-string-indices-and-slices|Course 7 Module 3 Section 1 Leaf 3 String indices and slices]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
