---
title: "引數（Argument）"
slug: argument
aliases: [Argument, 引數, arguments, 實際參數, 實參]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

引數是「呼叫函式時帶進函式的資料」，也就是呼叫當下填入的實際值，會依**位置**進入對應的 [[parameter]]。例如 `range(3, 7)` 裡的 `3` 和 `7` 是 argument，分別填進 start、stop 兩個 parameter。一句話分辨：parameter 是定義函式時的占位變數、argument 是呼叫函式時填入的實際值。多個 argument 用逗號分隔。

## 關鍵面向

- **呼叫時填入的實際值**：`greet_employee("Charley Patel")` 裡的字串就是 argument
- **依位置對應 [[parameter]]**：第一個 argument 進第一個 parameter、第二個進第二個
- **與 parameter 的差別**：argument＝呼叫時的值、parameter＝定義時的占位
- **多引數逗號分隔**：`greet("Kiara", "Carter")`

## 應用場景

- Simon 工作場景：呼叫判斷函式時把實際的帳號、IP 當 argument 傳入，用同一函式跑不同帳號的資料
- 一般場景：用相同函式處理不同輸入

## 相關概念

- [[parameter]]：argument 在呼叫時填入的目標占位變數
- [[function]]、[[built-in-function]]：呼叫函式時提供 argument
- [[return-statement]]：argument 進、return 出，構成函式輸入輸出

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/1-use-parameters-in-functions|Course 7 Module 2 Section 2 Leaf 1 Use parameters in functions]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/3-functions-and-variables|Course 7 Module 2 Section 2 Leaf 3 Functions and variables]]
