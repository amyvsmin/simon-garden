---
title: "政策標準程序層級（Policy-Standard-Procedure Hierarchy）"
slug: psp-hierarchy
aliases: [Policy-Standard-Procedure Hierarchy, 政策標準程序層級, PSP, 治理文件架構, policy hierarchy, 政策層級]
category: 資安・風險管理
confidence: 已驗證
created: 2026-05-25
---

## 定義
組織資安治理文件由上到下的層級架構：政策（Policy，高階方向與原則）→ 標準（Standard，具體要求與規格）→ 程序（Procedure，逐步操作指引）。有些框架再加上指引（Guideline，建議性做法）作為第四層。

## 關鍵面向
- **Policy（政策）**：最高層、定義組織安全方向與承諾；由高階管理層簽核；例：「所有存取必須經過身份驗證」
- **Standard（標準）**：具體化政策要求的可衡量規格；例：「密碼長度至少 12 字元、含大小寫與特殊字元」
- **Procedure（程序）**：第一線人員的逐步操作手冊；例：「帳號建立 SOP 步驟 1-2-3」
- **由上到下的約束力**：政策 > 標準 > 程序；下層不能牴觸上層
- **定期審查**：文件需定期更新以反映新威脅與法規變動

## 應用場景
- **Simon 工作場景**：ISO 27001 要求完整的政策-標準-程序體系、資訊安全政策文件的架構設計、SOP 撰寫（如 SQL Server MFA 的操作程序）
- **一般場景**：企業內稽內控文件體系、新員工入職訓練依據、合規審計的書面證據

## 相關概念
- [[compliance]]：治理文件是合規的書面基礎
- [[information-security]]：PSP 層級是資訊安全管理的文件骨幹
- [[acceptable-use-policy]]：AUP 是政策層的具體實例
- [[nist-csf]]：框架指引如何建構治理文件

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-1-introduction-to-asset-security/section-4-risk-and-asset-security/1-elements-of-a-security-plan|Course 5 Module 1 Section 4 Leaf 1 elements of a security plan]]
