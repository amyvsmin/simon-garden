---
title: Simon-Agent 架構設計記錄：CLAUDE.md 分層 + auto-memory 跨專案
date: 2026-04-21
type: 綜覽
url: ""
tags: [claude-code, architecture, memory, hooks]
concepts: []
notion-page-id: 349f85da-554f-81f6-a5c8-ef9d98ddd31c
---

## 摘要

2026-04-21 長對話確定兩個架構決策：(1) CLAUDE.md 依敏感度分層，通用內容搬全域、財務/健康/關係留專案級；(2) auto-memory 跨專案可見用 SessionStart hook 注入 user-memory，不走 symlink。知識點：CLAUDE.md 搜尋路徑、auto-memory 綁 cwd、hook 注入 context 機制、memory 分類應看運作範圍非誕生地。本頁保留決策脈絡，未來檢視架構時對照。

## 核心概念

本綜覽頁不萃取概念，純記錄架構決策過程。

## 對 Simon 的應用

## 討論起點

Simon 以為個人偏好記在全域 CLAUDE.md，實際檢查後發現**全部都在專案級** `~/projects/Simon-Agent/CLAUDE.md`，其他目錄的 Claude Code session 讀不到。由此展開一連串重新整理個人配置的討論。

## 決策 1：CLAUDE.md 依敏感度分層

問題：個人偏好只在專案 CLAUDE.md 意味著在 Simon-Agent 目錄開 CC 才讀得到、在 ~ 或新專案目錄讀不到、Claude 可能用簡體或排比語氣回應（違反使用者規則）。

風險盤點（如果全搬到全域）：
1. 讀取範圍擴大：context 都帶月收入、投資金額、健康紀錄、主管同事姓名
2. 外流管道：可能進 git commit message、PR 描述、MCP tool input、subagent 產出
3. 版控意外：反而降低風險（全域檔不會被 git 追蹤）
4. 共用 / 備份：與雲端同步的既有風險無關

分層原則：

| 層級 | 位置 | 內容 |
|---|---|---|
| Tier A | `~/.claude/CLAUDE.md`（全域） | 基本身分、Claude 指令、知識管理偏好、Knowledge Wiki 規則 |
| Tier B | `~/projects/Simon-Agent/CLAUDE.md`（專案） | 財務、健康、關係、公司專案、事件時間軸 |
| Tier C | `~/.secrets/` | API key、password（已處理，不在 CLAUDE.md 裡） |

執行結果（2026-04-21）：全域檔 156 行 → 266 行；專案檔 189 行 → 95 行；備份 `.bak-20260421` 保留在原位置。

## 決策 2：何時開新專案目錄

開新目錄的真正意義是 context 隔離，不是讓 Claude 存取其他路徑（Read/Write/Bash 工具本來就可以用絕對路徑跨目錄存取）。

換目錄時跟著變的東西：CLAUDE.md 搜尋路徑、auto-memory 目錄（路徑綁 cwd 編碼）、專案級權限、Hooks（專案級 hook 只在該目錄觸發）、git 預設 repo。

不會變的：全域 CLAUDE.md、MCP servers、全域 plugins / skills、帳號訂閱與模型選擇。

判斷準則（符合任一個就值得開新專案目錄）：
- (A) 有獨立的 CLAUDE.md 要寫
- (B) 有獨立的 memory 需求
- (C) 有獨立的 git repo 或權限邊界

## 決策 3：auto-memory 跨專案可見

問題：auto-memory 路徑綁 cwd（`~/.claude/projects/<編碼過的 cwd>/memory/`），換到新專案就是全新空 memory。

三個選項：
1. 全 symlink：簡單但失去隔離
2. 分層 symlink：隔離清楚但每開新專案要手動建 symlink
3. SessionStart hook 注入：建 user-memory，寫 hook 讀其 MEMORY.md 輸出 additionalContext（選用）

選擇選項 3 的理由：現有技術棧已有 hooks、新專案開箱即用、user-memory 更新立即全域生效。

## 原文要點

知識點整理：

- **CLAUDE.md 搜尋路徑**：Claude Code 啟動時，從 cwd 往上走到家目錄，把路徑上找到的每個 CLAUDE.md 都讀進 context
- **auto-memory 路徑編碼**：`~/.claude/projects/<encoded-cwd>/memory/`。cwd 做過路徑編碼（例如 `/home/simon/projects/Simon-Agent` 變成 `-home-simon-projects-Simon-Agent`）
- **Hook 是什麼**：在 Claude Code 生命週期事件觸發時自動執行的腳本。常見事件：SessionStart、UserPromptSubmit、PreToolUse、PostToolUse、Stop。腳本 stdout 會變成 additionalContext 注入當前對話
- **Hook vs n8n 類比**：兩者都是 event-driven 自動化。n8n 多步 workflow 跨系統資料流；Hook 單一腳本依附 CC 生命週期、可影響 CC 對話內容
- **Memory 分類心法**：問「未來 Simon 在另一個目錄開 CC 時，這份記憶有用嗎？」有 → user-memory；沒有 → 專案 memory；不確定 → 預設放 user-memory。判斷依據是運作範圍而非討論發生的目錄

## 原始連結

無原文 URL（原創設計記錄）。

關聯檔案：
- `~/.claude/CLAUDE.md`：全域規則、身分、Claude 指令、Knowledge Wiki
- `~/projects/Simon-Agent/CLAUDE.md`：Simon 敏感資料：財務、健康、關係、公司專案
- `~/.claude/projects/-home-simon-projects-Simon-Agent/memory/`：Simon-Agent auto-memory
- `~/.claude/user-memory/`：跨專案通用 memory
- `~/.claude/hooks/user-memory-inject.sh`：SessionStart hook 注入 user-memory
- `~/.claude/settings.json`：Hook 註冊中心
