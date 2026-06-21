---
title: "Python（程式語言）"
slug: python
aliases: [Python, Python 3, Python programming language, Python 程式語言, 派森]
category: 資安
confidence: 已驗證
created: 2026-06-21
---

## 定義

Python 是一種 general-purpose（通用）程式語言，能解多種問題——建網站、資料分析、自動化任務。程式碼必須先經 [[interpreter]]（直譯器）逐行轉換，電腦才能處理。本課程使用 Python 3；不同版本的 [[python-syntax]] 有差異，寫程式要清楚自己用哪一版。在資安領域，Python 最主要的用途是 [[automation]]。

## 關鍵面向

- **通用、低語法門檻**：用較少語法就能指揮電腦做複雜處理；程式語言最終都會被轉成 binary（0 與 1）讓 CPU 執行
- **直譯而非編譯**：Python 程式經 [[interpreter]] 逐行翻成可執行指令
- **版本意識**：Python 3 是當前主流；版本間語法有差異，可攜腳本（跨 WSL／Windows）尤其要留意
- **資安主場**：適合把人工做不來的大量資料處理自動化——log 分析、[[malware]] 分析、access control list 管理、入侵偵測（[[ids]]）、[[compliance]] 檢查、網路掃描

## 應用場景

- Simon 工作場景：本機已用 Python 寫多支工具——accounting 電子發票解析、Veeam 報表分析、to-md 逐字稿清洗；後續可把更多公司重複性 IT 任務腳本化
- 一般場景：自動化腳本、資料分析、web 開發、資安工具開發

## 相關概念

- [[interpreter]]：Python 程式碼要先經直譯器逐行轉換才能跑
- [[automation]]：Python 在資安的核心用途
- [[python-syntax]]：判定程式結構是否正確的規則、版本間有差異
- [[data-type]]、[[variable]]、[[conditional-statement]]、[[iterative-statement]]：Python 的基本構成元件

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-2-introduction-to-python-programming-in-cybersecurity/3-get-to-know-python|Course 7 Module 1 Section 2 Leaf 3 Get to know Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-5-review-introduction-to-python/1-wrap-up|Course 7 Module 1 Section 5 Leaf 1 Wrap-up]]
