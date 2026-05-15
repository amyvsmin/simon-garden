---
title: Obsidian + AI 第二大腦工作流（心心）
date: 2026-05-02
type: 來源分析
url: https://youtu.be/RZEb6FLZSHE
tags: [obsidian, claude-code, second-brain, knowledge-management]
concepts: [second-brain, obsidian-claude-code-workflow, claude-md-dual-nav, progressive-disclosure, daily-notes, claude-code]
inbox-id: 353f85da-554f-81d0-abdf-fa5ada5a1c6a
notion-page-id: 354f85da-554f-81a1-936c-f20f74e92c94
---

## 摘要

心心介紹從 Milanote 遷到 Obsidian + Claude Code 打造個人 AI 第二大腦的完整工作流。vault 結構以 context/ 放個人資訊、每個資料夾放 instructions.md 給 AI 局部地圖、根目錄 CLAUDE.md 當入口。雙層導航 + 漸進式披露是省 token 關鍵，AI 只讀必要資料夾。搭配 daily notes 跨 session 繼承脈絡、Apple Books highlights 插件、Web Clipper、iPhone 一鍵語音、Canvas、Terminal 插件與 MCP 外接，Skills 跟著 vault 版本一起演進。理念承接 Andrej Karpathy「個人結構化知識系統」，強調本地化、私有化、隨時間變強。

## 核心概念

- [[second-brain]]：把大腦不擅長的記憶、整理、檢索外包給數位系統的個人知識管理範式
- [[obsidian-claude-code-workflow]]：Obsidian vault 當第二大腦資料層、Claude Code 當讀寫與處理層的組合
- [[claude-md-dual-nav]]：vault 根目錄 CLAUDE.md + 各資料夾 instructions.md 當局部地圖的兩層 AI 導航設計
- [[progressive-disclosure]]：AI 不一次掃整個資料庫，只在需要時才讀對應資料夾或檔案的 token 控制心法
- [[daily-notes]]：AI 每天結束時把工作內容寫進當日的 daily notes 檔，下次 session 只讀最近幾天即可恢復脈絡
- [[claude-code]]：實作載具

## 對 Simon 的應用

- **重新審視 SimonVault 結構**：現有 vault 以證照課程分路（Google-Cybersecurity、CCNA、SSCP），可加一層 `context/` 放個人資訊與表達風格、14 個課程資料夾分別加 instructions.md
- **CLAUDE.md 雙層化**：現有 `~/.claude/CLAUDE.md`（全域） + `~/projects/Simon-Agent/CLAUDE.md`（專案）是兩層，可擴展到各 vault 課程資料夾一層狀態說明 instructions
- **加 daily notes 機制**：現行是 Simon-Journal 手寫日記；可加一條 Claude Code 自動寫「今天 AI 做了什麼」到 daily notes，供下次 session 讀
- **跨 vault 交互**：讓 Knowledge Wiki（Notion）與 Obsidian vault 表達不同身份——前者是「者」「概念」的庫，後者是「課程內容」「技術筆記」的庫。Knowledge Wiki 可「來源」關聯課程筆記

## 原文要點

- **vault 結構設計**：`context/`（個人資訊、表達風格、佈架）+ 隸屬資料夾（`projects/`、`books/`、`daily/` 等）+ 根目錄 CLAUDE.md
- **雙層導航**：root CLAUDE.md 講「我是誰」+「資料夾地圖」；各資料夾 instructions.md 講「這裡該怎麼讀、怎麼寫」
- **省 token 心法**：漸進式披露，AI 不掃全 vault、按需 fetch；daily notes 讓最近 3-7 天越讀越保鮮
- **輸入整合**：Apple Books 標註插件、Web Clipper、iPhone Action button + Shortcuts 語音輸入 daily notes
- **外接能力**：MCP 接 Notion、Gmail、Calendar；Canvas 思維導圖；Terminal 插件
- **Skills**：放 vault 裡，git 追蹤，跟筆記一起演進
- **理念承接**：Karpathy「個人結構化知識系統」，本地化 + 私有化 + 隨時間變強

## 原始連結

https://youtu.be/RZEb6FLZSHE
