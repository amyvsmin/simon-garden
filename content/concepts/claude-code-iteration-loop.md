---
title: "Claude Code 疊代迴圈（驗證 → 自我修正）"
slug: claude-code-iteration-loop
aliases: [CC iteration loop, 疊代迴圈, 自我修正循環, AI 驗證迴圈, 給 AI 驗證方式]
category: AI
confidence: 已驗證
created: 2026-05-10
---

# Claude Code 疊代迴圈（驗證 → 自我修正）

## 定義

Boris Cherny 強調的 Claude Code 高效心法之一：寫程式時主動告訴 AI「如何驗證自己的工作」、讓 CC 進入 跑測試 → 看到錯誤 → 修正 → 再跑測試 的自我修正循環。AI 不再「寫完就丟」、而能對自己的產出負責；人類從「逐行檢查」升級為「驗收交付」。

## 關鍵面向

- **三類驗證方式**：(1) 單元測試「改完後跑這個測試組、確認沒有破壞」(2) 截圖驗證 搭配 Puppeteer 抓畫面、讓 AI 看到 UI 實際結果 (3) 模擬器確認 iOS／Android 開發時讓 AI 啟動模擬器確認行為
- **核心轉變**：把驗證權交給 AI、人類角色從「review 每行程式」升級為「設計驗證機制 + 驗收最終結果」
- **依賴 [[plan-mode]]**：先計畫好「要做什麼 + 怎麼驗證」、CC 才能在 loop 內判斷對錯
- **適用範圍**：要有客觀可機器判斷的成功標準（test pass / 截圖比對 / 模擬器行為）；純概念設計、文案、設計類任務不適用
- **失敗模式**：沒給驗證方式 = AI 寫完就丟回給人、人沒精力逐行檢查 = bug 漏掉到 production

## 應用場景

- Simon 工作場景：Simon-Agent 跑 KW γ migration、Simon-Journal LINE bot、Cloudflare Workers 部署等任務時、明確設定驗證指令（lint / unit test / curl 確認 endpoint），CC 自我跑回再回報
- 一般場景：所有有自動化測試的軟體開發場景；data pipeline、ETL job、API 開發、UI 元件實作

## 相關概念

- [[claude-code-onboarding-qa]]：Q&A 是理解、本概念是執行；同 Boris 5 習慣家族
- [[plan-mode]]：plan-mode 是規劃驗證機制的前置
- [[parallel-claude-sessions]]：iteration loop 是平行 5 視窗能跑得起來的前提（不能跑得起來就要不斷人類介入）
- [[vibe-coding]]：vibe coding 的核心精神就是把驗證權給 AI

## 尚未解決的疑問

- 沒有明確驗收標準的任務（設計、文案、架構討論）如何套用 iteration loop？

## 來源（自動維護）

- [[2026-05-09-boris-cherny-claude-code-5-habits]]
