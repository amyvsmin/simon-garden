---
title: ".remove() 方法（Remove Method）"
slug: remove-method
aliases: [remove method, .remove() 方法, remove, list remove, 移除方法]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

`.remove()` 是 [[list]] 的 [[method]]，移除「第一個出現」的指定元素。它只吃一個引數，而且引數是**元素值本身**（不是 index）。若 list 裡有重複的相同元素，`.remove()` 只移除第一個；被移除元素之後的元素都往前移一位、靠近清單開頭。

## 關鍵面向

- **一個引數、傳元素值**：`.remove("d")`，不是傳 index
- **只移第一個**：重複元素只移除第一次出現的
- **後續元素前移**：移除後其餘元素往前補位

## 應用場景

- Simon 工作場景：從惡意 IP 名單移除已解除封鎖的項目
- 一般場景：依值刪除清單中的特定資料

## 相關概念

- [[list]]：remove 作用的對象
- [[method]]：remove 是清單方法
- [[insert-method]]、[[append-method]]：其他清單增刪方法
- [[index-method]]：對照——index 也只回第一個出現

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/1-list-operations-in-python|Course 7 Module 3 Section 2 Leaf 1 List operations in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-2-work-with-lists-and-develop-algorithms/3-lists-and-the-security-analyst|Course 7 Module 3 Section 2 Leaf 3 Lists and the security analyst]]
