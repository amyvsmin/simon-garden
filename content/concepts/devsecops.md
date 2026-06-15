---
title: "DevSecOps"
slug: devsecops
aliases: [DevSecOps, 安全左移, shift left security, 開發安全營運, 安全開發營運]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義

在 DevOps（開發與營運整合）流程中嵌入安全實踐，將安全檢查從部署後的「右移」提前到開發早期的「左移」。核心理念是安全不是最後加上的關卡，而是從程式碼撰寫開始就融入的持續活動。

## 關鍵面向

- **安全左移（Shift Left）**：在 [[cicd-pipeline]] 的每個階段都加入安全檢查，越早發現問題修復成本越低
- **自動化安全掃描**：SAST（靜態應用安全測試）、DAST（動態應用安全測試）、SCA（軟體組成分析）、IaC 掃描（基礎設施即程式碼安全）
- **文化面**：開發、安全、營運三個團隊共享安全責任，不是只丟給資安團隊
- **與 DevOps 的差異**：DevOps 強調開發與營運協作加速交付，DevSecOps 加入安全維度確保交付速度不犧牲安全性
- **度量指標**：漏洞平均修復時間（MTTR）、CI/CD 安全掃描通過率、production 事件中可歸因於開發缺陷的比例

## 應用場景

- **Simon 工作場景**：公司內部工具開發若導入 DevSecOps 可降低上線後的漏洞風險；ISO 27001 A.14 安全開發要求的實踐方式；CISSP 考試範圍涵蓋軟體開發安全
- **一般場景**：所有有軟體開發的組織都應導入；[[owasp-top-10]] 列出的多數漏洞可在 DevSecOps 流程中被攔截

## 相關概念

- [[cicd-pipeline]]：DevSecOps 的安全掃描嵌入在 CI/CD 管線中執行
- [[owasp-top-10]]：DevSecOps 的掃描工具常以 OWASP Top 10 為基準
- [[vulnerability-management]]：DevSecOps 是漏洞管理在開發階段的前移
- [[supply-chain-risk]]：SCA 掃描第三方套件是防範供應鏈風險的手段

## 來源

- Course 5 Assets, Threats, and Vulnerabilities — Module 3
