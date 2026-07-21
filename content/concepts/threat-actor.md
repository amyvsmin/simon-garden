---
title: "威脅行為者（Threat Actor）"
slug: threat-actor
aliases: [Threat Actor, 威脅行為者, 威脅來源, 攻擊者, malicious actor, 惡意行為者]
category: 資安・風險管理
confidence: 已驗證
created: 2026-05-25
---

## 定義

對組織資產構成威脅的個人或團體。依動機、資源、技術能力可分為不同類型，理解威脅行為者的分類有助於精準評估風險並配置防禦資源。

## 關鍵面向

- **四大分類**：
  - **國家級（Nation-state）**：政府資助，資源充沛，目標為情報蒐集或破壞，如 [[apt]] 組織
  - **犯罪組織（Organized Crime）**：以金錢利益為動機，常用勒索軟體、商業郵件詐騙
  - **駭客主義者（Hacktivist）**：基於政治或社會理念發動攻擊，目標是曝光或癱瘓
  - **內部人員（Insider）**：擁有合法存取權限的現任或前員工，見 [[insider-threat]]
- **動機光譜**：從純經濟利益到政治目的到個人報復，動機決定攻擊手法與目標選擇
- **能力差異**：腳本小子（script kiddie）用現成工具 vs 國家級自研 zero-day，防禦策略截然不同
- **情資來源**：MITRE ATT&CK 框架將已知威脅行為者的 TTP（戰術、技術、程序）系統化歸檔

## 應用場景

- **Simon 工作場景**：光電半導體產業是國家級 [[apt]] 的目標產業；ISO 27001 風險評鑑需識別公司面臨的主要威脅行為者類型；內部人員威脅需搭配 Omnissa MDM 與存取控制機制管控
- **一般場景**：[[threat-modeling]] 的第一步就是列出可能的威脅行為者；資安事件調查（IR）時需判斷攻擊者類型以決定回應力度

## 相關概念

- [[apt]]：國家級威脅行為者的典型形式
- [[insider-threat]]：內部人員作為威脅行為者的專題
- [[hacker]]：依動機分白帽/黑帽/灰帽的分類框架
- [[threat-modeling]]：識別威脅行為者是建模的關鍵輸入
- [[attack-vector]]：不同威脅行為者偏好不同的攻擊向量

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-3-cyber-attacker-mindset/3-types-of-threat-actors|Course 5 Module 3 Section 3 Leaf 3 types of threat actors]]
