---
title: "HC：NotebookLM × Claude Code — 把 RAG 跟圖表卸載給 Gemini、省 Claude token"
date: 2026-05-13
type: 來源分析
url: "https://youtu.be/22bjps4LMmU"
inbox-id: "35ff85da-554f-8129-b6fc-f11e9cbbe4cb"
concepts: [notebooklm-as-rag, skill, mcp, claude-code]
projects: []
created: 2026-05-13
---

# HC：NotebookLM × Claude Code — 把 RAG 跟圖表卸載給 Gemini、省 Claude token

## 摘要

HC 示範用林探開發的 `notebooklm-py` CLI 工具，把 Claude Code 跟 Google NotebookLM 串起來，解決 Claude Code 兩個短板：影片內容處理（用 yt-dlp + 抽字幕）、深度 RAG 跟圖表生成（NotebookLM 強項）。關鍵是 token 卸載——把 web scraping、影片分析、心智圖、資訊圖表這些重度任務外包給免費的 Gemini／NotebookLM，不消耗 Claude Code 訂閱 token。實作流程：`pip install notebooklm-py` → 裝 skills agent setup → Claude Code 內 `/notebooklm login` 跟 `/yt-search` 兩個 skill 上線。yt-search skill 用 skills-creator 自動產生，搜尋條件支援觀看次／訂閱者比率算「爆款」、預設返回 20 部影片。

## 核心概念

- [[notebooklm-as-rag]]：NotebookLM 當 Claude Code 的外掛 RAG／圖表／podcast 製作引擎
- [[skill]]：用 skills-creator 半自動產生新 skill（影片中 yt-search skill）、含 yt-dlp 整合
- [[mcp]]：對照 MCP 機制、但 notebooklm 走 CLI tool + skill 而非 MCP
- [[claude-code]]：Claude Code 短板補強案例

## 對 Simon 的應用

1. Simon 的 Knowledge Wiki YT 收錄流程目前用 `~/.claude/scripts/yt-transcript.py` + `yt-gemini-transcribe.py`、可參考 HC 套件結構升級 v0.5
2. 「token 卸載」概念對 Claude Max 月費 3,300 跟 weekly limit 的成本意識——把不需要 Claude 推理的任務外包出去
3. Plaud 逐字稿 → Claude Code 分析的現有流程可加 NotebookLM 圖表輸出當收尾
4. skills-creator 用法值得 dogfood——之前手寫 KW skill、未來新 skill 可試 skills-creator 加速

## 原文要點

- 工具：林探 `notebooklm-py` CLI（GitHub）+ Anthropic skills-creator
- 串接步驟：pip install → skills agent setup → `/notebooklm login` GUI 視窗
- yt-search skill 由 skills-creator 半自動產生、自帶觀看／訂閱比率計算
- Token 卸載邏輯：Claude Code 訂閱用戶 weekly limit 緊張、把 RAG／圖表丟 NotebookLM 不算 Claude token
- NotebookLM 輸出：心智圖／資訊圖表／podcast／study guide／quiz、按 source 生成
- HC 上一支影片講 LLM wiki 結合 Obsidian、本支算延伸

## 原始連結

- https://youtu.be/22bjps4LMmU
