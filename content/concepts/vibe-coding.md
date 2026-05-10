---
name: Vibe Coding
aliases: [Vibe Coding, 自然語言開發, AI Coding]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-81d3-9750-c77eedc36b64
---

# 定義

Andrej Karpathy 2025 提出、以自然語言跟 AI 描述需求並讓 AI 全程實作代碼、人類只在「跳出來改 bug」時介入的軟體開發風格。關鍵是不看代碼只看需求與結果，代言人、個人創作者快速造 prototype 的主流路徑。

# 關鍵面向

- **適用門檻**：個人專案、prototype、Chrome extension、內部 tool、hackathon，長期生產環境代碼仍需人審核
- **跟 Plan Mode 對比**：Vibe Coding 是「不看代碼」，Plan Mode 是「看計畫但不一定看代碼」；兩者完全不同思考但都是 AI 軟體開發的重要路徑
- **核心**：說「這裡不對」「加個按鈕」「變黑色」，AI 不需要起 codebase 動、變量名是什麼，只看 UI 是不是生出來、bug 是不是修好
- **風險**：代碼品質、安全漏洞、難以 maintain；低門檻、但長期需要清理
- **訓練需求描述能力**：說不清楚的人本來也不能拿到可用結果，需求描述能力變成新重要能力

# 應用場景

- Simon 工作場景：公司 IT 個人生產力小工具、伺服器監控腳本、個人項目 Chrome extension、n8n flow 審計腳本；公司產品級代碼仍走讀代碼 + Plan Mode
- 一般場景：個人創作者 indie hacker、設計師進代碼、業務職自動化小工具、學生實驗

# 相關概念

- [[claude-code]]：Vibe Coding 的主要實作載具之一
- [[plan-mode]]：跟 Vibe Coding 不同面向的 AI 開發風格

# 尚未解決的疑問

- Vibe Coding 變成生產代碼的跳板條件 / 規範看什麼
- AI Coding 能力進步後，Vibe Coding 適用門檻如何上提

# 來源（自動維護）

- [[2026-05-02-haiuncle-claude-code-intro]]
