---
title: "攻擊向量（Attack Vector）"
slug: attack-vector
aliases: [Attack Vector, 攻擊向量, 攻擊路徑, attack path, 入侵途徑]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義

攻擊者用來突破目標系統安全防線的路徑或方法。每一條攻擊向量對應一種可被利用的進入方式，常見類型包括釣魚郵件、惡意 USB、Web 應用漏洞、供應鏈植入等。

## 關鍵面向

- **分類方式**：依媒介分為網路型（遠端漏洞利用、釣魚）、實體型（[[usb-baiting]]、實體入侵）、社交工程型（電話詐騙、冒充身份）
- **與攻擊面的關係**：[[attack-surface]] 是所有可能被攻擊的點的集合，攻擊向量是攻擊者實際選擇走的那條路
- **防禦對策**：[[defense-in-depth]] 思維要求對每條主要攻擊向量都有對應控制措施
- **演進趨勢**：AI 工具降低攻擊門檻，新向量（如 [[apt]] 級別的供應鏈攻擊）持續出現
- **NIST 框架對應**：[[nist-csf]] Identify 功能要求組織盤點已知攻擊向量

## 應用場景

- **Simon 工作場景**：ISO 27001 風險評鑑需列出公司面臨的主要攻擊向量（郵件釣魚、VPN 暴露、USB 裝置）；Omnissa MDM 管控行動裝置這條攻擊向量；BIGFIX POC 涵蓋未修補漏洞的遠端利用向量
- **一般場景**：滲透測試（[[penetration-testing]]）報告以攻擊向量分類發現項；[[threat-modeling]] 的輸入之一就是列舉攻擊向量

## 相關概念

- [[attack-surface]]：攻擊面是所有可攻擊點的總和，攻擊向量是實際走的路徑
- [[threat-actor]]：不同威脅行為者偏好不同的攻擊向量
- [[exploit]]：攻擊向量被實際利用時使用的技術手段
- [[vulnerability]]：攻擊向量能成功的前提是目標存在可利用的弱點

## 來源

- Course 5 Assets, Threats, and Vulnerabilities — Module 3
