---
title: "VirusTotal"
slug: virustotal
aliases: [VirusTotal, virustotal, 病毒總、VirusTotal 平台, vendors ratio, 廠商偵測比例]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
讓任何人分析可疑檔案、網域、URL 與 IP 位址是否含惡意內容的服務（VirusTotal）。使用者提交 artifact（如檔案雜湊、IP）後可得報告，顯示該 [[indicator-of-compromise]] 是否被判定惡意、以及它與其他 IoC 的關聯。是分析 IoC、補脈絡的常用調查工具。

## 關鍵面向
- **報告分頁**：Detection（各廠商判定）、Details（靜態資訊如 hash／檔型／大小）、Relations（關聯 IoC 如 contacted domains／IP／dropped files）、Behavior（沙箱觀察到的 TTP 與網路通訊）、Community（社群評論）
- **vendors' ratio（廠商偵測比例）**：報告上方分數，顯示多少廠商判定為惡意；偵測越多、社群分數越高，惡意可能性越高
- **沙箱行為分析**：在受控 sandboxed environment 觀察 artifact 行為
- **資料公開警告**：上傳資料會公開分享給整個社群（[[crowdsourcing]]），切勿提交個資或內部機密
- **同類工具**：Jotti malware scan、Urlscan.io、MalwareBazaar

## 應用場景
- **Simon 工作場景**：查外部可疑 hash／IP／URL／domain 補脈絡，但不把公司內部檔案上傳公共平台，必要時改用內部沙箱
- **一般場景**：IoC 分析、惡意檔案查證、威脅情報補強

## 相關概念
- [[indicator-of-compromise]]：VirusTotal 用來分析的對象
- [[threat-intelligence]]、[[crowdsourcing]]：VirusTotal 的情報共享本質
- [[hash-function]]：常用檔案雜湊提交查詢

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/8-analyze-indicators-of-compromise-with-investigative-tools|Course 6 Module 3 Section 1 Leaf 8 Analyze indicators of compromise with investigative tools]]
