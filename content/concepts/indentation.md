---
title: "縮排（Indentation）"
slug: indentation
aliases: [Indentation, 縮排, indentation, 縮進]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

縮排是「加在一行程式碼開頭的空格」。在 Python 它同時做兩件事——**改善可讀性**，並**確保程式正確執行**。[[conditional-statement]]、[[iterative-statement]]、函式定義的 body 都要縮排，Python 才知道這些行屬於該結構（例如 `print` 只在條件成立時執行）；不縮排會讓該行被當成結構外的程式碼、變成「永遠執行」。[[pep-8]] 建議縮排用 4 個空格；巢狀時累加（while 迴圈裡的 if body 共縮 8 格）。

## 關鍵面向

- **行首空格**：標示某段程式屬於哪個結構
- **兼具可讀性與正確執行**：縮排錯誤會改變程式行為，不只是美觀問題
- **哪些要縮**：條件式、迭代陳述、函式定義的 body
- **[[pep-8]] 建議**：4 個空格、巢狀逐層累加

## 應用場景

- Simon 工作場景：寫條件與迴圈時靠正確縮排確保邏輯只在該執行時執行
- 一般場景：Python 用縮排（而非大括號）表達程式結構

## 相關概念

- [[pep-8]]：建議縮排 4 空格
- [[conditional-statement]]、[[iterative-statement]]：其 body 需縮排
- [[syntax-error]]：縮排錯誤是常見錯誤之一
- [[code-comment]]：與縮排同為可讀性要素

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/3-code-readability|Course 7 Module 2 Section 3 Leaf 3 Code readability]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
