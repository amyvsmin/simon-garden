---
name: 圖譜浮現
aliases: [Knowledge Graph, 雙向連結, Backlink, 共用概念]
category: 自動化
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8148-8a9f-c54df4437ef8
---

## 定義

多篇文章被分別萃取概念後，AI 自動發現跨文章共用節點（例如 continuous learning），把不同文章經由共用概念連起來形成知識圖譜；文章越多，連結越密。

## 關鍵面向

- 自動產生：不靠人工手動建 backlink
- 越用越密：文章累積會自然增加共用節點
- 對應 Obsidian graph view、Notion DB relation rollup

## 應用場景

- Simon 工作場景：概念庫的「相關概念」relation 就是這個機制的具現，會隨閱讀頁累積自然增密；vault 的 wikilink 也是同邏輯
- 一般場景：研究文獻探勘、跨領域學習圖譜化

## 相關概念

- [[index-based-knowledge-base]]：圖譜在索引基礎上自然浮現
- [[graph-emergence]] 跟 [[second-brain]] 互為實作 / 結果

## 尚未解決的疑問

- 圖譜太密反而難導航時的視覺化策略

## 來源（自動維護）

- [[2026-04-29-karpathy-obsidian-claude-wiki]]
