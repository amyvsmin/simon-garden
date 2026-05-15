---
name: 訪談式提示（Interview-Driven Prompting / AskUser Pattern）
aliases: [訪談式 prompt, interview-driven prompting, askuser pattern, AskUser, ask user pattern, AI 反問防腦補, 訪談式互動]
category: AI
status: active
confidence: unverified
created: 2026-05-11
last-queried: ""
query-count: 0
---

## 定義

AI 在執行任務前先反問使用者一系列釐清問題（通常是選擇題）、確認任務範圍跟使用者真實需求對齊、再開始實作。Claude 內建的 AskUser 機制就是這個模式的直接落地。**核心信念：AI 在資訊不足時的腦補品質遠低於人類在資訊不足時的主動詢問。**

## 關鍵面向

- **觸發時機**：任務描述含糊、可能多解、或牽涉使用者私有上下文時觸發；不是每個任務都要訪談
- **問題類型**：選擇題（含 A／B／C 選項）優於開放題、降低使用者輸入成本；選項要互斥、不要有「以上皆是」這種空答
- **AskUser 機制**：Claude 內建工具、skill 只要在描述中說「請與我確認」就會自動觸發、不需要在 skill 裡明寫 ask tool
- **防腦補機制**：AI 預設行為是用訓練資料補空白；訪談強制 AI 暴露不確定處、把判斷權交回使用者
- **跟 Plan Mode 的差異**：Plan Mode 是 AI 自己擬計畫等使用者確認；訪談是 AI 主動問問題收集資訊、再擬計畫
- **使用者端配合**：用語音輸入工具（Typeless）+ comment 風格回應可降低訪談的回應摩擦

## 應用場景

- Simon 工作場景：你既有 weekly-review／monthly-review skill 已含訪談元素；可考慮在 KW γ 收錄遇到模糊輸入（例如 URL 連到的不是文章而是 GitHub repo、或同名概念不確定該擴寫哪一個）時主動問；substack-publish skill 在「標題／subtitle」這一層可走訪談
- 一般場景：任何「使用者場景比 AI 訓練語料還私密」的領域（公司內部流程、家庭關係、個人偏好）；外包接案的客戶需求釐清；課程設計師釐清業主期待

## 相關概念

- [[ai-task-clustering]]：cluster 是第一階段「不問動手」、訪談是第二階段「問了再動」
- [[template-reference-pattern]]：訪談 + template reference 是雙保險防腦補
- [[skill]]：訪談元素可固化在 skill description 裡

## 尚未解決的疑問

- 訪談問太多會打斷使用者心流、最佳問題數量上限是多少？
- 同樣的訪談問題答過一次後、AI 該記住還是該重問？

## 來源（自動維護）

- [[2026-05-11-josie-claude-code-obsidian-project-planner]]
