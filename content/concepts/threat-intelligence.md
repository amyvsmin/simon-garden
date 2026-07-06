---
title: "威脅情報（Threat Intelligence / CTI）"
slug: threat-intelligence
aliases: [Threat Intelligence, 威脅情報, 威脅情資, threat intelligence, TIP, threat intelligence platform, 威脅情報平台, 網路威脅情報, CTI, Cyber Threat Intelligence, STIX, TAXII, TLP, IOC 情報]
category: 資安
confidence: 已驗證
created: 2026-06-13
---

## 定義
以證據為基礎、提供既有或新興威脅脈絡的資訊：把攻擊者的戰術技術程序（TTP）、入侵指標（IOC，如可疑 IP、網址、檔案雜湊）與攻擊趨勢匯整分析成「可行動的情報」，讓組織把外部威脅對照到自己的環境、預先調整防禦。跨組織流通靠標準化格式與分享權限控管，讓情報能交換又不外洩敏感內容。

## 關鍵面向
- **三類來源**：產業報告、政府警示、威脅資料流（IP／網域／檔案雜湊等 IOC 清單，用來防 [[apt]]）
- **威脅情報平台（TIP）**：集中蒐集、彙整、分析多來源情報，協助識別與排序相關威脅
- **補脈絡用、不主導偵測**：資料量大且未必符合本組織環境，直接拿來觸發偵測會大量誤報；替單一 [[indicator-of-compromise]] 補關聯、從指標擴成可調查的攻擊敘事
- **分享組織**：[[isac]]（產業型：H-ISAC 醫療、FS-ISAC 金融，標準名是 FS-ISAC 非 F-ISAC）；CERT（台灣 TWCERT/CC、國際 FIRST，FIRST 同時維護 [[cvss]]）；另靠 [[crowdsourcing]]、[[osint]]
- **分享標準**：STIX（用 JSON 格式描述威脅情報內容）、TAXII（RESTful API 傳輸協定，支援 Collection 一問一答與 Channel 訂閱制）
- **TLP 燈號協議（2.0 版）**：四種顏色、五個標籤——RED（只給指名收件人）、AMBER（限組織內與必要客戶）、AMBER+STRICT（限組織內）、GREEN（可給同社群）、CLEAR（可公開）；控制情報能給誰看（考試曾考各燈號含義）

## 應用場景
- **Simon 工作場景**：訂閱 TWCERT/CC 與所屬產業情報、把 IOC 匯入 SIEM／防火牆封鎖清單；對照半導體產業 APT 趨勢輔助 threat hunting；懂 TLP 燈號才知道哪些情報能對外轉發、避免違規外流
- **一般場景**：情報驅動偵測、SOC 告警脈絡補強、產業聯防、事件關聯分析、風險排序

## 相關概念
- [[threat-hunting]]：以威脅情報為輸入
- [[indicator-of-compromise]]：威脅情報替其補脈絡
- [[isac]]、[[crowdsourcing]]、[[osint]]：分享與來源管道
- [[siem]]：IOC 匯入 SIEM 做關聯偵測
- [[soar]]：可依情報自動封鎖 IOC
- [[incident-response]]：支援事件判斷與歸因
- [[cvss]]：分享組織 FIRST 同時維護 CVSS 與 TLP

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/3-cybersecurity-incident-detection-methods|Course 6 Module 3 Section 1 Leaf 3 Cybersecurity incident detection methods]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/8-analyze-indicators-of-compromise-with-investigative-tools|Course 6 Module 3 Section 1 Leaf 8 Analyze indicators of compromise with investigative tools]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
