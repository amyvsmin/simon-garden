---
name: 模組分工拒絕重複勞動
aliases: [單一責任原則, 模組邊界, 脫褲子放屁]
category: 生產力
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34df85da-554f-81df-9f1d-c3da4600224e
---

# 定義

系統設計時每個模組只負責自己定義域的事，不重複另一模組的工作；明確劃分邊界，避免「脫褲子放屁」式的重複勞動。

# 關鍵面向

- **單一責任**：日記 sink 只 append、週復盤只跨 7 天分析、KW 健檢只健檢知識庫
- **時間粒度劃分**：日級任務由日記模組做、週級分析由週復盤、月／季復盤更高層
- **觸發點區分**：被動接收（LINE 寫訊息）、主動觸發（「跑 W?? 復盤」）、自動排程（KW 健檢每週日 21:00）

# 應用場景

- Simon 工作場景：LINE bot 寫日記時不掃 7 天 pattern，那是週復盤的事。即使技術上可以順便做，仍按邊界劃分
- 一般場景：遇到「在 X 順便做 Y 吧」的提案時，先問「Y 是不是別的模組更合適做？」

# 相關概念

- [[notion-bidirectional-relation]]：邊界劃分清楚後，多 DB 雙向 relation 自動同步

# 尚未解決的疑問

- 邊界灰色地帶的判斷準則

# 來源（自動維護）

- [[2026-04-25-weekly-review-skill-design]]
- [[2026-04-25-line-bot-journal-design]]
