---
title: "安全框架（Security Framework）"
slug: security-framework
aliases: [Security Framework, 安全框架, security framework, 資安框架, security frameworks, 安全框架指引]
category: 資安・風險管理
confidence: 已驗證
created: 2026-06-25
---

## 定義
建立計畫以緩解資料與隱私之風險與威脅的指引，提供「實作安全生命週期」的結構化方法。是資安人對齊業界最佳實務與法規要求的工具，但文件常又長又密（如 NIST SP 800-53 達 492 頁），定位特定控制項耗時。

## 關鍵面向
- **結構化方法**：把風險緩解拆成可遵循的步驟與控制項
- **控制項與增強項**：框架含個別 control（如 NIST 的 SI-5）與可選的 enhancement
- **代表框架**：[[nist-csf]]（Cybersecurity Framework）、NIST SP 800-53、ISO 27001
- **解讀靠 AI**：可用 [[generative-ai]] 給足 context 來快速理解特定控制項（見來源 Leaf 5），但要 [[human-in-the-loop]] 驗證

## 應用場景
- **Simon 工作場景**：推 ISO 27001 與 BIA 時對照控制項；遇冗長標準用「給足 context＋問特定控制項」的 prompt 快速理解；技術面試可提 NIST CSF
- **一般場景**：組織安全治理、合規對應、控制項落地

## 相關概念
- [[nist-csf]]：最常被引用的具體安全框架
- [[security-control]]：框架由一條條控制項組成
- [[risk]]：框架的目的是緩解風險
- [[generative-ai]]：用 AI 解讀冗長框架文件

## 來源

- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/5-decode-complex-security-frameworks-with-ai|Course 8 Module 5 Section 1 Leaf 5 Decode complex security frameworks with AI]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-2-course-wrap-up/3-prepare-for-technical-interviews|Course 8 Module 5 Section 2 Leaf 3 Prepare for technical interviews]]
