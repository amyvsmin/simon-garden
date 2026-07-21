---
title: "演算法（Algorithm）"
slug: algorithm
aliases: [Algorithm, 演算法, 算法, algorithms]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

演算法是「解決問題的一組規則」——更精確地說，是「取得問題的輸入 → 用輸入執行任務 → 回傳一個解答作為輸出」的一連串步驟。日常類比：泡咖啡的固定步驟（拿杯、加水加粉、按鍵、等待、享用）。設計演算法的核心心法：**把大問題拆成小問題**——先解單一情況，再用 [[for-loop]] 把解法套到整批資料。

## 關鍵面向

- **輸入 → 執行任務 → 輸出**的步驟集合
- **拆解問題**：先解一個元素、再用迴圈套到每個
- **常見實作模式**：建空 [[list]] → for 走訪 → 每次 [[append-method|append]] 處理結果
- **組合多個概念**：常同時用到 list、string、[[slice]]、loop

## 應用場景

- Simon 工作場景：從一批 IP 擷取每個的網段（`slice` 取前三碼 ＋ `for` 走訪 ＋ `append` 收集），是 log 分析的真實演算法
- 一般場景：把任何重複性處理邏輯系統化、可複用

## 相關概念

- [[for-loop]]、[[iterative-statement]]：演算法常用迴圈套用到整批
- [[list]]、[[string]]、[[slice]]：演算法操作的資料與手法
- [[append-method]]：迴圈裡收集結果的常見步驟

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/2-write-a-simple-algorithm|Course 7 Module 3 Section 2 Leaf 2 Write a simple algorithm]]
