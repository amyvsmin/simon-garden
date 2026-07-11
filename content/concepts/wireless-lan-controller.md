---
title: "無線控制器（Wireless LAN Controller, WLC）"
slug: wireless-lan-controller
aliases: [Wireless LAN Controller, WLC, 無線控制器, 無線區域網路控制器, wireless controller]
category: 資安
confidence: 已驗證
created: 2026-07-11
---

## 定義
無線控制器（WLC）是**集中設定與管理大量瘦 AP** 的設備。瘦 AP（[[fat-ap-vs-thin-ap]] 的 Thin AP）透過**有線方式上聯到 WLC**，由 WLC 統一下發設定、負責無線訊號覆蓋的整體規劃。是大型無線部署的標準架構（相對於家用單台胖 AP 各自為政）。

## 關鍵面向
- **集中管理**：一群瘦 AP 的配置與管理都在 WLC 上統一處理，AP 本身只做訊號傳輸/存取。
- **有線上聯**：瘦 AP 透過有線連到 WLC。
- **適用規模**：大型企業、飯店、醫院、商場等需要大量 AP 統一覆蓋的環境。
- **對比家用**：家用單台胖 AP 獨立管理、不需要控制器；企業用 WLC 才能規模化管理。
- **後續**：WLC 與 CAPWAP、AP join 流程在 CCNA Section 22 WLAN 深入。

## 應用場景
- **Simon 工作場景**：公司若有多樓層/多據點無線覆蓋，用 WLC 集中管所有瘦 AP，改一次設定全網生效，比逐台胖 AP 省維運。
- **一般場景**：CCNA WLAN 章節考 WLC 角色、瘦 AP 與 WLC 的關係、集中式管理架構。

## 相關概念
- [[fat-ap-vs-thin-ap]]：WLC 管理的正是瘦 AP
- [[power-over-ethernet]]：瘦 AP 常靠 PoE 供電
- [[network-topology-diagram]]：WLC 與 AP 在拓樸圖上的角色

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/1-network-devices-and-topology-diagrams|CCNA Section 7 Leaf 1 網路設備與拓樸圖]]
