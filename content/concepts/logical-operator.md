---
title: "邏輯運算子（Logical Operator）"
slug: logical-operator
aliases: [Logical operator, 邏輯運算子, logical operators, and or not, 布林運算子, boolean operator]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

邏輯運算子用來把多個條件組合成更複雜的判斷，是 [[conditional-statement]] 的延伸。三個：`and`（兩邊條件都要 True 才成立）、`or`（兩邊只要一個 True 就成立）、`not`（反轉條件：True 變 False、False 變 True）。

## 關鍵面向

- **and**：兩條件皆 True 才成立，如 `status >= 200 and status <= 226`（成功回應）
- **or**：一條件 True 即成立，如 `status == 100 or status == 102`（資訊回應）
- **not 與括號**：`not(A and B)` 的括號是必要的——Python 先算括號內、再對整體取反；少了括號 `not` 只作用第一個條件、邏輯就錯
- **回傳 Boolean**：組合結果仍是 True／False，餵給 if／while

## 應用場景

- Simon 工作場景：存取控制「來源 IP 在白名單 **且** 時間在上班時段」（and）、複合例外規則取反（not）；這類複合條件放錯括號會讓規則悄悄失效、是最難抓的邏輯 bug
- 一般場景：權限判斷、多條件篩選、範圍檢查

## 相關概念

- [[conditional-statement]]：邏輯運算子組合條件式的多個條件
- [[comparison-operator]]：被 and／or／not 組合的單一比較
- [[data-type]]：運算結果是 Boolean 型別

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/2-more-on-conditionals-in-python|Course 7 Module 1 Section 4 Leaf 2 More on conditionals in Python]]
