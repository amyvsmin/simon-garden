---
title: "修補管理（Patch Management）"
slug: patch-management
aliases: [patch management, 修補管理, 補丁管理, vulnerability remediation, 漏洞修補, patch, 軟體更新, OS update]
category: 資安
confidence: 已驗證
created: 2026-05-09
query-count: 0
---

# 修補管理（Patch Management）

## 定義
找出哪些系統／應用尚未套用安全修補、決定何時／如何更新、追蹤完成率的流程；是漏洞管理（vulnerability management）的執行端、ISO 27001 A.12.6.1 直接對應、Course 5 Vulnerabilities 主場。

## 關鍵面向
- **典型流程**：
  - **Inventory**（盤點）：用 SQL 撈所有設備跟 OS 版本
  - **Identify**（識別）：對照 CVE 資料庫找出脆弱端點
  - **Prioritize**（排序）：依 CVSS／業務重要性排修補優先
  - **Test**（測試）：在 staging 環境驗證 patch 不破壞 production
  - **Deploy**（部署）：分批推送、避開業務高峰
  - **Verify**（驗證）：跑 query 確認 patch 生效率
- **資料來源**：endpoint management 工具（BIGFIX、Intune、Omnissa、Jamf）的 patch status 通常進 SQL DB
- **典型 SQL 用法**：`WHERE OS_patch_date < '2025-01-01'` 撈舊 patch 機器、`WHERE patch_id LIKE 'KB____'` 撈特定 patch 群、`COUNT(*) GROUP BY patched` 算覆蓋率
- **Trade-off**：及時修補（資安）vs 系統穩定（業務）；緊急 patch 流程跟一般 patch 流程要分開
- **跟 anomaly detection 的關聯**：未 patch 機器是「版本異常」red flag 之一

## 應用場景
- **Simon 工作場景**：**BIGFIX POC**（公司目前進行中專案）的核心；**Veeam 備份**前後檢查 patch 狀態；**ISO 27001** 持續監控；**月度資安 KPI 簡報** patch 覆蓋率指標；**SQL Server MFA 專案**也要 patch DB engine
- **一般場景**：所有企業 IT 部門的標準動作；MSP（管理服務商）核心服務之一
- **跨課程引用**：Course 5 Assets/Threats/Vulnerabilities 預期會深入講漏洞管理流程

## 相關概念
- [[anomaly-detection]]：未 patch = 版本異常 red flag
- [[sql]]：撈 patch 狀態的工具
- [[aggregate-function]]：算 patch 覆蓋率
- [[cve-weaponization-time]]：CVE 武器化時間影響 patch SLA 設定

## 尚未解決的疑問
- Zero-day patch 的處理流程（沒 patch 可裝怎麼辦）、Course 5 預期會教
- Virtual patching（IPS 規則暫擋）vs 真實 patch 的決策、進階主題

## 來源
- [[3-query-databases-with-sql|Course 4 Module 4 Section 1 Leaf 3: Query databases with SQL]]
