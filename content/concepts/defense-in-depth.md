---
title: "縱深防禦（Defense in Depth）"
slug: defense-in-depth
aliases: [Defense in Depth, 縱深防禦, 深度防禦, layered security, 多層防禦, 層層防禦]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
多層安全控制措施疊加的防禦策略，使任何單一層失效時仍有其他層保護資產。核心理念是「沒有萬無一失的單一防線」，所以要層層佈防。

## 關鍵面向
- **典型五層**：周界（防火牆、WAF）→ 網路（VLAN 分割、IDS/IPS）→ 主機（防毒、EDR、[[security-hardening]]）→ 應用（輸入驗證、[[authentication]]）→ 資料（加密、存取控制）
- **三類控制交織**：每一層都可同時部署技術、管理、實體三類 [[security-control]]
- **失效安全（fail-safe）**：任一層被突破，下一層接手；攻擊者需突破所有層才能觸及核心資產
- **成本與複雜度權衡**：層數越多越安全，但管理複雜度與成本也上升；需依風險評估決定合理層數
- **與 zero-day 的關係**：[[zero-day]] 能突破單一層（如防毒），但縱深防禦的其他層（如行為偵測、網路分割）仍可攔截

## 應用場景
- **Simon 工作場景**：公司現有架構就是縱深防禦實踐——防火牆（周界）+ Veeam 備份（資料層）+ Omnissa MDM（端點層）+ ISO 27001 政策（管理層）；機房的實體門禁 + 監控也是一層
- **一般場景**：雲端架構的安全群組 + WAF + IAM + 加密四層設計、NIST CSF Protect 功能的落實

## 相關概念
- [[security-control]]：縱深防禦由多個控制措施組成
- [[attack-surface]]：縱深防禦的目的是縮減有效攻擊面
- [[zero-day]]：縱深防禦是應對 zero-day 的核心策略
- [[security-hardening]]：主機層的防禦實作
- [[cia-triad]]：縱深防禦保護的終極目標

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
