---
title: "Cisco 副總裁 — 老化網路基礎設施與 Agentic Kill Chain｜CYBERSEC 2026 Day 2"
date: 2026-05-06
type: 來源分析
url: ""
inbox-id: ""
concepts: [aging-network-infrastructure, agentic-kill-chain, supply-chain-risk, cve-weaponization-time]
projects: []
created: 2026-05-06
reviewed: 2026-05-18
---

## 摘要

Cisco 副總裁兼資安長在 CYBERSEC 2026 Day 2 點出網路基礎設施的結構性危機：全球網路設備將近一半已 EoL／EoS、30% 硬體與軟體超過十年、攻擊轉向網路邊緣與核心設備。AI 把漏洞武器化時間從 2018 的兩年壓到 2026 的小時級、加上 agentic kill chain（AI agent 24/7 自動偵察、決策、自我調整）讓防守端反應視窗極限壓縮。Cisco 推 Project Broccoli 自我加固、用 10 兆參數 Methos 模型做漏洞發現與 PoC 自動化、推 TACACS+ over TLS 等加密化升級。Call to action：升級老化基礎設施、回歸基本 hygiene、信任夥伴。

## 核心概念

- [[aging-network-infrastructure]]：半數網路設備 EoL／30% 超過十年、防火牆／路由器／交換器成攻擊新熱點
- [[agentic-kill-chain]]：AI agent 24/7 連續偵察、自動決策、自我調整的攻擊鏈、人類速度追不上
- [[supply-chain-risk]]：攻擊者轉向供應商、一次入侵打多家、跨組織橫向移動
- [[cve-weaponization-time]]：2018 兩年 → 2026 小時級、Cisco 數字呼應 Mandiant

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
公司 IT 環境高機率有舊網路設備已 EoL／EoS、是潛在攻擊面；下一步可借這場演講當依據、推動「網設備 EoL 盤點 + 升級時程」進 ISO 27001 範圍。「廢棄協議」掃描清單（SNMP v1／v2、Telnet、明文 FTP）也可拿來對公司現況盤點。Project Broccoli 概念可拿來說服主管：Cisco 自己都在 eat their own vegetables、我們作為使用者更該升級。Agentic kill chain 是未來 SOC 設計需考量的對手模型。

❌ 全段 — 公司資安大會行動方案目前用不到

## 原文要點

- 全球網路設備 47% 已 EoL／EoS、30% 硬體軟體 > 10 年、23% 攻擊直接打網路設備
- AI offensive 比 AI defensive 跑得快、agentic agent 不會累、self-adjust
- 攻擊者偏好供應鏈、targeting 一家技術供應商可橫掃多組織
- Cisco Project Broccoli：自我加固、Methos 10T 參數模型、廢棄協議停用、TACACS+ over TLS、邊緣設備充當 sensor
- 防禦三層：visibility／observability／active defense + 基本 hygiene + 信任夥伴

## 原始連結

- 現場錄音：`~/audio-inbox/Cisco資安長.m4a`、逐字稿 `~/audio-inbox/transcripts/Cisco資安長.txt`
- 議程資料：Drive `1ALC_3p4qA9vx_tz3oJfa4Z2TTiLRNtTG`／議程截圖
- Cisco Project Broccoli + Methos model（內部代號）
