---
title: "正規表達式（Regular Expression）"
slug: regular-expression
aliases: [Regular expression, regex, 正規表達式, regular expressions, regexp]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

正規表達式（regex）是「形成一個 pattern（樣式）的字元序列」，用來在字串（尤其 log 檔）裡搜尋符合該樣式的內容。比 [[index-method]] 強的地方：`.index()` 要知道確切字串才找得到、regex 只要描述「結構」（如 email 長什麼樣）就能撈出所有符合結構的字串，不必事先知道具體值。在 Python 要先 import [[re-module]]、用 [[re-findall]] 執行。pattern 由英數字元與特殊符號組成——字元類 `\w`／`\d`／`\s`／`.`／`\.`，量詞 `+`／`*`／`{n}`／`{n,m}`。

## 關鍵面向

- **形成 pattern 的字元序列**：用來搜尋符合樣式的內容
- **只需結構、不需確切值**：勝過 `.index()` 的關鍵
- **符號組成**：字元類（配哪種字元）＋量詞（配幾次）
- **特殊字元要跳脫**：如句點寫 `\.` 才是字面句點

## 應用場景

- Simon 工作場景：一次從幾千行 log 撈出所有 email、所有特定網段的 IP、所有符合某格式的 ID——log 分析的大殺器
- 一般場景：文字資料的 pattern 比對與萃取（grep、SIEM 規則同源）

## 相關概念

- [[re-module]]：提供 regex 功能的標準庫模組
- [[re-findall]]：執行 regex、回傳所有相符項
- [[string]]：regex 搜尋的對象、且 regex 本身以字串儲存
- [[index-method]]：對照——只能找確切值的較弱搜尋

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-3-regular-expressions/1-regular-expressions-in-python|Course 7 Module 3 Section 3 Leaf 1 Regular expressions in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-3-work-with-strings-and-lists/section-3-regular-expressions/2-more-about-regular-expressions|Course 7 Module 3 Section 3 Leaf 2 More about regular expressions]]
