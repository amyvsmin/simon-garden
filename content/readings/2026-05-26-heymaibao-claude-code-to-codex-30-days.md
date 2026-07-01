---
title: "用了 12 個月 Claude Code 後切到 Codex，30 天心得整理（脈報思思）"
date: 2026-05-26
published: 2026-05-25
type: 來源分析
url: "https://heymaibao.com/claude-code-to-codex-30-days/"
inbox-id: "36cf85da554f81879261ef9633c85533"
concepts: [cross-provider-verification, sycophancy, agent-os-competition, instructions-file]
projects: []
impact: medium
tldr: "X 用戶 Avid 用了 12 個月 Claude Code 後切到 Codex 30 天，脈報拆解後的核心洞察：跨供應商交叉驗證（Codex 寫、Claude Code 審）比全面切換更實用，AGENTS.md 開放標準是不被廠商鎖定的真正投資。"
stage: evergreen
icon: "⚡"
created: 2026-05-26
---

## 為什麼讀

收件箱自動收錄。正在追蹤 [[agent-os-competition]] 這條線——Codex 跟 Claude Code 的競合關係直接影響 Simon 的工具策略選擇。

## 摘要

脈報（思思）拆解 X 用戶 Avid 從 12 個月 Claude Code 轉用 Codex 30 天的長推文。文章定位是「Codex 心智模型更新」而非「轉換指南」——Avid 沒給 benchmark 或成本對比，整篇是主觀體驗整理，文末有 Sonnet 4.6 編輯的 disclaimer。脈報主筆判斷：文章真正最被低估的洞察不是「該不該轉 Codex」，而是 [[cross-provider-verification]]——讓兩個不同供應商的模型一個寫、一個審，利用各自盲點互補。對已養成 Claude Code 習慣的人，新增一個 reviewer 角色比重建整套工作流容易太多。

<p align="center"><img src="assets/covers/2026-05-26-heymaibao-claude-code-to-codex-30-days-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[cross-provider-verification]]：文章最值錢的一句是「Generation is solved. Verification is the bottleneck.」五個並行 cloud PR 就是五次出 bug 的機會。核心問題是 [[sycophancy]]（諂媚傾向），寫程式碼的模型偏向覺得自己寫的對。結構解法有兩層：Codex 內建的 `auto_review`（同供應商 fresh context reviewer）和 cross-provider verification（跨供應商，例如 Codex 寫、Claude Code 審）。
- [[sycophancy]]：AI 模型自評偏差。Avid 主張 cross-provider verification 是 production code 的最低標準習慣，因為同一模型家族會有共同盲點。
- [[agent-os-competition]]：Codex 2026 已不是「autocomplete」，而是五個入口的完整 agentic 平台。工作節奏從「寫 + 等」變成「排 + 審」。但 Avid 自己在結論也寫：「如果 Claude Code 還符合你的 workflow，繼續用就好。」trade-offs 是個人化的。
- [[instructions-file]]：AGENTS.md 是開放標準（open standard），Codex、Cursor、Gemini CLI、Windsurf、GitHub Copilot 都讀同一份。寫一次整條 toolchain 共用，合計上限 32 KiB、建議 500 字內。脈報主筆判斷：這件事比「該不該轉 Codex」更重要，因為是不會被廠商鎖死的投資。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- **跨工具驗證習慣可先在 Claude Code 內部模擬**：目前 Simon 沒用 Codex，但可用 subagent fresh context review 模擬 cross-provider 的「第二雙眼睛」邏輯。例如在 KW γ 收錄流程或 course-notes 完成後，開一個不帶前文的 subagent 做品質抽查。不過這仍是同一模型家族，效果有限。
- **AGENTS.md 可留意但暫不行動**：Simon 目前只用 Claude Code，沒有多工具 toolchain 需求。等未來加入 Codex 或 Cursor 時，一份 AGENTS.md 可直接複用 CLAUDE.md 裡的核心規則。但現階段沒有必要另建檔案。

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- **不急著轉 Codex**：文章作者自己在結論寫「繼續用 Claude Code 就好」，脈報主筆也同意。Simon 目前 Claude Code 用得順手，trade-offs 是個人化的。
- **季度性回看 agent OS 競賽動態**：把這篇跟 [[2026-05-16-bnext-agent-os-codex-vs-claude]] 和 [[2026-05-20-bnext-google-io-2026-gemini-spark]] 三篇放一起，下次 agent 工具評估時一起複查。
- **10 個常見錯誤 checklist 可存**：文章整理的開發者使用 agentic 工具的 10 個常見錯誤（任務模糊、多任務塞同一個 prompt、跳過 plan、沒寫指令檔、權限太高、太多 MCP、讓模型自評、拿 compile success 當正確、過度並行、沒邊界的 Goal），多數也適用 Claude Code。

## 落地動作與效益

> 2026-05-31 更新：本段記錄「對 Simon 的應用」部分判斷的後續落地；上方「當下想法」段保留原貌不動。

- **「AGENTS.md 暫不行動」「不急著轉 Codex」已推翻 → Codex 並用正式啟動**。Simon 在 Windows 裝了 Codex，決定 Claude Code（WSL，芙莉蓮）和 Codex 兩個工具並用，用 Obsidian vault 當共享知識中介（Codex 只讀、不在兩邊重複維護）。芙莉蓮草了一份 vault 根 `AGENTS.md`：繁體中文自檢列最高優先、降低 AI 語感、vault 導航、精簡查法、wikilink 引用、把 Codex 定位成「參考知識來源 + 第二雙眼睛」。
- **驗證結果（雙關卡都過）**：Codex 在 vault 目錄啟動會自動載入 AGENTS.md；回答全程繁中、零簡體；會主動順著指路去讀 `0-context/rules/vault-auto-retrieval.md`；問它本篇「對 Simon 的應用」時，能如實檢索、答出 KW γ／course-notes 這類個人專屬內容、引用格式標準。雙棲方案 A（vault 當工作目錄開 Codex）成立。
- **cross-provider verification 從「模擬」升級為「真跨家族」**：A 類原構想是用同家族 subagent 模擬第二雙眼睛、效果有限；現在有了 Codex，可做真正跨供應商互審（一個寫、另一個審），補上同家族共同盲點。
- **待續**：vault 規則檔內部有些路徑是 WSL（芙莉蓮）視角的 `~/.claude/...`，Codex 在 Windows 對應不到 vault 以外的檔；目前不影響讀 vault 知識。方案 B（在 code 專案內跨目錄讀 vault）待評估。

## 原文要點

- Avid 切換動機三層：rate limits、workflow friction、desktop app 體驗。強調不是某天突然爆炸，而是「trade-offs 變了」
- Codex 2026 五入口：CLI（scripted workflow）、IDE 擴充（互動編輯）、Desktop app（多 thread + Computer Use + Goal mode）、Cloud（async 背景並行 PR）、In-app browser + Computer Use（UI 驗證）
- AGENTS.md 開放標準：Codex、Cursor、Gemini CLI、Windsurf、GitHub Copilot 共讀。monorepo 可子目錄各放一份
- Skills 是 reusable workflow（放 `.agents/skills/`）、50 個 Skill 平常零 context 成本；推薦三個 starter：`open-pr`、`new-feature`、`investigate`（診斷不修）
- Sub-agents 跑獨立 context、2026-03 推出 `@nickname` addressing
- Goal mode 2026-05 轉 stable，需設 max PR / max LoC / CI gate / stop condition
- Cross-provider verification 是文章真正的 sleeper insight（被低估的洞察）
- 10 個常見錯誤分四類：prompt 層（模糊、多任務、跳過 plan）、設定層（沒指令檔、權限太高、MCP 太多）、驗證層（自評、compile≠correct）、邊界層（過度並行、Goal 沒邊界）
- 文末有 Sonnet 4.6 編輯 disclaimer

## 原文全文

## 原始連結

- https://heymaibao.com/claude-code-to-codex-30-days/
