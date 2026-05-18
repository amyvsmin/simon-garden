---
title: "問題規格書（Problem PRD）"
slug: problem-prd
aliases: [問題規格書, PRD, 問題規格, 目標限制障礙, problem PRD, prd-thinking]
category: 生產力
confidence: 待驗證
created: 2026-05-18
query-count: 0
---

## 定義

把「問對問題」拆成「目標→限制→障礙」三層結構、產出可餵 AI 的問題規格書（PRD）、用規格書指導 AI 設計解決方案、效果遠超直接叫 AI 想答案。

## 關鍵面向

- **三層結構**：目標（要達到什麼）→ 限制（不能改變的事、如沒 IT 人員、系統改不了）→ 障礙（可以排除的困難）
- **限制 vs 障礙的分判**：限制不能改、要繞過；障礙可以排除、要列方案；混淆會讓 AI 提錯方向
- **指導 AI 而非問 AI**：寫好的 PRD 餵給 AI 當 spec、AI 用 spec 設計方案；不是直接叫 AI「想想看怎麼做」
- **跟密涅瓦思考習慣的關係**：「問對問題」是密涅瓦 habits of mind 的核心一條、PRD 是其落地工具
- **跟 [[plan-mode]] 的關係**：plan mode 是執行端先計畫、PRD 是更上游的需求端定義；PRD 餵進 plan mode 效果更佳

## 應用場景

- Simon 工作場景：寫 skill／rule／決策時先列三層、避免 AI 腦補；複雜任務（資安專案、KPI 簡報）先寫 PRD 再餵 Claude
- 一般場景：任何需要 AI 設計方案的場合（程式、文章、簡報、自動化）

## 相關概念

- [[skill]]：李佳達的「專案管理（問題規格書）技能包」就是把 PRD 流程封裝
- [[plan-mode]]：plan 是執行計畫、PRD 是需求定義、兩者互補
- [[tool-agnostic-thinking]]：PRD 是工具中立的、寫好 PRD 後再選最適合的 AI

## 尚未解決的疑問

- PRD 模板的最小可用結構（一頁式 vs 多頁式）
- PRD 跟 spec／plan 的邊界

## 來源（自動維護）

- [[2026-05-18-li-jiada-skill-pack-install-demo]]
