---
title: Claude Code 完整介紹（海大叔）
date: 2026-05-02
type: 來源分析
url: https://youtu.be/2pM-7fBXc_M
tags: [claude-code, tutorial, youtube]
concepts: [claude-code, skill, hooks, subagents, mcp, plan-mode, vibe-coding]
inbox-id: 352f85da-554f-81bc-bb5f-f9ff7055d461
notion-page-id: 354f85da-554f-8182-b31e-d1ebb929a3a7
---

## 摘要

海大叔整理的 Claude Code 從 install 到進階用法完整教學：跨平台安裝（Windows 需 Git + PowerShell、Mac 用 Terminal）、VS Code 整合 + Plan Mode、三個模型 Haiku / Sonnet / Opus 用 /model 切換、CLAUDE.md 作為重要備忘錄、Skills 可用 GitHub URL 安裝、Hooks 條件觸發 100% 執行、Subagents 並行任務分派、MCP 接 Notion / Gmail / Calendar、進階指令 /init / /compact / /plugins / /Account、以及 Vibe Coding 實驗。強調 Plan Mode + Opus 是複雜專案「先規劃、再動手」的關鍵組合。

## 核心概念

- [[claude-code]]：Anthropic 推出的終端型 AI 助手
- [[skill]]：技能打包機制
- [[hooks]]：CC 事件觸發機制
- [[subagents]]：並行任務分派、永久型 agent
- [[mcp]]：連接 Notion / Gmail / Calendar 等外部工具
- [[plan-mode]]：複雜任務先規劃再動手的安全模式
- [[vibe-coding]]：用自然語言描述需求讓 AI 全程實作

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- **驗證現行 Claude Code 架構**：Simon 現行架構（全域 + 專案雙層 CLAUDE.md、Hooks 有 user-memory-inject 跟 knowledge-wiki-lint-catchup、MCP 掛 Notion / Gmail / Calendar、superpowers 跟 example-skills）跟海大叔整理的進階用法高度重疊，可驗證 self-trained 的架構選擇跟主流一致
- **Plan Mode 是未學到的招**：Simon-Agent 寫 skill、Knowledge Wiki 改 schema、n8n flow 變更這類高風險任務應加進 Plan Mode 公認「規劃 → 複核 → 動手」哨
- **/init 跟 /compact 是可以加上手的指令**：/init 可在新複製專案裡一鍵生 CLAUDE.md；/compact 跨長 session 寫作離長後

## 原文要點

- **安裝**：Windows 需 Git + PowerShell；Mac 用 Terminal
- **VS Code 整合**：擴充功能 + 圖形介面 + Plan Mode + 自動編輯
- **三種模型**：Haiku / Sonnet / Opus，用 /model 切換
- **CLAUDE.md**：每次自動讀取的重要備忘錄
- **Skills**：可用 GitHub URL 直接安裝（pptx、Skill Creator、Nano Banana 等）
- **Hooks**：條件觸發 100% 執行（例如桌面通知）
- **Subagents**：並行任務分派、/Agents 建立永久型 agent
- **MCP**：連接 Notion / Gmail / Calendar 等外部工具
- **進階指令**：/init、/compact、/plugins、/Account
- **Vibe Coding**：用自然語言開發 Chrome extension 範例
- **Plan Mode + Opus**：複雜專案先規劃再實作

## 原始連結

https://youtu.be/2pM-7fBXc_M
