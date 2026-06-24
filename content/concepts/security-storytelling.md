---
title: "資安故事化溝通（Security Storytelling）"
slug: security-storytelling
aliases: [Security Storytelling, security storytelling, 資安故事化溝通, 資安故事, security story, 資安說故事, telling a security story]
category: 資安
confidence: 已驗證
created: 2026-06-24
---

## 定義
把要給利害關係人的資安溝通，當成「說一個好故事」來組織的方法。一個資安故事講清楚三件事：資安挑戰是什麼、它如何衝擊組織、可能的解法；並佐以相關數據（彙整關鍵發現的報告，或需立即處理的問題清單）。目的是讓忙碌的 [[security-stakeholder]] 快速看懂、據以決策。

## 關鍵面向
- **故事結構**：像故事有開頭、中段、結尾，中間有衝突、最後有解決——對應「挑戰 → 影響 → 解法」
- **三步驟組裝（以日誌發現惡意程式碼為例）**：① 詳述問題；② 對照組織的 [[incident-response]] [[playbook]]、引用其建議指引（向主管證明你照流程走）；③ 提出可能的解法（入門分析師未必是決策者，但講清楚「發生什麼＋可能解法」本身就有價值）
- **多種載體**：email、分享文件、視覺化呈現（[[visual-dashboard]]）、事件管理／工單系統
- **價值定位**：會把資安故事講得有說服力又精簡的人，能幫利害關係人決策、讓他們工作更輕鬆；這結合「技術 ＋ 可遷移技能」，在缺乏業界資歷時能讓人脫穎而出

## 應用場景
- **Simon 工作場景**：寫資安事件回報、KPI 月簡報的骨架——按「問題 → 引用公司 SOP／劇本 → 建議處置」三段組織，跟 incident-response skill 同一精神
- **一般場景**：資安分析師對利害關係人溝通的通用框架，不限單一事件類型

## 相關概念
- [[security-stakeholder]]：資安故事說給誰聽的對象
- [[visual-dashboard]]：把資安故事「視覺化」呈現的載體
- [[playbook]]：故事第二步要對照引用的操作手冊
- [[incident-response]]：故事常圍繞的事件處理流程

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-3-communicate-effectively-to-influence-stakeholders/section-2-communicate-for-impact/2-building-blocks-of-cybersecurity-communications|Course 8 Module 3 Section 2 Leaf 2 Building blocks of cybersecurity communications]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-3-communicate-effectively-to-influence-stakeholders/section-3-visual-communication-using-a-dashboard/1-visual-storytelling-in-cybersecurity|Course 8 Module 3 Section 3 Leaf 1 Visual storytelling in cybersecurity]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-3-communicate-effectively-to-influence-stakeholders/section-4-review-communicate-effectively-to-influence-stakeholders/1-wrap-up|Course 8 Module 3 Section 4 Leaf 1 Wrap-up]]
