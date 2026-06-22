---
title: "全域變數（Global Variable）"
slug: global-variable
aliases: [Global variable, 全域變數, global variable, 全局變數]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

全域變數是「整個程式都可取用的變數」，在函式定義之外賦值。不論在函式內或外呼叫，都讀得到它被賦的值。跟 [[local-variable]] 相對。要注意作用域陷阱：函式內可以「讀」全域變數，但用普通賦值去改一個同名變數，只會另外建立一個獨立的 [[local-variable]]、其實改不到全域變數本身（要真的改全域變數需另用 `global` 關鍵字）。最佳實務：變數名全程保持唯一、要把不同值傳進函式就用 [[parameter]] 而非依賴全域變數。

## 關鍵面向

- **函式外賦值、全程式可讀**：如程式開頭 `device_id = "7ad2130bd"`
- **函式內可讀、普通賦值改不到**：函式內 `device_id = ...` 只建一個同名的 [[local-variable]]、不動全域值
- **同名陷阱**：同名的全域與區域變數會並存、各有各的值
- **最佳實務**：唯一命名、用 [[parameter]] 傳值

## 應用場景

- Simon 工作場景：寫腳本時 log 路徑、告警門檻該用 parameter 傳入還是寫成全域，直接影響可維護性與可測試性
- 一般場景：謹慎管理共用狀態，避免意外覆寫

## 相關概念

- [[local-variable]]：相對概念，僅在函式內有效
- [[variable]]：全域／區域是變數的兩種作用域
- [[parameter]]：建議用它傳值，而非依賴全域變數
- [[function]]：作用域以函式為界

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-2-work-with-functions/3-functions-and-variables|Course 7 Module 2 Section 2 Leaf 3 Functions and variables]]
