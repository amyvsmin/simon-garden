---
name: 供應鏈風險
aliases: [supply chain risk, SBOM, 第三方風險]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81e7-88bb-c7cfb1ae7b08
---

## 定義

企業使用的第三方硬體、軟體、韌體、服務在開發、發行、更新、維運任一環節被植入後門或繼承上游漏洞的風險；ISO 27001 A.5.19~A.5.23 供應商管理、SBOM 都用來控制此風險。

## 關鍵面向

- 全鏈條都是攻擊面（從晶圓、編譯、發行、更新都可植入）
- 中小企業缺乏議價力做深度稽核
- SBOM（Software Bill of Materials）是基礎管制工具
- **Cisco 2026 觀察**：攻擊者偏好供應鏈、targeting 一家技術供應商可橫掃多組織、跨組織橫向移動效率遠高於單點攻擊
- **AI 加速**：agentic agent 可自動掃描整條供應鏈尋找最弱環節

## 應用場景

- Simon 工作場景：CISSP、ISO 27001 A.5.19~A.5.23 供應商管理控制；SQL Server / Silverfort 第三方整合決策
- 一般場景：採購、稽核、資安治理

## 相關概念

- [[firmware-attack-surface]]：韌體繼承軟體供應鏈風險
- [[critical-infrastructure]]：CIP 採購多來自全球供應鏈
- [[secure-boot]]：抵禦供應鏈風險的部分控制

## 尚未解決的疑問

- AI 時代軟體供應鏈該如何管制 model 來源

## 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
- [[2026-05-05-google-cloud-agentic-secops-cybersec]]
- [[2026-05-05-earth-kurma-apt-rootkit-cybersec]]
- [[2026-05-06-cisco-aging-infrastructure-cybersec]]
- [[2026-05-07-cybersec-taiwan-pavilion-tour]]
