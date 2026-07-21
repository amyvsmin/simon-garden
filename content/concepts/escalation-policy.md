---
title: "升級政策（Escalation Policy）"
slug: escalation-policy
aliases: [Escalation Policy, escalation policy, 升級政策, 升級流程, 升級準則, escalation guidelines, escalation process, 通報流程]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-23
---

## 定義
一組行動規範，列明事件告警發生時「該通知誰」以及「該如何處理該事件」。每個組織的升級政策不同、沒有放諸四海皆準的標準流程；它是 [[incident-escalation]]（事件升級）能否被正確執行的依據。

## 關鍵面向
- **規範內容**：告警發生時通知誰、第一線負責人不在時找誰（備援）、用什麼管道升級（IT 服務台、事件管理工具、或團隊成員間直接溝通）
- **隨組織而異**：沒有通用標準，實際步驟由你任職的公司決定
- **使用方式**：不必整份背下來，但要存起來／加書籤、需要時隨時調得到；政策常是冗長文件、要留意小細節
- **含具體觸發規則**：例如「10 次失敗登入 → 升給密碼保護團隊」這種「條件 → 對口」對應
- **注意細節決定成敗**：細節決定你把事件升給對的人還是錯的人、也幫你判斷該升得多急

## 應用場景
- **Simon 工作場景**：替公司資安事件準備一份「通報窗口 ＋ 主管不在時備援 ＋ 走哪個工具」的升級政策、隨時可調出；對應你 ISO 27001 的事件通報程序
- **一般場景**：SOC 標準作業流程、IT 服務台事件處理、值班交接

## 相關概念
- [[incident-escalation]]：升級政策是它的執行依據
- [[incident-response-plan]]：更上位的事件應變程序文件
- [[playbook]]：情境化的操作手冊，與政策互補
- [[triage]]：政策幫助分流後決定升給誰

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/2-when-and-how-to-escalate-a-security-incident|Course 8 Module 2 Section 3 Leaf 2 When and how to escalate a security incident]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/4-julianas-story-attention-to-detail|Course 8 Module 2 Section 3 Leaf 4 Juliana's story: Attention to detail]]
