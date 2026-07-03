---
title: "雷蒙：Claude Code 跟 Codex 怎麼選 + 桌面版怎麼用（雙棲 agent 規則）"
date: 2026-06-01
published: 2026-05-31
type: 來源分析
url: "https://youtu.be/d7qmp6gjpiU?si=Dd37KeQThMeA8S59"
inbox-id: "372f85da554f81a7ba69eab5bef3b751"
concepts: [cross-platform-agent, agent-os-competition, cli-api-mcp-priority, claude-code-effort-level, template-reference-pattern, absolute-path]
projects: []
impact: high
transcript_source: degraded
tldr: "雷蒙教 Claude Code 跟 Codex 怎麼選、桌面版怎麼用。命脈是「雙棲」：用 SSOT + symlink 讓一份核心規則同時被 CLAUDE.md／AGENTS.md／GEMINI.md 讀到，記憶放本地不開平台記憶，agent 才不被一家鎖死。配套含上下文三技巧（額度面板、80% 手動壓縮、規劃執行分對話）、Computer Use 是最後手段、skill 要問「適合我嗎」不要直接裝。"
stage: evergreen
icon: "⚡"
created: 2026-06-01
---

## 為什麼讀

從資訊收集箱抓進來的 YouTube 教學，Simon 特別點名「裡面有雙棲規則、昨天似乎沒提到」要消化。脈絡：Simon 昨天（2026-05-31）已實際啟動雙棲——Claude Code（WSL）= 芙莉蓮 + Codex（Windows）、Obsidian vault 當共享知識中介、芙莉蓮幫他寫了一份 vault 根 AGENTS.md。「昨天給你的雙棲 agent」指的是這個設定，不是同期收的宣家「Codex + Obsidian 自生長知識庫」影片（那支講知識庫自生長、沒講雙棲）。這支雷蒙的影片把雙棲規則講得最完整，正好拿來對 Simon 昨天建的設定做一次健檢、補昨天沒提到的規則。

## 摘要

雷蒙這支影片回答兩個問題：Claude Code 跟 Codex 怎麼選、桌面版怎麼用。給小白的結論是一律先用桌面版、Codex 對中文使用者更好上手。整支的命脈是「雙棲」——讓同一隻 AI agent 在 Claude Code、Codex、甚至 Gemini 都能用。做法是單一真實來源加捷徑：真正的核心規則只維護一份，再讓各家認得的檔名（CLAUDE.md、AGENTS.md、GEMINI.md）做成 symlink 指向它，只改本體、三家同步；記憶也獨立放本地檔、不開 Codex 內建記憶，才不會被一家鎖住搬不走。配套技巧包含上下文管理三招（看額度面板、八成時手動壓縮、規劃跟執行分兩個對話）、給絕對路徑省 token、Computer Use 控制電腦是最耗 token 的最後手段、安裝別人的 skill 要先問「適合我嗎」讓 AI 評估 CP 值再決定。

<p align="center"><img src="assets/covers/2026-06-01-raymond-cc-vs-codex-dual-platform-agent-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[cross-platform-agent]]：這支的命脈。把 agent 的規則與記憶設計成不綁供應商、可跨 Claude Code／Codex／Gemini 搬家。手段是 SSOT（單一真實來源）加 symlink——本體一份核心規則，CLAUDE.md／AGENTS.md／GEMINI.md 三個檔名全做成捷徑指向它，因為三家檔名不同、而且 Codex 不讀 CLAUDE.md，不這樣做就會檔案漂移、換家時 AI 少認識你一截。
- [[agent-os-competition]]：影片的背景。Claude Code 跟 Codex 在搶同一批使用者，Codex（OpenAI）這個月桌面版突飛猛進、有中文介面、生圖跟遠端控制做得好，正是「我要離開 Claude Code 去 Codex」討論的由來。
- [[cli-api-mcp-priority]]：雷蒙示範 Codex 的 Computer Use（控制電腦、手機遠端、AI 幫你打單機遊戲、填問卷），但強調這是最耗 token 的最後手段——玩個遊戲幾分鐘就燒掉 12% 週額度；只有當工具沒有 API／CLI／MCP 可接時才用螢幕控制。對應他 vault 已收的 [[2026-05-12-raymond-ai-controls-software]]。
- [[claude-code-effort-level]]：影片教在 Claude Code 右下角選模型與 effort（low／medium／high／extra／max），力道越高越聰明但越慢越耗 token，日常選 high 就夠；模型要選帶「em」（1M context）的版本。
- [[template-reference-pattern]]：影片的剪輯案例示範「把別人的 skill 改成自己的版本」——用 Video Spec Builder 做完一支旅行短片後，把跟 AI 來回調整出的偏好收斂成一個叫 Raymond Video Style 的個人 skill，下次 AI 直接照他的口味剪、不是照市場通用版。對應「個人語料 > 全網通用語料」。
- [[absolute-path]]：給 AI 檔案時直接拖檔或貼絕對路徑、不要只給關鍵字——關鍵字會讓它遍歷整台電腦、浪費 token，路徑直接命中。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段。
>
> **2026-06-01 查證更正**：本段原寫「自動化層（hook／skill）不跨家／Codex 搬不動」，查 OpenAI Codex 官方文件後推翻——Codex 有近乎一對一的 hook 系統（SessionStart／UserPromptSubmit／PreToolUse 等，寫進 `config.toml` 或 `hooks.json`）與 agentskills.io 開放標準的 skill（同一份 SKILL.md 跨家通用、掃 `.agents/skills`）。hook／skill 是「要逐一移植設定」、不是「搬不動」；真正不可跨的只有 superpowers 與 Skill tool 編排。下列已就地修正。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

這支的「雙棲規則」逐條對照 Simon **昨天（2026-05-31）已實際啟動的雙棲設定**（Claude Code WSL = 芙莉蓮 + Codex Windows、vault 當共享中介），就是一次雙棲健檢。2026-06-01 直接查真實狀態（`~/.claude` symlink、vault 根、`~/.codex/config.toml`）：

- **規則 1：SSOT + symlink**。Claude 側 ✅：`~/.claude/CLAUDE.md`（全域）+ 專案 `CLAUDE.md` 都是 symlink 指向 vault `0-context/system/CLAUDE-global.md`、`CLAUDE-project.md`、有 git 版控（vault remote = github private）。Codex 側 ⚠️：昨天芙莉蓮**另寫**一份 vault 根 `AGENTS.md`（針對 Codex「唯讀參考 + 第二雙眼睛」角色客製、非指向 CLAUDE-global）。雷蒙 ProKey 08 的標準做法其實是抽一份平台中立的 `CORE_RULES.md`、讓 CLAUDE.md 跟 AGENTS.md 都指向它（乾淨的 SSOT）；Simon 的 CLAUDE-global 本身是 Claude Code 口味（含 Skill tool／hook／superpowers），純指向會餵 Codex 一堆用不到的規則，所以另寫 Codex 版是合理權衡，代價是兩份會漂移、要手動同步（或日後改走 CORE_RULES 模式）。
- **規則 2：同一可攜資料夾**。⚠️ vault 是共享知識中介（Codex 讀得到 readings／concepts／rules），但 Claude 的 20 個 skill、hook、user-memory 在 `~/.claude/`（WSL），Codex 的 skill 在 `~/.codex/skills/`（Windows、目前幾乎空）。知識層共享、自動化層各自分開。
- **規則 3：記憶放本地、不開平台記憶**。✅✅ 做對了：`~/.codex/config.toml` 明確 `use_memories = false`、`generate_memories = false`——Codex 平台記憶是關的，正合雷蒙規則。Claude 側記憶也全本地。唯一缺口：user-memory 檔在 `~/.claude`（WSL）、不在 vault，所以 Codex 讀得到 vault 知識、讀不到 user-memory（昨天「待續」已記）。
- **規則 4：跨家無縫接軌**。讀取層 ✅（昨天「方案 A」雙關卡驗證過：Codex 在 vault 啟動載入 AGENTS.md、全程繁中、會順著讀 `0-context/rules/vault-auto-retrieval.md`、答得出 KW γ／course-notes 個人內容）。自動化層 ⚠️ 需移植、非不可跨（2026-06-01 查證官方文件後更正，原寫「❌ 不跨家」已被推翻）：Codex 有近乎一對一的 hook 系統（事件含 SessionStart／UserPromptSubmit／PreToolUse／PostToolUse／PreCompact／Stop 等，寫進 `~/.codex/config.toml` 或 `hooks.json`）、skill 走同一套 agentskills.io 開放標準（Anthropic 2025-12-18 釋出、SKILL.md + 隱式觸發、掃 `.agents/skills`／`~/.agents/skills`、支援 symlink）。所以 hook／skill 是「要逐一移植設定」、不是「搬不動」；真正不可跨的只剩 superpowers 與 Claude 的 Skill tool 編排層，其餘卡點是跨作業系統跑腳本 + 兩份設定要維護，用 if-then + 共用腳本可壓薄。
- **規則 5：雙棲健檢助手**。雷蒙那份是付費迷你課 ProKey 08（Simon 有連結）。本次直接對真實設定做健檢、可再拿雷蒙清單交叉比對、補檢核點。

**最關鍵的兩件事**：

1. **vault 根 AGENTS.md 現在不見了**（2026-06-01 完整 ls + find + git log 三查確認：working tree 無、從未 commit 過）。昨天建好、雙關卡驗證過，今天 vault refactor（commit `70dc8ff`）後不在了；`~/.codex/AGENTS.md` 又是 0 bytes 空檔。等於現在 Codex 在 vault 啟動讀不到任何 AGENTS.md、昨天驗證過的雙棲橋目前是斷的。這是健檢第一順位。
2. **「自動化層不可跨」這個原始判斷已被查證推翻（2026-06-01）**：規則／知識（純文字）能跨家不變；但 hook 與 skill 這層 Codex 其實鏡像了 Claude 的擴充模型（有 hook 系統 + agentskills.io skill），可逐一移植重建、不是搬不動。真正不可跨的只有 superpowers 與 Skill tool 自動編排（Claude 專屬引擎）。比較準的說法是：Codex「讀得到同一個大腦、多數反射可重建（要移植設定）、跑不了 Claude 專屬編排」。Simon 昨天把 Codex 定位成唯讀參考 + 第二雙眼睛仍是合理的階段性選擇，但理由不是「自動化搬不動」，而是移植要工、且桌面版 Codex 自有強項（生圖／Computer Use／手機遠端）值得各司其職。

→ 討論結論見「落地動作與效益」段。

**B. Simon 個人動作類**：

- **上下文三技巧自我檢核**：雷蒙的三招（八成時手動壓縮而非等自動、規劃跟執行分兩個對話、給絕對路徑不給關鍵字）Simon 多半已內化，可當提醒。規劃／執行分對話對應 Simon 寫 spec → plan → 實作的習慣。
- **Substack 寫作角度（2026-06-01 查證後修正論點）**：原本想寫「hook／skill 這層 Codex 根本搬不動」，查證後不成立（Codex 有對應機制）。更準也更有料的真實角度是：「規則可攜不等於 agent 可攜——但卡死你的不是 hook／skill 搬不動（那層其實鏡像得了），是兩件更隱性的事：一是『沒進 git 的橋會漂走』（我昨天建的 AGENTS.md 一次 refactor 就不見，因為它從沒被 commit）；二是『跨作業系統跑腳本 + Claude 專屬編排（superpowers）才是真正搬不動的那層』。雙棲的魔鬼在工程細節、不在檔名。」對應 Simon 親手踩到的雙棲斷橋、跟「不被工具鎖死」的個人成長軸。

## 落地動作與效益

> Step 9／10 自檢結論（2026-06-01 收錄當天跟 Simon 討論）。Simon 本次明確指示「只出健檢報告、不動設定」，所以下列只報告、不修。

**A 類芙莉蓮優化**

- 🔧 **健檢第一順位：vault 根 AGENTS.md 不見了**。昨天建好、雙關卡驗證過，今天 vault refactor（commit `70dc8ff`）後 working tree 已無、且從未 commit；`~/.codex/AGENTS.md` 又是空檔。等於昨天驗證過的雙棲橋目前是斷的——Codex 在 vault 啟動讀不到任何 AGENTS.md。**本次不修（Simon 說不動設定），待 Simon 指示是否重建／補進版控。**
- ⚠️ **AGENTS.md 跟 CLAUDE-global 會漂移**：兩份是獨立檔、不是 symlink。要嘛接受手動同步、要嘛把共用段抽出來 symlink、Codex 專屬段（唯讀參考 + 第二雙眼睛定位）另寫。留給 Simon 決定。
- 🧭 **長期架構選項：雷蒙的 CORE_RULES.md 模式**：ProKey 08 的做法是把平台中立核心抽成 `CORE_RULES.md`、CLAUDE.md 跟 AGENTS.md 都指向它。Simon 目前是 CLAUDE-global 當本體（CC 口味）+ Codex 版另寫。要不要改走 CORE_RULES（抽出中立核心 + 各家加平台專屬段）是日後可選的整理、不急。本次不動。
- ✅ **已正確、不用動的**：Codex 平台記憶關閉（`use_memories=false`，合雷蒙規則 3）、vault 設 trusted 專案、locale zh-TW、方案 A 讀取雙關卡驗證過。

**雷蒙 ProKey 08 交叉比對（2026-06-01、Simon 提供原檔）**

跑雷蒙七步健檢在真實設定上、補第一版漏的維度：
- **Step 1 同步方式**：vault 是 WSL + Windows 同一實體夾（`/mnt/c/Users/User/vaults/SimonVault`）+ github private remote + Obsidian Sync。**避開**雷蒙常見錯誤 #9（雲端 symlink 失效）——兩端讀同一份實體檔、不靠雲端 symlink。
- **Step 2 規則**：本次兩個發現正中雷蒙常見錯誤 #1（只建 CLAUDE.md 忘 AGENTS.md）跟 #2（`~/.codex/AGENTS.md` 0 bytes 空檔）。
- **Step 4 MCP（第一版漏、雷蒙補到的最大一塊）**：Claude 側 = notebooklm-mcp／twinkle-hub（+ claude.ai 帳號連 Gmail／Calendar／Drive／Notion + firecrawl／playwright）；Codex 側 = node_repl + OpenAI plugins（gmail／calendar／drive／browser／documents…）。兩邊工具完全不同、格式 JSON vs TOML、未轉未同步。雷蒙明示別 symlink、要逐一轉測。這是雙棲真正花工的一塊。
- **Step 3／6 自動化**：Claude commands=1（morning）、agents=1（plan-reviewer）、~20 skill（昨天 refactor 收進 vault）、多個 hook；Codex skills 空。自動化層目前各自分開（Codex 端尚未建）——但這是「還沒做」不是「做不到」：Codex 有 hook 系統 + agentskills.io skill，補設定即可跨；只有 superpowers／Skill tool 編排不可跨（2026-06-01 查證更正原「跑不了反射」的過度判斷）。
- **Step 5 記憶**：Codex `use_memories=false` ✓（雷蒙也說 session 不該同步）。
- 我比清單多抓到的：靜態盤點抓不到「昨天有今天沒」的 AGENTS.md 漂移；那是查 git log + 對照昨天 changelog 才看到的。

**B 類 Simon 個人動作**

- ⏸ **拿雷蒙 ProKey 08 雙棲健檢助手交叉比對**：Simon 有連結、提供後用來補本次健檢沒想到的檢核點。純比對、不動設定。
- ⏸ **方案 B 待評估**：在 code 專案內跨目錄讀 vault（昨天「待續」項）；以及 user-memory 要不要進 vault 讓 Codex 也讀得到。
- ⏸ Substack「規則可攜 ≠ agent 可攜」角度：候選寫作題。
- ✅ 上下文三技巧：當既有習慣的提醒、無新動作。

## 原文要點

- **桌面版 vs 終端機**：小白、沒碰過終端機的，一律先用桌面版（這個月 Claude Code 跟 Codex 桌面版都變好用了），降低摩擦力先上手；之後想自由開發、寫小外掛再進終端機。
- **Claude Code vs Codex 四維差異**：模型（Claude Code 可換本地 LLM／API、Codex 只能 GPT 系列）、易用度（Codex 有繁中介面、Claude Code 仍全英文）、特色功能（Codex 生圖好、遠端手機／電腦控制好；Claude Code 自由度高、可一次拉開多個對話視窗平行跑）、價格（先訂 20 美金版試水溫，Codex 20 美金額度較大方；認真用建議 100 美金一個月，約台幣 3000、抵兩三個外包）。
- **Codex = 有手有工具的 ChatGPT**：以前 ChatGPT 要人工複製貼上餵檔，Codex 從一個專案資料夾出發、自行找本地檔、不限數量、有你給的所有工具權限（搜社群媒體的 MCP／API、發文到 WordPress／Facebook、寫電子報草稿），討論完直接幫你執行、不用自己搬運結果。
- **雙棲的本質（結論段）**：Claude Code 讀 `CLAUDE.md`、Codex 讀 `AGENTS.md`、Gemini 讀 `GEMINI.md`，三家檔名不同、Codex 不讀 CLAUDE.md。雷蒙的本體叫「核心規則」（放在他的 `000agent` 資料夾），三個檔名全做成捷徑指向同一份本體，只更新本體、三家同步。這就是工程師說的 SSOT（單一真實來源），目的是避免維護多份、檔案漂移。
- **記憶不被鎖**：Codex 有「啟用記憶」開關但記憶存在 Codex 雲端，搬到 Claude Code 就沒了；類比網路巨頭（Facebook／Google）把資料鎖在自家。雷蒙把記憶系統獨立放本地 `000agent/Memory/`（分大記憶、各種 feedback、reference、每日記憶幾層），三家都讀得到。
- **上下文管理三技巧**：（1）會看額度面板——Claude Code 在右下角看 content window 圓環 + 5 小時／一週用量，Codex 在左下角看剩餘用量、打斜線有「精簡」壓縮；模型選帶 em（1M context）的、effort 日常 high 夠用。（2）八成時手動壓縮（Claude Code 打 `/compact`），不要等滿了自動壓縮、會漏東西。（3）規劃文檔跟執行對話分兩個對話——規劃很吃上下文，規劃完寫成文檔、開新對話請它執行或 double review，省額度又提高正確率。
- **編輯文檔**：Codex 桌面版只能讀、要編輯點右上角用 VS Code（微軟開源）或 Mac 上更簡潔的 MacDown（影片口誤講成「MacEdit」、疑似口誤）開；VS Code 編輯完要 Ctrl/Cmd + S 才存。
- **影片剪輯案例（雙棲精神的示範）**：用別人做的 Video Spec Builder skill，先引導式問答產出 Video Spec（剪輯規劃），開新對話執行產出初稿，像對外包剪輯師那樣來回給回饋（橫剪直不要切到滿版、A copy 不要無聲版），滿意後把修正收斂成一個叫 Raymond Video Style 的個人 skill——AI 不會自己變聰明，是你把工作流個人化、再回寫給它才會。
- **安裝 skill 的正確問法**：丟 GitHub skill 連結時不要說「幫我安裝」，要問「這個適合我嗎／值得嗎」，讓 AI 評估 CP 值——雷蒙自己的 skill 已高度個人化，裝通用 skill 反而浪費 token 去找用不到的通用解；數位工作術方向：先個人化、再系統化、再自動化。
- **Computer Use 是最後手段**：Codex 可控制電腦（左上角外掛開 Computer Use／Chrome）、邊工作邊讓 AI 操作、手機端用 ChatGPT app 遠端控制家裡電腦；但極耗 token（玩單機遊戲幾分鐘燒 12% 週額度），只在工具沒 API／CLI／MCP 時才用。
- **權限三模式**：預設權限（每個動作都問、不建議）、自動審核（AI 判斷小事自己做、大編輯／刪除才問）、全部權限（最快但有風險）。雷蒙開全部權限，但用機制把「刪除」能力框起來不給 AI——刪除是最大風險動作。
- **作者立場**：選哪家像選神奇寶貝御三家，跟誰相處好選誰；重點不是哪家強，是養一隻「去哪家都能無縫接軌」的 agent。把 agent 養在本地、就不怕被公司鎖死、要跳槽好跳。6/13 有直播會詳講雙棲怎麼做。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-06-01-raymond-cc-vs-codex-dual-platform-agent)
## 原始連結
- https://youtu.be/d7qmp6gjpiU?si=Dd37KeQThMeA8S59
