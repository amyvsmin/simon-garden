---
name: 自我進化 AI agent（Hermes Agent / Nous Research）
aliases: [Hermes Agent, Nous Research, self-evolving agent, 自我進化 agent]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-81a4-87cd-fbb3411416a5
---

## 定義

以 Hermes Agent 為代表、內建學習閉環跟跨會話記憶、讓 agent「越用越聰明」的個人 AI 助手架構，Nous Research 開源、去中心化、以 Markdown 技能系統作為演進層。不是讓模型本身重訓，而是讓 agent 使用的外在記憶與技能隨時間加厚。

## 關鍵面向

- **長期記憶**：MEMORY.md 紀錄任務脈絡、USER.md 紀錄使用者偏好，跨 session 不遺忘
- **技能系統**：Markdown 格式、可被 agent 自行生成與修正，跟 Claude Code Skill 同邏輯
- **內建工具**：40+ 內建工具（網頁、瀏覽器、視覺、文件系統）、支援 6 種終端環境（local、Docker、SSH、serverless）
- **架構演進**：從「每次從零開始」變成「隨時間變聰明」，跟 Claude Code MEMORY.md 路線一致
- **生態位置**：Nous Research 是開源優先、去中心化的 AI 實驗室；Hermes 模型在 HuggingFace 累計 3,300 萬次下載

## 應用場景

- Simon 工作場景：跟現行 Claude Code + MEMORY.md + skill 架構設計高度重疊，可考慮當「跟進 Claude Code 以外的另一條路線」參考；特別是如果 Anthropic 的付費路線變貴、訓練資料隱私變高關切，可作為個人自試的備選
- 一般場景：indie hacker、連續創業者、不願意被雲端鎖定的個人、知識實驗者

## 相關概念

- [[claude-code]]：同類的個人 AI 助手平台，架構高度相似（CLAUDE.md、MEMORY.md、Skill、外接工具）
- [[agent-architecture-comparison]]：本概念在 Hermes 對比路線上的出現

## 尚未解決的疑問

- 付費模式 / 訂閱拋離體 vs Anthropic Claude Pro 對比
- 「越用越聰明」是否能變成長期可量測結果（使用者體感 vs benchmark）

## 來源（自動維護）

- [[2026-05-02-hermes-agent-vs-openclaw]]
