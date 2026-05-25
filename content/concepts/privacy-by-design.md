---
title: "隱私設計（Privacy by Design）"
slug: privacy-by-design
aliases: [privacy by design, PbD, 隱私設計, 隱私即設計, 嵌入式隱私, 設計階段隱私]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
在系統、產品或服務的設計階段就將隱私保護內建為預設行為，而非事後補救或外掛。由加拿大隱私委員 Ann Cavoukian 提出的七大原則，已被 GDPR 第 25 條（Data Protection by Design and by Default）納入法規要求。

## 關鍵面向
- **預防而非補救**：在問題發生前就消除隱私風險，而非事後偵測與修補
- **預設隱私**：系統預設即為最高隱私保護，使用者不需額外操作就受保護
- **嵌入設計**：隱私保護是核心功能的一部分，不是附加元件
- **正和而非零和**：隱私與功能不必互斥，好的設計能兼顧兩者
- **全生命週期保護**：從 [[data-lifecycle]] 的建立到銷毀，每階段都有隱私控制

## 應用場景
- **Simon 工作場景**：導入新系統（如 Omnissa MDM）時從架構階段就考慮員工隱私（定位功能的隱私影響）；ISO 27001 風險評估時納入隱私衝擊分析；新專案 POC 階段先做隱私影響評估（PIA）
- **一般場景**：App 開發時預設不收集非必要個資、資料庫設計時內建加密與存取控制、Cookie 預設不追蹤

## 相關概念
- [[information-privacy]]：PbD 是實現資訊隱私的設計方法論
- [[data-governance]]：PbD 是治理框架在系統設計層的具體實踐
- [[security-culture]]：組織若有 PbD 意識，會自然形成隱私導向的文化
- [[data-lifecycle]]：PbD 要求在生命週期每階段都嵌入保護

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
