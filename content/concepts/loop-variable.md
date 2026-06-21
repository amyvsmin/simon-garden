---
title: "迴圈變數（Loop Variable）"
slug: loop-variable
aliases: [Loop variable, 迴圈變數, loop variable, 迴圈控制變數, 迭代變數]
category: 資安
confidence: 已驗證
created: 2026-06-21
---

## 定義

迴圈變數是「用來控制迴圈迭代」的變數。在 [[for-loop]] 裡，它是 header 的一部分、緊接 `for`（常命名為 `i`，也可自取），是只在迴圈內用的暫時變數。在 [[while-loop]] 裡有關鍵差異——迴圈變數要在迴圈外先賦值、並在 body 內明確改變，否則會形成無窮迴圈。

## 關鍵面向

- **for vs while 的賦值位置**：for 在 header 內建立；while 要在迴圈外先賦值
- **命名慣例**：常用單字母 `i`，但可取任何符合命名規則的名字
- **暫時性（for）**：for 的迴圈變數只在迴圈內有效、外部不用
- **必須改變（while）**：while 的 body 內要明確改變它（如 `i = i + 1`），否則條件永遠 True

## 應用場景

- Simon 工作場景：寫批次處理或重試迴圈時，正確管理迴圈變數是避免無窮迴圈、確保跑對次數的關鍵
- 一般場景：計數、索引走訪、條件式重複

## 相關概念

- [[for-loop]]：迴圈變數在 header 內建立
- [[while-loop]]：迴圈變數要在迴圈外先賦值、body 內改變
- [[iterative-statement]]：迴圈變數是兩種迴圈共通的控制機制
- [[variable]]：迴圈變數是變數的特化用法

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/5-for-loops|Course 7 Module 1 Section 4 Leaf 5 For loops]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/6-while-loops|Course 7 Module 1 Section 4 Leaf 6 While loops]]
