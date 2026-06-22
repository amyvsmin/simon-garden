---
title: "切片（Slice）"
slug: slice
aliases: [Slice, 切片, slicing, slices, 子序列, sublist, 子清單]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

切片是用兩個 [[index-concept|index]] 從序列取出「一段」的操作，語法 `[起:終]`——**起點 index 含、終點 index 不含**（Python 停在終點前一個元素）。對 [[string]] 取一段字元（`"HELLO"[1:4]` 得 `"ELL"`）、對 [[list]] 取一段元素（結果是「子清單 sublist」、本身也是一個 list）。換算訣竅：想取到第 n 個（index n）的元素，終點要寫 n+1。

## 關鍵面向

- **`[起:終]`、起含終不含**：`[1:4]` 取 index 1、2、3
- **終點換算**：要取到 index 3 就把終點寫成 4
- **字串取字元段／清單取子清單**：子清單本身也是 list
- **資安用途**：取 IP 前三碼（`[0:3]`）、URL 某段

## 應用場景

- Simon 工作場景：擷取 IP 網段、切出 URL／識別碼的特定片段
- 一般場景：序列子段的擷取

## 相關概念

- [[index-concept|index]]：切片用兩個索引界定範圍
- [[bracket-notation]]：切片透過方括號表示
- [[string]]、[[list]]：可切片的兩種序列（清單切片結果稱子清單 sublist）

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/3-string-indices-and-slices|Course 7 Module 3 Section 1 Leaf 3 String indices and slices]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
