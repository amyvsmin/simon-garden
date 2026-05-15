---
name: 日誌可追
aliases: [Audit Log, 變更日誌, Action Log]
category: 自動化
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81d3-ac1f-f6287d327cae
---

## 定義

所有 AI 對知識庫的動作（讀了哪篇、建了哪頁、改了哪個連結）寫進 Log 檔，讓使用者能追溯歷史，AI 自己下次也知道做過什麼、避免重做。

## 關鍵面向

- append-only：歷史不修改、只追加
- 機器可解析：JSON 或 JSONL 比 Markdown 更易自動讀寫
- 短期 vs 長期：短期保留全量、長期可壓縮或封存

## 應用場景

- Simon 工作場景：Notion KW 的「變更日誌」DB（已搬到 vault `9-ops/changelog.jsonl`）；任何 AI Agent 系統、自動化 pipeline、ISO 27001 內稽軌跡都需要這層
- 一般場景：n8n flow 執行記錄、CI/CD 部署記錄、ChatGPT 對話歷史檔

## 相關概念

- [[raw-wiki-split]]：搬遷動作要寫進日誌
- [[index-based-knowledge-base]]：索引 + 日誌構成完整知識庫

## 尚未解決的疑問

- 日誌過大時的封存策略（180 天保留窗口是否夠用）

## 來源（自動維護）

- [[2026-04-29-karpathy-obsidian-claude-wiki]]
