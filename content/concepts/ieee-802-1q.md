---
title: "IEEE 802.1Q VLAN 標籤標準（dot1q）"
slug: ieee-802-1q
aliases: [IEEE 802.1Q, 802.1Q, dot1q, dot1Q, VLAN 標籤, VLAN tag, 802.1Q tag, TPID, TCI]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
IEEE 1998 年發布的 VLAN 開放標準：在乙太網訊框的來源 MAC 與類型欄位之間插入 4 bytes 標籤，交換器讀其中 12 位元的 VLAN ID 判斷訊框屬於哪個 [[vlan]]。Cisco 命令簡寫為 dot1q。

## 關鍵面向
- **標準歸屬**：由 IEEE 802.1 工作組負責；dot1q 的 dot 就是「點」。
- **標籤結構（共 32 位元＝4 bytes）**：

| 欄位 | 大小 | 作用 |
|---|---|---|
| TPID | 16 位元 | 固定 0x8100，表示「這個訊框帶有 802.1Q 標籤」 |
| TCI → PRI（優先級） | 3 位元 | 8 個等級，給 QoS 用 |
| TCI → DEI | 1 位元 | 擁塞時能不能丟：0＝不適合丟、1＝可以丟 |
| TCI → VLAN ID | 12 位元 | 0–4095，扣掉保留的 0 與 4095，有效 1–4094 |

- **插入位置與長度**：TPID 剛好落在原本類型欄位的位置，看到 0x8100 就知道後面接著標籤，原本的類型值往後移到 TCI 之後。[[ethernet-frame]] 的標頭因此從 14 bytes 變成 18 bytes。
- **什麼時候有標籤**：主要是在 [[trunk]] 上、而且不屬於 [[native-vlan]] 的訊框才帶標籤。交換器與終端之間的 access 埠送的是無標籤訊框，所以在電腦上抓包看不到 VLAN 標籤，要在 trunk 鏈路上抓才看得到。例外是語音 VLAN：IP 電話送出的語音流量通常帶 802.1Q 標籤（我的理解，課程未講）。
- **與 ISL 的關係**：ISL 是 Cisco 私有的 VLAN 封裝，只能用在 Cisco 設備，已被 802.1Q 取代。只支援 802.1Q 的機型沒有 `switchport trunk encapsulation` 命令。
- **在 Wireshark 裡的樣子**：講者說 Wireshark 預設隱藏 TPID。我的理解是 0x8100 會顯示在 Ethernet II 層的 Type 欄，802.1Q 層再展開 PRI、DEI、VLAN ID 與真正的 Type，並非真的藏起來；課程畫面我沒逐格核對。

## 應用場景
- **Simon 工作場景**：懷疑某個 VLAN 的流量走錯時，在交換器互連的 trunk 上抓包，看 802.1Q 層的 VLAN ID，就能確認流量實際屬於哪個 VLAN；在終端上抓不到標籤是正常的。
- **一般場景**：CCNA 必背欄位與位元數（3＋1＋12、0x8100、4 bytes），也是理解 trunk、native VLAN、單臂路由（子介面 `encapsulation dot1Q <VLAN ID>`）的基礎。

## 相關概念
- [[vlan]]：標籤要標記的對象。
- [[ethernet-frame]]：標籤插入的訊框，標頭從 14 變 18 bytes。
- [[trunk]]：帶標籤訊框行走的鏈路。
- [[native-vlan]]：trunk 上不打標籤的例外。

## 尚未解決的疑問
- 10-4 實驗畫面中 VLAN 1 的訊框帶了標籤，與「native VLAN 不打標籤」不一致；可能是模擬器行為，也可能當時 native VLAN 不是 1，尚未回頭對照當時設定。審查者提到 Cisco 社群有人在 IOL 模擬器上抓到 DTP 訊框帶標籤，傾向支持模擬器行為的假設（我未查證原文）。
- PRI、DEI 的實際用法留到 QoS 章節。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/2-vlan-background-and-what-it-solves|CCNA Section 10 Leaf 2 VLAN 的背景與解決的問題]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/3-vlan-concept-and-802-1q-frame-format|CCNA Section 10 Leaf 3 VLAN 概念與 802.1Q 訊框格式]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/4-lab-view-802-1q-tag-with-wireshark|CCNA Section 10 Leaf 4 LAB Wireshark 看 802.1Q 標籤]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/15-lab-native-vlan-function|CCNA Section 10 Leaf 15 LAB Native VLAN 的具體作用]]
