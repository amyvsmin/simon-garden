---
title: "設計交棒"
slug: design-handoff
aliases: [Design Handoff, Design-to-Deploy, Netlify Connector]
category: AI
confidence: 已驗證
created: 2026-05-05
---

## 定義

Claude Design 完成前端視覺後，產生指令把專案資產轉移到 Claude Code，由 Claude Code 接手後端開發、Netlify 連接器授權、自動部署上線的工作流分工。

## 關鍵面向

- 分工明確：設計工具做視覺、開發工具做部署
- AI 之間自動交接（Claude Design → Claude Code）
- 跨服務 connector（Netlify、Vercel、Cloudflare）讓部署步驟不離 AI

## 應用場景

- Simon 工作場景：跟 skill 之間自動串接（如 course-notes 寫完自動接 Notion 建卡）、hook 鏈式觸發的交接思路同源，Dev/Ops 分工、設計與工程介面整合都是同個範式
- 一般場景：個人創作者、產品團隊、敏捷開發

## 相關概念

- [[design-system]]：設計交棒時設計系統是主要交付物
- [[hi-fi-prototype]]：擬真原型完成後直接交棒給開發

## 尚未解決的疑問

- 多服務串接時的 token / 成本怎麼控制

## 來源（自動維護）

- [[2026-04-29-claude-design-anthropic-tour]]
