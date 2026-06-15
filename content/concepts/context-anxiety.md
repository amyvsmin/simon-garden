---
title: "上下文焦慮（Context Anxiety）"
slug: context-anxiety
aliases: [上下文焦慮, context anxiety, LLM 下班心態, context window anxiety, 上下文窗口焦慮, LLM 提前收工]
category: AI
confidence: 已驗證
created: 2026-05-26
---

## 定義

大型語言模型在執行任務過程中，因感知到 context window 逐漸填滿而開始「趕工收尾」的系統性傾向。Anthropic 在 2025 年底的研究中發現，LLM 做到一半會停下來的根本原因不是能力不足，而是模型學會了「快沒空間就該結束」的模式。

## 關鍵面向

- **表現方式**：模型執行長任務做到一半，突然寫一段漂亮的總結、說「我已經完成了」然後停手——明明還沒做完。或是跳出來問「我可以繼續嗎？你要 A 還是 B？」把球丟回人類
- **根本原因**：模型在訓練過程中學到「context 快滿 = 該 wrap up」的行為模式，不是刻意偷懶而是統計上學到的模式匹配
- **跟 [[context-rot]] 的區別**：context-rot 是長對話下模型效能客觀下降（注意力分散、忘記前文）；context-anxiety 是模型主觀「覺得」快沒空間而提前收工，兩者可能同時發生但原因不同
- **解法**：[[claude-code-goal-command]] 這類 goal 機制的核心價值就是對抗 context-anxiety——加一個外部評審持續判斷「目標達成了沒」，沒達成就逼模型繼續，不讓它自己決定什麼時候收工

## 應用場景

- Simon 工作場景：KW γ 批次消化、vault migration 這類長時間任務最容易遇到。前一輪對話因 token 爆掉中斷就是 context-anxiety 的現實案例
- 一般場景：任何需要 AI 長時間執行的任務——程式碼重構、大量資料處理、多檔案批次修改

## 相關概念

- [[context-rot]]：客觀效能衰退 vs 主觀提前收工，兩者成對
- [[claude-code-goal-command]]：goal 機制是 context-anxiety 的結構性解法
- [[claude-md-12-rules]]：規則 6（超 token 預算 wrap）也是應對 context 限制的策略，但是人類端的

## 尚未解決的疑問

- Anthropic 原始論文的具體實驗設計和量化數據
- 不同模型（GPT、Gemini、Claude）的 context-anxiety 程度是否有差異

## 來源（自動維護）

- [[2026-05-26-yt-goal-evaluation-rubric-long-tasks]]
