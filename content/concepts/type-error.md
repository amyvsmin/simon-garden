---
title: "型別錯誤（Type Error）"
slug: type-error
aliases: [Type error, 型別錯誤, TypeError, 型態錯誤, 資料型別錯誤]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

型別錯誤是「因使用錯誤的資料型別而產生的錯誤」。在 [[python]] 裡，把不相容的型別混用就會觸發——例如把字串和數字相加會得到 type error，因為 Python 不能把這兩種 [[data-type]] 相加，只能兩個字串相加、或兩個數字相加。

## 關鍵面向

- **成因**：型別不相容的運算（最典型是字串 + 數字）
- **規則**：相加只能同型別——兩字串（接合）或兩數字（相加）
- **預防**：運算前用 [[type-function]]（`type()`）確認型別，必要時先轉型
- **常見來源**：從外部讀進來的值（log、xlsx、API）型別常與預期不符

## 應用場景

- Simon 工作場景：accounting 解析發票時，金額讀進來若是字串而非數值，直接運算就會 type error——先確認型別是寫穩健腳本的關鍵
- 一般場景：處理使用者輸入、外部資料整合、除錯

## 相關概念

- [[data-type]]：型別錯誤源自型別不相容
- [[type-function]]：用 type() 事前確認可避免
- [[variable]]：變數型別變動是常見的型別錯誤來源

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/3-work-with-variables-in-python|Course 7 Module 1 Section 3 Leaf 3 Work with variables in Python]]
