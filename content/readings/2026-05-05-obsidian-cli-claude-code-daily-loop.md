---
title: "Obsidian CLI plugin × Claude Code 三檔結構 + 開工收工每日工作流"
date: 2026-05-05
type: 來源分析
url: "https://youtu.be/4r4Zy55Avpc?si=oEj_NyFSpKQmFPda"
inbox-id: "354f85da554f818da314f604aaedec1b"
concepts: [obsidian-cli-plugin, kaigong-shougong-loop, obsidian-claude-code-workflow, claude-md-dual-nav, second-brain]
created: 2026-05-05
---

## 摘要

Obsidian 近期推出的 CLI（命令列界面）plugin 讓 Claude Code 能直接讀寫 Obsidian vault，把過去散落在多個 Claude Code 對話框、且每次 compact 之後就遺失上下文的工作狀態收斂到單一 vault。作者示範用三個核心檔（CLAUDE.md 規則／SessionHandoff.md 跨對話交接／Index.md 決策日誌）+ 每日「開工／收工」兩個自然語言指令，讓 AI 自動建立週任務追蹤表、依完成情況打勾、把延後任務重新規劃到後續日期。整個流程不需要客製腳本，只靠 vault 同一資料夾被 Claude Code 跟 Obsidian 共讀，加上 Obsidian Settings → 進階 → 命令列界面開啟註冊就能跑，是「降低阻力、AI 隨時間變聰明」典型實作。

## 核心概念

- [[obsidian-cli-plugin]]：Obsidian CLI 是讓 Claude Code（或任何 CLI 型 AI agent）直接控制 Obsidian 的橋接介面，不再需要 MCP server 或客製整合
- [[kaigong-shougong-loop]]：「開工」「收工」兩個觸發詞當每日工作流的入口，AI 自動讀 SessionHandoff + Index、整理今天任務、收工時做總結並更新延後任務
- [[obsidian-claude-code-workflow]]：本作者跟心心那篇是同題不同切法，補上 CLI plugin、SessionHandoff 三檔結構、跨對話框同步等實作細節
- [[claude-md-dual-nav]]：CLAUDE.md 仍然當總目錄／規則層
- [[second-brain]]：仍然是上層心法

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
Simon 已在 vault 1b 完成 vault 結構（4/22 搬家 + 5/5 七頂層 lifecycle 重構），但 daily loop 還沒做：每天工作散在 Claude Code session 裡，compact 之後常需要 Simon 自己重述上下文。可採納兩件事：

1. **Obsidian CLI plugin**：跟現有 Obsidian app 整合進來、之後 Claude Code 不必透過檔案系統 read／write，可直接喚 Obsidian 的指令（搜尋、開啟特定 note、操作 callout）。
2. **SessionHandoff.md + 開工收工 loop**：跟 Simon 現有 journal skill（純接收 + 即時落地）互補。journal 是日記語境的純記錄，SessionHandoff 是任務／工作語境的跨 session 接力。可放在 vault `9-ops/SessionHandoff.md` 或 `0-context/`，補上「每日工作交接」這層。

但要小心：作者影片用的「Index.md 決策日誌」其實已經被 vault 的 changelog.jsonl 跟 monthly/weekly review 取代，不必重建。「每週任務追蹤表」也跟 Notion Action DB 的功能重疊，不需要在 vault 內再建一份。

## 原文要點

- 痛點：Claude Code 對話框多 + compact 失憶 → vault + AI 共讀單一資料夾解決
- Obsidian 安裝後選 Open folder as vault、Settings → 進階 → 命令列界面 → 打開 → 註冊
- 三檔骨架：
  - `CLAUDE.md`：規劃／記錄規則
  - `SessionHandoff.md`：上次進度、待辦、重要備註（compact／新對話框都讀這個）
  - `Index.md`：重要決策日誌
- 每日 loop：
  - 早上跟 Claude Code 說「開工」→ AI 讀 SessionHandoff + Index → 列今日任務 + 提醒未完成 → Simon 對時間表 → AI 更新 vault
  - 任意時刻跟任何對話框說「我已完成 X」→ AI 同步更新到 SessionHandoff + 相關 memory
  - 晚上跟 Claude Code 說「收工」→ AI 依 vault 各檔做今日總結，把延後任務重新規劃到後續日期
- 作者賣點是付費／免費 Skool 社群＋筆記＋ N8N 模板（提及但跟核心無關）

## 原始連結

- https://youtu.be/4r4Zy55Avpc?si=oEj_NyFSpKQmFPda
