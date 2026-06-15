---
title: "數位鑑識（Digital Forensics）"
slug: digital-forensics
aliases: [Digital Forensics, 數位鑑識, 數位取證, 電腦鑑識, digital forensics, 鑑識]
category: 資安
confidence: 已驗證
created: 2026-06-13
---

## 定義
攻擊後收集並分析資料、判斷「發生了什麼」的實務（digital forensics）。是 [[chain-of-custody]]（監管鏈）最典型的使用場景：證據必須在保全的前提下被檢查與轉交，才能還原事件並在法律程序中採信。

## 關鍵面向
- **保全優先**：先把證據（如硬碟）設為 write protect（防寫），讓資料不能被改或刪，確保之後算的雜湊反映未被改動的原始狀態
- **完整性驗證**：計算並記錄硬碟映像的 [[hash-function]] 雜湊；事後重算若不一致即代表遭竄改
- **可追溯轉交**：每次證據經手都登記在 chain of custody 表單，移動透明
- **與事件應變的關係**：鑑識常在 [[incident-response]] 的調查與事後階段進行，產出餵給 [[final-report]]
- **產出可採信**：目的是讓證據符合法律標準、能在法庭使用

## 應用場景
- **Simon 工作場景**：公司端點或伺服器中招後，做映像、記 hash、保全 log，供後續調查與可能的法律行動
- **一般場景**：資安事件調查、惡意程式分析、法律訴訟取證

## 相關概念
- [[chain-of-custody]]：鑑識證據的保管與登記流程
- [[hash-function]]：完整性驗證與竄改偵測
- [[incident-response]]：鑑識是事件調查的一環

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-2-create-and-use-documentation/2-document-evidence-with-chain-of-custody-forms|Course 6 Module 3 Section 2 Leaf 2 Document evidence with chain of custody forms]]
