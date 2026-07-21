---
title: "PoE 乙太網路供電（Power over Ethernet）"
slug: power-over-ethernet
aliases: [Power over Ethernet, PoE, PoE+, UPoE, UPoE+, 乙太網路供電, PSE, PD, power inline, 802.3af, 802.3at, 802.3bt]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
PoE 是透過乙太網路線纜**同時提供 DC 直流電與數據傳輸**的技術，用於 IP 電話、網路攝影機、無線 AP 這類耗電較少的設備。一根線兼顧供電與傳輸，省設備端口、安裝難度與維護成本。

## 關鍵面向
- **四個標準**：PoE 15.4W(802.3af)、PoE+ 30W(802.3at)、UPoE 60W(802.3bt)、UPoE+ 90W(802.3bt)；PoE/PoE+ 用 2 對線、UPoE/UPoE+ 用全 4 對線。
- **PSE vs PD**：**PSE（Power Sourcing Equipment，供電端）**=交換機 PoE 端口；**PD（Powered Device，受電端）**=IP 電話/AP/攝影機。
- **Class 0–8 功率分級**：PD 用 Class 表達要多少電（Class 4=30W、6=60W、8=90W…），PSE 依 Type 1–4 分配預算。
- **設定三關鍵字**：`power inline auto`（預設、優先級低於 static）、`static`（預留指定功率、優先級最高、關鍵設備用）、`never`（禁用）。
- **保護與檢查**：`power inline police action errdisable` 超功率就 err-disable 關埠、防單一 PD 搶光預算；`show power inline` 查供電預算/使用/剩餘。

## 應用場景
- **Simon 工作場景**：辦公室無線 AP、IP 話機、攝影機全靠接取層 PoE 交換機供電（呼應園區三層「存取層負責 PoE」）；一台 48 埠 PoE 交換機有總功率預算、插滿高功率 AP 會超支，用 `power inline auto max`/`police` 限單埠、用 `static` 保關鍵設備；採購先算「每台 PD 功率×埠數 vs 交換機 PoE 總預算」。
- **一般場景**：CCNA 覺察級——知道 PoE 概念、PSE/PD 角色、標準功率(af/at/bt)、`power inline` 基本設定；功率預算細節偏實務/CCNP。

## 相關概念
- [[twisted-pair-cabling]]：PoE 透過雙絞線同時送電與資料
- [[fat-ap-vs-thin-ap]]：無線 AP 是常見的 PD 受電設備
- [[transceiver-module]]：電口模組可提供 PoE

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-07-network-devices/4-power-over-ethernet|CCNA Section 7 Leaf 4 PoE]]
