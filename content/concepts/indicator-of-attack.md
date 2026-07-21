---
title: "攻擊指標（Indicator of Attack / IoA）"
slug: indicator-of-attack
aliases: [Indicator of Attack, IoA, IoAs, 攻擊指標, indicators of attack, indicator of attack]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-13
---

## 定義
一連串觀察到、顯示「即時事件正在發生」的事件（Indicator of Attack, IoA）。聚焦攻擊者的方法與意圖，回答「為何／如何正在發生」；與回答「誰／什麼已經發生」的 [[indicator-of-compromise]]（IoC）成對。

## 關鍵面向
- **行為導向、即時性**：描述正在進行的攻擊行為鏈，而非已發生的痕跡
- **與 IoC 的差別**：IoC 偏已發生的證據（檔名、雜湊、IP）；IoA 偏正在進行的行為。例：「某程序建立網路連線」是 IoA，其檔名與 IP 是相關 IoC
- **偵測價值**：行為型偵測較難被攻擊者規避，是 [[threat-hunting]] 的重要線索，也有助於發現 [[fileless-malware]]
- **效能訊號也算**：如 CI/CD 伺服器突然資源耗盡、建置變慢，可當 IoA 引導去找 IoC

## 應用場景
- **Simon 工作場景**：偵測異常行為鏈（帳號登入後啟動工具、建立外連、讀取大量檔案），比只封 IP／hash 更有價值
- **一般場景**：行為偵測、EDR、威脅狩獵

## 相關概念
- [[indicator-of-compromise]]：與 IoA 成對的「已發生」證據
- [[pyramid-of-pain]]：IoC／IoA 的防禦價值排序
- [[threat-hunting]]：以 IoA 為線索主動搜尋

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/6-indicators-of-compromise|Course 6 Module 3 Section 1 Leaf 6 Indicators of compromise]]
