---
title: "變數（Variable）"
slug: variable
aliases: [Variable, 變數, variables]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

變數是「儲存資料的容器」，是電腦記憶體中一個具名的儲存位置，存著某個 [[data-type]] 的值，而且值可以變。像貼了標籤的箱子——換掉箱子裡的東西，箱子上的標籤不變。建立變數要：取名字 → 加等號 `=` → 放要存的物件，這動作叫 assignment（賦值）；定義後可隨時換內容，叫 reassignment（重新賦值），甚至能換成不同型別。

## 關鍵面向

- **assignment / reassignment**：`device_ID = "h32rb17"` 賦值；之後 `device_ID = "n73ab07"` 重新賦值，名字不變、內容變
- **calling（呼叫）**：打變數名就是叫 Python 用裡面的值；放進 `print()` 印變數時不加引號（加了會被當成字面文字）
- **型別自動判定**：Python 執行時依值自動判定型別；變數型別＝目前所存物件的型別，可用 [[type-function]] 查
- **命名規則（硬性）**：只用字母／數字／底線、大小寫敏感（`time`≠`Time`）、不可用保留字（True、False、if）
- **命名風格**：底線分隔多字（snake_case）、名稱要描述資料（`num_login_attempts`）；另有 camelCase 慣例

## 應用場景

- Simon 工作場景：腳本到處用變數存 device ID、登入次數、允許清單、IP 位址；可讀一致的命名讓另一個芙莉蓮或未來的自己一眼讀懂
- 一般場景：任何程式的狀態保存、組態值、計數器

## 相關概念

- [[data-type]]：變數存的值有型別、且型別可隨重新賦值改變
- [[type-function]]：查變數目前的資料型別
- [[type-error]]：型別不相容（如字串 + 數字）造成的錯誤
- [[conditional-statement]]、[[iterative-statement]]：條件與迴圈都靠變數控制狀態

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/3-work-with-variables-in-python|Course 7 Module 1 Section 3 Leaf 3 Work with variables in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/4-assign-and-reassign-variables-in-python|Course 7 Module 1 Section 3 Leaf 4 Assign and reassign variables in Python]]
