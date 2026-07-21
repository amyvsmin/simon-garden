---
title: "註解（Comment）"
slug: code-comment
aliases: [Comment, 註解, code comment, comments, 程式註解, 註釋, single-line comment, multi-line comment]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

註解是「程式設計師對程式背後意圖所做的註記」，說明這段程式碼在做什麼、為什麼這樣做，讓自己與他人更容易讀懂。Python 的單行註解以 `#` 開頭；多行註解有兩種寫法——連續多行 `#`，或用 [[docstring]]（不在首句位置的三引號字串）。[[pep-8]] 建議：註解要清楚、隨程式碼改動同步更新、每行（含註解）保持在 79 字元以內。最好在程式開頭用一句註解說明整支程式在做什麼。

## 關鍵面向

- **單行註解**：`#` 開頭
- **多行註解**：連續 `#`，或用 [[docstring]]（三引號字串）
- **[[pep-8]] 建議**：清楚、隨碼更新、每行 < 79 字元
- **說明「為什麼」**：好的註解解釋意圖，不只複述程式在做什麼

## 應用場景

- Simon 工作場景：在自動化函式開頭註明意圖與輸入輸出，未來自己或同事一看就懂
- 一般場景：提升程式可讀性、降低維護成本

## 相關概念

- [[pep-8]]：規範註解寫法
- [[docstring]]：可充當多行註解的三引號字串
- [[indentation]]：與註解同為可讀性的兩大要素
- [[style-guide]]：註解規範屬風格指南的一環

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/3-code-readability|Course 7 Module 2 Section 3 Leaf 3 Code readability]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
