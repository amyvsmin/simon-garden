---
title: "OWASP LLM Top 10 與 GenAI Security Project：把生成式 AI 風險變成共同語言"
date: 2026-06-02
type: 來源分析
url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/"
inbox-id: ""
concepts: [owasp-top-10, secure-ai-framework]
projects: []
impact: medium
tldr: "OWASP LLM Top 10 已從單一風險清單長成 OWASP GenAI Security Project，目標是把 LLM、agentic AI、AI-driven applications 的安全風險整理成可討論、可治理、可落地的共同語言。這份清單對 Simon 的價值不在背十個名詞，而是把公司未來導入 Copilot、Gemini、內部 AI 工具時的風險檢核，提前接到既有 OWASP / ISO / 資安證照脈絡。"
stage: evergreen
icon: "🛡️"
created: 2026-06-02
---

## 為什麼讀

這篇是 C8 Windows Codex 驗收樣本：用 Firecrawl 抓公開網頁，走 Windows `.venv-win` 的 `to-md.py --source web` 清洗，再落到 vault。選 OWASP LLM Top 10 是因為它同時接到 Simon 的資安證照主線、AI 應用規劃師側翼，以及公司未來導入生成式 AI 工具時會遇到的治理問題。

## 摘要

OWASP LLM Top 10 原本是一份列出 LLM 應用十大風險的清單，現在已經擴展成 OWASP GenAI Security Project：一個針對生成式 AI、LLM、agentic AI systems、AI-driven applications 的開源安全專案。它的價值不是替企業解完所有 AI 安全問題，而是給安全人員、開發者、政策制定者一套共同語言。清單裡的 Prompt Injection、Insecure Output Handling、Training Data Poisoning、Model Denial of Service、Supply Chain Vulnerabilities、Sensitive Information Disclosure、Insecure Plugin Design、Excessive Agency、Overreliance、Model Theft，剛好把 AI 應用從輸入、輸出、資料、模型、供應鏈、權限、自主性到人類過度信任的風險串起來。

## 核心概念

- [[owasp-top-10]]：這篇是 OWASP Top 10 思維從傳統 Web application security 延伸到 LLM application security。重點不是「Top 10 排名本身」，而是把一團很新的 AI 風險整理成開發、資安、管理層都能對齊的 checklist。
- [[secure-ai-framework]]：OWASP LLM Top 10 偏「威脅類型清單」，SAIF 偏「AI 全生命週期治理」。兩者互補：OWASP 幫你問「會被怎麼打」，SAIF 幫你問「從資料、模型、部署到應用要怎麼管」。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- 可作為未來 `knowledge-wiki` 收 AI 安全文章時的分類骨架：若文章談 prompt injection、plugin/tool 權限、agent 過度自主、模型資料外洩，可優先連到這篇和 `secure-ai-framework`，避免每篇都重新發明分類。
- 對 Codex/Claude 雙棲本身也有提醒：我們現在逐步接 MCP、Notion、Firecrawl、NotebookLM，等於 agent 被授權碰外部系統。`Excessive Agency` 與 `Insecure Plugin Design` 可以轉成未來 MCP 權限檢核：哪些工具只讀、哪些工具會寫入、哪些工具需要 confirm。

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- 對照 Google Cybersecurity Certificate：這篇可補「AI 應用風險」視角，特別是資料外洩、供應鏈、過度信任輸出，和課程裡的 incident response / asset security 可以接起來。
- 對照 iPAS / SSCP / CISSP：目前不必另外開讀書任務，但未來讀到 AI governance、ISO 42001、NIST AI RMF 時，可以把 OWASP LLM Top 10 當「威脅清單」搭配治理框架一起看。
- 公司如果要導入 Copilot、Gemini Workspace、內部 AI bot，這份可以變成最小版檢核表：輸入能不能被 prompt injection 操控、輸出會不會直接進下游系統、plugin/tool 權限是否過大、是否有人過度相信 AI 結論。

## 原文要點

- OWASP LLM Top 10 已經擴展為 OWASP GenAI Security Project，範圍從 LLM 應用延伸到生成式 AI、agentic AI systems、AI-driven applications。
- 專案使命是讓組織、安全專業人員、AI 實作者、政策制定者取得可行的 guidance 與工具，用於 secure development、deployment、governance。
- 最新 LLM Top 10 仍是專案核心之一，用來列出 LLM applications 最重要的安全弱點。
- 專案從 2023 年少數安全專家回應急迫缺口，成長為跨 18 國、600 多位 contributing experts、近 8000 active community members 的社群。
- v1.1 十大項目包含 Prompt Injection、Insecure Output Handling、Training Data Poisoning、Model Denial of Service、Supply Chain Vulnerabilities、Sensitive Information Disclosure、Insecure Plugin Design、Excessive Agency、Overreliance、Model Theft。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-06-02-owasp-llm-top-10-genai-security)
## 原始連結

- https://owasp.org/www-project-top-10-for-large-language-model-applications/
