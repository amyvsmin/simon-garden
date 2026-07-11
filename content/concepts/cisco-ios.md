---
title: "Cisco IOS 與作業系統家族（IOS/IOS-XR/IOS-XE/NX-OS）"
slug: cisco-ios
aliases: [Cisco IOS, IOS, Internetwork Operating System, 互聯網作業系統, cisco-network-os-family, Cisco 作業系統家族, IOS-XR, IOS-XE, NX-OS, Networking Software System]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
Cisco IOS（Internetwork Operating System）是 Cisco 最早期、使用最廣泛的網路設備作業系統，從旗艦到入門級設備幾乎都用它當「靈魂」。它是**單體核心（monolithic kernel）**結構。Cisco 把旗下所有系統統稱 **Networking Software System**，分四大家族：**IOS / IOS-XR / IOS-XE / NX-OS**，四者的 **CLI 命令行都延續經典 IOS**，學一套通吃。

## 關鍵面向
- **IOS（傳統）**：單體核心、所有模組跑同一記憶體空間 → 單一模組崩潰癱瘓全系統；升級要整包升、中斷服務。靠頻繁軟體升級延續硬體壽命（如 2500 系列近十年硬體沒變）。部署在較老設備（7600/2900 路由器、6500/2960 交換機；最新 IOS 15，2014-11-21）。
- **IOS-XR**：ISP 服務商/骨幹核心；QNX **微核心**、模組化、省記憶體、開機快、串流遙測；部署在 ASR9000 匯聚服務路由器、8000、NCS5700/5500；早期旗艦 XR12000；虛擬版 XRv（VMware/KVM on x86）。
- **IOS-XE**：企業主力、**Linux 核心**、模組化、**控制平面與資料平面分離**、Sub-Package 隔離可單獨升級；面向下一代平台（Catalyst 9000 交換機、9800 WLC、ASR1000/900、CBR、IR）。
- **NX-OS**：資料中心/雲網路；高效能、可擴展、可編程、模組化；部署在 Nexus 9000、MDS 9000（多層導向器/光纖通道交換機）。
- **CLI 一致**：XR/XE/NX-OS 的命令行都延續 IOS 設計與習慣，降低管理員學習成本。

## 應用場景
- **Simon 工作場景**：公司內網設備多為 IOS 或 IOS-XE（Catalyst 交換機）；認得系統類型才知能否單獨升模組、升級要不要停機（傳統 IOS 整包升要排維護窗口、IOS-XE 可 Sub-Package 隔離單升）；盤點記「型號+作業系統+版本」（`show version`）配合 ISO 27001 資產盤點/韌體汰換。
- **一般場景**：CCNA 從 Section 8 起所有 CLI lab 都建立在 IOS 上（user/privileged/global config 模式、`show` 指令）；記住四大系統定位與「CLI 一致」即可，內部架構偏覺察級。

## 相關概念
- [[layer-3-switch]]：Catalyst 交換機跑 IOS/IOS-XE
- [[cli]]：IOS 的操作介面就是命令行

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/5-cisco-and-ios-overview|CCNA Section 7 Leaf 5 Cisco 與 IOS 家族]]
