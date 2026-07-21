---
title: "MITRE ATT&CK"
slug: mitre-attack
aliases: [MITRE ATT&CK, ATT&CK, MITRE ATTACK, 對手戰術與技術知識庫, ATT&CK framework]
category: 資安・安全營運
confidence: 已驗證
created: 2026-05-30
---

## 定義

MITRE ATT&CK 是由 MITRE 維護的對手戰術（Tactics）與技術（Techniques）公開知識庫，把真實世界觀察到的攻擊行為結構化編目。威脅建模與偵測工程用它來確認「攻擊手法是否真實存在、可行」。

## 關鍵面向

- **戰術 × 技術矩陣**：以「攻擊者想達成什麼（戰術）」對應「具體怎麼做（技術）」的矩陣，涵蓋偵察、初始存取、提權、橫向移動、外洩等階段
- **威脅建模證據來源**：在 [[pasta-framework]] 第六階段 attack modeling 時，跟 [[cve-list]] 一起當「驗證威脅可行性」的權威參考——確保 [[attack-tree]] 畫的威脅不是憑空臆測
- **共通語言**：讓不同團隊、工具、報告用同一套 ID（如 T1566 Phishing）指稱同一種攻擊技術
- **偵測對照**：藍隊用 ATT&CK 對照自己的偵測涵蓋範圍、找出盲點（Course 6 偵測與應變會深入）

## 應用場景

- **Simon 工作場景**：弱點管理／威脅情報時，把 ATT&CK 當「攻擊者會怎麼用這個弱點」的對照表；SIEM／偵測規劃時用 ATT&CK 盤點偵測涵蓋率
- **一般場景**：SOC 偵測工程、威脅情報分析、紅藍隊演練的共通語言、資安報告的技術編號標準
- **iPAS 備考**：五堂 Windows 滲透 Lab 的攻擊鏈逐步對映到 14 戰術＋技術編號（含 v18／v19 版本差異），見 [[6-attack-chain-attack-map|Windows 滲透攻擊鏈 × ATT&CK 戰術對映]]

## 相關概念

- [[cve-list]]：ATT&CK 對應「攻擊技術」、CVE 對應「具體弱點」，attack modeling 兩者並用
- [[pasta-framework]]：第六階段用 ATT&CK 驗證威脅
- [[attack-tree]]：用 ATT&CK／CVE 佐證 attack tree 的分支
- [[attacker-mindset]]：ATT&CK 是攻擊者思維的結構化編目

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-4-threat-modeling/8-activity-exemplar-apply-the-pasta-threat-model-framework|Course 5 Module 4 Section 4 Leaf 8 Activity Exemplar: Apply the PASTA threat model framework]]
- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
