---
title: "Wiz 平台"
slug: wiz-platform
aliases: [Wiz, Wiz 雲端安全平台, Google Wiz, 微視]
category: 資安
confidence: 待驗證
created: 2026-05-05
query-count: 0
---

## 定義

Google 收購的多代理協作跨雲端安全平台。把雲安全姿態管理（CSPM）、AI 資產可視化、漏洞修補建議、責任指派整合到單一介面，從發現問題到修補在同一平台閉環完成。

## 關鍵面向

- **多代理分工**：
  - Green Agent：自動建議修補方案
  - Blue Agent：告警調查與真假判定（true positive vs false positive）
  - Rule Agent：規則生成與管理
  - Red Agent：紅隊模擬／攻擊路徑驗證
- **Security Graph**：解析跨資源關聯，視覺化 breach radius（一個漏洞可能波及哪些 workload／storage／GKE／其他雲）
- **AI 資產可視化**：跨雲呈現模型／應用／dataset／agent／MCP server／pipelines／guardrails 等 AI 元件
- **DevSecOps 採用率高**：Google 公布超過 50% Wiz 客戶不是資安部門，反映平台跨開發／DevOps／資安團隊的滲透力
- **與 IDE／CI/CD 整合**：發現漏洞後能定位 repo、找到 owner、把修補建議直接 push 回 GitHub，逼近 self-healing 雛形

## 應用場景

- Simon 工作場景：公司若有 GCP 或多雲環境（公司目前以 Windows AD／on-prem 為主、雲用量待釐清），Wiz 是評估候選；ISO 27001 推進過程中對「資產盤點 + breach radius 視覺化」有立即助益
- 一般場景：多雲企業、SaaS 公司、有完整 DevSecOps 文化的團隊

## 相關概念

- [[agentic-secops]]：Wiz 是 Agentic SecOps 在 cloud security 的落地產品
- [[secure-ai-framework]]：Wiz 提供 SAIF 落地所需的「發現—保護—管理」三段流程
- [[ai-vuln-discovery]]：Wiz 多代理流程中 Green Agent 的修補建議有 AI 漏洞挖掘成份

## 尚未解決的疑問

- 跟 Microsoft Defender for Cloud、Prisma Cloud（Palo Alto）的功能差異與選型策略
- 中小企業可負擔的訂閱層級與最小可用子集

## 來源（自動維護）

- [[2026-05-05-google-cloud-agentic-secops-cybersec]]
