---
title: "Agent 架構對比（Hermes vs OpenClaw）"
slug: agent-architecture-comparison
aliases: [agent framework comparison, Hermes vs OpenClaw, 個人 AI 架構選型, Hermes Agent, Nous Research, self-evolving agent, 自我進化 agent, self-evolving-ai-agent]
category: AI
confidence: 已驗證
created: 2026-05-05
---

## 定義

以 Hermes Agent（讓使用者變聰明、低變動）vs OpenClaw（起始高速但 138 個 CVE 爆雷）為代表，跟隱私、安全、長期可靠度是選 agent 架構的關鍵考量。在 GitHub Stars 上漲不代表品質，使用者該看雷表、安全公告、社群信譽、長期路徑。

<p align="center"><img src="assets/covers/agent-architecture-comparison-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **OpenClaw 警訊**：33 天漲 GitHub 頂、超越 React，然後 138 個 CVE 爆露（平均一天 2.2 個）、使用者出走——「明星成長」跟「品質」不一定同步
- **Hermes 定位**：低調、開源、去中心化、訓練學習閉環，以 69.9k Stars / 9k Forks 累積量變達考驗
- **遷移能力**：一鍵遷移工具——可從 OpenClaw 遷動進來，定位在 OpenClaw 事件之後的「難民適應庫」
- **選 agent 架構的考量雷表**：互動安全公告 / 隱私狀況 / 長期路徑 / 社群信譽 / 社群長期能力都要看。Stars / 下載量 ≠ 品質背書
- **主流個人 agent 選項**：Claude Code（Anthropic 官方、需訂閱）、Hermes Agent（開源、去中心化）、OpenClaw（高 GitHub 漲但需驗證）、Cline / Continue / Aider 等其他選項

## Hermes Agent 自我進化架構

以 Hermes Agent（Nous Research）為代表、內建學習閉環跟跨會話記憶、讓 agent「越用越聰明」的個人 AI 助手架構。不是讓模型本身重訓，而是讓 agent 使用的外在記憶與技能隨時間加厚。
- **三檔記憶**（2026-06-15 PAPAYA 教學補充）：拆成三個純文字檔——user.md 記使用者是誰與偏好、memory.md 記 agent 自己累積的工作心得、soul.md 定義 agent 的人設語氣與角色。新聞概覽只提到 MEMORY.md + USER.md 兩檔、漏了 soul.md 這層人設檔。對話量到一定程度會自動壓縮，類似對 [[context-rot]] 的處理
- **技能系統**：Markdown 格式、可被 agent 自行生成與修正，跟 Claude Code Skill 同邏輯；內建 70 幾個 skill、有官方目錄站可裝第三方、**安裝前自動做來源與安全性檢查**（呼應 [[ai-skill-security]]）
- **部署與介面**（教學補充）：本機（幾乎免費、躲家用網路後）或 Hostinger 雲端 VPS（24 小時不斷線）二選一；模型可走 ChatGPT 訂閱、OpenRouter 按量計費或 DeepSeek；主操作介面是 Telegram bot（user ID 白名單擋外人）
- **自主能力**（教學補充）：子代理平行查資料彙整成 HTML 儀表板、Go 目標模式自主拆任務迴圈推進（同 [[claude-code-goal-command]] 的 /goal）、排程、語音、串 Gmail/日曆/Notion、每日備份到 Google Drive
- **架構演進**：從「每次從零開始」變成「隨時間變聰明」，跟 Claude Code MEMORY.md 路線一致
- **生態位置**：Nous Research 開源優先、去中心化 AI 實驗室；Hermes 模型在 HuggingFace 累計 3,300 萬次下載

## 應用場景

- Simon 工作場景：Claude Code 訂閱變貴 / 隱私關切時的備選清單、公司 IT 選 agent 工具時的警訊雷表、考證 Map 不同 agent 架構位置
- 一般場景：個人、企業、開發者選 agent 架構時需考量的長期路徑

## 相關概念

- [[claude-code]]：同類的個人 AI 助手平台，架構高度相似（CLAUDE.md、MEMORY.md、Skill、外接工具）

## 尚未解決的疑問

- 個人使用者該不該並使用多個 agent 架構以避免雷表（學習成本 vs 備援價值）
- 如何定期重評 agent 架構（多久？看什麼？）
- 付費模式 / 訂閱拋離體 vs Anthropic Claude Pro 對比
- 「越用越聰明」是否能變成長期可量測結果（使用者體感 vs benchmark）

## 來源（自動維護）

- [[2026-05-02-hermes-agent-vs-openclaw]]
- [[2026-06-15-papaya-hermes-agent-tutorial]]
