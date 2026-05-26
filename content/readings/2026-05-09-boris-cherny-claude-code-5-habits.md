---
title: "Claude Code 創始者 Boris Cherny 親授 5 個高效習慣"
date: 2026-05-09
type: 來源分析
url: "https://www.inside.com.tw/article/41252-claude-code-pair-programming"
inbox-id: "35cf85da-554f-816e-bcd5-f549902ef99d"
concepts: [claude-code-onboarding-qa, claude-code-iteration-loop, parallel-claude-sessions]
projects: []
impact: high
created: 2026-05-10
reviewed: 2026-05-18
tldr: "Inside 報導 Anthropic Claude Code 工程主管 Boris Cherny 親自示範的 5 個高效習慣：(1) 進新 codebase 先 Q&A 不要直接改程式 (2) 大改動前先讓 AI 規劃 (3) 給 AI 驗證方式進入自我修正循環 (4) 用 CLAUDE.md 建立專案記憶 (5) 平行 5 視窗 + git worktree 一天送 30 PR。"
stage: growing
icon: "⚡"
---

## 摘要

Inside 報導 Anthropic Claude Code 工程主管 Boris Cherny 親自示範的 5 個高效習慣：(1) 進新 codebase 先 Q&A 不要直接改程式 (2) 大改動前先讓 AI 規劃 (3) 給 AI 驗證方式進入自我修正循環 (4) 用 CLAUDE.md 建立專案記憶 (5) 平行 5 視窗 + git worktree 一天送 30 PR。核心心法是把 AI 當工程夥伴、用 vibe coding 的協作姿態取代「下指令」式使用、CC 是設計成適應你的工作流而不是強迫你改變習慣。

## 核心概念

- [[claude-code-onboarding-qa]]：進入一個不熟悉的 codebase 時，不要一開始就讓 AI 動手改程式碼，而是先讓它當顧問做 Q&A——問它「這個 repo 的架構是什麼？」「這段程式碼為什麼這樣寫？」。Boris 說 Anthropic 內部新工程師的 onboarding 因此從幾週縮短到幾天，因為 AI 能快速閱讀整個 codebase 並回答脈絡性問題，省去大量翻文件跟問同事的時間。
- [[claude-code-iteration-loop]]：讓 AI 寫完程式碼之後能自己驗證對不對、自己修正錯誤，而不是每次都等人類來看。做法是給 AI 明確的驗證方式：跑測試、截螢幕畫面、啟動模擬器看結果。AI 拿到驗證回饋後會自動進入「寫 → 測 → 改 → 再測」的循環，人類的角色就從逐行 review 升級為最終驗收。
- [[parallel-claude-sessions]]：同時開多個 Claude Code 視窗，每個視窗用 git worktree 隔離在獨立的工作目錄，互不干擾地平行推進不同任務。Boris 自己同時開 5 個視窗，搭配系統通知在任務完成時提醒他切過去看結果，一天可以送出 20–30 個 PR，原本需要 5 小時的工作壓縮到 1–2 小時。
![[2026-05-09-boris-cherny-claude-code-5-habits-claude-code-onboarding-qa.png|275]]

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- ✅ Q&A 模式對 Simon 接公司舊 codebase 直接適用：BIGFIX POC、Omnissa MDM 導入時先讓 CC 跑 Q&A 理解現況
- ✅ iteration loop 對 KW γ migration、course-notes 寫入 等批次任務有用：明確設定驗證指令（jq 驗證 changelog、grep 驗證 vault path）
- ⏳ 平行 5 視窗對 Simon 目前還早：先把單視窗 plan-mode + skill 流程穩定才談平行；目標可從「同時 2 視窗」開始
- ✅ CLAUDE.md 部分 Simon 已實踐：~/.claude/CLAUDE.md 全域 + 各專案 CLAUDE.md（兩處 +），對應 [[claude-md-dual-nav]] 雙層導航

## 原文要點

- CC 不是補完工具、是全自主代理（fully agentic）的終端機 AI
- Anthropic 80% 工程師每天用 CC、Boris 加入後一個月做出原型
- CLAUDE.md 是 CC 最被低估的功能、Boris 自己的超過 100 行
- vibe coding 的重點是「提供足夠清晰的情境、計畫和驗證方式」、讓 AI 真正發揮

## 原始連結

- [https://www.inside.com.tw/article/41252-claude-code-pair-programming](https://www.inside.com.tw/article/41252-claude-code-pair-programming)
- Notion inbox 短網址：[https://share.google/6sDtUM2wQMAF0UUna](https://share.google/6sDtUM2wQMAF0UUna)
