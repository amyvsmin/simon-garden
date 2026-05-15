---
title: "漸進式知識庫長出"
slug: progressive-vault-growth
aliases: [漸進式知識庫長出, 漸進長出 vault, progressive vault growth, organic vault growth, 知識庫不一夜建好, 知識庫 v0.1 起步]
category: 生產力／AI
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

## 定義

知識庫從最少必要結構起步（通常 1–2 個資料夾）、隨實際使用慢慢長出其他子系統的演進路徑；對比「一開始就追求完整結構」的反模式、降低啟動成本跟維護負擔。

## 關鍵面向

- 起步門檻：Dustin 自述只放 `projects/` + `pillars/` 兩個資料夾、不追求完整
- 觸發長出的訊號：發現某類資料反覆寫到 projects 裡很彆扭 → 抽出新資料夾；發現某類查詢反覆做 → 建索引／日誌
- 常見演進順序：projects + pillars → decisions（未來決策）→ daily logs（日誌）→ weekly review → personal → insights → bookmarks
- 反對「一夜建好」：完整結構維護成本高、80% 子目錄沒在用反而干擾 AI 找路
- 對應 [[validate-then-upgrade]]：先用最簡方案驗證、再決定是否升級
- 自然語言驅動：每個新資料夾通常是「我想做 X 但現有結構放不下」觸發、有清楚 use case

## 應用場景

- Simon 工作場景：對照 SimonVault 從 v0.1 → v1.0 演進——KW γ 起跑時只有 `2-knowledge/readings/`，後續才長出 `concepts/`／`topics/`／`9-ops/changelog.jsonl`／course-notes 五層結構
- Simon 工作場景：未來新功能（topic md／seasonal review）不急著建空殼、等使用場景出現再建
- 一般場景：個人專案／公司 wiki 起跑、用 MVP 心態起步、別追求 day 1 完美

## 相關概念

- [[obsidian-claude-code-workflow]]：本概念是該工作流的演進心法
- [[validate-then-upgrade]]：Simon 既有偏好的具體落地
- [[surface-cost-first]]：起步成本低 → 不需要在第一輪就揭露大量設計成本

## 尚未解決的疑問

- Simon vault 下一個自然長出的子目錄會是什麼？目前候選：`topics/`（跨 concept 整合）、`weekly-review/insights/`（每週 AI 寫的工作模式觀察）
- 何時該主動 prune 沒在用的子目錄？

## 來源（自動維護）

- [[2026-05-13-dustin-obsidian-cross-project-vault]]
