---
title: "NotebookLM 當 RAG 引擎"
slug: notebooklm-as-rag
aliases: [NotebookLM 當 RAG, NotebookLM 外掛 RAG, NotebookLM as RAG, 外掛 RAG 引擎, Gemini RAG 卸載, Claude token 卸載]
category: AI／生產力
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

## 定義

把 Google NotebookLM 當作 Claude Code 的外掛檢索增強生成（RAG）引擎，用來補 Claude Code 在影片內容處理、深度 RAG、圖表生成上的短板；同時避免消耗 Claude 訂閱 token（NotebookLM 走 Gemini 免費 tier）。

## 關鍵面向

- 串接工具：林探 `notebooklm-py` CLI + Anthropic skills-creator + yt-dlp + 自訂 yt-search skill
- 安裝流程：`pip install notebooklm-py` → 裝 skills agent setup → Claude Code 重啟 → `/notebooklm login` GUI 登入 → 之後 slash command 直接用
- Token 卸載邏輯：web scraping／影片分析／心智圖／資訊圖表／podcast／study guide 全部丟 NotebookLM，Claude Code 只負責 orchestration
- NotebookLM 強項：source-based 生成減幻覺、多媒體輸出（手繪藍圖／心智圖／互動圖表）、podcast 配音、整合 quiz／study guide
- 限制：NotebookLM 是 GUI-first、CLI 整合靠社群工具（`notebooklm-py` 是 unofficial）；可能未來會被官方 API 取代
- skills-creator 用法：丟一段「我要這個 skill 做 X、用 Y 工具、有 Z 輸出」自動產生 skill 包

## 應用場景

- Simon 工作場景：KW γ YT 收錄流程目前用 `yt-transcript.py + yt-gemini-transcribe.py`、可參考 HC 用 `notebooklm-py` 升級 v0.5
- Simon 工作場景：Plaud 逐字稿 → Claude Code 分析的現有流程、可加 NotebookLM 圖表輸出收尾
- Simon 工作場景：研究類任務（資安會議 talk／PQC paper／ISO 27001 條文）、用 NotebookLM 多 source RAG + 圖表、比叫 Claude 全做省 token
- 一般場景：學術／調研工作、批量丟 PDF／YouTube／網頁、用 NotebookLM 統一整理

## 相關概念

- [[skill]]：用 skills-creator 半自動產生 yt-search skill、再串 notebooklm skill
- [[mcp]]：對照 MCP 機制、notebooklm 走 CLI tool + skill 而非 MCP server
- [[subscription-vs-api-cost]]：NotebookLM Gemini 免費 tier 是 Claude Max weekly limit 的延伸口

## 尚未解決的疑問

- `notebooklm-py` 穩定性如何？Google 改 NotebookLM 介面會不會壞掉？
- Simon vault YT 收錄要不要試試 NotebookLM 走第二條備援、跟 Gemini transcribe 對照品質

## 來源（自動維護）

- [[2026-05-13-hc-notebooklm-claude-code-rag]]
