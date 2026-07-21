---
title: "Agent Harness 健康管理"
slug: agent-harness-hygiene
aliases: [Agent Harness, harness hygiene, agent 設定瘦身, AI 設定韁繩, 規則去重, 設定環境整理, Claude Code harness]
category: AI 與 Agent
confidence: 已驗證
created: 2026-06-05
---

## 定義

把 AI agent 每次開工會讀到或能呼叫的規則、記憶、hook、skill、指令檔，當成同一組控制環境來定期整理。目標是刪掉重複、衝突與冗長內容，讓模型少吃雜訊、保留原本有效的行為約束。

## 關鍵面向

- **控制環境不是單一檔案**：CLAUDE.md、AGENTS.md、rules、hooks、memories、skills 都會影響模型行為；只瘦身其中一個檔案，其他地方仍可能把同樣雜訊塞回來。
- **去重不能只看字面**：兩條規則字面不同，也可能在語義上重複。Dustin 的做法是先讓多個 subagent 分區盤點，再用 embedding（語義向量）抓出意思相近的 pair，補人工閱讀容易漏掉的重複。
- **精簡要保留行為效果**：好的瘦身不是把內容砍短而已，而是確認「砍掉後模型是否會犯錯」。必要規則留下，不必要的故事、日期、踩坑敘述、過長例子移出常駐脈絡。
- **驗證 agent 要保持獨立**：用 fresh subagent（不繼承主對話脈絡的子代理）驗證每個小步驟，只給最終標準，不提前提示「哪裡應該保留／刪除」，避免被主 agent 的說法引導。
- **官方文件要即時查證**：hook、skill、AGENTS.md、路徑載入規則這類設定會更新，整理前要查官方文件，不可只靠模型記憶。

## 應用場景

- Simon 工作場景：芙莉蓮雙棲後，`0-context/system/CORE_RULES.md`、`AGENTS.md`、skill description（技能描述）、SessionStart hook（對話啟動鉤子）、Codex 設定都會變成常駐或半常駐控制層；每次新規則加入前，可先問「這條是否已有同義規則、能否放進按需載入的 skill」。
- Simon 工作場景：KW γ 或 course-notes skill 若越寫越長，應把範例、模板與例外處理拆到 `references/`，主 `SKILL.md` 只保留觸發條件與流程骨架。
- 一般場景：任何長期使用 Claude Code、Codex、Cursor 等 agent 的人，都會累積規則、記憶與工具。定期 harness 健康管理能降低 token 成本，也能減少規則衝突造成的隨機行為。

## 相關概念

- [[context-rot]]：常駐設定太肥也會讓新對話一開始就帶著雜訊，等於提早進入效能衰退。
- [[token-saving-rules]]：harness 瘦身是省 token 的固定成本版本，省的是每次對話都會重送的常駐脈絡。
- [[instructions-file]]：CLAUDE.md／AGENTS.md 是 harness 的核心入口，但不該塞進所有 SOP。
- [[hooks]]：hook 可注入脈絡或守門，注入文字同樣需要瘦身與驗證。
- [[skill]]：長流程應從指令檔下放到 skill，靠 description 按需觸發。
- [[subagents]]：探索、交叉比對、獨立驗證都適合用 subagent 分工。

## 尚未解決的疑問

- Simon 的 vault-first 雙棲架構下，應該多久跑一次 harness 健康管理才划算？
- 哪些規則適合留在 CORE_RULES，哪些應該降到 path-scoped rules 或 skill references？

## 來源（自動維護）

- [[2026-06-05-dustin-claude-code-harness-cleanup]]
