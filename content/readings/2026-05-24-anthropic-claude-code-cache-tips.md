---
title: "Anthropic 工程師分享 Claude Code 快取技巧——每週省 3 億 token"
date: 2026-05-24
type: 來源分析
url: "https://www.kucoin.com/news/flash/anthropic-engineer-shares-claude-code-cache-tips-to-save-300m-tokens-weekly"
inbox-id: "369f85da-554f-8135-bf79-d1580d609109"
concepts: [prompt-cache, token-saving-rules, context-rot]
projects: []
impact: high
created: 2026-05-24
tldr: "Anthropic 工程師 Thariq 實測每週省下 3 億 token。快取分三層（System → Project → Conversation），命中的 token 只收 10% 費用。"
stage: growing
icon: "⚡"
---

## 為什麼讀

正在追 Claude Code 省 token 主題（接續 [[2026-05-09-claude-token-limits-tutorial]]），這篇是 Anthropic 內部工程師 Thariq 的一手快取實測數據，補上之前 reading 沒覆蓋的 prompt caching 層面。

## 摘要

Anthropic 工程師 Thariq 公開分享 prompt caching 策略，實測每週省下超過 3 億 token。核心觀點是「上下文重用比減量更重要」。快取分三層（System 全域指令 → Project CLAUDE.md/memory → Conversation 對話歷史），快取命中的 token 只收正常 input 費用的 10%。TTL 在 Claude Code 訂閱制下是 1 小時、API 是 5 分鐘、subagent 固定 5 分鐘。三種行為會打破快取：切換模型、閒置超過 TTL、切 Opus plan mode。建議做法包括避免暫離超過一小時、用乾淨的 session handoff 取代 /compact、大文件放 Projects 層不要貼進對話。

## 核心概念

- [[prompt-cache]]：三層快取架構（System/Project/Conversation）+ TTL 差異 + 快取 token 只收 10% 費用
![[2026-05-24-anthropic-claude-code-cache-tips-prompt-cache.png|275]]
- [[token-saving-rules]]：prompt cache 是省 token 的第五面向——前四條省用量、這條省單價
- [[context-rot]]：快取失效跟 context rot 在同一場景（長對話、長暫離）交互影響

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- ❌ 對話中途切模型會清快取——Claude Code `/model` 切換時已有內建確認對話框警告，不需要額外寫 feedback memory

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- ❌ 找 Claude Code 快取命中率面板：Max 5x 固定月費、目前無額度異常痛點，等需要時再找
- ❌ 檢查暫離超過 1 小時的習慣：時機對不上，回來送訊息時快取已重建，建議切反而多付一次成本

## 原文要點

### 快取經濟學

- 快取 token 成本 = 正常 input token 的 10%
- 實測 9,100 萬快取 token ≈ 910 萬標準 token 計費

### 三層快取

- System 層（全域）：基礎指令、工具定義
- Project 層：CLAUDE.md、memory、專案規則
- Conversation 層：對話歷史

### TTL 差異

- Claude Code 訂閱制：預設 1 小時
- API：預設 5 分鐘
- Subagent：固定 5 分鐘

### 快取失效觸發

- 切換模型會清快取
- 閒置超過 TTL
- 切 Opus plan mode 會觸發重建

### 建議做法

- 避免暫離超過 1 小時
- 用乾淨的 session handoff 取代 /compact
- 大文件放 Projects 層而非對話層
- 用面板工具監控快取命中率

## 原文全文

## 落地動作與效益

**A 類芙莉蓮優化**：
- ❌ 不優化「同一 session 不切模型」：Claude Code 在 `/model` 切換時已有內建確認對話框警告，feedback memory 再寫一條是重複既有機制

**B 類 Simon 個人動作**：
- ❌ 找 Claude Code 快取命中率面板：Simon 是 Max 5x 固定月費、目前沒有額度燒太快的痛點，裝了也只是多一個偶爾看的數字，等哪天真的異常再回來找
- ❌ 暫離超過 1 小時後的 session 處理：討論後發現時機對不上——我能偵測到暫離是在 Simon 回來送訊息時，但那時快取重建已經發生了，此時建議切 session 反而多付一次重建成本。既有 session-split 規則已涵蓋，Simon 自己心裡知道就好

## 原始連結

- [KuCoin News — Anthropic engineer shares Claude Code cache tips](https://www.kucoin.com/news/flash/anthropic-engineer-shares-claude-code-cache-tips-to-save-300m-tokens-weekly)
