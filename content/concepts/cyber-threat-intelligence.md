---
title: "網路威脅情報（Cyber Threat Intelligence, CTI）"
slug: cyber-threat-intelligence
aliases: [網路威脅情報, CTI, Cyber Threat Intelligence, 威脅情報, STIX, TAXII, TLP, ISAC, IOC 情報]
category: 資安
confidence: 已驗證
created: 2026-07-05
---

## 定義

把多個入侵指標（IOC，如可疑 IP、網址、檔案雜湊）匯整、分析成「可行動的情報」，讓組織能預先知道有哪些威脅、對應調整防禦。CTI 常透過產業型分享組織流通，重點是**標準化格式**與**分享權限控管**，讓情報能跨組織交換又不外洩敏感內容。

## 關鍵面向

- **來源**：匯整多個 **IOC（入侵指標）**——可疑 IP、網址、檔案雜湊、惡意程式特徵等。
- **分享組織**：
  - **ISAC（資訊分享與分析中心）**：以產業為基礎，各產業有專屬 ISAC（H-ISAC 醫療、**FS-ISAC** 金融；金融標準名是 FS-ISAC、非 F-ISAC）。
  - **CERT（電腦緊急應變小組）**：協調事件、提供技術資源；台灣 **TWCERT/CC**；國際 **FIRST**（同時維護 CVSS 計算機）。
- **分享標準**：**STIX**（用 JSON 格式描述威脅情報內容）、**TAXII**（RESTful API 傳輸協定，支援 Collection 一問一答與 Channel 訂閱制）。
- **TLP 燈號協議（2.0 版）**：**四種顏色、五個標籤**——RED（只給指名收件人）、AMBER（限組織內與必要客戶）、AMBER+STRICT（同琥珀色但限組織內）、GREEN（可給同社群）、CLEAR（可公開）；控制情報能給誰看（考試曾考各燈號含義）。

## 應用場景

- **Simon 工作場景**：訂閱 TWCERT/CC 與所屬產業情報，把收到的 IOC 匯入 SIEM／防火牆封鎖清單；理解 TLP 燈號才知道哪些情報能對外轉發、哪些只能內部使用，避免違規外流。
- **一般場景**：SOC 的威脅偵測、產業聯防、事件關聯分析。

## 相關概念

- [[siem]]：CTI 的 IOC 常匯入 SIEM 做關聯偵測
- [[soar]]：SOAR 可依情報自動封鎖 IOC
- [[incident-response]]：威脅情報支援事件的判斷與歸因
- [[cvss]]：CTI 的分享組織 FIRST 同時維護 CVSS 評分標準與 TLP 燈號協議

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
