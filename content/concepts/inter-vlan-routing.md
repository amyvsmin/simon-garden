---
title: "VLAN 間路由（Inter-VLAN Routing）"
slug: inter-vlan-routing
aliases: [Inter-VLAN Routing, VLAN 間路由, Router-on-a-Stick, 單臂路由, 單臂路由器, ROAS, 子介面, subinterface]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
讓不同 [[vlan]]（通常也是不同 IP 網段）的設備互相通訊的做法：VLAN 之間二層隔離，必須由路由器或[[layer-3-switch]]在各 VLAN 各設一個介面當[[default-gateway]]，依直連路由轉發。

## 關鍵面向
- **隔離之後為什麼還要互通**：①大部門切成多個小 VLAN 以縮小廣播域，但同部門仍要共享資料；②把印表機、檔案伺服器、資料庫放在專用 VLAN，其他部門要存取，並且可以用策略決定誰能連。
- **三種做法**：

| 做法 | 怎麼接 | 評價 |
|---|---|---|
| 路由器多介面 | 每個 VLAN 各拉一條線到路由器的一個介面，交換器端都是 access 埠 | 可行但極浪費路由器介面，VLAN 一多就不可行 |
| 單臂路由（router-on-a-stick） | 交換器與路由器之間只拉一條 [[trunk]]；路由器在同一個實體介面上切出多個子介面，每個子介面對應一個 VLAN | 只用一個路由器介面；三層交換器普及前的主流做法 |
| 三層交換器 | 交換器開啟 `ip routing`，每個 VLAN 建一個 [[svi]] 並設 IP 當網關 | 課程說是目前工作中最常用的做法 |

- **單臂路由的設定重點**：交換器端把接路由器的埠設成 trunk；路由器的實體介面 `no shutdown`（不設 IP），子介面 `interface e0/0.1` 先 `encapsulation dot1Q <VLAN ID>`，再設 IP。每個子介面只能對應一個 VLAN，有幾個 VLAN 就建幾個子介面；子介面編號不必等於 VLAN ID（實務上常設成一樣，方便辨認）。
- **三層交換器的設定重點**：`ip routing` 是三層轉發的總開關，課程實驗設備預設已開，實機預設依型號與軟體而異，要先確認；關掉之後路由表清空、跨 VLAN 就不通。各 VLAN 的 SVI 位址會成為直連路由。
- **二層與三層要分開看**：三台電腦就算都在 VLAN 1，只要 IP 網段不同也互 ping 不通，因為跨網段本來就要三層轉發。
- **可以順手控管**：單臂路由時從 trunk 放行清單剔除某個 VLAN，它就無法經路由器跨 VLAN；更細的控管要靠 ACL（Section 20）。

## 應用場景
- **Simon 工作場景**：公司核心或分佈層通常由三層交換器擔任各 VLAN 的網關；伺服器、資料庫這類公共資源放在專用 VLAN，再在三層設備上用 ACL 限制來源。跨 VLAN 不通時，依序查：埠是否在正確 VLAN、trunk 是否放行、終端網關是否正確、三層設備路由表有沒有各網段的直連路由（`show ip route`）。
- **一般場景**：CCNA 常見設定題，重點是單臂路由的子介面命令順序，以及三層交換器的 `ip routing`＋SVI。

## 相關概念
- [[vlan]]：要被互連的對象。
- [[trunk]]：單臂路由的交換器端必須設成 trunk。
- [[svi]]：三層交換器做法中各 VLAN 的網關介面。
- [[layer-3-switch]]：三層交換器做法的設備。
- [[default-gateway]]：各 VLAN 終端要把網關指向路由器子介面或 SVI。
- [[ieee-802-1q]]：子介面靠 `encapsulation dot1Q` 辨識 VLAN 標籤。

## 尚未解決的疑問
- 實體交換器 `ip routing` 的預設值依型號與軟體而異，要以實機 `show running-config` 或 `show ip route` 確認。
- 用 ACL 控管跨 VLAN 存取的細節留到 Section 20。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/16-why-inter-vlan-routing-and-how-to-implement|CCNA Section 10 Leaf 16 為什麼需要 VLAN 間路由以及如何實現]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/17-lab-inter-vlan-routing-configuration|CCNA Section 10 Leaf 17 LAB VLAN 間路由配置]]
