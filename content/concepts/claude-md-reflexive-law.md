---
title: "CLAUDE.md 反射律"
slug: claude-md-reflexive-law
aliases: [claude-md reflexive law, 行為偏差改規則, 不鑽 CC 內部機制, rule-driven debugging]
category: AI 與 Agent
confidence: 已驗證
created: 2026-05-14
---

## 定義

當 AI 執行同一個需求卻出現跟上次不一樣的結果時，不去研究 LLM 內部機制或 Claude Code 內部運作，而是把正確做法寫成規則（CLAUDE.md／rules／user-memory）讓它下次照做。出處：雷蒙迷你課 2-1「讓 AI 記住你的偏好」。

<p align="center"><img src="assets/covers/claude-md-reflexive-law-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **第一反射改規則、不查內部**：AI 不照預期做事時，直覺反應應該是「補一條規則告訴它正確的做法」，不是去研究 Claude Code 為什麼會這樣。例如 Claude 每次寫 vault 都跑出簡體字，解法是在 CLAUDE.md 加自檢清單，不是去翻 tokenizer 偏好
- **CLAUDE.md 是 AI 的個人說明書**：規則寫越清楚，行為越穩定；出問題時優先檢查規則有沒有寫清楚，而不是懷疑 AI 本身壞了
- **先查再建、不重複造輪子**：寫新規則之前先翻一下現有的規則，看能不能直接強化既有那條，而不是每次都新增。這跟 skill 系統的原則一樣——先擴寫既有的、再考慮新建
- **規則層級分流**：常駐用 CLAUDE.md、行為驅動觸發用 rules/ paths-conditional、跨對話偏好用 user-memory、不混用

## 應用場景

- Simon-Agent 系統：每次 Claude 行為偏差就升級 feedback memory（截至 2026-05-14 累積 28+ 條）、不去查 CC 內部 hook／plugin 機制
- Knowledge Wiki 三層拆：把 KW γ 流程規範寫進 `rules/vault-writing.md`（paths-conditional 載入）讓 Claude 寫 vault md 時自動載入、不靠記憶
- morning skill 5/14 改造：Calendar 待辦類事件漏進候選 → 不查 skill engine 機制、直接改 SKILL.md Step 3b 加判定規則
- 反例：以前查「為什麼 Claude 一直忘記繁中規則」會去想 context window／training data、現在直接看 CLAUDE.md 該條規則寫清楚沒、必要時加自查清單

## 相關概念

- [[mcp]]：規則寫清楚後、MCP 工具呼叫才會穩定
- [[claude-code]]：本反射律的主要適用對象
- [[rules-over-code]]：協作哲學的姊妹條目、本條是 debugging 角度、彼為建構角度

## 尚未解決的疑問

- 反射律的邊界：什麼情況下規則寫到位仍解決不了、需要真的查 CC 內部？目前 Simon 用法尚未踩到這邊界

## 來源（自動維護）

- [[2026-05-14-raymond-cc-mini-course]]（雷蒙課 2-1「讓 AI 記住你的偏好」）
