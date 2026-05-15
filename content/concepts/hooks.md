---
name: Hooks
aliases: [Claude Code Hooks, session hooks]
category: 自動化
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 349f85da-554f-8171-bb78-d3e99f5572d5
---

## 定義

Claude Code 的事件觸發機制，在特定 session 事件（SessionStart / PreToolUse / PostToolUse 等）執行 shell 命令，特色是 100% 確定性執行、不依賴 AI 判斷。

## 關鍵面向

- **事件類型**：SessionStart、UserPromptSubmit、PreToolUse、PostToolUse、Stop、PreCompact 等
- **設定位置**：`~/.claude/settings.json` 的 `hooks` 區，可設 command / timeout / async
- **async 模式**：true 不阻塞 session；false 執行結束才繼續，stdout 可注入 context
- **與 Skill 的差異**：Hook = 確定性、事件驅動的外部指令；Skill = AI 判斷觸發的流程
- **典型用途**：補跑檢查、成本告警、自動化守門、注入情境
- **Stop hook 的兩種模式**：command-based（跑 shell 指令拿 exit code）vs prompt-based（把對話交給 small fast model 評估、預設 Haiku、回 yes/no + 短理由）；prompt-based 的限制是評估器不能 call tool、只看 transcript 已 surfaced 的內容、所以「完成條件」要寫成 transcript 看得到證據的形式
- **`/goal` = session-scoped 的 prompt-based Stop hook**：[[claude-code-goal-command]] 本質是把 prompt-based Stop hook 包成 session 級指令、條件只在當前 session 有效、不寫進 settings.json；真正持久化的長駐版仍是 settings 裡的 Stop hook

## 應用場景

- Simon 工作場景：
  - `plugin-update-check.sh`（每 7 天自動更新 superpowers plugin）
  - `knowledge-wiki-lint-catchup.sh`（SessionStart 檢查上次健檢，7 天未跑就注入補跑 prompt）
- 一般場景：pre-commit 檢查、工作時間控管、session 開啟時注入專案狀態、token 成本告警

## 相關概念

- [[claude-code]]：Hook 的執行載體，hook 綁定 CC session 生命週期
- [[skill]] / [[subagents]]：都是 CC 的擴展機制，但 Hook 走確定性、Skill 與 Subagent 走 AI 判斷
- [[claude-code-goal-command]]：`/goal` 是 session-scoped prompt-based Stop hook 的包裝、跑完條件達成自動清掉

## 尚未解決的疑問

- Hook 失敗的重試策略與告警機制
- 多個 Hook 相互依賴時的執行順序保證

## 來源（自動維護）

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-05-02-haiuncle-claude-code-intro]]
- [[2026-05-14-yaha-claude-code-goal]]
