---
title: "橫向移動（Lateral Movement / Pivoting）"
slug: lateral-movement
aliases: [Lateral Movement, Pivoting, 橫向移動, 樞紐攻擊, 內網橫移]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
攻擊者取得初始立足點後，在網路內橫向探索、擴展並維持對其他系統存取的戰術，又稱 pivoting。目的是接觸更多有價值的資產、並盡量久不被偵測。

## 關鍵面向
- **在攻擊鏈的位置**：初始存取（多靠 [[phishing]]）→ **橫向移動** → 盤點資產 → 收集打包 → 外送（[[data-exfiltration]]）
- **做什麼**：進去後不停手，在網路內擴展存取，同時盤點有價值的 [[asset]]——專有程式碼、PII（姓名地址等個資）、財務紀錄
- **去哪找**：搜尋網路檔案分享、intranet 站台、程式碼倉庫等位置
- **怎麼防／怎麼抓**：監看網路找可疑跡象（例如來自網路外部 IP 的多次登入）；事前用 asset inventory + 安控縮減攻擊面；[[mfa-multi-factor-authentication]] 擋在初始存取讓橫移無從開始

## 應用場景
- **Simon 工作場景**：把這條攻擊鏈當檢查表回頭盤點自家防線——MFA 正在推（SQL Server MFA）、asset inventory 正是 ISO 27001 資產盤點、外部 IP 異常登入是該設的 [[siem]] 告警
- **一般場景**：lateral movement 是 MITRE ATT&CK 核心戰術，CISSP「Security Operations」、SSCP 事件處理高頻考點

## 相關概念
- [[data-exfiltration]]：橫向移動是其攻擊鏈的關鍵一步
- [[phishing]]：常見的初始存取手段
- [[asset]]：橫移過程盤點的目標
- [[indicator-of-compromise]]：外部 IP 異常登入等橫移跡象

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/5-data-exfiltration-attacks|Course 6 Module 2 Section 1 Leaf 5 Data exfiltration attacks]]
