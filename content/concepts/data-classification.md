---
title: "資料分類（Data Classification）"
slug: data-classification
aliases: [Data Classification, 資料分類, data classification, 資料分級, public data, private data, sensitive data, confidential data, 公開資料, 私有資料, 敏感資料, 機密資料]
category: 資安
confidence: 已驗證
created: 2026-06-23
---

## 定義
依敏感度把資料分級、以決定保護強度與優先順序的做法（Data Classification）。常見四級由低到高：public（公開）、private（私有）、sensitive（敏感）、confidential（機密）。分類的目的是讓組織把最高強度的保護優先放在外洩代價最高的資料上。

## 關鍵面向
- **四級**：public（新聞稿／職缺／行銷素材）、private（公司 email／員工編號／研究資料）、sensitive（含 PII／SPII／PHI、見 [[legally-protected-information]]）、confidential（營業秘密／財務／敏感政府資料，常配 NDA）
- **四級（iPAS 用語）**：public 公開（可自由公開，如產品型錄）／internal 內部（僅供內部、外洩影響輕微）／sensitive 敏感（限特定人員、外洩影響嚴重，如客戶資料、財報）／confidential 機密（最高機敏、外洩重大損害，如商業機密、研發）。中間層 iPAS 稱 internal（內部）、Google／CISSP 稱 private（私有），指同一階。
- **分級 vs 分類是兩件事**：「分級」按敏感度決定**保護要多嚴**；「分類」按性質決定**該用哪種保護**。兩者維度不同、常一起做。
- **誰決定**：資料分級由**資料所有者（Data Owner）**決定，不是 IT；愈敏感就套愈嚴的控制（加密、嚴格存取控管），見 [[security-control-types]]。
- **與資產分類連動**：public 屬低階資產、sensitive／confidential 屬高階資產（見 [[asset-classification]]）
- **公司政策**：每家公司有自己的資料分類政策，分析師上手第一件事是先熟悉它
- **目的**：優先排序「哪些資料需要最高強度的保護」

## 應用場景
- **Simon 工作場景**：ISO 27001 的資料分類政策與資安規範撰寫；判斷哪些公司資料屬高階、要最高強度保護
- **一般場景**：CISSP Domain 2（Asset Security）核心考點，PII／PHI 與 GDPR／HIPAA 常一起考

## 相關概念
- [[asset-classification]]：由資料敏感度推導出的資產分級
- [[legally-protected-information]]：sensitive data 的核心（PII／SPII／PHI）
- [[data-lifecycle]]：資料從生到滅的歷程，分類是其上的保護依據
- [[asset]]：分類的對象
- [[de-identification]]：愈敏感的資料愈需要去識別化，分級是啟動它的依據
- [[data-sanitization]]：資料退場時，愈敏感的分級對應愈徹底的銷毀方法

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-2-event-and-incident-detection/4-data-and-asset-classification|Course 8 Module 1 Section 2 Leaf 4 Data and asset classification]]
- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
