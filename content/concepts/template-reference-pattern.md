---
name: Template 參考模式（Template Reference Pattern）
aliases: [Template Reference, 既有 template 參考, AI 防腦補的個人語料, reference pattern, 個人案例 reference, 個人語料 reference]
category: AI
status: active
confidence: unverified
created: 2026-05-11
last-queried: ""
query-count: 0
---

## 定義

請 AI 執行新任務時、餵給它使用者過去做過的同類型實際案例當 reference、強制 AI 用使用者的脈絡而不是訓練資料裡的通用 best practice 來思考。核心信念：**個人語料 > 全網通用語料**、特別是當任務跟使用者的私有流程／偏好深度相關時。

## 關鍵面向

- **資料來源**：使用者過去 N 個月／N 年累積的同類型筆記、報告、產出
- **規模門檻**：通常需要至少 5–10 個樣本 AI 才能抓出穩定模式；Josie 案例是 50+ 個專案筆記
- **效果**：AI 拆解任務時不會加入使用者根本不在乎的事項（例如對方公司內部公文流程）、產出 doable 程度顯著提升
- **跟訪談的搭配**：Template reference 給 AI 上下文、訪談確認邊界；兩個結合幾乎完全消除 AI 腦補
- **跟 RAG 的差異**：RAG 是檢索增強生成、需要向量資料庫；template reference 更輕量、就把過去案例放進 context 即可；vault + Claude Code 是天然 fit
- **更新機制**：每完成一個新案例 → 抽取成 template → 加入 reference 庫；pipeline 自我滾動成長
- **資產化效應**：「做完的事情變成資產」、reference 庫越用越值錢、AI 越用越貼合使用者

## 應用場景

- Simon 工作場景：你已累積 30+ readings + 56 concepts、未來可實驗讓我寫新 reading 時 reference 既有 reading 結構；course-notes skill 可 reference 過去同 series 筆記的風格；substack-publish 可 reference 過去 3 篇成功貼文的長度／結構
- 一般場景：日報／週報自動化、客戶簡報、研究論文寫作、業配企劃（Josie 案例）、職涯履歷更新；任何「我做過很多次、每次都類似但細節不同」的工作

## 相關概念

- [[ai-task-clustering]]：cluster 是不給 reference 的最低風險、template reference 是用個人語料拉高品質
- [[interview-driven-prompting]]：訪談 + template reference 是雙保險防腦補
- [[skill]]：template reference 流程穩定後封裝為 skill
- [[obsidian-claude-code-workflow]]：vault 是 template reference 的天然資料庫
- [[second-brain]]：個人語料庫的長期累積就是第二大腦的功效之一

## 尚未解決的疑問

- 多大的 reference 量級對 token 成本是 break-even 點？
- AI 對 reference 的最新／最舊樣本是否一視同仁、還是要加 recency weighting？

## 來源（自動維護）

- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
