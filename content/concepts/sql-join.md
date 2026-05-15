---
title: "SQL Join（多表合併）"
slug: sql-join
aliases: [SQL JOIN, join, 多表合併, 表合併, INNER JOIN, OUTER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

## 定義
把兩張或多張 table 用共同欄位（通常是 primary key/foreign key 配對）串起來、在一條 query 取跨表資訊；是 incident response 多表還原事件全貌、ISO 27001 資產對帳、漏洞影響範圍查詢的核心操作。

## 關鍵面向
- **四種 join 類型**：
  - `INNER JOIN`：交集、兩表都有的列
  - `LEFT JOIN`：左表全部 + 右表 match
  - `RIGHT JOIN`：右表全部 + 左表 match
  - `FULL OUTER JOIN`：兩表全部、對不上填 NULL
- **語法統一**：四種 join 語法相同、只換關鍵字；`FROM A INNER/LEFT/RIGHT/FULL OUTER JOIN B ON A.col = B.col;`
- **業界寫作慣例**：分析師預設用 LEFT JOIN、不用 RIGHT JOIN（讀程式由左到右、語感自然）；要 RIGHT 效果就對調表 + 用 LEFT
- **找缺漏的標準手法**：`LEFT JOIN ... WHERE 對方表.id IS NULL` 撈出沒配對的列、ISO 27001 資產對帳必備
- **方言陷阱**：MariaDB／MySQL **不支援原生** `FULL OUTER JOIN`、要用 `LEFT JOIN ... UNION ... RIGHT JOIN` 模擬；PostgreSQL／SQL Server 才有原生
- **Disambiguate**：兩表都有的欄要用 `tablename.column` 點號、不然 SQL 報錯

## 應用場景
- **Simon 工作場景**：**漏洞風險清單** machines INNER JOIN vulnerabilities ON os；**找閒置設備** assets LEFT JOIN employees WHERE employees.id IS NULL；**incident response** log + 員工 + 資產 + 漏洞四表 join 還原事件全貌；**audit 對帳** Omnissa MDM ↔ HR 系統 FULL OUTER JOIN 找雙向不一致
- **一般場景**：BI／報表跨表整合、SOC 多源 log 關聯分析

## 相關概念
- [[sql]]：JOIN 是 SQL 子集
- [[relational-database]]：JOIN 的目標模型
- [[primary-key]]／[[foreign-key]]：JOIN 配對的鍵
- [[null-value]]：outer join 補位用、找缺漏靠 IS NULL

## 尚未解決的疑問
- 大表 join 效能優化（index、query plan、hash join vs merge join）本課沒教、實務遇到再學
- Self-join、Cross join、Lateral join 等進階 join 類型沒教

## 來源
- [[1-join-tables-in-sql|Course 4 Module 4 Section 4 Leaf 1: Join tables in SQL]]
- [[2-types-of-joins|Course 4 Module 4 Section 4 Leaf 2: Types of joins]]
- [[3-compare-types-of-joins|Course 4 Module 4 Section 4 Leaf 3: Compare types of joins]]
- [[6-exemplar-complete-a-join|Course 4 Module 4 Section 4 Leaf 6: Exemplar Complete a join]]
