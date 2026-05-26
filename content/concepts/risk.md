---
title: "風險（Risk）"
slug: risk
aliases: [Risk, 風險, 資安風險, security risk, 風險評估]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
資安事件可能發生的機率乘以該事件對組織造成衝擊的量化評估。風險 = 威脅（[[threat]]）利用弱點（[[vulnerability]]）對資產（[[asset]]）造成損害的可能性與影響程度。

## 關鍵面向
- **風險公式**：Risk = Likelihood × Impact；機率與衝擊兩軸缺一不可
- **風險處置四策略**：接受（accept）、規避（avoid）、轉移（transfer，如保險）、緩解（mitigate）
- **與 threat、vulnerability 的三件套關係**：threat 是外部威脅、vulnerability 是內部弱點、兩者交會才產生 risk
- **量化 vs 定性**：量化用金額估損、定性用高中低分級；NIST 建議兩者並用
- **持續性**：風險不是一次性評估、隨環境變化需定期重新評估

## 應用場景
- **Simon 工作場景**：ISO 27001 風險評鑑（每年重新盤點資產對應威脅與弱點）、資安 KPI 月簡報中風險等級趨勢、BIGFIX POC 評估未修補系統的風險等級
- **一般場景**：企業風險管理委員會決策、保險精算、專案管理中的風險登錄

## 相關概念
- [[threat]]：風險三件套之一，造成損害的外部因素
- [[vulnerability]]：風險三件套之一，可被利用的內部缺陷
- [[asset]]：風險評估的保護對象
- [[risk-register]]：記錄風險評估結果的文件
- [[nist-csf]]：風險管理的框架層指引
- [[cvss]]：漏洞嚴重性量化、輸入風險評估的依據之一

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 1
