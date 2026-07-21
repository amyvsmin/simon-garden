---
title: "語法（Syntax）"
slug: python-syntax
aliases: [Syntax, 語法, python syntax, Python 語法, 程式語法]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

語法（syntax）是「判定一段程式在某語言裡結構是否正確」的規則。只有語法正確，電腦才能正確執行；違反會得到語法錯誤。在 [[python]] 裡，字串必須用引號包住、條件式 header 結尾要冒號、body 要縮排，都是語法的例子。不同 Python 版本的語法有差異。

## 關鍵面向

- **定義**：決定程式碼「結構正確與否」的規則
- **常見 Python 語法點**：字串加引號、冒號結尾、縮排決定區塊歸屬、`==` 比較 vs `=` 賦值
- **版本差異**：Python 版本間語法有別，可攜腳本要留意
- **回饋**：少引號、漏冒號、縮排不一致都會即時報語法錯誤

## 應用場景

- Simon 工作場景：寫可攜腳本（WSL／Windows 雙棲）時，語法與版本一致性影響能不能跨機跑
- 一般場景：所有程式撰寫、code review、除錯

## 相關概念

- [[python]]：語法是 Python 程式正確執行的前提
- [[conditional-statement]]：冒號與縮排是條件式的語法要求
- [[type-error]]：語法正確但型別錯仍會出錯（兩者不同層次的錯誤）

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-2-introduction-to-python-programming-in-cybersecurity/4-create-a-basic-python-script|Course 7 Module 1 Section 2 Leaf 4 Create a basic Python script]]
