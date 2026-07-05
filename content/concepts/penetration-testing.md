---
title: "滲透測試（Penetration Testing）"
slug: penetration-testing
aliases: [Penetration Testing, 滲透測試, pen test, pentest, 滲透測試演練, ethical hacking, 白帽測試]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
模擬真實攻擊者的手法來測試系統防禦的安全評估方法。與 [[vulnerability-assessment]] 的差異在於：滲透測試不只找弱點，還會實際嘗試利用弱點（[[exploit]]），驗證弱點是否真的能造成損害。

## 關鍵面向
- **三種測試範圍**：黑箱（測試者無內部資訊）、白箱（測試者有完整資訊）、灰箱（部分資訊）
- **標準流程**：偵察（[[osint]]）→ 掃描（[[vulnerability-scanner]]）→ 取得存取 → 維持存取 → 清除痕跡 → 報告
- **授權與合法性**：必須事先取得書面授權（ROE, Rules of Engagement），否則等同非法入侵
- **紅隊 vs 滲透測試**：紅隊演練更廣（含社交工程、實體入侵），滲透測試通常聚焦在技術面
- **產出**：詳細報告含每個弱點的利用路徑、影響範圍、修補建議、風險評分

## 應用場景
- **Simon 工作場景**：ISO 27001 A.18.2.3 要求定期技術合規審查（滲透測試是常見方式）；公司可考慮年度外部滲透測試以驗證防禦有效性
- **一般場景**：PCI DSS 要求年度滲透測試、新系統上線前的安全驗證、紅隊演練

## 相關概念
- [[vulnerability-assessment]]：找弱點但不利用，是滲透測試的前置步驟
- [[exploit]]：滲透測試會實際使用 exploit 驗證弱點
- [[osint]]：滲透測試偵察階段的核心方法
- [[attack-surface]]：滲透測試的目標是找出可利用的攻擊面
- [[defense-in-depth]]：滲透測試驗證縱深防禦的各層是否有效

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-2-identify-system-vulnerabilities/5-penetration-testing|Course 5 Module 3 Section 2 Leaf 5 penetration testing]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
