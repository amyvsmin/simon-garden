---
title: "re.findall() 函式（re.findall Function）"
slug: re-findall
aliases: [re.findall, re findall, findall, re.findall() 函式]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

`re.findall()` 是 [[re-module]] 的函式，回傳「所有符合某 [[regular-expression]] 的相符項」組成的 [[list]]。吃兩個參數：第一個是 pattern 字串、第二個是要搜尋的字串。例如 `re.findall("\w+@\w+\.\w+", email_log)` 會撈出 log 裡所有 email。若要搜尋的是多行字串（如整份 log），用三組引號 `""" """` 包住。

## 關鍵面向

- **回傳所有相符項的 list**：不只第一個，全部撈出
- **兩個參數**：`re.findall(pattern, 要搜尋的字串)`
- **多行字串用三引號**：整份 log 當字串變數時
- **找不到回空 list**：不像 `.index()` 找不到會報錯

## 應用場景

- Simon 工作場景：一次從幾千行 log 撈出所有 email、所有特定網段的 IP
- 一般場景：批次擷取符合某格式的所有文字片段

## 相關概念

- [[re-module]]：`findall` 所屬的模組
- [[regular-expression]]：`findall` 用的 pattern
- [[list]]：`findall` 回傳的型別
- [[string]]：`findall` 搜尋的對象

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-3-regular-expressions/1-regular-expressions-in-python|Course 7 Module 3 Section 3 Leaf 1 Regular expressions in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-3-regular-expressions/2-more-about-regular-expressions|Course 7 Module 3 Section 3 Leaf 2 More about regular expressions]]
