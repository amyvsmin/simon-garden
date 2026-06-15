---
title: "標準（Standard）"
slug: standard
aliases: [Standard, 標準, 安全標準, security standard, 合規標準, compliance standard]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義

定義組織在特定領域需達到的合規門檻與技術或管理要求。標準介於 [[policy]]（政策）的原則性方向與 [[procedure]]（程序）的具體步驟之間，回答「要達到什麼程度」。

## 關鍵面向

- **層級定位**：[[regulations]]（法規）→ [[policy]]（政策）→ 標準（合規門檻）→ [[procedure]]（操作步驟），標準將政策的抽象原則轉化為可衡量的要求
- **內部 vs 外部標準**：內部標準由組織自訂（如「密碼至少 12 字元」）；外部標準由產業或國際組織制定（如 ISO 27001、NIST、PCI DSS）
- **可衡量性**：標準必須足夠具體到可以判斷「達標」或「未達標」，例如「加密傳輸」（政策）vs「TLS 1.2 以上」（標準）
- **常見資安標準**：ISO/IEC 27001（資訊安全管理）、NIST CSF（[[nist-csf]]）、PCI DSS（支付卡）、[[semi-e187]]（半導體設備）
- **與框架的關係**：框架（framework）提供結構與指引，標準提供必須達到的門檻；兩者常搭配使用

## 應用場景

- **Simon 工作場景**：ISO 27001 本身就是標準，公司正在推進中；公司內部的密碼複雜度標準、設備硬化標準（[[security-hardening]]）、備份保留標準都需要文件化
- **一般場景**：合規稽核以標準為衡量基準；供應商評估常以是否通過特定標準認證作為篩選條件

## 相關概念

- [[policy]]：標準將政策的原則具體化
- [[procedure]]：程序依標準的要求設計執行步驟
- [[regulations]]：法規可能引用或要求符合特定標準
- [[nist-sp-800-53]]：NIST 的安全控制措施目錄是標準的典型範例

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-1-introduction-to-asset-security/section-4-risk-and-asset-security/1-elements-of-a-security-plan|Course 5 Module 1 Section 4 Leaf 1 elements of a security plan]]
