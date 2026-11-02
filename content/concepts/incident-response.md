---
title: "事件回應（Incident Response）"
slug: incident-response
aliases: [incident response, IR, 事件回應, 事件處理, 資安事件回應, 事件應變, security incident response]
category: 資安・安全營運
confidence: 已驗證
created: 2026-05-25
---

## 定義
組織發現資安事件後，用事先準備好的結構化流程偵測、分析、遏制、根除、復原，並從中改進的整套做法。目標是把損害降到最低、縮短恢復時間、防止同類事件再發。本卡是導覽卡，各階段要做什麼集中在 [[incident-response-lifecycle]]。

## 關鍵面向
- **為什麼重要**：事件一定會發生，差別在發生時有沒有準備好。沒有流程的團隊，常在遏制前就先刪掉證據、或在還沒清乾淨時就讓系統重新上線
- **階段框架在哪**：NIST SP 800-61 Rev. 2（2012）的四階段生命週期（準備、偵測與分析、遏制根除與復原、事後活動）是課程與考試的骨架，逐階段細節見 [[incident-response-lifecycle]]
- **框架版本**：NIST 在 2025-04 發布 Rev. 3 取代 Rev. 2，改以 [[nist-csf]] 2.0 的六大功能整合事件回應；Rev. 3 是否完全取代四階段圖、新模型的細節**待驗證**（2026-11-02 只查到 NIST 公告，未讀全文）
- **事件從哪裡開始**：什麼算事件、要不要升級，見 [[security-incident]]、[[incident-classification]]、[[incident-escalation]]

## 應用場景
- **Simon 工作場景**：ISO 27001 資安事件管理的核心（2013 版 A.16；2022 版拆成 A.5.24～A.5.27 與 A.6.8）；月度資安 KPI 簡報需回報事件統計；公司 IR 計畫文件維護；Veeam 備份是復原的關鍵工具；自製的 incident-response skill 六階段可對齊 [[incident-response-lifecycle]] 校準
- **一般場景**：SOC 團隊日常、勒索軟體事件處理、GDPR 72 小時通報義務、資安保險理賠需要 IR 紀錄

## 相關概念
- [[incident-response-lifecycle]]：四階段的結構化展開，各階段細節都在這張
- [[security-incident]]：判斷是不是事件、要不要啟動 IR
- [[incident-classification]]、[[incident-escalation]]：事件分類與升級
- [[csirt]]：執行事件回應的團隊
- [[nist-csf]]：上層框架，Rev. 3 起以其六大功能整合事件回應
- [[log]]、[[anomaly-detection]]：偵測的資料來源與機制
- [[ioc-search]]：調查的第一波動作
- [[security-culture]]：文化好的組織通報快、IR 啟動快
- [[patch-management]]：根除時常需要緊急修補

## 來源

- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-2-the-incident-response-lifecycle/2-introduction-to-the-incident-response-lifecycle|Course 6 Module 1 Section 2 Leaf 2 Introduction to the incident response lifecycle]]
- NIST SP 800-61 Rev. 3 發布頁 https://csrc.nist.gov/pubs/sp/800/61/r3/final 與 NIST 公告 https://csrc.nist.gov/news/2025/nist-revises-sp-800-61 （2025-04，2026-11-02 查）
