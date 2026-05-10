---
name: 反推式 Skill 設計法（Q5 反推）
aliases: [Q5 反推法, sample-backward design, 樣本反推設計]
category: 自動化
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34cf85da-554f-8134-a06c-f701ce556020
---

# 定義

從既有產物樣本反推 skill 隱性規則的設計方法。取一組可信的過往 AI 產出當 target，逐題提問反推當時依循的行為、輸出、控制規則，再將規則顯性化成 skill-spec。

# 關鍵面向

- **樣本代表性**：樣本數量不需要大，5 篇日記（2026-04-19 ~ 04-23）已足以反推出完整規則集。前提是樣本來自同一個成熟工具，風格已穩定
- **提問層數**：從「輸出格式」（B-1 ~ B-3）→「接收行為」（A1 ~ A10）→「控制流」（C1 ~ C12）三層逐層提問，不在同一層同時問完
- **定稿門檻**：所有規則都反推完且互相不衝突，才進入實作。規則衝突是最常見的設計缺口來源
- **vs 前瞻設計**：前瞻設計容易陷入「想像中的需求」，反推設計強制對齊實際產出。適合「搬家」型 skill（已有穩定前版）

# 應用場景

- Simon 工作場景：從 ChatGPT GPTs 搬 skill 到 Claude Code，Simon-Journal 即是此場景；改 skill 規則時從近期產出反推「當前實際在跑什麼」
- 一般場景：建新 skill 卻不知從何下手時，先手動跑一週，累積樣本，再反推

# 相關概念

- [[sentinel-test]]：反推出規則後需要驗證 MCP 能力是否支援，Sentinel 是驗證手段
- [[pure-receive-immediate-write]]：Simon-Journal 的 A / C 規則是反推產出

# 尚未解決的疑問

- 樣本數下限是多少，5 篇是否是通則，還是 Simon-Journal 特例
- 如果前版 AI 產出本身不穩定（格式漂移），反推還可行嗎

# 來源（自動維護）

- [[2026-04-24-simon-journal-skill-design]]
