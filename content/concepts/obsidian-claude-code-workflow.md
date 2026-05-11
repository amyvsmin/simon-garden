---
name: Obsidian + Claude Code 工作流
aliases: [Obsidian + AI 工作流, Obsidian Claude 工作流, vault + AI]
category: 生產力
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 354f85da-554f-8100-8cff-fe5533b688ca
---

# 定義

把 Obsidian vault 當第二大腦資料層、Claude Code 當讀寫與處理層的個人知識管理組合，本地化、私有化、可隨時間演進。資料以 Markdown 檔案形式留在本機，AI 透過 CLAUDE.md 與資料夾 instructions.md 雙層導航讀寫。

# 關鍵面向

- **vault 結構設計**：context/ 放個人資訊與表達風格、每個資料夾放 instructions.md 給 AI 局部地圖、根目錄 CLAUDE.md 當總入口
- **AI 控制 vault 的橋接**：除了走檔案系統 read/write，也可裝 [[obsidian-cli-plugin]] 讓 Claude Code 直接喚 Obsidian 的搜尋／命令面板，免自架 MCP server
- **三檔骨架（任務驅動派）**：CLAUDE.md（規則）+ SessionHandoff.md（跨對話進度交接）+ Index.md（決策日誌），解決對話框多／compact 失憶痛點，配合 [[kaigong-shougong-loop]] 開工收工指令運作
- **輸入方式整合**：Apple Books highlights 插件、Web Clipper、iPhone action button + Shortcuts 一鍵語音記錄到 daily notes、Canvas 思維導圖、Terminal 插件
- **MCP 串接**：透過 MCP 連 Notion、Gmail、Calendar 等外部工具，讓 vault 不只是封閉檔案系統
- **Skills 跟著版本走**：把 skills 放在 vault 內，能跟著筆記一起 git 化
- **本地化優勢**：隱私、可控、不依賴雲端服務、AI 越用越貼合自己

# 應用場景

- Simon 工作場景：SimonVault（Google Cybersecurity 課程筆記、CCNA、SSCP 等證照系列）+ Claude Code course-notes skill 自動寫筆記；CLAUDE.md 已建在 ~/projects/Simon-Agent 與全域 ~/.claude/CLAUDE.md 兩層
- 課程／業配開發者場景（Josie）：Obsidian + Claudian plugin + 50+ 過去專案筆記當 reference + 封裝成 `project planner` skill；流程「cluster → template reference → AskUser 訪談」拒絕 AI 腦補無關任務（如對方公司內部公文流程）
- 一般場景：研究者、創作者、技術職、自學者，特別適合需要長期累積且重隱私的人

# 相關概念

- [[second-brain]]：本工作流是其中一種具體實作
- [[claude-md-dual-nav]]：本工作流的 AI 入口設計
- [[progressive-disclosure]]：本工作流的 token 控制心法
- [[claude-code]]：本工作流的 AI 處理層
- [[mcp]]：本工作流串接外部服務的協議層
- [[obsidian-cli-plugin]]：另一條讓 Claude Code 直接控制 Obsidian 的橋接路徑
- [[kaigong-shougong-loop]]：本工作流之上的每日 AI 開工收工 loop

# 尚未解決的疑問

- 跨裝置同步策略（iCloud Drive vs Git vs Obsidian Sync）的取捨
- 大量歷史筆記匯入時的初始 indexing 成本

# 來源（自動維護）

- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
- [[2026-05-05-obsidian-cli-claude-code-daily-loop]]
- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
