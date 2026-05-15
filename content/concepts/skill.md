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

## 定義

Claude 的技能打包機制，把重複用到的 prompt、範例、流程固化為可重用的指令包，核心精神是「試一次、存起來、用很多次」。

## 關鍵面向

- **組成**：description（觸發條件說明）、主體 prompt（含指示與範例）、附屬腳本或資源檔
- **觸發**：使用者意圖匹配 description 時自動載入到對話中
- **來源**：Anthropic 官方（superpowers、example-skills）+ 社群外掛 + 自製
- **與 Plugin 的關係**：Plugin 是一組 Skills 的打包，安裝 Plugin 會帶入多個 Skills
- **Skill Creator**：用自然語言讓 Claude 自動產出新 Skill
- **prompt-to-skill 封裝模式（Josie）**：對話得到滿意結果後直接請 Claude「把這段流程寫成 skill」、不是寫成 prompt；下次同類任務觸發 skill 自動跑同流程；自滾動 pipeline 的閉環
- **AskUser 內建工具**：skill description 只要說「請與我確認」、Claude 自動觸發 AskUser、不需要在 skill 裡明寫 ask tool；參見 [[interview-driven-prompting]]
- **跟 [[instructions-file]] 的分工（雷蒙範式）**：CLAUDE.md 是「入職手冊」放通用偏好、Skill 是「SOP」放特定任務完整流程；CLAUDE.md 每次對話自動載入、Skill 按需載入；不該把整本 SOP 塞進簡介
- **「連續三次重複交代 = 寫 Skill」判準**：在不同對話三次跟 AI 講同一件事就應該寫成 Skill
- **進化路徑**：每次都要講 → SKILL.md → 加 references/ 子資料夾 → 加 scripts/ → 加版本號與 changelog → 打包成 Plugin；大部分人到第三步就夠
- **GPTs/Gems 範式翻轉**：GPTs 時代要「先想找誰、再開哪個對話框」；Skill 時代靠 description 自動匹配、AI 主動抓對應流程進來、「工具來找人」取代「人去找工具」
- **安全紅旗**：Skill 可內含 scripts/、能在本機跑程式；裝陌生 Skill 前先把網址丟給 AI 評估、別無腦安裝

## 應用場景

- Simon 工作場景：已安裝 superpowers 系列（TDD、plan、debug 等）、example-skills（pptx、pdf、xlsx、brand-guidelines 等）
- 一般場景：重複性工作流（會議紀錄、報表、簡報生成）、品牌或風格規範固化、專業領域知識注入

## 相關概念

- [[claude-code]]：Skill 運行的宿主環境
- [[subagents]]：Subagent 是持久化分身，Skill 是可召喚的流程；兩者在「重用」這個問題上互補
- [[interview-driven-prompting]]：skill 可內嵌訪談式互動防腦補
- [[template-reference-pattern]]：skill 可結合既有 template reference 提高產出品質

## 尚未解決的疑問

- Skill 版本管理與團隊共用機制
- Skill 與 Subagent 的邊界：什麼時候該寫 Skill、什麼時候該做 Subagent

## 來源（自動維護）

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-05-02-haiuncle-claude-code-intro]]
- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
- [[2026-05-12-raymond-claude-code-skill]]
