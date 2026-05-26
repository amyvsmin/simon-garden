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

- [[prompt-cache]]：Claude Code 的 prompt caching 分成三層——System 層（全域指令、工具定義）、Project 層（CLAUDE.md、memory、專案規則）、Conversation 層（對話歷史）。快取命中的 token 只收正常 input 費用的 10%，所以 Thariq 實測一天 9,100 萬快取 token 實際只計費約 910 萬。快取靠的是前綴比對：只要後續請求的開頭跟已快取的內容一致，就能直接重用。TTL 在 Claude Code 訂閱制下是 1 小時、API 是 5 分鐘、subagent 固定 5 分鐘。三種行為會打破快取：切換模型（因為每個模型有獨立快取）、閒置超過 TTL、切 Opus plan mode（規劃階段用 Opus、執行階段用 Sonnet，每次切換等於換模型）。
![[2026-05-24-anthropic-claude-code-cache-tips-prompt-cache.png|275]]
- [[token-saving-rules]]：prompt cache 是省 token 策略的第五個面向。前四條守則專注在減少 token 用量（壓縮、拆對話、丟 subagent、監控水位），這條則是在同樣用量下降低單價——快取命中的 token 只要十分之一費用，等於同樣的對話長度花更少錢。
- [[context-rot]]：快取失效跟上下文腐爛往往出現在同一個場景——長對話或長時間暫離。當你離開超過 1 小時回來，不但快取過期需要重建（多花錢），對話本身的品質也可能因為上下文太長而下降（回答變差）。兩者交互影響，所以 Thariq 建議乾淨地結束舊 session、開新 session 帶摘要，比硬撐舊對話更划算。

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

> [!quote]- 原文全文（點擊展開）
> **Anthropic engineer shares Claude Code cache tips to save 300 million tokens weekly**
> Source: MarsBit via KuCoin News | Release: 05/23/2026
> 
> Editor's Note: Many users of Claude Code find that token consumption feels too fast and long conversations quickly deplete their quota. However, from Anthropic engineers' perspective, what truly impacts cost is not how much code you write, but whether the system consistently reuses previously processed context.
> 
> The core insight of this article is how caching mechanisms save tokens. The author reused over 300 million tokens via caching within a week, with a daily cache volume reaching 91 million. Since the cost of cached tokens is only 10% of that of regular input tokens, 91 million cached tokens effectively count as approximately 9 million regular tokens. Claude Code's long conversations appear more "durable" not because the model works for free, but because a large volume of repeated context has been successfully reused.
> 
> The key to prompt caching is "don't break the cache." Claude Code caches system prompts, tool definitions, CLAUDE.md, project rules, and conversation history in layers; as long as the prefix of subsequent requests remains consistent, Claude can directly retrieve the cache instead of reprocessing the entire context. Anthropic internally monitors prompt cache reuse rates, as they not only affect user quotas but also directly impact model service costs and operational efficiency.
> 
> For regular users, there's no need to understand all the underlying details—just adopt a few key habits: don't leave your session idle for more than an hour; perform proper session handoff when switching tasks; avoid frequently switching models; and place large documents into Projects rather than repeatedly pasting them into conversations.
> 
> This article is less about a token-saving trick and more about offering a Claude Code approach that aligns more closely with engineering thinking: treat context as asset management, enable continuous cache reuse, and minimize redundant computations in long conversations.
> 
> ---
> 
> I saved 300 million tokens this week, with 91 million in a single day, totaling over 300 million for the week.
> 
> I haven't changed any settings. This is just prompt caching working normally in the background.
> 
> But once I truly understood what caching is and how to avoid disrupting it, my sessions lasted much longer under the same usage allowance. Here's a concise 80/20 guide to Claude Code prompt caching, without diving into deep API-level details.
> 
> **TL;DR**
> The cost of cached tokens is only 10% of that of regular input tokens. 91 million cached tokens are billed at approximately the equivalent of 9 million tokens. The cache TTL for the Claude Code subscription is 1 hour; the default for the API is 5 minutes; sub-agents are always 5 minutes. The cache is divided into three layers: system layer, project layer, and conversation layer. Switching models mid-session will clear the cache, including when enabling the "opus plan" mode.
> 
> **How exactly is caching charged?**
> The cost of each cached token is 10% of the cost of a regular input token. So, when my dashboard shows that 91 million tokens were cached in a single day, the actual billing is roughly equivalent to processing only 9 million tokens. This is why, over time, using Claude Code with caching feels like an almost "free" extension of your session compared to not using caching.
> 
> There are two numbers on the dashboard worth paying attention to:
> - Cache creation: The one-time cost incurred when writing content to the cache. It will take effect in the next conversation.
> - Cache read: Tokens reused from cache by Claude, such as your CLAUDE.md, tool definitions, and previous messages. Costs 10 times less than processing them as new input.
> 
> If your Cache read count is high, it means you're effectively using the cache; if it's low, it means you're repeatedly paying for the same context.
> 
> Thariq from Anthropic said something that left a strong impression on me: "We actually monitor the prompt cache hit rate, and if it drops too low, it triggers an alert—even a SEV-level incident."
> 
> When cache hit rates are high, four things happen simultaneously: Claude Code feels faster, Anthropic's service costs decrease, your subscription allowance appears more durable, and extended coding sessions become more realistic. But if the hit rate is very low, everyone will suffer. Both sides have aligned incentives: Anthropic wants your cache hit rate to be higher, and you do too.
> 
> **How does the cache grow with each round of conversation?**
> Caching relies on prefix matching. You don't need to dive into technical details—just understand this: if the content before a certain position matches exactly what's already cached, Claude can reuse those cached tokens.
> 
> A new session typically operates as follows:
> - First conversation: No cache exists yet. The system prompt, your project context (e.g., CLAUDE.md, memory, rules), and your first message will all be reprocessed and written to cache.
> - Second conversation: All content from the first conversation is now cached. Claude only needs to process your new reply and the next message. This round will be much cheaper.
> - Third conversation: Same logic. Previous conversations remain in cache; only the latest interaction needs to be reprocessed.
> 
> The cache itself can be divided into three levels (from Thariq's X post):
> - System layer: Includes base commands, tool definitions (read, write, bash, grep, glob), and output style. This layer is globally cached.
> - Project layer: Includes CLAUDE.md, memory, and project rules. This layer is cached per project.
> - Conversation layer: Includes replies and messages that grow with each round of dialogue.
> 
> If any content at the system or project level changes midway through a session, everything must be recached from the beginning. This is the most "expensive" operation.
> 
> **One hour and five minutes of confusion**
> Claude Code subscription: Default TTL is 1 hour. Claude API: The default TTL is 5 minutes. You can pay a higher cost to increase it to 1 hour. Sub-agent under any plan: always 5 minutes. Claude.ai web chat: Not officially documented.
> 
> **Three habits that cover 95% of users**
> 
> 1. Don't pause for too long: If you've been idle for over an hour, the previous content has likely expired from the cache. Your next message will rebuild the cache. In this case, it's usually more efficient to make a clean transition and start a new session rather than trying to revive an already "cold" old one.
> 
> 2. When switching tasks, restart directly: /compact or /clear already clears the cache, so why not use this opportunity to fully reset it? I created a session handoff skill to replace /compact. It summarizes what we've accomplished, which decisions are still pending, which documents are most important, and where to pick up next. Then I run /clear and paste in this summary.
> 
> 3. In Claude chat, place large documents into Projects whenever possible. Projects clearly use a different optimization approach than regular conversation threads.
> 
> **What actions silently corrupt the cache?**
> - Switch model: Because caching relies on prefix matching and each model has its own cache, switching models will cause the next request to reload the full history without any cache hits.
> - The "Opus plan" mode: This setting uses Opus during the planning phase and Sonnet during the execution phase. Each switch between plans is essentially a model switch, meaning the cache must be rebuilt.
> - Editing CLAUDE.md mid-session: this change will not take effect immediately and will only apply after the next restart. Therefore, the currently running cache will not be affected.
> 
> **Summary**
> Prompt caching is something that can be explored in great depth. Thariq's article covers it more comprehensively. But you don't need to understand every detail to benefit from it. You just need to grasp the key 80/20: cached tokens cost 10 times less than regular tokens; Claude Code's TTL is 1 hour; switching models breaks the cache; cleanly handing off between tasks is usually more cost-effective than continuing an old session until it expires.

## 落地動作與效益

**A 類芙莉蓮優化**：
- ❌ 不優化「同一 session 不切模型」：Claude Code 在 `/model` 切換時已有內建確認對話框警告，feedback memory 再寫一條是重複既有機制

**B 類 Simon 個人動作**：
- ❌ 找 Claude Code 快取命中率面板：Simon 是 Max 5x 固定月費、目前沒有額度燒太快的痛點，裝了也只是多一個偶爾看的數字，等哪天真的異常再回來找
- ❌ 暫離超過 1 小時後的 session 處理：討論後發現時機對不上——我能偵測到暫離是在 Simon 回來送訊息時，但那時快取重建已經發生了，此時建議切 session 反而多付一次重建成本。既有 session-split 規則已涵蓋，Simon 自己心裡知道就好

## 原始連結

- [KuCoin News — Anthropic engineer shares Claude Code cache tips](https://www.kucoin.com/news/flash/anthropic-engineer-shares-claude-code-cache-tips-to-save-300m-tokens-weekly)
