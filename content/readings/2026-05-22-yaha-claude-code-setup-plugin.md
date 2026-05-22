---
title: "還在盲抄 Claude Code 設定檔？Anthropic 官方外掛 1 分鐘幫你自動掃描專案！"
date: 2026-05-22
type: 來源分析
url: "https://www.youtube.com/watch?v=vzZPNH4pNEE"
inbox-id: "368f85da-554f-81a9-8a87-dd22abd7052a"
concepts: [claude-code-setup-plugin, claude-code-plugin-scope]
projects: []
created: 2026-05-22
---

## 為什麼讀

Simon 想知道這支影片有什麼可以用的。Simon-Agent 目錄滿手自家 skill／hook／rules、但偶爾想知道「有沒有漏掉哪些既有官方 pattern 沒用上」；這支講的是 Anthropic 官方推一支會掃專案告訴你該裝什麼的 plugin、剛好對 Simon-Agent 跑一次能驗證自家設定齊不齊。

## 摘要

YAHA学堂 2026-05-22 發布的 6 分 16 秒教學，介紹 Anthropic 官方新推的 [[claude-code-setup-plugin]]。一行指令裝完、選 scope（User／Project／Local 三層、見 [[claude-code-plugin-scope]]）、reload 後就能用人話觸發。底層是一支 [[skill]]、寫死掃描流程：讀 `package.json`、看 imports、ls 目錄結構、讀 [[instructions-file|CLAUDE.md]]，產結構化繁中報告。報告分五段：專案判讀／[[mcp|MCP]] 推薦／Skills 推薦（先點名 Claude Code 內建可用如 security-review、code-review、verify、run，再建議自包）／[[hooks|Hooks]] 推薦（具體 pattern 五個）／[[subagents|Subagents]] 推薦，最後給 CP 值 top 5 快速啟動。三種觸發講法（通掃／單類別深挖／新手 onboarding）共用同支 skill、口吻深度不同。每條推薦都附「為什麼適合這個專案」客製理由、取代盲抄 dotfiles。

![[2026-05-22-yaha-claude-code-setup-plugin-claude-code-setup-plugin.png|275]]

## 核心概念

- [[claude-code-setup-plugin]]：本支影片主題、Anthropic 官方 plugin、掃專案產推薦報告
- [[claude-code-plugin-scope]]：安裝時 User／Project／Local 三層選擇、對應「個人習慣／團隊統一／自己亂試」

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

兩類分開列：

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- ⏳ **git status 自動注入 context 的 hook**：影片講「每次送 prompt 自動把 git status 注入 context（避免 Claude 不知道哪些檔案還沒 commit）」、Simon-Agent 工作流常 commit 一半才發現自己沒搞清楚未追蹤檔；這條 hook 可能值得加進 `~/.claude/settings.json` global 級 UserPromptSubmit hook
- ⏳ **危險指令二次確認 hook**：影片提到的另一個 hook pattern；Simon 目前 bypassPermissions、靠 deny rules 擋；可考慮加 PreToolUse hook 對 `rm -rf`／`git reset --hard`／`git push --force` 等做二次確認
- ⏳ **內建 skill 還沒用上的盤點**：影片點名 [[claude-code]] 內建 `security-review`／`code-review`／`verify`／`run` 可直接用；Simon 看自家可用 skill 清單時內建項全沒看到、可能漏裝或沒納入工作流（system reminder 顯示其實有 verify／run／code-review／security-review、但 Simon 沒主動用過）

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- ⏳ **裝這個 plugin 對 Simon-Agent 跑一次**：看自家滿手 skill／hook／rules 之外有沒有被官方推薦但漏掉的；User scope 裝即可
- ⏳ **另對未來新建專案跑一次當起手式**：例如 simon-frieren-bot 已上線 Phase 1+2、有 Worker + Pages + GitHub repo、可以對這個 repo 跑 setup plugin 看官方對 PWA + Cloudflare Worker stack 會推什麼
- ⏳ **看一下 plugin demo repo**：影片提的 `claude-plugin-demo`（GitHub）是 Next.js + Prisma + Stripe + Vitest + Playwright stack；想看官方對這個 stack 推什麼當作 reference

## 原文要點

- **問題**：[[claude-code]] 可裝元件分五類（MCP／Hooks／Skills／Subagents／Commands）、新手不知該裝哪些、抄網路 dotfiles 結果一堆用不到
- **解法**：Anthropic 官方推 `claude-code-setup` plugin、一行指令裝、選 scope、reload、用中文／英文人話觸發即可
- **三 scope 選擇**：User（個人帳號跨專案、習慣性工具）／Project（commit 進 repo、團隊統一）／Local（不 commit、自己亂試）；影片示範選 User
- **底層**：是一支 skill、Anthropic 把分析流程**寫死**進 skill 裡、結果可重現；中文觸發 → 繁中報告
- **報告五段**：
  1. **專案判讀**：一句話點 stack（demo 是 Next.js + Prisma + Stripe + Vitest + Playwright 的待辦事項專案、連 CLAUDE.md 寫的「故意留資安問題給教學」都讀到）
  2. **MCP Servers**：Postgres MCP（DB）／Stripe MCP 官方（checkout 路由）／Playwright MCP（test）／GitHub MCP（CI workflow）；表格列推薦／用途／為什麼適合
  3. **Skills**：先點名內建 `security-review`／`code-review`／`verify`／`run` 現成可用、再建議自包 `db-migrate`／`stripe-webhook-test`
  4. **Hooks**：改完 TS 跑 prettier+eslint／改完 schema 跑 prisma generate／git push 前跑測試擋失敗／危險指令二次確認／**每次送 prompt 自動把 git status 注入 context**（講者強調「這招沒人講過」）
  5. **Subagents**：資安／金流／測試／DB／前端／code review 一票專業分工 agent
  - 末段列 CP 值 top 5 給快速啟動
- **三種觸發講法**（同一 skill、口吻深度不同）：
  - **通掃**：「我這個專案該裝什麼」→ 跑全五段報告
  - **單類別深挖**：「我該用哪些 hook／MCP／subagent」→ 只跑單段、挖更深、給 3–5 個建議
  - **新手 onboarding**：「幫我從頭設定 Claude Code」→ 口吻更軟、手把手帶
- **效果**：每條推薦都附「為什麼適合這個專案」客製理由、不是通用清單；中文觸發吐繁中報告超友善
- **講者主張**：「結束盲抄 dotfiles 時代、Claude Code 也該有顧問」

## 原始連結

- https://www.youtube.com/watch?v=vzZPNH4pNEE

## 落地動作與效益

### A 類芙莉蓮優化

**有優化**：

- ✅ **新增 `UserPromptSubmit` hook：自動注入 `git status`**
  - 落地檔：`~/.claude/hooks/git-status-inject.sh`（新建）+ `~/.claude/settings.json` `hooks.UserPromptSubmit` 一條
  - 行為：每次 prompt 送出前、若 cwd 在 git repo 內、注入 branch + ahead/behind + 變更檔案 short status（top 30 行）；非 git repo 安靜退出
  - 安全：timeout 5s、失敗 silent、不阻塞使用者
  - 預期效益：CC 開對話即知 working tree 狀態、不必每次自己跑 `git status` 浪費 turn；Simon 在 vault／Simon-Agent 多目錄跳的工作流尤其受惠
  - 驗證：在 Simon-Agent repo 跑 `bash ~/.claude/hooks/git-status-inject.sh`、回傳 14 變更檔正常

**不優化**：

- ❌ **PreToolUse 危險指令二次確認 hook（決定不加）**
  - 原因：`~/.claude/settings.json` 既有 `permissions.deny` 已涵蓋 `rm *`／`rm -rf *`／`git push --force`／`git reset --hard`／`chmod 777`／`sudo *`／`shutdown` 等 22 條 Bash pattern、全部**直接擋住不放行**；再加 PreToolUse hook 跟 deny rules 重疊、且二次確認比直接擋鬆、會降低保護
  - 結論：保留 deny rules 現狀更安全；真要鬆綁某次、Simon 自己 CLI 跑、不一定要走 CC

- ⏳ **內建 skill 盤點（不寫進規則、改成 Simon 自選情境用）**
  - 原因：四個內建 skill（`security-review`／`code-review`／`verify`／`run`）已透過 `superpowers@claude-plugins-official` 啟用、可直接觸發；不需要寫進 rules／settings；改成 Simon 在對的情境主動用就好
  - 建議觸發情境：
    - `security-review`：commit 一批 auth／API key／權限相關改動前
    - `code-review`：PR 完工前 self-review、找潛在 bug
    - `verify`：UI／script 改動後驗證實際運作（不只型別過）
    - `run`：對 sushi-statusline／frieren-bot 等實際開來看效果

### B 類 Simon 個人動作（後續維護狀態）

- ⏳ 裝 `claude-code-setup` plugin（User scope）、對 Simon-Agent 跑一次看自家滿手 skill／hook／rules 之外有沒有被官方推薦但漏掉的
- ⏳ 對 simon-frieren-bot repo 跑一次、看官方對 Worker + Pages stack 推什麼
- ⏳ 看 plugin demo repo（GitHub `claude-plugin-demo`、Next.js + Prisma + Stripe + Vitest + Playwright stack）當 reference
