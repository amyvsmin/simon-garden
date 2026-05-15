---
title: "Google Cloud Agentic SecOps：AI 驅動的全方位資安轉型（CYBERSEC 2026 William Tam）"
date: 2026-05-05
type: 來源分析
url: "https://web.plaud.ai/s/pub_1d056f42-6980-4ea9-9a08-3d9952ad8e14::y4UZ9SHsD02ifsn52EZ4dCsskfuyxW3POxNx-e3rygIUH2NMD4vLOj1nSMn1a2lmKjBmecnFN8DSIpMC"
inbox-id: "357f85da554f81a59714d9a82da7548f"
concepts: [agentic-secops, cve-weaponization-time, secure-ai-framework, wiz-platform, ai-vuln-discovery, supply-chain-risk]
created: 2026-05-05
---

## 摘要

Google Cloud 全球資安解決方案架構師陳偉霆（William Tam）在 CYBERSEC 2026 演講，臨時把原訂題目改成過去一個月 AI 找漏洞能力大爆發後的緊急應對。重點訊息：CVE 從公開到出現實際武器化攻擊的平均時間從 24 小時壓縮到 8 秒，企業必須以「短期縮小攻擊面、中期 Agentic SecOps 自動化、長期自我修復系統」三階段框架因應。Google 自家工具鏈包括 Mythos（Anthropic × Vertex AI 私測，已找出數千個高嚴重性漏洞）、Big Sleep（DeepMind AI bug hunter，已揭露 SQLite CVE-2025-6965）、CodeMender（自動修補，6 個月對上游提交 72 項修復）。框架層提出 SAIF（Secure AI Framework）、Assured Open Source Software（AOSS）、Security Command Center 的 AI Protection、Cloud Model Armor、跟 Mandiant 顧問服務。Demo 重頭戲是收購自 Wiz 的多代理（Green/Blue/Rule/Red Agent）跨雲風險平台，從發現 → 調查 → 修補建議 → 指派 repository owner 全閉環，已逼近 self-healing 雛形。

## 核心概念

- [[agentic-secops]]：AI 驅動的 SOC 閉環（偵測→分揀→調查→回應→偵測工程）取代人工密集流程，Gemini 在 Google Security Operations 讓查詢撰寫提速 76%
- [[cve-weaponization-time]]：漏洞武器化時間從 24 小時壓縮到平均 8 秒，重塑漏洞管理優先序與修補節奏
- [[secure-ai-framework]]：Google 推出的 AI 全生命週期治理框架（資料→訓練→模型→佈署→應用），含 prompt 安全、jailbreak 對策、proprioception
- [[wiz-platform]]：Google 收購的多代理跨雲安全平台，Green/Blue/Rule/Red Agent 分工、Security Graph 解析 breach radius、與 DevOps/CI/CD/IDE 深度整合
- [[ai-vuln-discovery]]：本演講補上 Google 端的 Mythos／Big Sleep／CodeMender 三個具體工具
- [[supply-chain-risk]]：演講中強調 AOSS（經 Google 驗證的 OSS 供給）作為供應鏈完整性的關鍵控制

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
Simon 是公司內部 IT 工程師、負責資安／伺服器／專案導入，這場演講有三個直接可帶回工作的訊息：

1. **CVE 武器化時間 8 秒**：Veeam 備份調整、SQL MFA、ISO 27001 推進的時程不能再用「漏洞先收著、季底再修」的舊節奏。建議盤點高風險系統（特別是對外暴露的 Tomcat／IIS／Web 服務）的修補 SLA，把高風險 CVE 的補丁從「月」壓到「天」。
2. **Agentic SecOps 入門路徑**：公司若有採用 Google Workspace／GCP，可評估 Gemini 在 SecOps 的 NL 查詢能力做 PoC；不一定整套上，先試「告警分流自動摘要」這一塊。
3. **AI 部署順序**：演講提醒「應用先行、安全滯後」是常見地雷。Simon 公司若計畫導 AI 工具（不論 Microsoft Copilot 還是自架），應該把資安納入設計階段，而不是上線後補。

不直接相關但值得記的：Wiz 平台 50% 客戶不是資安部門，反映「跨團隊 DevSecOps 採用度」是平台選型的關鍵指標。

## 原文要點

- 演講開場臨時改題：因為過去一個月 AI 找漏洞能力大爆發（Anthropic Mythos／Google Big Sleep／CodeMender 接連公布），原本準備兩個月前內容已過期
- 三階段框架：
  - 短期：縮小攻擊面、micro-segmentation 隔離無法快修系統、把漏洞優先序加上即時情資
  - 中期：Agentic SecOps 自動化日誌分析／告警分流／調查／修補建議
  - 長期：self-healing AI 系統 +「AI or bye」全生命週期治理
- 澄清迷思：AI 找漏洞需要原始碼，封閉軟體目前不易突破；FreeBSD 之所以容易被找出 25 年老漏洞是因為原始碼公開
- AI 安全事故案例：某美國租車公司用昂貴 AI 模型，AI 自己誤動作把 storage 全清掉，company 花 30 小時 restore backup
- Mandiant Threat Defense 提供「漏洞管理流程設計／審計／代營運」服務，臺灣已有多家大企業在用
- Wiz Demo 核心：跨雲 + AI 資產（模型／應用／dataset／agent／MCP server／pipeline／guardrails）統一可視化；多 agent 協作、修補建議直接 push 回 GitHub repo

## 原始連結

- https://web.plaud.ai/s/pub_1d056f42-6980-4ea9-9a08-3d9952ad8e14::y4UZ9SHsD02ifsn52EZ4dCsskfuyxW3POxNx-e3rygIUH2NMD4vLOj1nSMn1a2lmKjBmecnFN8DSIpMC
