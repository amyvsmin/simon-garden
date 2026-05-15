---
title: "上下文腐爛（Context Rot）"
slug: context-rot
aliases: [上下文腐爛, context rot, context decay, 對話腐爛, 長對話效能衰退, Claude context rot]
category: AI
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

## 定義

長對話下大語言模型效能持續下降的現象、由 Anthropic Thariq Shihipar 2026-04 正式命名；原因是 context 越長、注意力分散到越多 token、舊的無關內容變成干擾、模型開始忘記前面講過的事或亂答。

## 關鍵面向

- 觸發訊號：模型開始重複問同樣的問題、忘記既定規則（例如 CLAUDE.md 講過的繁中規則）、回答品質明顯下降
- 1M context 不是放飛通行證：容量大不等於品質好、長對話依然會 rot
- 對應 5 個分岔點選項：繼續（風險高）／rewind（回到健康點重來）／clear（最徹底）／compact（壓縮）／subagent（卸載）
- Compaction 自動觸發 vs 主動觸發：自動觸發可能丟重要細節、主動 `/compact <提示>` 帶引導比較精準
- 跟 [[token-saving-rules]] 的「對話水位管理」是同一件事的兩種說法
- 防 rot 的紀律：到 70% context 就主動 compact、新任務開新會話、subagent 卸載大量中間輸出

## 應用場景

- Simon 工作場景：Claude Code 在 KW γ 批次收錄到第 5 篇時、主動 `/compact 保留 vault 寫入路徑、丟調試細節` 防 rot
- Simon 工作場景：course-notes 長 transcript 寫筆記時、寫完一個 Module 就 `/clear` 換新會話
- Simon 工作場景：日記復盤、不要在同個 session 連跑多個復盤、`/clear` 換來換去
- 一般場景：vibe coding 一個 feature 寫完、`/clear` 進下個 feature、不要堆疊 context

## 相關概念

- [[claude-slash-commands-control]]：`/compact`／`/clear`／`/rewind` 是對抗 context rot 的工具集
- [[claude-rewind]]：rewind 到健康 context 點重新提示
- [[token-saving-rules]]：「對話水位管理」是 Simon 既有的對應守則
- [[subagents]]：subagent 卸載大量中間輸出減少 rot
- [[claude-usage-dashboard]]：`/usage` 監控水位

## 尚未解決的疑問

- 1M context 在 70% 水位的具體 token 數？需查 `/usage` 實測
- Context rot 在 Opus／Sonnet／Haiku 三模型表現差異？

## 來源（自動維護）

- [[2026-05-13-thariq-claude-code-session-management-1m-context]]
