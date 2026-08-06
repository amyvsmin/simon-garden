---
title: "給非技術人員的 GitHub 教學：Vibe Coding 必學的基礎技能"
date: 2026-08-06
published: 2026-07-15
type: 來源分析
domain: AI 工具實務
url: "https://www.youtube.com/watch?v=atqcAb7MFAM"
source_tier: 第一手
inbox-id: "3b0f85da-554f-8191-aa9c-f2db451bf65d"
concepts: [git-worktree, secret-in-git-history, vibe-coding]
projects: []
impact: medium
tldr: "把 Git 的每個指令對應成一個開發情境：commit 是打王前存檔、branch 是同一張桌子切換平行時空、worktree 是再搬一張實體桌讓多個 AI 同時開工。重點不是背指令，而是聽得懂 AI 在問你什麼，並在 push 前先確認金鑰沒被一起帶上雲。"
stage: growing
icon: "⚡"
transcript_source: whisper-large-v3
created: 2026-08-06
---

## 為什麼讀

Simon 已同時操作多個 Claude Code 代理，而 vault 裡目前沒有任何一篇談版本控制。這支影片把 branch 與 worktree 的差別講得夠白話，正好補上「多代理平行開發時工作目錄怎麼分」這一塊。

## 摘要

影片針對用 AI 寫程式、但沒有工程背景的人，把 Git 與 GitHub 的核心指令逐一對應到實際情境。GitHub 是放程式碼的雲端倉庫，Git 是在自己電腦上記錄版本的工具；commit 是存檔、push 是把存檔推上雲端、clone 是把專案抓下來一起維護、pull 是把別人的新進度拉回本機。要開發新功能時先開分支（branch），把還不穩定的改動跟能運作的主線隔開；若要讓好幾個 AI 同時做不同功能，分支不夠用，要改用工作樹（worktree）生出額外的實體資料夾。改完發一份「改動提案」（PR）請人審查、確認沒問題再合併（merge）回主線；若兩邊改到同一段程式碼而打架（conflict），人的工作是給產品上的取捨決定，而不是自己下去改程式。作者的立場是：不必背指令，但要聽得懂 AI 每次在問你什麼。

<p align="center"><img src="assets/covers/2026-08-06-gary-chen-git-github-for-vibe-coders-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[git-worktree]]：branch 跟 worktree 的差別，影片用辦公桌比喻講得很清楚。branch 像是同一張辦公桌上的「平行時空切換鈕」，按下去桌面內容整個換掉，所以同一時間只看得到一個版本；worktree 則是直接在旁邊擺第二張實體桌子，兩個版本可以同時攤開。差別在多個 AI 同時工作時才會痛：兩個代理搶同一張桌子，會出現「明明在資料庫的分支上，卻混進改介面的存檔」這種混亂。（Gary Chen 影片後段）
- [[secret-in-git-history]]：程式被 AI 改壞還救得回來，金鑰被 push 上去就救不回來。影片的比喻是把家門鑰匙貼在網路上，任何人都能撿去用，補救方式只剩整把作廢重新申請。事前唯一的防線是 `.gitignore`——告訴 Git 哪些檔案不要追蹤、也不要上傳。（Gary Chen 影片中段）
- [[vibe-coding]]：影片給 vibe coder 的定位是「指揮但不執行」。你不需要記得 restore 跟 revert 的語法差異，但要聽得懂 AI 問「要不要 commit」其實是在問「現在這個能跑的狀態要不要先保個險」，聽得懂才知道該怎麼回答。

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- 影片的「一張桌子切時空 vs 第二張實體桌」比喻，比現行 worktree 說明更好懂，可考慮補進 `superpowers:using-git-worktrees` 或調度規則裡當白話註解〔AI 推論〕
- 派多個子代理同時改同一個 repo 時，明確要求各自掛 worktree，而不是共用工作目錄；這條現在散在工具參數層（Workflow 的 `isolation: "worktree"`），可考慮升成調度層的判斷規則〔AI 推論〕

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- 逐一確認手上各個 repo 的 `.gitignore` 有沒有擋掉 `.env`、密碼與金鑰檔；影片給的做法是直接請 AI 檢查一遍〔原文支撐〕
- 記帳系統與 envelope 的單一真值放在 `~/.secrets/finance-state.json`（repo 外），這個安排跟影片的原則一致，可當成已驗證的正確做法、不需改動〔需 Simon 確認〕

## 原文要點

- GitHub 是程式碼專用的雲端硬碟，Git 是在本機做版本記錄的工具；GitHub 只收已經被 Git 追蹤過的專案，不能像拖資料夾一樣直接上傳。
- commit 只在自己電腦裡存檔，push 才是真的推上雲端，兩者是完全不同的動作。
- push 之前要先用 `.gitignore` 把 `.env`、密碼與各種金鑰擋掉；程式改壞可以還原，金鑰外洩只能整把作廢重新申請。
- clone 跟 GitHub 網頁上的 Download ZIP 不一樣：ZIP 抓下來沒有版本記錄，改完無法同步回去。
- 開 branch 的理由不是「怕改壞可以退回」，而是 AI 做大功能時會反覆試錯，主線在那段期間會一直處於半壞掉的狀態。
- 一個 worktree 就是一個獨立的實體資料夾，但共用同一個 Git 記憶庫，所以可以讓代理 A 做資料庫、代理 B 做介面，互不干擾。
- 在雲端按下 merge 之後，本機的 main 不會自動更新，要手動 pull 才會拿到最新版本。
- 遇到 conflict 時 AI 有三種處理方式：二選一、兩邊都留、打掉重寫；但產品邏輯上的取捨 AI 判斷不了，需要人給明確決策。
- 還沒 commit 就發現改壞用 restore；已經 commit 才發現錯用 revert，revert 是新增一個反向的存檔去抵消，不是把歷史刪掉。
- 講者對 Claude Code 的稱呼在逐字稿中出現多種辨識錯誤（Clock Code、Cloud Code、Call of Code 等），`.env` 被辨識成「EMV 檔」、pull 被辨識成「POP／Pool」、revert 一處被辨識成「Reverse」（疑似辨識錯誤、原話如此）。

## 原文全文

> [!info]- 原文全文（未公開）
> 原文全文只保留在本機 Obsidian、未同步到這個 garden。[在 Obsidian 開啟這篇 →](obsidian://open?vault=SimonVault&file=2-knowledge%2Freadings%2F2026-08-06-gary-chen-git-github-for-vibe-coders)

## 原始連結
- https://www.youtube.com/watch?v=atqcAb7MFAM
