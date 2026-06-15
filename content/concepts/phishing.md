---
title: "釣魚（Phishing）"
slug: phishing
aliases: [Phishing, 釣魚, 網路釣魚, phishing-types, 釣魚類型, phishing-kit, 釣魚工具包, spear phishing, 魚叉式釣魚, whaling, 鯨釣, smishing, 簡訊釣魚, vishing, 語音釣魚, angler phishing]
category: 資安
confidence: 待驗證
created: 2026-05-30
---

## 定義

釣魚是用數位通訊（email、簡訊、語音、社群媒體）誘騙他人洩漏敏感資料或部署惡意軟體的攻擊，是 [[social-engineering]] 最常見的具體手法。

## 關鍵面向

- **常見類型**：spear phishing（魚叉式，針對特定對象）、whaling（鯨釣，鎖定高階主管）、smishing（簡訊釣魚）、vishing（語音釣魚）、angler phishing（假客服釣魚，在社群媒體假冒客服）
- **phishing kit（釣魚工具包）**：發動釣魚活動所需的軟體工具集，降低攻擊門檻
- **目的**：騙取 credentials、誘點惡意連結、投遞 [[malware]]
- **防禦**：email filtering（郵件過濾）、[[security-awareness-training]]、通報機制、MFA（即使帳密外洩仍多一道關卡）

## 應用場景

- **Simon 工作場景**：公司最高頻的真實威脅——對應郵件過濾規則、定期釣魚演練、員工通報流程；MFA／Silverfort 專案降低帳密被釣後的衝擊
- **一般場景**：企業釣魚演練、SOC 釣魚事件處理、防詐教育

## 相關概念

- [[social-engineering]]：phishing 是其最常見手法
- [[malware]]：phishing 常用來遞送 malware
- [[security-awareness-training]]：phishing 的主要防禦
- [[threat-actor]]：發動釣魚的攻擊者

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-1-social-engineering/4-phishing-for-information|Course 5 Module 4 Section 1 Leaf 4 Phishing for information]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-1-social-engineering/5-types-of-phishing|Course 5 Module 4 Section 1 Leaf 5 Types of phishing]]
