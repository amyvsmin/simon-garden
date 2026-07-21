---
title: "資安事故（Security Incident）"
slug: security-incident
aliases: [Security Incident, 資安事故, security incident, 資安事件, event vs incident, 事件與事故]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-23
---

## 定義
造成資料外洩（breach）的 security event（Security Incident）。關鍵分野：security event 是系統上被觀察到的活動，當它造成外洩時才歸類為 incident；若 event 在造成外洩前就被解決，就不算 incident。

## 關鍵面向
- **event vs incident**：造成 breach 才是 incident；未造成外洩、被處理掉的 event 不算
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

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-3-your-impact-on-data-protection/1-detect-and-protect-without-neglect|Course 8 Module 1 Section 3 Leaf 1 Detect and protect without neglect]]
