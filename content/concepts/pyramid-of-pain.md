---
title: "痛苦金字塔（Pyramid of Pain）"
slug: pyramid-of-pain
aliases: [Pyramid of Pain, 痛苦金字塔, 痛苦金字塔模型, pyramid of pain]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-13
---

## 定義
由資安研究者 David J. Bianco 提出的概念，用「攻擊者被防守方阻擋時有多痛」來排序不同 [[indicator-of-compromise]] 的防禦價值。目的是改善 IoC 在事件偵測中的運用——越靠頂層的指標被封鎖，攻擊者越難繼續。

## 關鍵面向
- **六層指標（由底而頂、痛感遞增）**：Hash values（[[hash-function]] 雜湊值）→ IP addresses → Domain names → Network/Host artifacts（網路／主機痕跡）→ Tools（工具）→ TTPs（戰術技術程序）
- **底層易換（低痛）**：封一個惡意 IP 很容易，但攻擊者換 IP 就能繼續
- **頂層難換（高痛）**：偵測並阻斷 TTPs 會逼攻擊者改變整套打法，代價最高、最有價值
- **實務提醒**：不要只追低層指標；越能偵測 tools 與 TTPs，越能迫使攻擊者付出高成本

## 應用場景
- **Simon 工作場景**：封惡意 IP／hash 快但易被換；投資在偵測行為（TTP 層）對事件應變與 SIEM 規則調校更有價值
- **一般場景**：IoC 防禦價值評估、偵測工程優先序

## 相關概念
- [[indicator-of-compromise]]：痛苦金字塔排序的對象
- [[indicator-of-attack]]：行為型指標偏金字塔頂層
- [[hash-function]]：金字塔最底層的指標類型

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/6-indicators-of-compromise|Course 6 Module 3 Section 1 Leaf 6 Indicators of compromise]]
