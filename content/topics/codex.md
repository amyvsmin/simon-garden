---
title: Codex
slug: codex
type: topic
topic_kind: entity
entity_type: product
status: living
aliases: [Codex]
created: 2026-07-04
last_updated: 2026-07-04
tags:
  - ai-tool
  - codex
  - openai
  - coding-agent
---

# Codex

> 實體彙整頁（entity）。把散在多篇 reading 與多個 concept 裡、關於 Codex 這個產品的東西收攏成一頁：它是什麼、我目前怎麼定位它、它在我知識庫裡的各個切面（連出去、不重抄）、怎麼一路演化、還有哪些沒拍板。深入單一切面的內容留在各自的 concept。

## 一句話身份

Codex 是 OpenAI 推出的 agentic 軟體開發平台，不是「更聰明的自動完成工具」：能讀 codebase、寫測試、review PR、控制電腦、生圖、排程任務，還能跨對話記住偏好，五個入口（CLI／IDE 擴充／Desktop／Cloud／In-app browser + Computer Use）對應不同的人機協作緊密度。

## 我的當前定論

- **定位**：我的雙棲 agent 第二平台（Windows 端），跟 Claude Code（WSL，芙莉蓮本體）並用；vault 當共享知識中介，Codex 現階段定位是「參考知識來源 + 第二雙眼睛」。細節見 [[cross-platform-agent]]。
- **對抗式審查的一端**：跨供應商互審的實作方式之一是「Codex 寫、Claude Code 審」，利用不同模型家族各自的盲點互補；細節見 [[cross-provider-verification]]。
- **強在中文與執行力**：中文介面對小白友善、生圖與中文排版品質好（不易黏字）、Computer Use／手機遠端控制做得比 Claude Code 順；簡報場景已有實測的六步驟 SOP（建本機資料夾→指定工作區→設權限→選模型與努力程度→確認資料並產大綱→選純圖片或可編輯 PPTX 路線產出），另有進階技巧可把跑通的工作流存成 Skill 復用。
- **雙棲工程細節比想像脆弱**：2026-05-31 建好的 vault 根 `AGENTS.md`，隔天一次 vault refactor 後就消失，因為從未進版控；MCP 工具（Claude 側 notebooklm-mcp／claude.ai 連 Gmail 等 vs Codex 側 node_repl + OpenAI plugins）格式不同（JSON vs TOML）、完全未轉換同步，是雙棲花工最多的一塊。
- **自動化層可移植、非天生共享**：Codex 有近乎一對一的 hook 系統（SessionStart／PreToolUse 等）與 agentskills.io 開放標準的 skill，能跟 Claude Code 對應但要逐一移植設定；真正不可跨的只有 superpowers 與 Claude 的 Skill tool 自動編排層。

## 切面地圖

Codex 沒有專屬 concept，在我知識庫裡是被這些跨平台 concept 各咬一個角度（一行帶過、深入內容在該 concept）：

- [[agent-os-competition]]：Codex 是桌面代理人作業系統競賽的主角之一，跟 Claude／Grok／Gemini 搶桌面入口。
- [[cross-platform-agent]]：雙棲分工的核心案例，Claude Code（WSL）＋ Codex（Windows）並用的實際落地。
- [[cross-provider-verification]]：對抗式審查跨平台執行的核心案例，Codex 寫、Claude Code 審。
- [[claude-code-goal-command]]：Codex 是三家（Claude Code／Codex／Hermes Agent）同時推出 `/goal` 功能之一。

其餘只在 `agent-harness-hygiene`、`ai-skill-security`、`instructions-file`、`text-visual-separation`、`self-growing-knowledge-base`、`prompt-injection`、`human-ai-collaboration`、`sycophancy` 裡被淺提（當配音工具或對照例子），不納入切面、避免灌水。

## 演化時間軸

- **2026-05-15**：Every 創辦人 Dan Shipper 從 Claude Code 轉 Codex Desktop 的決策案例曝光，「代理人作業系統競賽」命題成形，關鍵不再是模型優劣，而是應用層（速度、子代理、自動化推送）。來源 [[2026-05-16-bnext-agent-os-codex-vs-claude]]。
- **2026-05-24**：一支 YouTube 影片指出 Claude Code、Codex、Hermes Agent 三家幾乎同時推出同名 `/goal` 功能，對抗「context anxiety（上下文焦慮）」讓長任務不再提前收工。來源 [[2026-05-26-yt-goal-evaluation-rubric-long-tasks]]。
- **2026-05-24**：X 用戶 Avid 發文，分享用了 12 個月 Claude Code 後轉用 Codex 30 天的心得；脈報點出真正的洞察不是「該不該轉」而是跨供應商交叉驗證（Codex 寫、Claude Code 審）。Simon 隨後在 2026-05-31 正式啟動雙棲，Claude Code（WSL）＋ Codex（Windows）並用、vault 當共享中介。來源 [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]。
- **2026-05-29**：宣家教學示範用 Codex + Obsidian 十分鐘搭自生長知識庫（Karpathy 自生長理論落地）；Simon 據此在 KW γ 收錄流程加了一步「Substack 寫作角度掃描」。來源 [[2026-05-31-codex-obsidian-self-growing-kb]]。
- **2026-06-01**：雙棲健檢發現，前一天建好、雙關卡驗證過的 vault 根 `AGENTS.md` 因從未進版控，一次 vault refactor 後就消失，雙棲橋斷裂；同日也查證推翻「自動化層不可跨」的原始判斷——Codex 其實有對應 hook 系統與 agentskills.io skill 標準，只是要逐一移植，不是搬不動。來源 [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]。
- **2026-06-12**：經理人林柏源示範 Codex 六步驟簡報 SOP，確立「純圖片視覺 PDF」與「可編輯 PPTX」兩條路線的選擇邏輯。來源 [[2026-06-12-managertoday-codex-ai-presentation]]。

## 矛盾／未決

- **雙棲橋現狀待查**：2026-05-31 建好、雙關卡驗證過的 vault 根 `AGENTS.md`，2026-06-01 發現因從未進版控、一次 vault refactor 後就消失；Simon 當時要求「只出健檢報告、不動設定」，這篇之後有沒有補建、有沒有進版控，未見後續紀錄。來源 [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]。
- **MCP 工具兩邊未同步**：Claude 側（notebooklm-mcp／claude.ai 連 Gmail、Calendar、Drive、Notion 等）跟 Codex 側（node_repl + OpenAI plugins）工具完全不同、格式 JSON vs TOML；該篇明講這是「雙棲真正花工的一塊」，但未見後續轉換進度。來源 [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]。
- **Codex 自身的 skill／MCP 供應鏈風險未見盤點**：[[2026-06-13-pansci-claude-skill-security]] 詳細分析的是 Claude Skill 生態的三個真實攻擊案例；Simon 同時跑 Codex 端 skill，但同一套供應鏈風險邏輯目前 vault 未見針對 Codex 的對應分析。

## 來源（自動維護）

核心素材：

- [[2026-05-16-bnext-agent-os-codex-vs-claude]]
- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
- [[2026-05-31-codex-obsidian-self-growing-kb]]
- [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]
- [[2026-06-12-managertoday-codex-ai-presentation]]

半相關（Codex 只當配音工具、比較對象或收錄管線註記）：

- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
- [[2026-05-26-yt-goal-evaluation-rubric-long-tasks]]
- [[2026-05-29-opus-4-8-coding-benchmark]]
- [[2026-06-02-owasp-llm-top-10-genai-security]]
- [[2026-06-05-aj-chatgpt-presentation-flow]]
- [[2026-06-05-dustin-claude-code-harness-cleanup]]
- [[2026-06-13-pansci-claude-skill-security]]
- [[2026-06-15-bnext-loop-engineering]]
- [[2026-06-15-papaya-hermes-agent-tutorial]]

相關 concept：[[agent-os-competition]]、[[cross-platform-agent]]、[[cross-provider-verification]]、[[claude-code-goal-command]]

## 維護（entity 頁更新規則）

- **更新時機**：之後有新 reading 觸及 Codex，就回這頁追加來源、刷新「我的當前定論」與「演化時間軸」、把過時的疑問結掉。frontmatter `status: living` 代表這頁要保持當前、不是寫完封存。
- **不重抄**：切面的深入內容永遠留在各自 concept，本頁只連、不複製。
