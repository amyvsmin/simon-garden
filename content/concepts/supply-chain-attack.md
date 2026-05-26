---
title: "供應鏈攻擊（Supply Chain Attack）"
slug: supply-chain-attack
aliases: [Supply Chain Attack, 供應鏈攻擊, 軟體供應鏈攻擊, third-party attack, 第三方攻擊, software supply chain]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
透過攻擊第三方供應商、開源元件或軟體更新機制來間接滲透目標組織的攻擊手法。攻擊者不直接打目標，而是先入侵目標信任的上游供應商，再借道進入。

## 關鍵面向
- **攻擊向量**：被篡改的軟體更新（如 SolarWinds）、被注入惡意程式碼的開源套件（如 npm/PyPI）、被入侵的硬體供應商
- **信任鏈破壞**：組織對供應商的信任被武器化；傳統安全模型假設「來自信任來源的東西是安全的」，供應鏈攻擊推翻這個假設
- **偵測困難**：惡意程式碼藏在合法軟體中，特徵式偵測難以辨識
- **影響規模**：一次成功的供應鏈攻擊可同時影響數千個下游組織
- **防禦策略**：SBOM（Software Bill of Materials，軟體物料清單）追蹤元件來源、軟體簽章驗證、供應商安全評估

## 應用場景
- **Simon 工作場景**：BIGFIX 等管理工具本身就是透過更新機制觸及全公司端點，若被供應鏈攻擊將影響極大；ISO 27001 A.15 供應商關係管理需評估供應商資安能力
- **一般場景**：DevSecOps 中的依賴套件掃描（SCA）、政府機構的供應商資安要求、零信任架構的驗證策略

## 相關概念
- [[threat]]：供應鏈攻擊是高階威脅行為者的常用手法
- [[defense-in-depth]]：供應鏈攻擊突顯單一信任點的風險，需多層防禦
- [[vulnerability]]：開源元件的弱點是供應鏈攻擊的常見入口
- [[insider-threat]]：被入侵的供應商等同於內部威脅

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
