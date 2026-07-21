---
title: "Google I/O 2026 懶人包｜Gemini Spark 啟動 AI 代理人時代，3.5 Flash 帶來哪些搜尋新玩法？"
date: 2026-05-20
type: 來源分析
domain: AI 產業與趨勢
url: "https://www.bnext.com.tw/article/90991/google-gemini-spark-3-5-flash-ai-agent-strategy"
inbox-id: "366f85da-554f-8182-a5c9-f0fd511b8bac"
concepts: [gemini-spark, gemini-flash, gemini-omni, information-agent, compute-based-pricing, agent-os-competition, ai-task-execution]
projects: []
impact: medium
created: 2026-05-20
tldr: "Google I/O 2026（2026-05-19 大會）一次推出四路產品線打代理人作業系統競賽：gemini-spark 把 Gemini 從聊天機器人升級為跨 Workspace（Gmail/Calendar/Drive 等 8 個原生服務）代理人、底層跑 gemini-flash；3."
stage: evergreen
icon: "⚡"
---

## 為什麼讀

從 Notion inbox 帶進來、bnext 李先泰寫的 Google I/O 2026 全景懶人包；Simon 在 I/O 2026 期間追 Google AI 戰略動作、想看 Google 怎麼回應 Anthropic／OpenAI 在代理人市場的壓力。同日 inbox 還有 INSIDE 寫的 Docs Live 子主題（[[2026-05-20-inside-google-docs-live]]）、兩篇互補。bnext 是 AI 編撰初稿後人工編輯、密度高、適合一篇收完。

## 摘要

Google I/O 2026（2026-05-19 大會）一次推出四路產品線打代理人作業系統競賽：[[gemini-spark]] 把 Gemini 從聊天機器人升級為跨 Workspace（Gmail/Calendar/Drive 等 8 個原生服務）代理人、底層跑 [[gemini-flash]]；3.5 Flash 即日全球開放、輸出 token 速度比其他前沿快 4 倍、定位代理人時代預設工作馬；Google 搜尋升級為 [[information-agent]]、可 24/7 監看主題、自動通知、配 Generative UI 即時組互動 mini app；[[gemini-omni]] Omni Flash 接續 Nano Banana 延伸影片生成、含 Avatars 用使用者聲音生影片+SynthID 浮水印。訂閱方案重整：AI Ultra 新增 \$100/月、原 \$250 降 \$200；計費邏輯重大改變、從「次數上限」轉 [[compute-based-pricing]]（運算量計費）+ pay-as-you-go 點數加買。Spark 下週給美國 AI Ultra 用戶 Beta 測試、台灣暫不可用；3.5 Pro 下月推出；開發者 API 數週內。整體訊號明確：Google 把 Gemini 全面推向「會行動」、跟 Anthropic／OpenAI 拉開差異化主軸是 Workspace 生態深度 + Flash 速度 + 搜尋整合。

<p align="center"><img src="assets/covers/2026-05-20-bnext-google-io-2026-gemini-spark-cover.png" alt="封面圖" width="400"></p>

![[2026-05-20-bnext-google-io-2026-gemini-spark-gemini-spark.png|275]]

## 核心概念

- [[gemini-spark]]：Google 在 I/O 2026 推出的跨服務代理人入口，把 Gemini 從聊天機器人升級為能跨 Gmail、Calendar、Drive、Docs 等 8 個 Workspace 服務行動的代理人。內部分三個模組：Tasks（執行單次任務）、Skills（客製化反覆動作）、Schedules（時間或條件觸發自動執行）。典型應用場景包括：每週一早上 9 點自動掃信箱整理重點待辦、讀 50 封過往郵件學你的寫作風格當 ghostwriter、檢查信用卡帳單裡的隱藏費用。目前限美國 AI Ultra 用戶 Beta 測試，台灣尚不可用。
- [[gemini-flash]]：Google 的輕量高速模型系列。3.5 Flash 在 I/O 2026 即日全球開放，輸出 token 速度比其他前沿模型快 4 倍，定位是代理人時代的預設工作馬——Spark、Antigravity（Google 的程式碼代理產品）、Enterprise 底層都跑 Flash。3.5 Pro 已在 Google 內部使用，預計下月推出。
- [[gemini-omni]]：Google 的多模態生成能力，Omni Flash 可以接收圖片、文字、影片、音訊的組合輸入，輸出影片並支援自然語言對話式編輯。具備角色、物理、場景三類一致性。Avatars 功能可以用使用者自己的聲音生成影片，並自動加上 SynthID 浮水印防偽。
- [[information-agent]]：Google 搜尋升級為代理人型態，從傳統的「你問它答」（pull）轉向「它主動通知你」（push）。可以設定 24/7 監看特定主題，有新進展時自動推送通知。搭配 Generative UI，搜尋結果不再只是連結清單，而是依問題即時生成互動元件、視覺化圖表或 mini app。
- [[compute-based-pricing]]：Google 訂閱方案的計費邏輯重大轉變，從原本的「每日提示次數上限」改成「依運算量計費」——費用依據問題複雜度、使用的功能、對話長度綜合計算，每 5 小時刷新到週上限，達上限自動降模型。Pro 和 Ultra 用戶還可以購買 pay-as-you-go 點數加買額度。
- [[agent-os-competition]]：這篇呈現的是代理人作業系統競賽中 Google 端的完整反擊。Google 在 I/O 2026 一口氣推出 Spark（代理人入口）+ Flash（高速模型底層）+ 搜尋代理人 + 算力計費四路產品，跟 Anthropic 和 OpenAI 同時搶桌面代理人的控制權。
- [[ai-task-execution]]：AI 從「回答問題」進化到「直接執行任務」的範式轉移，這篇是這個趨勢在 Google 生態的集大成展現——Spark 能幫你掃信、排會議、整理報告，不只告訴你怎麼做，而是直接做完。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

兩類分開列：

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- ⏳ **暫無**：Spark／Flash 都是 Google 端封閉產品、不影響 Claude Code 本地工作流；但「[[information-agent]] 監看主題」邏輯可考慮放進 vault auto-retrieval 規則（已有的 strong-keyword 主動上網驗證 vs 監看式 push）；當前只是抓觸發、未做監看
- ⏳ **新概念引用導入 [[agent-os-competition]] 既有 concept**：已在本次擴寫；對未來「Codex vs Claude vs Gemini」類查詢回答時、能拉到 Google I/O 2026 四路反擊作 baseline

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- ⏳ **訂閱方案重新評估**：Google AI Pro／Ultra 新計費邏輯 vs Claude Max 5x 3,300/月（Simon 2026-05-13 才升 Max 5x）；如果 Spark 開放台灣、Gmail/Calendar 代理任務值得分流；目前不必動、等 Spark 台灣上線再評
- ⏳ **追台灣可用性**：Spark／Information Agent／Omni 三個產品台灣上線時程；Simon 可以排個小 cadence（每月確認一次）、不用 Spark／Omni 之前就不要付 Ultra
- ⏳ **看看 Antigravity harness 細節**：bnext 提到 Spark 跑在「Gemini 3.5 Flash 與 Antigravity harness」、Antigravity 是 Google 用 [[claude-code]] 對標 Anthropic 的程式碼代理產品；Simon 可以查一下 Antigravity 是不是已開放
- ⏳ **Gemini Daily Brief 美國限定試試**：美國代理人摘要功能、值得 VPN 看一眼判斷是否值得切方案
- ⏳ **YouTube 影片素材**：Omni Flash 推出後、可考慮用作 Substack 文章配圖／Simon 自介系列 cover；月費換算合算可以替代部分 Midjourney 訂閱（但 Simon 沒訂 Midjourney、暫不衝突）
- ⏳ **建 [[information-agent]] 監看資安主題（等台灣上線）**：「CVE 武器化時間」、「ISO 27001 修訂」、「PQC 標準進度」三個固定主題；目前用人工掃 IT 新聞、未來可代理

## 原文要點

- **大會時間**：Google I/O 2026 開發者大會 2026-05-19 舉行、bnext 報導 2026-05-20 發布、AI 編撰初稿 + 人工編輯
- **四大主軸**：
  1. [[gemini-spark]] 代理人入口
  2. [[gemini-flash]] 3.5 Flash 模型底層
  3. [[information-agent]] 搜尋層代理人 + Generative UI
  4. [[gemini-omni]] 多模態影片生成
- **Spark 具體應用案例**：每週一 9 點掃信箱整理重點 + 優先待辦／讀 50 封過往郵件學 ghostwriter／檢查信用卡隱藏費用／整理會議筆記成報告
- **Spark 三模組**：Tasks（執行單次任務）／Skills（客製化反覆動作）／Schedules（時間或條件觸發）
- **Spark 整合**：Gmail／Calendar／Drive／Docs／Sheets／Slides／YouTube／Maps 預設關閉手動啟用；第三方 Canva／OpenTable／Instacart
- **3.5 Flash 效能**：Terminal-Bench 2.1 76.2%／GDPval-AA 1656 Elo／MCP Atlas 83.6%／CharXiv Reasoning 84.2%／輸出 token 速度比其他前沿快 4 倍
- **3.5 Flash 上線**：即日全球開放（Gemini App／搜尋 AI Mode／Antigravity／Gemini Enterprise）；3.5 Pro 已 Google 內部使用、下月推出
- **AI Overviews 升級**：支援更長提問+多模態輸入（文字/圖片/檔案/影片/Chrome 分頁）+ 接續進 AI Mode 追問
- **Generative UI**：搜尋結果依問題即時生成互動元件／視覺化／mini app
- **Omni Flash**：輸入圖+文+影片+音訊組合、輸出影片+自然語言對話式編輯、角色/物理/場景三類一致性、Avatars 用自己聲音生影片+SynthID 浮水印
- **Omni 上線**：即日開放 Google AI Plus/Pro/Ultra 訂閱者；YouTube Shorts 與 YouTube Create App 本週免費；開發者 API 數週內
- **訂閱方案調整**：
  - AI Ultra \$100/月（新）：5 倍 Pro 用量上限、3.5 Flash、優先 Antigravity、20TB 雲端、YouTube Premium
  - AI Ultra \$200/月（原 \$250）：調降 \$50 功能不變、20 倍 Pro 用量上限
  - Project Genie：Ultra \$200 獨享、3D 互動虛擬世界、含 Street View 實景錨定
  - Spark：Ultra \$100/\$200、美國限定
- **計費重大改變**：從「每日提示次數上限」轉「依運算量計費」（依複雜度＋使用功能＋對話長度）；每 5 小時刷新到週上限；達上限自動降模型；Pro/Ultra 可購 pay-as-you-go 點數
- **官方語**：Koray Kavukcuoglu「Gemini 3.5 系列主打前沿智慧加上行動力」、「搜尋不再只是把答案摘要放在搜尋結果上方、而是走向可追問、可監控主題、甚至可生成互動介面的代理人搜尋」
- **競爭脈絡**：文章未直接點名 Anthropic Claude／OpenAI ChatGPT、但隱含 — Spark 對標 OpenAI Agents、Flash 速度對應實時交互競爭、Workspace 整合是 Google 護城河、運算量計費是業界新嘗試
- **其他細節**：Gmail AI Inbox（美國）／Gemini Daily Brief（美國）／Google Pics 影像生成編輯（Pro/Ultra）／YouTube Premium/Lite 整合進方案／Health/Home Premium 含訂閱無需額外付費

## 原始連結

- https://www.bnext.com.tw/article/90991/google-gemini-spark-3-5-flash-ai-agent-strategy

## 落地動作與效益

### A 類芙莉蓮優化

**有優化**：無

**不優化**（2026-05-23 跨篇彙整評估 10 個候選、Simon 全 ✗）：

- ❌ **Information Agent 24/7 監看主題 → 套 `vault-auto-retrieval.md`**
  - 原因：(1) 跟「復盤要親身參與」原則衝突、如果變 cron 自動掃會成被動知識消化 (2) 等 Google Information Agent 台灣上線、Simon 直接訂閱用 Google 端、自架重工不划算 (3) 現規則「強類型 keyword 上網驗證」已覆蓋 80% 場景
  - 結論：若要做也是「等 Info Agent 台灣上線後做訂閱→收件箱橋接」、不是現在自架掃網
- ❌ **Spark「高風險動作前需確認」→ PreToolUse 二次確認 hook**
  - 原因：跟 5/22 YAHA reading 同一評估、`settings.json` 既有 22 條 deny rules 直接擋住比二次確認更安全
- ❌ **「達上限自動切較小模型」→ Opus 達上限自動降 Sonnet/Haiku**
  - 原因：Max 5x 3,300/月額度夠、Claude Code 本身已有 weekly limit 降級邏輯（[[claude-usage-dashboard]] 覆蓋）
- ❌ **Spark「Tasks／Skills／Schedules」三模組對應**
  - 原因：跟既有 Claude Skill + /loop + /schedule 一一對應、無新 insight
- ❌ **Generative UI / 即時組 mini app**
  - 原因：既有 [[disposable-ui-html]] + [[interactive-confirmation-ui]] + Thariq HTML 主張已覆蓋
- ❌ **Spark ghostwriter「讀 50 封郵件學個人風格」→ 餵芙莉蓮 Simon 過往語料**
  - 原因：既有 [[template-reference-pattern]]（Josie 5/11 reading）已覆蓋、且 Simon vault 內 substack/journal 已是天然語料、不必額外封裝
- ❌ **「Spark 預設關閉、需手動啟用」安全預設值**
  - 原因：Simon 既有 `bypassPermissions`（除 deny）是相反方向選擇、偏好高自動化、不適用
- ❌ **Omni Flash 三類一致性（角色／物理／場景）**
  - 原因：影片生成領域、跟 Claude Code 工作流無關
- ❌ **AI Overviews 多模態輸入（檔案／影片／Chrome 分頁）**
  - 原因：Claude Code 已支援檔案／圖片附加、Chrome 分頁不適用 CLI 場景
- ❌ **算力計費 + pay-as-you-go 加買邏輯**
  - 原因：訂閱結構議題、非工作流規則

### B 類 Simon 個人動作（後續維護狀態）

2026-05-23 評估後全 ✗：

- ❌ 訂閱方案重新評估（Google AI Pro/Ultra vs Claude Max 5x）
- ❌ 追台灣可用性（Spark / Info Agent / Omni 每月確認）
- ❌ 查 Antigravity harness 是否已開放
- ❌ Gemini Daily Brief 美國限定試（VPN）
- ❌ Omni Flash 做 Substack cover / Simon 自介系列影片
- ❌ 建 Information Agent 監看資安主題（等台灣上線）
- ❌ 2026 夏天試 Docs Live（從 reading 1 帶過來）
- ❌ 公司資料隱私確認（從 reading 1 帶過來）

統一原因：當前手上 Claude Code + Notion + Obsidian + Substack 工作流已順、無實際痛點驅動切換或補位 Google 生態；台灣可用性還未明、靜觀其變、不主動追
