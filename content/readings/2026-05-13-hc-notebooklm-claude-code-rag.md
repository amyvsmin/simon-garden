---
title: "HC：NotebookLM × Claude Code — 把 RAG 跟圖表卸載給 Gemini、省 Claude token"
date: 2026-05-13
type: 來源分析
url: "https://youtu.be/22bjps4LMmU"
inbox-id: "35ff85da-554f-8129-b6fc-f11e9cbbe4cb"
concepts: [notebooklm-as-rag, skill, mcp, claude-code]
projects: []
impact: medium
created: 2026-05-13
reviewed: 2026-05-18
tldr: "HC 示範用林探開發的 `notebooklm-py` CLI 工具，把 Claude Code 跟 Google NotebookLM 串起來，解決 Claude Code 兩個短板：影片內容處理（用 yt-dlp + 抽字幕）、深度 RAG 跟圖表生成（NotebookLM 強項）。"
stage: growing
icon: "⚡"
---

## 摘要

HC 示範用林探開發的 `notebooklm-py` CLI 工具，把 Claude Code 跟 Google NotebookLM 串起來，解決 Claude Code 兩個短板：影片內容處理（用 yt-dlp + 抽字幕）、深度 RAG 跟圖表生成（NotebookLM 強項）。關鍵是 token 卸載——把 web scraping、影片分析、心智圖、資訊圖表這些重度任務外包給免費的 Gemini／NotebookLM，不消耗 Claude Code 訂閱 token。實作流程：`pip install notebooklm-py` → 裝 skills agent setup → Claude Code 內 `/notebooklm login` 跟 `/yt-search` 兩個 skill 上線。yt-search skill 用 skills-creator 自動產生，搜尋條件支援觀看次／訂閱者比率算「爆款」、預設返回 20 部影片。

## 核心概念

- [[notebooklm-as-rag]]：把 Google NotebookLM 當成 Claude Code 的外掛引擎，專門處理 Claude 不擅長的任務：大量文件的深度檢索（RAG）、心智圖跟資訊圖表的生成、podcast 風格的音檔製作。關鍵好處是「token 卸載」——這些重度任務由免費的 Gemini/NotebookLM 處理，不消耗 Claude Code 訂閱的每週 token 額度。實作上用林探開發的 `notebooklm-py` CLI 工具串接。
- [[skill]]：HC 在影片中用 Anthropic 的 skills-creator 工具半自動產生了一個 yt-search skill，能搜尋 YouTube 影片並用觀看次數跟訂閱者數的比率判斷哪些是「爆款」。這示範了 skill 不一定要手寫——用 skills-creator 描述你想要的功能，它會自動生成 SKILL.md 跟相關腳本。
- [[mcp]]：值得注意的是 NotebookLM 的整合方式不是走 MCP 協定，而是走 CLI 工具加上 skill 封裝。這提供了一個對照：不是所有外部工具整合都需要 MCP，有時候 CLI + skill 的組合更簡單直接。
- [[claude-code]]：這是一個 Claude Code 短板補強的實際案例。Claude Code 本身不擅長處理影片內容（需要靠 yt-dlp 抽字幕）、也不擅長生成圖表跟視覺化內容。與其等 Claude 補足這些能力，不如把任務外包給擅長的工具（NotebookLM），Claude Code 負責串接跟調度。
![[2026-05-13-hc-notebooklm-claude-code-rag-notebooklm-as-rag.png|275]]

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
1. ⏳ Simon 的 Knowledge Wiki YT 收錄流程目前用 `~/.claude/scripts/yt-transcript.py` + `yt-gemini-transcribe.py`、可參考 HC 套件結構升級 v0.5
2. ⏳ 「token 卸載」概念對 Claude Max 月費 3,300 跟 weekly limit 的成本意識——把不需要 Claude 推理的任務外包出去
3. ⏳ Plaud 逐字稿 → Claude Code 分析的現有流程可加 NotebookLM 圖表輸出當收尾
4. ⏳ skills-creator 用法值得 dogfood——之前手寫 KW skill、未來新 skill 可試 skills-creator 加速

## 原文要點

- 工具：林探 `notebooklm-py` CLI（GitHub）+ Anthropic skills-creator
- 串接步驟：pip install → skills agent setup → `/notebooklm login` GUI 視窗
- yt-search skill 由 skills-creator 半自動產生、自帶觀看／訂閱比率計算
- Token 卸載邏輯：Claude Code 訂閱用戶 weekly limit 緊張、把 RAG／圖表丟 NotebookLM 不算 Claude token
- NotebookLM 輸出：心智圖／資訊圖表／podcast／study guide／quiz、按 source 生成
- HC 上一支影片講 LLM wiki 結合 Obsidian、本支算延伸

## 原始連結

- https://youtu.be/22bjps4LMmU
