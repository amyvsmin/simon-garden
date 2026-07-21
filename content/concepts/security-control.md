---
title: "安全控制措施（Security Control）"
slug: security-control
aliases: [Security Control, 安全控制, 安全控制措施, 控制措施, security countermeasure, 資安控制]
category: 資安・風險管理
confidence: 已驗證
created: 2026-05-25
---

## 定義
用來降低特定資安風險的技術、管理或實體手段。安全控制措施是組織落實資安策略的具體工具，目的是保護資產（[[asset]]）不受威脅（[[threat]]）利用弱點（[[vulnerability]]）造成損害。

## 關鍵面向
- **三大類型**：技術控制（防火牆、加密、IDS）、管理控制（政策、訓練、風險評鑑）、實體控制（門禁卡、監視器、機房上鎖）
- **預防 vs 偵測 vs 矯正**：控制措施依功能再分為預防性（阻止事件發生）、偵測性（發現事件）、矯正性（事後修復）
- **縱深防禦**：多層控制疊加，任一層失效仍有其他層保護（見 [[defense-in-depth]]）
- **成本效益**：控制措施的成本不應超過所保護資產的價值

## 應用場景
- **Simon 工作場景**：ISO 27001 的 Annex A 控制項逐條對應到公司實際措施、資安 KPI 月簡報中控制措施有效性追蹤、BIGFIX 屬於技術控制（自動修補）、機房門禁屬於實體控制
- **一般場景**：NIST CSF 的 Protect 功能對應各類控制措施、SOC 2 合規審計中的控制項驗證

## 相關概念
- [[risk]]：控制措施的目的是降低風險
- [[defense-in-depth]]：多層控制措施疊加的策略
- [[nist-csf]]：框架層指引，控制措施是落地實作
- [[cia-triad]]：控制措施最終保護的三大目標
- [[security-hardening]]：系統層面的控制措施實作

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-1-safeguard-information/2-security-controls|Course 5 Module 2 Section 1 Leaf 2 security controls]]
