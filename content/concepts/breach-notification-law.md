---
title: "資料外洩通報法（Breach Notification Law）"
slug: breach-notification-law
aliases: [Breach Notification Law, breach notification law, 資料外洩通報法, 外洩通報法, 資料外洩通知法, breach notification, 個資外洩通報]
category: 資安
confidence: 已驗證
created: 2026-06-23
---

## 定義
要求公司與政府機關在發生涉及個人可識別資訊（[[legally-protected-information|PII]]）的資料外洩時，通知受影響當事人的法律。各國／各地的適用範圍不同、且會定期更新，入門資安分析師需熟悉公司營運所在地適用的版本。

## 關鍵面向
- **觸發條件**：外洩涉及 PII（身分證號／社會安全碼、駕照號、醫療紀錄、地址等敏感個人資訊）
- **義務對象**：受規範的公司與政府機關，須通知受影響的個人
- **因地而異**：依公司營運所在地適用不同法律、且定期更新，要持續追蹤
- **與升級的關聯**：辨識到可能涉及 PII 的外洩時，升級格外重要、因為背後有法定通報義務
- **台灣對應**：《個人資料保護法》即屬此類，外洩個資時須通知當事人（與課程「notify individuals」一致；對主管機關的通報屬另一層、依行業別規定）

## 應用場景
- **Simon 工作場景**：推 ISO 27001 時的事件通報程序與 PII 盤點；公司若外洩個資，需依個資法評估通報義務
- **一般場景**：GDPR 第 33／34 條外洩通報、各國隱私法規遵循

## 相關概念
- [[legally-protected-information]]：觸發通報的資料類型（PII／SPII／PHI）
- [[compliance]]：通報法是合規要求的一環
- [[information-privacy]]：外洩通報是隱私保護的下游機制
- [[incident-escalation]]：涉及 PII 的事件升級牽動法定通報

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-1-escalation-in-cybersecurity/3-escalate-with-a-purpose|Course 8 Module 2 Section 1 Leaf 3 Escalate with a purpose]]
