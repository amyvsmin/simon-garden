---
title: "零時差漏洞（Zero-Day）"
slug: zero-day
aliases: [Zero-Day, 零時差漏洞, 零日漏洞, zero-day vulnerability, zero-day exploit, 0-day]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
開發者尚未知曉或尚無修補的弱點。「零天」指的是開發者在弱點被利用前有零天的修補時間——攻擊者在防禦方知道問題前就已經動手。

## 關鍵面向
- **高價值目標**：zero-day 在黑市價格極高，國家級攻擊者與 APT 組織常囤積使用
- **無 patch 窗口**：傳統修補流程（發現→評估→部署 patch）完全失效，只能靠 [[defense-in-depth]] 的其他層攔截
- **偵測困難**：特徵式（signature-based）偵測無法辨識，需依賴行為偵測、[[anomaly-detection]]、沙箱分析
- **與已知弱點的差異**：已知弱點有 CVE 編號、有 patch 可用；zero-day 兩者都沒有
- **負責任揭露**：安全研究人員發現後先通知廠商修補，再公開——這段緩衝是減少 zero-day 傷害的關鍵

## 應用場景
- **Simon 工作場景**：ISO 27001 風險評鑑中 zero-day 屬於「無法預測的殘餘風險」，需靠縱深防禦補償；Veeam 備份確保 zero-day 攻擊後仍能還原
- **一般場景**：CISA KEV（Known Exploited Vulnerabilities）清單追蹤、EDR 廠商的 zero-day 偵測能力評比

## 相關概念
- [[vulnerability]]：zero-day 是弱點的最危險子類
- [[exploit]]：zero-day exploit 是針對未知弱點的攻擊手法
- [[defense-in-depth]]：zero-day 防禦的核心策略
- [[patch-management]]：zero-day 的根本解法，但有時間差
- [[vulnerability-management]]：zero-day 管理是弱點管理中最棘手的部分

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-1-flaws-in-the-system/2-vulnerability-management|Course 5 Module 3 Section 1 Leaf 2 vulnerability management]]
- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
