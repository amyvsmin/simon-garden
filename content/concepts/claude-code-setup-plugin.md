---
title: "Anthropic 官方 claude-code-setup plugin"
slug: claude-code-setup-plugin
aliases:
  - claude-code-setup
  - claude code setup plugin
  - claude-code-setup plugin
  - Anthropic 官方推薦 plugin
  - CC 顧問 plugin
  - 掃專案推薦 plugin
  - Claude Code 自動推薦
category: AI
confidence: 待驗證
created: 2026-05-22
---

## 定義

Anthropic 2026-05 官方推出的 Claude Code plugin，內含一個會掃描當前專案結構（`package.json`、imports、目錄樹、`CLAUDE.md`）並產出客製化繁中安裝報告的 [[skill]]；報告分 MCP／Skills／Hooks／Subagents 四段加 CP 值 top 5，每條都附「為什麼適合這個專案」的理由，取代 dotfiles 盲抄。

## 關鍵面向

- **觸發方式三種**：通掃（「幫我看這個專案該裝什麼」）、單類別深挖（「該裝哪些 hook」「該裝哪些 MCP」）、新手 onboarding（「幫我從頭設定 Claude Code」）；都觸發同一支 skill、口吻跟深度不同
- **報告五段結構**：(1) 專案判讀（一句話點 stack）、(2) MCP Servers（按 stack 推薦＋為什麼）、(3) Skills（先點名 [[skill]] 內建可用如 `security-review`／`code-review`／`verify`／`run`、再建議自包）、(4) Hooks（保存自動 lint／pre-push 測試／危險指令二次確認／git status 注入 context 等具體 pattern）、(5) [[subagents]]（分工專業 agent 一票）、最後列 CP 值 top 5 給快速啟動
- **客製依據**：讀 `package.json` 看框架（Next.js／Prisma／Stripe）、看 import／路由判斷功能模組、ls 目錄結構、讀 [[instructions-file]] 抓專案敘述（如「故意留資安問題給教學」也讀得到）、報告每條都對應到專案實際特徵不是通用清單
- **安裝 scope 三層**：見 [[claude-code-plugin-scope]]、User／Project／Local 三選一
- **解的問題**：[[claude-code]] 可裝元件分五類（MCP／Hooks／Skills／Subagents／Commands）、新手不知該裝哪些、抄網路 dotfiles 結果裝一堆用不到；plugin 充當「顧問」回答這題

## 應用場景

- **Simon 工作場景**：對 Simon-Agent 目錄跑一次、看自家 KW γ／course-notes／復盤 skill 之外、是否漏掉哪些 hook／MCP（例如 git status auto-inject hook 沒看過）；對未來建的新專案（如 simon-frieren-bot）跑一次當起手式
- **一般場景**：開新專案第一天的 Claude Code 起手式、取代盲抄 dotfiles；接手別人的 repo 想知道該補哪些 CC 整合；想知道某類元件（例如「我這個專案要哪些 hook」）有什麼具體 pattern 可學

## 相關概念

- [[claude-code]]：本 plugin 是 CC 生態的官方推薦工具
- [[skill]]：plugin 內含的 skill 是核心執行單元
- [[mcp]]：報告第二段推薦對象
- [[hooks]]：報告第四段推薦對象
- [[subagents]]：報告第五段推薦對象
- [[instructions-file]]：CLAUDE.md 是 plugin 讀的客製依據之一
- [[claude-code-plugin-scope]]：安裝時三 scope 選擇

## 尚未解決的疑問

- plugin 在 Simon 既有滿手 skill／hook／rules 的 Simon-Agent 跑出來會建議什麼、跟既有設定衝不衝突
- 報告會不會推到已存在的 skill（例如已有 verify／run 它還推不推）
- 三種講法的 prompt template 公開嗎、能不能自己改

## 來源（自動維護）

- [[2026-05-22-yaha-claude-code-setup-plugin]]
