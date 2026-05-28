---
name: 供應鏈風險
aliases: [supply chain risk, SBOM, 第三方風險, Supply Chain Attack, 供應鏈攻擊, 軟體供應鏈攻擊, third-party attack, 第三方攻擊, software supply chain]
category: 資安
status: active
confidence: 待驗證
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81e7-88bb-c7cfb1ae7b08
created: 2026-05-05
---

## 定義

企業使用的第三方硬體、軟體、韌體、服務在開發、發行、更新、維運任一環節被植入後門或繼承上游漏洞的風險；ISO 27001 A.5.19~A.5.23 供應商管理、SBOM 都用來控制此風險。

## 關鍵面向

- 全鏈條都是攻擊面（從晶圓、編譯、發行、更新都可植入）
- 中小企業缺乏議價力做深度稽核
- SBOM（Software Bill of Materials）是基礎管制工具
- **Cisco 2026 觀察**：攻擊者偏好供應鏈、targeting 一家技術供應商可橫掃多組織、跨組織橫向移動效率遠高於單點攻擊
- **AI 加速**：agentic agent 可自動掃描整條供應鏈尋找最弱環節

## 攻擊手法

透過攻擊第三方供應商、開源元件或軟體更新機制來間接滲透目標組織。攻擊者不直接打目標，而是先入侵目標信任的上游供應商，再借道進入。
- **攻擊向量**：被篡改的軟體更新（如 SolarWinds）、被注入惡意程式碼的開源套件（如 npm/PyPI）、被入侵的硬體供應商
- **信任鏈破壞**：組織對供應商的信任被武器化；傳統安全模型假設「來自信任來源的東西是安全的」，供應鏈攻擊推翻這個假設
- **偵測困難**：惡意程式碼藏在合法軟體中，特徵式偵測難以辨識
- **影響規模**：一次成功的供應鏈攻擊可同時影響數千個下游組織
- **防禦策略**：SBOM 追蹤元件來源、軟體簽章驗證、供應商安全評估、DevSecOps 依賴套件掃描（SCA）

## 應用場景

- Simon 工作場景：CISSP、ISO 27001 A.5.19~A.5.23（A.15）供應商管理控制；SQL Server / Silverfort 第三方整合決策；BIGFIX 等管理工具本身就是透過更新機制觸及全公司端點，若被供應鏈攻擊影響極大
- 一般場景：採購、稽核、資安治理、DevSecOps 依賴套件掃描、政府機構供應商資安要求、零信任架構的驗證策略

## 相關概念

- [[firmware-attack-surface]]：韌體繼承軟體供應鏈風險
- [[critical-infrastructure]]：CIP 採購多來自全球供應鏈
- [[secure-boot]]：抵禦供應鏈風險的部分控制
- [[threat]]：供應鏈攻擊是高階威脅行為者的常用手法
- [[defense-in-depth]]：供應鏈攻擊突顯單一信任點的風險，需多層防禦
- [[vulnerability]]：開源元件的弱點是供應鏈攻擊的常見入口
- [[insider-threat]]：被入侵的供應商等同於內部威脅

## 尚未解決的疑問

- AI 時代軟體供應鏈該如何管制 model 來源

## 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
- [[2026-05-05-google-cloud-agentic-secops-cybersec]]
- [[2026-05-05-earth-kurma-apt-rootkit-cybersec]]
- [[2026-05-06-cisco-aging-infrastructure-cybersec]]
- [[2026-05-07-cybersec-taiwan-pavilion-tour]]
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
