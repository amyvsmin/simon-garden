---
title: "NULL（缺失值）"
slug: null-value
aliases: [NULL, null, 空值, 缺失值, missing value, NULL value]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

## 定義
SQL 用來表示「值缺失／未知」的特殊標記、跟 `0`、空字串 `''`、`FALSE` 都不同；資料分析跟 outer join 都要懂 NULL 行為、否則容易撈錯資料。

## 關鍵面向
- **NULL ≠ 0、≠ ''、≠ FALSE**：三種空都是不同概念、混用會出錯
- **跟運算子互動的奇怪行為**：
  - `WHERE col = NULL` **不會** match NULL 列、要用 `WHERE col IS NULL`
  - `WHERE col != NULL` 也不對、要用 `WHERE col IS NOT NULL`
  - 任何運算（`NULL + 1`、`NULL = NULL`）結果都是 NULL（不是 TRUE 也不是 FALSE）
- **outer join 的 NULL 補位**：LEFT/RIGHT/FULL OUTER JOIN 對不上的列在另一邊欄位顯示 NULL；分析師看到 NULL 知道是「沒配對」、不是資料壞掉
- **找缺漏的標準手法**：`LEFT JOIN ... WHERE 對方表.id IS NULL` 撈出沒配對的列（找閒置設備、找沒拿設備員工等）
- **aggregate function 跟 NULL**：`COUNT(col)` 排除 NULL、`COUNT(*)` 含 NULL；`AVG`／`SUM` 排除 NULL（不算進去）

## 應用場景
- **Simon 工作場景**：ISO 27001 對帳找閒置設備（machine.assigned_to IS NULL）、員工表沒填 email 的人（email IS NULL）、audit log 缺欄位的紀錄
- **一般場景**：缺值處理是分析師基本功；資料清洗時要決定 NULL 是「保留／補預設值／刪除」、是 ETL 設計關鍵
- **跨領域**：Python pandas（NaN）、JavaScript（null vs undefined）、Excel（空儲存格）都有對應的 NULL 概念

## 相關概念
- [[sql-join]]：outer join 用 NULL 補位
- [[primary-key]]：PK 不可為 NULL（規則）
- [[foreign-key]]：FK 可為 NULL（表示無關聯）
- [[aggregate-function]]：COUNT 排除 NULL 是常見陷阱題

## 尚未解決的疑問
- COALESCE／NULLIF／IFNULL 等 NULL 處理函數、Course 4 沒深入
- 三值邏輯（TRUE／FALSE／NULL）如何跟 boolean 混算、進階 SQL 主題

## 來源
- [[2-introduction-to-databases|Course 4 Module 4 Section 1 Leaf 2: Introduction to databases]]
- [[1-join-tables-in-sql|Course 4 Module 4 Section 4 Leaf 1: Join tables in SQL]]
- [[2-types-of-joins|Course 4 Module 4 Section 4 Leaf 2: Types of joins]]
