---
title: "大聲失敗 — 不要把靜默失敗包裝成成功"
slug: loud-failure
aliases: [大聲失敗, loud failure, fail loud, fail loudly, 暴露不確定性, expose uncertainty, 不要靜默成功, silent success warning]
category: AI
confidence: 已驗證
created: 2026-05-15
last-queried: ""
query-count: 0
---

## 定義

AI 操作完成後、如果有任何沒驗證／跳過／不確定的部分，**明確暴露給人類**，而不是包裝成成功訊息。對 AI 來說最昂貴的失敗，是那些「看起來像成功」的失敗 — Migration 跳過 30 筆但回報「完成」、測試跳了一些但說「全過」、邊界情況沒測但說「功能可用」。Mnilax 12 條規則的規則 12。

## 關鍵面向

- **預設行為**：暴露不確定性 > 隱藏不確定性
- **三類典型 silent success**：(1) 函式「能跑」但回錯資料 (2) Migration「完成」但跳過違反約束的記錄 (3) 測試「過了」但只是斷言錯了
- **真實案例**：Mnilax 一次資料庫 migration 顯示「成功完成」，實際靜默跳 14% 記錄、11 天後報表才異常被發現
- **判斷句**：「如果你不能確定某件事已經成功，就明確說出來」
- **三條禁區**：「30 筆靜默跳過」≠ 完成；「跳了任何測試」≠ 過；「沒驗證邊界情況」≠ 可用
- **發現後的補救成本**：silent success 比 loud failure 貴 10-100 倍，因為發現時間延遲
- **是契約而非懇求**：寫進 CLAUDE.md 當行為規則、不是 prompt 裡客氣請求

## 應用場景

- **sync-garden.sh STATE 旗標機制**：失敗寫 `~/.claude/state/garden-sync-fail.txt` + SessionStart hook 提醒，是 loud failure 的落地
- **KW γ ingest-flow Step 7** 寫 inbox 🌱 → 🌲 之前該補「verify reading 真寫成功」這一步，避免 silent success
- **vault wikilink 校驗**：建 reading 寫 `[[concept-slug]]` 後，下次健檢若該 concept 不存在要顯式報、不要看起來像「正常已建好」
- **公司 IT 維運**：Veeam 備份「成功」要看是否所有 VM 都進、SCCM patch 「100% 推送」要看 client check-in 數
- **金錢操作**：銀行 API「轉帳完成」沒回 confirmation 要警報，不要默認成功

## 相關概念

- [[claude-md-12-rules]]：規則 12 本體
- [[claude-md-reflexive-law]]：發現 silent success 案例後，把它寫成新 rule（反射律落地）
- [[rules-over-code]]：「規則優先於程式碼」的具體落實
- [[task-checkpoint]]：多步驟任務每步檢查、避免推到出錯時才發現

## 尚未解決的疑問

- 在 AI 跟人類認知不對等時，AI 要怎麼判斷「我這個動作不確定要不要暴露」？目前靠 prompt 灌輸、沒有可靠機制
- silent success 的 detection 機制本身要不要自動化？

## 來源（自動維護）

- [[2026-05-14-blocktempo-claude-code-12-rules]]
