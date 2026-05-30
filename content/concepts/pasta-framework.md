---
title: "PASTA 威脅建模框架（Process for Attack Simulation and Threat Analysis）"
slug: pasta-framework
aliases: [PASTA, Process for Attack Simulation and Threat Analysis, PASTA 框架, 攻擊模擬與威脅分析流程, 七階段威脅建模]
category: 資安
confidence: 待驗證
created: 2026-05-30
query-count: 0
---

## 定義

PASTA（Process for Attack Simulation and Threat Analysis）是風險導向（risk-centric）、以證據為本（evidence-based）的七階段威脅建模框架，由兩位 OWASP 領導者開發、資安公司 VerSprite 支持，跨產業通用。把 [[threat-modeling]] 的通用流程實例化成可操作的七個階段。

## 關鍵面向

- **七階段**：① 定義業務與安全目標 ② 定義技術範圍（＝盤 [[attack-surface]]）③ 分解應用程式（畫 data flow diagram）④ 威脅分析（切換 [[attacker-mindset]]）⑤ 弱點分析 ⑥ 攻擊建模（建 [[attack-tree]]、模擬攻擊）⑦ 分析風險與衝擊
- **風險導向**：以「對業務的風險」排序威脅，最終產出是給利害關係人的風險管理建議
- **證據為本**：第六階段用 [[mitre-attack]] 與 [[cve-list]] 等外部資源驗證威脅「真的可行」，不是憑空臆測
- **納入安全產物**：流程會吃環境既有的弱點評估報告等 security artifacts
- **適用對象**：可套用在應用程式本身、或支撐該應用的環境

## 應用場景

- **Simon 工作場景**：任何「要上線的新系統／對外服務」評估都可套——stage 2 圈攻擊面、stage 3 向開發商要 data flow diagram、stage 6 對「帳密→資料庫→SQL injection」建 attack tree；跟 ISO 27001 風險評鑑、SQL Server MFA／Silverfort 專案直接接得上
- **一般場景**：應用程式安全設計、DevSecOps 流程中的威脅建模階段、紅隊演練前的威脅盤點

## 相關概念

- [[threat-modeling]]：PASTA 是其中一種具體框架
- [[stride]]：另一個常見威脅建模框架（微軟、逐攻擊向量）
- [[attack-tree]]：PASTA 第六階段的產出
- [[attack-surface]]：PASTA 第二階段要盤的對象
- [[mitre-attack]]：第六階段驗證威脅可行性的來源

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/4-pasta-the-process-for-attack-simulation-and-threat-analysis|Course 5 Module 4 Section 4 Leaf 4 PASTA: The Process for Attack Simulation and Threat Analysis]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/8-activity-exemplar-apply-the-pasta-threat-model-framework|Course 5 Module 4 Section 4 Leaf 8 Activity Exemplar: Apply the PASTA threat model framework]]
