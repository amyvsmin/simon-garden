---
title: "Footprinting（足跡探測）"
slug: footprinting
aliases: [Footprinting, 足跡探測, 偵查, 資訊收集, reconnaissance, 偵察]
category: 資安
confidence: 已驗證
created: 2026-07-05
---

## 定義

攻擊者在正式攻擊前，盡可能收集目標相關資訊的階段，是駭客入侵五步驟的第一步、也對應 [[cyber-kill-chain]] 的「偵查」階段。收集越充分、後續攻擊越精準，因此這階段所需時間往往相當長。分**被動**（不直接接觸目標）與**主動**（會接觸目標）兩種。

## 關鍵面向

- **被動 vs 主動**：**被動足跡探測**只透過公開管道收集（Whois、搜尋引擎、社群媒體），不驚動目標；**主動足跡探測**會直接接觸目標（掃描、社交工程），較可能被察覺。
- **常用工具（考試考工具用途）**：
  - **Netcraft**：分析網址背後的作業系統、主機資訊。
  - **Archive.org（網頁時光機）**：查網站過去某時間點的畫面與曾揭露的資訊。
  - **Google Map**：查目標周邊建築、街景等地理圖資。
  - **Whois Lookup**：查網址與 IP 的註冊資訊。
  - **HTTrack**：整站爬取、分析目標網站架構設計。
- **與掃描的分界**：足跡探測偏「廣泛收集背景情報」，[[network-scanning]] 則是「主動探測存活主機、開放 Port 與服務」，是足跡探測之後的下一步。

## 應用場景

- **Simon 工作場景**：做滲透測試委外或紅隊演練前的範圍界定時，先理解攻擊者能從公開管道（Whois、Archive、員工社群）挖到公司哪些資訊，反推要收斂哪些對外揭露面（縮小攻擊面）。
- **一般場景**：滲透測試偵察階段、資安意識訓練（示範公司資訊被公開收集的程度）。

## 相關概念

- [[cyber-kill-chain]]：足跡探測對應「偵查」階段
- [[network-scanning]]：足跡探測之後的主動掃描步驟
- [[penetration-testing]]：足跡探測是滲透測試的第一階段
- [[social-engineering]]：主動足跡探測常結合社交工程

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
