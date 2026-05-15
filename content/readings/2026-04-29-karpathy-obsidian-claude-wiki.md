---
title: Andrej Karpathy 的 Obsidian + Claude Code 個人 Wiki 做法
date: 2026-04-29
type: 來源分析
url: https://www.youtube.com/watch?v=FdSO1Yhr76I
tags: [obsidian, claude-code, knowledge-management, karpathy]
concepts: [index-based-knowledge-base, raw-wiki-split, graph-emergence, log-traceability, instructions-file]
inbox-id: 34df85da-554f-8140-9281-c79f81f78b79
notion-page-id: 351f85da-554f-81c3-a982-e63749882c27
---

## 摘要

Paula 拆解 Andrej Karpathy 在 X 上分享的個人知識庫做法：用 Obsidian 當載體，靠 Claude Code 自動讀文章、產 Wiki 頁、寫索引、留日誌。架構只有兩個資料夾——Raw 收原料、Wiki 放 AI 整理產出，加上一份 Index 當全庫目錄、一份 Log 留稽核軌跡、一份 claude.md 當 AI 常駐指令。Karpathy 用此法管理約 100 篇文章，發現不必自建 RAG，讓 LLM 直接維護索引就夠用。Paula 實作示範收錄兩篇文章，AI 自動萃取概念、人物、來源三類頁面，產出共用節點形成知識圖。

## 核心概念

- [[index-based-knowledge-base]]：一份 Index 取代向量搜尋，AI 靠目錄找頁面
- [[raw-wiki-split]]：Raw 與 Wiki 兩資料夾把原始素材跟 AI 產出明確切開
- [[graph-emergence]]：跨文章共用概念由 AI 自動建立連結，文章越多圖越密
- [[log-traceability]]：Log 檔把 AI 每個動作存證，可追溯也避免重做
- [[instructions-file]]：claude.md 當 AI 常駐合約，省下每次重新解釋專案的成本

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- **校對 Knowledge Wiki 設計**：Simon 的 Notion KW（資訊收集箱／概念庫／閱讀頁／變更日誌）跟 Karpathy 的（Raw／Wiki Concepts／Wiki Sources／Log）是同構結構，可確認自己流程沒漏掉哪個角色，例如「Index 頁」這層 Simon 目前散在 Notion 三 DB 各自的 view，沒有單一目錄頁，未來可考慮加一份「主索引閱讀頁」統一導引
- **Obsidian vault 補位**：Simon 4/22 才剛把 Obsidian vault 搬到 Windows 原生路徑，可在同 vault 試做 Raw／Wiki 雙資料夾 + claude.md 的副本實驗，不影響 Notion 主流程，純做小規模對照
- **指令檔分層**：Simon 已有全域 + 專案 CLAUDE.md 兩層，可比對 Karpathy 的單層 claude.md 看自己的分層是否過度
- **n8n 自動化點**：可把 RSS／LINE 抓進來的內容直接落到 Obsidian Raw 資料夾，再觸發 Claude Code 收錄，當作 Notion KW 之外的副本實驗

## 原文要點

- Karpathy 在 X 公開 prompt（Gist 連結）；他用此法管理約 100 篇文章
- 兩資料夾結構：Raw（收件匣）+ Wiki（AI 產出），Wiki 內含 Concepts／Entity／Source 三類頁
- Index 與 Log 是核心：前者讓查詢快、後者讓動作可追溯
- 跟 RAG 的差異：無向量、無 embedding、無相似度搜尋；上限約數百篇文章
- 三種使用情境：跨文章提問、找知識缺口、讓 AI 抓外部資料補洞
- 限制：Claude Code 付費、收錄慢（每篇數分鐘）、Token 隨庫成長、規模有上限

## 原始連結

- YouTube：https://www.youtube.com/watch?v=FdSO1Yhr76I
- 來源：影片字幕 v0.3 路徑（yt-transcript.py、原語言英文）
- 字幕長度：10054 字
