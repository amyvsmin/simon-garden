---
title: "站點韌性（Site Resilience）"
slug: site-resilience
aliases: [Site Resilience, 站點韌性, 站台韌性, 異地備援, site resilience, hot site, warm site, cold site, 熱備站, 溫備站, 冷備站, recovery site]
category: 資安・風險管理
confidence: 已驗證
created: 2026-06-13
---

## 定義
用 recovery site（備援站點）確保網路、資料中心或其他基礎設施在中斷時仍可用的策略（site resilience）。Resilience（韌性）本身是「為中斷做準備、回應並復原」的能力；站點韌性是其具體落地，靠三種準備程度不同的備援站點達成。是 [[business-continuity-plan]] 可納入的 [[recovery]] 策略之一。

## 關鍵面向
- **三種 recovery site**（可用性／成本遞減）：
  - **Hot site（熱備站）**：完全運作、與主環境一模一樣的複製，可立即啟用
  - **Warm site（溫備站）**：已完整更新設定但未持續全功能運作，可快速轉為可用
  - **Cold site（冷備站）**：只配置部分必要基礎設施，未必能立即使用、需額外作業
- **取捨**：可用性越高（熱）成本通常越高；依業務重要性選等級
- **目的**：在中斷時確保網路／資料中心／基礎設施的可用性（availability）

## 應用場景
- **Simon 工作場景**：公司的異地備援、Veeam 備份其實就是不同等級備援站點思維；評估要熱／溫／冷對應 ISO 27001 BIA 的 RTO／RPO 與成本取捨
- **一般場景**：資料中心災備、企業異地備援、雲端多區部署

## 相關概念
- [[business-continuity-plan]]：站點韌性是其復原策略
- [[disaster-recovery-plan]]：資訊系統災後復原倚賴備援站點
- [[recovery]]：站點韌性支援大規模復原

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-3-response-and-recovery/5-business-continuity-considerations|Course 6 Module 3 Section 3 Leaf 5 Business continuity considerations]]
