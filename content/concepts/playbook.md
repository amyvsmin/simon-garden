---
title: "劇本（Playbook）"
slug: playbook
aliases: [Playbook, 劇本, 手冊, 應變手冊, 操作手冊, runbook, incident playbook, 事件劇本]
category: 資安
confidence: 已驗證
created: 2026-06-05
---

## 定義
提供任何 operational action（操作動作）細節的手冊。在事件應變中，playbook 的作用像「產品說明書」——把某類事件（如釣魚、勒索）該怎麼一步步處理寫成可照做的指引，確保不同人、不同時間的反應一致。是文件（documentation）的一種類型，也是 [[soar]] 自動執行的回應依據。

## 關鍵面向
- **操作導向**：逐步說明某情境下要做什麼、按什麼順序
- **一致性**：讓任何人照著做都得到一致、可預期的處理
- **類型**：incident response playbook、phishing playbook、特定攻擊應變 playbook 等
- **與 plan 的關係**：[[incident-response-plan]] 是整體計畫，playbook 是針對特定情境的細部操作手冊
- **自動化**：SOAR 可把 playbook 變成自動執行的工作流

## 應用場景
- **Simon 工作場景**：可為公司常見事件（釣魚、勒索、帳號異常）各寫一份 playbook，納入事件處理 SOP，對應 ISO 27001 事件管理
- **一般場景**：SOC 標準化處置、SOAR 自動回應、新進分析師訓練教材

## 相關概念
- 文件（documentation）：playbook 是其中一種
- [[incident-response-plan]]：計畫層，playbook 是其下的情境操作手冊
- [[soar]]：自動執行 playbook 的工具

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/2-the-value-of-documentation|Course 6 Module 1 Section 4 Leaf 2 The value of documentation]]
