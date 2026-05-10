---
name: Plan Mode（規劃模式）
aliases: [Plan Mode, 規劃模式, plan first]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-817e-9f20-e33bd543dca4
---

# 定義

Claude Code 在複雜任務下先讓 AI 複述手上資訊並設計完整實作計畫、等人類複核後才動手改檔的安全模式，對應 Shift+Tab Plan Mode。主要目的是在高風險任務避免「一邊思考一邊改」導致的不可逆錯誤。

# 關鍵面向

- **觸發方式**：連按 Shift+Tab 三次進入 Plan Mode；或透過 plan subagent 使用
- **限制**：Plan Mode 時 AI 不能進行寫入類動作（Edit、Write），可讀取、搜尋、執行 sandbox 指令
- **輸出**：詳細計畫 + 預計變動清單，人類進行 approve / reject / edit
- **訓練使用者思考**：推動「先規劃、再動手」的習慣
- **不適用場景**：哨小任務、探索性讀取、debug，這些反而快速試錯並仔細閱讀 stack trace

# 應用場景

- Simon 工作場景：Knowledge Wiki 設計階段、n8n 工作流變更、SQL Server MFA 設定、ISO 27001 資產盤點三 DB 全面變動，誤差代價高的任務都適合 Plan Mode
- 一般場景：大型 refactor、跨多檔修改、migration、架構變更、schema 變更、生產環境佈署腳本製作

# 相關概念

- [[claude-code]]：Plan Mode 是 Claude Code 內建交互模式之一
- [[subagents]]：plan subagent 以 plan-first 規劃、長時間完整規劃一個大任務設計

# 尚未解決的疑問

- Plan Mode 計畫品質跟 model 選擇（Sonnet、Opus）的關係
- Plan Mode 並不是高低階差異，什麼場景該跳出、什麼場景該抱住

# 來源（自動維護）

- [[2026-05-02-haiuncle-claude-code-intro]]
