---
title: "李佳達師父班 Lesson 11：260429 會員直播 001 — 技能包安裝示範"
date: 2026-05-18
type: 來源分析
domain: 思維方法
url: "https://worldviewsacademy.circle.so/c/shifuclass/sections/1004867/lessons/3854248"
inbox-id: "364f85da-554f-8142-a012-dded2304ad1f"
concepts: [problem-prd, skill, doc-to-md, tool-agnostic-thinking]
projects: []
impact: medium
created: 2026-05-18
tldr: "李佳達師父班「AI 超級大腦」系列第 11 堂直播（1:39:17）、聚焦「先學思考、再選工具」的核心心法。把「問對問題」拆成「目標→限制→障礙」三層產出問題規格書（PRD）、再用規格書指導 AI 開發解決方案、效果遠超直接叫 AI 想答案。技能包不只是提示詞模板、要附範例跟參考文獻（Reference）才精準。"
stage: evergreen
icon: "📊"
---

## 摘要

李佳達師父班「AI 超級大腦」系列第 11 堂直播（1:39:17）、聚焦「先學思考、再選工具」的核心心法。把「問對問題」拆成「目標→限制→障礙」三層產出問題規格書（PRD）、再用規格書指導 AI 開發解決方案、效果遠超直接叫 AI 想答案。技能包不只是提示詞模板、要附範例跟參考文獻（Reference）才精準。知識庫先轉 MD 格式（doc-to-md 走本機程式不受上下文限制也不花 Token）、做新東西前先 Deep Research 找 Best Practice 再請 Claude 依範例設計、品質遠超從零開始。

<p align="center"><img src="assets/covers/2026-05-18-li-jiada-skill-pack-install-demo-cover.png" alt="封面圖" width="400"></p>

## 核心概念

- [[problem-prd]]：「問對問題」的結構化方法，把問題拆成三層——目標（你想達成什麼）、限制（哪些條件不能改，例如預算、時間、人力）、障礙（哪些困難可以被排除）——然後把這三層整理成一份問題規格書（PRD）再餵給 AI。用規格書指導 AI 開發解決方案，效果遠超直接叫 AI 想答案，因為 AI 拿到的不是模糊需求而是有邊界的明確問題。
- [[skill]]：李佳達強調技能包不只是一段提示詞模板，還必須附上範例和參考文獻（Reference）才能精準運作。光有模板，AI 不知道「好的輸出長什麼樣」；加上範例讓它有對照標準，加上參考文獻讓它有知識底座。技能包安裝後還可以持續優化，改版時記得輸出安裝檔留底備份。
- [[doc-to-md]]：把 PDF 轉成 Markdown 格式的做法，重點是走本機程式（不透過 LLM），所以不受上下文長度限制、不花 Token、幻覺最少。李佳達提到 ChatGPT 直接轉長文會嚴重省略內容，而 doc-to-md 走本機處理則能完整保留。Markdown 是 AI 最容易讀取且產生最少幻覺的格式。
- [[tool-agnostic-thinking]]：李佳達反覆強調的核心心法：不要綁定任何一個特定的 AI 工具，因為 AI 工具迭代太快，今天好用的明天可能被取代。正確做法是先靠自己的思考力提升（用密涅瓦思考習慣），把問題想清楚了，再根據問題的性質去選最合適的工具。思考力是不會過時的，工具會。
![[2026-05-18-li-jiada-skill-pack-install-demo-problem-prd.png|275]]

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。

**A. 芙莉蓮優化類**（可套到 Claude Code／skill／rules／CLAUDE.md／user-memory）：

- 把「問題規格書三層」（目標→限制→障礙）寫進 user-memory 或全域 CLAUDE.md 當預設思考框架；遇到複雜任務優先讓 Claude 先列三層、再動手
- skill description 補一條「附 reference 範例」原則（既有 [[skill]] concept 已提模板+Reference 雙要素、但個別 skill 寫法未必照辦）
- 知識庫轉 MD 規範化：個人技術文件／PDF 統一走 doc-to-md（可考慮自寫 skill）、不直接丟 Claude 整本 PDF；對應 [[markdown-vs-pdf-token-cost]] 20 倍差距論點

**B. Simon 個人動作類**（建 Notion Action 卡／動 vault／改個人工作流／看別的東西）：

- 看師父班 Lesson 1–10（系列直播）、評估是否升級成 course-notes 結構（需先解 ASR transcript 問題）
- 試裝李佳達的「專案管理（問題規格書）技能包」、看跟自己版本差在哪
- 試裝 doc-to-md 技能包、跟既有 markdown 轉換流程比較
- 本月進階：照師父建議用 Deep Research + Claude 做一個 VLM（圖片轉文字）技能包

## 原文要點

- **先學思考、再選工具**：不要綁定特定 AI 工具、AI 工具迭代快、先靠密涅瓦思考習慣提升思考力、再依問題選最佳工具
- **問對問題 = 目標→限制→障礙**：拆成三層產出問題規格書（PRD）、再用規格書指導 AI 開發解決方案
- **技能包 = 模板 + Reference**：光有模板不夠、要附範例和參考文獻才精準；技能包安裝後可持續優化
- **知識庫先轉 MD**：MD 是 AI 最容易讀且幻覺最少的格式；ChatGPT 直接轉長文會嚴重省略、doc-to-md 走本機程式不受上下文限制也不花 Token
- **做新東西前先蒐集 Best Practice**：用 Deep Research 找最佳實施案例、再請 Claude 設計技能包
- **Q&A 重點**：付費 AI 訂閱先用免費再付費；限制（不能改）vs 障礙（能排除）；公司用 Copilot 要守政策；訓練 AI 認識我要餵實際產出不是自我介紹；安裝失敗截圖+技能包丟 AI 分析；技能包改版輸出安裝檔留底備份；轉檔加思考習慣標籤方便搜尋
- **行動項目**：練習問對問題技能包；蒐集 AI 知識資料；試裝 doc-to-md；本月進階做 VLM 技能包；準備一對一諮詢

## 原始連結

- https://worldviewsacademy.circle.so/c/shifuclass/sections/1004867/lessons/3854248

## 落地動作與效益

**A. 芙莉蓮優化（高 ROI 組、2026-05-18 跟 Simon 對齊後執行）**：

- ✅ **A1 已做**：已將「複雜任務動手前先列目標→限制→障礙三層 PRD」寫成常駐規則；對應 [[problem-prd]] concept；預期效益：減少 AI 腦補、提早暴露限制 vs 障礙混淆、PRD 留底未來可追

**A 類不做**：
- **A2** skill description 補「附 reference 範例」原則 — 中 ROI 組、待 Simon 之後挑時實作；目前 [[skill]] concept 已寫雙要素、個別 skill 寫法可逐步補
- **A3** 寫自己的 doc-to-md skill — 低 ROI 組、需先試裝李佳達原版才能比較、待 B 類動作觸發後再評估

**B. Simon 個人動作**（lazy 追蹤、Simon 自己看狀態）：

- 看師父班 Lesson 1–10
- 試裝李佳達「專案管理（問題規格書）技能包」、看跟自己 PRD 版本差在哪
- 試裝 doc-to-md 技能包、跟既有 markdown 轉換流程比較
- 本月進階：用 Deep Research + Claude 做 VLM（圖片轉文字）技能包
