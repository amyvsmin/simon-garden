---
name: Daily notes（AI 工作日誌）
aliases: [daily notes, AI 工作日誌, 每日筆記]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-8129-a78c-da9a447283ef
---

## 定義

AI 每天結束時把工作內容寫進當日的 daily notes 檔，下次 session 只讀最近幾天即可恢復脈絡，是漸進式披露在時間維度的具體實作。檔名通常是 `YYYY-MM-DD.md`，依日期排序，內容為當日 AI 完成的事項、決策、待辦。

## 關鍵面向

- **寫入時機**：session 結束時 AI 自行 append；或 stop hook 觸發；或人工以「今天做了什麼」收束
- **讀取策略**：next session 只讀最近 3-7 天，更早的不掃，要查就 grep
- **跟人類日記的差別**：daily notes 給 AI 讀，可結構化、條列、機器可解析；人類日記給自己讀，可敘事、情緒、模糊
- **跟 git log 互補**：git log 記程式碼變更、daily notes 記決策脈絡與未進入 commit 的討論
- **典型內容**：完成事項、跟 AI 討論過的決策、未決問題、明日待辦、學到的新概念

## 應用場景

- Simon 工作場景：Simon-Journal 純接收日記模式（手寫日記）+ 未來可加 Claude Code daily notes（AI 工作日誌）兩條軸並行；課程 leaf 筆記也是同邏輯（每節一檔）
- 一般場景：開發者用 daily notes 記專案進度、研究者記實驗結果、PM 記會議決策

## 相關概念

- [[progressive-disclosure]]：本概念是其在時間維度的具體實作
- [[obsidian-claude-code-workflow]]：daily notes 常見的承載 vault
- [[claude-code]]：daily notes 的主要使用者

## 尚未解決的疑問

- 多 session 在同一天並行寫 daily notes 的衝突處理
- daily notes 老化策略（半年前的還要保留嗎、要不要封存）

## 來源（自動維護）

- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
