---
title: "參數（Parameter）"
slug: parameter
aliases: [Parameter, 參數, parameters, 形式參數, 形參]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

參數是「包含在函式定義中、供該函式使用的物件」。定義函式時寫在函式名稱後的括號內、可在 body 使用的變數就叫 parameter（它是一種 [[local-variable]]）。函式靠 parameter 接收來自外部的資訊。跟 [[argument]] 成對且常被混淆：parameter 是「定義時的占位變數」、argument 是「呼叫時填入的實際值」。多個 parameter 用逗號分隔，呼叫時的 argument 依**位置**對應。

## 關鍵面向

- **定義時的占位變數**：寫在 `def 函式名(這裡):`，是 [[local-variable]]、只在函式內有效
- **與 [[argument]] 的差別**：parameter＝定義時的欄位、argument＝呼叫時填的值
- **多參數與位置對應**：`def greet(first, last):` 兩個 parameter 逗號分隔；呼叫時第一個 argument 進 `first`、第二個進 `last`
- **內建函式也有**：如 `range(start, stop)` 的 start、stop 就是 parameter

## 應用場景

- Simon 工作場景：把帳號、來源 IP、失敗次數當 parameter 傳進判斷函式，同一函式套用到每個帳號
- 一般場景：讓同一個函式對不同輸入做事，而非為每組輸入複製貼上

## 相關概念

- [[argument]]：呼叫時填入 parameter 的實際值
- [[function]]、[[user-defined-function]]：parameter 在函式定義裡宣告
- [[local-variable]]：parameter 本質上是區域變數
- [[return-statement]]：parameter 收輸入、return 送輸出，構成函式的輸入輸出

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/1-use-parameters-in-functions|Course 7 Module 2 Section 2 Leaf 1 Use parameters in functions]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/3-functions-and-variables|Course 7 Module 2 Section 2 Leaf 3 Functions and variables]]
