---
title: "老化網路基礎設施"
slug: aging-network-infrastructure
aliases: [aging network infrastructure, EoL network device, 老舊網路設備, 網設備生命週期風險]
category: 資安
confidence: 已驗證
created: 2026-05-06
query-count: 0
---

# 老化網路基礎設施

## 定義

組織內已過 End of Life（EoL）／End of Support（EoS）的網路設備（防火牆、路由器、交換器、VPN 閘道、印表機伺服器等）所累積的結構性攻擊面。Cisco 副總裁 CYBERSEC 2026 Day 2 點出全球網路設備將近一半已 EoL／EoS、30% 硬體軟體超過 10 年。

## 關鍵面向

- **規模統計（Cisco 2026）**：47% 已 EoL／EoS、30% 硬體軟體 > 10 年、23% 攻擊直接打網路設備
- **攻擊熱點轉移**：從端點／應用層 → 網路邊緣與核心、1／10 攻擊已瞄準網設備
- **風險原因**：無法接受最新 patch、不支援現代防護機制（如 TACACS+ over TLS）、廢棄協議（SNMP v1／v2、Telnet、明文 FTP）成攻擊面
- **Cisco Project Broccoli**：自我加固、邊緣設備充當 sensor、推 TACACS+ over TLS 等加密升級
- **解法主軸**：(1) EoL 設備盤點 + 升級時程（2) 廢棄協議停用（3) 啟用設備充當 sensor 的 telemetry 餵 SOC
- **與 supply chain 的連動**：EoL 設備往往來自單一廠商、攻擊一家供應鏈影響跨組織

## 應用場景

- Simon 工作場景：公司 IT 環境高機率有舊設備已 EoL；可借這場演講當依據推動「網設備 EoL 盤點 + 升級時程」進 ISO 27001 範圍；廢棄協議掃描可同步做
- 一般場景：金融、醫療、製造、政府；任何長期累積網設備的組織

## 相關概念

- [[supply-chain-risk]]：EoL 設備供應商環節攻擊
- [[critical-infrastructure]]：關鍵基礎設施常見此類舊設備
- [[agentic-kill-chain]]：agentic agent 自動偵察老化設備效率高

## 尚未解決的疑問

- 多少比例的台灣中小企業可實際執行升級
- 升級預算如何說服管理層

## 來源（自動維護）

- [[2026-05-06-cisco-aging-infrastructure-cybersec]]
