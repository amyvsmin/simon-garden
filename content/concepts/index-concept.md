---
title: "索引（Index）"
slug: index-concept
aliases: [索引, indices, 位置編號, 下標]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

索引是「指派給序列中每個元素、表示其位置的編號」。對 [[string]] 而言是每個字元的位置、對 [[list]] 而言是每個元素的位置。Python **從 0 起算**——第一個元素的 index 是 0、第二個是 1。也可用**負索引**從尾端算（`-1` 是最後一個、`-n` 是第一個）。用 [[bracket-notation]] 把 index 放在方括號裡，就能取出該位置的元素。

## 關鍵面向

- **從 0 起算**：第一個是 0、第 n 個是 n-1
- **正負索引**：負數從尾端算（`-1` 最後一個）
- **字串字元／清單元素的位置**：兩種序列共通
- **配 [[bracket-notation]] 取值**：`序列[index]`

## 應用場景

- Simon 工作場景：定位 IP／識別碼的特定位元組、取出 URL 的某個字元位置
- 一般場景：序列資料的定址與存取

## 相關概念

- [[string]]、[[list]]：索引作用的兩種序列
- [[slice]]：用兩個索引取一段
- [[bracket-notation]]：用方括號加索引取值
- [[index-method]]：`.index()` 回傳元素首次出現的索引

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/3-string-indices-and-slices|Course 7 Module 3 Section 1 Leaf 3 String indices and slices]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
