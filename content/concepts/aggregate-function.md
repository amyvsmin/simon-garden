---
title: "聚合函數（Aggregate Function）"
slug: aggregate-function
aliases: [aggregate function, aggregate, 聚合函數, COUNT, AVG, SUM, MIN, MAX]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# 聚合函數（Aggregate Function）

## 定義
對多筆資料做計算、回傳單一結果（不是回傳原始資料）的 SQL 函數；本課程教三個常用—`COUNT`／`AVG`／`SUM`；是月度資安 KPI 報表跟 incident detection baseline 比較的核心工具。

## 關鍵面向
- **跟一般 SELECT 的差**：一般 query 取 raw data、aggregate 只取計算結果（如「客戶總數」「平均訂單金額」）
- **三個常見函數**：
  - `COUNT(col)`：算列數、排除 NULL
  - `COUNT(*)`：算全表列數、含 NULL
  - `AVG(col)`：算平均、numeric only
  - `SUM(col)`：算總和、numeric only
- **跟 WHERE 組合**：`SELECT COUNT(*) FROM logs WHERE success = FALSE;` 算失敗登入次數
- **進階延伸（本課沒教）**：`GROUP BY` + `HAVING` 是 aggregate 真正威力、`SELECT country, COUNT(*) FROM customers GROUP BY country` 算每國客戶數
- **資安實務的 baseline 比較**：當天 aggregate vs 過去 30 天平均、超過 N 倍就 alert、是 SOC detection 標準手法

## 應用場景
- **Simon 工作場景**：**月度資安 KPI** 完全靠 aggregate—`COUNT(*) FROM login_attempts WHERE success = FALSE` 算失敗登入次數、`COUNT(DISTINCT username)` 算境外登入帳號數、`SUM(bytes_sent)` 算對外傳輸量；ISO 27001 月報、BIGFIX patch 覆蓋率
- **一般場景**：BI／報表平均值／中位數、業績總和、用戶量統計

## 相關概念
- [[sql]]：aggregate function 是 SQL 子集
- [[anomaly-detection]]：baseline 比較的計算工具
- [[filtering-concept]]：先 filter 再 aggregate、`COUNT(*) FROM x WHERE ...`

## 尚未解決的疑問
- `GROUP BY` + `HAVING` 進階組合、Course 4 沒教、自學
- Window function（每列同時看「整體 + 自身位置」）、SQL 進階主題

## 來源
- [[9-continuous-learning-in-sql|Course 4 Module 4 Section 4 Leaf 9: Continuous learning in SQL]]
