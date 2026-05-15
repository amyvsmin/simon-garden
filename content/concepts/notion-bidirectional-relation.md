---
name: Notion 雙向 relation 自動關聯設計
aliases: [two-way relation, Notion relation 同步, 雙向同步]
category: 自動化
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34df85da-554f-81f4-9f6e-d9c28999a8b2
---

## 定義

Notion DB 之間的 relation 設定為雙向時，從任一邊填值，另一邊會自動同步出現對應 relation；自動化寫入時只需要操作一邊，省一次 API call、降低失敗點。

## 關鍵面向

- **雙向 vs 單向**：建立 relation 時可選 two-way；雙向才會自動同步
- **limit 配置**：每個 relation 可設 limit（1 個 vs 多個），影響資料模型
- **可從任一邊填**：寫入端可以是 Project、Action 或復盤頁，結果一致
- **fetch schema 看得到**：data-source state 裡的 relation 屬性會列出對端 dataSourceUrl

## 應用場景

- Simon 工作場景：週復盤 skill 從復盤頁這邊填 Project（LifeOS）relation，Project DB 那邊「週復盤」relation 自動出現。Action 同理。原本要兩次 API call，現在一次
- 三 DB 共構案例：OKR / Projects / Action 互相 relation，加上週復盤 DB 雙向連 Projects 跟 Action，整個生態系一致
- 一般場景：任何多 DB 互關聯的場景，設計 schema 時優先選雙向

## 相關概念

- [[module-no-duplicate]]：雙向 relation 讓邊界更清楚

## 尚未解決的疑問

- 當 schema migration 改變 relation 時的同步策略

## 來源（自動維護）

- [[2026-04-25-weekly-review-skill-design]]
