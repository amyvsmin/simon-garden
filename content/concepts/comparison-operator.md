---
title: "比較運算子（Comparison Operator）"
slug: comparison-operator
aliases: [Comparison operator, 比較運算子, comparison operators, 比較運算符, relational operator]
category: 資安
confidence: 已驗證
created: 2026-06-21
---

## 定義

比較運算子用來比較兩個值、回傳 Boolean（True／False），是 [[conditional-statement]] 與 [[while-loop]] 條件的核心。共六個：`>`（大於）、`<`（小於）、`>=`（大於等於）、`<=`（小於等於）、`==`（等於）、`!=`（不等於）。其中 `==` 與 `!=` 也常用來比較字串。

## 關鍵面向

- **`==` 不是 `=`**：條件裡的「等於」用雙等號 `==`（比較、回傳 Boolean）；單一 `=` 是賦值，混用是新手最常見的錯
- **`!=`（不等於）**：兩物件不同回 True、相同回 False
- **可比數值也可比字串**：`status == 200`、`operating_system == "OS 2"` 都成立
- **回傳 Boolean**：結果餵給 if／while 決定要不要執行

## 應用場景

- Simon 工作場景：HTTP 狀態碼分流（`status == 200`）、失敗次數門檻（`failed_attempts > 5`）、版本比對（`os == "..."`）
- 一般場景：輸入驗證、邊界檢查、排序與篩選條件

## 相關概念

- [[conditional-statement]]：比較運算子是條件的判斷依據
- [[logical-operator]]：用 and／or／not 把多個比較組合起來
- [[while-loop]]：迴圈條件用同一組比較運算子

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/1-conditional-statements-in-python|Course 7 Module 1 Section 4 Leaf 1 Conditional statements in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/2-more-on-conditionals-in-python|Course 7 Module 1 Section 4 Leaf 2 More on conditionals in Python]]
