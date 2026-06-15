---
title: "代理人作業系統競賽（桌面 AI Codex vs Claude vs Grok vs Gemini）"
slug: agent-os-competition
aliases: [代理人作業系統競賽, agent OS, 桌面 AI 競賽, Codex vs Claude, agent OS war, 代理人桌面 OS]
category: AI
confidence: 已驗證
created: 2026-05-18
---

## 定義

Anthropic、OpenAI、xAI、Google 同時搶奪知識工作者「桌面代理人入口」的系統級競賽；不是單純工具切換、而是決定未來在哪個介面完成工作的作業系統層級競爭、類比十年前 iOS vs Android。

<p align="center"><img src="assets/covers/agent-os-competition-cover.png" alt="封面圖" width="400"></p>

## 關鍵面向

- **入口從瀏覽器移到桌面代理人**：桌面 AI app 取代瀏覽器成為知識工作新入口；Claude for Work、Codex Desktop、ChatGPT Desktop、Grok 等都在搶這個位
- **模型差距收斂**：GPT-5.5 性能跟 Anthropic 打平、模型不再是決勝點；應用層（速度、子代理、自動化推送）成主戰場
- **快速迭代取代鎖定**：企業按季度評估競品、避免被鎖定單一供應商；6 個月內版圖會洗牌
- **文件設計升級**：要針對「代理人可讀性」優化、不只人類可讀；對應 [[html-vs-markdown-ai-output]] 角度但更系統化
- **跟 [[claude-three-modes]] 的關係**：claude-three-modes 看 Claude 內部三形態（Chat/Cowork/Code）分工、agent-os-competition 看跨廠商桌面入口競爭、兩者互補不同層
- **Every 創辦人丹希普案例**：從 Claude Code 轉 Codex Desktop、主因是 app 層體驗（速度、子代理、推送）勝出、非模型差
- **Codex 2026 五入口全景**（脈報 2026-05-25）：Codex 已從「更聰明的 autocomplete」變成完整 agentic 開發平台，五個入口（CLI、IDE 擴充、Desktop app、Cloud、In-app browser + Computer Use）對應不同人機黏合度；Cloud 走 async 背景並行 PR、Desktop 走 Goal mode 長期目標、CLI 走 scripted 雜事
- **工作節奏轉換**：unit of work 從 turn（一次對話）變成 task（一個交付），output 從 chat response 變成 PR；開發者角色從「寫程式的人」轉為「review 永遠不睡的初階工程師團隊的人」
- **跨工具組合比全押更實用**：Avid（12 個月 Claude Code 老用戶轉 Codex）強調不必二選一、可讓 Codex Cloud 並行寫 PR、Claude Code 當 reviewer（[[cross-provider-verification]]）；對已養成 Claude Code 習慣的人，新增 reviewer 角色比重建工作流容易
- **Google I/O 2026 反擊**（2026-05-19）：Google 同步推 [[gemini-spark]]（跨 Workspace 代理人入口）+ [[gemini-flash]]（速度比其他前沿快 4 倍）+ [[information-agent]]（搜尋層代理人）+ [[compute-based-pricing]]（從次數計費轉算力計費）；4 路同時推進、訊號明確：Google 把 Gemini 從聊天升級為代理人、搶奪 Workspace 既有用戶不流失到 Claude／Codex
- **競賽特徵更新**：模型層差距收斂、底層算力（[[gemini-flash]] 速度 4 倍）+ 計費結構（算力計費）+ 生態深度（Gmail／Calendar／Drive／YouTube 原生）成新戰場三要素；單純 app 體驗已不夠

## 應用場景

- Simon 工作場景：作為 Claude Code 重度用戶、需季度評估 Codex／ChatGPT Desktop／Grok 是否值得補位；避免單押 Anthropic 訂閱結構（Max 5x + Agent SDK 額度桶）；對應 [[subscription-vs-api-cost]] 結構
- 一般場景：個人 AI 工作流策略、avoid vendor lock-in；類似 [[tool-agnostic-thinking]] 的桌面 OS 層級版本

## 相關概念

- [[tool-agnostic-thinking]]：工具中立思考、agent-os-competition 是其在桌面 OS 層的具體展開
- [[claude-three-modes]]：Claude 內部三形態分工；agent-os-competition 是跨廠商版
- [[html-vs-markdown-ai-output]]：文件代理人可讀性議題、agent-os-competition 把它升級成系統級需求
- [[subscription-vs-api-cost]]：訂閱策略受桌面 OS 競賽影響

## 尚未解決的疑問

- Anthropic Claude for Work／Claude Desktop 跟 Codex Desktop 的實際 feature 對比數據
- 個別開發者（Simon 等級）vs 企業（Every 等級）的工具決策框架差異

## 來源（自動維護）

- [[2026-05-16-bnext-agent-os-codex-vs-claude]]
- [[2026-05-20-bnext-google-io-2026-gemini-spark]]
- [[2026-05-26-heymaibao-claude-code-to-codex-30-days]]
