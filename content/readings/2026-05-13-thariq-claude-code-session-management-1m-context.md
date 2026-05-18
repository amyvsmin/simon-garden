---
title: "Thariq Shihipar：Claude Code 會話管理與 1M 上下文（官方部落格）"
date: 2026-05-13
type: 來源分析
url: "https://claude.com/blog/using-claude-code-session-management-and-1m-context"
inbox-id: "35ff85da-554f-814e-9e76-cb4919c289d9"
concepts: [context-rot, claude-rewind, claude-slash-commands-control, subagents, claude-usage-dashboard, token-saving-rules]
projects: []
created: 2026-05-13
reviewed: 2026-05-18
---

## 摘要

Anthropic Thariq Shihipar 2026-04-15 官方部落格，講 Claude Code 在 1M 上下文時代的會話管理心法。核心觀念是「每一轉都是分岔點」——五個選項（繼續／回溯／清除／壓縮／子代理）對應不同情境。重點概念：context rot（上下文腐爛）指長對話模型效能下降；`/rewind`（Esc Esc）回溯到任何先前訊息重新開始；`/compact <提示>` 主動壓縮帶提示比被動觸發更精準；`/clear` 由使用者撰寫摘要，最精確但成本最高；subagents 適合產出大量中間結果但只要結論的任務（codebase 搜尋／驗證／文件）；`/usage` 監控會話水位。心智測驗「我需要工具輸出本身、還是只需要結論」決定要不要走 subagent。

## 核心概念

- [[context-rot]]：上下文腐爛、長對話模型效能下降、注意力分散
- [[claude-rewind]]：Esc Esc 回溯機制、取代「再修正」式對話、新思路重新提示
- [[claude-slash-commands-control]]：本篇補 `/rewind` 跟「主動壓縮帶提示」用法
- [[subagents]]：產出大量中間結果但只要結論的場景、保持主會話乾淨
- [[claude-usage-dashboard]]：`/usage` 監控會話水位的官方說法
- [[token-saving-rules]]：對應 4 大守則之「對話水位管理」段

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
1. ⏳ Simon 目前已用 `/compact` 跟 `/clear`、可開始試 `/rewind` 取代多輪修正、特別在 vibe coding 場景
2. ⏳ 「主動壓縮帶提示」用法值得加進 KW γ／course-notes skill：`/compact 保留 vault 寫入結果、丟調試細節`
3. ✅ Subagent 心智測驗對 Simon-Agent 既有的 Explore／general-purpose subagent 使用習慣很對齊；codebase 搜尋／長 grep 全部該丟 subagent
4. ✅ Context rot 概念解釋了為什麼 1M context 不是放飛、長對話到 70% 就要主動壓縮
5. ✅ 對應 Simon Pro → Max 5x（2026-05-13）的決策——多了 weekly limit 額度但 context 管理紀律不能放鬆

## 原文要點

- Context window 含系統提示／對話歷史／工具呼叫／工具輸出／讀取的檔案
- 五個分岔點：繼續／rewind／clear／compact／subagent
- `/rewind`（快速按 Esc 兩次）跳回任何先前訊息重新開始、後續訊息從 context 移除
- `/compact <提示>` 主動壓縮可以附加引導模型摘要重點、避免重要細節被丟
- `/clear` 由使用者撰寫摘要、最精確但成本最高、適合啟動全新任務
- Subagent 心智測驗：「我需要此工具輸出本身嗎，還是只需結論？」
- `/usage` 新斜線命令：監控會話大小跟 context 消耗

## 原始連結

- https://claude.com/blog/using-claude-code-session-management-and-1m-context
