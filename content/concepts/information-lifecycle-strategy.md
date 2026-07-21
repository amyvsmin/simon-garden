---
title: "資訊生命週期策略（Information Lifecycle Strategy）"
slug: information-lifecycle-strategy
aliases: [Information Lifecycle Strategy, 資訊生命週期, information lifecycle, 資訊生命週期策略, 資安生命週期, security lifecycle]
category: 資安・資產安全
confidence: 已驗證
created: 2026-06-23
---

## 定義
確保已辨識資產被有效保護的四步策略（Information Lifecycle Strategy）：① 辨識公司重要資產（含 PII、財務資訊、社會安全號碼、EIN 等敏感客戶資訊）→ ② 評估保護這些資產的現有安全措施、檢視公司資安政策（含弱點掃描、檢視既有流程）→ ③ 保護已辨識的資產 → ④ 監控已落實的保護流程。

## 關鍵面向
- **四步**：辨識 → 評估 → 保護 → 監控
- **起點是辨識重要資產**：尤其客戶資料／PII（見 [[legally-protected-information]]）
- **評估含檢視公司資安政策**：理解「公司在乎什麼、該怎麼保護」
- **跟 data-lifecycle 區分**：[[data-lifecycle]] 是資料狀態歷程（建立→儲存→使用→封存→銷毀），本概念是「辨識→評估→保護→監控」的保護動作循環，兩者同名不同義

## 應用場景
- **Simon 工作場景**：對應 ISO 27001 的「資產盤點 → BIA → 控制 → 監控」順序；新人入職先摸清重要資產的方法
- **一般場景**：CISSP Domain 2（Asset Security），資安分析師辨識與保護資產的操作框架

## 相關概念
- [[asset]]：策略第一步要辨識的對象
- [[data-lifecycle]]：同名但不同義（資料狀態歷程 vs 保護動作循環）
- [[legally-protected-information]]：要保護的核心資產類型
- [[asset-classification]]：辨識資產後的分級

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-1-protect-data-and-communicate-incidents/section-3-your-impact-on-data-protection/3-julianas-story-asset-protection|Course 8 Module 1 Section 3 Leaf 3 Juliana's story: Asset protection]]
