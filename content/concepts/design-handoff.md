---
name: 設計交棒
aliases: [Design Handoff, Design-to-Deploy, Netlify Connector]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81be-a26c-f4a94681901e
---

## 定義

Claude Design 完成前端視覺後，產生指令把專案資產轉移到 Claude Code，由 Claude Code 接手後端開發、Netlify 連接器授權、自動部署上線的工作流分工。

## 關鍵面向

- 分工明確：設計工具做視覺、開發工具做部署
- AI 之間自動交接（Claude Design → Claude Code）
- 跨服務 connector（Netlify、Vercel、Cloudflare）讓部署步驟不離 AI

## 應用場景

- Simon 工作場景：跟 n8n 自動化串接思路同源，Dev/Ops 分工、設計與工程介面整合都是同個範式
- 一般場景：個人創作者、產品團隊、敏捷開發

## 相關概念

- [[design-system]]：設計交棒時設計系統是主要交付物
- [[hi-fi-prototype]]：擬真原型完成後直接交棒給開發

## 尚未解決的疑問

- 多服務串接時的 token / 成本怎麼控制

## 來源（自動維護）

- [[2026-04-29-claude-design-anthropic-tour]]
