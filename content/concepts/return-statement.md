---
title: "return 陳述（Return Statement）"
slug: return-statement
aliases: [Return statement, return 陳述, return, return-statement, 回傳陳述, 返回陳述]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

return 陳述是「在函式內執行、把資訊送回函式呼叫處的 Python 陳述」，用 `return` 關鍵字開頭、後面接要回傳的值（`return` 不是函式、後面不加括號）。[[parameter]] 把資訊送進函式，return 則把資訊送出來。重點：return ≠ `print`——`print` 只把值顯示到螢幕、不交回程式；return 把值交回程式可繼續使用。函式內的 [[local-variable]] 要在函式外用，得先 return、再存進新變數。Python 一遇到 return 就立刻結束函式，其後的程式碼不再執行。

## 關鍵面向

- **return ≠ print**：return 把值交回程式（可存、可續用）、print 只顯示到螢幕
- **接住回傳值**：`percentage = calculate_fails(4, 2)`，存進變數才能在後續用
- **一遇 return 即結束函式**：return 之後同函式內的程式碼不會執行
- **語法**：`return` 後直接接值或變數、不加括號

## 應用場景

- Simon 工作場景：寫 `calculate_fails(total, failed)` 回傳失敗率，主程式接住後用條件式自動判斷是否鎖帳號
- 一般場景：函式把處理結果交回主流程接手

## 相關概念

- [[parameter]]、[[argument]]：把資訊送進函式（return 是送出來）
- [[function]]、[[user-defined-function]]：return 用在函式內
- [[local-variable]]：函式內變數要 return 才能在外面用

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/2-return-statements|Course 7 Module 2 Section 2 Leaf 2 Return statements]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/3-functions-and-variables|Course 7 Module 2 Section 2 Leaf 3 Functions and variables]]
