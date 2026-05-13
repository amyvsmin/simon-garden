---
title: "跨資料夾 wikilink"
slug: wikilink-cross-folder
aliases: [跨資料夾 wikilink, wikilink AI 上下文觸達, 跨層級連線, cross-folder wikilink, wikilink 突破樹狀結構, AI vault navigation by wikilink]
category: 生產力／AI
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

# 跨資料夾 wikilink

## 定義

Obsidian wikilink 機制讓檔案不需要在同一個資料夾就能互相連線、AI 讀到某檔案時自動跳到關聯檔案讀全貌；解決傳統樹狀資料夾結構在跨專案／跨主題場景的上下文斷裂問題。

## 關鍵面向

- 突破點：傳統樹狀結構讓 AI 只看到當前資料夾內的檔案；wikilink 變成有向圖、AI 順著連線跨層走
- 不需向量資料庫：純語意連線、靠 markdown `[[...]]` 語法、AI 在讀檔時看到 wikilink 就觸發二次 read
- 自動建連線：可以請 AI 「按語意幫我判斷哪些檔案有關係、加上 wikilink 雙向連線」、不必人工拉連結
- 對 AI 行為影響：讀到 wikilink 就 follow、自動拼湊全貌；不會因為「這檔案在另一個資料夾」而漏掉重要 context
- 限制：wikilink 過多會讓 AI 一直跳檔案、消耗 context、需配 [[progressive-disclosure]] 按需讀取守則
- 落實工具：Obsidian + [[obsidian-cli-plugin]] + Claude Code 是天然 fit、其他 markdown 編輯器（Typora／Logseq）也支援

## 應用場景

- Simon 工作場景：vault `1-learning/coursera/google-cybersecurity/`／`2-knowledge/concepts/`／`9-ops/` 三大目錄透過 wikilink 互通、Claude Code 開任何目錄都能跨層讀
- Simon 工作場景：跨專案連線——Simon-Agent 的 project memory、SimonVault reading／concept、Simon-Journal 日記未來若 wikilink 互通，Claude 開任何 cwd 都能全局視角
- 一般場景：個人筆記庫的「人物」「主題」「專案」「日期」彼此交織、不被資料夾分類困住

## 相關概念

- [[obsidian-claude-code-workflow]]：本概念是該工作流的核心機制
- [[index-based-knowledge-base]]：兩種互補的 AI 知識庫導航方式（索引 + wikilink）
- [[progressive-disclosure]]：wikilink 過多時需配按需讀取守則防 context 爆
- [[graph-emergence]]：wikilink 多到一定密度後浮現的 knowledge graph 結構

## 尚未解決的疑問

- Simon vault 目前 wikilink 密度夠不夠？哪些 reading 還沒被 concept 反引、需要補連線
- 「按語意自動建連線」AI 失誤率？要不要再加 sanity check 步驟

## 來源（自動維護）

- [[2026-05-13-dustin-obsidian-cross-project-vault]]
- [[2026-04-29-karpathy-obsidian-claude-wiki]]
- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
