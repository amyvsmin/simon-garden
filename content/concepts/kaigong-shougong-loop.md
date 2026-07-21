---
title: "開工／收工每日 AI 工作流"
slug: kaigong-shougong-loop
aliases: [開工收工 loop, daily 開工收工, 開工收工工作流, kickoff-wrap loop, daily notes, AI 工作日誌, 每日筆記]
category: 知識管理
confidence: 已驗證
created: 2026-05-05
---

## 定義

用「開工」「收工」兩個固定觸發詞當每日工作的入口跟出口，讓 AI 助手（如 Claude Code）讀取 SessionHandoff 跟相關記憶檔，自動產出今日任務清單與一日總結，把跨對話框、跨 session、跨 compact 的工作上下文收斂到單一交接檔。

## 關鍵面向

- **觸發詞極簡**：只兩個自然語言指令（開工／收工），降低使用阻力
- **狀態交給 vault**：所有今日進度、延後任務、決策日誌都寫到 vault 內固定檔（如 SessionHandoff.md），AI 不依賴對話歷史
- **延後任務自動重排**：收工時若有任務未完成，AI 直接把它重新規劃到隔日或後續日期，不靠人工補
- **同步打勾**：白天任意時刻跟任何 Claude Code 對話框說「我已完成 X」，AI 都會同步打勾到 vault 對應任務
- **跨 session 一致**：解決 Claude Code 對話框分裂與 200K 上限 compact 失憶的痛點

## 應用場景

- Simon 工作場景：跟 journal skill（日記純接收）互補。journal 是日記語境，本 loop 是任務語境；可放在 `9-ops/SessionHandoff.md`，跟既有的 weekly/monthly review skill 串接
- 一般場景：跨多個 AI 對話框工作的人；任何想用 AI 做每日 stand-up／retro 但不想學新工具的人

## 相關概念

- [[obsidian-claude-code-workflow]]：本 loop 是其上實作之一
- [[pure-receive-immediate-write]]：Simon 的 journal skill 採純接收互動模式，跟本 loop 任務驅動互動互補
- [[claude-md-dual-nav]]：CLAUDE.md 跟 SessionHandoff.md 是不同職責的兩層
- [[progressive-disclosure]]：daily notes 是漸進式披露在時間維度的具體實作

## Daily Notes（AI 工作日誌）

AI 每天結束時把工作內容寫進當日的 daily notes 檔（`YYYY-MM-DD.md`），下次 session 只讀最近幾天即可恢復脈絡。
- **寫入時機**：session 結束時 AI 自行 append、或 stop hook 觸發、或人工以「今天做了什麼」收束
- **讀取策略**：next session 只讀最近 3-7 天，更早的不掃、要查就 grep
- **跟人類日記的差別**：daily notes 給 AI 讀、可結構化；人類日記給自己讀、可敘事
- **跟 git log 互補**：git log 記程式碼變更、daily notes 記決策脈絡與未進入 commit 的討論
- **典型內容**：完成事項、討論過的決策、未決問題、明日待辦、學到的新概念

## 尚未解決的疑問

- 跟 Notion Action DB 的職責劃分：vault SessionHandoff vs Notion 任務該各放什麼？
- 收工後 AI 自動延後任務的判斷邏輯如何避免越權重排（例如把硬截止日的任務也順手延後）
- 多 session 在同一天並行寫 daily notes 的衝突處理
- daily notes 老化策略（半年前的還要保留嗎、要不要封存）

## 來源（自動維護）

- [[2026-05-05-obsidian-cli-claude-code-daily-loop]]
- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
