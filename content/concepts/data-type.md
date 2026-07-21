---
title: "資料型別（Data Type）"
slug: data-type
aliases: [Data type, 資料型別, 資料型態, data types, 型別]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

資料型別是「某類資料項目的分類」，像在廚房把食材分成蔬菜、肉——分類決定你怎麼處理它。在 [[python]] 裡，型別決定一筆值能做什麼（字串不能加總、數值才能運算）。每種型別有自己的用途與語法。本課程聚焦五種：string、integer、float、Boolean、list，另介紹 tuple（[[tuple]]）、dictionary、set 三種。

## 關鍵面向

- **String（字串）**：引號包住的有序字元序列；裡面的數字不能拿來運算
- **Integer／Float（整數／浮點數）**：integer 無小數點、float 有小數點；都不加引號、可做數學運算；`/` 相除得 float、`//` 向下取整
- **Boolean（布林）**：只有 True／False 兩值、用於邏輯判斷
- **List（清單）**：方括號 `[]`、有序、元素可改、可混型別
- **延伸三種**：[[tuple]]（小括號、不可變）、dictionary（大括號、key-value）、set（大括號、無序唯一）

## 應用場景

- Simon 工作場景：accounting 把發票金額當數值運算、店家名當字串、對帳結果當 Boolean、品項清單當 list——理解型別就是理解「這個值能不能算、能不能比較」
- 一般場景：資料清洗、API 回應解析、選對資料結構寫安全可維護的腳本

## 相關概念

- [[variable]]：變數的型別由它目前所存物件的型別決定
- [[tuple]]：不可變的有序集合、資安用來存不可竄改的識別碼
- [[type-function]]：用 `type()` 查一個值的資料型別
- [[type-error]]：把不同型別混用（如字串 + 數字）造成的錯誤

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/1-data-types-in-python|Course 7 Module 1 Section 3 Leaf 1 Data types in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/2-more-about-data-types|Course 7 Module 1 Section 3 Leaf 2 More about data types]]
