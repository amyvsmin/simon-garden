---
title: "迭代陳述（Iterative Statement / Loop）"
slug: iterative-statement
aliases: [Iterative statement, 迭代陳述, 迴圈, loop, loops, 迭代]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

迭代陳述是「重複執行一組指令」的程式碼，也叫 loop（迴圈）。依條件不同會執行零次或多次。設好迴圈就能重複用一行程式碼、不必一直重打，特別適合單調重複、人容易失焦的任務。[[python]] 有兩種：[[for-loop]]（對指定序列重複）與 [[while-loop]]（依條件重複）。跟條件式一樣分 loop header（以冒號結尾）與縮排的 loop body。

## 關鍵面向

- **兩種迴圈**：[[for-loop]] 走訪已知序列（list、字串、`range()` 固定次數）；[[while-loop]] 依條件重複到狀態成立為止
- **[[loop-variable]]（迴圈變數）**：控制迭代的變數；for 在 header 內建立、while 要迴圈外先賦值
- **流程控制**：body 內可用 `break`（跳出整個迴圈）與 `continue`（跳過本次迭代）配 if 條件
- **無窮迴圈**：忘了改變迴圈變數會停不下來；持續處理資料的服務（web server）則刻意用，靠 CTRL-C／CTRL-Z 或 break 中止

## 應用場景

- Simon 工作場景：走訪使用者清單逐一檢查、對一批 IP 比對白名單、限制登入次數、迭代產生員工 ID——都是資安腳本的高頻結構
- 一般場景：批次處理、資料彙總、輪詢、重試邏輯

## 相關概念

- [[for-loop]]：對指定序列重複
- [[while-loop]]：依條件重複
- [[range-function]]：產生數字序列、配 for 重複固定次數
- [[loop-variable]]：控制迭代次數的變數
- [[conditional-statement]]：迴圈常配條件式做 break／continue

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/5-for-loops|Course 7 Module 1 Section 4 Leaf 5 For loops]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/6-while-loops|Course 7 Module 1 Section 4 Leaf 6 While loops]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/7-more-on-loops-in-python|Course 7 Module 1 Section 4 Leaf 7 More on loops in Python]]
