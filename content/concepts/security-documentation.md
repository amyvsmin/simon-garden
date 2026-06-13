---
title: "資安文件化（Security Documentation）"
slug: security-documentation
aliases: [Documentation, 文件化, 資安文件, 安全文件, security documentation, 文件, recorded content]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
任何為特定目的而記錄下來的內容（documentation）。在資安領域用來支援調查、完成任務、傳達發現，是分析師的核心工具。文件帶來三大好處：透明性（transparency）、標準化（standardization）、清晰（clarity）。一個關鍵命題：沒有文件，安全營運團隊永遠無法擴展超過一兩個分析師——因為「規則觸發代表什麼、嚴重性、誤報判斷、告警如何確認」若只在個人腦中，知識無法傳承。

## 關鍵面向
- **透明性（transparency）**：記錄讓「某事發生過」可追溯，可作為保險理賠、法規調查、法律程序的證據（典型載體 [[chain-of-custody]]）
- **標準化（standardization）**：建立可遵循的指引／標準（security policy、processes、procedures，對應 [[psp-hierarchy]]），維持工作品質
- **清晰（clarity）**：讓成員清楚角色職責與「怎麼完成工作」（典型載體 [[playbook]]）
- **三個 best practice**：know your audience（依讀者調整）、be concise（一開頭點明目的）、update regularly（隨威脅與法規演進更新）
- **可擴展性前提**：文件化是 SOC 從「靠少數老手」走向「可擴編團隊」的關鍵

## 應用場景
- **Simon 工作場景**：偵測規則文件、伺服器 SOP、ISO 27001 政策／程序文件；稽核時透明文件就是「證明做過」的證據
- **一般場景**：SOC 知識傳承、新進分析師訓練、合規稽核佐證

## 相關概念
- [[chain-of-custody]]：透明性的具體載體（證據監管鏈）
- [[playbook]]：清晰的具體載體（情境操作手冊）
- [[incident-response-plan]]、[[final-report]]：文件的具體類型
- [[psp-hierarchy]]：標準化對應的政策層級

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-2-create-and-use-documentation/1-the-benefits-of-documentation|Course 6 Module 3 Section 2 Leaf 1 The benefits of documentation]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-2-create-and-use-documentation/3-best-practices-for-effective-documentation|Course 6 Module 3 Section 2 Leaf 3 Best practices for effective documentation]]
