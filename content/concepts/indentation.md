---
title: "縮排（Indentation）"
slug: indentation
aliases: [Indentation, 縮排, indentation, 縮進]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

縮排是「加在一行程式碼開頭的空格」。在 Python 它同時做兩件事——**改善可讀性**，並**確保程式正確執行**。[[conditional-statement]]、[[iterative-statement]]、函式定義的 body 都要縮排，Python 才知道這些行屬於該結構（例如 `print` 只在條件成立時執行）。縮排出錯分兩種情況：結構**完全沒有縮排的 body**（如 `if True:` 下一行直接頂格），程式根本無法解析、直接報 `IndentationError`；結構**已有合法 body**、後面某行退回外層，語法合法，那一行會被當成結構外的程式碼、不論條件都會執行，結果不對但不報錯（屬 [[logic-error]]）。[[pep-8]] 建議縮排用 4 個空格；巢狀時累加（while 迴圈裡的 if body 共縮 8 格）。

## 關鍵面向

- **行首空格**：標示某段程式屬於哪個結構
- **兼具可讀性與正確執行**：縮排錯誤會改變程式行為，不只是美觀問題
- **兩種縮排錯誤要分開**：`if True:\nprint(1)` 缺 body → `IndentationError: expected an indented block`（跑不起來）；`if x > 0:` 下有一行縮排的 body、下一行 `print("out")` 頂格 → 合法，`print("out")` 不受條件控制（跑得起來但可能邏輯錯）。兩者都經 Python 3.12 實跑確認
- **哪些要縮**：條件式、迭代陳述、函式定義的 body
- **[[pep-8]] 建議**：4 個空格、巢狀逐層累加

## 應用場景

- Simon 工作場景：寫條件與迴圈時靠正確縮排確保邏輯只在該執行時執行
- 一般場景：Python 用縮排（而非大括號）表達程式結構

## 相關概念

- [[pep-8]]：建議縮排 4 空格
- [[conditional-statement]]、[[iterative-statement]]：其 body 需縮排
- [[syntax-error]]：缺 body、多餘縮排會報 `IndentationError`（SyntaxError 子類）
- [[logic-error]]：合法但放錯區塊的縮排屬邏輯錯誤
- [[code-comment]]：與縮排同為可讀性要素

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/3-code-readability|Course 7 Module 2 Section 3 Leaf 3 Code readability]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
