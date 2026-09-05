---
title: "交換器（Network Switch）"
slug: network-switch
aliases: [Switch, 交換器, 交換機, Network Switch, 乙太網交換機, EtherSwitch]
category: 網路基礎
confidence: 已驗證
created: 2026-09-05
---

## 定義
交換器是工作在 [[data-link-layer]]（OSI 第二層）的區域網路設備，依 [[mac-address-table]] 決定每個訊框該從哪個埠送出，而不是像集線器那樣廣播到所有埠。英文 switch 原意是「開關」——如同開關控制電流方向，交換器控制訊框的流向，並能在微秒級別做出轉發決策。

## 關鍵面向
- **為解決集線器的瓶頸而生**：1980 年代終端設備暴增，集線器把所有埠放在同一個 [[collision-domain]]，擁塞與碰撞成為主要問題（碰撞處理見 [[csma-cd]]）。
- **演進三階段**：集線器（讓設備連起來）→ 網橋 Bridge（1980 年代初，連接並隔離網段）→ 多埠橋接器（1990 年代初）→ 交換器。名字取自「橋樑連接兩岸」的網橋，是交換器的前身。
- **每埠獨立衝突域、獨立頻寬、支援全雙工**：這三點是交換器相對集線器最根本的效能差異；但廣播域預設仍是整台一個，要切廣播域得靠 VLAN。
- **靠 ASIC ＋ CAM／TCAM 達成線速轉發**：專用積體電路負責處理訊框，硬體查表記憶體讓查 MAC 是常數時間，因此介面標稱多少頻寬就能吃滿多少。
- **第一台商用乙太網交換器**：Kalpana 公司的 EtherSwitch（公司 1986 年由 Bhardwaj 創立，他被稱為乙太網交換器之父）；1994 年 Cisco 以 2 億美金收購 Kalpana，該技術成為 Cisco 交換器產品線的基礎。
- **選型看的是七件事**：效率（MAC 表智能轉發）、衝突域切分、頻寬、VLAN 支援、安全（埠隔離與存取控制）、擴展功能（[[layer-3-switch]] 三層轉發）、QoS 流量優先序。
- **產品線對應環境而非只看速度**：Cisco 分 Catalyst（企業園區、IOS-XE）、Nexus（資料中心、NX-OS）、Meraki（雲端管理）、Business（小型企業）、Industrial（惡劣工業環境）五線，見 [[cisco-ios]]。
- **效能指標各量不同東西**：交換容量（總量，Gbps／Tbps）、包轉發率（處理次數，Mpps，小封包場景關鍵）、背板頻寬（內部主幹道容量）、連接埠數量／類型／速度（RJ45 電口 10 Mbps–10 Gbps、SFP／QSFP 光口最高 100 Gbps）。

## 應用場景
- **Simon 工作場景**：辦公區與機房用 Catalyst 企業級即可，產線現場（高溫、粉塵、振動）應選 Industrial IE 系列；機台工控訊號多為小封包，選型要盯 Mpps 而非只看 Gbps。資產盤點建議補三欄：產品線與作業系統、是否模組化（有無 Supervisor 冗餘）、安裝環境。
- **一般場景**：CCNA Network Access 模組（S9–S14）的核心設備；「交換器 vs 集線器在衝突域、頻寬、雙工上的差異」與「數衝突域／廣播域」是高頻考題。

## 相關概念
- [[mac-address-table]]：交換器賴以轉發的那張表，是它「知道往哪送」的依據。
- [[collision-domain]]：交換器每個埠一個衝突域，這是它取代集線器的關鍵。
- [[broadcast-domain]]：交換器預設整台一個廣播域，要切分得靠 VLAN。
- [[layer-3-switch]]：交換器的擴展形態，額外具備三層路由轉發能力。
- [[data-link-layer]]：交換器工作的 OSI 層級。
- [[csma-cd]]：處理同一衝突域內碰撞的機制；全雙工交換網路已幾乎用不到。
- [[campus-network-design]]：交換器在存取／分佈／核心三層中各自的角色。

## 尚未解決的疑問
- 交換器的訊框轉發模式（store-and-forward、cut-through、fragment-free）差異與適用場景，課程尚未涵蓋。

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-09-switching-basics/1-switch-history-and-why-switches|CCNA Section 9 Leaf 1 交換機出現的歷史背景]]
- [[1-learning/udemy/ccna-all-in-one/section-09-switching-basics/2-cisco-switch-product-lines-and-key-specs|CCNA Section 9 Leaf 2 Cisco 交換機的產品線與重要參數指標]]
