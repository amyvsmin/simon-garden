---
name: 指令檔
aliases: [CLAUDE.md, AI Instruction File, AGENTS.md, GEMINI.md]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81b5-a0f8-f6d5fbf4a665
---

## 定義

把專案規格、命名規則、AI 應做事項寫在 claude.md，每次開 Claude Code 自動讀，省掉每次重新解釋的成本，是 AI 與專案之間的常駐合約。

## 關鍵面向

- 每次 session 自動載入，不必重述
- 各家 AI 工具有自己的命名（Claude Code 用 CLAUDE.md、Cursor 用 .cursorrules、Gemini 用 GEMINI.md、開源 agent 多用 AGENTS.md）
- 通常不版控敏感資料；分層設計（全域 / 專案）能控制可見範圍
- **跟 [[skill]] 的分工（雷蒙範式）**：CLAUDE.md = 「入職手冊」放通用偏好（語言、風格、禁區、資料夾結構）、Skill = 「SOP」放特定任務完整流程（步驟、格式、範例、例外處理）
- **更新頻率**：CLAUDE.md 偶爾改、Skill 每次做錯就改；長流程強塞 CLAUDE.md 會讓它又長又亂
- **載入機制差異**：CLAUDE.md 每次對話都自動載入（佔常駐 token）、Skill 相關時才載入（progressive disclosure）

## 應用場景

- Simon 工作場景：已用兩層 CLAUDE.md（全域 ~/.claude/CLAUDE.md + 專案 ~/projects/Simon-Agent/CLAUDE.md）；可比對 Karpathy 的單層做法看自己分層是否過度
- 一般場景：任何 AI 反覆讀寫的專案、團隊內部 AI 規範

## 相關概念

- [[claude-md-dual-nav]]：指令檔的延伸，用兩層導航把全域 + 局部規則分開
- [[claude-code]]：指令檔的主要消費者

## 尚未解決的疑問

- 多 AI 工具並用時要不要建多份指令檔（CLAUDE.md / AGENTS.md / GEMINI.md）

## 來源（自動維護）

- [[2026-04-29-karpathy-obsidian-claude-wiki]]
- [[2026-05-12-raymond-claude-code-skill]]
