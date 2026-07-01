---
title: "漸進式披露 / 按需讀取"
slug: progressive-disclosure
aliases: [progressive disclosure, lazy loading, on-demand reading, 按需載入]
category: AI
confidence: 已驗證
created: 2026-05-05
---

## 定義

AI 不一次掃整個資料庫，只在需要時才讀對應資料夾或檔案的 token 控制心法，目的是讓 AI 能處理規模大但相關性稀疏的知識庫。對應 UX 設計領域的 progressive disclosure，把資訊分層展示而非一次推給使用者。

> 打個比方：像 Google Maps 導航——它不會一次把整條路線每個細節唸完，而是先給大方向（往北、10 分鐘後右轉），快到路口才報「前方 50 公尺右轉」，中途想找加油站才載入附近資訊。AI 讀知識庫也一樣：用多少、拿多少，不把整庫塞進腦袋。（高見龍〈Claude Code Skills〉）

<p align="center"><img src="assets/covers/progressive-disclosure-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **跟雙層導航搭配**：CLAUDE.md 給 AI 索引，AI 依索引 fetch 需要的局部，不掃全庫
- **Daily notes 機制**：把每日工作摘要寫進 daily notes，next session 只讀最近幾天即可恢復脈絡，不用回放全部歷史
- **token 線性可控**：知識庫從 100 篇成長到 10000 篇，單次 session 的 token 消耗不變
- **跟 RAG 的關係**：RAG 是用向量檢索做按需讀取，本概念則是用結構化目錄做檢索；兩者可結合
- **代價**：依賴索引品質，若 CLAUDE.md 沒寫好對應位置，AI 可能 fetch 不到正確檔
- **Anthropic Skills 的三層實作（旗艦範例）**：Claude Code 的 [[skill]] 是這個心法最具代表性的官方實作，把 skill 內容分三層、按需載入。第一層 metadata（中繼資料，只有名稱和描述、約 100 tokens、啟動時全預載，用來比對「這任務跟哪個 skill 有關」）；第二層 instructions（`SKILL.md` 主體、建議 5000 tokens 內、判定相關才載）；第三層 resources（`scripts/`／`references/`／`assets/`，用到哪個檔才讀哪個）。正因為分層按需，單一 skill 能打包的知識量理論上沒有上限——把心法從抽象的「按需讀取」補上了「一個 skill 具體怎麼分層、每層多少量級」。（高見龍〈Claude Code Skills〉）

## 應用場景

- Simon 工作場景：Knowledge Wiki 三 DB 用 Notion DB relation 取代向量做按需讀取；Claude Code SessionStart hook 注入最小必要 context；CLAUDE.md 全域偏好 + 專案級敏感資料兩層分流
- 一般場景：大型 codebase、長期累積的個人 vault、企業內部 wiki

## 相關概念

- [[claude-md-dual-nav]]：本概念的具體實作機制
- daily-notes：本概念在時間維度的延伸
- [[second-brain]]：本概念是讓第二大腦規模化的關鍵心法

## 尚未解決的疑問

- 索引失效時的備援策略（AI 找不到該讀哪個檔的時候）
- 結構化索引 vs 向量檢索的混合最佳比例

## 來源（自動維護）

- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
- [[2026-07-01-kaochenlong-claude-code-skills]]
