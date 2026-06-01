---
title: "跨平台可攜 AI Agent（雙棲 / SSOT + symlink）"
slug: cross-platform-agent
aliases: [雙棲 agent, 兩棲 agent, 跨家 agent, cross-platform agent, SSOT agent config, 單一真實來源 agent, AGENTS.md CLAUDE.md GEMINI.md 同步, agent portability, 可遷移 AI agent, 不被鎖定 agent]
category: AI
confidence: 已驗證
created: 2026-06-01
query-count: 0
---

## 定義

把一隻 AI agent 的規則與記憶設計成「不綁特定供應商、可在 Claude Code、Codex、Gemini 之間無痛搬家」的做法。手段是單一真實來源（SSOT，Single Source of Truth）加捷徑（symlink）：本體只維護一份，各家用各自認得的檔名指向它。

## 關鍵面向

- **各家檔名不同、要靠捷徑橋接**：Claude Code 讀 `CLAUDE.md`、Codex 讀 `AGENTS.md`、Gemini 讀 `GEMINI.md`，而且 Codex 不會去讀 `CLAUDE.md`。直接維護三份會漂移：今天改了一份、切到另一家就「少認識你一點」。解法是真正的本體只放一份核心規則，三個檔名全做成 symlink 指向它，只更新本體、三家自動同步。
- **記憶放本地、別開平台內建記憶**：Codex 有「啟用記憶」開關，但那份記憶存在 Codex 自己的雲端、搬到 Claude Code 就消失。把記憶系統獨立放本地檔（分 feedback／reference／每日記憶幾層），三家都讀得到，才不會被一家鎖住。
- **可攜的是資料層、不是自動化層**：規則與記憶（純文字檔）能靠 symlink 跨家。但平台原生的自動化——Claude Code 的 hook（開場注入記憶）、Skill 自動觸發、MCP 設定——是綁定該平台的，換家不會跟著走。雙棲讓另一家「讀得到同一個大腦」，不保證「跑得動同一套反射」。
- **目的是降低 lock-in**：養 agent 的目標不是綁一家，是去哪一家都能無縫接軌；類比網路巨頭把資料鎖在自家平台讓你搬不走，把記憶留在本地就是把搬家的自由拿回來。

## 應用場景

- Simon 工作場景：他 2026-05-31 已啟動雙棲——Claude Code（WSL）+ Codex（Windows）、Obsidian vault 當共享知識中介。Claude 側 CLAUDE.md 是 symlink 指向 vault 本體；Codex 側另寫一份 vault 根 AGENTS.md（針對「唯讀參考 + 第二雙眼睛」角色客製、非盲目 symlink），且 Codex 平台記憶已關閉（合本概念）。卡點在自動化層：hook／skill 自動觸發是 Claude Code 原生、Codex 不吃，所以 Codex 是「讀得到大腦、跑不了反射」。實際踩到的坑：那份 vault 根 AGENTS.md 一次 vault refactor 後就漂失了——獨立檔沒進版控、沒 symlink，正是本概念「可攜的是資料層、要有 SSOT 紀律才不漂移」的反面教材。
- 一般場景：擔心被單一 AI 供應商綁死、想保留隨時換家彈性的人，先把規則與記憶收進本地、用 symlink 接上各家檔名，比「全面切換」實用。

## 相關概念

- [[instructions-file]]：CLAUDE.md／AGENTS.md／GEMINI.md 這類「AI 常駐合約」檔，是本概念 symlink 的對象。
- [[tool-agnostic-thinking]]：思考層的「不綁工具」；本概念是設定層的落實。
- [[agent-os-competition]]：因為 Codex／Claude／Gemini 在搶桌面入口、跨家可攜才有現實價值。
- [[cross-provider-verification]]：雙棲打通後，可讓不同供應商模型互審、互補盲點。
- [[claude-md-reflexive-law]]：規則寫進本體、各家照讀，呼應「行為偏差先改規則」。

## 尚未解決的疑問

- 自動化層怎麼跨家？hook 與 Skill 自動觸發是 Claude Code 專屬，Codex 要達到等效得另寫一套機制，目前沒有現成解。
- 記憶注入若不靠 hook，Codex 端要用什麼方式把記憶索引塞進每次對話？

## 來源（自動維護）

- [[2026-06-01-raymond-cc-vs-codex-dual-platform-agent]]
- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
