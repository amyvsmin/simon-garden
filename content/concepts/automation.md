---
title: "自動化（Automation）"
slug: automation
aliases: [Automation, 自動化, 自動化任務, automate, 自動化腳本]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

自動化是用技術減少人工與手動投入、來執行常見而重複的任務，把時間還給人去做別的活動。在資安領域，面對數百萬筆資料時人工逐筆處理不可行，[[python]] 這類語言讓你用十幾行程式碼在幾秒內完成同樣的事。[[conditional-statement]]（條件式）與 [[iterative-statement]]（迴圈）是自動化的關鍵——讓程式自己做判斷與重複。

## 關鍵面向

- **目的**：把單調、重複、易失焦的任務交給電腦，降低人為錯誤、節省時間
- **資安應用面**：log 分析、[[malware]] 分析、access control list 管理、入侵偵測、[[compliance]] 檢查、網路掃描
- **技術骨幹**：條件式（判斷）＋ 迴圈（重複）＋ 變數（記住狀態）的組合
- **價值感**：十行程式碼幾秒 parse 掉好幾 MB 資料，既高效又有成就感（Google 工程師 Akash 的觀點）

## 應用場景

- Simon 工作場景：個人側已自動化十一項；公司側選定「Veeam 月備份報表分析」為第一個自動化目標；accounting 月結管線已上線——都是把人工逐筆換成腳本秒級完成
- 一般場景：CI/CD、排程任務、批次資料處理、SOAR（[[soar]]）資安事件自動回應

## 相關概念

- [[python]]：資安自動化最常用的語言
- [[conditional-statement]]：自動化的判斷邏輯
- [[iterative-statement]]：自動化的重複執行
- [[soar]]：資安編排、自動化與回應（自動化在事件回應的延伸）

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-2-introduction-to-python-programming-in-cybersecurity/3-get-to-know-python|Course 7 Module 1 Section 2 Leaf 3 Get to know Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-4-conditional-and-iterative-statements/1-conditional-statements-in-python|Course 7 Module 1 Section 4 Leaf 1 Conditional statements in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-1-python-for-automation/2-automate-cybersecurity-tasks-with-python|Course 7 Module 4 Section 1 Leaf 2 Automate cybersecurity tasks with Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-1-python-for-automation/4-essential-python-components-for-automation|Course 7 Module 4 Section 1 Leaf 4 Essential Python components for automation]]
