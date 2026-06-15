---
title: "資安維運中心（SOC）"
slug: soc
aliases: [SOC, security operations center, 資安維運中心, 安全維運中心, 資安監控中心, SOC tiers]
category: 資安
confidence: 待驗證
created: 2026-06-05
---

## 定義
專責監看網路、系統、裝置以發現資安威脅或攻擊的組織單位（常念作 "sock"）。可獨立成單位或設在 [[csirt]] 內，是 [[blue-team]]（防禦方）的主場，做網路監看、分析與事件回應。組織是金字塔結構：L1 → L2 → L3（SOC lead）→ SOC manager。

## 關鍵面向
- **Tier 1（L1）**：最資淺，監看／依嚴重度分級告警／用工單系統開關告警／升級給 L2、L3
- **Tier 2（L2）**：接 L1 升級做深入調查、調校資安工具、回報 SOC lead
- **Tier 3（SOC lead，L3）**：管團隊運作、做進階偵測（惡意程式與鑑識分析）、回報經理
- **SOC manager**：招募訓練評核、訂績效指標、寫事件／合規／稽核報告、向高層溝通
- **特化角色**：forensic investigator（鑑識，常 L2／L3）、threat hunter（威脅獵捕，常 L3）

## 應用場景
- **Simon 工作場景**：公司若無專責 SOC，L1–L3 分層仍可當「告警處理升級規則」範本；SIEM／IDS 是 SOC 的主要工具
- **一般場景**：MSSP 託管 SOC、企業內部 SOC、blue team 防禦營運

## 相關概念
- [[csirt]]：SOC 可獨立或併入 CSIRT
- [[blue-team]]：SOC 執行的就是 blue team 活動
- [[siem]]：SOC 監看與分析的核心工具
- [[red-team]]：與 SOC（防禦）對立的攻擊模擬方

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-3-incident-response-operations/3-roles-in-response|Course 6 Module 1 Section 3 Leaf 3 Roles in response]]
