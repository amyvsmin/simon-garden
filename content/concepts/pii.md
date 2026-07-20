---
title: "個人可識別資訊（PII）"
slug: pii
aliases: [PII, Personally Identifiable Information, personally identifiable information, 個人可識別資訊, 個資識別資訊]
category: 資安
confidence: 已驗證
created: 2026-07-19
---

## 定義

能直接識別個人，或與其他資料結合後可識別個人的資訊。課程例子包括姓名、電話與 email；這類資料的蒐集、記錄與處理會受司法管轄區與組織政策限制。

## 關鍵面向

- **識別性是判準**：重點不是欄位看起來敏不敏感，而是它能否指向特定個人。
- **法規依地區而異**：某些資料能否寫入 log，不能只用技術便利性決定。
- **最小化蒐集**：設計日誌與資料流程時，先問是否真的需要記錄該 PII。
- **PII 是集合中的一類**：它屬於 [[legally-protected-information]]，但不是上位集合的同義詞。

## 應用場景

- 設計 log 欄位時，避免把姓名、email、電話等資料無差別寫入。
- 事件調查需要使用 PII 時，依最小權限與組織政策限制查閱、分享與保存範圍。

## 相關概念

- [[legally-protected-information]]：PII、SPII、PHI 等受保護資訊的上位集合。
- [[information-privacy]]：規範個人資料如何被蒐集與使用。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-1-overview-of-logs/3-best-practices-for-log-collection-and-management|Best practices for log collection and management]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-1-safeguard-information/4-the-data-lifecycle|The data lifecycle]]
