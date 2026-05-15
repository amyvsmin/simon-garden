---
title: "2026 臺灣資安館導覽座談 — 晶片供應鏈安全、PQC、SEMI E187、CRA/SBOM、營運韌性｜CYBERSEC 2026 Day 3"
date: 2026-05-07
type: 來源分析
url: "https://web.plaud.ai/s/pub_025767c5-0550-46ca-b477-4f8bf3526e16::Hc1qVGFuL-KQPmDdsw6r8NKl1MF8fJPxDoT-Mh_2YjkgTRF8HwQ0fucmEEINV05bllQEZjj6m-eebogC"
inbox-id: "359f85da-554f-8165-8242-d5365902d6e5"
concepts: [secure-boot, semi-e187, eu-cra, cyber-range-digital-twin, local-soc-ai-assistant, supply-chain-risk]
projects: []
created: 2026-05-07
---

## 摘要

CYBERSEC 2026 Day 3 臺灣資安館「自主研發特展」第 92 頁涵蓋 11 個展位、串聯設計／製造／上線／運維的信任基石。PQC 主題三家：JMEM TEK PUF-PQC 量子安全晶片（金鑰不入記憶體）、ITRI 後量子密碼晶片矽智財平台（ML-KEM／ML-DSA／SLH-DSA、ARM／RISC-V FPGA、過 FIPS 140-3 CAVP）、ITRI×PQC-CIA 把 PQC 跟 FIDO 整合成機敏文件電子簽核環境。產線安全：全景軟體 Ciot+HI-LO SYSTEMS（河洛半導體）把安全燒錄整合進產線、串聯晶片預燒錄+金鑰管理+雲端憑證對接+裝置身分配置。SEMI E187 半導體設備資安：ITRI 量測中心+資策會+TCA 推認驗證、CyberOTLab+ORing 推 SEMI-E187 紅藍隊（ICS-Cracker、ORAI、OPS）。CRA 合規：ITRI 推 SBOM 軟體安全合規檢測平台（整合 SAST／SBOM／DAST + AI 檢核、離線可施作）。其他：Zyxel 勤晁科技 Medical Trust Architecture（FIDO+量子加密+Data Diode）、資策會+SyncKey Tech 興啟科技 1:1 數位孿生攻防演練、Genie 威睿科技電信級流量分析、Woodpecker 啄木科技 XVR 整合式 SOC + 全地端 AI 助手。

## 核心概念

- [[secure-boot]]：產線兩次燒錄（開機程式 + 裝置憑證）、HSM 簽章、晶片公鑰驗章、AI 伺服器與 IoT 出廠前安控標配
- [[semi-e187]]：半導體設備資安認證、TSMC 帶頭+SEMI 標準化、四大構面、TAF/TCA 授證從 BOC 升級到型號批量
- [[eu-cra]]：歐盟網路韌性法 2026 起實施、文件機讀+人讀合規、SBOM 是核心要求、影響所有進歐盟產品
- [[cyber-range-digital-twin]]：AI + 數位孿生重現國家級攻擊鏈、五段式分析、虛擬環境讓主管機關理解影響
- [[local-soc-ai-assistant]]：地端大資料 + RTX 4090 跑的 SOC AI 助手、解決雲端 AI 的隱私合規顧慮、教學流程內嵌補強小模型能力
- [[supply-chain-risk]]：晶片→韌體→OS→應用層全鏈條治理、SEMI E187 + CRA + IEC 62443 三規範並行

## 對 Simon 的應用

公司 IT 角度直接可參考：

1. **SEMI E187 四大構面當資安驗收 checklist**：OS 不過期、加密傳輸、端點防護與漏掃、監測與日誌——這套 checklist 也適用於非半導體設備（公司辦公機房／印表機伺服器都可套）。寫成 ISO 27001 控制項對照可省力。
2. **CRA + SBOM 即將影響供應商評估**：採購歐盟出貨設備的廠商會被推著做 SBOM；公司若自家有產品出口（即使非主業），要追第三方軟體供應鏈合規。順便把現有 SaaS 也做一次 SBOM 盤點。
3. **地端資安助手概念可借鑑**：對 SOC 工具預算有限的 IT 團隊、用內網大資料 + 開源 LLM + RTX 4090 替代昂貴 SIEM 雲端服務值得評估；個人也能拿 Claude Code + 公司資料做類似事情、注意 [[shadow-ai]] 治理底線。
4. **數位孿生攻防演練**：BIGFIX POC 之後可以提案類似的演練環境給 Sam、用虛擬環境練響應劇本而不影響 production。
5. **PQC 硬體化金鑰／token**：JMEM TEK PUF-PQC 晶片或 ITRI 矽智財都可整合進硬體 token 形式；給 SQL Server MFA + Kerberos + Silverfort 專案參考、未來 PQC 遷移時硬體 token 是選項之一。

## 原文要點

> 來源：CYBERSEC 2026 Day 3 Plaud 錄音 + 92 頁臺灣自主研發特展 brochure（11 個展位）對照後重寫。Plaud 錄音中部分廠商名與 brochure 對不上、以 brochure 為準。

### 信任基石（晶片 + 供應鏈安全）

- **全景軟體 Ciot + HI-LO SYSTEMS（河洛半導體）**：安全燒錄解決方案、整合進產線、串聯晶片預燒錄+金鑰管理+雲端憑證對接+裝置身分配置；於出廠前完成信任初始化、安全策略寫入、稽核留存；協助設備廠商減輕自建 HSM 與產線連網負擔
- **JMEM TEK**：PUF-PQC 原生金鑰量子安全晶片、結合自研物理不可複製功能（PUF）與後量子密碼（PQC）、金鑰不儲存於記憶體擋側信道、符合 NIST FIPS 203/204 + CAVP 標準與 ISO/IEC 20897 PUF 規範、實現 secure by design + anti-tamper 架構；客戶涵蓋無人載具、國防、衛星通訊、AI 資料中心
- **ITRI 後量子密碼晶片矽智財**（與 PQC-CIA 聯盟合作）：「PQC 晶片與公版平台（PQC Chip & System Common Platform）」、實作 NIST PQC 標準 ML-KEM、ML-DSA、SLH-DSA、過 FIPS 140-3 CAVP 認證、矽智財涵蓋 ARM 與 RISC-V 處理器 FPGA 版本、應用領域含金融、通訊、醫療、車用、國防
- **ITRI × PQC-CIA（PQC × FIDO 電子簽核）**：以後量子加密 PQC 為機敏文件打造安全的電子簽核環境、PQC 硬體安全金鑰保障機敏單位文件簽署、搭配工研院電子簽章系統整合、確保機敏文件在簽發過程未經竄改、實現完整性與不可否認性

### 醫療資安

- **Zyxel 勤晁科技**：信任醫療｜守護數據、Medical Trust Architecture 為核心、FIDO 無密碼身份認證+量子防禦加密+數位簽章+Data Diode 單向傳輸架構、強化跨系統資料交換安全防護

### SEMI E187 / IEC 62443

- **ITRI 量測中心 + 資策會 + TCA**：建構半導體供應鏈的全球信賴、推 SEMI E187 半導體設備資安認驗證制度、符合國際 ISO 規範、具備第三方公正性且可長期運作；四大構面（作業系統不過期、網路安全 HTTPS、端點防護與漏洞掃描、監測與日誌）；TAF 認證+TCA 授證從逐臺 BOC 升級到型號批量覆蓋
- **CyberOTLab + ORing**：SEMI-E187 紅藍隊資安防護方案、整合三套產品 — ICS-Cracker（自動化滲透與模糊測試、快速識別 OT 設備弱點）、ORAI（AI 與深度封包檢測、即時偵測並阻擋異常與零日攻擊）、OPS（端點控管、確保外來設備全面合規）；Plaud 座談補充：自動化測試從 2 個月壓到 2 週、硬體唯讀 USB 無 Agent 掃毒滿足 SEMI E187

### CRA + SBOM

- **ITRI「CRA 合規工具暨檢測服務」**：SBOM 軟體安全合規檢測平台、整合 SAST／SBOM／DAST 掃描+AI 智慧檢核、廠商送件前可完成「軟體安全性」+「產品文件」雙重自動化檢視、可離線施作保護程式碼不外洩、降低退件風險
- **資策會 NIST CSF 2.0／CDM 防護舉證**（Plaud 座談補充）：以 NIST CSF 2.0 為底建立 CDM 防護舉證框架（識別／保護／偵測／應變／復原）、解「買了三個防火牆」浪費問題、給董事會要錢有依據

### 營運韌性

- **資策會 + SyncKey Tech 興啟科技**：實戰化資安攻防演練系統、整合威脅預警到自動化防禦的完整閉環；前端混域情資蒐集+攻擊模擬（彙整全球 IoT 漏洞）；平台核心採現場封包即時建模、建立 1:1 數位雙生環境、不干擾生產流程支援高擬真攻防壓力測試；AI 驅動攻擊模擬重現多變滲透手法、後端防禦模組同步演算多元解決方案；Plaud 座談以 2024-12 俄羅斯國家級癱瘓型攻擊歐盟糖廠／工廠為案例、五段式攻擊鏈（VPN 漏洞→橫向→OT 控制）
- **Genie 威睿科技**：AI 驅動的電信級網路流量安全防護系統、電信級流量可視化、AI 異常偵測+即時攻擊防禦、即時掌握 DDoS 與潛藏詐騙通聯、支援打詐偵查與溯源；Plaud 座談補充：跨電信視圖、台灣／日本／東南亞／歐洲電信都用
- **Woodpecker 啄木科技**：XVR 整合式 SOC 架構、跨源關聯+行為分析、全地端 AI 資安助手輔助事件調查與應變處置；Plaud 座談補充：SOC 五環（邊界／違規／攻擊偵測／事件管理／知識管理）整合內網大資料庫、地端資安助手在 RTX 4090 跑、解決雲端 AI 資料外洩擔憂

## 原始連結

- Plaud 錄音：[05-07 座談：2026臺灣資安大會—晶片與供應鏈安全、PQC、SEMI E187/IEC 62443、CRA/SBOM與電信級防護](https://web.plaud.ai/s/pub_025767c5-0550-46ca-b477-4f8bf3526e16::Hc1qVGFuL-KQPmDdsw6r8NKl1MF8fJPxDoT-Mh_2YjkgTRF8HwQ0fucmEEINV05bllQEZjj6m-eebogC)
- 議程：5/7（四）11:00 起、臺灣資安館導覽
- 92 頁臺灣自主研發特展涵蓋 11 個展位（廠商以 brochure 為準）：ITRI／PQC-CIA（PQC×FIDO 電子簽核）、JMEM TEK（PUF-PQC 晶片）、ITRI／資策會／TCA（SEMI E187 認驗證）、Zyxel 勤晁科技（Medical Trust Architecture）、全景軟體／HI-LO SYSTEMS（Ciot 安全燒錄）、Genie 威睿科技（電信級流量分析）、CyberOTLab／ORing（SEMI-E187 紅藍隊）、資策會／SyncKey Tech 興啟科技（數位孿生攻防演練）、ITRI（SBOM 合規檢測平台）、ITRI／PQC-CIA（PQC 晶片矽智財）、Woodpecker 啄木科技（XVR 整合式 SOC）
