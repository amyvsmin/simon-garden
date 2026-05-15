---
title: "CLAUDE.md 200 行上限"
slug: claude-md-200-line-limit
aliases: [CLAUDE.md 200 行, CLAUDE.md 行數上限, 200 行死線, claude-md token budget, instruction file size limit]
category: AI
confidence: 已驗證
created: 2026-05-15
last-queried: ""
query-count: 0
---

## 定義

CLAUDE.md 全文超過 200 行後，Claude 對個別規則的遵守率明顯下降。原因是重要規則被噪音淹沒、Claude 開始「模式匹配看到規則」而不是逐條閱讀。Anthropic 官方建議 CLAUDE.md ~80% 遵守率，前提是「短、結構清楚」。Mnilax 6 週實測：4 條規則 → 78%、12 條 → 76%、18 條 → 52%。

## 關鍵面向

- **死線是 200 行不是 200 條規則**：規則密度比規則數量更關鍵
- **遵守率分段**：≤14 條規則維持 76-78%、>14 條陡降到 52%
- **超限三類錯誤**：(1) 偏好垃圾桶（堆習慣到 4000+ token、遵守率 30%）(2) 完全不用每次重 prompt（5x token 浪費 + 會話不一致）(3) 複製模板不更新（兩週後失效）
- **超限訊號**：規則開始相互重複、領域特定規則（「always Tailwind」）混進通用規則、模板靜態化沒滾動
- **拆檔策略**：CLAUDE.md 留契約／反射律；細部規範拆 `~/.claude/rules/{name}.md` 用 paths-conditional 載入；場景化規則拆 skill `references/`
- **示例占空間**：3 個示例 ≈ 10 條規則的 token 量，且 Claude 易對示例過擬合 — 寫規則別寫示例
- **無法檢驗的話無效**：「小心點」「認真思考」遵守率掉到 30%（無法檢驗 = 無法執行）
- **身份提示無效**：「像資深工程師一樣」沒用，Claude 本來就覺得自己是

## 應用場景

- **Simon 全域 CLAUDE.md**：目前約 130 行，安全範圍內。新規則加入前先評估「能不能拆 rules/」
- **專案級 CLAUDE.md**：Simon-Agent 95 行，安全。
- **KW γ SKILL.md**：本體約 150 行 + references 拆細部規則，符合「主檔短、細部按需 Read」原則
- **未來新加規則的 checklist**：(1) 能不能在現有規則加一行 (2) 能不能拆 rules/ paths-conditional (3) 能不能拆 skill references (4) 確定要進 CLAUDE.md 才考慮

## 相關概念

- [[claude-md-reflexive-law]]：反射律是寫進 CLAUDE.md 的元規則
- [[claude-md-dual-nav]]：多層 CLAUDE.md（vault 根 + 子資料夾）配合 200 行上限可以擴容
- [[claude-md-12-rules]]：12 條規則的「14 條 = 52% 遵守率」實測來源
- [[rules-over-code]]：規則先於程式碼，但規則本身有密度上限
- [[progressive-disclosure]]：按需讀取，主檔短 + 細節拆 references 的設計原則本體

## 尚未解決的疑問

- Anthropic 官方有沒有公布 CLAUDE.md token 消耗上限？目前只看到「短、結構清楚」沒具體數字
- 拆 rules/ + paths-conditional 之後總 instruction 量還在、token 上會不會反而更貴？

## 來源（自動維護）

- [[2026-05-14-blocktempo-claude-code-12-rules]]
