---
title: "Dustin Obsidian × Claude Code 跨專案知識庫：wikilink 突破樹狀結構、漸進長出 vault"
date: 2026-05-13
type: 來源分析
url: "https://youtu.be/EhMKfG1dvnI"
inbox-id: "35ff85da-554f-8163-912a-c5e8f13fce34"
concepts: [obsidian-claude-code-workflow, obsidian-cli-plugin, wikilink-cross-folder, progressive-vault-growth, claude-md-dual-nav, second-brain]
projects: []
created: 2026-05-13
---

## 摘要

Dustin 示範用 Obsidian 當跨專案知識庫主軸，解決 Claude Code 在多專案間的「上下文視窗滿了」「跨專案連線斷裂」兩大痛點。核心是 wikilink 突破傳統樹狀資料夾結構——讓不同子目錄下的文件能跨層連線、AI 讀到某檔案時自動跳到關聯檔案讀全貌；不依賴向量資料庫、純語意連線。實作建議是 Plan Mode 起跑（請 AI 調查現有專案 + 上網找用法 + 問你問題）、安裝官方 Obsidian skill 讓 Claude 用 CLI 操作 vault；最重要的觀念是知識庫不是一夜建好的，從 projects + pillars 兩個資料夾起步、隨著使用逐步長出 decisions／日誌／週報／personal／insight／書籤等等。

## 核心概念

- [[wikilink-cross-folder]]：wikilink 跨資料夾連線、讓 AI 讀某檔案時自動跳到關聯檔案、不再被樹狀結構困住
- [[progressive-vault-growth]]：知識庫從 projects + pillars 兩個起步、隨使用慢慢長出其他資料夾、不要一開始就追求完整
- [[obsidian-claude-code-workflow]]：vault 當資料層、Claude Code 當讀寫處理層的工作流；本篇補了「跨專案連線」觀點
- [[obsidian-cli-plugin]]：Obsidian 官方 skill 讓 Claude Code 透過 CLI 跟 vault 對話
- [[claude-md-dual-nav]]：根目錄 CLAUDE.md 當總目錄、各資料夾 instructions.md 當局部地圖
- [[second-brain]]：個人知識管理目標、釋放大腦做思考決策

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
1. 對照 Simon 自己 vault `~/vaults/SimonVault/` 的七頂層 lowercase-dash 結構（2026-05-05 完成 1b 重構），確認當前架構已內建跨資料夾 wikilink
2. Dustin 的「漸進長出」很對 [[validate-then-upgrade]] 偏好，可以對應 Knowledge Wiki v0.1 → v1.0 演進軌跡
3. 跨專案連線實際應用：Simon-Agent 的 project memory、SimonVault 的 reading／concept、Simon-Journal 的日記若能 wikilink 互通，Claude 開任何專案都能秒進入全局視角
4. 「不要一夜建好」對 [[surface-cost-first]] 反向印證——一開始就推完整方案反而負擔重

## 原文要點

- 核心痛點：Claude Code 上下文視窗會滿、跨專案資訊斷裂
- 解法：Obsidian wikilink 突破樹狀結構限制、AI 順著連線跨資料夾讀
- 起步流程：先建空 vault → 安裝 Obsidian CLI → Plan Mode 請 AI 調查 + 上網找用法 + 問你問題 → 看計畫再執行
- Dustin 自己的 vault 結構：projects／pillars／daily logs／weekly review／personal／decisions／insights／bookmarks（漸進長出）
- 維護方式：完全交給 AI，不親自打字；wikilink 也讓 AI 按語意自動建
- 官方 Obsidian skill 是教 AI 怎麼用 CLI 跟 Obsidian 對話的技能包

## 原始連結

- https://youtu.be/EhMKfG1dvnI
