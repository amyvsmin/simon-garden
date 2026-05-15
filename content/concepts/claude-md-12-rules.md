---
title: "Claude Code 12 條規則（Karpathy 4 + Mnilax 8）"
slug: claude-md-12-rules
aliases: [Claude Code 12 rules, CLAUDE.md 12 rules, Karpathy 12 rules, Mnilax 12 rules, 12 條規則模板, Claude Code 行為契約]
category: AI
confidence: 已驗證
created: 2026-05-15
last-queried: ""
query-count: 0
---

## 定義

Karpathy 2026/1 抱怨 → Forrest Chang 4 條 → Mnilax 2026/5 補 8 條 = 12 條 CLAUDE.md 規則。整套用契約式語言寫進 CLAUDE.md，Claude Code 寫程式錯誤率從 41% 降到 3%。前 4 條對應 1 月份單次補全場景的失敗模式，後 8 條對應 5 月 Agent 編排／hook 鏈／多 codebase 場景。

## 關鍵面向

- **Karpathy 4 條基礎**：(1) 編碼前先思考暴露假設 (2) 簡單優先 (3) 外科手術式修改 (4) 以目標為導向執行
- **Mnilax 補 8 條 Agent 時代**：(5) Claude 該／不該做的分工 (6) task=4K/session=30K token 預算 (7) 矛盾模式選一個不混合 (8) 改檔前先讀檔 (9) 測試編碼「為什麼」(10) 多步驟每步檢查點 (11) 一致性 > 個人偏好 (12) [[loud-failure]] 大聲失敗
- **遵守率不會崩潰**：4 條 78% → 12 條 76%，幾乎不掉。超過 14 條才會掉到 52%
- **錯誤模式不重疊**：新規則覆蓋舊規則沒處理的場景，不搶同一塊注意力預算
- **2 行硬限**：CLAUDE.md 全文超過 [[claude-md-200-line-limit]] 200 行遵守率明顯下降
- **不該寫的東西**：示例（占上下文）、「小心點」（無法檢驗）、「像資深工程師」（身份提示無效）、領域特定工具規則（無法泛化）

## 應用場景

- **Simon 自己的 CLAUDE.md**：全域 `~/.claude/CLAUDE.md` 跟專案級 `~/projects/Simon-Agent/CLAUDE.md` 是「合作契約」性質、跟這 12 條同精神；可以對照看哪些已涵蓋
- **規則 12 [[loud-failure]] 跟 sync-garden.sh STATE 旗標** 同設計理念：寧暴露失敗、不靜默成功
- **規則 10 多步驟檢查點 對 KW γ 批次消化**：每篇消化完顯式報「N/M」、寫 changelog；不默默推進
- **規則 6 token 預算 對 1M context Opus**：批次跑 10 篇容易破 200K、套 task=10K 預算 + 超預算就重啟 session

## 相關概念

- [[claude-md-reflexive-law]]：行為偏差改規則寫進 CLAUDE.md，是這 12 條的元規則
- [[loud-failure]]：規則 12，值得獨立成 concept 因為跨領域可用
- [[claude-md-200-line-limit]]：CLAUDE.md 行數上限，跟這套規則總長度衝突時的取捨依據
- [[rules-over-code]]：規則 > 程式碼的元理念，這套 12 條就是落地版本
- [[instructions-file]]：CLAUDE.md 概念本體
- [[claude-md-dual-nav]]：多層 CLAUDE.md（vault 根 + 子資料夾），跟 12 條規則放置策略相關

## 尚未解決的疑問

- 規則 5「Claude 該／不該做的分工」對 Simon 工作流是否落地？目前還是把所有決策包進去
- 規則 9「測試編碼為什麼」對前端／設計類任務（如 Reading Garden）如何套？

## 來源（自動維護）

- [[2026-05-14-blocktempo-claude-code-12-rules]]
