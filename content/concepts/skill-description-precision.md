---
title: "skill 描述精準原則"
slug: skill-description-precision
aliases: [skill 描述精準原則, skill description precision, 觸發描述瘦身]
category: AI 與 Agent
confidence: 已驗證
created: 2026-09-16
---

## 定義
skill 的名稱與描述會常駐在模型脈絡裡，當「挑哪支 skill」的路標；描述要盡量短、只講清楚「什麼情況該用」。太長、太多或互相矛盾的描述會被截短，也會把模型引去載入幫不上忙的指令。

## 關鍵面向
- 描述是路由資訊、不是說明書：模型靠 description 決定要不要載入整支 skill，內容細節放本體，描述只留「做什麼＋何時用」。
- 太多會被截短：skill 數量一多，Codex 會自動縮短每支的描述好塞進脈絡，模型看到的每支資訊都變少、更難挑對。
- 邊界寫窄不寫寬：OpenAI 的壞例子「用於資料庫、查詢、模型、持久層」會讓模型碰到任何資料庫相關就載入；好例子「新增或修改 migration、或審查其上線時」只在真正需要時觸發。
- 描述之間不要互相搶：多支 skill 的觸發條件重疊、或過度強調「一定要用」，會讓模型同時載入好幾支，脈絡被不相干指令占滿。
- OpenAI 已把這些寫進更新後的 `$skill-creator` 指引。

## 應用場景
- Simon 工作場景：維護數十支 Claude Code／Codex skill 時，逐一檢查 description 能否濃縮成一句「做什麼」＋一句「何時用」，把長串觸發詞、進入條件與歷史備註移到 SKILL.md 本體。
- 一般場景：任何「多個工具靠簡短說明讓 AI 自選」的設計（MCP 工具描述、子代理描述、hook 說明）都適用同一原則：說明越短越準，選擇越穩。

## 相關概念
- [[progressive-disclosure]]：描述管「要不要載入」，漸進揭露管「載入後讀多少」，兩者合起來控制 skill 的脈絡成本。
- [[model-upgrade-instruction-audit]]：換模型時重審描述是稽核的第一站。

- [[minimal-skill-writing]]：那三條原則管 skill 本體怎麼寫短；本概念只管常駐脈絡的描述那一行怎麼寫準。

## 尚未解決的疑問
- Claude Code 端是否也會在 skill 過多時自動截短描述？原文只講 Codex 的行為。

## 來源（自動維護）
- [[2026-09-16-openai-gpt-6-astra-skills-prompts]]
