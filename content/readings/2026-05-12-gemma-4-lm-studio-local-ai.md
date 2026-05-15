---
title: "Gemma 4 + LM Studio：把本機 AI 完整建到電腦／手機，含 MCP 跟 VS Code 串接"
date: 2026-05-12
type: 來源分析
url: "https://youtu.be/r5M0W66xcGc"
inbox-id: "35ef85da-554f-81b4-8096-e21a6a184fc7"
concepts: [local-llm, lm-studio, mcp, cli, skill]
projects: []
created: 2026-05-12
---

## 摘要

Google Gemma 4 開源模型四版本（E2B 手機平板／E4B 一般筆電／26B、31B 高階推理）+ LM Studio 圖形介面工具的完整本機 AI 入門。教學從硬體檢測（Can I Run AI Locally 網站偵測 GPU／VRAM）、模型挑選（參數量／推理能力／視覺／工具標籤）、Context Length 跟 System Prompt 設定，一路到三個進階整合：手機端 Google AI Edge Gallery 影像／音訊分析、Brave Search MCP 接入網頁搜尋、檔案管理 MCP 整理本機檔案、VS Code Continue 擴充寫程式（便利貼瀏覽器擴充功能 demo）。整個工作流不用網路不用訂閱費、資料完全留在本機。

## 核心概念

- [[local-llm]]：本機 LLM 的能力邊界、隱私優勢、離線可用、硬體門檻
- [[lm-studio]]：對初學者友善的本機 AI GUI、模型管理、Context Length 設定
- [[mcp]]：Gemma 透過 MCP 接 Brave Search 跟檔案管理；不只 Claude 用，本機 LLM 也能用
- [[cli]]：MCP 設定需要 Node.js／設定檔修改、CLI 跟本機 AI 串接門檻
- [[skill]]：影片沒用這個詞、但跟 system prompt 設定本質相通（教 AI 怎麼用工具）

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
1. 半導體公司內網敏感資料不能丟雲端 AI 的場景，可以提一個「本機 Gemma 4 + LM Studio」POC
2. 資安考量：離線分析含敏感欄位的 log，避免 Shadow AI 風險
3. 手機 Google AI Edge Gallery 出國旅行用：拍照翻譯／錄音轉文字、不需網路
4. 對既有「能用 API 就不用 MCP」決策的補充——本機 LLM 場景反而 MCP 是必要選項

## 原文要點

- Gemma 4 四個版本：E2B 手機／E4B 筆電／26B、31B 高階推理；可在 Can I Run AI Locally 網站檢測
- LM Studio：圖形化、模型分類顯示視覺／工具／推理能力標籤、Context Length 設定影響記憶長度
- 三圖示意義：視覺能力／使用工具能力／推理能力
- System Prompt：可設「用繁體中文回覆」「不知道就說不知道」等常駐規則
- Branch 分支功能：從聊天某點切分支保留上下文、用來測不同提示詞
- MCP 接入：Brave Search 免費 1000 次／月、Node.js 必裝、設定資訊請 Claude／ChatGPT 幫做
- 寫程式整合：VS Code + Continue 擴充 + LM Studio 開發者頁面開本地伺服器、Gemma 26B/31B 推理夠用

## 原始連結

- https://youtu.be/r5M0W66xcGc
