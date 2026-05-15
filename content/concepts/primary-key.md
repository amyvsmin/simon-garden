---
title: "主鍵（Primary Key）"
slug: primary-key
aliases: [primary key, 主鍵, PK, 唯一鍵, unique key]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

## 定義
資料表中的欄位（或欄位組合）、每列值唯一、不可空（NOT NULL）、每張 table 只能有一個；用來唯一識別每一列、是 SQL JOIN 的關聯依據。

## 關鍵面向
- **三大規則**：
  - 唯一（每列值不重複）
  - 不可空（不能 NULL）
  - 每表只有一個（不能多 PK、但可由多欄組成複合鍵 composite key）
- **跟 [[foreign-key]] 的關係**：A 表的 PK 在 B 表中當 FK、就建立兩表的關聯（一對多最常見）
- **典型實作**：自增整數 ID（`AUTO_INCREMENT` / `SERIAL`）、UUID、業務唯一碼（員工編號、發票號）
- **資安角度**：PK 不應外露給 attacker（避免 enumeration attack）、用 UUID 或 hash 替代 sequential ID 較安全

## 應用場景
- **Simon 工作場景**：公司資產表 `asset_id` 當 PK、員工表 `employee_id` 當 PK、audit log `event_id` 當 PK；ISO 27001 資產分類資料模型必設 PK
- **一般場景**：所有 RDB 表必設 PK、否則無法可靠 JOIN／UPDATE 單列；ORM 框架（sqlalchemy、Active Record）依賴 PK 識別

## 相關概念
- [[foreign-key]]：對偶概念、PK 在另一表的呈現
- [[relational-database]]：PK 是 RDB 的基礎機制
- [[sql-join]]：靠 PK／FK 配對 join
- [[null-value]]：PK 不可為 NULL

## 尚未解決的疑問
- 複合主鍵（composite PK）vs 單一 PK 的設計取捨、Course 4 沒教
- Surrogate key vs Natural key 設計哲學、需要實務經驗

## 來源
- [[2-introduction-to-databases|Course 4 Module 4 Section 1 Leaf 2: Introduction to databases]]
- [[1-join-tables-in-sql|Course 4 Module 4 Section 4 Leaf 1: Join tables in SQL]]
