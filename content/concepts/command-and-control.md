---
title: "命令與控制（Command and Control / C2）"
slug: command-and-control
aliases: [Command and Control, C2, C&C, 命令與控制, 命令控制, command and control, C2 server, 命令與控制伺服器]
category: 資安
confidence: 已驗證
created: 2026-06-13
---

## 定義
攻擊者用來下指令、接收資料或控制受害系統的外部伺服器與通訊通道（Command and Control, C2）。受感染系統與攻擊者控制的系統之間建立通訊通道後，攻擊者就能持續操控、外送資料。是 MITRE ATT&CK 中的一個 tactic（戰術）。

## 關鍵面向
- **C2 server**：攻擊者控制端的外部伺服器，受害系統會回連
- **作為 TTP**：是攻擊者行為模式（[[pyramid-of-pain]] 頂層）的一環，難偵測也最有價值
- **偵測方式**：[[siem]] 可設規則偵測連到已知惡意 C2 網域（用 [[threat-intelligence]]）；異常外連是重要 [[indicator-of-compromise]]
- **與資料外洩的關係**：C2 通道常用於 [[data-exfiltration]] 的指令下達與資料回傳

## 應用場景
- **Simon 工作場景**：監控伺服器與端點對外的可疑連線、封鎖已知 C2 網域／IP、把 CI/CD 與伺服器 log 接 SIEM 偵測 C2
- **一般場景**：惡意程式通訊偵測、外連阻斷、威脅情報比對

## 相關概念
- [[indicator-of-compromise]]：C2 連線是重要 IoC
- [[data-exfiltration]]：常透過 C2 通道進行
- [[threat-intelligence]]：提供已知 C2 清單

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/4-ongoing-monitoring-of-ci-cd|Course 6 Module 3 Section 1 Leaf 4 Ongoing Monitoring of CI/CD]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/10-activity-exemplar-investigate-a-suspicious-file-hash|Course 6 Module 3 Section 1 Leaf 10 Activity Exemplar Investigate a suspicious file hash]]
