---
name: Skill
aliases: [Claude Skill, 技能包]
category: AI
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 349f85da-554f-8184-b4c9-e39540364c8c
---

# 定義

Claude 的技能打包機制，把重複用到的 prompt、範例、流程固化為可重用的指令包，核心精神是「試一次、存起來、用很多次」。

# 關鍵面向

- **組成**：description（觸發條件說明）、主體 prompt（含指示與範例）、附屬腳本或資源檔
- **觸發**：使用者意圖匹配 description 時自動載入到對話中
- **來源**：Anthropic 官方（superpowers、example-skills）+ 社群外掛 + 自製
- **與 Plugin 的關係**：Plugin 是一組 Skills 的打包，安裝 Plugin 會帶入多個 Skills
- **Skill Creator**：用自然語言讓 Claude 自動產出新 Skill

# 應用場景

- Simon 工作場景：已安裝 superpowers 系列（TDD、plan、debug 等）、example-skills（pptx、pdf、xlsx、brand-guidelines 等）
- 一般場景：重複性工作流（會議紀錄、報表、簡報生成）、品牌或風格規範固化、專業領域知識注入

# 相關概念

- [[claude-code]]：Skill 運行的宿主環境
- [[subagents]]：Subagent 是持久化分身，Skill 是可召喚的流程；兩者在「重用」這個問題上互補

# 尚未解決的疑問

- Skill 版本管理與團隊共用機制
- Skill 與 Subagent 的邊界：什麼時候該寫 Skill、什麼時候該做 Subagent

# 來源（自動維護）

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-05-02-haiuncle-claude-code-intro]]
