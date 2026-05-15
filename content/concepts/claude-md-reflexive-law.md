---
name: CLAUDE.md 反射律
aliases: [CLAUDE.md 反射律, claude-md reflexive law, 行為偏差改規則, 不鑽 CC 內部機制, rule-driven debugging]
category: AI
status: active
confidence: 已驗證
created: 2026-05-14
last-queried: ""
query-count: 0
---

## 定義

AI 助手出現行為偏差時、不去研究 LLM 內部機制或 Claude Code harness（CC 主機端）內部運作、而是把規則寫進 CLAUDE.md／rules／user-memory 讓它知道。出處：雷蒙迷你課 2-1「讓 AI 記住你的偏好」commit `ef79968` 的 TIP 段、回應學員 issue #5 提出的 meta-rule。

## 關鍵面向

- **第一反射改規則、不查內部**：AI 不照預期做事時、直覺反應應該是「補一條規則告訴它正確的做法」、不是「研究 CC 為什麼這樣做」
- **CLAUDE.md 是 AI 的個人說明書**：規則寫越清楚、行為越穩定；模糊／矛盾的規則才會引發內部機制鑽研
- **跟 grep-before-create 哲學同源**：寫新規則前先看現有規則能不能強化、避免線性膨脹；對應 [[skill]] 系統「先擴寫既有、再考慮新建」（user-memory `feedback_consolidate_before_create`）
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
