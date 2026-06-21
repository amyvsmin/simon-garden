---
title: "type() 函式（Type Function）"
slug: type-function
aliases: [type function, type() 函式, type, type 函式, type() function]
category: 資安
confidence: 已驗證
created: 2026-06-21
---

## 定義

`type()` 是 [[python]] 的內建函式，回傳輸入資料的 [[data-type]]（資料型別）。[[variable]] 的型別＝它目前所存物件的型別；不確定變數裡是什麼型別時，用 `type()` 查。

## 關鍵面向

- **用途**：查一個值或變數當下的資料型別
- **動態型別**：變數型別隨重新賦值改變，`type()` 反映「當下」的型別
- **防 type error**：運算前先用 `type()` 確認，可擋掉把不同型別混用造成的 [[type-error]]

## 應用場景

- Simon 工作場景：從發票 xlsx 或 log 讀進來的值預設常是字串，運算前用 `type()` 確認、必要時轉型——這正是 accounting 解析金額會踩的坑
- 一般場景：除錯、資料驗證、處理外部輸入

## 相關概念

- [[data-type]]：type() 回傳的就是資料型別
- [[variable]]：常用來查變數當下的型別
- [[type-error]]：先用 type() 確認可避免型別錯誤

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/3-work-with-variables-in-python|Course 7 Module 1 Section 3 Leaf 3 Work with variables in Python]]
