---
title: "Context 重送 Token 悖論"
slug: context-resend-token-paradox
aliases: [Token 悖論, context resend cost, 上下文重送成本, HTML token 反直覺]
category: AI
confidence: 已驗證
created: 2026-05-10
---

# Context 重送 Token 悖論

## 定義

LLM 對話的反直覺數學現象：每次發訊息都會把整個對話前文一起送回給模型；長對話累積到數十萬 token 後、任何一次「因看不清楚而產生的多餘往返」都會讓那幾十萬 token 又被重送一遍。所以「單次輸出多用 token 換更精準的決策」可能反而省 token、特別是在長 context 場景。

## 關鍵面向

- **數學機制**：對話 N 輪、context 累積 X token；第 N+1 輪要送 X 給模型；如果第 N+1 輪因不清楚要再來 3 輪澄清、就送了 3X 而不是 X
- **HTML 看似耗 token**：HTML 比 Markdown 多 3-5 倍字元數、單次輸出確實多花 token
- **HTML 反而可能省**：HTML 互動介面讓使用者第一次就做出精確決策、減少 N+1 輪澄清；長對話下節省的 (N×X) >> 單次多花的幾千 token
- **適用條件**：長對話 + 高決策複雜度才有效；短對話或簡單任務 HTML 開銷划不來
- **跟 [[token-saving-rules]] 守則三的關係**：守則三「對話水位管理」是直接壓 X；本概念是用「降低澄清回合 N」間接省 token、互補

## 應用場景

- Simon 工作場景：Simon-Agent 跑 KW γ migration、課程筆記等長對話時、值得用 HTML／結構化輸出降低澄清回合；單次任務（簡單 git commit、檔案重命名）不必
- 一般場景：所有 LLM 訂閱戶長對話場景；特別影響重決策密集型工作（架構規劃、code review）

## 相關概念

- [[html-vs-markdown-ai-output]]：本概念是支持 HTML 主張對「太耗 token」反駁的數學基礎
- [[token-saving-rules]]：守則三的水位管理是壓 X、本概念是壓 N、兩者互補
- [[claude-usage-dashboard]]：直接影響 Current Session 累積速度

## 尚未解決的疑問

- 何時 N+1 輪澄清成本超過單次 HTML 開銷的損益點？沒有量化公式、要靠經驗判斷

## 來源（自動維護）

- [[2026-05-09-thariq-html-replaces-markdown-ai]]
