---
title: "Claude Code Plugin 三層 Scope（User／Project／Local）"
slug: claude-code-plugin-scope
aliases:
  - User scope
  - Project scope
  - Local scope
  - plugin 三 scope
  - plugin 安裝範圍
  - claude code plugin scope
  - CC plugin scope
category: AI
confidence: 已驗證
created: 2026-05-22
---

## 定義

[[claude-code]] plugin 安裝時的三層作用域選項，決定 plugin 寫在哪、影響哪些對話、會不會跟著 repo 走。User／Project／Local 三選一、對應「個人習慣性工具／團隊統一工具／自己亂試」三種使用情境。

<p align="center"><img src="assets/covers/claude-code-plugin-scope-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **User scope**：plugin 寫到使用者帳號底下（個人 `~/.claude/` 等位置）、所有專案共用；適合個人習慣性工具（例如自家 KW γ skill、course-notes、復盤 skill 這類跨專案 skill）；不會 commit 出去、不會影響別人
- **Project scope**：plugin 寫進**當前專案**的 `.claude/settings.json`、會 commit 進 repo；同事 clone 下來 [[claude-code]] 自動提示要不要裝、達到團隊統一工具效果；適合「這個 repo 必裝」的工具（例如 repo 專屬的 lint hook、CI 整合 MCP）
- **Local scope**：跟 Project scope 同目錄但走本機獨立檔（不會 commit）；自己亂試新 plugin 時用、避免污染 repo；對應 `.claude/settings.local.json`
- **選擇原則**：通用 → User；團隊一致 → Project；測試／實驗 → Local；判斷錯了可後續搬動、不是不可逆

## 應用場景

- **Simon 工作場景**：Simon 自家 skill（KW γ／course-notes／復盤等）跨專案用、放 User scope；未來公司 IT 專案有 repo 要團隊統一工具時、放 Project scope；測試新 plugin（例如 claude-code-setup 本身、或社群 plugin）先 Local 試
- **一般場景**：新人加入團隊、Project scope 自動讓他裝齊；個人愛用工具裝 User scope 跟人借電腦也有；任何「不確定要不要長期用」的 plugin 先 Local

## 相關概念

- [[claude-code]]：scope 機制屬於 CC 設定系統
- [[claude-code-setup-plugin]]：安裝該 plugin 時就要選 scope
- [[skill]]：skill 也跟著 plugin 一起進對應 scope
- [[hooks]]：hook 同理、scope 決定哪些對話會跑

## 尚未解決的疑問

- User / Project / Local 三者實際檔案位置詳細路徑（影片只口頭講、沒展示檔案）
- 同 plugin 三 scope 都裝會怎樣（優先序、覆蓋規則）
- Project scope plugin 第一次裝是觸發 SessionStart 提示、還是某個事件

## 來源（自動維護）

- [[2026-05-22-yaha-claude-code-setup-plugin]]
