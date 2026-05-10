---
title: "外鍵（Foreign Key）"
slug: foreign-key
aliases: [foreign key, 外鍵, FK, 參照鍵, referencing key]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# 外鍵（Foreign Key）

## 定義
資料表中的欄位、其值對應到另一張表的 [[primary-key]]；用來建立兩表的關聯關係；可重複、可空（NULL 表示無關聯）、每張 table 可有多個。

## 關鍵面向
- **跟 PK 的對偶**：B 表中的 FK 指向 A 表的 PK；同一個欄、在 A 表是 PK、在 B 表是 FK
- **三大特性**（跟 PK 對比）：
  - 可重複（一張機器可分配給某個員工、多張機器可指向同一員工）
  - 可空（NULL 表示無關聯、例如沒分配給人的閒置設備）
  - 每表可多個（一張 audit log 表可有 user_id、device_id、ticket_id 多個 FK）
- **Referential integrity**（參照完整性）：FK 確保不能指向不存在的 PK、是 RDB 防止 orphan row 的機制
- **跟 [[sql-join]] 的關係**：FK 是 join 配對的基礎、`ON A.pk = B.fk` 是典型 join 條件

## 應用場景
- **Simon 工作場景**：機器表 `assigned_to` FK 指向員工表 PK；audit log `user_id`+`device_id` 兩個 FK 還原「誰在哪台機器做什麼」；ISO 27001 資產跟 owner 對應
- **一般場景**：訂單表 `customer_id` FK 指向客戶表、訂單明細 `order_id` FK 指向訂單表；任何「一對多」關係都用 FK 實作

## 相關概念
- [[primary-key]]：對偶概念、FK 指向的目標
- [[relational-database]]：FK 是 RDB 關聯的基礎
- [[sql-join]]：FK 配對 PK 的典型 join 條件
- [[null-value]]：FK 可為 NULL 表示無關聯

## 尚未解決的疑問
- ON DELETE CASCADE / SET NULL / RESTRICT 等 referential action 設計、Course 4 沒教
- 跨資料庫 FK（federation）實作機制、進階主題

## 來源
- [[2-introduction-to-databases|Course 4 Module 4 Section 1 Leaf 2: Introduction to databases]]
- [[1-join-tables-in-sql|Course 4 Module 4 Section 4 Leaf 1: Join tables in SQL]]
