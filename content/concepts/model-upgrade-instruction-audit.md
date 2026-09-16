---
title: "換模型重審指令"
slug: model-upgrade-instruction-audit
aliases: [換模型重審指令, instruction audit on model upgrade, 指令債清理]
category: AI 與 Agent
confidence: 已驗證
created: 2026-09-16
---

## 定義
每次換到更強的模型，就把為舊模型累積的 skill、AGENTS.md 與任務提示詞整批重審一次。過度具體的步驟、過強的邊界用語、催促跑測試的提醒，在新模型上可能從幫助變成限制。

## 關鍵面向
- 指令是為某個模型寫的：能幫 Sol 或 Luna 的指引可能把 GPT-6 Astra 綁太死；倉庫裡的 skill 也會被其他貢獻者用不同模型讀到，寫的時候要想「誰會讀」。
- 食譜式步驟過時：模型已能處理細微差異與模糊，過度具體的指引反而拖低結果。
- 催測試的指令多餘：舊模型要提醒才會跑測試；Astra 自己會做，同樣的指令變成多跑。
- 邊界用語要重校準：以前為了防舊模型越權而寫的「先問我」強語氣，對齊度更高的新模型會太當真、在你其實希望它繼續的地方停下；改成對已知安全的流程（例如用拋棄式測試資料的本機測試）明確給授權。
- 不用手動全審：直接請新模型依這些原則稽核你的指令集。

## 應用場景
- Simon 工作場景：Claude 從 Fable 5.0 換到 5.1、Codex 每次升版時，請該模型稽核 CORE_RULES、AGENTS.md 與各 skill 裡「不得／一律／先問」的條文，分出「仍需要」與「為舊模型寫的」兩堆。
- 一般場景：任何長期累積的提示詞範本、系統提示、自動化規則，換模型都值得跑一次同樣的清理。

## 相關概念
- [[skill-description-precision]]：稽核的第一站是 skill 描述。
- [[progressive-disclosure]]：稽核的第二站是把必讀清單改成路由表。
- [[define-completion-upfront]]：新模型偏保守時，補「完成定義」比加更多規則有效。

- [[agent-harness-hygiene]]：harness 瘦身是常態維護；本概念是「換模型」這個特定時點觸發的整批重審，多了邊界用語重校這一項。

## 尚未解決的疑問
- 「更對齊的模型會把強語氣太當真」是 OpenAI 對 GPT-6 Astra 的描述，是否同樣適用於 Claude 各版本，需自己實測。

## 來源（自動維護）
- [[2026-09-16-openai-gpt-6-astra-skills-prompts]]
