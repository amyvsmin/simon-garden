---
title: "互動式確認介面（AI 決策時刻）"
slug: interactive-confirmation-ui
aliases: [互動式確認 UI, interactive confirmation, AI decision UI, 關鍵決策互動介面]
category: AI
confidence: 待驗證
created: 2026-05-10
---

# 互動式確認介面（AI 決策時刻）

## 定義

在 AI 工作流中、需要人類確認 AI 提案的關鍵決策時刻、用互動式 UI（按鈕／卡片／即時更新摘要）取代靜態文字牆的設計範式。核心主張是「強迫人類以靜態 Markdown 完成關鍵確認、本身是設計失誤」；認知負擔應該在介面層被處理掉、而不是丟給人類用文字描述。

## 關鍵面向

- **典型情境**：AI 提出重構計畫、5 個模組 × 2-3 個選項；Markdown 呈現要讀整段文字、腦中建對應關係、再逐一回覆偏好；HTML 卡片用按鈕選擇、即時看到組合結果
- **認知負擔的本質**：閱讀 → 理解 → 找到對應點 → 描述偏好 → 確認文字準確、四步降為閱讀 → 點選兩步
- **實作門檻低**：Claude Code 直接輸出 HTML 即可、瀏覽器原生渲染；不需要 React／Vue 等 framework
- **vs Plan Mode**：Plan Mode 是「先給文字計畫等核准」、interactive-confirmation-ui 是「用互動 UI 取代純文字計畫」；兩者可組合
- **跟 progressive-disclosure 互補**：[[progressive-disclosure]] 是 token 省略策略、本概念是輸出形式設計

## 應用場景

- Simon 工作場景：CC 跑長任務（KW γ migration）需要人類確認分支選擇時、目前都用文字 prompt 列選項；改 HTML 互動介面可加速決策（特別是 5 個以上選項的情境）
- 一般場景：所有需要人類審核 AI 提案的工作流；programming／design／legal review／medical diagnosis 等高賭注決策

## 相關概念

- [[html-vs-markdown-ai-output]]：本概念是 HTML 主張的核心應用
- [[plan-mode]]：CC 既有的「先計畫等核准」機制、可跟本概念組合
- [[iterative-tweaks]]：Claude Design 的 Edit/Comment/Tweaks 是另一種互動修改範式

## 尚未解決的疑問

- 多大規模的決策才值得花成本做互動 UI？單選或 2-3 步驟可能直接 markdown 就夠

## 來源（自動維護）

- [[2026-05-09-thariq-html-replaces-markdown-ai]]
