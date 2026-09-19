---
title: "Claude Code 終於「原生支援」AGENTS.md，總要兼容市場"
date: 2026-09-19
type: 來源分析
domain: AI 工具實務
url: "https://www.blocktempo.com/claude-code-native-agents-md-support-mods-shopify-tobi-lutke/"
source_tier: 二手
inbox-id: "3e0f85da-554f-8198-9e81-ef636c90d42c"
concepts: [instructions-file, cross-platform-agent]
projects: []
impact: high
tldr: "Claude Code 2.1.277 起，專案沒有 CLAUDE.md 時改讀 AGENTS.md，可在 /config 改成兩份一起讀；預設下只要從專案最上層到開工資料夾之間任何一層有 CLAUDE.md，就完全不讀 AGENTS.md。時間上緊接 Shopify 執行長公開抱怨只認 CLAUDE.md（因果原文未證實），Anthropic 原本的理由是模型家族不能互換。這項功能用即將推出的 mods 機制做成，原始碼已公開。"
stage: growing
icon: "⚡"
transcript_source: ""
created: 2026-09-19
---

## 為什麼讀

Simon 2026-09-19 從 Google 分享連結丟進資訊收集箱，收藏當下沒寫原因。這篇跟他的雙棲設定直接相關：Claude 端讀全域 CLAUDE.md、Codex 端讀 vault 根 AGENTS.md，兩邊都指向同一份 CORE_RULES；Claude Code 讀檔規則一變，這個設計要重新對一次。

## 摘要

Anthropic 在美國時間 2026-09-18 推出 Claude Code 2.1.277：專案沒有 CLAUDE.md 時改讀 AGENTS.md，也能在 /config 設成兩份一起讀。AGENTS.md 是寫給 AI 程式代理看的專案說明檔，OpenAI 2025 年 8 月推出。時間上緊接 Shopify 執行長公開抱怨只認 CLAUDE.md，兩件事的因果原文沒有證實。預設模式範圍很窄：從專案最上層到開工資料夾之間任何一層有 CLAUDE.md，AGENTS.md 就完全不讀。功能用即將推出的 mods 機制做成，原始碼已公開。

<p align="center"><img src="assets/covers/2026-09-19-blocktempo-claude-code-agents-md-native-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[instructions-file]]：把專案規則寫成一份檔案、AI 每次開工前自動讀。這篇的變化在「讀哪個檔名」：Claude Code 2.1.277 起，專案沒有 CLAUDE.md 時會改讀 AGENTS.md（預設），也可以設成兩份一起讀或只讀 CLAUDE.md。另有一種只保留企業統一派發說明檔的模式，個人使用用不到；設定只認使用者或企業層的設定檔，專案目錄內的設定不生效。（動區報導）
- [[cross-platform-agent]]：把 AI 助理的規則放成一份本體，讓 CLAUDE.md、AGENTS.md 這些各家檔名都指向它，換工具不必重寫。這次 Claude Code 也肯讀 AGENTS.md，兩份都要維護的壓力變小；但預設下有 CLAUDE.md 就不讀 AGENTS.md，Anthropic 的舊理由（不同模型家族不能互換、系統提示詞影響表現）也沒被推翻，所以單一本體仍有用。（動區報導）

## 我的立場

> 針對本篇核心主張的表態；空槽待 Simon 事後填、未表態即留白，芙莉蓮不代擬。

1. Claude Code 支援 AGENTS.md，是讓多工具並用的團隊不必維護兩套規則；Tobi Lütke 稱雙份說明檔是「一筆愚蠢的複雜度稅，本來就不該付」。
   - **我的表態**：（待補：同意／不同意＋為什麼）

2. Anthropic 原本只讀 CLAUDE.md，理由是「不同模型家族不能互換，系統提示詞對表現影響很大」；Thariq Shihipar 也承認維護成本高、「不見得每個人都覺得值得」。
   - **我的表態**：（待補）

3. 預設模式下，從專案最上層到開工資料夾之間任何一層有 CLAUDE.md，就不讀 AGENTS.md；要兩份都吃，得自己在使用者或企業設定檔切模式。
   - **我的表態**：（待補）

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

兩類分開列：

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- 專案層有 CLAUDE.md 的專案（本機 `~/projects/` 下 Simon-Agent、Simon-Journal、frieren-local-vtuber、ai-agent-bootcamp）依預設模式不受影響，Claude 仍只讀 CLAUDE.md；ai-agent-bootcamp 兩份都有，同樣照預設只讀 CLAUDE.md。〔AI 推論〕
- vault 根只有 AGENTS.md、沒有 CLAUDE.md，本機 `claude --version` 實測已是 2.1.277。所以在 vault 根開的 Claude 對話，依預設模式可能改讀那份 Codex 入口檔；原文沒說使用者層 `~/.claude/CLAUDE.md` 算不算「有 CLAUDE.md」，會不會與全域規則疊加出衝突，要實測一場才知道。現有雙入口設計要不要改，等實測結果再判。〔AI 推論〕

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- 在 vault 根開一場 Claude Code 對話，看啟動時有沒有載入 AGENTS.md；有而且不想要，先開 /config 看「Project instructions」實際有哪些選項再決定：原文只確認可改成「兩份一起讀」，「只讀 CLAUDE.md」是 mod 說明文件列的四種模式之一，操作路徑待實測；備案是在 vault 根補一份薄 CLAUDE.md。要不要做取決於 Simon 平常會不會在 vault 根開 Claude。〔需 Simon 確認〕
- Substack 選題卡（可建）：〈廠商格式還沒統一時，個人怎麼用單一正本自保〉。素材是 2026-06 雙棲剛啟動時 vault 根 AGENTS.md 因一次 vault 整理而漂失（見 reading 2026-06-01-raymond-cc-vs-codex-dual-platform-agent），之後改成 CORE_RULES 單一正本加兩個薄入口；對照本篇 Shopify 用自動化程式補雙檔落差、Claude Code 在 AAIF 成立 9 個月後才開始讀 AGENTS.md。截止日由 Simon 定。〔AI 推論〕

## 原文要點

- 版本與範圍：Claude Code 2.1.277（美國時間 2026-09-18）；專案沒有 CLAUDE.md 時改讀 AGENTS.md；/config 的「Project instructions」可改成兩份一起讀；暫不適用 Bedrock、Vertex、Foundry 三個雲端管道。
- 四種模式：只讀 CLAUDE.md、沒有 CLAUDE.md 才讀 AGENTS.md（預設）、兩份一起讀、只保留企業統一派發的說明檔。選項要寫在使用者或企業設定檔，專案目錄內的設定檔不會被讀取。
- 預設模式細節：從根目錄到工作目錄之間有任何一份 CLAUDE.md，就不讀 AGENTS.md；「兩份一起讀」會略過已被 CLAUDE.md 匯入或連結的 AGENTS.md，同一份內容不會載入兩次。
- 格式背景：OpenAI 2025 年 8 月推出 AGENTS.md，同年 12 月捐給 Linux 基金會的 Agentic AI Foundation（AAIF），當時公布逾 6 萬個開源專案與代理框架採用；同日捐入的還有 Anthropic 的 MCP。開發者 2025 年 8 月就在 GitHub 提案要求 Claude Code 支援。
- 相關背景：Tobi Lütke 8 月底稱考慮讓 Shopify 禁用 Claude Code，理由是數千名開發者在同一個 monorepo 工作，兩種說明檔沿目錄樹逐層套用，總有目錄漏掉其中一份；Shopify 目前用自動化程式補洞。
- Anthropic 原立場：Claude Code 工程師 Thariq Shihipar 表示只讀 CLAUDE.md 是因為「不同模型家族不能互換，系統提示詞對表現影響很大」，Claude Code 內部也替每個模型準備不同的系統提示詞；短期建議在 CLAUDE.md 用 `@AGENTS.md` 匯入。
- 實作方式：用 Claude Code 即將推出的「mods」做成內建 mod；agents-md 的原始碼公開在 GitHub，同目錄還有 diff、telemetry、sec-default 三個內建 mod。

## 盲點與保留

**缺口／矛盾**：
- 標題「總要兼容市場」加上「24 天後支援上線」，讀起來像是被 Shopify 施壓才讓步；但原文轉述的 Claude Code 工程師 Thariq Shihipar 回覆發生在 Tobi 抱怨的同一天，內容是團隊正在讓 Claude Code 更容易客製、之後可以直接使用 AGENTS.md（間接轉述、非原話）。這只能說明兩件事時間相近，原文沒有給出因果證據。
  - **Simon 回應**：（待補：同意／不同意這個保留＋為什麼）
- Tobi 抱怨點名的是「AGENTS.md 和 .agents/skills」兩類檔案，原文只交代 AGENTS.md 支援，沒說 .agents/skills 有沒有一起處理，Shopify 的痛點是否解完不明。
  - **Simon 回應**：（待補）
- 原文沒回答「沒有針對 Claude 調整過的 AGENTS.md 內容，進來後表現會不會打折」。Anthropic 先前的理由（模型家族不能互換）沒有被推翻，只留下 Thariq Shihipar 一句短期用 `@AGENTS.md` 匯入的建議。
  - **Simon 回應**：（待補）
- 對照 vault 既有內容：[[cross-platform-agent]] 與 reading 2026-06-01-raymond-cc-vs-codex-dual-platform-agent 都寫「Claude Code 讀 CLAUDE.md、Codex 讀 AGENTS.md」，2026-09-18 起要加註「沒有 CLAUDE.md 時 Claude Code 也讀 AGENTS.md」。概念頁已在本次收錄同步更新，那篇 reading 是當時脈絡、不改。
  - **Simon 回應**：（待補）

**過度吹捧／該打折**：
- 「AGENTS.md 已有逾 6 萬個開源專案採用」是 2025 年 12 月基金會成立時公布的數字（內文自己寫「當時公布」），重點摘要與常見問題卻寫成現況，中間已隔九個月。
  - **Simon 回應**：（待補）
- 標題的「終於」「原生支援」是編輯語氣。事實範圍很窄：預設模式下只有沒有 CLAUDE.md 的專案才會讀 AGENTS.md（另有「兩份一起讀」模式，要自己切換），且不適用 Bedrock、Vertex、Foundry。
  - **Simon 回應**：（待補）
- 「被切除腦葉」是 Tobi Lütke 的修辭、「Shopify 用自動化程式補洞」是他自述，原文沒有第二來源；「超過 273 萬次瀏覽」是宣布貼文的瀏覽數，不代表採用。
  - **Simon 回應**：（待補）

## 第四問

> 這篇沒寫、但站在我的位置可以補上的，是什麼？（先人後機：補章由 Simon 親筆填、芙莉蓮不代擬；填完可喊「驗證我的補章」做文獻對照。）

- **我的補章**：（待補：從位置差／經驗差／時代差挑一個切入、手寫半頁、求真不求完整）

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-09-19-blocktempo-claude-code-agents-md-native)

## 原始連結
- https://www.blocktempo.com/claude-code-native-agents-md-support-mods-shopify-tobi-lutke/
- 收進收件箱的網址（Google 分享連結）：https://share.google/kSnk7VxVRUk19jAX3
- 來源性質：二手 — 動區編譯報導，轉述 Anthropic 更新日誌、Thariq Shihipar 與 Tobi Lütke 的推文與 GitHub 說明文件；第一手版本：未找（文中附有更新日誌、agents-md mod 說明文件與各則推文連結，本次未開啟查證）
