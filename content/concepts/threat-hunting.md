---
title: "威脅狩獵（Threat Hunting）"
slug: threat-hunting
aliases: [Threat Hunting, 威脅狩獵, 威脅獵捕, 主動威脅搜尋, threat hunting, threat hunter, 威脅獵人]
category: 資安
confidence: 待驗證
created: 2026-06-13
---

## 定義
主動在網路中搜尋威脅的做法（threat hunting），尤其針對偵測工具沒有發現的惡意活動，也用來對既有偵測結果做更深入分析。它把技術的力量與人類分析結合，找出被自動工具漏掉的隱藏威脅，並在威脅造成損害前先發現。

## 關鍵面向
- **human-driven**：人主動提出假設、研究新興威脅、查找工具漏掉的活動；對比自動化偵測主要靠既有規則或模型發告警
- **適用對象**：傳統工具難辨識的威脅，例如藏在記憶體的 [[fileless-malware]]
- **威脅獵人（threat hunters）的工具組合**：[[threat-intelligence]]、[[indicator-of-compromise]]、[[indicator-of-attack]] 與機器學習
- **目的**：補足 [[ids]]／[[siem]] 只能偵測「被配置監看範圍」的盲點，提高覆蓋率與準確度

## 應用場景
- **Simon 工作場景**：面對半導體產業常見的 [[apt]] 風險，主動查可疑帳號、異常程序、C2（[[command-and-control]]）網域與檔案雜湊
- **一般場景**：SOC 主動防禦、進階威脅偵測、red flag 深挖

## 相關概念
- [[threat-intelligence]]：威脅狩獵的情報輸入
- [[indicator-of-compromise]]、[[indicator-of-attack]]：狩獵時比對的指標
- [[fileless-malware]]：典型需要狩獵才能發現的威脅

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/3-cybersecurity-incident-detection-methods|Course 6 Module 3 Section 1 Leaf 3 Cybersecurity incident detection methods]]
