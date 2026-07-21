---
title: "while 迴圈（While Loop）"
slug: while-loop
aliases: [While loop, while 迴圈, while loop, while-loop, while 迴圈陳述]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

while 迴圈是 [[iterative-statement]] 的一種，重複的依據是「條件」而非序列（這是跟 [[for-loop]] 的根本差別）。只要條件為 True 就一直跑、變成 False 就停。loop header＝關鍵字 `while` + 條件 + 冒號。關鍵差異：[[loop-variable]] 必須在迴圈外先賦值，且 body 內要明確改變它，否則條件永遠 True、形成無窮迴圈。

## 關鍵面向

- **依條件重複**：條件可基於整數（`login_attempts < 5`）或 Boolean（`login_status == True`）
- **迴圈變數迴圈外賦值**：與 for 不同——while 要先 `i = 1` 再 `while i < 5:`
- **body 內必須改變迴圈變數**：忘了改變會無窮迴圈；持續服務（web server）則刻意用、靠 break 或 CTRL-C 中止
- **計數推算**：`max=5`、`i` 從 1、每次 +1、`while i < max` → 印 4 次（i=1~4），i=5 退出

## 應用場景

- Simon 工作場景：失敗登入未達上限前持續允許重試、連線數未達上限前放行、重試直到連上為止——「不知跑幾次、跑到某條件成立為止」的場景
- 一般場景：輪詢、監控迴圈、條件式重試

## 相關概念

- [[iterative-statement]]：while 是迭代陳述的兩種之一
- [[for-loop]]：另一種迴圈、依序列重複
- [[loop-variable]]：while 要在迴圈外先賦值的控制變數
- [[conditional-statement]]：while 的條件用同一組比較運算子

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/6-while-loops|Course 7 Module 1 Section 4 Leaf 6 While loops]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/7-more-on-loops-in-python|Course 7 Module 1 Section 4 Leaf 7 More on loops in Python]]
