---
title: "資安事故（Security Incident）"
slug: security-incident
aliases: [Security Incident, 資安事故, security incident, 資安事件, event vs incident, 事件與事故]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-23
---

## 定義
未經合法授權、已經或即將危害資訊或資訊系統的機密性、完整性、可用性的事件，或違反（或即將違反）法律、安全政策、安全程序、可接受使用政策的事件（Security Incident）。security event 是系統上被觀察到的任何活動，多數 event 只是正常活動或被及時擋下；造成或即將造成上述危害、或構成違規的 event 才是 incident。

## 關鍵面向
- **兩種定義口徑**：NIST SP 800-61 Rev. 3（2025-04，取代 2012 年的 Rev. 2）沿用 FISMA 的定義，把「已經或即將危害 CIA」與「違反法律或政策（含可接受使用政策）」都算 incident，**不要求資料已外洩**。Google 資安課程 Course 8 這節的講法較窄：event 造成 breach 才是 incident、外洩前解決的不算。這是課程在「保護資料」脈絡下的簡化，與同課程的 [[incident-classification]]（未授權存取、不當使用都算 incident）並不一致；實務判斷與升級以 NIST 口徑為準，課程考題照課程口徑作答
- **event vs incident**：event 是可觀察的活動、範圍大；incident 是其中已危害或即將危害 CIA、或違規的那部分
- **「沒有太小或太大的問題」**：不確定衝擊大小時，任何問題都該回報、不自行判斷「太小不用報」或「太大不歸我管」
- **升級例子**：小問題（員工未經許可在公務機裝 app，app 可能有弱點）、大問題（log 裡有被執行的惡意程式碼）
- **三類衝擊**：財務損失（含營運中斷）、法規罰款、與客戶或同業之間的商譽／信任流失

## 應用場景
- **Simon 工作場景**：incident-response skill 的判斷起點（這是 event 還是 incident、要不要升級）；ISO 27001 事件管理控制項
- **一般場景**：CISSP Domain 7（Security Operations）、SSCP Incident Response 的入門分野；事件升級流程的前提

## 相關概念
- [[security-mindset]]：及早辨識可能演變成事故的徵兆
- [[incident-response]]：事故發生後的結構化處理
- [[log]]：判斷 event 是否為 incident 的核心資料來源
- [[incident-classification]]：課程三類 incident（惡意軟體感染、未授權存取、不當使用），不以外洩為條件
- [[improper-usage]]：違反可接受使用政策即屬 incident 的例子

## 來源
- NIST SP 800-61 Rev. 3（2025-04）的 cybersecurity incident 定義，經 NIST CSRC 詞彙表 https://csrc.nist.gov/glossary/term/cybersecurity_incident 查證（2026-11-02）
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-3-your-impact-on-data-protection/1-detect-and-protect-without-neglect|Course 8 Module 1 Section 3 Leaf 1 Detect and protect without neglect]]
