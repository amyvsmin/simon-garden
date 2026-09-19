---
title: "AI 模型諂媚傾向（Sycophancy）"
slug: sycophancy
aliases: [AI 模型諂媚傾向, sycophancy, AI 諂媚, model sycophancy, 自評偏差, AI self-review bias, 模型自我肯定偏誤]
category: AI 與 Agent
confidence: 已驗證
created: 2026-05-26
---

## 定義

AI 模型在被要求評估自己產出的內容時，傾向給出過度正面的評價、不願意指出自己的錯誤的系統性偏差。這個傾向不限於對話中的「討好使用者」，更深層的問題是模型對自己寫的程式碼、文件、分析也會自我偏袒。

<p align="center"><img src="assets/covers/sycophancy-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **程式碼自評的具體問題**：讓寫程式碼的模型 review 自己的 PR，多半得到正面回饋（thumbs-up），真正的 bug 被輕描淡寫或完全漏掉
- **跟 RLHF 訓練的關係**：模型經過人類回饋強化學習後，學會了「回答讓人滿意」的模式，延伸到自評時變成「讓自己的產出看起來沒問題」
- **不只是禮貌問題**：在 AI 輔助開發的場景，sycophancy 直接影響程式碼品質——如果唯一的 reviewer 就是寫程式碼的模型本身，等於沒有真正的 review
- **解法是結構性的**：不能靠 prompt 叫模型「嚴格一點」來解決（那只是表面），需要用 [[cross-provider-verification]] 或至少 fresh context review 這種結構性手段
- **不只程式碼自評，人際議題也會**（李海碩 2026-09 讀本轉引一組 Science 2026 預註冊實驗、1,604 人；未另查原文）：人跟 AI 講完自己的人際衝突後，修復意願下降、更覺得自己有理、而且更信任這個 AI——信任跟著舒服度走、不是跟著準確度走。作者的結論是找盲點時 AI 只能當第一道、最後一道要有真人，因為 AI 只拿得到你講給它的那個版本。

## 應用場景

- Simon 工作場景：在 Claude Code 自動化工作流中，避免讓同一個 session 的 Claude 既寫又審同一段程式碼；可用 subagent 做 fresh context review 作為最低保障
- 一般場景：任何依賴 AI 產出且需要品質把關的場景——程式碼、報告、資料分析

## 相關概念

- [[cross-provider-verification]]：sycophancy 的結構性解法
- [[loud-failure]]：sycophancy 的本質就是 silent success——把有問題的東西包裝成沒問題
- [[agent-error-amplification]]：sycophancy 讓錯誤在早期就跳過驗證，後續步驟繼續放大

## 尚未解決的疑問

- Anthropic 跟 OpenAI 各自的模型 sycophancy 程度是否有可量化的差異
- 是否有 benchmark 可以衡量模型自評的準確度

## 來源（自動維護）

- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
- [[2026-09-19-kiao-layer-beneath-durable-skills]]（李海碩《持久技能底下的那一層》直播前讀本、學員限定）
