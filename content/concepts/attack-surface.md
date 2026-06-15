---
title: "攻擊面（Attack Surface）"
slug: attack-surface
aliases: [Attack Surface, 攻擊面, 攻擊表面, 進入點, entry point]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
系統所有可被攻擊者嘗試利用的進入點總合。攻擊面越大，潛在的攻擊路徑越多，風險越高。資安防禦的核心目標之一就是持續縮減攻擊面。

## 關鍵面向
- **三大面向**：實體（USB 埠、機房入口、未上鎖設備）、數位（開放埠口、Web 介面、API、[[eol-software]]）、社交（員工社群媒體、釣魚郵件目標、公開組織資訊）
- **攻擊面 vs 攻擊向量**：攻擊面是「所有可能的進入點」，攻擊向量（attack vector）是「攻擊者實際選擇的進入路徑」
- **持續變動**：每新增一台伺服器、一個 API、一位員工，攻擊面就在擴大；每次 [[security-hardening]]、每次下架舊系統，攻擊面就在縮減
- **可見性**：你不知道的攻擊面最危險——影子 IT、未納管設備、員工私裝軟體都是隱藏的攻擊面
- **量化方法**：資產清冊 + 埠口掃描 + [[osint]] 偵察 = 攻擊面盤點

## 應用場景
- **Simon 工作場景**：ISO 27001 資產盤點的核心目的之一就是掌握攻擊面；Omnissa MDM 納管端點縮減行動裝置的攻擊面；BIGFIX 盤點 [[eol-software]] 找出擴大攻擊面的因素
- **一般場景**：雲端遷移後攻擊面從實體轉為數位、零信任架構假設每個進入點都可能被利用、紅隊演練的第一步是繪製目標攻擊面

## 相關概念
- [[security-hardening]]：縮減攻擊面的核心實作
- [[defense-in-depth]]：攻擊面無法完全消除，所以需要多層防禦
- [[osint]]：攻擊者用 OSINT 探測目標的攻擊面
- [[vulnerability]]：攻擊面上的弱點才是真正可被利用的進入點
- [[eol-software]]：擴大攻擊面的常見因素

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
