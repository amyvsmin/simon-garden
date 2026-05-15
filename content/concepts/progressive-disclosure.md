---
name: 漸進式披露 / 按需讀取
aliases: [progressive disclosure, lazy loading, on-demand reading, 按需載入]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-81f4-b309-cc77a0abce92
---

## 定義

AI 不一次掃整個資料庫，只在需要時才讀對應資料夾或檔案的 token 控制心法，目的是讓 AI 能處理規模大但相關性稀疏的知識庫。對應 UX 設計領域的 progressive disclosure，把資訊分層展示而非一次推給使用者。

## 關鍵面向

- **跟雙層導航搭配**：CLAUDE.md 給 AI 索引，AI 依索引 fetch 需要的局部，不掃全庫
- **Daily notes 機制**：把每日工作摘要寫進 daily notes，next session 只讀最近幾天即可恢復脈絡，不用回放全部歷史
- **token 線性可控**：知識庫從 100 篇成長到 10000 篇，單次 session 的 token 消耗不變
- **跟 RAG 的關係**：RAG 是用向量檢索做按需讀取，本概念則是用結構化目錄做檢索；兩者可結合
- **代價**：依賴索引品質，若 CLAUDE.md 沒寫好對應位置，AI 可能 fetch 不到正確檔

## 應用場景

- Simon 工作場景：Knowledge Wiki 三 DB 用 Notion DB relation 取代向量做按需讀取；Claude Code SessionStart hook 注入最小必要 context；CLAUDE.md 全域偏好 + 專案級敏感資料兩層分流
- 一般場景：大型 codebase、長期累積的個人 vault、企業內部 wiki

## 相關概念

- [[claude-md-dual-nav]]：本概念的具體實作機制
- [[daily-notes]]：本概念在時間維度的延伸
- [[second-brain]]：本概念是讓第二大腦規模化的關鍵心法

## 尚未解決的疑問

- 索引失效時的備援策略（AI 找不到該讀哪個檔的時候）
- 結構化索引 vs 向量檢索的混合最佳比例

## 來源（自動維護）

- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
