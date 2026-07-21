---
title: "Prompt Cache（提示快取）"
slug: prompt-cache
aliases: [提示快取, prompt caching, Claude cache, cache hit, 快取命中, token cache, 上下文快取]
category: AI 與 Agent
confidence: 已驗證
created: 2026-05-24
---

## 定義

AI 模型將重複送出的上下文（system prompt、專案規則、對話歷史）暫存在伺服器端，後續請求命中快取時只收 10% 的 input token 費用；Anthropic 工程師 Thariq 實測每週省下 3 億 token。

## 關鍵面向

- **三層快取**：System 層（全域指令、工具定義）→ Project 層（CLAUDE.md、memory、rules）→ Conversation 層（對話歷史）；越上層越穩定、命中率越高
- **TTL 差異**：Claude Code 訂閱制預設 1 小時；API 預設 5 分鐘；subagent 一律 5 分鐘
- **快取失效觸發**：切換模型（清快取）、閒置超過 TTL、切 Opus plan mode（重建快取）
- **經濟效益**：快取 token 成本 = 正常 input token 的 10%；9,100 萬快取 token ≈ 910 萬標準 token 計費

## 應用場景

- Simon 工作場景：Max 5x 訂閱下維持 1 小時 TTL、避免長時間暫離導致快取失效；對話中途不切模型
- 一般場景：長 coding session 把大文件放 Projects 層而非對話層、減少快取 miss

## 相關概念

- [[token-saving-rules]]：prompt cache 是省 token 策略之一
- [[context-rot]]：快取失效跟 context rot 都在長對話場景發生
- [[subscription-vs-api-cost]]：快取 TTL 在訂閱 vs API 計費結構下不同

## 尚未解決的疑問

- Claude Code 的快取命中率面板在哪裡查看？文章提到 dashboard tools 但未給具體路徑

## 來源（自動維護）

- [[2026-05-24-anthropic-claude-code-cache-tips]]
