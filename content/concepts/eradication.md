---
title: "根除（Eradication）"
slug: eradication
aliases: [Eradication, 根除, 清除, 移除, eradication, 威脅清除]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-13
---

## 定義
把事件元素從「所有受影響系統」完整移除的行動（eradication）。是 [[incident-response-lifecycle]] 第三階段的第二步，目標是**清除威脅本身**——不只圍住，而是把惡意程式、後門、被利用的弱點等痕跡徹底拔除。

## 與 containment、recovery 的差別（獨立性）
- **根除 = 把威脅本身清掉**：目標是「完整移除」事件元素，例如執行弱點測試、對與威脅相關的 [[vulnerability]] 套用 patch（修補）。
- 對比 [[containment]]（遏制）：遏制只是先圍住、防擴散，威脅還在系統上；根除才動手把威脅清除。
- 對比 [[recovery]]（復原）：復原處理的是「系統與服務」（讓它回正常），根除處理的是「威脅」（讓它消失）。一個對付攻擊者留下的東西、一個恢復被影響的業務。
- **順序與連動**：遏制服務於根除、根除服務於復原——清乾淨了，才能安心把系統還原上線。

## 關鍵面向
- **完整性**：要從「所有」受影響系統移除，殘留一處就可能復發
- **典型動作**：弱點測試、套用 patch、移除惡意檔案／後門
- **定位**：承接遏制（已圍住）、為復原（要上線）鋪路

## 應用場景
- **Simon 工作場景**：清除受感染主機的惡意程式、修補被利用的 CVE、確認所有受影響端點都清乾淨再復原
- **一般場景**：惡意程式清除、漏洞修補、後門移除

## 相關概念
- [[containment]]：根除前的「圍堵不擴散」
- [[recovery]]：根除後的「恢復正常服務」
- [[vulnerability]]：根除常需修補被利用的弱點
- [[incident-response-lifecycle]]：根除屬第三階段第二步

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/4-the-containment-eradication-and-recovery-phase-of-the-lifecycle|Course 6 Module 3 Section 3 Leaf 4 The containment, eradication, and recovery phase of the lifecycle]]
