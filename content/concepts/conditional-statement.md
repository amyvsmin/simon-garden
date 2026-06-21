---
title: "條件式（Conditional Statement）"
slug: conditional-statement
aliases: [Conditional statement, 條件式, 條件陳述, if statement, if 陳述, conditionals]
category: 資安
confidence: 已驗證
created: 2026-06-21
---

## 定義

條件式是「評估程式碼是否符合一組指定條件」的陳述，是程式做判斷、實現 [[automation]] 的關鍵。關鍵字 `if` 開啟條件式：Python 把條件評估成 True 或 False，只有 True 才執行指定動作。第一行（含 `if`、條件、冒號）叫 header，縮排的動作叫 body。可加 `elif`（前面條件 False 才評估、可多個）與 `else`（所有條件皆 False 才執行）。

## 關鍵面向

- **header／body 與縮排**：header 以冒號結尾；body 必須縮排，才會「只在條件 True 時執行」
- **[[comparison-operator]]**：`<`、`>`、`>=`、`<=`、`==`、`!=`；條件裡「等於」用雙等號 `==`、不是賦值的單一 `=`
- **elif 與 else**：`elif` 命中第一個 True 就停、不再看後面（與多個獨立 `if` 不同，後者每個都跑）；`else` 收尾
- **[[logical-operator]]**：`and`／`or`／`not` 組合多個條件；`not(A and B)` 的括號是必要的
- **資安語意**：把「失敗登入超過 N 次就鎖帳號」「OS 是某版本就提示更新」這類規則落地

## 應用場景

- Simon 工作場景：監看 web 服務按 HTTP 狀態碼分流告警、accounting 對帳金額不符就標記、存取控制「身分對且時間對才放行」（`and` 組合）
- 一般場景：輸入驗證、告警規則、分支流程控制

## 相關概念

- [[comparison-operator]]：條件裡比較兩值的運算子
- [[logical-operator]]：組合多條件的 and／or／not
- [[iterative-statement]]：迴圈常在 body 內嵌條件式（配 break／continue）
- [[automation]]：條件式是自動化判斷的核心

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/1-conditional-statements-in-python|Course 7 Module 1 Section 4 Leaf 1 Conditional statements in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/2-more-on-conditionals-in-python|Course 7 Module 1 Section 4 Leaf 2 More on conditionals in Python]]
