---
title: "Claude Code 回溯（/rewind）"
slug: claude-rewind
aliases: [claude-rewind, Claude rewind, /rewind, 回溯機制, Claude Code 回溯, rewind]
category: AI
confidence: 待驗證
created: 2026-06-07
query-count: 0
---

## 定義
Claude Code 的對話回溯機制。快速按兩次 Esc（或打 `/rewind`）就能跳回對話中任何一個先前訊息、從那個點重新開始；該點之後的訊息會從 context 移除。設計目的是取代「在錯誤路徑上再寫一輪修正指令」——與其疊補丁，不如退回分岔點用新思路重新提示。

## 關鍵面向
- **操作**：雙 Esc 或 `/rewind`
- **範圍限制**：只能回滾 Claude Code 編輯過的檔，不能回 Bash 動作的副作用
- **保留期**：30 天
- **跟 context 管理的關係**：回到健康的 context 點重新提示，是對抗 [[context-rot]]（長對話效能衰退）的手段之一
- **歸屬**：[[claude-slash-commands-control]] 六個內建斜線指令之一

## 應用場景
- **Simon 工作場景**：Claude Code 走偏時，與其連續糾正堆疊 context，不如 rewind 回分岔點換思路；長對話卡住時回健康點重啟
- **一般場景**：AI coding 工作流的錯誤復原、context 衛生

## 相關概念
- [[claude-slash-commands-control]]：rewind 是其中一個斜線指令
- [[context-rot]]：rewind 可回到未腐爛的 context 點
- [[claude-code]]：本機制所屬產品

## 來源
- [[2026-05-13-thariq-claude-code-session-management-1m-context]]
- [[2026-05-14-yt-claude-code-basics-intro]]
