---
title: "欺敵防禦（Cyber Deception）"
slug: cyber-deception
aliases: [Cyber Deception, 欺敵防禦, 網路欺敵, 欺騙技術, cyber deception, deception technology, 主動欺敵]
category: 資安
confidence: 待驗證
created: 2026-06-13
query-count: 0
---

## 定義
刻意欺騙惡意行為者、以提升偵測與改善防禦策略的技術（cyber deception）。核心是用「看似有價值、其實是陷阱」的資源誘使攻擊者暴露行為，是 active cyber defense（主動防禦）的一環。

## 關鍵面向
- **代表手法**：[[honeypot]]（蜜罐）——設計成易受攻擊的誘餌系統或資源
- **運作邏輯**：正常使用者不會碰誘餌，攻擊者一互動就觸發告警、暴露行為
- **目的**：提高偵測率、觀察攻擊活動、改善防禦策略
- **定位**：屬偵測方法之一，補足 [[ids]]／[[siem]] 的被動告警

## 應用場景
- **Simon 工作場景**：在內部環境放誘餌檔／系統，偵測橫向移動或內部威脅的早期跡象
- **一般場景**：攻擊觀測、早期偵測、紅藍對抗演練

## 相關概念
- [[honeypot]]：cyber deception 的典型實作
- [[threat-hunting]]：兩者都是主動偵測手段

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/3-cybersecurity-incident-detection-methods|Course 6 Module 3 Section 1 Leaf 3 Cybersecurity incident detection methods]]
