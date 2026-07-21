---
title: "元組（Tuple）"
slug: tuple
aliases: [Tuple, 元組, tuple data, 元組資料, 不可變序列]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

元組（tuple）是一種 [[data-type]]，由「不可變更」的資料集合組成、放在小括號 `()` 內。跟 list 一樣可含不同型別的元素，但最大差別是——list 元素可改、tuple 不可改。tuple 也比 list 省記憶體，適合處理大量資料。

## 關鍵面向

- **不可變（immutable）**：定義後元素不能改，是與 list 的核心差異
- **語法**：用小括號 `()`，如 `("wjaffrey", "arutley", "dkot")`
- **省記憶體**：比 list 更高效、適合大量資料
- **資安用途**：把軟體識別碼存成 tuple 確保不被竄改，就能保證存取控制清單（access control list / ACL）只會擋掉指定的軟體

## 應用場景

- Simon 工作場景：把允許的軟體 ID、白名單、固定設定存成 tuple，程式執行過程中不會被意外改掉，符合 ISO 27001 對組態完整性的要求
- 一般場景：常數集合、函式回傳多值、字典的 key

## 相關概念

- [[data-type]]：tuple 是課程介紹的延伸型別之一
- 存取控制清單（access control list / ACL）：tuple 的不可變特性保障 ACL 行為可預期
- [[variable]]：tuple 常存進變數當不可變的設定

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-3-core-python-components/2-more-about-data-types|Course 7 Module 1 Section 3 Leaf 2 More about data types]]
