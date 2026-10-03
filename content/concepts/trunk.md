---
title: "Trunk 中繼鏈路（Trunk Link）"
slug: trunk
aliases: [Trunk, Trunk Link, Trunk Port, 中繼鏈路, 中繼埠, trunk 埠, allowed vlan]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
交換器之間（或交換器與路由器之間）同時承載多個 [[vlan]] 的鏈路；訊框用 [[ieee-802-1q]] 標籤標明所屬 VLAN，只有 [[native-vlan]] 不打標籤。相對的 access 埠只屬一個 VLAN、用來接終端。

## 關鍵面向
- **access 與 trunk 的分工**：

| | access 埠 | trunk 埠 |
|---|---|---|
| 接什麼 | 終端（電腦、印表機） | 交換器、路由器 |
| 屬於幾個 VLAN | 一個（可另加一個語音 VLAN） | 不屬於任何單一 VLAN，預設承載全部 |
| 訊框有沒有標籤 | 沒有（語音 VLAN 例外，IP 電話送的語音流量通常帶標籤，我的理解、課程未講） | 有，native VLAN 除外 |
| 會不會出現在 `show vlan` 埠清單 | 會 | 不會 |

- **怎麼設成 trunk**：只支援 802.1Q 的機型（例如 Catalyst 2960）直接 `switchport mode trunk`；同時支援 ISL 與 802.1Q 的機型要先 `switchport trunk encapsulation dot1q`，再 `switchport mode trunk`，順序不能反。兩端也可能透過 [[dtp]] 協商成 trunk，但交換器互連一般建議手動設定，結果才不會隨預設值改變。
- **允許通過的 VLAN（allowed vlan）**：預設允許全部（1–4094）。`switchport trunk allowed vlan 10,20` 直接指定清單，**會覆蓋原設定**；在原清單上增減用 `add`／`remove`，另有 `except`（除了指定的都放行）、`none`（全部不放行）、`all`（恢復全部）。設定只對本端這個埠生效，對端要另外設。
- **手動修剪與 VTP 修剪**：用 `allowed vlan` 剔除 VLAN 叫手動修剪，只對本端有效，終端搬動後要人工加回；[[vtp]] 修剪則讓交換器用加入訊息告訴鄰居要哪些 VLAN、自動剔除其餘的（預設關閉，VLAN 1、1002–1005 與擴展 VLAN 不可修剪）。
- **`show interfaces trunk` 的三個 VLAN 範圍**：允許通過的（allowed，預設 1–4094）→ 允許且實際存在的（active）→ 生成樹轉送中且沒被修剪的；手動修剪從第一段（allowed）起就消失，VTP 修剪只影響第三段（前兩段標題經 Cisco 命令參考查證，第三段只見社群輸出）。
- **封裝要確認**：S11 實驗中 trunk 封裝停在協商出的 ISL，講師判斷這是 VLAN 不通的原因、改 dot1q 後恢復；但 ISL 本身也能帶 VLAN 資訊，也可能只是同步時間未到或模擬器行為。實務上把封裝與模式都手動指定是合理做法。
- **兩端要一致的地方**：native VLAN（不一致時 CDP 會報 native VLAN mismatch）；允許清單不一致則會出現某些 VLAN 跨不過去。
- **過濾就是安全控管**：在 trunk 上剔除某個 VLAN，該 VLAN 的流量就過不了這條線。例如單臂路由時把財務 VLAN 從 trunk 放行清單拿掉，它就無法經路由器跨 VLAN。

## 應用場景
- **Simon 工作場景**：交換器互連、交換器接路由器做單臂路由都靠 trunk。排「某個 VLAN 跨交換器不通」時，兩端各跑 `show interfaces trunk`（課程主要用 `show interfaces <介面> switchport`，這條是我的補充），比對模式、封裝、native VLAN 與 Allowed VLANs。改放行清單優先用 `add`／`remove`，避免直接指定時把運作中的 VLAN 覆蓋掉。
- **一般場景**：CCNA Network Access 的核心設定；`allowed vlan` 各關鍵字「覆蓋還是追加」是容易混淆的地方。

## 相關概念
- [[vlan]]：trunk 承載的對象。
- [[ieee-802-1q]]：trunk 上標記 VLAN 的標籤格式。
- [[native-vlan]]：trunk 上唯一不打標籤的 VLAN。
- [[dtp]]：自動協商埠要不要成為 trunk 的 Cisco 協定。
- [[inter-vlan-routing]]：單臂路由靠一條 trunk 接路由器。
- [[vtp]]：VTP 訊息只走 trunk；VTP 修剪自動決定 trunk 送哪些 VLAN。

## 尚未解決的疑問
- trunk 相關的攻擊（交換器偽裝、VLAN 跳躍）與加固留到 Section 23。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/4-lab-view-802-1q-tag-with-wireshark|CCNA Section 10 Leaf 4 LAB Wireshark 看 802.1Q 標籤]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/5-dtp-dynamic-trunking-protocol|CCNA Section 10 Leaf 5 DTP 動態中繼協議]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/6-commands-dtp-configuration|CCNA Section 10 Leaf 6 DTP 配置命令]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/12-lab-vlan-configuration-interface-and-mac-based|CCNA Section 10 Leaf 12 LAB VLAN 配置（基於接口與基於 MAC）]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/13-lab-trunk-allowed-vlans|CCNA Section 10 Leaf 13 LAB Trunk allowed vlans]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/14-commands-trunk-allowed-vlans|CCNA Section 10 Leaf 14 Trunk allowed vlans 命令]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/16-why-inter-vlan-routing-and-how-to-implement|CCNA Section 10 Leaf 16 為什麼需要 VLAN 間路由以及如何實現]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/17-lab-inter-vlan-routing-configuration|CCNA Section 10 Leaf 17 LAB VLAN 間路由配置]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/10-vtp-pruning|CCNA Section 11 Leaf 10 VTP Pruning 修剪]]
- [[1-learning/udemy/ccna-all-in-one/section-11-vtp/12-lab-vtp-pruning|CCNA Section 11 Leaf 12 LAB VTP Pruning 實驗]]
