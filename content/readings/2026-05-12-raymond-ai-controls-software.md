---
title: "白話文教學：AI 怎麼幫你動手做事？API、CLI、MCP、瀏覽器控制的選擇邏輯"
date: 2026-05-12
type: 來源分析
url: "https://raymondhouch.com/lifehacker/digital-workflow/how-ai-controls-software-api-cli-mcp-browser-use/"
inbox-id: "35ef85da-554f-818c-9580-df5726889a22"
concepts: [api, cli, mcp, browser-use]
projects: []
created: 2026-05-12
---

# 白話文教學：AI 怎麼幫你動手做事？API、CLI、MCP、瀏覽器控制的選擇邏輯

## 摘要

雷蒙把 AI 操控軟體的五種方式（API／CLI／MCP／GUI／Browser Use）放在同一張對照表、給出明確優先順序：能用 [[api]] 就不用 [[mcp]]、能用 MCP 就不用 [[browser-use]]、Browser Use 是真的沒其他路才走的最後手段。重點不是「哪個技術比較炫」、是讓 AI 用它擅長的方式工作（結構化資料層）、不要逼它模仿人類點按鈕。文末附 19 個工具生態系實例（雷小蒙 AI 分身），證明 API/CLI/MCP 三條主力就能組起整套自動化、Browser Use 只占少數補位。

## 核心概念

- [[api]]：程式直接呼叫程式的結構化接口、AI 操控軟體優先序第一名
- [[cli]]：API 的人性化版本、語法用單字、比 GUI 穩、比 Browser Use 快、比 API 更適合 AI
- [[mcp]]：包好的 API 子集、AI 直接拿來用、但功能權限常少於原生 API
- [[browser-use]]：模擬人類操作的最後手段、最慢最不穩、含 Playwright/Puppeteer 跟 agent-browser（控 Electron App）

## 對 Simon 的應用

- **公司 IT 端的工具選擇紀律**：未來導入新工具時、把「有沒有開放 API」當必要條件之一；沒 API 的工具基本不考慮、避免自動化卡死。雷蒙這句「沒開放 API 的工具基本都是不考慮的」直接給了採購篩選硬條件。
- **KW γ 流程驗證自己沒走錯路**：目前 Notion 寫入走 MCP（包好的）、firecrawl_scrape 抓網頁是 Browser Use 的精簡版、yt-transcript.py 走 YouTube API、yt-gemini-transcribe.py 走 Gemini API。優先序符合雷蒙建議、唯一可優化點是評估 Notion API 直接呼叫是否能解掉某些 MCP 缺的能力（例如 batch insert）。
- **Playwright MCP 遠端 headless 限制要記住**：未來規劃需要互動的 browser 流程前先確認、避免遠端開 CC 時看不到視窗（已有 user-memory 標記）。
- **agent-browser 暫不採用**：Slack/Discord/VS Code 都有 API／CLI、目前沒理由走 CDP 操控 Electron。

## 原文要點

- 五種方式對照表：API（極快極高）／CLI（快高）／MCP（快高）／GUI（慢高）／Browser Use（最慢最低）
- 案例一：抓自己的 Notion 走 API（3 秒拿完整結構化資料）、不要用 Playwright 打開 Notion 網頁
- 案例二：抓別人 FB 貼文只能 Browser Use（Facebook 不開放抓別人貼文 API）
- agent-browser（vercel-labs）控 Electron App 靠 CDP 偵錯埠口、原理是 Playwright 控 Headless Chrome 的延伸
- 簡單決策流程：有 API → API；有 MCP → MCP；有 CLI → CLI；都沒 → Browser Use
- 雷小蒙 19 個工具生態系：內容管理（WordPress／Ghost／Kit）、社群（FB 廣告／Threads）、通訊（Discord／Gmail／Google Calendar／iMessage）、創作（Obsidian／Eagle）、部署（Zeabur／n8n／Cloudflare）、其他（Testimonial／Figma／Home Assistant／NAS）

## 原始連結

- https://raymondhouch.com/lifehacker/digital-workflow/how-ai-controls-software-api-cli-mcp-browser-use/
