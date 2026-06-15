---
title: "事件回應（Incident Response）"
slug: incident-response
aliases: [incident response, IR, 事件回應, 事件處理, 資安事件回應, 事件應變, security incident response]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
偵測、分析、遏制、根除、復原資安事件並從中改進的結構化流程。NIST SP 800-61 定義四大階段：準備（Preparation）→ 偵測與分析（Detection & Analysis）→ 遏制、根除與復原（Containment, Eradication & Recovery）→ 事後活動（Post-Incident Activity）。目標是最小化損害、縮短恢復時間、防止再發。

## 關鍵面向
- **準備階段**：IR 計畫文件化、團隊組成（CSIRT）、工具與 runbook 備齊、定期演練
- **偵測與分析**：[[log]] 分析、[[anomaly-detection]] 告警、IOC（入侵指標）比對、事件分級（severity）
- **遏制策略**：短期遏制（隔離受影響系統）vs 長期遏制（修補漏洞後重新上線）
- **根除與復原**：清除惡意程式、修補漏洞、從乾淨備份還原、驗證系統完整性
- **事後改進**：Lessons Learned 會議、更新 IR 計畫、將新 IOC 回饋到偵測系統

## 應用場景
- **Simon 工作場景**：ISO 27001 A.16 資安事件管理控制項群的核心；月度資安 KPI 簡報需回報事件統計；公司 IR 計畫文件維護；Veeam 備份是復原階段的關鍵工具；Course 6 Detection and Response 會深入教
- **一般場景**：SOC 團隊日常、勒索軟體事件處理、GDPR 72 小時通報義務、資安保險理賠需要 IR 紀錄

## 相關概念
- [[log]]：偵測與分析階段的核心資料來源
- [[anomaly-detection]]：觸發 IR 流程的偵測機制
- [[ioc-search]]：IR 調查的第一波動作
- [[security-culture]]：文化好的組織通報快、IR 啟動快
- [[patch-management]]：根除階段常需要緊急修補

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
