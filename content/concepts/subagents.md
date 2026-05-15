---
name: Subagents / Agent Teams
aliases: [Claude subagent, custom subagents, 分身團隊, agent team]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 349f85da-554f-818c-8352-cf50edda20a7
---

## 定義

Claude 的多代理協作機制。Subagent 是為特定任務訂製的持久化分身（自帶 prompt、工具集、記憶）；Agent Teams 則把多個分身並行派工並自動彙整結果。

## 關鍵面向

- **Subagent**：單一職能分身（如 code-reviewer、Explore、Plan、statusline-setup 等），自帶 system prompt 與允許工具集
- **Agent Teams**：多分身並行派工，適用於獨立任務（例如：三個方向同時研究）
- **Context 隔離**：每個 subagent 有獨立對話脈絡，不污染主 context，也看不到主對話歷史
- **Claude Code 內建**：透過 Agent tool + subagent_type 欄位呼叫；有官方與使用者自訂兩類
- **傳遞方式**：prompt 內塞入所有必要上下文（subagent 看不到主對話）

## 應用場景

- Simon 工作場景：
  - Explore subagent 做 codebase / 知識庫搜尋
  - code-reviewer subagent 驗證重要階段成果
  - Plan subagent 規劃複雜改動（例如 Knowledge Wiki 設計階段）
- 一般場景：大型專案拆解、並行研究、品質把關、敏感決策前的第二意見

## 相關概念

- [[skill]]：Skill 是可召喚的流程；Subagent 是持久化的角色。兩者都可重用，方向不同
- [[claude-code]]：Subagent 執行的宿主

## 尚未解決的疑問

- Subagent 之間的訊息傳遞最佳實踐（目前只能透過主 context 中轉）
- Agent Teams 的失敗恢復機制（某 agent fail 怎麼辦）
- Subagent 能力邊界設計：給太多工具易亂、太少又侷限

## 來源（自動維護）

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-05-02-haiuncle-claude-code-intro]]
