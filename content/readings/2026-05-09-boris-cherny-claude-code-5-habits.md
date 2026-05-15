---
title: "Claude Code 創始者 Boris Cherny 親授 5 個高效習慣"
date: 2026-05-09
type: 來源分析
url: "https://www.inside.com.tw/article/41252-claude-code-pair-programming"
inbox-id: "35cf85da-554f-816e-bcd5-f549902ef99d"
concepts: [claude-code-onboarding-qa, claude-code-iteration-loop, parallel-claude-sessions]
projects: []
created: 2026-05-10
---

## 摘要

Inside 報導 Anthropic Claude Code 工程主管 Boris Cherny 親自示範的 5 個高效習慣：(1) 進新 codebase 先 Q&A 不要直接改程式 (2) 大改動前先讓 AI 規劃 (3) 給 AI 驗證方式進入自我修正循環 (4) 用 CLAUDE.md 建立專案記憶 (5) 平行 5 視窗 + git worktree 一天送 30 PR。核心心法是把 AI 當工程夥伴、用 vibe coding 的協作姿態取代「下指令」式使用、CC 是設計成適應你的工作流而不是強迫你改變習慣。

## 核心概念

- [[claude-code-onboarding-qa]]：第一次進新 codebase 先讓 CC 做 Q&A、Anthropic 內部 onboarding 時間從幾週縮到幾天
- [[claude-code-iteration-loop]]：給 AI 驗證方式（測試／截圖／模擬器）讓它進入自我修正循環、人類從 review 升級為驗收
- [[parallel-claude-sessions]]：5 視窗 × git worktree + 系統通知、Boris 一天送 20-30 PR、5 小時任務壓縮到 1-2 小時

## 對 Simon 的應用

- Q&A 模式對 Simon 接公司舊 codebase 直接適用：BIGFIX POC、Omnissa MDM 導入時先讓 CC 跑 Q&A 理解現況
- iteration loop 對 KW γ migration、course-notes 寫入 等批次任務有用：明確設定驗證指令（jq 驗證 changelog、grep 驗證 vault path）
- 平行 5 視窗對 Simon 目前還早：先把單視窗 plan-mode + skill 流程穩定才談平行；目標可從「同時 2 視窗」開始
- CLAUDE.md 部分 Simon 已實踐：~/.claude/CLAUDE.md 全域 + 各專案 CLAUDE.md（兩處 +），對應 [[claude-md-dual-nav]] 雙層導航

## 原文要點

- CC 不是補完工具、是全自主代理（fully agentic）的終端機 AI
- Anthropic 80% 工程師每天用 CC、Boris 加入後一個月做出原型
- CLAUDE.md 是 CC 最被低估的功能、Boris 自己的超過 100 行
- vibe coding 的重點是「提供足夠清晰的情境、計畫和驗證方式」、讓 AI 真正發揮

## 原始連結

- [https://www.inside.com.tw/article/41252-claude-code-pair-programming](https://www.inside.com.tw/article/41252-claude-code-pair-programming)
- Notion inbox 短網址：[https://share.google/6sDtUM2wQMAF0UUna](https://share.google/6sDtUM2wQMAF0UUna)
