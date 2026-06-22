---
title: "字串（String）"
slug: string
aliases: [String, 字串, string data, 字串資料, strings]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

字串是「由有序字元序列組成的資料」，是 [[data-type]] 之一，寫在引號內（單或雙引號皆可、本課用雙引號）。在資安最常用來存「不需做數學運算」的資訊：IP 位址、使用者名稱、URL、員工與裝置 ID。可用 [[index-concept|index]]／[[slice]] 取出部分、用 [[method]]（如 `.upper()`／`.lower()`／`.index()`）處理、用 [[str-function]] 從別的型別轉成字串。字串是 [[immutability|不可變]]的——建立後不能改其中的字元。

## 關鍵面向

- **引號內的有序字元**：如 `"Hello"`、`"192.168.1.1"`
- **資安常見字串資料**：IP、username、URL、員工／裝置 ID
- **不可變（immutable）**：要「修改」其實是產生新字串
- **可被 index／slice／method 處理**：取字元、取片段、轉大小寫、搜尋

## 應用場景

- Simon 工作場景：log 與識別碼解析——切出 IP 片段、驗證帳號格式、定位 URL 的某段
- 一般場景：所有文字資料的處理與比對

## 相關概念

- [[data-type]]：字串是資料型別之一
- [[index-concept|index]]、[[slice]]、[[bracket-notation]]：取字串的字元或片段
- [[method]]、[[index-method]]：字串方法（upper／lower／index）
- [[immutability]]：字串不可變
- [[str-function]]、[[substring]]、[[string-concatenation]]：字串相關操作

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/2-string-operations|Course 7 Module 3 Section 1 Leaf 2 String operations]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
