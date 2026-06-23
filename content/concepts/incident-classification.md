---
title: "事件分類類型（Incident Classification）"
slug: incident-classification
aliases: [Incident Classification, incident classification, 事件分類, 事件分類類型, incident type, incident classification types, malware-infection, malware infection, 惡意軟體感染, unauthorized-access, unauthorized access, 未授權存取, improper-usage, improper usage, 不當使用]
category: 資安
confidence: 已驗證
created: 2026-06-23
---

## 定義
把資安事件歸到可辨識的類型、以利優先排序與快速升級的框架。Google 資安課程在事件升級脈絡下教三種常見類型：malware infection（惡意軟體感染）、unauthorized access（未授權存取）、improper usage（不當使用）。辨識類型能讓分析師正確判斷急迫度並快速升級。

## 關鍵面向
- **Malware infection（惡意軟體感染）**：設計來干擾系統的 [[malware]] 滲入組織電腦或網路；形式從簡單（[[phishing]]）到複雜（ransomware）；可拖慢網路、扣押資料勒索
- **Unauthorized access（未授權存取）**：個人未經許可取得對系統、資料或應用的數位或實體存取；常用 [[brute-force-attack]]；急迫度取決於該系統對營運的關鍵度
- **Improper usage（不當使用）**：員工違反組織的 [[acceptable-use-policy]]；可能無意（不知政策）或蓄意；因難辨意圖、一律升給主管
- **用途**：辨識類型 → 正確優先排序與快速升級；直接衝擊營運資產的類型優先（如對製造應用的未授權存取，優先於只感染不影響營運舊系統的惡意軟體）

## 應用場景
- **Simon 工作場景**：端點防毒告警＝malware infection；登入 log 異常＝unauthorized access 徵兆；員工裝未核可軟體＝improper usage（且「難辨意圖 → 升主管」提醒別自己幫同事下定論）
- **一般場景**：SOC 事件分類、告警歸因、事件優先排序

## 相關概念
- [[malware]]：惡意軟體感染這一類的核心
- [[brute-force-attack]]：達成未授權存取的常見手法
- [[acceptable-use-policy]]：不當使用所違反的政策
- [[incident-escalation]]：辨識類型是升級判斷的前置
- [[incident-criticality]]：類型幫助定危急度與優先序

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-2-to-escalate-or-not-to-escalate/1-prepare-to-escalate-through-security-recognition|Course 8 Module 2 Section 2 Leaf 1 Prepare to escalate through security recognition]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/3-escalation-timing|Course 8 Module 2 Section 3 Leaf 3 Escalation timing]]
