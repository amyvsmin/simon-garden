---
title: "Obsidian CLI plugin"
slug: obsidian-cli-plugin
aliases: [Obsidian 命令列界面, Obsidian CLI, CLI plugin]
category: 生產力
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

# Obsidian CLI plugin

## 定義

Obsidian 的命令列界面 plugin，讓任何 CLI 型 AI agent（特別是 Claude Code）能直接呼叫 Obsidian 的指令、搜尋、開啟特定筆記、操作 vault 內容，不必透過檔案系統 read/write 或自架 MCP server。

## 關鍵面向

- 啟用流程：Obsidian Settings → 進階 → 命令列界面 → 開啟並註冊
- 跟單純檔案系統存取的差異：可以呼叫 Obsidian 內建的搜尋、模板、命令面板等動作，不只是讀寫 markdown
- 跟 MCP server 的差異：不需要額外起服務，Obsidian 本身就把 CLI 介面暴露給 host shell
- 跟 vault 共讀的關係：Claude Code 仍透過 cwd 讀 vault 檔案，但寫入／搜尋／導航走 CLI plugin 更高效

## 應用場景

- Simon 工作場景：vault 1b 完成後、有跑 LINE bot 知識收集 + course-notes skill 大量寫 markdown，CLI plugin 可加快 Claude Code 操作 vault（例：直接喚搜尋、跳到既有 concept 而不必 Glob）
- 一般場景：Obsidian + AI agent 想做雙向控制的任何使用者；特別適合不想自架 MCP 的個人

## 相關概念

- [[obsidian-claude-code-workflow]]：Obsidian + Claude Code 工作流的具體橋接實作之一
- [[claude-code]]：CLI plugin 主要服務的 host
- [[mcp]]：另一條串接路徑、適合跨工具場景（CLI plugin 只服務 Obsidian）

## 尚未解決的疑問

- 在 Windows 原生 vault + WSL Claude Code（Simon 現況）的設定下，CLI plugin 的呼叫路徑是否要透過 symlink？實測過嗎？
- 跟 Obsidian Sync／Git 同步機制的衝突情境

## 來源（自動維護）

- [[2026-05-05-obsidian-cli-claude-code-daily-loop]]
