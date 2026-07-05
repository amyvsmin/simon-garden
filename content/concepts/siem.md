---
title: "資安資訊與事件管理（SIEM）"
slug: siem
aliases: [SIEM, security information and event management, 資安資訊與事件管理, 安全資訊與事件管理, SIEM tool, SIEM 工具]
category: 資安
confidence: 已驗證
created: 2026-06-05
---

## 定義
蒐集並分析 [[log]] 資料以監看組織關鍵活動的應用程式，給資安人員網路活動的高層次即時總覽（汽車儀表板類比：不必逐一檢查零件，儀表板即時提示異常）。三步驟處理流程：collect & aggregate（彙整）→ normalize（正規化）→ analyze（依規則分析並發告警）。

## 關鍵面向
- **三大優勢**：即時存取事件資料、即時監看偵測告警、log 留存（歷史資料）
- **collect & aggregate**：從 IDS／IPS、資料庫、防火牆、應用程式等多來源收 log，集中一處；可做 parsing（把 log 拆成 field／value）
- **normalize**：清掉非必要屬性、統一格式，讓不同來源 log 一致好搜尋
- **analyze**：套 detection rule，命中發告警；含 correlation（比對多筆 log 找威脅模式）
- **常見工具**：Splunk、Chronicle（Google SecOps）、AlienVault OSSIM、Elastic、Exabeam、IBM QRadar、LogRhythm

## 應用場景
- **Simon 工作場景**：對應公司在評估／導入的偵測平台（Splunk、Chronicle）；理解 collect→normalize→analyze 有助規劃 log source 接入與規則調校，對應 ISO 27001 log 保存
- **一般場景**：SOC 告警分流核心、合規日誌留存、事件調查的集中查詢平台

## 相關概念
- [[log]]：SIEM 的原料
- [[soar]]：SIEM 回報給人看，SOAR 自動化回應
- [[soc]]：SIEM 是 SOC 監看的核心工具
- [[ids]]、[[ips]]：SIEM 的資料來源之一

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/6-alert-and-event-management-with-siem-and-soar-tools|Course 6 Module 1 Section 4 Leaf 6 Alert and event management with SIEM and SOAR tools]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/7-overview-of-siem-technology|Course 6 Module 1 Section 4 Leaf 7 Overview of SIEM technology]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
