---
title: Claude 完全入門指南｜分析
date: 2026-04-21
type: 來源分析
url: https://madebypan.com/claude-guide
tags: [claude-code, ai-tools, guide]
concepts: [claude-code, mcp, skill, hooks, subagents]
inbox-id: 349f85da-554f-8151-95e9-d94445b7b4bd
notion-page-id: 349f85da-554f-8117-a1b0-f6981d036324
impact: medium
reviewed: 2026-05-15
tldr: "MadebyPan 的 Claude 生態系入門指南。核心觀點：Claude 三大產品線 App / Cowork / Code 自主性遞增；日常用 Sonnet、高品質用 Opus。擴展機制分 MCP（連工具）、Skill（存流程）、Hooks（確定性觸發）、Subagents（多分身）四層。"
stage: growing
icon: "⚡"
---

## 摘要

MadebyPan 的 Claude 生態系入門指南。核心觀點：Claude 三大產品線 App / Cowork / Code 自主性遞增；日常用 Sonnet、高品質用 Opus。擴展機制分 MCP（連工具）、Skill（存流程）、Hooks（確定性觸發）、Subagents（多分身）四層。非工程師能用 Claude Code 做知識管理、寫作、簡報、設計。

<p align="center"><img src="assets/covers/2026-04-21-madebypan-claude-guide-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[claude-code]]：Claude 三大產品線（App、Cowork、Code）中自主性最高的形態。跟 App 版在網頁上一問一答不同，Claude Code 是在你電腦的終端機裡跑的，它可以直接讀寫檔案、執行指令、操作本機工具，像是一個住在你電腦裡的工程師，不只回答問題，還能直接動手做事。
- [[mcp]]：Model Context Protocol，讓 AI 連接外部工具的標準化協議。有了 MCP，Claude Code 就能透過統一介面去操作 Notion、Google Calendar、檔案系統等各種服務，不需要為每個工具寫專屬的串接程式。類似 USB 讓各種裝置用同一個插頭連電腦。
- [[skill]]：Claude Code 的技能打包機制，核心概念是「試一次、存起來、用很多次」。當你跟 Claude 合作完成一件事（例如寫週報、整理筆記），可以把整個流程存成一個 skill，之後只要一句觸發詞就能重複執行，不用每次從頭教。
- [[hooks]]：Claude Code 的事件觸發機制，特點是 100% 確定性、完全不依賴 AI 判斷。例如「每次對話開始時自動載入個人偏好」「每次寫入檔案前先檢查格式」，這些動作由腳本執行，不會因為 AI 理解偏差而漏掉。
- [[subagents]]：Claude Code 的多代理協作機制。主 agent 可以把任務拆給多個 subagent 並行處理，每個 subagent 有自己獨立的上下文，互不干擾。適合需要同時做多件獨立事情的場景，例如同時研究三個不同主題再彙整結果。
![[2026-04-21-madebypan-claude-guide-claude-code.png|275]]

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
**已在做的**

- ✅ Knowledge Wiki：正是本文章描述的「知識管理」場景，已用 MCP 寫 Notion + Hooks 做健檢補跑
- ✅ superpowers / example-skills 已安裝，每次開 CC 自動載入
- ✅ 芙莉蓮已有 Hook 機制

**可以新學的**

- ✅ **Plan Mode**：重要改動前先擬藍圖，確認後才實作
- ✅ **Skill Creator**：用自然語言讓 Claude 自動產出新 Skill；資安 KPI 月簡報、MBO 撰寫等重複性工作很合適
- ✅ **Agent Teams**：並行研究證照題庫、資安漏洞報告時有具體助益
- ❌ **Task（Cowork 背景任務）**：與 n8n 功能有重疊，值得評估把部分工作移回 Claude — N8N 已沒用、Cowork 不接主場景

**要驗證的假設**

- ❌ Claude for Chrome 對 IT 維運瀏覽器操作（Omnissa 後台、作業系統）是否有實際價值 — 公司資安政策擋第三方擴充套件、個人端 Playwright + Notion MCP 已覆蓋
- ❌ Computer Use / Dispatch 目前 macOS 專屬，Simon 主力 Windows 短期無相關 — 主機平台沒換打算、Windows 支援弱

**要避的坑**

- ✅ 文章教用 `curl ... install.sh`，Simon 已由 WSL + apt 安裝，不要重裝
- ❌ PRO 方案足夠日常用，升級 MAX 方案前建議先檢視一個月的實際使用量 — 已升至 MAX 5X

## 原文要點

1. 三大 AI 對比：ChatGPT / Gemini / Claude 分別為學者 / 創作者 / 執行者
2. 模型等級：Haiku / Sonnet / Opus
3. 訂閱：Pro US\$20 / Max 5x US\$100 / Max 20x US\$200
4. 三大產品線：App → Cowork → Code，自主性逐級放大
5. 生態系擴展：Task、Channel、Dispatch、Chrome、Interactive Tools、Computer Use
6. CC 非工程師用途：知識管理、寫作、簡報、設計、媒體處理
7. 六步安裝：訂閱→終端機→安裝→建目錄→編輯器開終端→`claude`
8. 核心概念：MCP、Skill、CLAUDE.md、MEMORY.md
9. 日常操作：@ 引用、ESC 中斷、還原、`/compact`
10. 進階擴展：Hooks、Subagents、Agent Teams、Plan Mode、Plugins、Skill Creator
11. 五個心法：以目的為導向、多步串一起、存 Skill、建參考庫、持續迭代

## 原始連結

- 原文：https://madebypan.com/claude-guide
