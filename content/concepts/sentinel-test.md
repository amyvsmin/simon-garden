---
name: Sentinel 測試法
aliases: [sentinel testing, production-DB testing, 1900-01-01 錨點]
category: 自動化
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34cf85da-554f-81a0-96c9-d4ab064fb337
---

# 定義

在 production DB 直接跑 schema 或 API 能力測試，不建獨立測試 DB；以絕對不會和真實資料衝突的 sentinel 日期（例 1900-01-01）當識別錨點，搭配前綴命名（[TEST-PHASE-N]）便於人眼辨識殘留。

# 關鍵面向

- **為什麼不建測試 DB**：測試 DB 和 production DB 的 schema 會漂移、建置成本、每次 schema 改動要同步改兩邊。單人小系統的綜合成本高於在 production 跑
- **sentinel 選法**：日期欄位用 1900-01-01（主）、2099-12-31（備）；title 前綴 `[TEST-PHASE-N]`；確保 query 篩得出也肉眼看得出
- **清理責任**：MCP 不支援封存時由使用者手動刪；sentinel 讓殘留一眼識別。和方案 A（自動清理）的權衡：便利性 vs 資料可見性
- **限制**：不適用於有多 user、production data 敏感、schema 測試可能破壞現有資料的場景

# 應用場景

- Simon 工作場景：Notion MCP 能力驗證，Simon-Journal Phase 1–5 測試全用 sentinel 1900-01-01 跑在生產力日記 TTL DB；單人自用工具 schema 改動驗收
- 一般場景：MCP / API 能力矩陣建立、個人 Notion DB 結構調整

# 相關概念

- [[reverse-skill-design]]：反推出規則後 Sentinel 是驗證 MCP 能否實作該規則的配套手段
- [[simplicity-over-control]]：選擇 Sentinel 而非建測試 DB，同樣屬於降低流程阻力的決策

# 尚未解決的疑問

- 和 team production DB 協作時可否用（風險：同事誤看 sentinel 頁當真資料）
- sentinel 日期被其他自動化誤撈的風險

# 來源（自動維護）

- [[2026-04-24-simon-journal-skill-design]]
