---
title: "受法律保護的資訊（Legally Protected Information）"
slug: legally-protected-information
aliases: [Legally Protected Information, 受法律保護的資訊]
category: 資安・資產安全
confidence: 已驗證
created: 2026-06-23
---

## 定義
受法律規範保護的個人資料（Legally Protected Information），是 sensitive data 的核心。三大類：PII（個人可識別資訊）、SPII（敏感個人可識別資訊）、PHI（受保護健康資訊）。未經授權存取會對組織財務、客戶與商譽造成重大傷害。

## 關鍵面向
- **PII**：能直接或間接識別特定個人的資訊（姓名、email、地址、電話）
- **SPII**：更敏感的 PII，外洩傷害更大（社會安全號碼、金融帳號、登入帳號密碼；來源把登入憑證歸在 SPII）
- **PHI**：受保護的健康資訊（醫療紀錄、診斷）
- **屬 sensitive data**：是 [[data-classification]] 中外洩代價最高的一類，必須擋住所有未授權者
- **受隱私法規規範**：GDPR、HIPAA 等，連動 [[information-privacy]]

## 應用場景
- **Simon 工作場景**：ISO 27001 個資保護與資料分類政策；判斷公司哪些資料屬受法律保護、需最高強度防護
- **一般場景**：CISSP Domain 2／Domain 1（隱私與合規），PII／PHI／SPII 與隱私法規常一起考

## 相關概念
- [[data-classification]]：legally-protected-information 是 sensitive 級的核心
- [[information-privacy]]：隱私法規規範的對象
- [[data-lifecycle]]：這類資料在各階段都需對應保護
- [[asset-classification]]：屬高階資產

## 來源
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-1-safeguard-information/4-the-data-lifecycle|Course 5 Module 2 Section 1 Leaf 4 The data lifecycle]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-2-event-and-incident-detection/4-data-and-asset-classification|Course 8 Module 1 Section 2 Leaf 4 Data and asset classification]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-3-your-impact-on-data-protection/3-julianas-story-asset-protection|Course 8 Module 1 Section 3 Leaf 3 Juliana's story: Asset protection]]
