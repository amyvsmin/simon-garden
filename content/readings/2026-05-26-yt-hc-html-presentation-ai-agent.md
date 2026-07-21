---
title: "HC 直播：HTML 簡報是 AI Agent 時代教學簡報的完全體"
date: 2026-05-26
published: 2026-05-24
type: 來源分析
url: "https://www.youtube.com/watch?v=ZNdaQJOu8AU"
concepts: [html-vs-markdown-ai-output, skill, disposable-ui-html]
projects: []
impact: medium
tldr: "HTML 簡報在 AI Agent 時代下可以做到最大程度客製化：加底圖、AI 生成圖標取代 emoji、串 Firebase 做即時互動（文字雲/投票）、滑桿視覺化展示。最後打包成 Claude Code skill，下次給內容就自動生成完整互動式教學簡報。"
stage: evergreen
icon: "⚡"
created: 2026-05-26
---

## 為什麼讀

收件箱自動收錄。vault 已有 [[html-vs-markdown-ai-output]] 概念（Thariq 原始論點 + NotebookLM 配音深入解析），這支直播是該概念在教學簡報場景的實作延伸。

## 摘要

HC 在直播中用 Claude Code 現場示範如何從零打造一份互動式 HTML 教學簡報。起點是 Anthropic 工程師 Thariq 提出的「HTML 取代 Markdown」論點——Markdown 是給程式讀的、HTML 是給人讀的。HC 把這個論點落地到教學場景：AI Agent 做完事要回報給人類，人類得讀懂才能做決策，而讀 Markdown 很吃力、讀 HTML 簡報省腦力。整場直播從純文字 HTML 簡報開始，逐步加底圖（gpt-image-2 生成）、用 AI 畫一張大圖放多個小圖標再裁切出來取代 emoji（比逐張生成省成本）、Firebase 即時互動（文字雲讓觀眾現場輸入）、滑桿視覺化（拖拉看 Markdown→HTML 的可讀性變化），最後把整個流程打包成 Claude Code skill。

<p align="center"><img src="assets/covers/2026-05-26-yt-hc-html-presentation-ai-agent-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[html-vs-markdown-ai-output]]：HC 對 Thariq 論點的補充——重點不只是「HTML 比較好看」，而是 AI Agent 時代下人類的注意力是稀缺資源。當你同時開三個 Agent 做事，每個 Agent 回報結果你都要讀，讀 Markdown 耗腦力、讀 HTML 省腦力，省下來的腦力讓你做更好的決策。超過 100 行的文件，HTML 的可讀性遠優於 Markdown。
- [[skill]]：Skill 是一組預寫好的指令和範本，讓 Claude Code 遇到同類任務時自動執行整套流程。HC 示範了完整的 skill 生成方式——先手動做一遍完整流程（生成底圖→替換 emoji→加互動→加視覺化），確認可行後打包成 skill，下次只要給內容就自動跑完。這跟雷蒙的「連續三次重複交代就該寫 Skill」原則一致。
- [[disposable-ui-html]]：HTML 簡報本質上就是用完即丟的客製化介面——AI 生成成本趨近於零，所以不需要維護舊檔，每次都針對當次需求重新生成反而更好。串 Firebase 之後還能做即時互動（文字雲、投票、選擇題），傳統 PowerPoint 或 NotebookLM 圖片式簡報做不到。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**：
- 無直接適用。Simon 目前沒有教學簡報需求，HTML 簡報 skill 的價值在教學場景

**B. Simon 個人動作類**：
- 公司資安教育訓練簡報目前用 PowerPoint。下次資安月報提到教育訓練排程時，評估切換成 HTML 簡報 + Firebase 互動（投票/文字雲），搭配 [[security-awareness-design]] 的情境式設計。預期效益：員工可以現場用手機參與互動（文字雲、情境投票），比純 PowerPoint 宣導的參與度高

## 原文要點

- **核心論點**：HTML 簡報是教學簡報的完全體，因為可以做到最大程度客製化，在 AI Agent 時代又可以快速修改
- **Markdown 給程式讀、HTML 給人讀**：Thariq 論點的實際對照——HC 開 Obsidian 筆記讓觀眾讀 Markdown 格式，大家一致說不好讀
- **人類注意力是稀缺資源**：AI Agent 做事用算力和上下文，人類判斷 Agent 結果用注意力和腦力。讀 Markdown 報告耗腦力，讀 HTML 簡報省腦力
- **四步驟逐步加料**：純 HTML 簡報 → 加底圖（gpt-image-2）→ 替換 emoji 為 AI 生成圖標（一張圖截多個，省成本）→ 加 Firebase 互動（文字雲即時顯示觀眾輸入）→ 加滑桿視覺化（Markdown↔HTML 可讀性對比）
- **NotebookLM 簡報的缺點**：圖片式簡報無法加互動功能、無法客製化；HTML 簡報可以加任何你想加的功能
- **打包成 skill**：做完一遍流程確認可行，打包成 Claude Code skill，下次給內容自動生成。用 Anthropic 的 Skill Creator 製作
- **成本**：gpt-image-2 一張約 NT$0.3，整場直播用 Sonnet 4.6，HC 表示 20 美金 Claude Pro 一般人用不完
- **翻車是常態**：HC 強調直播是現場實作不是先做好來表演，翻車很正常，用自然語言叫 AI 修就好

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-05-26-yt-hc-html-presentation-ai-agent)

## 原始連結

- https://www.youtube.com/watch?v=ZNdaQJOu8AU
