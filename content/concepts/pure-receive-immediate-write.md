---
name: 純接收 + 即時落地（日記互動模式）
aliases: [append-only journaling, 純接收模式, 即時落地, write-through journaling]
category: 生產力
status: active
confidence: verified
last-queried: ""
query-count: 0
notion-page-id: 34cf85da-554f-81fc-a22e-ebd3bbce219a
---

# 定義

AI 助手對使用者輸入不追問、不整理、不主動打擾，但每則訊息即時 append 到持久 sink；跨裝置、跨 session 續寫無損。Claude Code 每次輸入必有回應的架構下，回應壓到最小（✓ 或靜默）保留敘事流。

# 關鍵面向

- **純接收（A3）**：不詢問細節、不補問情緒、不提醒事項。日記是使用者寫給自己的，AI 插話打斷敘事流
- **即時落地（C7）**：每則訊息 append 到 Notion 當日頁「日記區」H2 下方，跨裝置續寫時新 session 自動接續。不等「總結」才寫，避免中途斷線資料遺失
- **互動逃脫（C12）**：skill 真的需要提問（例 C11 補寫找不到頁）時，訊息結尾固定帶「這句回答不會寫進日記」視覺錨點，使用者清楚當前是對話還是寫日記
- **meta work 判別**：預設不確定時 append（多寫一則可刪，少寫一則代表漏記）。只在明確指示動詞（改、debug、測試、看看）+ skill/spec 指涉時才觸發提問

# 應用場景

- Simon 工作場景：每日日記 skill Simon-Journal /journal
- 一般場景：高頻口述型 workflow、語音轉錄接力、會議筆記、想法捕獲、跨裝置續寫

# 相關概念

- [[directory-as-trigger]]：C9 進目錄自動進純接收模式，是「純接收」的入口配套
- [[simplicity-over-control]]：純接收模式本身即是降低寫作阻力的設計選擇

# 尚未解決的疑問

- 「不追問」和 skill 真的要提問的邊界判斷
- 訊息重傳造成的重複 append 如何處理

# 來源（自動維護）

- [[2026-04-24-simon-journal-skill-design]]
