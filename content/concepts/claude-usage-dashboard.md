---
title: "Claude 額度面板三層結構"
slug: claude-usage-dashboard
aliases: [Claude 額度面板, Claude usage dashboard, Current Session, Weekly Limits, Extra Usage, 會話額度, 週期額度]
category: AI
confidence: 已驗證
created: 2026-05-10
---

# Claude 額度面板三層結構

## 定義

Claude 桌面／網頁版額度顯示拆三層：Current Session（當前會話的單次記憶佔用）、Weekly Limits（整個帳號跨會話的週期總血條）、Extra Usage（用完總額後切換到按量計費的額外用量）。三層彼此獨立、混淆任一層都會誤判實際耗用。

## 關鍵面向

- **Current Session 是會話內記憶水位**：百分比反映歷史對話塞了多少 context、逼近 100% 時模型處理新任務能力下降，跟整體帳號額度無關
- **Weekly Limits 才是真血條**：以週為循環、明確標出下次滿血復活時間，是配速判斷的核心指標
- **Extra Usage 是失血後的按量計費**：跨過 Weekly Limits 自動切換、若沒主動觀察會出現意外高額帳單
- **三層不可混用**：常見錯誤把 Current Session 進度誤判為帳號總額；省 Current Session（壓縮歷史）≠ 省 Weekly Limits（少發 prompt）

## 應用場景

- Simon 工作場景：自架 Claude Code + Claude Pro 訂閱，了解三層才能在週中知道剩多少配額、何時該切到 [[subscription-vs-api-cost|API 計費]] 或等 reset
- 一般場景：訂閱型 AI 工具的「會話 vs 週期 vs 加量」三層計費都類似，識別模式可遷移到其他工具

## 相關概念

- [[token-saving-rules]]：清空 Current Session 是省 token 的第一步
- [[subscription-vs-api-cost]]：Pro/Max 訂閱跟 API 計費結構分開、Extra Usage 走 API 計費
- [[claude-slash-commands-control]]：/context 指令直接顯示 Current Session 水位

## 尚未解決的疑問

- Anthropic 是否會把 Weekly Limits 的具體 token 上限數字公開？目前只看百分比

## 來源（自動維護）

- [[2026-05-09-claude-token-limits-tutorial]]
