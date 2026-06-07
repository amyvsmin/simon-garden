---
title: "事件應變計畫（Incident Response Plan）"
slug: incident-response-plan
aliases: [incident response plan, IRP, 事件應變計畫, 事件回應計畫, 事故應變計畫, IR plan]
category: 資安
confidence: 待驗證
created: 2026-06-05
query-count: 0
---

## 定義
列出事件應變每個步驟所需程序的文件（Incident Response Plan, IRP），讓組織有準備好、一致的流程能在事件發生時快速反應。IRP 依組織的 mission、size、culture、industry、structure 客製；小組織可能把它併進 security plan，其他組織分成獨立文件。本質上是 [[psp-hierarchy]] 中程序層的展開。

## 關鍵面向
- **三類共通內容**：① incident response procedures（逐步應變指示）② system information（網路圖、資料流圖、logging、[[asset]] 清冊）③ 其他文件（聯絡清單、表單、範本）
- **客製化**：沒有單一標準，依組織需求與法規增刪合併
- **定期測試**：用 tabletop（桌上演練）或 simulation 找流程缺口、確保團隊熟悉，部分法規要求特定演練
- **與 playbook 的關係**：IRP 是整體計畫，[[playbook]] 是針對特定情境的細部操作手冊

## 應用場景
- **Simon 工作場景**：IRP 三類內容清單可直接當公司事件處理 SOP 的目錄骨架，對應 ISO 27001 A.16；tabletop 演練對應事件管理測試要求
- **一般場景**：企業 ISMS 文件、稽核要求的 IR 計畫、SOC 標準作業

## 相關概念
- [[incident-response]]：IRP 是 IR 流程的書面化計畫
- [[playbook]]：IRP 之下針對特定情境的操作手冊
- [[psp-hierarchy]]：IRP 屬程序層
- 文件（documentation）：IRP 是文件的一種

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-3-incident-response-operations/4-incident-response-plans|Course 6 Module 1 Section 3 Leaf 4 Incident response plans]]
