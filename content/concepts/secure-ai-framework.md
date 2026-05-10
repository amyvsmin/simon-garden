---
title: "Secure AI Framework（SAIF）"
slug: secure-ai-framework
aliases: [SAIF, Google SAIF, AI 安全框架, AI 全生命週期治理]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

# Secure AI Framework（SAIF）

## 定義

Google 推出的 AI 全生命週期治理框架，涵蓋從資料、訓練、模型、佈署到應用層的安全與治理控制點，目標是讓企業「大膽且負責任」地導入 AI。

## 關鍵面向

- **層級劃分**：資料 → 訓練 → 模型 → 佈署 → 應用（提示／接地／代理／輸出過濾）
- **核心議題**：prompt 安全、jailbreak 對策、proprioception（模型的自我感知）、地理／法遵控制
- **跟 OWASP LLM Top 10 的關係**：SAIF 是 Google 自家版本、跟 OWASP LLM Security 列表互補；前者偏全生命週期治理、後者偏特定威脅類型
- **與工具鏈搭配**：SAIF 是治理框架，配合 Cloud Model Armor（執行期保護）、SCC AI Protection（資產可視化）落地
- **AI 部署順序原則**：「應用先行、安全滯後」是常見地雷；SAIF 強調設計階段就內建安全與治理

## 應用場景

- Simon 工作場景：公司若計畫導入 AI（不論 Microsoft Copilot、Gemini Workspace、自架 LLM），可用 SAIF 做事前評估清單；ISO 27001 的 AI 風險章節也可參考此框架
- 一般場景：任何企業導 AI、特別是處理敏感資料（醫療／金融／法律）的場域

## 相關概念

- [[agentic-secops]]：Agentic SecOps 自身就是 AI 系統，治理需依 SAIF
- [[ai-vuln-discovery]]：AI 找漏洞流程的責任揭露／PoC 處理也屬 SAIF 治理範疇
- [[supply-chain-risk]]：AI 模型的訓練資料與基礎模型來源是新的供應鏈面向

## 尚未解決的疑問

- SAIF 跟 NIST AI Risk Management Framework、ISO/IEC 42001 的對應關係
- 中小企業實作 SAIF 的最小可行子集

## 來源（自動維護）

- [[2026-05-05-google-cloud-agentic-secops-cybersec]]
