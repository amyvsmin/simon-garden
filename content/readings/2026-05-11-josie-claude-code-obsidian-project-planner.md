---
title: "Josie：Claude Code × Obsidian 專案管理五階段（cluster／template reference／AskUser 訪談／封裝 skill／自滾動 pipeline）"
date: 2026-05-11
type: 來源分析
url: "https://www.youtube.com/watch?v=dl6DLAOTNtc"
inbox-id: "35df85da-554f-8183-a1c1-c73d36276b4a"
concepts: [ai-task-clustering, interview-driven-prompting, template-reference-pattern, skill, obsidian-claude-code-workflow]
projects: []
created: 2026-05-11
---

# Josie：Claude Code × Obsidian 專案管理五階段

## 摘要

Josie 分享她從 2023 年起在 Obsidian 累積 50+ 專案筆記、現在用 Claude Code（Claudian plugin）讓 AI 接手部分管理工作的演進路徑。核心發現：AI 不該直接幫你拆任務、會大量腦補不必要事項；正確做法是先讓 AI 做 cluster 分組、再用既有 template 當 reference、最後透過 AskUser 訪談式互動鎖定真正需要的任務。成功的對話流程封裝成 skill 可重複觸發；完成的專案再抽出 template 加入下次 reference、形成自滾動成長的 pipeline。

## 核心概念

- [[ai-task-clustering]]：給 AI 一堆零碎任務、只請它分組、不請它拆解或腦補；引入 AI 管理任務時阻力最低的第一步
- [[template-reference-pattern]]：把過去 50+ 專案筆記當 AI 的「個人案例語料」、AI 用使用者自己的脈絡而非網路通用 best practice 推理、徹底避免腦補
- [[interview-driven-prompting]]：用 AskUser 機制讓 AI 在拆解前先反問釐清題、防止 AI 把對方公司內部流程（如中華電信公文）誤加進我的任務清單
- [[skill]]：當對話得到滿意結果後、直接請 Claude 把這段流程封裝成 skill（不是 prompt）；之後同類專案直接觸發 skill 自動跑
- [[obsidian-claude-code-workflow]]：整套流程是「Obsidian vault（資料層）+ Claude Code（處理層）+ Claudian plugin（橋接）+ skill（封裝）」的具體實作

## 對 Simon 的應用

- **Knowledge Wiki γ 已踏在這條路上**：你的 vault 1b 結構 + course-notes skill + KW γ 收錄 skill 跟 Josie 路徑同源；可以參考她「完成案例後抽 template」的習慣、把每次跑完的 reading 流程當素材回去訓練 skill
- **AskUser 訪談式互動值得學**：你的 weekly-review／monthly-review skill 已含訪談元素、可考慮在 KW γ 收錄遇到模糊輸入（例如 URL 連到的不是文章而是 GitHub repo）時主動問你；substack-publish skill 在「標題、subtitle」這一層也適合走訪談
- **既有 readings 當 reference**：你已累積 30+ readings + 56 concepts；未來實驗讓我（福利員）寫新 reading 時先 reference 既有結構、確保穩定度
- **「對話成功 → 封裝成 skill」是 ROI 最高的閉環**：下次發現自己對我下同樣 prompt 三次以上、直接喊「把這個變 skill」就會自動觸發 skill-creator；不必每次都從零想新 skill

## 原文要點

- **第一步 cluster**：只給 AI 「我有這些任務、幫我分組、不要動我的內容」；AI 在這個受限任務裡最穩定、腦補空間最小
- **第二步 template reference**：給 AI 你曾經做過的 50+ 專案筆記當 reference；AI 拿你的脈絡跟新任務對照、補你沒想到但「過去做過」的環節
- **第三步 AskUser 訪談**：AI 不直接拆任務、先反問「中華電信內部公文是否需要追蹤？」這種釐清題；Josie 用 comment 方式回覆、用 Typeless 語音輸入直接講
- **第四步 prompt 封裝成 skill**：對話得到滿意結果後、請 Claude 「直接幫我寫成一個 skill」（不是 prompt）；下次同類專案觸發 skill 即跑同樣流程；Josie 自己的 skill 叫 `project planner`
- **第五步 自滾動 pipeline**：完成的專案 → 抽取成 template → 再加入下次的 reference 庫；pipeline 自己長大、AI 越用越貼合使用者
- **AskUser 是 Claude 內建功能**：skill 裡只要說「請與我確認」、Claude 會自動觸發 AskUser、不需要在 skill 裡寫工具
- **應用實例**：知識衛星 SAT 業配（EsOr 線上課程）→ Josie 直接觸發 project planner skill → AskUser 訪談確認檔期／交付物／請款流程 → 產出 doable 的任務清單
- **背景脈絡**：Josie 從 2023 年起累積 50+ 專案筆記、Obsidian 標題格式固定 `P{date} {course_name} @{窗口}`；之前是手工為公部門講座、中華電信內訓、公開課等各建 template、現在用 AI reference 取代

## 原始連結

- [Josie 訪談 — Claude Code × Obsidian 專案管理](https://www.youtube.com/watch?v=dl6DLAOTNtc)
