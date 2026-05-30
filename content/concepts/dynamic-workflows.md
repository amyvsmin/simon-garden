---
title: "動態工作流（Dynamic Workflows）"
slug: dynamic-workflows
aliases: [動態工作流, Dynamic Workflows, dynamic workflow, CC workflow, Claude Code workflow, workflow 編排腳本]
category: AI
confidence: 已驗證
created: 2026-05-30
query-count: 0
---

## 定義
Claude Code 2026-05 推出的功能：當你句子裡出現「workflow」這個觸發詞，Claude 不會自己埋頭慢慢做，而是先寫一支 JavaScript 編排腳本，把任務拆成多個階段、每階段派幾個子代理平行跑，先把計畫攤給你確認、按同意才執行。腳本可以存下來，下次換專案同一句話就重跑。

## 關鍵面向
- **觸發方式**：使用者輸入的句子含「workflow」字眼，Claude 就切換成「先寫腳本再執行」模式，而不是直接動手。
- **三個腳本原語**：`phase`（把任務分成幾個階段）、`agent`（派一個子代理做一件事）、`parallel`（讓多個子代理同時跑）。Claude 會把你那句白話自動拆成有階段、會平行處理的腳本，拆幾階段由它照任務自己決定。
- **計畫先行 + 人類確認**：跑之前先把「分幾個階段、各階段做什麼」的計畫顯示給你看，你按同意才開始；對應 [[interactive-confirmation-ui]] 的確認卡設計。
- **`/workflows` 監看畫面**：方向鍵上下選階段或 agent、按 Enter 進去看細節、ESC 退出，可即時看到每個子代理在幹嘛。
- **腳本可存、可複用**：跑完在 `/workflows` 畫面按 `s` 鍵存檔，兩個位置選一個——存專案資料夾（團隊 clone 下來都有）或存家目錄（自己每個專案都能用、別人看不到），取個名字就變成你自己的指令。
- **開關與方案**：`/config` 找到 dynamic workflows 那行打開即可（約 20 秒）；Pro／Max／Team／企業版都支援。

## 應用場景
- Simon 工作場景：KW γ 批次消化收件箱、reading review、vault migration 這類「對一批項目跑同一套多階段處理」最適合——一句話描述、存成可重用腳本，之後每輪直接重跑。
- 一般場景：大型 codebase 的「找問題 → 驗證問題」兩階段審查、找漏洞後的對抗式複驗（見 [[adversarial-verification]]）。

## 相關概念
- [[subagents]]：dynamic workflows 的執行單元就是一群平行跑的子代理。
- [[adversarial-verification]]：影片示範的殺手級用法——派子代理去推翻自己找到的漏洞。
- [[interactive-confirmation-ui]]：跑之前的計畫確認卡屬於這個設計範式。
- [[interview-driven-prompting]]：對抗式驗證前 Claude 先反問「要驗哪一個」，是 AskUser 模式。
- [[skill]]：存下來的 workflow 腳本跟 skill 一樣是可複用的封裝。
- [[claude-code]]：dynamic workflows 是 Claude Code 的內建功能。

## 尚未解決的疑問
- workflow 腳本跟 subagent-driven-development、dispatching-parallel-agents 這類 superpowers skill 的分工邊界。
- 大量平行 agent 的 token 成本實測——影片沒給數字。

## 來源（自動維護）
- [[2026-05-30-yaha-claude-code-dynamic-workflows]]
