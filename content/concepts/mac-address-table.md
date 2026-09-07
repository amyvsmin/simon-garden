---
title: "MAC 位址表（MAC Address Table）"
slug: mac-address-table
aliases: [MAC Address Table, MAC 位址表, MAC 地址表, CAM table, switching table, bridge table]
category: 網路基礎
confidence: 已驗證
created: 2026-09-05
---

## 定義
MAC 位址表是交換器用來決定訊框往哪個埠送的對照表，記錄「哪個 [[mac-address]] 掛在哪個連接埠、屬於哪個 VLAN」。它有四個常見別名——MAC address table、switching table、bridge table、CAM table，指的都是同一張表。

## 關鍵面向
- **動態條目靠被動學習長出來**：交換器不會主動探詢，而是等訊框從某個埠進來，才把「來源 MAC ↔ 該埠」記下來。剛開機尚未學到流量，或條目已老化時，動態條目可能為空；已儲存的靜態條目仍可存在。**沒有動態條目不代表故障**。
- **四個欄位**：VLAN ID、MAC 位址（Cisco 顯示為點分十六進位三段式）、Type（DYNAMIC／STATIC）、Ports；`show mac address-table` 輸出末尾另有條目總數。
- **Dynamic 會老化、Static 不隨老化計時器刪除**：啟用老化時，動態條目超過老化時間未刷新就刪除；下列 Cisco Catalyst 9000 設定指南說明通常預設為 **300 秒**，設為 0 可停用老化，實機仍應查目前設定。靜態條目用 `mac address-table static <MAC> vlan <VLAN ID> interface <INT ID>`（全域設定模式）加入，須儲存組態才能在重啟後保留。
- **靜態轉送條目與依 MAC 劃分 VLAN 是不同功能**：靜態 MAC 表指定「某 VLAN 的目的 MAC 要由哪個埠送出」。MAC-based VLAN 則在支援的機型上，依入站訊框的來源 MAC 分類到 VLAN，須另設 MAC 群組與介面的 VLAN 對應；加入靜態轉送條目不會自動啟用這項分類，也不是必然的前置步驟。
- **儲存位置分工**：CAM（內容可定址記憶體）存實際的「MAC ↔ 埠」映射、負責硬體級的高速精確比對（快但容量有限）；RAM 存表的相關資訊並負責管理（新增、更新、刪除過期條目）；TCAM 是 CAM 的三態升級版，多了 x（任意值）狀態可做遮罩比對，除 MAC 表外還用於 ACL、QoS、FIB，高階 [[layer-3-switch]] 的 MAC 表就放在這裡。
- **與 ARP 表是兩張不同的表**：MAC 位址表對應「MAC ↔ 連接埠」、在交換器上；[[arp]] 表對應「IP ↔ MAC」、在終端與路由器上。兩者的老化機制也各自獨立。

## 應用場景
- **Simon 工作場景**：`show mac address-table` 可協助定位設備所在的埠與 VLAN。查不到時，可讓設備送出流量後複查，並核對線路與埠狀態；設備靜置後條目消失，應先確認是否為動態條目，再用 `show mac address-table aging-time` 查目前老化時間，判斷是否符合正常老化。靜態條目適合指定固定的轉送埠；設備搬位置時須同步更新，否則可能造成轉送異常。
- **一般場景**：CCNA Network Access 模組核心考點，考法包括判讀 DYNAMIC／STATIC 差異、給拓撲問交換器學到哪些條目、老化時間預設值、靜態綁定命令。資安面則可作為未授權接入偵測的第一手資料（與資產清冊比對），但要留意隨機 MAC 會削弱以 MAC 當唯一身份的假設。

## 相關概念
- [[network-switch]]：使用這張表做轉發決策的設備。
- [[mac-address]]：表中記錄的位址本體，48 位元、前 3 位元組為 OUI。
- [[arp]]：另一張容易混淆的表，管 IP ↔ MAC 對應，位在終端與路由器上。
- [[data-link-layer]]：這張表所服務的 OSI 層級。
- [[layer-3-switch]]：高階機型把 MAC 表放在 TCAM 中以加速查找。

## 尚未解決的疑問
- MAC 位址表被灌爆時的行為（CAM table overflow 導致交換器泛洪）與對應防護（埠安全），留待 Section 23 Security。

## 來源
- [Cisco Catalyst 9000：Configure the MAC Address Table](https://www.cisco.com/c/en/us/td/docs/switches/lan/c9000/lyr2-fwd/cdp-lldp-mac-udld/cdp-lldp-mac-udld-configuration-guide/c-configure-mac.html) — 2026-09-07 核對老化預設、靜態 MAC／VLAN／埠對應與儲存組態。
- [Cisco Business：Configure MAC-Based VLAN Groups through the CLI](https://www.cisco.com/c/en/us/support/docs/smb/switches/Cisco-Business-Switching/kmgmt-2252-configure-mac-based-vlan-groups-on-a-switch-through-the-cli.html) — 2026-09-07 核對 CBS250／350 的來源 MAC 分類與獨立設定流程，不推及所有 Cisco 機型。
- [[1-learning/udemy/ccna-all-in-one/section-09-switching-basics/3-mac-address-table|CCNA Section 9 Leaf 3 交換機的 MAC 位址表]]
- [[1-learning/udemy/ccna-all-in-one/section-09-switching-basics/4-view-mac-address-table-and-add-static-entry-lab|CCNA Section 9 Leaf 4 LAB 查看 MAC 位址表與手動新增靜態條目]]
