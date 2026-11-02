---
title: "語法錯誤（Syntax Error）"
slug: syntax-error
aliases: [Syntax error, 語法錯誤, syntax error, syntax errors, SyntaxError]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

語法錯誤是「違反 Python 語言規則的用法」，在 Python 非常常見，所以注意正確 [[python-syntax]] 是讓程式跑得起來的關鍵。判準只有一條：**Python 能不能把這段文字解析成程式**。解析不了才是 SyntaxError，而且程式一行都不會執行；解析得了、但結果不是你想要的型別或值，那是別類錯誤。常見來源：(1) **引號或括號沒閉合**（`x = 'abc`、`print("hi"`）；(2) **header 漏冒號**——[[conditional-statement]]、[[iterative-statement]]、函式定義的 header 結尾必須加冒號 `:`；(3) **list 元素漏逗號**（`[1 2]`）；(4) **縮排不合語法**，報的是 `IndentationError`（SyntaxError 的子類，見 [[indentation]]）。熟悉這幾類有助於更快定位與修正。

## 關鍵面向

- **解析不了 vs 意圖寫錯**：課程提醒的「字串要加引號、數字不加」是型別意圖，不是語法規則。`x = '123'`（合法，得到字串）、`x = hello`（合法，是引用名為 hello 的變數）、`x = 1, 2`（合法，得到 tuple）三行都能通過解析；問題要到執行或使用時才浮現
- **一組對照**（Python 3.12 實跑確認）：

  | 程式 | 結果 | 錯誤類別 |
  |---|---|---|
  | `x = 'abc` | `SyntaxError: unterminated string literal` | 語法錯誤 |
  | `if True` 換行 `pass` | `SyntaxError: expected ':'` | 語法錯誤 |
  | `[1 2]` | `SyntaxError: invalid syntax. Perhaps you forgot a comma?` | 語法錯誤 |
  | `if True:` 換行頂格 `print(1)` | `IndentationError: expected an indented block` | 語法錯誤（子類） |
  | `x = hello`（hello 沒定義） | 執行時 `NameError` | [[exception]] |
  | `'10' + 5` | 執行時 `TypeError` | [[type-error]] |
  | `x = '123'` 後拿去跟數字比較 | `x > 5` 執行時報 TypeError；`x == 123` 不報錯、默默得 False | 型別意圖錯，後者會變 [[logic-error]] |

- **debug 第一關**：錯誤訊息寫 SyntaxError／IndentationError 時，先看它指的那一行與前一行有沒有漏冒號、漏引號、括號沒關

## 應用場景

- Simon 工作場景：腳本跑不動時，先掃漏冒號、漏引號這兩類最常見的語法錯誤
- 一般場景：撰寫與除錯 Python 的基本檢查

## 相關概念

- [[python-syntax]]：語法錯誤即違反語法規則
- [[type-error]]：另一類常見錯誤（型別不相容，屬執行期）
- [[exception]]：NameError、TypeError 這類執行期錯誤的總稱
- [[logic-error]]：能跑但結果錯，型別意圖寫錯常落到這裡
- [[indentation]]：縮排不合語法報 IndentationError（SyntaxError 子類）
- [[conditional-statement]]、[[iterative-statement]]：其 header 漏冒號是常見來源

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/1-debugging-strategies|Course 7 Module 4 Section 3 Leaf 1 Debugging strategies]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/4-explore-debugging-techniques|Course 7 Module 4 Section 3 Leaf 4 Explore debugging techniques]]
