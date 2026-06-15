---
title: "開源情報（OSINT）"
slug: osint
aliases: [OSINT, Open Source Intelligence, 開源情報, 公開來源情報, 開放原始碼情報, 公開情報蒐集]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
從公開來源收集、分析情報的方法。OSINT 的「開源」指的是資訊來源公開可取得（新聞、社群媒體、公開資料庫、政府公開資訊等），不是「開放原始碼軟體」。

## 關鍵面向
- **資訊來源**：社群媒體、公司官網、公開專利/論文、DNS/WHOIS 記錄、職缺刊登、GitHub 公開 repo
- **攻擊者視角**：威脅行為者用 OSINT 做偵察（reconnaissance），收集目標的 email 格式、組織架構、技術堆疊來規劃攻擊
- **防禦者視角**：資安團隊用 OSINT 評估組織的外部暴露面（[[attack-surface]]）、監控資料外洩、追蹤威脅情報
- **常見工具**：Maltego（關聯分析）、Shodan（IoT/服務曝露）、theHarvester（email/子域名蒐集）、Google Dorking（進階搜尋）
- **OPSEC 對應**：知道攻擊者用 OSINT 能找到什麼，才能做好作業安全（OPSEC）——控制組織公開暴露的資訊

## 應用場景
- **Simon 工作場景**：評估公司在網路上的資訊暴露面（域名、IP、員工社群媒體）；Shodan 掃描公司對外服務的曝露狀態；ISO 27001 風險評鑑中將 OSINT 偵察納入威脅情境
- **一般場景**：紅隊演練的前期偵察、威脅情報分析師的日常工作、資安意識訓練中展示個人資訊曝露

## 相關概念
- [[attack-surface]]：OSINT 揭露組織的外部攻擊面
- [[threat]]：OSINT 是威脅行為者偵察階段的核心方法
- [[penetration-testing]]：OSINT 是滲透測試的第一步
- [[vulnerability]]：OSINT 可發現組織公開暴露的弱點

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
