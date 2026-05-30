---
title: "社交工程（Social Engineering）"
slug: social-engineering
aliases: [Social Engineering, 社交工程, 社會工程, social-engineering-tactics, 社交工程手法, social-engineering-stages, 社交工程階段, human hacking]
category: 資安
confidence: 待驗證
created: 2026-05-30
query-count: 0
---

## 定義

社交工程是利用人為失誤（而非技術漏洞）來騙取私密資訊、存取權或財物的操弄手法。核心是利用人的信任、樂於助人、恐懼、好奇等心理，繞過技術防線。

## 關鍵面向

- **攻擊階段**：通常經「準備（鎖定目標、蒐集資訊）→ 建立信任／製造情境 → 發動攻擊 → 撤退」幾個階段
- **常見手法**：[[phishing]]（釣魚，最常見）、baiting（誘餌）、quid pro quo（利誘交換）、tailgating（尾隨進入）、watering hole（水坑攻擊）
- **為何有效**：人是資安最難修補的「漏洞」——再強的技術控制也擋不住員工自願交出帳密
- **防禦核心**：[[security-awareness-training]]（資安意識訓練）+ 流程控制（如雙重確認、最小權限）

## 應用場景

- **Simon 工作場景**：公司內部 IT 的高風險面——員工被釣魚、被假冒主管要求轉帳／給權限；對應 ISO 27001 A.6 人員安全 + 定期釣魚演練；Omnissa MDM 遠端抹除是裝置遺失（也算社交工程後果）的最後防線
- **一般場景**：企業資安意識訓練、紅隊演練的社交工程環節、防詐宣導

## 相關概念

- [[phishing]]：社交工程最常見的具體手法
- [[threat-actor]]：發動社交工程的攻擊者
- [[security-awareness-training]]：社交工程的主要防禦
- [[attack-surface]]：人員與公開資訊構成的社交攻擊面

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-1-social-engineering/2-the-criminal-art-of-persuasion|Course 5 Module 4 Section 1 Leaf 2 The criminal art of persuasion]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-1-social-engineering/3-social-engineering-tactics|Course 5 Module 4 Section 1 Leaf 3 Social engineering tactics]]
