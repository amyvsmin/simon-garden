---
title: "Claude Code 的 CLAUDE.md 和 SKILL 教學，打造可重複使用的 AI 自動化工作流"
date: 2026-05-12
type: 來源分析
url: "https://raymondhouch.com/lifehacker/digital-workflow/claude-code-skill/"
inbox-id: "35ef85da-554f-8158-959c-ce8b356f1c4a"
concepts: [skill, instructions-file]
projects: []
created: 2026-05-12
---

## 摘要

雷蒙用一句話把 [[instructions-file]] 跟 [[skill]] 的分工講清楚：CLAUDE.md 是「記住你是誰」的入職手冊、Skill 是「記住怎麼做事」的 SOP。每次對話都載入的通用偏好放 CLAUDE.md、按需載入的特定任務流程放 Skill。文章再給判斷準則「連續三次在不同對話跟 AI 講同一件事 = 該寫成 Skill」、進化路徑（SKILL.md → references/ → scripts/ → 版本 → Plugin）、安全紅旗（陌生 Skill 先丟 AI 評估別無腦裝）、跟 GPTs/Gems 範式翻轉（從「人找工具」變「工具找人」）。

## 核心概念

- [[skill]]：Claude Skill = SOP / 工作說明書、教 AI 在特定領域怎麼做事
- [[instructions-file]]：CLAUDE.md = 入職手冊、放通用偏好；跟 Skill 互補

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- **驗證自己 KW γ + journal + course-notes 等 Skill 的設計符合雷蒙範式**：每個 Skill 都聚焦單一任務、CLAUDE.md 只放通用偏好（語言／回答長度／繁中規則）、敏感資料另外分專案 CLAUDE.md。整體分層跟雷蒙建議一致、不必重構。
- **「三次重複交代 = 寫 Skill」判準可以反向掃描**：未來感覺「又在跟 AI 重複講」時就直接觸發新 Skill 設計。最近一次符合的場景是 substack-publish skill（連續三次發 Substack 都要交代 cover/H2/italic 檢查）、已經做成 skill。
- **進化路徑提醒第三步是上限**：大部分人到 references/ 就夠、不要過早追求 Plugin 化。Simon 目前 KW γ 已經有 references/、course-notes 跟 weekly-review 還停在單 SKILL.md、符合「不過度設計」原則。
- **GPTs/Gems 範式翻轉的價值**：Simon 從 GPTs 切過來最大感受就是不必再記「A 任務找 A 機器人」、直接講需求 Claude 自己抓對應 skill 跑。這個體感跟雷蒙描述完全一致、給 Triforce 共學團或新手介紹 Claude Code 可以直接借這個說法。
- **安全紅旗值得轉達**：未來幫朋友／同事推薦 Skill 時、強調「先把網址丟 AI 評估再裝」、避免 superpowers／example-skills 以外的來源造成資安問題。

## 原文要點

- Skill = 工作 SOP；CLAUDE.md = 入職手冊；別把整本 SOP 塞進簡介
- Skill 結構：description（觸發）+ 步驟 + references（資料）+ scripts（自動化）
- 兩種觸發：自動（description 比對）+ 手動（slash command）
- 兩個位置：`~/.claude/skills/`（全域）+ 專案 `.claude/skills/`（局部）
- 雷蒙自己寫了 25 個 Skill、最大價值在「個人知識封裝」（寫作風格／個人 API 設定／工作流程）
- GPTs/Gems 痛點：每包知識散落在不同對話機器人、要先想「找誰」才能做事
- Skill 解法：description 自動匹配、AI 自己決定調用哪個 Skill、「工具來找人」
- 新手三步路徑：裝幾個實用 Plugin → 連續三次重複講就寫 Skill → 穩定後考慮打包成 Plugin
- 進化路徑：SKILL.md → references/ → scripts/ → 版本與 changelog → Plugin（大部分人到第三步就夠）
- 安全紅旗：Skill 可內含 scripts/ 跑本機程式、陌生 Skill 先丟 AI 評估再裝
- Q&A：非工程師可寫（純 Markdown）；可請 Claude「幫我把這段對話整理成 Skill」

## 原始連結

- https://raymondhouch.com/lifehacker/digital-workflow/claude-code-skill/
