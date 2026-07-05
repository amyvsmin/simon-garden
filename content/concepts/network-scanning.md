---
title: "網路掃描（Network Scanning）"
slug: network-scanning
aliases: [網路掃描, Network Scanning, Port Scanning, 埠掃描, 通訊埠掃描, 主機掃描, banner grabbing]
category: 資安
confidence: 已驗證
created: 2026-07-05
---

## 定義

攻擊者（或滲透測試者）主動對目標網路發送封包，逐步探明「哪些主機存活、開了哪些 Port、跑什麼服務、是什麼作業系統、有哪些弱點」的過程。是 [[footprinting]] 之後、真正入侵之前的關鍵偵察步驟，考試常考掃描的**步驟順序、掃描方式與工具語法**。

## 關鍵面向

- **掃描五步驟（順序考點）**：**主機發現 → Port 發現 → 服務發現 → 作業系統發現 → 弱點發現**。
- **主機發現**：用各種 Ping Scan（ARP／ICMP／TCP／UDP）；ICMP 回應可能被防火牆刻意封鎖，沒回應不代表主機不存在。
- **Port 掃描方式**：Full Open Scan（完整三向交握、會留記錄）、Half-open Scan（只做 SYN→SYN-ACK、隱匿常用）、ACK Flag Probe（送 ACK 探防火牆規則）、Xmas Scan（同時設 FIN/PSH/URG 旗標）、FIN Scan（只設 FIN）、NULL Scan（不設任何旗標）、UDP Scan（探 UDP 埠）。
- **作業系統發現（Banner Grabbing）**：分主動與被動；可用 **TTL 值**推測——TTL≈128 多為 Windows、TTL≈64 多為 Linux。
- **常見工具**：
  - **Nmap / Zenmap**：全平台掃描器，Zenmap 是圖形介面；考試只考語法（`-sS`半連接、`-sT`全連接、`-sU` UDP、`-sV`版本、`-O` OS、`-p-`全 Port、`-T1~-T4`速度）；內建 NSE 腳本引擎可做漏洞偵測。
  - **hping3**：可自製 TCP/IP、ICMP、UDP 封包（Nmap 不允許自製），能模擬洪水攻擊。
  - **Shodan**：搜尋暴露在網際網路的物聯網／工控設備的搜尋引擎。

## 應用場景

- **Simon 工作場景**：定期用 Nmap 對內網盤點開放 Port 與服務，找出不該對外的服務（如殘留的 Telnet、舊 FTP）並收斂；對照 GCB／弱掃結果做組態強化，也是 ISO 27001 資產與弱點盤點的實作手段。
- **一般場景**：滲透測試掃描階段、資產盤點、影子 IT 發現。

## 相關概念

- [[footprinting]]：掃描的前一步（廣泛情報收集）
- [[vulnerability-scanner]]：掃描五步驟最後的「弱點發現」用自動化弱掃工具
- [[penetration-testing]]：掃描是滲透測試的核心階段之一
- [[man-in-the-middle]]：ARP 掃描延伸出的 ARP Spoofing 是中間人攻擊手法

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
