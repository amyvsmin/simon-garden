---
title: "遏制（Containment）"
slug: containment
aliases: [Containment, 遏制, 圍堵, 控制, containment, 事件遏制]
category: 資安
confidence: 已驗證
created: 2026-06-13
---

## 定義
限制並防止事件造成「額外損害」的行動（containment）。是 [[incident-response-lifecycle]] 第三階段（遏制／根除／復原）的第一步，目標是**止血、不擴散**——把損害控制在最小範圍，但此時威脅可能仍存在於系統上。組織把遏制策略寫在 [[incident-response-plan]]，不同事件類型用不同策略。

## 與 eradication、recovery 的差別（獨立性）
- **遏制 = 不讓它變更糟**：目標是阻止損害「擴大」，不是清除威脅本身。典型動作是把受感染系統斷網隔離（isolation）——惡意程式還在那台機器上，但無法擴散到其他系統。
- 對比 [[eradication]]（根除）：根除才是「把威脅本身從系統上徹底清掉」；遏制只是先圍住。
- 對比 [[recovery]]（復原）：復原是事後「讓服務回到正常」；遏制階段服務可能仍中斷或被隔離。
- **順序與連動**：遏制服務於根除的目標——先圍住，後面才好清。

## 關鍵面向
- **時機**：事件一偵測到就先遏制
- **典型策略**：單機惡意程式 → 斷網隔離，阻止擴散到網路其他系統
- **策略因事件而異**：寫在 incident response plan，依事件類型選不同遏制法
- **定位**：是「把威脅移出環境」的第一步，但尚未移除威脅

## 應用場景
- **Simon 工作場景**：端點中招時先斷網隔離、阻止橫向擴散，再進行後續清除
- **一般場景**：勒索軟體隔離、受害帳號停權、可疑網段封鎖

## 相關概念
- [[eradication]]：遏制之後的「徹底清除威脅」
- [[recovery]]：根除之後的「恢復正常服務」
- [[incident-response-lifecycle]]：遏制屬第三階段第一步
- [[incident-response-plan]]：記載遏制策略

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/4-the-containment-eradication-and-recovery-phase-of-the-lifecycle|Course 6 Module 3 Section 3 Leaf 4 The containment, eradication, and recovery phase of the lifecycle]]
