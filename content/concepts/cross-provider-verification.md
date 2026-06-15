---
title: "跨供應商交叉驗證（Cross-Provider Verification）"
slug: cross-provider-verification
aliases: [跨供應商交叉驗證, cross-provider verification, 跨模型審查, cross-model review, 跨工具驗證, Codex 寫 Claude 審]
category: AI
confidence: 已驗證
created: 2026-05-26
---

## 定義

讓不同 AI 供應商的模型分別負責「產出」與「審查」——例如 Codex 寫程式碼、Claude Code 做 code review——藉此利用不同模型家族各自不同的盲點互相補漏的驗證策略。

<p align="center"><img src="assets/covers/cross-provider-verification-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **為什麼不能讓同一模型自評**：寫程式碼的模型有 [[sycophancy]]（諂媚傾向），會偏向認為自己產出的東西是對的，自我 review 多半只給正面評價，抓不到真問題
- **結構邏輯**：不同供應商的模型在訓練資料、RLHF 偏好、推理路徑上各自不同，犯的錯形狀也不同；交叉審查等於讓兩個獨立視角互相檢驗，比單一模型加更多 review pass 有效
- **實作方式**：最簡單的組合是 Codex Cloud 並行產 PR、Claude Code 逐個審；也可以反過來、或用 Gemini CLI 當第三方驗證者
- **跟 `auto_review` 的差異**：Codex 內建的 `auto_review` 是同供應商的 fresh context reviewer（沒看過前面的產出過程），比自評好但仍屬同一模型家族；cross-provider 是更高一級的保障

## 應用場景

- Simon 工作場景：目前主用 Claude Code，若未來加入 Codex 或其他工具，可讓 Claude Code 當 reviewer 角色而非全面切換——新增一個驗證層比重建整套工作流容易得多
- 一般場景：任何 AI 輔助開發的 production code，特別是並行產出多個 PR 時，人類 review 頻寬不足的場景

## 相關概念

- [[sycophancy]]：cross-provider verification 存在的根本原因
- [[agent-os-competition]]：多供應商並存才讓 cross-provider 成為可能
- [[claude-code-iteration-loop]]：單一工具內的疊代驗證，cross-provider 是跨工具版本
- [[loud-failure]]：驗證的目標是讓問題被看見而非被隱藏

## 尚未解決的疑問

- 跨供應商 review 的 token 成本跟額外時間在個人開發者規模是否划算
- 除了 code review，其他任務（文件撰寫、資料分析）是否也適用同樣邏輯

## 來源（自動維護）

- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
