---
title: "VLAN 虛擬區域網路（Virtual LAN）"
slug: vlan
aliases: [VLAN, Virtual LAN, Virtual Local Area Network, 虛擬區域網路, 虛擬局域網, VLAN ID]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
把實體交換器在邏輯上切成多個獨立的[[broadcast-domain]]：同一 VLAN 內直接二層通訊，不同 VLAN 預設隔離，要互通得經三層設備（見 [[inter-vlan-routing]]）。以 12 位元 VLAN ID 識別，有效範圍 1–4094。

## 關鍵面向
- **為什麼需要**：區域網路裡終端越多、廣播越多，會消耗頻寬並帶來安全問題。不用 VLAN 也能隔離廣播，但兩條路都不理想：為隔離而買路由器是大材小用；把同一台交換器下的終端硬切成不同 IP 網段，會讓出口路由器負擔變重。VLAN 不破壞原本的網路規劃就能切開廣播域。
- **VLAN ID 範圍**（ID 來自 [[ieee-802-1q]] 標籤的 12 位元欄位）：

| VLAN ID | 用途 |
|---|---|
| 0、4095 | 保留，不能用 |
| 1 | 預設 VLAN：所有埠預設都在這裡；不能刪除，名稱 default 不能改 |
| 2–1001 | 標準範圍，一般配置使用 |
| 1002–1005 | 保留給權杖環（Token Ring）與 FDDI，不能用於乙太網 |
| 1006–4094 | 擴展範圍，交換器要運行 VTP 第 3 版，或 VTP 處於透明（或 off）模式才能建立 |

- **埠跟 VLAN 的關係**：access 埠同一時刻只屬於一個資料 VLAN；[[trunk]] 埠承載多個 VLAN，不屬於任何單一 VLAN，所以 `show vlan` 的埠清單裡看不到它。例外是語音 VLAN：一個 access 埠可以再加一個語音 VLAN（`switchport voice vlan <ID>`），讓 IP 電話和串接在電話後面的 PC 共用一條線、流量分開。
- **建立與分配**：`vlan 10` 建立並進入 VLAN 設定模式、`name` 命名；介面下 `switchport access vlan 10` 分配埠，VLAN 不存在時這條命令會順便建立它；`interface range` 可一次設定多個埠。
- **刪除 VLAN 的後果**：`no vlan 10` 之後，原本在 VLAN 10 的埠不會自動回到 VLAN 1，而是變成 inactive（停用），仍記著舊的 VLAN 10；重建同編號的 VLAN 就恢復。這些埠不會出現在 `show vlan`，要用 `show interfaces status` 才看得到 inactive。
- **VLAN 1 的風險與加固**：VLAN 1 是預設值、容易變成很大的廣播域，CDP、VTP 等控制流量也走 VLAN 1。常見做法：用戶埠移出 VLAN 1、另建專用管理 VLAN、未使用的埠關閉或丟進一個沒人用的 VLAN。
- **劃分方式**：課程列了四種。**基於埠**最常用；課程講的「基於 MAC」實際示範的是 `mac address-table static` 靜態條目，並不是真正的 MAC VLAN（見 [[mac-address-table]]）；講者說基於協定與基於子網已被現行 IOS 移除、不是考點；這個說法限於 Catalyst IOS，部分其他機型（如 Cisco Business 350）仍支援依子網劃分 VLAN。

## 應用場景
- **Simon 工作場景**：公司辦公區與機房依部門或用途分 VLAN（例如財務、一般辦公、伺服器、管理），可縮小廣播範圍，也方便在三層設備上控管誰能連到誰。ISO 27001 網路分段盤點時，可逐台檢查三件事：用戶埠是否還留在 VLAN 1、管理 VLAN 是否獨立、未使用埠是否關閉。
- **一般場景**：CCNA Network Access 的基礎概念，後面的 [[trunk]]、VTP、STP、VLAN 間路由都建立在它之上。

## 相關概念
- [[broadcast-domain]]：每個 VLAN 就是一個獨立的廣播域。
- [[ieee-802-1q]]：跨交換器傳送時，用來標記訊框屬於哪個 VLAN 的標準。
- [[trunk]]：同時承載多個 VLAN 的鏈路。
- [[native-vlan]]：trunk 上承載無標籤流量的 VLAN，預設也是 VLAN 1。
- [[inter-vlan-routing]]：讓不同 VLAN 互通的做法。
- [[svi]]：VLAN 的三層介面，可設 IP 當網關或管理位址。
- [[dtp]]：協商交換器之間的埠要當 access 還是 trunk。

## 尚未解決的疑問
- 真正依來源 MAC 分類的 MAC VLAN（VMPS，或部分機型的 MAC VLAN 群組）課程沒教，實機支援度未查。
- VTP 與擴展 VLAN 的細節留到 Section 11。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/2-vlan-background-and-what-it-solves|CCNA Section 10 Leaf 2 VLAN 的背景與解決的問題]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/3-vlan-concept-and-802-1q-frame-format|CCNA Section 10 Leaf 3 VLAN 概念與 802.1Q 訊框格式]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/10-vlan-id-range-types-and-configuration-methods|CCNA Section 10 Leaf 10 VLAN-ID 範圍、類型與配置方法]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/11-commands-vlan-configuration|CCNA Section 10 Leaf 11 VLAN 配置命令]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/12-lab-vlan-configuration-interface-and-mac-based|CCNA Section 10 Leaf 12 LAB VLAN 配置（基於接口與基於 MAC）]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/18-lab-voice-vlan-configuration|CCNA Section 10 Leaf 18 LAB Voice VLAN 配置]]
