---
title: "平行 Claude Code 視窗工作流"
slug: parallel-claude-sessions
aliases: [平行 CC 工作流, 5 視窗 CC, parallel claude sessions, git worktree CC, Boris 30 PR]
category: AI
confidence: 待驗證
created: 2026-05-10
---

# 平行 Claude Code 視窗工作流

## 定義

Boris Cherny 描述的高強度 Claude Code 工作模式：同時開 5 個 CC session、每個搭配獨立的 git worktree（不是 branch、是完整獨立工作目錄）、視窗彼此不干擾。搭配系統通知、CC 任一視窗需要人工決策時立刻收到提醒、切過去確認、再回原工作。Boris 自述一天可送 20-30 個 PR、5 小時任務壓縮到 1-2 小時。

## 關鍵面向

- **git worktree 是關鍵**：不是 branch（同一目錄切換）、是 worktree（獨立目錄）；避免不同 session 互相覆蓋檔案
- **5 視窗是經驗值**：來自 Boris 個人實踐、不是理論最佳；超過 5 個視窗人類監督帶寬不夠
- **系統通知必備**：每個 CC 完成階段或卡住時推送、人類用 notification 切換而不是輪詢
- **依賴 [[claude-code-iteration-loop]]**：每個視窗能跑通 iteration loop 才能不需要時時刻刻盯著
- **適用條件**：任務之間獨立（不互相依賴）、每個任務有明確驗收標準
- **30 PR/天的真實性**：Boris 是 CC 創始者+Anthropic 工程主管、有特殊優勢；一般工程師目標應降到 5-10 PR/天
- **狀態：待驗證**：Simon 還沒實作過、需要先把單視窗 CC 流程穩定才談平行

## 應用場景

- Simon 工作場景：Simon-Agent 跑多個獨立任務（vault migration / KW γ / journal 維護 / course-notes）時可平行；公司 IT 多 POC（BIGFIX、Omnissa、SQL MFA）也可分視窗
- 一般場景：個人開發者同時跑多 side project、SaaS 公司工程師同時處理多 ticket

## 相關概念

- [[claude-code-iteration-loop]]：iteration loop 是平行視窗能放手跑的前提
- [[claude-code-onboarding-qa]]：每個新 worktree 開場走 Q&A 才能讓 CC 進入工作狀態
- [[claude-md-dual-nav]]：每個 worktree 的 CLAUDE.md 提供本地 context、避免 5 視窗互相污染
- [[subagents]]：subagent 是單視窗內的並行、worktree 是視窗間的並行；兩者不同層次

## 尚未解決的疑問

- WSL 環境下 worktree 跟 Windows symlink 互動是否有坑？Simon vault 是 Windows 原生、WSL symlink 透明存取
- 5 視窗的 token 用量是否會撞 Weekly Limits 上限？需要量化評估

## 來源（自動維護）

- [[2026-05-09-boris-cherny-claude-code-5-habits]]
