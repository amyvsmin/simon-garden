---
name: 規則比程式碼重要
aliases: [規則比程式碼重要, rules over code, 規則表 > code, 規則優先, prompt rules over code, 規則先於實作]
category: AI
status: active
confidence: 已驗證
created: 2026-05-14
last-queried: ""
query-count: 0
---

## 定義

跟 AI 協作做事時、花在「寫規則給 AI 看」的時間比花在寫程式碼還多、且回報更高。出處：雷蒙迷你課 3-4 日本旅行 AI 拍照收據自動記帳案例——15 條日本稅制／折扣規則表 vs Next.js 整個前後端的時間分配。

## 關鍵面向

- **AI 強、但你得給方向**：Gemini／Claude 圖片辨識、翻譯能力很強、但不代表「會做對」；規則越清楚、行為越穩定
- **真實場景滾出來的規則才有效**：雷蒙第一版 5 條規則 → 邊旅行邊修改到 15 條；不是預想式而是「跑到哪裡撞牆就補一條」
- **跟 [[claude-md-reflexive-law]] 同源、不同層級**：反射律是「行為偏差怎麼處理」（debugging 角度）、本條是「協作時間怎麼分配」（建構角度）
- **規則類型多元**：稅制／折扣（領域 domain rules）、命名／格式（structural rules）、優先順序／例外（policy rules）——都歸在「規則」之下
- **規則本身需要版本管理**：規則表會增刪、要有 changelog 機制（Simon vault 的 `9-ops/changelog.jsonl` 就是這個用途）

## 應用場景

- **Simon KW 三層拆**：`rules/vault-writing.md`（concept naming + _index.md 雙保險 + changelog enum）+ KW γ skill SKILL.md 主流程 + 4 個 references——規則行數 > 實際 vault 寫入 code 行數
- **course-notes skill**：YAML frontmatter 規範 + 中英文重點整理 form + 五層路徑結構規則——都是 rules、不是 code
- **morning + journal 閉環**：候選任務 emoji 分類 rules、Calendar 待辦類判定 rules（2026-05-14 新增 7 條判定條件）
- **雷蒙日本記帳案例對照**：3 種日本稅制（含税／外税／免税）+ 2 種折扣格式 → 15 條規則表給 Gemini；Next.js 前後端 1 天搞定、規則表佔了整個專案最多時間

## 相關概念

- [[claude-md-reflexive-law]]：debugging 角度的姊妹條目
- [[skill]]：skill 本體就是規則的固化形式
- [[claude-code]]：本條目最主要的應用環境

## 尚未解決的疑問

- 規則表的最佳粒度？太粗則 AI 仍要自己推、太細則 maintenance 成本高；雷蒙 15 條是日本旅行一個月滾出來的、Simon 的 KW γ rules 也是 3 週滾出來的、似乎「跑一個完整使用週期」是合理週期
