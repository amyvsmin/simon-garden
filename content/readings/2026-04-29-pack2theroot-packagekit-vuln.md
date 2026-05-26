---
title: Linux 套件管理工具 PackageKit 揭露權限提升漏洞 Pack2TheRoot — Claude Opus 協助挖掘
date: 2026-04-29
type: 來源分析
url: https://www.ithome.com.tw/news/175353
tags: [cybersecurity, vulnerability, linux, ai-security]
concepts: [pack2theroot, packagekit, privilege-escalation, red-team, cvss, ai-vuln-discovery]
inbox-id: 350f85da-554f-81db-b79c-e3b2db1b0baf
notion-page-id: 351f85da-554f-81fe-ba91-f46082be35ba
impact: high
reviewed: 2026-05-17
tldr: "德國電信 Deutsche Telekom 紅隊團隊揭露 Linux 套件管理工具 PackageKit 的高風險權限提升漏洞 Pack2TheRoot，編號 CVE-2026-41651、CVSS 8.8 分。非特權攻擊者可在無需密碼的情況下安裝或移除系統套件，進而取得 root 權限。"
stage: growing
icon: "⚡"
---

## 摘要

德國電信 Deutsche Telekom 紅隊團隊揭露 Linux 套件管理工具 PackageKit 的高風險權限提升漏洞 Pack2TheRoot，編號 CVE-2026-41651、CVSS 8.8 分。非特權攻擊者可在無需密碼的情況下安裝或移除系統套件，進而取得 root 權限。受影響範圍包含 Ubuntu Desktop 18.04 至 26.04、Ubuntu Server 22.04 至 24.04、Debian Trixie 13.4、Rocky Linux 10.1、Fedora 43 工作站與伺服器版。漏洞最早可追溯至 14 年前的 0.8.1 版，PackageKit 開發團隊已於 1.3.5 版完成修補。研究人員特別指出，此漏洞是借助 Anthropic Claude Opus 模型輔助分析後成功發現，反映 AI 模型在原始碼審查與漏洞挖掘的實戰價值正持續提升。

## 核心概念

- [[pack2theroot]]：CVE-2026-41651，Linux 套件管理工具 PackageKit 的高風險本機權限提升漏洞。非特權使用者可以在不需要輸入密碼的情況下安裝或移除系統套件，藉此取得 root 權限。這個漏洞最早可追溯到 14 年前的 PackageKit 0.8.1 版，直到德國電信紅隊團隊借助 Claude Opus 輔助分析才被發現。
- [[packagekit]]：PackageKit 是一個透過 D-Bus 介面抽象化各 Linux 發行版套件管理器的中介服務。它的設計目的是讓應用程式（例如圖形化的軟體中心）不需要知道底層用的是 apt、dnf 還是 zypper，統一透過 PackageKit 就能管理套件。正因為它橫跨 Ubuntu、Debian、Fedora、Rocky Linux 等主流發行版，一旦出現漏洞影響範圍極廣。
- [[privilege-escalation]]：權限提升，指攻擊者從一般使用者權限升級為系統管理員（root）的攻擊戰術。這是資安攻防中最關鍵的步驟之一——攻擊者通常先用釣魚或其他手段取得低權限的進入點，接著靠權限提升漏洞拿下整台機器的控制權。CISSP 與紅隊演練的必考主題。
- [[red-team]]：企業內部的攻擊模擬團隊，專門用攻擊者的視角找出自家系統的漏洞。本案的發現者是德國電信 Deutsche Telekom 的紅隊團隊，他們主動揭露漏洞並通報修補，屬於負責任揭露的典型流程。
- [[cvss]]：Common Vulnerability Scoring System，漏洞嚴重性的量化評分標準，滿分 10 分。本漏洞拿到 8.8 分屬於高風險等級，代表利用門檻低且影響嚴重。CVSS 分數是企業決定修補優先順序的重要參考依據。
- [[ai-vuln-discovery]]：本案的一大亮點是研究人員借助 Anthropic Claude Opus 模型輔助原始碼分析，才成功挖出這個潛伏 14 年的漏洞。這反映 AI 大型語言模型在資安領域的實戰價值正在提升——它能在龐大的程式碼庫中找到人類審查容易忽略的邏輯瑕疵。
![[2026-04-29-pack2theroot-packagekit-vuln-pack2theroot.png|275]]

## 對 Simon 的應用（當下想法）

> 以下為 reading 當下想到的應用、隨時間／工具／興趣變化可能已失效；後續落地狀態見下方「落地動作與效益」段（若有）。
- ❌ **資產盤點與修補（ISO 27001）**：列出公司內 Linux 主機（若有）的 PackageKit 版本，檢查是否需升級到 1.3.5；可作為 A.12.6.1 技術性弱點管理流程的演練案例 — Linux 主機不多、無需演練
- ❌ **資安 KPI 月簡報**：可引用本漏洞作為「2026 年 4 月關注漏洞」的範例，搭配 CVSS 8.8 與 14 年潛伏期，凸顯供應鏈深層風險 — 月簡報無關注漏洞章節、不主動擴
- ✅ **Google Cybersecurity 學習**：Course 3 涉及網路與系統安全，可把 Pack2TheRoot 當成「權限提升 + 套件管理服務」的真實案例對應課堂概念
- ⏳ **Claude Code 自架環境**：本案是 Claude Opus 在資安領域的成功實戰，可激發 Simon 用 Claude Code 對自己工作環境做小型程式碼審查的點子
- ✅ **CISSP / SSCP 準備**：把 Pack2TheRoot 當作 Domain 3 / Domain 7 的記憶錨點，串接權限提升、漏洞管理、紅隊三個必考主題

## 原文要點

- 漏洞名稱 Pack2TheRoot，CVE-2026-41651，CVSS 8.8 分高風險，屬本機權限提升
- 漏洞存在於 PackageKit 套件管理工具，可讓非特權攻擊者免密碼安裝或移除系統套件
- 受影響版本：Ubuntu Desktop 18.04–26.04、Ubuntu Server 22.04–24.04、Debian Trixie 13.4、Rocky Linux 10.1、Fedora 43 工作站與伺服器版
- 漏洞潛伏期：分支 1.0.2 版已超過 12 年，最早可追溯至 14 年前的 0.8.1 版
- 修補版本：PackageKit 1.3.5
- 揭露單位：德國電信 Deutsche Telekom 紅隊團隊；研究過程借助 Anthropic Claude Opus 模型輔助分析

## 原始連結

- 原文：https://www.ithome.com.tw/news/175353
- 媒體：iThome
- Deutsche Telekom 部落格：https://github.security.telekom.com/2026/04/pack2theroot-linux-local-privilege-escalation.html
- GitHub 資安公告：https://github.com/PackageKit/PackageKit/security/advisories/GHSA-f55j-vvr9-69xv
