---
title: "給非技術人員的部署教學：先答三問再選平台、帳號自己註冊、推送交給 MCP、後台只看四區（Gary Chen）"
date: 2026-09-17
published: 2026-09-16
type: 來源分析
domain: AI 工具實務
url: "https://youtu.be/6bvEcpm72W0"
source_tier: 第一手
inbox-id: "3def85da554f81abb7cee0c5b51f2e8f"
concepts: [deployment-decision-framework, vibe-coding]
projects: []
impact: medium
transcript_source: whisper-large-v3
created: 2026-09-17
tldr: "Gary Chen 用開餐廳比喻部署（租店面、搬廚房、掛招牌），教非工程師先答三問（要不要後端、全端還是前後端分離、要不要常駐）再選平台：純靜態 Cloudflare Pages、全端無伺服器 Vercel、常駐 Railway／Render。選定後帳號自己註冊、部署交給平台 MCP，後台只看部署狀態、環境變數、網域、日誌四區；部署綠燈不等於能用、上線不等於安全。"
stage: evergreen
icon: "⚡"
---

## 為什麼讀
Simon 2026-09-17 在討論「網頁做完要不要連部署一起做成 skill」時，把這支剛放進收件箱的影片點出來，要芙莉蓮先看完再決定部署該獨立成 skill 還是併進建站 skill（Simon 原話）。看完決定獨立成 `web-deploy`，本篇是它的來源依據。

## 摘要
Gary Chen 用記帳軟體當例子：`localhost:3000` 只是「問自己這台機器」的暗號，傳給朋友打不開。部署就是出去開餐廳：租不關機的雲端電腦、搬程式與金鑰、綁公開網址。自己養機器、租 VPS、託管平台三條路裡，只有託管平台（把伺服器設定包成按鈕的服務，如 Vercel、Cloudflare）適合用 AI 做產品的人；選平台先答三問：要不要後端、全端還是前後端分離、要不要常駐，合起來對到一類平台：純靜態→Cloudflare Pages、全端無伺服器→Vercel、常駐→Railway。選定後帳號自己註冊、推送交給平台的 MCP，後台只看部署狀態、環境變數、網域、日誌四區；綠燈不代表能用，上線不代表安全。

<p align="center"><img src="assets/covers/2026-09-17-gary-chen-deploy-for-non-engineers-cover.png" alt="封面圖" width="400"></p>

## 核心概念
- [[deployment-decision-framework]]：影片的主體。與其研究各平台規格，先問專案本身三件事：有沒有登入、存資料、藏金鑰（決定純靜態或動態）；本機開一個還是兩個終端機視窗才能跑（決定全端或前後端分離）；功能是幾秒完成的短動作還是長時間任務（決定無伺服器或常駐）。三個答案一出來，平台就剩一兩個選項。（Gary Chen 部署教學）
- [[vibe-coding]]：用自然語言跟 AI 描述需求、讓 AI 寫程式、人只看結果不看程式碼的開發方式。影片的對象正是這樣「用 Claude Code 做出東西、但不懂部署」的人。作者的立場是這群人不必成為部署專家，關鍵時刻自己做決策（三問、選平台、註冊帳號），繁瑣的推送與除錯交給接了 MCP 的 AI；這正是 vibe coding 從「做得出來」走到「別人用得到」缺的那一段。（Gary Chen 部署教學）

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- 新建 skill `web-deploy`，正文放三問與平台對照（穩定不變的部分），各平台 MCP 與後台操作放參考檔（會漂的部分）；部署前固定跑 `/security-review`（影片結尾的資安提醒＋Hux 五角色那篇的閘門）；帳號註冊明寫「由 Simon 親手做」（影片原話：註冊帳號是少數要親自做的事）；付費與買網域同樣歸 Simon〔芙莉蓮判斷、原文未指定由誰做〕。Notion Action 卡「建 web-deploy skill」已於 2026-09-17 建立並回讀（頁面 ID 3def85da-554f-8124-a5d9-c6bf8463ac07）。〔原文支撐：三問、平台對照、MCP、四區、資安提醒都是影片明講；skill 切法是 2026-09-17 與 Simon 討論定案〕
- 影片「部署成功不等於網站能用」那段可直接變成 `web-deploy` 的驗收條件：推送綠燈後必須實際開網址點一個會用到金鑰的功能，通過才算部署完成。〔原文支撐〕

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- 共學團網頁開工時，先答三問並把答案寫進專案 README，再決定平台；若答出純靜態，Simon 既有的 Cloudflare 帳號（Reading Garden 在上面）可直接用。〔AI 推論〕
- 建 `web-deploy` 時把三問寫成一段可直接貼給 agent 的判斷提示詞、放 skill 參考檔，等於自製作者放在 Patreon 的付費提示詞。〔原文支撐：影片明講 Patreon 有這支提示詞；自製是芙莉蓮判斷〕
- 影片結尾指向作者上週的資安影片（標題與網址待查：Gary Chen 頻道 2026-09-09 前後）；查到後丟收件箱，收不收看它有沒有超出既有 security-review-before-ship 概念的內容。〔原文支撐：影片明講有該片；判準是芙莉蓮加的〕

## 原文要點
- **問題場景（00:43～02:45）**：Gary 用 Claude Code 做的記帳軟體在本機 `localhost:3000` 跑得好好的，複製網址傳給朋友卻「無法連線」。`localhost` 意思是「問我自己這台機器有沒有東西在 3000 號窗口營業」，誰點開就問誰的裝置；打包專案寄給對方是工程師做法，對方要裝環境、要金鑰。
- **部署是什麼（02:45～04:10）**：在家煮私房菜只有自己吃得到，部署就是出去開餐廳，三件事：租 24 小時不打烊的店面（雲端伺服器）、搬廚房（程式碼、執行環境、API 金鑰）、掛招牌（綁固定公開網址）。
- **三條路（04:13～06:20）**：①家裡養機器：停電斷網就掛，且把私人設備暴露在公網上；②租 VPS（DigitalOcean、Linode、AWS Lightsail）：每月幾美元，但拿到的是只有終端機的毛胚屋，作業系統、防火牆、環境全要自己裝，是後端與維運工程師的活；③託管部署平台（Vercel、Netlify、Railway、Cloudflare）：把②的苦工包成服務，授權 GitHub 後每次推送自動上線。對用 AI 做產品的人，③是唯一首選。
- **三層判斷（06:40～11:40）**：①要不要後端：前端是外場（畫面、按鈕、動畫），後端是內場（算錢、護密碼、拿金鑰呼叫 AI）；不用登入、不存私密資料、沒金鑰要藏就是純靜態，只在乎快與穩、交給 CDN；判不出就問 AI。②全端框架（Next.js，外場內場同一專案，整包丟平台）還是前後端分離（兩個專案、兩個平台再串接）：看本機要開一個還是兩個終端機視窗。③要不要常駐：影片轉檔、定時爬蟲、即時聊天室要常駐（固定月租）；登入、記一筆帳、呼叫一次 AI 是短動作，用無伺服器（按次計費、沒人用零成本、免費額度大方）。Gary 的記帳軟體：動態、全端 Next.js、短動作 → 無伺服器。
- **平台分類（12:00～14:46）**：①純靜態：Cloudflare Pages、Vercel、Netlify、GitHub Pages 都行，首推 Cloudflare Pages（節點最多、個人免費流量幾乎無上限）；要收報名表單又不想寫後端選 Netlify（內建表單）。②全端無伺服器：Vercel（Next.js 是它做的，整合最好、免費額度大方），Netlify 也支援。③常駐與容器：Railway、Render，還有一家「之前出過事情」的（逐字稿作「Zebra」、待核對），月租 5～7 美元起，適合爬蟲、聊天室、前後端分離的獨立後端。④雲端巨頭 AWS、Google Cloud、Azure：上百種服務會嚇傻新手、殺雞用牛刀；前面的平台底層多半也租它們的機房，多付一點錢買的是不用半夜修機房。作者在 Patreon 另有各平台深入分析與一支「貼給 agent 判斷該部署到哪」的提示詞（付費）。
- **動手（14:48～15:45）**：註冊平台帳號是整個流程少數要親手做的事；之後找該平台的 MCP（Vercel 找 Vercel 的），讓 AI 直接操作平台上傳與部署。但不能全丟給 MCP，進後台要看得懂數據。
- **後台四區（15:47～19:00）**：①部署狀態（Deployments）：每次發布綠燈或紅字；綠燈只代表雲端收到並打包完，網站點開未必能動。②環境變數（Environment Variables）：本機 `.env` 裡的 OpenAI 金鑰、資料庫密碼絕不能推上 GitHub，所以雲端拿不到；要手動貼進這頁，程式才拿得到鑰匙，「部署成功但按鈕沒反應」多半卡在這。③網域（Domains）：平台預設網址帶一串亂碼，想換 gary.com 這種正式門牌在這裡綁（買網域另支影片）。④日誌（Logs）：即時活動紀錄簿，朋友試用時看 Runtime Logs；出錯把紅字貼給 AI、或讓 AI 經 MCP 讀日誌，據證據修。
- **收尾（19:01～20:13）**：部署上線不等於產品安全，網站公開往往才是資安風險的開始；本片簡化流程給技術小白，不代表正式產品就這麼簡單，資安另見作者上週影片。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-09-17-gary-chen-deploy-for-non-engineers)

## 原始連結
- https://youtu.be/6bvEcpm72W0

## 落地動作與效益

**A 類芙莉蓮優化**（2026-09-17 與 Simon 討論定案）：

- ✅ **新建 `web-deploy` skill・做、已建卡** `3def85da-554f-8124-a5d9-c6bf8463ac07`：正文放三問與平台對照、各平台 MCP 與後台操作放參考檔、部署前固定跑 `/security-review`、帳號註冊／付費／買網域由 Simon 親手做。三支接法 `web-design-router` → `web-build` → `web-deploy`。skill 本體另開對話走 skill-creator。
- ✅ **「部署成功不等於網站能用」變驗收條件・併入上一張卡**：推送綠燈後必須實際開網址點一個會用到金鑰的功能，通過才算部署完成；寫進 `web-deploy` 的驗收段。

**B 類 Simon 個人動作**：

- ⏸ 共學團網頁開工時先答三問、寫進專案 README 再選平台；純靜態可直接用既有 Cloudflare 帳號〔AI 推論〕——等共學團網頁動工。
- ⏸ 把三問寫成一段可直接貼給 agent 的判斷提示詞、放 `web-deploy` 參考檔〔原文支撐：Patreon 有這支提示詞；自製是芙莉蓮判斷〕——建 skill 時做。
- ⏸ 查作者上週的資安影片（Gary Chen 頻道 2026-09-09 前後）、丟收件箱〔原文支撐；判準是芙莉蓮加的〕——未查。
