---
title: "蜜罐（Honeypot）"
slug: honeypot
aliases: [Honeypot, 蜜罐, 誘捕系統, 誘餌系統, honeypot, decoy]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-13
---

## 定義
刻意做成易受攻擊的誘餌系統或資源（honeypot），用來吸引潛在入侵者。是 [[cyber-deception]]（欺敵防禦）的典型實作，也是一種 active cyber defense 機制。

## 關鍵面向
- **誘餌設計**：例如一個假檔案標成「Client Credit Card Information - 2022」，看似合法資產來誘使攻擊者存取
- **觸發告警**：正常使用者不會碰它，一旦有人嘗試存取，資安團隊立即被通知
- **價值**：捕捉攻擊者的活動、暴露其行為，提高偵測能力
- **定位**：屬 cyber deception 下的具體工具

## 應用場景
- **Simon 工作場景**：在內部網段或檔案伺服器放誘餌資源，偵測異常存取與橫向移動
- **一般場景**：攻擊觀測、入侵早期偵測、研究攻擊手法

## 相關概念
- [[cyber-deception]]：honeypot 所屬的欺敵防禦範式
- [[threat-hunting]]：搭配主動偵測使用

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-1-incident-detection-and-verification/3-cybersecurity-incident-detection-methods|Course 6 Module 3 Section 1 Leaf 3 Cybersecurity incident detection methods]]
