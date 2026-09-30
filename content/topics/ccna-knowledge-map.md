---
title: CCNA 知識地圖：把散落的網路概念卡掛回 200-301 考綱
type: topic
topic_kind: synthesis
status: living
aliases: [CCNA 知識地圖, CCNA 地圖, CCNA map]
created: 2026-09-30
last_updated: 2026-09-30
tags:
  - ccna
  - networking
  - exam-map
---

CCNA 課程上到第 10 章，來源是這門課的概念卡已經有 82 張（另有 8 張來自其他課程、也屬於考綱範圍），但它們在概念索引裡是照字母排的，要複習時看不出「這張卡屬於考試的哪一塊、哪一塊還是空的」。這頁把它們重新掛回 Cisco 官方的 CCNA 200-301 v1.1 考綱：六大模組當骨架，每個概念只連出去、不重抄內容，細節都在各自的概念頁。

**怎麼用**：刷題期（2026-12-28 起）當複習清單，一區一區過；想做費曼回講時，從這裡挑一張卡當題目；看到「待學」就知道那一塊課程還沒上到。

**怎麼維護**：每次一個 Section 抽完 concept，就把新卡補進對應的考綱區，並更新下方進度表。這頁只往外連，反向連結由 Obsidian 自動提供，所以不必回頭改概念卡。

**版本提醒**：v1.1 的最後應試日是 2027-02-02，2027-02-03 起改考 v2.0。這頁的骨架跟著 v1.1 走，若改考 v2.0 要重新對照考綱。

## 進度總覽

| 考綱模組 | 權重 | 對應課程 Section | 目前狀態 |
|---|---|---|---|
| 1.0 Network Fundamentals（網路基礎） | 20% | S2–S7 | 已學完，卡片最多 |
| 2.0 Network Access（網路存取） | 20% | S9–S14 | S9、S10 已學；VTP、STP、EtherChannel 待學 |
| 3.0 IP Connectivity（IP 連通） | 25% | S15–S19 | 待學（權重最高） |
| 4.0 IP Services（IP 服務） | 10% | S21 | 只有 DHCP、DNS 等零星卡片 |
| 5.0 Security Fundamentals（安全基礎） | 15% | S20、S23 | 零星卡片，ACL 與二層安全待學 |
| 6.0 Automation and Programmability（自動化） | 10% | S24 | 待學 |

> 課程對照表取自課程索引（`1-learning/udemy/ccna-all-in-one/_index.md`）；ACL 是考綱 5.6，課程放在 S20，所以安全模組多列一個 S20。

標記說明：卡片後標 †，表示這張卡的來源不是這門 CCNA 課程（例如來自 Google 資安證照課程），內容角度可能不同，複習時要自己對照 CCNA 的要求。

## 共通基礎（考綱沒單列，但每個模組都會用到）

- **分層模型**：[[osi-model]]、[[tcp-ip-model]] †、[[protocol-stack]]；各層：[[physical-layer]]、[[data-link-layer]]、[[network-layer]]、[[transport-layer]]、[[session-layer]]、[[presentation-layer]]、[[application-layer]]
- **網路層的基本單位**：[[network-protocol]] †、[[internet-protocol]]、[[packet]] †、[[ttl]] †、[[fragmentation]] †、[[icmp]]、[[arp]]、[[internet]]
- **數字表示法**（算子網、看 MAC 與 IPv6 都要用）：[[binary]]、[[hexadecimal]]、[[bitwise-operation]]
- **工具與作業系統**：[[cisco-ios]]、[[wireshark]]

## 1.0 Network Fundamentals（20%）

- **1.1 網路元件的角色**：[[network-switch]]、[[layer-3-switch]]、[[ids]] †、[[ips]] †、[[power-over-ethernet]]（無線 AP 與控制器見 2.6）
- **1.2 拓撲架構**：[[network-topology]]、[[star-topology]]、[[network-topology-diagram]]、[[campus-network-design]]（兩層／三層）、[[spine-and-leaf-architecture]]、[[local-area-network]]、[[wide-area-network]]
- **1.3 實體介面與線材**：[[ethernet]]、[[twisted-pair-cabling]]、[[fiber-optic-cabling]]、[[transceiver-module]]
- **1.4 介面與線路問題**（碰撞、錯誤、雙工與速度不匹配）：[[duplex-and-speed]]、[[collision-domain]]、[[csma-cd]]
- **1.5 TCP 與 UDP**：[[tcp]]、[[udp]]、[[tcp-three-way-handshake]]、[[port]]
- **1.6 IPv4 位址與子網劃分**：[[ipv4]]、[[ip-address]]、[[subnet-mask]]、[[subnetting]]、[[cidr]]、[[vlsm]]、[[classful-addressing]]、[[route-summarization]]（網段聚合，路由章節會再用到）
- **1.7 私有 IPv4 位址**：[[private-ip-address]]、[[ipv4-address-exhaustion]]
- **1.8、1.9 IPv6 位址與類型**：[[ipv6]]、[[global-unicast-address]]、[[unique-local-address]]、[[link-local-address]]、[[anycast]]、[[eui-64]]、[[slaac]]、[[neighbor-discovery-protocol]]
- **1.10 檢查終端的 IP 參數**：[[default-gateway]]、[[apipa]]
- **1.11 無線原理**：[[csma-ca]]
- **1.12 虛擬化**（伺服器虛擬化、容器、VRF）：待學
- **1.13 交換概念**（MAC 學習與老化、轉送、泛洪）：[[mac-address]]、[[mac-address-table]]、[[ethernet-frame]]、[[broadcast-domain]]

## 2.0 Network Access（20%）

- **2.1 VLAN**（含語音 VLAN、預設 VLAN、VLAN 間連通）：[[vlan]]、[[inter-vlan-routing]]、[[svi]]
- **2.2 交換器間連接**（trunk、802.1Q、native VLAN）：[[trunk]]、[[ieee-802-1q]]、[[native-vlan]]、[[dtp]]
- **2.3 二層探索協議**（CDP、LLDP）：待學（S10 只順帶提到 CDP 會回報雙工與 native VLAN 不匹配）
- **2.4 EtherChannel（LACP）**：待學（S13）
- **2.5 Rapid PVST+ 生成樹**：待學（S12；[[duplex-and-speed]] 已記下雙工與 STP 鏈路類型的關係）
- **2.6、2.7 無線架構與元件連接**：[[fat-ap-vs-thin-ap]]、[[wireless-lan-controller]]
- **2.8 設備管理存取**（Telnet、SSH、HTTP(S)、console 等）：[[ssh]]、[[http]]、[[https]]
- **2.9 無線 LAN 圖形介面設定**：待學（S22）

## 3.0 IP Connectivity（25%）

- **路由基礎（S15 起正式學）**：[[routing-protocols]]、[[routed-protocol]]
- **3.1–3.5 路由表、轉送決策、靜態路由、單區 OSPFv2、FHRP**：待學（S14–S19）

## 4.0 IP Services（10%）

- **4.3、4.6 DHCP 與 DNS 的角色、DHCP 用戶端與中繼**：[[dhcp]]、[[dns]]
- **4.8 用 SSH 遠端管理**：[[ssh]]（同 2.8）
- **4.9 TFTP／FTP**：[[ftp]]
- **4.1、4.2、4.4、4.5、4.7 NAT、NTP、SNMP、syslog、QoS**：待學（S21）

## 5.0 Security Fundamentals（15%）

- **5.5 IPsec VPN**：[[vpn]]
- **5.9 無線安全協議**（WPA、WPA2、WPA3）：[[wifi-security]] †
- **5.6 ACL**：待學（S20）
- **5.7 二層安全**（DHCP snooping、動態 ARP 檢查、埠安全）：待學（S23）；[[mac-address-table]] 已記下「靜態 MAC 條目不是存取控制」，可當埠安全的對照
- **5.1–5.4、5.8、5.10 安全概念、密碼政策、AAA、WLAN WPA2 設定**：待學（S23）

## 6.0 Automation and Programmability（10%）

- **6.1–6.7 自動化、控制器架構、REST API、Ansible 等設定管理、JSON**：待學（S24）
