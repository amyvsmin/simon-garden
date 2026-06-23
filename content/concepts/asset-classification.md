---
title: "資產分類（Asset Classification）"
slug: asset-classification
aliases: [Asset Classification, 資產分類, asset classification, 資產分級, low-level asset, high-level asset, 低階資產, 高階資產]
category: 資安
confidence: 已驗證
created: 2026-06-23
---

## 定義
依對組織的敏感度與重要性給資產貼標籤的做法（Asset Classification），範圍從低階到高階。public data 屬低階資產（被攻破不傷組織），sensitive 與 confidential data 屬高階資產（外洩會重創組織財務、商譽、競爭優勢與客戶信任）。

## 關鍵面向
- **判準**：外洩後對組織的負面衝擊大小
- **低階例**：公司網址；**高階例**：內部討論營業秘密的 email
- **與資料分類連動**：由 [[data-classification]] 的敏感度推導出資產的高低階
- **目的**：認出哪些資產需要更高強度的安全、哪些只需最小防護

## 應用場景
- **Simon 工作場景**：ISO 27001 資產盤點與 BIA（[[business-impact-analysis]]）——盤點哪些系統／主機影響營運，本質就是資產分級
- **一般場景**：CISSP Domain 2（Asset Security）核心，資產分級是後續控制強度配置的依據

## 相關概念
- [[data-classification]]：資產分級的敏感度來源
- [[asset]]：分類的對象
- [[business-impact-analysis]]：資產重要性的衝擊分析延伸

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-2-event-and-incident-detection/4-data-and-asset-classification|Course 8 Module 1 Section 2 Leaf 4 Data and asset classification]]
