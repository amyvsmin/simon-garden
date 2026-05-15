---
title: "Claude /rewind 回溯機制"
slug: claude-rewind
aliases: [Claude /rewind, /rewind, Claude 回溯, Esc Esc 回溯, rewind to message, Claude 退回機制]
category: AI
confidence: 已驗證
created: 2026-05-13
query-count: 0
---

## 定義

Claude Code 的新斜線命令、快捷鍵連按兩次 Esc、跳回任何先前訊息並從該點重新開始對話；後續訊息全部從 context 移除、像時光倒流；用來取代「多輪修正」式的 messy 對話。

## 關鍵面向

- 觸發方式：`/rewind` 命令、或快速連按 Esc 兩次
- 影響：後續訊息全部從 context 移除、不只是 hide、是真的 free 掉 token
- 對比「再修正」式對話：傳統做法是「那不行、換 X 試試」一直疊加；rewind 是回到健康節點換思路重提
- 適用場景：AI 採取錯誤方法（例如挑了不對的 library／設計）、剛讀完檔案就走偏；rewind 到「讀完檔案、還沒做決定」那刻
- 提示重寫技巧：rewind 之後不要說「剛剛那不對」、直接給新指示「用 X 方法做 Y」，假裝對話從這點開始
- 對 [[context-rot]] 的防護：rewind 等於外科手術切掉 rot 的部分、不影響健康 context

## 應用場景

- Simon 工作場景：Claude Code 在 vibe coding 時挑了錯的 library／架構、rewind 回到「讀完 package.json 那刻」用新方向重提
- Simon 工作場景：KW γ 抽 concept 抽歪了、rewind 到「讀完 transcript 那刻」用「優先抓資安／架構維度」重新引導
- Simon 工作場景：course-notes 寫某個 leaf 寫得太囉嗦、rewind 到「讀完 transcript 那刻」加「200 字以內」限制
- 一般場景：debugging session AI 走偏、不要繼續 patch、rewind 重來

## 相關概念

- [[claude-slash-commands-control]]：本概念是該斜線命令集合新增的第 5 個工具
- [[context-rot]]：rewind 是對抗 context rot 的精準工具
- [[token-saving-rules]]：rewind 釋放 token、屬「對話水位管理」延伸

## 尚未解決的疑問

- rewind 是 2026-04 後新功能、Simon 還沒實際用過、需要 dogfood 一次驗證體感
- Esc Esc 在 Tabby 終端機跟 Right Alt 啟動鍵會不會衝突？對應 reference_typeless_tabby_paste.md 已知坑

## 來源（自動維護）

- [[2026-05-13-thariq-claude-code-session-management-1m-context]]
