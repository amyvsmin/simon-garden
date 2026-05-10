---
title: "關聯式資料庫"
slug: relational-database
aliases: [關聯式資料庫, relational database, RDB, RDBMS, 關聯式 DB]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# 關聯式資料庫

## 定義
以資料表（table）為儲存單位、表內有欄（column）跟列（row）、表跟表透過共同鍵值（primary key／foreign key）產生關聯的結構化資料庫；是 SQL 的操作對象、企業資安資料（audit log、資產清單、員工表、權限表）多半住在這。

## 關鍵面向
- **三層結構**：database → table → column／row
- **跟非結構化資料庫的差**：RDB 強 schema、適合結構化資料（trade-off：schema 變更成本高）；NoSQL（MongoDB、Redis）適合非結構化／半結構化（trade-off：缺 join、缺 ACID）
- **PK/FK 模型**：[[primary-key]] 唯一識別每列、[[foreign-key]] 指向另一表 PK 用於 [[sql-join]]；是 RDB 的靈魂
- **ACID**（Atomicity／Consistency／Isolation／Durability）：transaction 保證、企業 production 必備；本課程沒深入但職涯必懂

## 應用場景
- **Simon 工作場景**：公司 SQL Server 用於 IT 資產 CMDB／員工權限表／audit log；ISO 27001 資產分類也是典型 RDB 結構
- **一般場景**：所有需要結構化關聯的企業資料—HR、ERP、CRM、CMS 後端、log 集中式儲存
- **跨課程引用**：Course 5 Assets 的資產分類資料模型、Course 7 Python 連 RDB 用 ORM／sqlalchemy

## 相關概念
- [[sql]]：操作 RDB 的標準語言
- [[primary-key]] + [[foreign-key]]：RDB 的識別跟關聯機制
- [[sql-join]]：跨表查詢的核心
- 跟 NoSQL 對比（待新建 concept）

## 尚未解決的疑問
- ACID／transaction／isolation level 本課程沒深入、實務遇到再學
- Database normalization（1NF～3NF／BCNF）等資料庫設計理論本課程沒教

## 來源
- [[2-introduction-to-databases|Course 4 Module 4 Section 1 Leaf 2: Introduction to databases]]
