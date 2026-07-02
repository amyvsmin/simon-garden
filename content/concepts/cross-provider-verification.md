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
- **實作方式**：最簡單的組合是 Codex Cloud 並行產 PR、Claude Code 逐個審；也可以反過來、或用 Google 家 CLI 當第三方驗證者（注意：2026-06-18 起 Gemini CLI 停止服務消費者訂閱層（Google AI Pro／Ultra／免費個人）、由 Antigravity CLI 接手；Gemini CLI 僅存企業 Code Assist 授權與付費 API key 路線）
- **跟 `auto_review` 的差異**：Codex 內建的 `auto_review` 是同供應商的 fresh context reviewer（沒看過前面的產出過程），比自評好但仍屬同一模型家族；cross-provider 是更高一級的保障
- **第三家審核者的邊際效益遞減**（2026-07-02 對話回流）：已有兩個模型家族互審（如 Claude 審 Codex）時，加第三家（如 Gemini）能再補的盲點有限、效益遞減；且三方意見衝突時需要仲裁層裁決，仲裁燒的是指揮者（orchestrator）模型的 token 跟人類的注意力，這層成本常被「多模型團隊」宣傳略過
- **成本基準決定划不划算**：「省 token」宣傳多半拿「全程單一大模型」當基準；若現況已是雙訂閱制（Claude Max ＋ Codex），加第三家是新增成本而非節省。反之若第三家已包含在既有訂閱內，邊際金錢成本趨近零、剩下的是時間與流程複雜度成本

## 應用場景

- Simon 工作場景：已落地為雙芙莉蓮跨平台對抗式 review 迴圈（Claude Code ↔ WSL 本機 `codex exec`、零必改才 commit）；第三家（Gemini）列觀察——等出現「雙迴圈漏網、第三家才抓得到的真問題」實例再加
- 一般場景：任何 AI 輔助開發的 production code，特別是並行產出多個 PR 時，人類 review 頻寬不足的場景

## 相關概念

- [[sycophancy]]：cross-provider verification 存在的根本原因
- [[agent-os-competition]]：多供應商並存才讓 cross-provider 成為可能
- [[claude-code-iteration-loop]]：單一工具內的疊代驗證，cross-provider 是跨工具版本
- [[loud-failure]]：驗證的目標是讓問題被看見而非被隱藏

## 尚未解決的疑問

- 跨供應商 review 的 token 成本跟額外時間在個人開發者規模是否划算——判斷訊號：累積「兩方互審漏網、事後才發現的真問題」實例，有實例才支持加第三家
- 除了 code review，其他任務（文件撰寫、資料分析）是否也適用同樣邏輯

## 來源（自動維護）

- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
