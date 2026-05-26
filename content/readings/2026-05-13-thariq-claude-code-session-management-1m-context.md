---
title: "Thariq Shihipar：Claude Code 會話管理與 1M 上下文（官方部落格）"
date: 2026-05-13
type: 來源分析
url: "https://claude.com/blog/using-claude-code-session-management-and-1m-context"
inbox-id: "35ff85da-554f-814e-9e76-cb4919c289d9"
concepts: [context-rot, claude-rewind, claude-slash-commands-control, subagents, claude-usage-dashboard, token-saving-rules]
projects: []
impact: high
created: 2026-05-13
reviewed: 2026-05-18
tldr: "Anthropic Thariq Shihipar 2026-04-15 官方部落格，講 Claude Code 在 1M 上下文時代的會話管理心法。核心觀念是「每一轉都是分岔點」——五個選項（繼續／回溯／清除／壓縮／子代理）對應不同情境。"
stage: growing
icon: "⚡"
---

## 摘要

Anthropic Thariq Shihipar 2026-04-15 官方部落格，講 Claude Code 在 1M 上下文時代的會話管理心法。核心觀念是「每一轉都是分岔點」——五個選項（繼續／回溯／清除／壓縮／子代理）對應不同情境。重點概念：context rot（上下文腐爛）指長對話模型效能下降；`/rewind`（Esc Esc）回溯到任何先前訊息重新開始；`/compact <提示>` 主動壓縮帶提示比被動觸發更精準；`/clear` 由使用者撰寫摘要，最精確但成本最高；subagents 適合產出大量中間結果但只要結論的任務（codebase 搜尋／驗證／文件）；`/usage` 監控會話水位。心智測驗「我需要工具輸出本身、還是只需要結論」決定要不要走 subagent。

## 核心概念

- [[context-rot]]：當一場 Claude Code 對話累積太多輪之後，模型的回答品質會開始下降，Thariq 把這個現象叫做「上下文腐爛」。原因是對話越長，模型的注意力越分散，重要指令被淹沒在大量歷史訊息裡。他建議對話跑到 context window 約 70% 時就該主動處理（壓縮或拆新對話），而不是等系統被動觸發。
- [[claude-rewind]]：Claude Code 的回溯機制，快速按兩次 Esc 就能跳回對話中任何一個先前訊息，從那個點重新開始。後續的訊息會從 context 中移除。這個做法取代了傳統「再寫一輪修正指令」的方式——與其在錯誤路徑上疊補丁，不如退回分岔點用新思路重新提示。
- [[claude-slash-commands-control]]：本篇補充了兩個重要用法：`/rewind` 的回溯操作，以及「主動壓縮帶提示」——用 `/compact <提示>` 手動觸發壓縮時附加引導語（例如「保留 vault 寫入結果、丟掉調試細節」），讓模型知道哪些資訊該留、哪些該丟，比系統自動壓縮更精準。
- [[subagents]]：適合用在「過程會產出大量中間結果、但你只需要最終結論」的任務。Thariq 的心智測驗是問自己：「我需要工具輸出本身嗎，還是只需要結論？」如果只要結論，就丟給 subagent 跑，中間的搜尋結果、驗證日誌不會灌進主對話，主會話保持乾淨。典型場景包括 codebase 搜尋、批次驗證、文件生成。
- [[claude-usage-dashboard]]：`/usage` 斜線命令可以查看當前對話的 context 消耗量和會話大小，是 Anthropic 官方建議的水位監控方式。
- [[token-saving-rules]]：這篇對應省 token 四大守則裡的「對話水位管理」——知道什麼時候該壓縮、什麼時候該拆新對話、什麼時候該丟 subagent，是控制 token 消耗的核心紀律。
![[2026-05-13-thariq-claude-code-session-management-1m-context-claude-rewind.png|275]]

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
