---
title: Claude 完全入門指南｜分析
date: 2026-04-21
type: 來源分析
url: https://madebypan.com/claude-guide
tags: [claude-code, ai-tools, guide]
concepts: [claude-code, mcp, skill, hooks, subagents]
inbox-id: 349f85da-554f-8151-95e9-d94445b7b4bd
notion-page-id: 349f85da-554f-8117-a1b0-f6981d036324
---

## 摘要

MadebyPan 的 Claude 生態系入門指南。核心觀點：Claude 三大產品線 App / Cowork / Code 自主性遞增；日常用 Sonnet、高品質用 Opus。擴展機制分 MCP（連工具）、Skill（存流程）、Hooks（確定性觸發）、Subagents（多分身）四層。非工程師能用 Claude Code 做知識管理、寫作、簡報、設計。

## 核心概念

- [[claude-code]]：三大產品線中自主性最高的一端，本地 terminal 運行
- [[mcp]]：AI 與外部工具的標準化協議
- [[skill]]：技能打包機制，「試一次、存起來、用很多次」
- [[hooks]]：CC 事件觸發機制，100% 確定性、不依賴 AI 判斷
- [[subagents]]：多代理協作，並行派工 + Context 隔離

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
**已在做的**

- Knowledge Wiki：正是本文章描述的「知識管理」場景，已用 MCP 寫 Notion + Hooks 做健檢補跑
- superpowers / example-skills 已安裝，每次開 CC 自動載入
- 已寫兩個 Hook：plugin-update-check 與 knowledge-wiki-lint-catchup

**可以新學的**

- **Plan Mode**：重要改動前先擬藍圖，確認後才實作
- **Skill Creator**：用自然語言讓 Claude 自動產出新 Skill；資安 KPI 月簡報、MBO 撰寫等重複性工作很合適
- **Agent Teams**：並行研究證照題庫、資安漏洞報告時有具體助益
- **Task（Cowork 背景任務）**：與 n8n 功能有重疊，值得評估把部分工作移回 Claude

**要驗證的假設**

- Claude for Chrome 對 IT 維運瀏覽器操作（Omnissa 後台、作業系統）是否有實際價值
- Computer Use / Dispatch 目前 macOS 專屬，Simon 主力 Windows 短期無相關

**要避的坑**

- 文章教用 `curl ... install.sh`，Simon 已由 WSL + apt 安裝，不要重裝
- PRO 方案足夠日常用，升級 MAX 方案前建議先檢視一個月的實際使用量

## 原文要點

1. 三大 AI 對比：ChatGPT / Gemini / Claude 分別為學者 / 創作者 / 執行者
2. 模型等級：Haiku / Sonnet / Opus
3. 訂閱：Pro US$20 / Max 5x US$100 / Max 20x US$200
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
