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
- **靠被動學習長出來**：交換器不會主動探詢，而是等訊框從某個埠進來，才把「來源 MAC ↔ 該埠」記下來。所以剛開機或沒有流量時，表是空的——**表為空不代表故障**。
- **四個欄位**：VLAN ID、MAC 位址（Cisco 顯示為點分十六進位三段式）、Type（DYNAMIC／STATIC）、Ports；`show mac address-table` 輸出末尾另有條目總數。
- **Dynamic 會老化、Static 不會**：動態條目超過老化時間沒再出現就刪除，**Cisco 預設 300 秒**；靜態條目由 `mac address-table static <MAC> vlan <VLAN ID> interface <INT ID>`（全域設定模式）手動加入，保留到手動刪除為止。同一個 MAC 可被綁在不同 VLAN 下，這是「基於 MAC 劃分 VLAN」的前置做法。
- **儲存位置分工**：CAM（內容可定址記憶體）存實際的「MAC ↔ 埠」映射、負責硬體級的高速精確比對（快但容量有限）；RAM 存表的相關資訊並負責管理（新增、更新、刪除過期條目）；TCAM 是 CAM 的三態升級版，多了 x（任意值）狀態可做遮罩比對，除 MAC 表外還用於 ACL、QoS、FIB，高階 [[layer-3-switch]] 的 MAC 表就放在這裡。
- **與 ARP 表是兩張不同的表**：MAC 位址表對應「MAC ↔ 連接埠」、在交換器上；[[arp]] 表對應「IP ↔ MAC」、在終端與路由器上。兩者的老化機制也各自獨立。

## 應用場景
- **Simon 工作場景**：`show mac address-table` 是「這台設備接在哪個埠」最快的定位工具——知道 MAC 就能查到埠與 VLAN，直接對到面板孔位。查不到時先請對方產生流量（ping 任一位址）再複查，兩次都查不到才往線路與埠狀態排查；設備靜置後條目消失多半是 300 秒正常老化。靜態綁定適合「必須固定在某埠」的關鍵設備，但因為不會老化，設備搬位置就會造成轉發異常，屬於要回頭清理的設定。
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
- [[1-learning/udemy/ccna-all-in-one/section-09-switching-basics/3-mac-address-table|CCNA Section 9 Leaf 3 交換機的 MAC 位址表]]
- [[1-learning/udemy/ccna-all-in-one/section-09-switching-basics/4-view-mac-address-table-and-add-static-entry-lab|CCNA Section 9 Leaf 4 LAB 查看 MAC 位址表與手動新增靜態條目]]
