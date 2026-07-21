---
title: "子字串（Substring）"
slug: substring
aliases: [Substring, 子字串, substrings, 子串]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

子字串是「字串內一段連續的字元」（例如 `"llo"` 是 `"hello"` 的 substring）。可用 [[index-method]]（`.index()`）找子字串、回傳其「開頭那個字元所在的位置編號」。陷阱：搜尋的子字串太短時，可能撞到別的字串開頭——例如在 `"tsnow, tshah, ..."` 裡找 `"ts"` 會回 0（命中 `tsnow`），而不是 `tshah` 的 7。

## 關鍵面向

- **字串內的連續字元段**：`"llo"` ⊂ `"hello"`
- **用 `.index()` 找**：回傳子字串開頭字元的位置編號（不是回字元本身）
- **太短會誤命中**：找子字串要夠精確，否則撞到其他字串開頭

## 應用場景

- Simon 工作場景：在一串使用者名單裡精確定位某帳號、避免關鍵字太短誤命中
- 一般場景：文字搜尋、部分比對

## 相關概念

- [[string]]：子字串是字串的一部分
- [[index-method]]：用來尋找子字串
- [[slice]]：用切片取出指定範圍的子字串

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-1-working-with-strings/4-strings-and-the-security-analyst|Course 7 Module 3 Section 1 Leaf 4 Strings and the security analyst]]
