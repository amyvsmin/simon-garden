---
title: "資料外洩（Data Exfiltration）"
slug: data-exfiltration
aliases: [Data Exfiltration, 資料外洩, 資料外傳, 資料竊取, data theft, 外洩攻擊]
category: 資安
confidence: 待驗證
created: 2026-06-07
query-count: 0
---

## 定義
未經授權把資料從系統傳出的行為。攻擊者藉此竊取使用者帳號、密碼、智慧財產、PII（個人可識別資訊）、財務紀錄等。重點心法：就算流量加密，「異常的量與時機」本身就是線索，所以監看 [[network-traffic]] 仍然有價值。

## 關鍵面向
- **攻擊鏈**：初始存取（多靠 [[phishing]]／[[social-engineering]] 騙憑證）→ [[lateral-movement]]（橫向移動／pivoting，維持存取、盤點有價值的 [[asset]]）→ 收集打包（常縮小資料體積以隱藏、繞過安控）→ 外送（例如用被盜 email 帳號寄給自己）
- **階段 IoC**：大量內部檔案傳輸、大量外部上傳、非預期檔案寫入
- **四道防線**：① [[mfa-multi-factor-authentication]]（MFA）擋初始存取 ② 監看外部 IP 異常登入 ③ asset inventory（資產清冊）+ 安控減少攻擊面 ④ [[siem]] 告警 + 防火牆封掉攻擊者 IP
- **流量層典型徵兆**：某主機出現大量 outbound 流量

## 應用場景
- **Simon 工作場景**：這條攻擊鏈幾乎把手上的專案串成一道道防線——MFA 正在推（SQL Server MFA + Kerberos + Silverfort）、asset inventory + 安控就是 ISO 27001 資產盤點在做的事、大量外部上傳與非預期寫入該在公司 SIEM 與防火牆設告警。可當檢查表回頭盤點每道防線補到哪
- **一般場景**：MITRE ATT&CK 核心戰術；CISSP「Security Operations」、SSCP 事件處理章節高頻考點

## 相關概念
- [[lateral-movement]]：外洩前的橫向擴展與資產盤點
- [[indicator-of-compromise]]：外洩的可觀察徵兆
- [[command-and-control]]：常與外洩並用的隱蔽通訊通道
- [[siem]]：偵測外洩 IoC、發告警的工具

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/5-data-exfiltration-attacks|Course 6 Module 2 Section 1 Leaf 5 Data exfiltration attacks]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/3-the-importance-of-network-traffic-flows|Course 6 Module 2 Section 1 Leaf 3 The importance of network traffic flows]]
