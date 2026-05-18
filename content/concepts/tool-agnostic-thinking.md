---
title: "工具中立思考（先思考再選工具）"
slug: tool-agnostic-thinking
aliases: [工具中立思考, 先思考再選工具, tool-agnostic, 不綁定 AI 工具, AI 工具中立, think-before-tool]
category: 生產力
confidence: 待驗證
created: 2026-05-18
query-count: 0
---

## 定義

不綁定特定 AI 工具（ChatGPT／Gemini／Claude）、先靠思考習慣提升思考力、再依問題本質選最佳工具的個人 AI 使用策略；對應 AI 工具迭代快、綁定特定產品會被技術演進淘汰的問題。

## 關鍵面向

- **問題優先、工具其次**：先把「問對問題」做到位、產出 PRD 跟思考框架、工具是 last mile
- **AI 工具迭代論**：ChatGPT／Gemini／Claude 排名 6 個月就洗一次；綁定特定工具的工作流會被洗掉
- **思考力是真正資產**：密涅瓦思考習慣（habits of mind）是可遷移技能、不會因工具換而失效
- **跟 [[cli-api-mcp-priority]] 的關係**：cli-api-mcp 是「工具介面選哪一層」的優先序、tool-agnostic 是「不選特定產品」的更上層原則
- **反模式**：把工作流寫死在某個工具的 prompt 風格、特殊指令、UI 行為上

## 應用場景

- Simon 工作場景：skill 設計時不寫死 Claude-specific 細節、寫成可移植 prompt + 流程；個人知識庫不綁 ChatGPT plugin、走 MD 通用格式
- 一般場景：個人 AI 工作流設計、避免 vendor lock-in

## 相關概念

- [[problem-prd]]：tool-agnostic 思考下產出的成果就是 PRD、可以餵任何 AI
- [[cli-api-mcp-priority]]：工具介面層的選擇優先序、跟 tool-agnostic 互補
- [[skill]]：skill 本身雖然綁 Claude、但內容（流程、reference）可以工具中立寫法

## 尚未解決的疑問

- 工具中立 vs 深度利用單一工具特性的取捨點
- Claude Skill／Subagent／Hook 等 Claude 特有機制怎麼劃線

## 來源（自動維護）

- [[2026-05-18-li-jiada-skill-pack-install-demo]]
