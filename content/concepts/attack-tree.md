---
title: "攻擊樹（Attack Tree）"
slug: attack-tree
aliases: [Attack Tree, 攻擊樹, 攻擊路徑樹, attack path tree]
category: 資安
confidence: 待驗證
created: 2026-05-30
query-count: 0
---

## 定義

攻擊樹是一張把「威脅對應到資產」的圖示（長得像流程圖），用來攤開「目標 → 資產位置 → 弱點 → 攻擊向量」之間的關係，並驗證所識別的威脅實際可行。

## 關鍵面向

- **結構**：根節點是攻擊目標（如顧客帳密），往下展開資產所在（資料庫）、可被利用的弱點、以及具體 [[attack-vector]]
- **範例分支**：帳密（目標）→ 存在資料庫 → 資料庫易受 [[sql-injection]] → 威脅者利用未過濾輸入攻擊此向量
- **用途**：找出「需要實際測試以驗證威脅」的攻擊向量；真實應用通常有很多分支
- **產出時機**：[[pasta-framework]] 第六階段（攻擊建模）；可搭配 [[mitre-attack]]、[[cve-list]] 佐證分支可行性
- **跟 data flow diagram 互補**：data flow diagram 看「資料怎麼流」，attack tree 看「攻擊怎麼走」

## 應用場景

- **Simon 工作場景**：對公司關鍵系統（如對外平台、資料庫）做威脅建模時，針對高價值資產畫一條 attack tree，把可能的攻擊路徑攤開，決定優先測試／補強哪條
- **一般場景**：應用程式威脅建模、滲透測試規劃、風險評估時的攻擊路徑視覺化

## 相關概念

- [[threat-modeling]]：attack tree 是威脅建模的核心產出之一
- [[pasta-framework]]：第六階段建 attack tree
- [[attack-vector]]：attack tree 的葉節點
- [[attack-surface]]：attack tree 從攻擊面上的進入點展開

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/1-a-proactive-approach-to-security|Course 5 Module 4 Section 4 Leaf 1 A proactive approach to security]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/4-pasta-the-process-for-attack-simulation-and-threat-analysis|Course 5 Module 4 Section 4 Leaf 4 PASTA: The Process for Attack Simulation and Threat Analysis]]
