---
name: 安全開機
aliases: [secure boot, UEFI Secure Boot, 程式碼簽署]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81a9-b4e7-f8b5d8b87d67
---

# 定義

配合密碼簽署，確保開機載入器、韌體、作業系統核心皆來自可信來源，未通過簽章驗證的程式碼無法執行；是抵禦韌體層植入與電源調節器後門的核心控制。

# 關鍵面向

- 信任鏈從硬體 root of trust 開始
- 簽章驗證在開機階段即執行
- 配合 TPM 可進一步綁定硬體
- **產線安全燒錄流程**（CYBERSEC 2026 全景軟體 Ciot + HI-LO SYSTEMS 河洛半導體展示）：
  1. 晶片預燒錄：開機程式（bootloader）、用 HSM 存的硬體金鑰簽章、晶片內公鑰驗章
  2. 裝置憑證配置：每顆晶片唯一身份、配合憑證生命週期管理（CLM）、雲端憑證對接
  3. 驗章後晶片才允許啟動、未通過簽章的程式碼直接拒絕執行
  4. 安全策略寫入+稽核留存於出廠前完成、為後續上雲、維運、法規查核預先備妥基礎
- **AI Server / IoT 出廠標配**：客戶現在不只要 secure boot、還要每個裝置有專屬憑證做雲端身份認證
- **產線金鑰管理痛點**：產線一多→金鑰量大→需 PKI/KMS 治理、簽章金鑰絕不放軟體（必入 HSM）

# 應用場景

- Simon 工作場景：Google Cyber Course 3、CCNA 安全模組、CISSP Domain 3、Omnissa 端點完整性策略；公司若採購半導體相關設備可參考產線兩次燒錄當驗收 checklist
- 一般場景：MDM、終端管理、資安治理、AI Server 製造、IoT 量產線

# 相關概念

- [[firmware-attack-surface]]：安全開機是其主要防禦
- [[supply-chain-risk]]：安全開機防止供應鏈植入後門
- [[critical-infrastructure]]：CIP 設備多需安全開機機制
- [[semi-e187]]：四大構面之一的延伸控制
- [[eu-cra]]：CRA 漏洞修補義務的技術底座

# 尚未解決的疑問

- 老舊設備不支援安全開機時的補救策略
- 產線量產時 HSM 容量與金鑰輪替頻率如何平衡

# 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
- [[2026-05-07-cybersec-taiwan-pavilion-tour]]
