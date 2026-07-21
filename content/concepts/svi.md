---
title: "SVI 交換器虛擬介面（Switch Virtual Interface）"
slug: svi
aliases: [SVI, Switch Virtual Interface, 交換器虛擬介面, 交換機虛擬介面, VLAN interface, interface vlan]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
VLAN 作為介面時的官方名稱——一個可被指派 [[ip-address]] 的虛擬介面（如 `interface vlan1`）。交換器是二層設備、實體埠預設不帶 IP，但可透過 SVI 給整台交換器一個**管理位址**，或在三層交換器上做 VLAN 間路由。每台交換器預設都有 vlan1。

## 關鍵面向
- **設定**：`interface vlan1` → `ip address <IP> <遮罩>`，即取得管理位址
- **vs 三層實體埠**：實體埠要 `no switchport` 轉三層才能設 IP；SVI 則是「虛擬」介面、天生可設 IP
- **預設 vlan1**：每台交換器都有，常用作管理；正式環境多另建專用管理 VLAN
- **三層交換器用途**：SVI 可作各 VLAN 的閘道、實現 VLAN 間路由（inter-VLAN routing）
- **VLAN 細節**：VLAN 本身的切分與標籤在後續章節（Section 10 VLAN）展開

## 應用場景
- **Simon 工作場景**：給接入/核心交換器設管理 IP（SSH/監控用）就是走 SVI；三層交換器當內網閘道也靠 SVI
- **一般場景**：CCNA 必考設定，VLAN 與 inter-VLAN routing 的基礎

## 相關概念
- [[ip-address]]：SVI 可被指派的位址
- [[default-gateway]]：三層交換器的 SVI 常作各 VLAN 閘道
- [[subnet-mask]]：設 SVI 位址需搭配遮罩
- [[dhcp]]：管理位址也可由 DHCP 取得

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/6-configuring-ipv4-on-cisco-windows-linux|CCNA Section 4 Leaf 6 設定 IPv4]]
