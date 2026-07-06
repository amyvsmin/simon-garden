---
title: "AI 可信任性（AI Trustworthiness）"
slug: ai-trustworthiness
aliases: [AI Trustworthiness, AI 可信任性, 可信任 AI, 可信賴 AI, trustworthy AI, AI 強韌度, AI 可靠度, AI 可控性]
category: 資安
confidence: 已驗證
created: 2026-07-06
---

## 定義

AI 系統在面對各種狀況（含錯誤輸入、異常環境、惡意攻擊）時，仍能表現出**準確、安全且符合預期**的能力，是導入 AI 模組時要評估的核心特性。ISO/IEC 22989:2022 與 NIST AI RMF 都把它列為一組明確的特性清單，iPAS 常考「哪些屬於／不屬於可信任性」。

## 關鍵面向

- **三個最常考的核心特性**：
  - **強韌度（Robustness）**：面對錯誤輸入、異常環境、或**對抗式攻擊（Adversarial Attack，如在圖片加人眼看不見的雜訊騙偵測模型）**時，仍能維持運作、不被輕易誤導。
  - **可靠度（Reliability）**：在規定條件與時間內能**持續穩定**執行預期功能，不能「時靈時不靈」（今天抓到 Deepfake、明天漏報就不可信）。
  - **可控性（Controllability）**：人類能監控、干預、必要時**強制停止** AI（即 Human-in-the-Loop）；AI 誤判時管理者要能介入覆寫。
- **ISO/IEC 22989 完整清單**：三核心之外還有韌性（Resilience）、可解釋性（Explainability）、可預測性（Predictability）、透明性（Transparency）、偏差與公平（Bias & Fairness）。
- **⚠️ 高頻陷阱**：**速度（Speed）／效能不屬於可信任性**——它是 Performance/Efficiency 指標。一個算得再快的 AI，若結果錯（不可靠）或易被騙（不強韌），仍然不可信任。這是常見干擾選項。

## 應用場景

- **Simon 工作場景**：公司導入影像／語音辨識或 AI 模組防 Deepfake 語音詐騙（假冒高層要求匯款）時，評估這套 AI 要具備強韌、可靠、可控三性；把 AI 用在資安維運（AI SOC）時，關鍵處置要保留人可介入（可控性），不交全自動。
- **一般場景**：AI 治理制度建立、[[nist-ai-rmf]] 與 ISO 42001 導入、iPAS 中級 AI 治理題組。

## 相關概念

- [[nist-ai-rmf]]：NIST AI RMF 把可信任性拆成七項特性，是評估可信任性的框架
- [[secure-ai-framework]]：Google SAIF 從全生命週期治理 AI 安全，與可信任性互補
- [[ai-security-risk]]：可信任性不足正是 AI 資安風險的一種來源
- [[prompt-injection]]：提示注入會破壞可控性與可靠性

## 來源

- [HackMD·iPAS 中級考試重點整理（hiiii）](https://hackmd.io/@hiiii/H1ZZ-8qBbx)
- iPAS 考古題（科一題組·可信任 AI）解析：ISO/IEC 22989:2022、NIST AI 100-1
