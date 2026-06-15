---
title: "跨平台可攜 AI Agent（雙棲 / SSOT + symlink）"
slug: cross-platform-agent
aliases: [雙棲 agent, 兩棲 agent, 跨家 agent, cross-platform agent, SSOT agent config, 單一真實來源 agent, AGENTS.md CLAUDE.md GEMINI.md 同步, agent portability, 可遷移 AI agent, 不被鎖定 agent]
category: AI
confidence: 已驗證
created: 2026-06-01
---

## 定義

把一隻 AI agent 的規則與記憶設計成「不綁特定供應商、可在 Claude Code、Codex、Gemini 之間無痛搬家」的做法。手段是單一真實來源（SSOT，Single Source of Truth）加捷徑（symlink）：本體只維護一份，各家用各自認得的檔名指向它。

## 關鍵面向

- **各家檔名不同、要靠捷徑橋接**：Claude Code 讀 `CLAUDE.md`、Codex 讀 `AGENTS.md`、Gemini 讀 `GEMINI.md`，而且 Codex 不會去讀 `CLAUDE.md`。直接維護三份會漂移：今天改了一份、切到另一家就「少認識你一點」。解法是真正的本體只放一份核心規則，三個檔名全做成 symlink 指向它，只更新本體、三家自動同步。
- **記憶放本地、別開平台內建記憶**：Codex 有「啟用記憶」開關，但那份記憶存在 Codex 自己的雲端、搬到 Claude Code 就消失。把記憶系統獨立放本地檔（分 feedback／reference／每日記憶幾層），三家都讀得到，才不會被一家鎖住。
- **資料層自動跨家、自動化層要移植但可跨**（2026-06-01 查證更正）：規則與記憶（純文字檔）能靠 symlink 直接跨家。平台原生自動化（hook、skill 觸發、MCP 設定）不會「自動」跟著走、要逐一移植；但 Codex 刻意鏡像了 Claude 的擴充模型——有近乎一對一的 hook 系統、skill 走同一套 agentskills.io 開放標準（同一份 SKILL.md 跨家通用）、MCP 可 JSON→TOML 轉。所以自動化層是「要重建設定」、不是「不可跨」。真正不可跨的只有 Claude 專屬編排引擎（superpowers、Skill tool 自動編排）。雙棲讓另一家「讀得到同一個大腦」，多數反射補設定後可重建、只有專屬編排跑不動。
- **目的是降低 lock-in**：養 agent 的目標不是綁一家，是去哪一家都能無縫接軌；類比網路巨頭把資料鎖在自家平台讓你搬不走，把記憶留在本地就是把搬家的自由拿回來。

## 應用場景

- Simon 工作場景：他 2026-05-31 已啟動雙棲——Claude Code（WSL）+ Codex（Windows）、Obsidian vault 當共享知識中介。Claude 側 CLAUDE.md 是 symlink 指向 vault 本體；Codex 側另寫一份 vault 根 AGENTS.md（針對「唯讀參考 + 第二雙眼睛」角色客製、非盲目 symlink），且 Codex 平台記憶已關閉（合本概念）。卡點在自動化層的「移植工」、不是「可行性」（2026-06-01 查證更正）：hook／skill 在 Codex 端尚未建，但 Codex 有對應的 hook 系統 + agentskills.io skill，補設定即可跨；只有 superpowers／Skill tool 編排是 Claude 專屬、不可跨。實際踩到的坑：那份 vault 根 AGENTS.md 一次 vault refactor 後就漂失了——獨立檔沒進版控、沒 symlink，正是本概念「可攜的是資料層、要有 SSOT 紀律才不漂移」的反面教材。
- 一般場景：擔心被單一 AI 供應商綁死、想保留隨時換家彈性的人，先把規則與記憶收進本地、用 symlink 接上各家檔名，比「全面切換」實用。

## 相關概念

- [[instructions-file]]：CLAUDE.md／AGENTS.md／GEMINI.md 這類「AI 常駐合約」檔，是本概念 symlink 的對象。
- [[tool-agnostic-thinking]]：思考層的「不綁工具」；本概念是設定層的落實。
- [[agent-os-competition]]：因為 Codex／Claude／Gemini 在搶桌面入口、跨家可攜才有現實價值。
- [[cross-provider-verification]]：雙棲打通後，可讓不同供應商模型互審、互補盲點。
- [[claude-md-reflexive-law]]：規則寫進本體、各家照讀，呼應「行為偏差先改規則」。

## 尚未解決的疑問

- ~~自動化層怎麼跨家？~~（2026-06-01 已解：Codex 有對應 hook 系統 + agentskills.io skill 標準，自動化層是「移植設定的工」、不是無解。）
- ~~記憶注入若不靠 hook，Codex 端要用什麼方式把記憶索引塞進每次對話？~~（2026-06-01 已解：Codex 的 SessionStart hook 可把純文字當開發者脈絡注入，等效 Claude 的 user-memory-inject。）
- 真正還沒解的卡點：跨作業系統跑腳本（WSL 的 bash／python 路徑 vs Windows 的 `py`／路徑）怎麼用「一份 SKILL.md + if-then 環境分支」維護而不裂成兩份；以及 `.agents/skills` 連結在 Windows + WSL 共用實體夾下怎麼建、兩端才都認得。

## 來源（自動維護）

- [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]
- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
