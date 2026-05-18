---
title: "Claude Code 12 條規則：把錯誤率從 41% 降到 3%（Mnilax 補完 Karpathy 4 條）"
date: 2026-05-14
type: 來源分析
url: "https://www.blocktempo.com/claude-code-12-rules-error-rate-3-percent-karpathy-agent/"
inbox-id: "361f85da-554f-81bab696e52800f6f07d"
concepts: [claude-md-12-rules, loud-failure, claude-md-200-line-limit]
projects: []
created: 2026-05-15
reviewed: 2026-05-18
---

## 摘要

Andrej Karpathy 2026 年 1 月在 X 抱怨 Claude 寫程式三類典型問題（暗中假設、過度複雜化、無關破壞）。Forrest Chang 把抱怨歸納成 4 條 CLAUDE.md 規則放 GitHub，兩週內 60,000 star，至今 120,000 star。但 2026 年 5 月 Claude Code 生態已從單次補全進化到多步驟 Agent 協作，舊 4 條開始失靈。Mnilax 用 30 個 codebase 測 6 週，補 8 條新規則（涵蓋 task/session token 預算、檢查點、矛盾模式不混、改檔前先讀、測試要編碼「為什麼」、多步驟檢查點、一致性 > 個人偏好、大聲失敗），實測錯誤率從 41% 降到 3%。遵守率從 78% → 76%（幾乎不掉），錯誤率多降 8 個百分點 — 新規則覆蓋的是舊規則沒處理的失敗模式，沒搶注意力預算。CLAUDE.md 全文超過 200 行後遵守率明顯下降，是真實上限。

## 核心概念

- [[claude-md-12-rules]]：Karpathy 4 條（思考、簡單、外科手術、目標導向）+ Mnilax 補 8 條（Claude 不該做什麼／token 預算／矛盾模式不混／改檔前先讀／測試編碼為什麼／多步驟檢查點／一致性／大聲失敗），整套 12 條的契約式 CLAUDE.md 結構
- [[loud-failure]]：規則 12「明確暴露不確定性、不要包裝靜默失敗」— Migration 跳過 30 筆要說、跳過任何測試要說、邊界情況沒驗證要說
- [[claude-md-200-line-limit]]：CLAUDE.md 超過 200 行遵守率掉到 30%、規則被噪音淹沒、與 [[claude-md-reflexive-law]] 配套

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- ✅ 你 `~/.claude/CLAUDE.md` 約 130 行、`~/projects/Simon-Agent/CLAUDE.md` 約 95 行，都在 200 行內。但全域 CLAUDE.md 還在長，要警覺；KW γ skill 的 SKILL.md 也快滿，可以套「>=180 行就拆 references/」原則
- ✅ **規則 12 大聲失敗** 跟 sync-garden.sh 失敗處理（寫 `~/.claude/state/garden-sync-fail.txt` + SessionStart hook 提醒）的設計同精神。但 KW γ ingest-flow Step 7 寫 inbox 狀態 🌱 → 🌲 之前沒有「驗證 reading 真的寫成功」這一步，理論上有 silent success 風險、值得補
- ✅ **規則 10 多步驟檢查點** 適用 KW γ 批次消化：每處理完一篇要寫 changelog + 顯式總結「已完成 N/M」，不要默默推進；這次批次 2 篇可以驗證
- ✅ **規則 6 token 預算** 對 1M context Opus 反而更關鍵 — 你的 KW γ 批次跑 10 篇可能輕鬆破 200K token，可以套 task=10K 預算原則：超預算寫摘要 + 開新 session 接續
- ✅ **規則 11 一致性優先** 配你的「CLAUDE.md 反射律」很搭：先別創新風格、follow vault 既有寫法、有意見走顯式討論

## 原文要點

- **Karpathy 4 條規則**（規則 1–4）：(1) 編碼前先思考、暴露假設 (2) 簡單優先、無想象功能 (3) 外科手術式修改、不順手最佳化相鄰 (4) 以目標為導向執行、定義成功標準後迭代
- **Mnilax 補 8 條**（規則 5–12）：
  - 規則 5：Claude 該／不該做的分工 — 做分類／起草／總結／提取；不做路由／重試／狀態碼處理／確定性轉換
  - 規則 6：token 預算 — 單任務 4K、單會話 30K，逼近預算就總結 + 重啟
  - 規則 7：矛盾模式不混 — 選一個更新／更測試的、不要平均
  - 規則 8：改檔前先讀檔 — 讀 exports、callers、共享 util；「我看來不相關」最危險
  - 規則 9：測試編碼「為什麼這個行為重要」— 不只「做了什麼」
  - 規則 10：多步驟任務每步檢查點 — 總結已做／已驗證／還剩什麼
  - 規則 11：一致性 > 個人偏好 — 程式碼庫用 snake_case 就用 snake_case
  - 規則 12：大聲失敗 — Migration 漏 30 筆要說、跳測試要說、邊界沒驗證要說
- **實測數據**：30 codebase × 6 週 × 同 50 任務，0 規則時錯誤率 41%、Karpathy 4 條降到 14%、12 條降到 3%
- **遵守率上限**：4 條 78% → 12 條 76%（幾乎不掉）、超過 14 條掉到 52%、200 行是死線
- **失敗實驗**：堆 Reddit 規則（重複）、示例代替規則（占上下文）、「小心點」（無法檢驗、遵守 30%）、「像資深工程師」（沒效）— 都不行
- **使用建議**：把 Karpathy 4 條 + Mnilax 8 條當基礎，再加專案專屬規則；保留實際對應犯過錯的規則、刪不適用的

## 落地動作與效益（2026-05-15 套用 4 條規則）

| 規則 | 落地檔 | 動作 | 預期效益 |
|---|---|---|---|
| 11 一致性 | vault `2-knowledge/{readings,concepts}/` 112 個 md | 內文章節 `^# ` → `## `，全部升 H2 | article-title 是真正唯一 H1、HTML 語意層級正確、Reading Garden 顯示乾淨 |
| 11 一致性 | `~/.claude/skills/knowledge-wiki/references/templates.md` | concept 跟 reading 範本砍掉 `# {title}` H1 | 未來新 reading／concept 不再生 case 3（內文 H1 跟 article-title 重複）|
| 11 一致性 | `~/.claude/skills/knowledge-wiki/references/lint-flow.md` | 加 `DupTitle` 健檢規則 | 萬一未來再生 case 3，健檢會抓到 |
| 12 大聲失敗 | `~/.claude/skills/knowledge-wiki/references/ingest-flow.md` Step 7 | 寫 Notion 🌲 前 `test -s <reading>` 驗證 | 避免 silent success：Notion 已標完成但 reading 沒寫成功 |
| 10 檢查點 | `~/.claude/skills/knowledge-wiki/references/batch-rules.md` | 每篇寫 changelog → 報 `N/M` → 才推下一篇 | 批次中途出錯可定位、不靜默推進到下一篇 |
| 6 task 預算 | 同上 | 單篇 ingest 逼近 10K token 先 wrap 寫摘要 | 不硬撐燒爛 reading 品質 |
| 6 session 預算 | 同上 | 批次累計逼近 200K token 主動提醒 Simon 切對話 | 不靜默讓 AI 在長 context 下鈍化 |
| 連帶 | `~/.claude/skills/knowledge-wiki/references/ingest-flow.md` Step 9 + 10 | 加「優化芙莉蓮」自檢 + 落地回寫 reading | 之後每篇 reading 都會自動跑這個流程、不必 Simon 主動提 |

未落地的 12 條規則中其他 8 條：
- **規則 1–4（Karpathy 原版）**：早上的全域／專案 CLAUDE.md 精神上已吻合，不必新增
- **規則 5 Claude 該／不該做的分工**：抽象、case by case，難寫成 reusable rule
- **規則 7 矛盾模式不混**：同上、case by case
- **規則 8 改檔前先讀檔**：Read tool 強制已落地
- **規則 9 測試編碼為什麼**：對 vault 寫作類任務難套（無單元測試）

## 原始連結

- https://www.blocktempo.com/claude-code-12-rules-error-rate-3-percent-karpathy-agent/
- 原作者 X：https://x.com/Mnilax/status/2053116311132155938
- Karpathy 模板 GitHub：https://github.com/forrestchang/andrej-karpathy-skills
