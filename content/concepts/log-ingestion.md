---
title: "Log 收錄（Log Ingestion）"
slug: log-ingestion
aliases: [log ingestion, Log Ingestion, log 收錄, 日誌收錄, log 匯入, 日誌匯入, 收錄]
category: 資安
confidence: 待驗證
created: 2026-06-14
---

## 定義
把資料從各 log 來源收集並匯入 [[siem]] 的過程，是 SIEM 能運作的第一步——沒有資料餵進去，SIEM 無法分析。資料來自任何會產生 [[log]] 的來源（如伺服器）。

## 關鍵面向
- **複製不動原檔**：SIEM 收到事件資料後，在自己的儲存建立一份副本來分析處理，不直接改動原始來源 log，保全原檔不被污染。
- **集中平台**：收錄把多來源事件集中，提供分析師單一平台分析與回應事件；事件資料含認證嘗試、網路活動等。
- **收錄方式**：可手動上傳（效率低，網路動輒上千台裝置），實務多用 [[log-forwarder]] 自動化。
- **對應 SIEM 流程**：是 SIEM 三步（collect & aggregate → normalize → analyze）的第一步「收集與彙整」。

## 應用場景
- **Simon 工作場景**：把伺服器、防火牆、AD、OT 裝置的 log 接進 SIEM 的前置工作；理解收錄有助規劃 log source 接入，對應 ISO 27001 log 集中管理。
- **一般場景**：SOC 建置 SIEM 的第一步、log 來源盤點與接入。

## 相關概念
- [[siem]]：收錄是 SIEM 運作的第一步
- [[log-forwarder]]：自動化收錄的工具
- [[log]]：收錄的對象

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-3-overview-of-security-information-event-management-siem-tools/2-log-sources-and-log-ingestion|Course 6 Module 4 Section 3 Leaf 2 Log sources and log ingestion]]
