---
title: "SBOM（軟體物料清單）"
slug: sbom
aliases: [SBOM, 軟體物料清單, Software Bill of Materials, SSDF, SLSA, VEX, 軟體供應鏈安全]
category: 資安・軟體開發安全
confidence: 已驗證
created: 2026-07-04
---

## 定義

**SBOM（軟體物料清單）**是一份記錄某套軟體用到的**所有元件（套件名稱、版本、來源供應商）**的結構化清單，像食品的成分標示，讓使用者看得見軟體「裡面裝了什麼」。核心價值：當某個開源元件爆出漏洞（如 Log4j），能立刻查出「我哪些系統用到它」。**由軟體供應商提供、不是買方自己生**。

## 關鍵面向

- **興起背景**：SolarWinds 供應鏈攻擊與 Log4j 事件後受重視；美國**行政命令 14028 號**要求聯邦採購軟體須附 SBOM。
- **規範依託**：**NIST SP 800-218（SSDF 安全軟體開發框架）**。
- **常見格式**：**SPDX**、CycloneDX；工具（考工具用途）：**Syft**（產 SBOM）等。
- **VEX（漏洞可利用性交換，Vulnerability Exploitability eXchange）**：搭配 SBOM 說明「清單裡這個有漏洞的元件，在本產品情境下**是否真的可被利用**」，避免一有 CVE 就全體恐慌。
- **軟體供應鏈三兄弟關係**：**SSDF（開發流程框架，四大構面：組織準備／保護軟體／生產安全軟體／回應漏洞）→ SBOM（說明軟體原物料組成）→ SLSA（來源證明、建構完整性、來源可信性，證明建構過程本身安全）**。
- 對照 [[cbom]]：CBOM 是「加密資產」版的物料清單、聚焦密碼學使用面。

## 應用場景

- **Simon 工作場景**：ISO 27001 資產盤點可直接擴充「軟體元件」欄位；採購第三方軟體時要求供應商附 SBOM；漏洞爆發時用 SBOM 快速定位受影響系統。
- **一般場景**：軟體供應商合規交付、開源相依風險管理、政府採購。

## 相關概念

- [[supply-chain-risk]]：SBOM 是控制軟體供應鏈風險的核心工具
- [[cbom]]：加密資產版的物料清單、同一盤點思路
- [[patch-management]]：SBOM 定位受影響元件後銜接修補
- [[eu-cra]]：歐盟網路韌性法要求數位產品提供 SBOM

## 來源

- [[1-learning/ipas/subject-1-planning/training-day1/1-regulations-governance-and-standards|iPAS 培訓班 Day 1 上午 · 法規治理與供應鏈]]
