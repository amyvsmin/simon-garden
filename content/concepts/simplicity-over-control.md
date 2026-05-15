---
name: 簡化流程 > 資料主控
aliases: [simplicity over ownership, 流程 > 主控, 2026-04-24 決策動機]
category: 生產力
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34cf85da-554f-8171-a1ef-c0cf8fba891b
---

## 定義

Simon 2026-04-24 工具選擇的動機優先序。當兩個工具分別在「流程阻力最小」和「資料檔案自主保存」上有優勢時，選前者。三家 AI 建議比對後的共識驅動這次反轉。

## 關鍵面向

- **反轉點**：2026-04-23 晚 Simon 原本偏「Obsidian 當日記 sink」（資料主控優先）；04-24 早盤比對 ChatGPT / Gemini / Claude 三家建議，都指出 Obsidian 作 sink 會新增流程阻力（檔案操作、衝突處理、跨裝置同步）
- **判準**：每次選工具時，問「這個選擇每天要多花多少動作？」動作數量 × 頻率 > 資料主控的長期效益時，就該選簡化
- **不是否定資料主控**：vault 仍然保留當知識庫（低頻、純文字、Obsidian 原生優勢強）。只是不再把「資料主控」當首要動機
- **適用條件**：高頻流程（日記每天跑）、個人單用（不需企業級可審計性）、工具成熟度差距大（Notion MCP 直通 vs Obsidian 要自己串）

## 應用場景

- Simon 工作場景：Notion vs Obsidian 分工、Heptabase 退訂、skill 格式決策（Phase 3.6 rich text 可寫入但 Simon 選純文字方向 A）、sentinel 測試法不建測試 DB
- 一般場景：個人工具選型、自動化 vs 手控的判斷、訂閱 vs 自架的決策

## 相關概念

- [[pure-receive-immediate-write]]：降低寫作阻力的具體實作
- [[directory-as-trigger]]：降低啟動阻力的具體實作
- [[sentinel-test]]：降低測試建置阻力的具體實作

## 尚未解決的疑問

- 什麼情況下應該反過來優先「資料主控」（例資料敏感度高、供應商鎖定風險大時）
- 這個優先序是否適用於工作場景（ISO 27001、資安 KPI）而不只個人場景

## 來源（自動維護）

- [[2026-04-24-simon-journal-skill-design]]
