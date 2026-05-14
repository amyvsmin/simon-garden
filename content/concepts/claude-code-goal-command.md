---
title: "Claude Code /goal 指令"
slug: claude-code-goal-command
aliases: [/goal, goal 指令, Claude Code goal mode, goal command, 完成條件指令]
category: 自動化
confidence: 已驗證
created: 2026-05-14
query-count: 0
---

# Claude Code /goal 指令

## 定義

Claude Code 2.1.139（2026-05-12）上線的 session 級指令。使用者寫一個完成條件，Claude 跑完一輪後由背景小模型（預設 Haiku）讀整段對話判斷條件是否達成、未達成就再起一輪、達成就自動清掉 goal、整段 session 不用手動敲確認。

## 關鍵面向

- **本質**：包裝成 session-scoped 的 [[hooks|prompt-based Stop hook]]，每輪結束自動跑評估器；不是獨立新機制
- **與 [[claude-code-iteration-loop|自我修正循環]]、`/loop`、auto mode 的分工**：goal 看條件達成、`/loop` 看時間間隔、auto mode 只省掉一輪內每個 tool 確認、Stop hook 是 settings 級的長駐版
- **條件三規則**：可量終點（測試結果、退出碼、檔案數、queue 空）／講清楚怎麼證明（哪個指令該怎麼跑）／講清楚什麼不能動（測試檔、設定檔、package.json）
- **嘴砲陷阱**：條件寫成「重構完成」這種感覺型、Haiku 看到 Claude 講「我做完了」就放行；要寫成「`npm test` 退出 0」這種看得到證據的形式
- **上限與行為**：條件最多 4000 字、可加「or stop after 20 turns」做硬煞車、`/goal` 無參數查狀態、`/goal clear`（或 stop/off/reset/none/cancel）手動停、`--resume` 後條件保留但 turn／timer／token 基準重置
- **計費**：互動式 session 跑只計入 Max 5x 訂閱；headless `claude -p "/goal ..."` 走 2026-06-15 起每月 $100 [[claude-max5x-agent-sdk-credit|Agent SDK 額度桶]]；每輪 Haiku 評估會多計一筆但 token 量典型可忽略
- **環境限制**：要 workspace 已 accept trust dialog、`disableAllHooks` 或 `allowManagedHooksOnly` 任一啟用就不能跑（屬於 hooks 系統）

## 應用場景

- Simon 工作場景：
  - **KW γ 批次消化**：寫「直到 Notion 資訊收集箱 unprocessed 數量 = 0 且 changelog.jsonl 最新 N 筆全 success」、解 inbox 累積 10+ 篇要敲很多 enter 的問題
  - **vault migration 收尾**：寫「直到 vault grep `[[` 全部 reading 都能解析到實檔、且 changelog.jsonl 最新 N 筆全 success、或 25 turn 停手」、適合 Phase 7 端到端驗證類批次任務
  - **LINE bot／Reading Garden 部署循環**：寫「直到 `wrangler deploy` 退出 0 且 `curl` health endpoint 回 200、不能改 wrangler.toml production env」、這是官方範例最 1:1 對得上的用法
- 一般場景：module migration 到測試全綠、設計文件實作到所有 acceptance criteria 通過、大檔拆模組到每檔 size 在預算內、queue 清空類批次處理

## 不適合的場景

- 復盤、寫文章、寫日記、學習筆記類沒有客觀終點的任務（評估器只看 transcript 嘴上有沒有講完）
- 跟人對接、不在 Claude Code 裡跑的工作（公司 IT 對外協作、Coursera 上課、Notion 親身復盤）

## 相關概念

- [[hooks]]：goal 底層是 prompt-based Stop hook 的 session-scoped 包裝
- [[claude-code]]：goal 是 CC 的內建指令、要 2.1.139 以上版本
- [[claude-code-iteration-loop]]：goal 自動化了 Boris Cherny 描述的「跑測試→看錯→修正→再測試」循環、把確認 enter 拿掉
- [[claude-max5x-agent-sdk-credit]]：headless 模式跑 goal 會吃 6/15 上路的額度桶

## 尚未解決的疑問

- 跟 superpowers plugin 既有 Stop hook 同時啟用會不會衝突
- 每輪 Haiku 評估的 token 平均量級（官方只說「typically negligible」、沒給數字）

## 來源（自動維護）

- [[2026-05-14-yaha-claude-code-goal]]
