---
title: "SSDLC（安全軟體開發生命週期）"
slug: ssdlc
aliases: [SSDLC, 安全軟體開發生命週期, Secure SDLC, 安全開發生命週期, 安全性左移, Shift Left, SAST, DAST]
category: 資安・軟體開發安全
confidence: 已驗證
created: 2026-07-05
---

## 定義

把資安控制點「內建」進軟體開發生命週期每一階段的方法論，核心精神是**安全性左移（Shift Left）**——在越前面的階段（需求、設計）就處理安全問題，修補成本越低，而不是等系統上線出事才補。

## 關鍵面向

- **五個步驟**：
  1. **需求分析**：一開始就納入安全與法規合規需求（安全性左移）。
  2. **架構設計**：建立**威脅建模**、用 [[stride]] 分析潛在威脅。
  3. **程式開發**：用 **SAST（靜態應用程式檢測）**做源碼分析（如 Checkmarx、Fortify）。
  4. **測試**：用 **DAST（動態應用程式檢測）**對執行中的程式測試。
  5. **部署與維護**：持續監控、修補漏洞。
- **SAST vs DAST**：SAST 分析原始碼／不執行程式、能早期抓到；DAST 對執行中的應用發動測試、更貼近真實攻擊面。兩者互補。
- **與威脅建模的關係**：SSDLC 的「架構設計」階段是威脅建模（STRIDE 等）的主場，把設計缺陷在寫程式前就攔下。

## 應用場景

- **Simon 工作場景**：公司若有自研或委外開發系統，可用 SSDLC 框架要求供應商在合約與驗收納入 SAST／DAST 與威脅建模，避免安全需求被壓到最後；也呼應 ISO 27001:2022 新增的「程式開發安全」控制項。
- **一般場景**：軟體團隊的 DevSecOps 導入、供應鏈軟體安全要求。

## 相關概念

- [[stride]]：SSDLC 設計階段的主力威脅建模框架
- [[threat-modeling]]：SSDLC 架構設計階段的核心活動
- [[sql-injection]]：SSDLC 的 SAST/DAST 檢測目標之一
- [[owasp-top-10]]：SSDLC 常以 OWASP Top 10 當檢測基準

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
