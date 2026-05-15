---
title: 雷蒙 24 小時 Claude Code 迷你課｜四週讀完心得
date: 2026-05-14
type: 課程心得
url: https://lifehacker.tw/courses/24hr-claude-code-tutorial
tags: [claude-code, ai-agent, course-review, lifehacker, raymond]
concepts: [claude-md-reflexive-law, rules-over-code, cli-api-mcp-priority]
notion-page-id: 341f85da-554f-8011-8ab3-ea2e08598c72
---

## 摘要

雷蒙（侯智薰）「24 小時開始活用 Claude Code（AI Agent）」迷你課四週讀完。共精讀 9 篇章節（1-3 ~ 2-4 基礎篇 + 3-1 ~ 3-5 應用篇）+ 掃讀 1 篇（0 學習方法）；1-1 安裝、1-2 git 入門因 IT 工程師背景刻意略過。三個最深的觀念衝擊抽成 [[claude-md-reflexive-law]]、[[rules-over-code]]、[[cli-api-mcp-priority]] 三個 concept；最大實際產出是 daily 3-things 閉環（morning + journal skill 改造、5/13 完成）。

## 核心概念

- [[claude-md-reflexive-law]]：AI 行為偏差時改規則寫進 CLAUDE.md／rules／user-memory、不去研究 CC 內部機制（雷蒙 2-1 commit `ef79968` meta-rule）
- [[rules-over-code]]：跟 AI 協作時寫規則時間 > 寫程式碼時間、回報更高（雷蒙 3-4 日本記帳 15 條稅制規則 vs Next.js 全棧）
- [[cli-api-mcp-priority]]：AI 操控軟體優先順序 CLI → API → MCP → Browser Use、底層協定優先（雷蒙 2-3 + Simon 補 CLI 細化）

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
**最大實質改動：daily 3-things 閉環**（3-3 衍生、5/13 完成）

- morning skill 撈 Calendar + Action DB + Calendar 待辦類組成候選 → 我挑卡 → 寫今日任務關聯（relation）
- journal skill 晚上讀關聯追問未完成原因寫卡片「問題」屬性（property）
- 今天（5/14）就在自試、Calendar 待辦類判定規則當天就補進 morning skill Step 3b

**其他衍生改動**

- session split pilot（1-3 衍生、5/10 起）：user-memory → SimonVault `0-context/` 軟連結（symlink）、跨 24 條 memory；5/16 評估三條路（批量遷移／調觸發／回退 pilot）
- memory 系統強化：寫 `feedback_consolidate_before_create`（2-1 衍生）+ `feedback_session_split_proactive`（1-3）、升級 `feedback_tool_awareness`（2-3）
- PreCompact 掘勾（hook）計畫文件寫成規格（2-2 衍生）、留新對話實作

## 比雷蒙範例走得更深的地方

四週讀完後盤點、Simon 系統在四個維度已超越雷蒙範例：

- **rules/ paths-conditional**：Knowledge Wiki 三層拆關鍵組件、雷蒙 2-2 沒提這層
- **memory 雙層**：L1 user-memory 跨專案 + L2 `~/.claude/projects/<hash>/memory/` 專案敏感
- **CLAUDE.md 雙層分層**：全域偏好 + 專案敏感
- **commands/ 自然語意觸發**：「早安」即等於 `/morning`、更前一步

## 沒命中的範圍

誠實列出本課對 Simon 場景不適用的部分、避免未來重複評估：

- **3-2 DESIGN.md / 3-5 Landing Page / `/cards`**：對外通道是 Substack + Reading Garden + LINE bot、沒銷售產品；DESIGN.md 觸發點未到（Substack 累積 6 篇以上或 Reading Garden 客製化）
- **2-4 雷蒙 D1（雲端同步 + symlink）**：單裝置 WSL + 7 個 git 倉庫推送已達成可攜性
- **應用篇案例 3-4 + 3-5**：本質是看別人完整想 → 做的歷程、不要求跟著做
- **1-1 安裝 / 1-2 Git 入門**：IT 工程師背景 + CC 已自架一個月、刻意略過

## 課後餘音

- 加速三習慣中「**每週檢視 MEMORY.md**」沒做——可考慮做 `/memory-review` 斜線指令主動喊（復盤類不上 cron 原則）
- **Git log 整合到 daily 3-things** 仍是觀察點——等閉環跑穩、若抓不到細顆粒卡關訊號再加
- **DESIGN.md / Claude Design 未來觸發點**已盤點：發 IG 圖卡／Reading Garden 改主題／Substack cover 不想手做 SVG

## 章節索引

| 章節 | 標題 | 狀態 | 對我意義 |
|---|---|---|---|
| 0 | 有效學習這堂課的方法？ | 掃讀（5/14） | 心理建設篇、無新東西 |
| 1-1 | 開始安裝配置你的 Claude Code | ⏭️ 略過 | IT 工程師 + CC 自架一個月 |
| 1-2 | GitHub 與 Git 入門 | ⏭️ 略過 | 7 repo 在 push |
| 1-3 | 怎麼跟 Claude Code 提問／協作最有效？ | 精讀（5/10） | session split pilot 衍生 |
| 2-1 | 讓 AI 記住你的偏好 | 精讀（5/12） | [[claude-md-reflexive-law]] + `feedback_consolidate_before_create` 衍生 |
| 2-2 | Claude Code 完整架構速覽 | 精讀（5/12） | PreCompact 掘勾計畫衍生 |
| 2-3 | 把工具授權給 AI、組合出你的每日工作流 | 精讀（5/12） | [[cli-api-mcp-priority]] 衍生 |
| 2-4 | AI 分身資料夾結構：雷小蒙拆解 | 精讀（5/12） | 觀念複盤、Simon L2 已超越雷蒙 |
| 3-1 | 用 Plan Mode 讓 AI 先想清楚再動手 | 精讀（5/13） | obra 原版 target、無新規則 |
| 3-2 | 建立 DESIGN.md 品牌說明書 | 精讀（5/13） | 場景不命中、awesome-design-md repo 進工具袋 |
| 3-3 | 把每日反思變成自動化 Skill | 精讀（5/13） | ⭐ daily 3-things 閉環衍生 |
| 3-4 | 日本旅行 AI 拍照收據自動記帳 | 精讀（5/14） | [[rules-over-code]] 衍生 |
| 3-5 | 做一個自己的品牌 Landing Page | 精讀（5/14） | 場景不命中、escape hatch pattern 觀察點 |

## 個人結論

整篇迷你課最具實作價值一篇是 3-3、最大概念衝擊是 2-1 + 2-3、3-5 + 3-4 案例篇只貢獻薄薄一層。雷蒙課的真正回報不在「學會 Claude Code 怎麼用」、在「把跟 AI 協作的時間配置／優先順序／反射模式內化」——這三件事透過上面三個 concept 留下來、未來其他 reading／心得可以反向雙鏈複用。

## 來源

- 課程主頁：[24hr Claude Code Tutorial](https://lifehacker.tw/courses/24hr-claude-code-tutorial?affcode=ns-24hr-cc-preorder)
- 課程 repo：`lifehacker-tw/claude-code-mini-course`（GitHub private、需用 `gh api contents` 抓 markdown）
- 對應 Notion 任務卡：[【迷你課】24 小時開始活用 Claude Code（AI Agent）](https://www.notion.so/341f85da554f80118ab3ea2e08598c72)
- 對應 user-memory 詳細紀錄：`~/.claude/user-memory/reference_lifehacker_minicourse_progress.md`（10 篇逐篇對照、Claude 視角）
