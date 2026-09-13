---
title: "PACE 接力"
slug: pace-relay
aliases: [PACE 接力, PACE relay, PACE 任務軸, 能力接力鏈]
category: AI 與 Agent
confidence: 已驗證
created: 2026-09-13
---

## 定義
複雜任務很難只靠 PACE 四能力（觀點打造 P、自我覺察 A、策略顧問 C、認知拓展 E）中的一個解決，要把它們像接力棒一樣串成一條路徑，前一棒的產出直接當下一棒的輸入。

## 關鍵面向
- 跟 [[pace-as-flowing-state]] 是同一套框架的兩個切面：那邊用「時間軸」看一天怎麼流動，這邊改用「任務軸」看單一任務內部怎麼接力。
- 接力前先問三題（見 [[three-starting-questions]]）：我現在是什麼狀態、我手上有什麼資源、我最後要得到什麼——想清楚了，該走 E、C 還是 P 自然浮現。
- 路徑有兩個方向：由外而內（從外部資料出發、先收斂再收進自己）跟由內而外（從自己內心出發、先釐清再往外產出），見 [[outside-in-vs-inside-out]]。

## 應用場景
- Simon 工作場景：瓦基一天的接力範例是「學習筆記 → 觀點作品引擎 → 卡住時開智囊團」；我們對應的 skill（`opinion-piece`／`advisory-council`）功能都在，但彼此獨立啟動、少有明文交棒，是目前的落差。
- 一般場景：任何「先想清楚、再產出、卡關時找外部視角」的複雜任務，都可以套這條接力鏈，而不是硬套一個單一能力打到底。

## 相關概念
- [[pace-as-flowing-state]]：同一框架的時間軸視角。

## 尚未解決的疑問
- 我們的 skill 生態要用什麼機制（明文交棒提示？固定流程模板？）才能補上瓦基那種「產出自動餵給下一包」的接力習慣。

## 來源（自動維護）
- [[1-learning/sat-cool/wagi-ai-second-brain/ch12-pace-integration/2-common-scenarios-reverse-thinking|瓦基 AI 第二大腦 CH12 12-2 常見情境與逆向思考]]
