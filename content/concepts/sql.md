---
title: "SQL（結構化查詢語言）"
slug: sql
aliases: [SQL, 結構化查詢語言, Structured Query Language, sequel]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# SQL（結構化查詢語言）

## 定義
存取關聯式資料庫的標準程式語言、可建立、互動、向資料庫請求資料；資安分析師日常處理大量結構化資料的核心工具、跟 Linux 共同構成分析師工具箱底層。

## 關鍵面向
- **三大動作**：create（建表）／interact（改資料）／request（query 取資料）；分析師多用 query
- **方言相容性**：MySQL／MariaDB／PostgreSQL／SQL Server／SQLite／Oracle 等實作差異小、95% 語法共通；遷移多半只改少數 vendor 特化部分（`LIMIT` vs `TOP`、字串拼接、日期函數）
- **跟 Linux 工具的分工**：Linux command line 處理純文字 log（grep／sed／cut／find）、SQL 處理結構化資料表；兩者互補、不互斥
- **資安角度的雙面性**：是分析師查 audit log 的主力、也是攻擊者 SQL injection 的目標；用 prepared statement / parameterized query 防注入

## 應用場景
- **Simon 工作場景**：公司 SQL Server MFA + Kerberos + Silverfort 專案要驗證 audit log；ISO 27001 資產表查詢；BIGFIX patch 報表；月度資安 KPI 簡報的失敗登入次數／未 patch 機器數／異常登入時段
- **一般場景**：incident response 多表 join 還原事件；vulnerability management 用 query 撈 CVE 影響範圍；compliance 報表撈特定條件記錄
- **跨課程引用**：Course 6 Detection 統計分析、Course 7 Python 自動化跟 SQL 連用、Course 8 工作面試 SQL 是必考

## 相關概念
- [[relational-database]]：SQL 的操作對象（資料模型基礎）
- [[sql-join]]：SQL 多表查詢的核心
- [[aggregate-function]]：SQL 計算統計用
- [[filtering-concept]]：SQL filtering 是 filtering 的其中一種（跟 Linux grep 並列）
- [[bash-shell]]：Linux 端進入 SQL 的入口（`sqlite3`、`sudo mysql organization` 都從 bash 啟）

## 尚未解決的疑問
- 跨方言遷移時最常踩的坑（SQL Server collation 跟 case-sensitivity）需要實際 production 才能熟
- GROUP BY + HAVING、Window function、CTE 等進階主題本課程沒教、需要自學

## 來源
- [[1-welcome|Course 4 Module 4 Section 1 Leaf 1: Welcome to module 4]]
- [[3-query-databases-with-sql|Course 4 Module 4 Section 1 Leaf 3: Query databases with SQL]]
- [[1-basic-queries|Course 4 Module 4 Section 2 Leaf 1: Basic queries]]
