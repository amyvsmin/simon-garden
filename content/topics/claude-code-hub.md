---
title: Claude Code
slug: claude-code-hub
type: topic
topic_kind: entity
entity_type: product
status: living
aliases: [Claude Code 彙整, Claude Code hub]
created: 2026-07-04
last_updated: 2026-07-04
tags:
  - ai-tool
  - claude-code
  - anthropic
  - coding-agent
---

# Claude Code

> 實體彙整頁（entity）。把散在多篇 reading 與多個 concept 裡、關於 Claude Code 這個產品的東西收攏成一頁：它是什麼、我目前怎麼定位它、它在我知識庫裡的各個切面（連出去、不重抄）、怎麼一路演化、還有哪些沒拍板。深入單一切面的內容留在各自的 concept。

## 一句話身份

Claude Code 是 Anthropic 推出的終端型 AI 助手：運行於本地 shell、能直接讀寫檔案、執行指令、串外部服務，不是「補完工具」而是全自主代理（fully agentic），是 Claude 三個工作模式（Chat／Cowork／Code）裡自主性最高的一端。

## 我的當前定論

- **定位**：Simon 雙棲 agent 的本體（WSL 端芙莉蓮），日常驅動個人自動化（Knowledge Wiki、course-notes、復盤 skill）；跟 Codex（Windows）並用、vault 當共享中介，兩者互為對抗式審查的一端，細節見 [[codex]]。
- **強在自主執行與可疊代擴展**：MCP／Skill／Hooks／Subagents／Plan Mode 幾層擴展機制成熟；plugin 分 User／Project／Local 三層 scope 讓工具分享有制度化路徑；官方 `claude-code-setup-plugin` 已把「該裝什麼」變成客製化掃描推薦、取代盲抄 dotfiles。
- **靠寫規則穩定行為、不靠猜內部機制**：反射律（行為偏差第一反應是補規則、不是查 Claude Code 內部運作）配上 12 條 CLAUDE.md 規則（把錯誤率從 41% 壓到 3%）與 200 行密度上限，是 Simon 自己 CLAUDE.md 分層設計的理論依據。
- **弱在多媒體與操控其他軟體**：不擅長影片內容解析、視覺化生成，也不能操作 Word／Excel 這類第三方 GUI；這塊靠 NotebookLM／Gemini 外包做「token 卸載」，見 [[notebooklm-hub]]。
- **agent harness 會自然膨脹、需要定期瘦身**：CLAUDE.md／rules／hooks／memories／skills 疊久了會互相稀釋注意力，解法是派不繼承主對話的獨立子代理分區盤點、用「推翻式」而非「確認式」驗證去重。
- **演化方向從單次補全走向自我鞭策的長任務執行**：`/goal`、Dynamic Workflows 這類機制讓 agent 對著可驗證終點跑到完成；多家同步推出同名功能顯示當前戰場在應用層的「代理人作業系統」之爭，不只是模型優劣。

## 切面地圖

Claude Code 在我知識庫裡被這些 concept 各咬一個角度（一行帶過、深入內容在該 concept）：

- [[claude-code]]：定義切面（Anthropic 終端型 AI 助手、執行環境／自主層級／配置檔）。
- [[claude-code-effort-level]]：推理力道（low／medium／high）品質旋鈕，模型升級會抬高同檔位的「夠用」下限。
- [[claude-code-goal-command]]：`/goal` 指令讓 agent 對著可驗證終點跑到完成、不用手動確認，2026-05-12 隨 2.1.139 上線。
- [[claude-code-iteration-loop]]：Boris Cherny 的驗證→自我修正循環心法，把驗證權交給 AI、人類角色升級為驗收者。
- [[claude-code-onboarding-qa]]：進新 codebase 先做 Q&A 理解、再規劃、再動手，onboarding 時間從幾週縮短到幾天。
- [[claude-code-plugin-scope]]：Plugin 安裝三層 scope（User／Project／Local），決定工具是個人習慣、團隊統一還是自己實驗。
- [[claude-code-setup-plugin]]：Anthropic 官方顧問型 plugin，掃專案結構產出客製 MCP／Skills／Hooks／Subagents 推薦報告。
- [[claude-md-12-rules]]：CLAUDE.md 12 條規則（Karpathy 4＋Mnilax 8），實測把錯誤率從 41% 壓到 3%，200 行是密度死線。
- [[claude-md-dual-nav]]：vault 根 CLAUDE.md 當總目錄、各資料夾 instructions.md 當局部地圖的雙層導航，省 token 又可演進。
- [[claude-md-reflexive-law]]：行為偏差第一反射是補規則、不是查 Claude Code 內部機制。
- [[claude-rewind]]：`/rewind`／雙 Esc 回溯到分岔點重提示，取代疊加修正指令。
- [[claude-slash-commands-control]]：`/compact`／`/clear`／`/context`／`/btw`／`/rewind`／`/usage` 六個內建斜線指令，精準微調 context 對抗 context rot。
- [[claude-three-modes]]：Claude 三種工作模式（Chat／Cowork／Code），Code 對應 Claude Code 終端介面。
- [[claude-usage-dashboard]]：額度面板三層（Current Session／Weekly Limits／Extra Usage）互相獨立，混淆會誤判實際耗用。

## 演化時間軸

- **2025-10**：Skills 功能正式推出（分 metadata／instructions／resources 三層漸進式揭露）。來源 [[2026-07-01-kaochenlong-claude-code-skills]]。
- **2025-12-18**：Anthropic 把 Agent Skills 發布為開放標準（agentskills.io），不再是 Claude Code 專屬功能。來源 [[2026-07-01-kaochenlong-claude-code-skills]]、[[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]。
- **2026-01**：Andrej Karpathy 在 X 抱怨 Claude 寫程式的典型問題（暗中假設、過度複雜化、無關破壞），觸發 Forrest Chang 歸納出 4 條 CLAUDE.md 規則、兩週內衝上 6 萬星。來源 [[2026-05-14-blocktempo-claude-code-12-rules]]。
- **2026-04-15**：Anthropic 官方部落格定調「每一轉都是分岔點」的會話管理心法（繼續／回溯／清除／壓縮／子代理五選項），確立 1,000,000 token 硬上限與約 70% 水位就該主動處理的建議。來源 [[2026-05-13-thariq-claude-code-session-management-1m-context]]。
- **2026-04-21**：Simon 執行 CLAUDE.md 分層重構（Tier A 全域／B 專案／C secrets），全域檔從 156 行擴到 266 行、專案檔從 189 行精簡到 95 行。來源 [[2026-04-21-simon-agent-architecture-design]]。
- **2026-05-12**：Claude Code 2.1.139 上線 `/goal` 指令，同期 Codex、Hermes Agent 也推出同名功能，都在對抗「context anxiety」。來源 [[2026-05-14-yaha-claude-code-goal]]。
- **2026-05-15**：Simon 從 12 條規則中挑 4 條（一致性、大聲失敗、多步驟檢查點、token 預算）落地到 vault 與 KW γ skill。來源 [[2026-05-14-blocktempo-claude-code-12-rules]]。
- **2026-05-22**：Anthropic 推出官方 `claude-code-setup-plugin`，掃專案結構產出客製化 MCP／Skills／Hooks／Subagents 推薦報告；Simon 當天落地 UserPromptSubmit hook（git status 自動注入 context）。來源 [[2026-05-22-yaha-claude-code-setup-plugin]]。
- **2026-05-30**：Claude Code 推出 Dynamic Workflows（phase／agent／parallel 三腳本原語），示範對兩個故意埋的漏洞各派 3 個子代理做「推翻式」對抗驗證。來源 [[2026-05-30-yaha-claude-code-dynamic-workflows]]。
- **2026-05-31 → 2026-06-01**：Simon 正式啟動 Claude Code（WSL）＋ Codex（Windows）雙棲；隔天健檢發現 vault 根 `AGENTS.md` 因從未進版控、一次 vault refactor 後就消失。來源 [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]。
- **2026-06-05**：示範用不繼承主對話的獨立子代理分區盤點、去重 agent harness，減少 36% 脈絡、平均每次新對話省約 4,000 token。來源 [[2026-06-05-dustin-claude-code-harness-cleanup]]。
- **2026-06-13**：Claude Skill 生態三起真實供應鏈攻擊案例曝光（惡意 gif-creator skill、Cowork 隱形提示注入、ClawHub 341+ 惡意 skill）；Simon 當天建 `skill-safety-audit` skill。來源 [[2026-06-13-pansci-claude-skill-security]]。

## 矛盾／未決

- **12 條規則的「降幅」表述前後不一**：[[2026-05-14-blocktempo-claude-code-12-rules]] 摘要寫「錯誤率多降 8 個百分點」，但同篇「原文要點」給的精確數字是 Karpathy 4 條 14% → 全 12 條 3%（實際差 11 個百分點）；來源本身兩處數字對不上，引用時以「41%→14%→3%」逐段數字為準，避免直接沿用摘要句的「8 個百分點」。
- **context window 組成到底幾塊**：[[2026-05-13-thariq-claude-code-session-management-1m-context]] 正文文字寫「系統提示／對話歷史／工具呼叫／工具輸出／讀取的檔案」共 5 類，但同篇圖像解讀寫「系統提示、CLAUDE.md、對話歷史、工具呼叫與輸出、已讀取的檔案、剩餘空間」共 6 塊；兩處分類方式不同，尚未確認哪個是官方定案說法。
- **`/goal` 兩處與官方文件有出入、影片未查證**：[[2026-05-14-yaha-claude-code-goal]] 指出影片講「token 不會多扣錢」，官方原文其實是「typically negligible」（通常可忽略、非保證免費）；影片稱「headless 是不外傳秘技」，官方文件其實已公開寫在 Run non-interactively 段落。
- **skill 供應鏈風險的「露餡率」與惡意數量口徑未經獨立查證**：[[2026-06-13-pansci-claude-skill-security]] 影片自稱肉眼四招走完可讓「90%」有問題的 skill 露餡，但同篇也承認隱形指令肉眼擋不住、這個 90% 數字自陳未經查證；ClawHub 案例的惡意 skill 數量（341 個、後稱翻倍到 824 個）也未見獨立來源覆核。

## 來源（自動維護）

核心素材：

- [[2026-04-21-madebypan-claude-guide]]
- [[2026-04-21-simon-agent-architecture-design]]
- [[2026-04-24-simon-journal-skill-design]]
- [[2026-04-29-karpathy-obsidian-claude-wiki]]
- [[2026-05-02-haiuncle-claude-code-intro]]
- [[2026-05-02-xinxin-obsidian-ai-second-brain]]
- [[2026-05-05-obsidian-cli-claude-code-daily-loop]]
- [[2026-05-09-boris-cherny-claude-code-5-habits]]
- [[2026-05-09-claude-token-limits-tutorial]]
- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
- [[2026-05-12-raymond-claude-code-skill]]
- [[2026-05-13-dustin-obsidian-cross-project-vault]]
- [[2026-05-13-hc-notebooklm-claude-code-rag]]
- [[2026-05-13-thariq-claude-code-session-management-1m-context]]
- [[2026-05-14-blocktempo-claude-code-12-rules]]
- [[2026-05-14-raymond-cc-mini-course]]
- [[2026-05-14-yaha-claude-code-goal]]
- [[2026-05-14-yt-claude-code-basics-intro]]
- [[2026-05-22-yaha-claude-code-setup-plugin]]
- [[2026-05-24-anthropic-claude-code-cache-tips]]
- [[2026-05-26-ai-superbrain-skill-build]]
- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
- [[2026-05-26-yt-goal-evaluation-rubric-long-tasks]]
- [[2026-05-28-to-md-build-log]]
- [[2026-05-29-opus-4-8-coding-benchmark]]
- [[2026-05-30-yaha-claude-code-dynamic-workflows]]
- [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]
- [[2026-06-05-dustin-claude-code-harness-cleanup]]
- [[2026-06-13-pansci-claude-skill-security]]
- [[2026-06-15-bnext-loop-engineering]]
- [[2026-07-01-kaochenlong-claude-code-skills]]

半相關（Claude Code 只當配音工具、比較對象或背景名詞）：

- [[2026-04-25-line-bot-journal-design]]
- [[2026-04-25-weekly-review-skill-design]]
- [[2026-04-29-claude-design-anthropic-tour]]
- [[2026-05-02-hermes-agent-vs-openclaw]]
- [[2026-05-09-thariq-html-replaces-markdown-ai]]
- [[2026-05-16-bnext-agent-os-codex-vs-claude]]
- [[2026-05-20-accuhit-claude-ai-complete-guide]]
- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
- [[2026-05-26-yt-hc-html-presentation-ai-agent]]
- [[2026-06-02-owasp-llm-top-10-genai-security]]
- [[2026-06-12-managertoday-codex-ai-presentation]]
- [[2026-06-12-technews-saas-to-taas-token-economics]]
- [[2026-06-15-papaya-hermes-agent-tutorial]]
- [[2026-07-03-ai-super-brain-ch1]]
- [[2026-07-03-ai-super-brain-ch2]]
- [[2026-07-03-ai-super-brain-ch3]]

相關 concept：[[claude-code]]、[[claude-code-effort-level]]、[[claude-code-goal-command]]、[[claude-code-iteration-loop]]、[[claude-code-onboarding-qa]]、[[claude-code-plugin-scope]]、[[claude-code-setup-plugin]]、[[claude-md-12-rules]]、[[claude-md-dual-nav]]、[[claude-md-reflexive-law]]、[[claude-rewind]]、[[claude-slash-commands-control]]、[[claude-three-modes]]、[[claude-usage-dashboard]]

## 維護（entity 頁更新規則）

- **更新時機**：之後有新 reading 觸及 Claude Code，就回這頁追加來源、刷新「我的當前定論」與「演化時間軸」、把過時的疑問結掉。frontmatter `status: living` 代表這頁要保持當前、不是寫完封存。
- **不重抄**：切面的深入內容永遠留在各自 concept，本頁只連、不複製。
