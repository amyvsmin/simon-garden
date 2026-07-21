---
title: "邏輯錯誤（Logic Error）"
slug: logic-error
aliases: [Logic error, 邏輯錯誤, logic errors, 邏輯錯]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

邏輯錯誤是「程式採用的邏輯產生非預期結果的錯誤」。它通常不會產生錯誤訊息——程式對直譯器仍然合法、跑得起來，只是結果不如預期，因此是三類錯誤裡最難抓的。常見來源：用錯邏輯／比較運算子（如把 `<=` 寫成 `<`、`>=` 寫成 `>`，造成邊界差一）、條件給錯值、或縮排在語法上合法但放錯邏輯區塊（如該在迴圈內的 `.append()` 卻縮到迴圈外）。注意：縮排若**不合語法**（該縮沒縮、tab／空格混用），那是會直接報錯的 `IndentationError`（SyntaxError 子類），不是這種默默跑錯的 logic error。常用 print（標行號＋位置）來定位。

## 關鍵面向

- **不報錯、結果錯**（對直譯器仍合法）
- 三類錯誤裡**最難抓**的一類
- 常見來源：運算子用錯（邊界差一）、條件值錯、縮排放錯邏輯區塊
- 定位法：插 print 看程式有沒有進到某段

## 應用場景

- Simon 工作場景：告警規則邊界設錯（如本該含 priority 3 卻被排除）→ 真事件沒被通報，是典型的 logic error
- 一般場景：任何「跑得動但結果不對」的程式

## 相關概念

- [[debugging]]：logic error 的處理屬除錯一環
- [[syntax-error]]、[[exception]]：另外兩類錯誤（這兩類會報錯）

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/1-debugging-strategies|Course 7 Module 4 Section 3 Leaf 1 Debugging strategies]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/4-explore-debugging-techniques|Course 7 Module 4 Section 3 Leaf 4 Explore debugging techniques]]
