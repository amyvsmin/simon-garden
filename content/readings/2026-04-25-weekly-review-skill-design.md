---
title: 週復盤系統設計（Weekly-Review skill）
date: 2026-04-25
type: 綜覽
url: ""
tags: [claude-code, skill, weekly-review, notion]
concepts: []
notion-page-id: 34df85da-554f-8158-802a-f4000390f450
---

## 摘要

把週復盤從 Notion AI 搬到 Claude Code weekly-review skill。撈三週復盤確認 W16 結構為標準，加 ACG+D 戰略視角，採 Notion automation 建頁 + skill 填內容架構，主動觸發。明天 04/26 第一次正式跑 W17。

## 核心概念

本綜覽頁不萃取概念，純記錄 skill 設計過程。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
把週復盤從 Notion AI 搬到 Claude Code 的 `weekly-review` skill。整套設計於 2026-04-25 完成，明天 04/26 第一次正式跑 W17。

## 動機

Notion AI 產 W16 結構不錯，但無法 query Notion relation rollup（拿不到年度 KR 達成率），也無法跨 DB join。對 Simon 來說週復盤的核心是「把週產出對齊年度方向」，這必須由 Claude Code 用 MCP 做。

更深層動機：早上釐清「寫日記 ≠ Claude 自動記憶」這個誤解。Claude 對 Simon 的認識靠 memory + CLAUDE.md，日記寫進 Notion 不會自動回灌。週復盤是把日記內容萃取成 memory candidate 的核心管道。

## 關鍵決策

1. 格式沿用 W16 結構（6 段：引言 / 做得好 / 卡點 / 主題 / 下週行動 / 一句話結論）
2. 加戰略視角 ACG+D：A 年度 KR / C 學習曲線 / G Memory 增量 / D 健康訊號（點到）
3. Notion automation 建空頁，skill 填內容：分工乾淨
4. 主動觸發：Simon 親身參與，不上 cron
5. 跟 KW 健檢獨立：兩套流程同晚但不交叉
6. 自動關聯 Project + Action：從復盤頁填 relation，Notion 雙向同步

## 戰略視角為什麼選 ACG+D

從 7 個候選（A 年度 KR、B 長期專案、C 學習曲線、D 健康、E 人生目標、F KM 健康、G Memory）篩出 ACG 必出 + D 點到。

- B 散在做得好 / 卡點段，不獨立
- E 太私密、頻率太密，放月／季復盤
- F 跟 KW 健檢重複（健檢每週日 21:00 跑）

## 原文要點

## 字數預估

W16 原 ~1100 字 + 戰略視角段 → 1400–1600 字。

## 為什麼選主動觸發（不上 cron）

Simon 明確：「復盤這種東西本來就要親身參與才是」。判斷邊界：價值在參與 = 不自動；價值在減負擔 = 可自動。對照 KW 健檢是健檢類可自動，週復盤是參與類不自動。已升級為 user-memory feedback。

## 11 步執行流程

1. 解析週次 + 日期範圍
2. Query 復盤 DB 找該週頁
3. 撈 inline DB view URLs
4. 撈當週日記（filter 掉 -1 天誤差）
5. 撈當週 Action（補一道「最後更新時間 + 任務完成」query）
6. 撈 OKR 達成率快照
7. 撈 Google Cybersecurity 進度
8. 分析 Project 投入分佈
9. 選 Top Action（戰略級 1–5 個）
10. Claude API 一次產出本週總結
11. 寫入 Notion（properties + title 加副標）

## 原始連結

無原文 URL（原創設計記錄）。

Reference：
- vault：~/vaults/SimonVault/Projects/Weekly-Review/README.md
- SKILL：~/.claude/skills/weekly-review/SKILL.md
- 舜子的週復盤庫 Notion DB：304f85da-554f-81b4-986b-e01e3dd7ee8c
- W16 復盤（標準格式來源）：347f85da-554f-80ed-83b0-ccd5931ee007
- 北極星與年度目標：304f85da-554f-81f6-a69e-ecf13508eafd
