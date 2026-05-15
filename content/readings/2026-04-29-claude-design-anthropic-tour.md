---
title: Claude Design — Anthropic 對話式設計工具導覽
date: 2026-04-29
type: 來源分析
url: https://www.youtube.com/watch?v=JxaI6HK2onc
tags: [claude-design, design, ai-tools]
concepts: [design-system, sketch-prompt, hi-fi-prototype, design-handoff, iterative-tweaks]
inbox-id: 34ef85da-554f-8189-ba91-c3afd2c7eb9d
notion-page-id: 351f85da-554f-81a7-8a21-d32aea7bf02a
---

## 摘要

Claude Design 是 Anthropic 在 Claude 付費方案內推出的對話式設計工具，定位介於 Figma 與 Canva 之間，強調用自然語言加上草圖、AI 影片素材，產出簡報與 High Fidelity 網站。影片以「高中天文社小明辦繞月任務觀測營」為案例，從建立未來科技風設計系統開始，串接 Dribbble 截圖、ChatGPT 概念圖、Freepik AI 動畫，再透過 Edit、Comment、Draw、Tweaks 四種編輯模式迭代產出。最終以 Claude Code 接手部署到 Netlify，並用 Connector 完成表單收集，展示完整的設計到上線一條龍流程。

## 核心概念

- [[design-system]]：把 Logo、色票、字體封裝成可重用品牌語言
- [[sketch-prompt]]：用圓形矩形加文字註解描述版面，補強純文字提示
- [[hi-fi-prototype]]：High Fidelity 直接產出可上線網頁，跳過傳統 Wireframe
- [[design-handoff]]：Claude Design 完成視覺、Claude Code 接手部署到 Netlify
- [[iterative-tweaks]]：Edit ／ Comment ／ Draw ／ Tweaks 四模式對應不同協作層級

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- **資安 KPI 月簡報**：每月需固定產出簡報，可試用 Claude Design 的 Slide Deck 模式 + Speaker Notes 把講稿藏到備忘稿，讓主管 Sam 看到的版面更乾淨
- **ISO 27001 文件視覺化**：資產盤點與風險評估的流程圖、政策架構圖，可用 Hi-Fi 模式快速產草稿給跨部門看，比 Visio 起步快
- **Knowledge Wiki 概念頁設計**：Claude Design 的「設計系統」概念可借鑑到 Notion 概念頁固定結構，思考是否要為 Knowledge Wiki 訂一套視覺規範（顏色、emoji、callout 用法）
- **n8n 串接思路**：Netlify Connector 自動部署的概念，跟 n8n 把多個服務串成工作流的思維同源，可加深 Simon 對「服務間自動化」的理解

## 原文要點

- Claude Design 在 Claude 付費方案網頁版左側側邊欄即可進入，使用獨立的額度，達上限後需等下一週期
- 設計系統可從 GitHub 專案、Figma、Logo、字體匯入，沒有專業素材時可用 Dribbble 截圖或 AI 生成圖當參考
- 簡報模式提供 Speaker Notes 開關、Sketch 草圖工具、模型選擇（Sonnet 平衡品質速度／Opus 4.7 較強）
- 編輯有四種模式：Edit 直接改、Comment 對話改、Draw 畫箭頭指引改、Tweaks 滑桿微調（圓角、強調色等）
- 網站模式分 Wireframe 與 High Fidelity，可嵌入 Freepik 用 Seedance 2.0 或 Kling 3.0 生成的 MP4 影片當主視覺
- 上線流程：Claude Design 產出資產 → 複製指令到 Claude Code 或下載壓縮檔 → Claude 桌面版開啟資料夾 → Connectors 串 Netlify → 一段提示詞觸發部署 → 表單資料自動進 Netlify Forms 後台

## 原始連結

- YouTube：https://www.youtube.com/watch?v=JxaI6HK2onc
- 來源：影片字幕 v0.3 路徑（yt-transcript.py、原語言）
- 字幕長度：12,838 字
