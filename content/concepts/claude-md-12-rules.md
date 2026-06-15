---
title: "Claude Code 12 條規則（Karpathy 4 + Mnilax 8）"
slug: claude-md-12-rules
aliases: [Claude Code 12 rules, CLAUDE.md 12 rules, Karpathy 12 rules, Mnilax 12 rules, 12 條規則模板, Claude Code 行為契約, CLAUDE.md 200 行, CLAUDE.md 行數上限, 200 行死線, claude-md token budget, instruction file size limit]
category: AI
confidence: 已驗證
created: 2026-05-15
---

## 定義

Karpathy 2026/1 抱怨 → Forrest Chang 4 條 → Mnilax 2026/5 補 8 條 = 12 條 CLAUDE.md 規則。整套用契約式語言寫進 CLAUDE.md，Claude Code 寫程式錯誤率從 41% 降到 3%。前 4 條對應 1 月份單次補全場景的失敗模式，後 8 條對應 5 月 Agent 編排／hook 鏈／多 codebase 場景。

<p align="center"><img src="assets/covers/claude-md-12-rules-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **Karpathy 4 條基礎**：(1) 編碼前先思考暴露假設 (2) 簡單優先 (3) 外科手術式修改 (4) 以目標為導向執行
- **Mnilax 補 8 條 Agent 時代**：(5) Claude 該／不該做的分工 (6) task=4K/session=30K token 預算 (7) 矛盾模式選一個不混合 (8) 改檔前先讀檔 (9) 測試編碼「為什麼」(10) 多步驟每步檢查點 (11) 一致性 > 個人偏好 (12) [[loud-failure]] 大聲失敗
- **遵守率不會崩潰**：4 條 78% → 12 條 76%，幾乎不掉。超過 14 條才會掉到 52%
- **錯誤模式不重疊**：新規則覆蓋舊規則沒處理的場景，不搶同一塊注意力預算
- **不該寫的東西**：示例（占上下文）、「小心點」（無法檢驗）、「像資深工程師」（身份提示無效）、領域特定工具規則（無法泛化）

## CLAUDE.md 200 行上限

CLAUDE.md 全文超過 200 行後，個別規則的遵守率明顯下降。原因：重要規則被噪音淹沒、Claude 開始「模式匹配看到規則」而不是逐條閱讀。Anthropic 官方建議 CLAUDE.md ~80% 遵守率，前提是「短、結構清楚」。
- **死線是 200 行不是 200 條規則**：規則密度比規則數量更關鍵
- **遵守率分段**：≤14 條規則維持 76-78%、>14 條陡降到 52%
- **超限三類錯誤**：(1) 偏好垃圾桶（堆習慣到 4000+ token、遵守率 30%）(2) 完全不用每次重 prompt（5x token 浪費）(3) 複製模板不更新（兩週後失效）
- **超限訊號**：規則開始相互重複、領域特定規則混進通用規則、模板靜態化沒滾動
- **拆檔策略**：CLAUDE.md 留契約／反射律；細部規範拆 `~/.claude/rules/{name}.md` 用 paths-conditional 載入；場景化規則拆 skill `references/`
- **示例占空間**：3 個示例 ≈ 10 條規則的 token 量、Claude 易對示例過擬合
- **無法檢驗的話無效**：「小心點」「認真思考」遵守率掉到 30%
- **身份提示無效**：「像資深工程師一樣」沒用
- **Simon 全域 CLAUDE.md**：目前約 130 行安全範圍。新規則加入前先評估「能不能拆 rules/」

## 應用場景

- **Simon 自己的 CLAUDE.md**：全域 `~/.claude/CLAUDE.md` 跟專案級 `~/projects/Simon-Agent/CLAUDE.md` 是「合作契約」性質、跟這 12 條同精神；可以對照看哪些已涵蓋
- **規則 12 [[loud-failure]] 跟 sync-garden.sh STATE 旗標** 同設計理念：寧暴露失敗、不靜默成功
- **規則 10 多步驟檢查點 對 KW γ 批次消化**：每篇消化完顯式報「N/M」、寫 changelog；不默默推進
- **規則 6 token 預算 對 1M context Opus**：批次跑 10 篇容易破 200K、套 task=10K 預算 + 超預算就重啟 session

## 相關概念

- [[claude-md-reflexive-law]]：行為偏差改規則寫進 CLAUDE.md，是這 12 條的元規則
- [[loud-failure]]：規則 12，值得獨立成 concept 因為跨領域可用
- [[rules-over-code]]：規則 > 程式碼的元理念，這套 12 條就是落地版本
- [[instructions-file]]：CLAUDE.md 概念本體
- [[claude-md-dual-nav]]：多層 CLAUDE.md（vault 根 + 子資料夾），跟 12 條規則放置策略相關
- [[progressive-disclosure]]：按需讀取，主檔短 + 細節拆 references 的設計原則本體

## 尚未解決的疑問

- 規則 5「Claude 該／不該做的分工」對 Simon 工作流是否落地？目前還是把所有決策包進去
- 規則 9「測試編碼為什麼」對前端／設計類任務（如 Reading Garden）如何套？
- Anthropic 官方有沒有公布 CLAUDE.md token 消耗上限？目前只看到「短、結構清楚」沒具體數字
- 拆 rules/ + paths-conditional 之後總 instruction 量還在、token 上會不會反而更貴？

## 來源（自動維護）

- [[2026-05-14-blocktempo-claude-code-12-rules]]
