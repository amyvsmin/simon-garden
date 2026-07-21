---
title: "Claude Code Skills：讓 AI 變身專業工匠"
date: 2026-07-01
published: 2026-01-03
type: 來源分析
domain: AI 工具實務
url: "https://kaochenlong.com/claude-code-skills"
inbox-id: "38ff85da-554f-81bc-8849-e85e0c99e674"
concepts: [progressive-disclosure, skill, mcp, subagents, claude-slash-commands-control]
projects: []
impact: medium
tldr: "高見龍寫的 Claude Code Skills 入門教學。三個對既有 concept 有補強價值的點：Progressive Disclosure 的三層 token 結構（metadata≈100／instructions≤5000／resources 按需）、Skills 與 Custom Commands／MCP／Subagents 的四機制分工、以及『Skills 是腦袋（知識）、MCP 是手腳（工具）』的精煉區分。"
stage: evergreen
icon: "⚡"
transcript_source: ""
created: 2026-07-01
---

## 為什麼讀
這篇原本判為「工具類教學、bypass 收錄」——內容都是既有 concept 已涵蓋的 Claude Code Skills 入門知識，對重度 skill 作者的 Simon 沒有新概念增量。Simon 追問「文章寫得好的地方有沒有值得補進現有 concept」，逐條比對後確認有三個表達／規格層的點值得擴進 `progressive-disclosure`／`skill`／`mcp`，並決定補收成 reading（source B）讓這三個 concept 的來源反引有 reading 可掛。收這篇不是為了學新東西、是為了把幾個既有 concept 補扎實。（原文 2026-01 發表、2026-07 收錄，隔約半年；AI 題材通常要留意發表日時效，但這篇講的 Skills 三層結構、四機制分工屬穩定的機制設計、半年內未過時。）

## 摘要
一篇寫給「還沒用過 skill 的工程師」的 Claude Code Skills 入門教學。開頭點出痛點：把團隊慣例全塞進 `CLAUDE.md`，內容一長就難維護，而且每次啟動全部載入、不管當前任務用不用得到，還會拖慢效能。Skills 是另一條路——把專業知識打包成獨立模組，讓 agent 自己依 description 判斷何時該用、只載入需要的部分、還能跨專案重用。文章依序講清楚：一個 skill 最少只需一個 `SKILL.md`（開頭一段 YAML frontmatter（檔案開頭的設定區塊）寫 name 和 description，之後是給 agent 的指令）；設計上最漂亮的 Progressive Disclosure（漸進式揭露）把內容分三層、按需載入；Skills 跟 Custom Commands（手動打的 `/` 指令）、MCP（讓 AI 連外部工具的協定）、Subagents（獨立跑的子代理）四種客製化機制怎麼分工；動手做一個 commit-message-helper skill 的完整範例；寫好 description 的正反例技巧；安裝第三方 skill 的資安風險。最後帶到 2025 年 12 月 Anthropic 把 Agent Skills 發布為開放標準（agentskills.io），讓這套「工匠技能系統」可以跨 agent、跨工具使用。

<p align="center"><img src="assets/covers/2026-07-01-kaochenlong-claude-code-skills-cover.png" alt="封面圖" width="400"></p>

## 核心概念
- [[skill]]：把重複用到的專業知識、流程、腳本打包成可重用模組的機制，核心精神是「試一次、存起來、用很多次」。文章用「小吃店老闆拿到一本《台南小吃完全手冊》就能做出道地府城味」比喻——skill 就是那本武功秘笈，把 AI 從什麼都略懂的通才變成某領域的專家。最小結構只要一個 `SKILL.md`（YAML frontmatter 的 name 必須跟資料夾同名、description 決定何時被觸發），複雜的再加 `scripts/`（可執行程式）、`references/`（參考文件）、`assets/`（範本資源）三個選用目錄。
- [[progressive-disclosure]]：這篇把這個抽象心法講成 Skills 的具體三層實作——第一層 metadata（只有 name＋description、約 100 tokens、Claude Code 啟動時全預載，用來比對「這任務跟哪個 skill 有關」）、第二層 instructions（`SKILL.md` 主體、建議 5000 tokens 內、判定相關才載）、第三層 resources（`scripts/`／`references/`／`assets/`，用到哪個檔才讀哪個）。因為分層按需載入，單一 skill 能打包的知識量理論上沒有上限。文章用 Google Maps 導航比喻：不會一次唸完整條路線，先給大方向、快到路口才報細節、中途要加油站才載入附近資訊。
- [[mcp]]：文章給了一句好記的層次區分——Skills 是給 agent「腦袋」（知識：翻譯時的語氣、專有名詞怎麼處理、哪些詞不翻），MCP 是給 agent「手腳」（工具：存取術語庫資料庫、呼叫 DeepL API）。社群有人說 Skills 會取代 MCP，作者反駁兩者解決不同層次的問題、是互補不是互斥，可以同時用 Skills 教 agent 怎麼翻譯、又用 MCP 讓它存取術語庫。
- [[subagents]]：文章把它定位成「自主的子程序、處理複雜多步驟任務」，當任務太複雜、需要獨立 context、或可平行處理時由 Claude 啟動。著墨較淺，主要用在四機制對照裡當一格。
- [[claude-slash-commands-control]]：這篇談的是使用者自建的 Custom Commands（打 `/xxx` 手動觸發的固定 prompt 巨集，如作者自己寫的 `/sanitize-ai` 清理 AI 機味、`/remove-comment` 移除註解）。它跟 Claude Code 內建的斜線命令（系統預設的 `/compact`、`/clear`）共用同一個 `/` 觸發介面，但來源相反：一個是使用者自建的巨集、一個是系統給的。關鍵差異在觸發方式：Custom Commands 要使用者手動打、Skills 由模型自動判斷——要手動觸發就用 Command、要 AI 自己判斷何時用就用 Skill。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- 這篇最直接的優化就是本輪正在做的三條 concept 擴寫：Progressive Disclosure 三層 token 結構補進 `progressive-disclosure`、四機制分工補進 `skill`、腦袋／手腳區分補進 `mcp`〔原文支撐〕。
- description 寫法技巧（技術說明式、列觸發條件、非行銷文案）——Simon 的 skill description 已寫滿觸發詞、大致實踐；真要動可抽查最少被觸發的 skill、對照原文 bad／good 範例看夠不夠具體，但非必要〔AI 推論〕。

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- 原文「`SKILL.md` 控 500 行內、細節拆到 `references/`」是個現成準則——日後某個 SKILL.md 明顯過長時可拿它當拆分依據，不必現在發起自審；knowledge-wiki skill 已是這種結構（references/ 分流 batch-rules、ingest-flow），可當現成的正面範例〔AI 推論〕。
- Substack 選題候選：用小吃店武功秘笈＋Google Maps 導航兩個比喻，對非工程師解釋 skill 是什麼（這篇兩個比喻寫得生動、可借文風）〔需 Simon 確認〕。

## 落地動作與效益

**A 類芙莉蓮優化**：
- ✅ **已做**：把這篇三個表達／規格層的點擴進既有 concept——Progressive Disclosure 三層 token 結構（metadata≈100／instructions≤5000／resources 按需）＋「單一 skill 可打包知識量理論上無上限」補進 `progressive-disclosure`；Skills／Custom Commands／MCP／Subagents 四機制分工＋三層載入補進 `skill`；「Skills 腦袋（知識）vs MCP 手腳（工具）」區分＋取代論反駁補進 `mcp`。三處都掛本篇 source 反引、changelog 記 `擴寫`×3。這也是這篇補收的主因（Simon 指定 source B）。
- ❌ **不做**：description 寫法技巧不另立優化規則——Simon 每個 skill 的 description 早已寫滿觸發詞、已實踐，補規則屬重複。

**B 類 Simon 個人動作**（Simon 後續維護狀態）：
- ⏸ 日後某個 `SKILL.md` 明顯過長時，用原文「500 行內、細節拆 `references/`」當拆分依據〔AI 推論〕
- ⏸ Substack 選題候選：兩比喻對非工程師解釋 skill〔需 Simon 確認〕

## 原文要點
- **痛點**：`CLAUDE.md` 把慣例規則全寫進去，內容一長就難維護、且啟動時全部載入不管用不用得到，作者遇過 Claude Code 提醒再繼續效能會變差。
- **Skills 定義**（Anthropic 官方）：模組化、自包含的知識包，把 Claude 從通用 agent 變成配備程序性知識的專門 agent，像特定領域的「新人上手指南」。
- **最小結構**：一個 `SKILL.md` 即可，name（1–64 字元、小寫字母數字和 `-`、須與目錄同名）、description（1–1024 字元、寫做什麼＋何時用）。複雜的再加 scripts/references/assets 三個選用目錄，且要在 `SKILL.md` 裡明確引用 Claude 才會發現。
- **Progressive Disclosure 三層**：metadata（≈100 tokens、啟動全預載）／instructions（`SKILL.md` 主體、≤5000 tokens、相關才載）／resources（按需讀取）。因分層按需，可打包的 context「effectively unbounded」。
- **四機制對照**：Skills（模型依 description 自動判斷、跨對話跨專案、給知識、動態載入、可含程式碼）／Custom Commands（使用者打 `/command`、固定 prompt 巨集、不含程式碼）／MCP（工具呼叫、連外部服務、給手腳）／Subagents（獨立 context、平行處理複雜任務）。四者互補、可同時運作。
- **建 skill 範例**：commit-message-helper，`SKILL.md` 寫 Conventional Commits 規則，加 `scripts/validate_commit.py` 驗證格式（但要在 `SKILL.md` 註明腳本用法 agent 才知道）。裝法兩種：`~/.claude/skills/`（個人層、任何專案可用）或專案 `.claude/skills/`（專案層、團隊共用）；同名時個人層蓋過專案層。
- **寫好 skill 四技巧**：description 具體可操作（附 bad「Helps with PDFs.」vs good 正反例）／善用 Progressive Disclosure（`SKILL.md` 控 500 行內、細節丟 references/）／提供範例（輸入＋預期輸出）／測試 edge cases。
- **資安三提醒**：只從信任來源安裝、安裝前逐一檢查 `scripts/` 有沒有呼叫外部 URL 或存取敏感資料、檢查 `SKILL.md` 有沒有引導 agent 做危險的事（如把 `.env` 傳到某網址）。
- **開放標準**：2025-10 推出、2025-12-18 發布為開放標準（規格 agentskills.io、原始碼 github.com/agentskills），不再是 Claude Code 專屬、其他 AI 工具也能採用。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-07-01-kaochenlong-claude-code-skills)

## 原始連結
- https://kaochenlong.com/claude-code-skills
