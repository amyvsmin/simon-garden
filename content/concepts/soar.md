---
title: "資安編排、自動化與回應（SOAR）"
slug: soar
aliases: [SOAR, security orchestration automation and response, 資安編排自動化與回應, 安全編排自動化與回應, SOAR tool]
category: 資安
confidence: 待驗證
created: 2026-06-05
---

## 定義
一組用自動化來回應資安事件的應用、工具與工作流（Security Orchestration, Automation, and Response）。與 [[siem]] 的差別：SIEM 蒐集、分析、回報事件給「分析師檢視」；SOAR 把分析與回應「自動化」，還能追蹤管理 case（多個相關 incident 組成一個 case，集中檢視）。

## 關鍵面向
- **orchestration（編排）**：串接多個工具與系統的動作成一條工作流
- **automation（自動化）**：自動執行重複的分析與回應動作，減少人工
- **response（回應）**：對事件採取行動，而非只發告警
- **case 管理**：把多個相關 incident 聚合成 case，集中檢視與處理
- **與 SIEM 互補**：SIEM 偵測回報、SOAR 自動處置，常搭配使用

## 應用場景
- **Simon 工作場景**：對應未來把重複的事件回應動作自動化，呼應自製 incident-response skill、走自動化的取向
- **一般場景**：SOC 降低告警疲勞、加速 MTTR、標準化回應 playbook 自動執行

## 相關概念
- [[siem]]：偵測回報端，SOAR 是自動回應端
- [[playbook]]：SOAR 自動執行的回應劇本
- [[incident-response]]：SOAR 自動化的是 IR 的分析與回應

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/6-alert-and-event-management-with-siem-and-soar-tools|Course 6 Module 1 Section 4 Leaf 6 Alert and event management with SIEM and SOAR tools]]
