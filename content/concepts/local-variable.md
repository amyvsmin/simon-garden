---
title: "區域變數（Local Variable）"
slug: local-variable
aliases: [Local variable, 區域變數, local variable, 局部變數]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

區域變數是「在函式內賦值的變數」，函式外無法呼叫或存取。[[parameter]] 以及函式內定義的其他變數都是區域變數。Python 在函式執行時暫時建立它們、函式一跑完就從記憶體刪除——所以在函式外取用會報錯。跟 [[global-variable]] 相對。要把函式內算出的值帶到函式外，得用 [[return-statement]] 回傳、再存進外面的變數。

## 關鍵面向

- **函式內賦值、僅函式內可用**：函式外存取會報錯
- **parameter 也是區域變數**：函式定義時建立的 parameter 同樣只在函式內有效
- **生命週期短**：函式執行時建立、結束即從記憶體刪除
- **要外用需 [[return-statement]]**：把值回傳並存進函式外的變數

## 應用場景

- Simon 工作場景：理解作用域，避免函式不小心改到共用狀態、造成難追的 bug
- 一般場景：讓函式自包含、減少副作用（side effect，函式回傳值以外又改到外部狀態）

## 相關概念

- [[global-variable]]：相對概念，整個程式可取用
- [[parameter]]：parameter 本質上是區域變數
- [[return-statement]]：把區域變數的值帶出函式
- [[variable]]：區域／全域是變數的兩種作用域

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/3-functions-and-variables|Course 7 Module 2 Section 2 Leaf 3 Functions and variables]]
