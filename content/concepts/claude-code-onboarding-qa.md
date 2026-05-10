---
title: "Claude Code Onboarding Q&A 模式"
slug: claude-code-onboarding-qa
aliases: [CC onboarding Q&A, Claude Code 進新 codebase, codebase 新人 onboarding, Q&A 先行]
category: AI
confidence: 已驗證
created: 2026-05-10
---

# Claude Code Onboarding Q&A 模式

## 定義

Boris Cherny（Claude Code 創始者）建議的入門心法：第一次進新 codebase 時、不要直接叫 CC 改程式碼、先讓它做 Q&A。問函式怎麼被呼叫、為什麼有 15 個參數、模組架構怎麼設計、commit 歷史脈絡，CC 會主動深入挖掘程式碼庫整理來龍去脈、新人 onboarding 時間從幾週縮短到幾天。

## 關鍵面向

- **典型問題範例**：「這個函式是怎麼被呼叫的？」「這個 function 為什麼有 15 個參數？幫我查一下 git 歷史」「這個模組的架構是怎麼設計的？」
- **AI 主動追蹤**：CC 會自動 grep、讀 git log、整理跨檔案脈絡；不需要上傳或索引程式碼、安全性由本機操作保證
- **Anthropic 內部驗證**：工程師回報 onboarding 時間從幾週縮短到幾天、是 80% Anthropic 工程師每天用 CC 的關鍵入口
- **跟 [[plan-mode]] 不同**：plan-mode 是「動手前先計畫」、Q&A 模式是「動手前先理解」；後者是前者的前置動作
- **動詞順序**：理解 → 計畫 → 動手；急著叫 AI 改程式跳過理解、會在錯誤的方向上加速

## 應用場景

- Simon 工作場景：接手公司舊 codebase（n8n flow、IT 工具、ISO 27001 資產盤點 script）時、先用 CC 跑 Q&A；BIGFIX POC、Omnissa MDM 等廠商工具導入也適用
- 一般場景：所有新工程師入職、接手 legacy code、code review 高複雜度 PR 的場景

## 相關概念

- [[plan-mode]]：Q&A 是 plan-mode 的前置；先理解才能合理規劃
- [[claude-code]]：本概念是 CC 使用流程的入口
- [[vibe-coding]]：Q&A 模式是 vibe coding 的開場姿勢、不是急著下指令
- [[claude-code-iteration-loop]]：理解 → 計畫 → 驗證迴圈是 Boris 完整工作流

## 尚未解決的疑問

- Q&A 階段大量讀檔的 token 開銷如何控制？短期看似浪費、長期看省幾週

## 來源（自動維護）

- [[2026-05-09-boris-cherny-claude-code-5-habits]]
