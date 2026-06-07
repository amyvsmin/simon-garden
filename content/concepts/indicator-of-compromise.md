---
title: "入侵指標（Indicator of Compromise / IoC）"
slug: indicator-of-compromise
aliases: [Indicator of Compromise, IoC, IoCs, 入侵指標, 妥協指標, 危害指標, indicators of compromise]
category: 資安
confidence: 待驗證
created: 2026-06-07
query-count: 0
---

## 定義
可觀察到的證據，暗示可能發生過資安事件。通常指向「已經發生的事」，例如惡意檔名、惡意檔案雜湊、可疑 IP 位址、被惡意程式建立的檔案。注意：IoC 不等於事件已確認，也可能來自人為錯誤、系統故障等非資安原因。

## 關鍵面向
- **vs [[indicator-of-attack]]（IoA）**：IoC 回答「誰／什麼已經發生」（事後證據）；IoA 回答「為何／如何正在發生」（即時行為）。例：某程序建立網路連線是 IoA，該程序的檔名與所連 IP 則是相關 IoC
- **[[pyramid-of-pain]]（David J. Bianco）**：用「攻擊者被阻擋時有多痛」排序指標價值，由易到難：雜湊值 → IP 位址 → 網域名稱 → 網路痕跡／主機痕跡 → 工具 → TTPs
- **低層 vs 高層**：低層指標（IP、雜湊）易封鎖但攻擊者也易替換；TTPs（戰術、技術、程序）最難偵測也最有價值，逼攻擊者改變整套打法
- **流量層 IoC 例**：主機大量 outbound 流量（可能 [[data-exfiltration]]）、來自外部 IP 的多次登入

## 應用場景
- **Simon 工作場景**：封鎖惡意 IP／檔案雜湊很快，但攻擊者也容易換；更進階是偵測行為（異常帳號登入後啟動工具、建立外連、讀取大量檔案、修改排程工作），更接近 TTP 層，對事件應變與 SIEM 規則調校更有價值
- **一般場景**：SSCP／CISSP／Security+ 事件偵測基礎

## 相關概念
- [[indicator-of-attack]]：即時行為證據（IoC 的另一面）
- [[pyramid-of-pain]]：指標防禦價值的排序框架
- [[anomaly-detection]]：靠偏離基線揪出 IoC
- [[ioc-search]]：拿已知 IoC 字串掃系統找其他被感染檔案

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/3-the-importance-of-network-traffic-flows|Course 6 Module 2 Section 1 Leaf 3 The importance of network traffic flows]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/6-indicators-of-compromise|Course 6 Module 3 Section 1 Leaf 6 Indicators of compromise]]
