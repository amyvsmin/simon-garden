---
title: "攻擊者思維（Attacker Mindset）"
slug: attacker-mindset
aliases: [Attacker Mindset, 攻擊者思維, 攻擊者視角, adversarial thinking, 對手思維]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義

從攻擊者的角度思考系統弱點的資安方法論。核心是設身處地模擬攻擊者會如何偵察、找弱點、利用漏洞，藉此在攻擊發生前先發現並修補防禦缺口。

## 關鍵面向

- **核心問題**：「如果我是攻擊者，我會怎麼進來？」——這個問題驅動整個思考框架
- **與紅隊的關係**：[[red-team]] 演練是攻擊者思維的制度化實踐，由專人模擬真實攻擊
- **五步驟思路**：偵察（資訊蒐集）→ 掃描（找弱點）→ 利用（進入）→ 維持存取 → 清除痕跡
- **防禦應用**：不只是攻擊方的工具，防禦方用攻擊者思維做 [[threat-modeling]] 能找到傳統合規檢查遺漏的盲點
- **心態轉換**：從「我的系統很安全」轉為「我的系統哪裡會被突破」

## 應用場景

- **Simon 工作場景**：ISO 27001 風險評鑑時用攻擊者視角檢視公司資產（機房、伺服器、VPN），比單純填 checklist 更能找到真正的弱點；資安 KPI 月簡報可從攻擊者角度分析當月事件
- **一般場景**：滲透測試（[[penetration-testing]]）的基本功；資安面試常考「你會怎麼攻擊這個系統」；CTF 競賽核心能力

## 相關概念

- [[threat-modeling]]：威脅建模是攻擊者思維的系統化框架
- [[threat-actor]]：了解不同攻擊者的動機與能力，才能準確模擬其思維
- [[red-team]]：紅隊演練是攻擊者思維的組織化實踐
- [[hacker]]：白帽駭客將攻擊者思維用於合法的安全測試

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-3-cyber-attacker-mindset/2-approach-cybersecurity-with-an-attacker-mindset|Course 5 Module 3 Section 3 Leaf 2 approach cybersecurity with an attacker mindset]]
