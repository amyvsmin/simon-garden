---
title: "Claude Code /goal 完整教學（YAHA学堂 4 分鐘速講）"
date: 2026-05-14
type: 來源分析
url: "https://www.youtube.com/watch?v=TE9vSqBI_Sg"
inbox-id: "360f85da-554f-81c8-b566-d81f78803054"
concepts: [claude-code-goal-command, hooks]
projects: []
created: 2026-05-14
---

## 摘要

YAHA学堂 2026-05-14 發布的 4 分鐘速講，介紹 Claude Code 2.1.139 剛上線的 `/goal` 指令：使用者寫一個完成條件，Claude 跑完一輪後背景的 Haiku 評估器讀整段對話判斷是否達成、未達成自動再跑、達成自動清掉。講者用 lint 七個錯誤的 demo 示範一鍵自動修，並提出「條件寫成有證據的形式」的三條規則（可量終點／證明指令／不能動的東西）。逐字稿跟官方文件比對主要概念對得上、但兩處要打折扣：「token 不會多扣錢」實際上是「typically negligible」不是免費、「headless 是不外傳秘技」實際上官方文件直接寫在 Run non-interactively 段。

## 核心概念

- [[claude-code-goal-command]]：本支影片主題、Claude Code 2.1.139 新指令、寫條件 + Haiku 評估到達成為止
- [[hooks]]：`/goal` 底層是 session-scoped prompt-based Stop hook 的包裝；本支補完了 Stop hook 兩種模式（command vs prompt-based）的差異

## 對 Simon 的應用

- **KW γ 批次消化**：inbox 累積 10+ 篇時、寫「直到 unprocessed = 0 + changelog 全 success」、解每篇敲 enter 的疲勞
- **vault migration 收尾類**：寫「直到 wikilink 全部解析到實檔 + changelog N 筆全 success + 25 turn 停手」、適合 Phase 7 端到端驗證
- **LINE bot／Reading Garden 部署循環**：寫「直到 wrangler deploy 退出 0 + curl health 回 200」、這是官方範例 1:1 對得上的用法
- **不適合**：週月季復盤（要 Simon 親身參與、復盤 skill 不上 cron）、寫 Substack／日記、Coursera 課程筆記、公司 IT 對人協作
- **計費注意**：互動式 session 跑沒事、headless `claude -p "/goal ..."` 走 2026-06-15 上路的每月 $100 Agent SDK 額度桶（見 user-memory `project_claude_max5x_agent_sdk_credit.md`）

## 原文要點

- `/goal` 寫一個完成條件、Claude 跑完一輪後 Haiku 自動判斷、達成才停
- 跟 `/loop`、auto mode 的差別：「loop 看時鐘、goal 看結果」
- 條件三規則：可量終點（測試結果／退出碼／檔案數／queue 空）／指定證明指令／講清楚什麼不能動
- 嘴砲陷阱：「重構完成」這種感覺型條件 Haiku 看 Claude 講「我做完了」就放行；要寫成有證據的形式（npm test 退出 0、git status clean）
- 講者自己踩過的雷：條件加「不能 skip 任何測試」避免 AI 把失敗測試標 skip 算過關
- 影片漏掉但官方有的：4000 字上限、`or stop after N turns` 硬煞車、`/goal clear` 多種別名、`--resume` 後條件保留但計數重置
- 兩處誇大：影片講「token 不會多扣錢」（實際是 typically negligible、不是免費）、「headless 是不外傳秘技」（官方文件公開段落）

## 原始連結

- https://www.youtube.com/watch?v=TE9vSqBI_Sg
