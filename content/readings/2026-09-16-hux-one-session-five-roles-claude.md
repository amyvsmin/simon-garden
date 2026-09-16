---
title: "一個人用 Claude 從草圖做到上線：Google Cloud 工程師 26 分鐘現場開發的五層角色順序（Hux 貼文）"
date: 2026-09-16
published: 2026-09-12
type: 來源分析
domain: AI 工具實務
url: "https://x.com/huxlab/status/2098612843826548862"
source_tier: 二手
inbox-id: "3d9f85da554f81ac84e8d6faa5549bf6"
concepts: [one-session-end-to-end-delivery, security-review-before-ship]
projects: []
impact: medium
transcript_source: ""
created: 2026-09-16
tldr: "@huxlab 推薦一支 26 分鐘影片：一位 Google Cloud 工程師用 Claude 在同一次對話裡把應用從草圖做到上線。核心是五層角色順序：產品→設計→研發→資安→成長，其中「先 Plan Mode 再寫、/security-review 過了再上線」是最能帶走的一條。貼文是二手提綱、影片未轉錄，細節都在影片裡。"
stage: growing
icon: "⚡"
---

## 為什麼讀
收集箱只存了網址、沒有註記。貼文主題是「用 Claude 在一次對話內從草圖做到上線」，直接接 Simon 的 Claude Code 工作流優化主線，也碰到上線前安全審查這個跟他資安工作相關的主題〔AI 推論〕。本篇實際只做一件事：把「部署前跑 /security-review」這道閘門落地；影片本身未轉錄，看完再決定要不要升級收錄。

## 摘要
Hux 這則貼文推薦一支 26 分鐘的現場開發影片：一位未具名的 Google Cloud 工程師在台上用 Claude 把一個回饋評分應用從手繪草圖做到上線，講完立刻讓全場用這個應用替他的課打分。貼文把流程拆成五層角色依序輪替：產品、設計、研發、安全、成長；其中安全那層是用 /security-review 抓出缺驗證的地方、修完再發布。作者的主張是：多數團隊要排一週才走完的流程，他在同一次對話裡做完。貼文本身只有五點提綱，細節都在影片裡。

<p align="center"><img src="assets/covers/2026-09-16-hux-one-session-five-roles-claude-cover.png" alt="封面圖" width="400"></p>

## 核心概念
- [[one-session-end-to-end-delivery]]：一個人在同一次 AI 對話裡依序切換產品、設計、研發、資安、成長五種角色，把應用從草圖做到上線並看到使用資料；可帶走的是「角色順序」，不是「一次做完」這個速度宣稱。本篇是一個 26 分鐘現場示範，五層依序切換、最後當場讓觀眾用成品打分。（Hux 貼文）
- [[security-review-before-ship]]：把安全審查固定放在「程式改完、發布之前」當閘門，抓到缺驗證就先修再上線。貼文示範裡 /security-review 抓出的是「缺驗證」（原文未說明缺的是哪種驗證）；留言者補了一句：很多人順序反過來，代理改完一堆檔案才想到要驗證，值錢的是順序。（Hux 貼文＋@junbug1221 留言）

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：
- 把「部署前先跑一次 `/security-review`」寫進會對外或碰個人資料的專案（LINE bot 的 Cloudflare Workers、薑餅資 AI、記帳管線）的部署步驟：先查各 repo 有無既有部署步驟文件，有就補一行、沒有就在該 repo 的 CLAUDE.md 新增「部署前」段；同時寫明順序「先規劃 → 寫 → /security-review → 部署」。閘門點依專案不同：Cloudflare Workers 是 push 或部署之前，記帳管線沒有部署動作、閘門點是改完程式、下次排程跑之前〔AI 推論〕；本機 Claude Code 已有 `/security-review` 這個指令、不用另裝〔已查證：本回合 skill 清單有 security-review〕

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：
- 看那支 26 分鐘影片（連結在原文全文段的內嵌影片列），看完再決定要不要把影片本身另收成一篇第一手 reading；本篇只是二手提綱〔需 Simon 確認〕

## 原文要點
- 推薦對象：一位 Google Cloud 工程師在台上 26 分鐘現場開發，用 Claude 把一個回饋評分應用從零做到上線；講完全場即用該應用替他的課打分（影片由 @deanwperkins 於 2026-09-11 轉貼、講者姓名與活動名稱兩則貼文皆未載明）
- 流程：手繪草圖 → 線框 → Plan Mode → 並行子代理 → 安全審查 → Cloud Run 部署 → 現場資料儀表板
- 五層角色：①產品（草圖進模型、先出線框、再決定做什麼）②設計（Plan Mode 把元件想清楚再動手寫）③研發（子代理並行同時建起 Google Cloud 的執行環境 Cloud Run、資料庫 Firestore 與資料分析倉儲 BigQuery）④安全（/security-review 抓住缺驗證、修完再發）⑤成長（現場資料進儀表板、觀眾評分即時出來）
- 作者主張：多數團隊要排一週才走完的流程，他在同一次對話裡做完
- 留言補充（@junbug1221）：值錢的是順序，先 Plan 再寫、/security-review 過了再上；很多人反過來，代理改完一堆檔案才想校驗
- 貼文互動：513 讚、119 轉推（抓取時數字）

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-09-16-hux-one-session-five-roles-claude)

## 原始連結
- https://x.com/huxlab/status/2098612843826548862
- 來源性質：二手 — 貼文是 @huxlab 對一位未具名 Google Cloud 工程師 26 分鐘現場演示影片的轉述提綱，影片由 @deanwperkins 轉貼、講者本人的原始出處未載明；第一手版本：未找
