---
title: "Native VLAN 原生 VLAN（本徵 VLAN）"
slug: native-vlan
aliases: [Native VLAN, 原生 VLAN, 本徵 VLAN, 本地 VLAN, untagged VLAN]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
[[trunk]] 上負責無標籤流量的 VLAN：沒有 [[ieee-802-1q]] 標籤的訊框歸入它，它的流量送出時也不打標籤。預設 VLAN 1、逐介面設定、兩端須一致；起源是相容不支援 VLAN 的設備（如 Hub）。

## 關鍵面向
- **一進一出兩個方向**：進來時，沒標籤的訊框歸入 native VLAN；出去時，native VLAN 的訊框不打標籤。兩個方向合起來，看不懂標籤的設備才能跟某個 VLAN 通訊。
- **課程示範的兩個場景**：
  1. **trunk 中間夾一台 Hub**：Hub 上的電腦送出無標籤訊框，靠 native VLAN 才能跟同一個 VLAN 的設備互通。
  2. **trunk 埠接了終端**：終端送出的無標籤訊框落在該 trunk 埠的 native VLAN；把 native VLAN 改成 10，這台終端就能和 VLAN 10 通訊。實務上不建議把終端接在 trunk 埠，這是我的補充。
- **設定與一致性**：介面下 `switchport trunk native vlan <VLAN ID>`，只影響這個介面。兩端設定不同時，CDP 會回報 native VLAN mismatch，要把兩端改成一致、等錯誤訊息消失後才恢復正常。
- **Wireshark 實測**：native VLAN 是 10 時，VLAN 10 的訊框在 trunk 上看不到 802.1Q 標籤；VLAN 1 的訊框則帶著 ID＝1 的標籤。
- **控制流量走哪裡**：講者說 CDP、DTP、VTP 都走 native VLAN。預設 native VLAN 就是 VLAN 1，所以預設值下看不出差別；native 改掉之後要分開看。依 Cisco 文件（審查者查得，文件編號 24330-185，我未讀原文），CDP、VTP、PAgP 固定走 VLAN 1，native 改成別的 VLAN 後改為帶 VLAN 1 標籤；DTP 在 802.1Q trunk 上則走 native VLAN。
- **為什麼常建議改掉預設值**：native VLAN 預設是 VLAN 1，又不打標籤，加固時常把它改成一個不放用戶埠的專用 VLAN（我的延伸，攻擊面留到 Section 23）。

## 應用場景
- **Simon 工作場景**：盤點交換器互連的 trunk 時，兩端核對 Native VLAN 是否一致、是否還是預設的 VLAN 1；看到 native VLAN mismatch 訊息，先比對兩端設定，再看是否剛有人改過其中一端。
- **一般場景**：CCNA 常見的判讀點包括：native VLAN 預設是幾號、哪些訊框不打標籤、兩端不一致會怎樣。

## 相關概念
- [[trunk]]：native VLAN 只存在於 trunk 上。
- [[ieee-802-1q]]：native VLAN 就是這個標準裡「不打標籤」的例外。
- [[vlan]]：VLAN 1 同時是預設 VLAN 與預設 native VLAN。
- [[dtp]]：依 Cisco 文件，DTP 在 802.1Q trunk 上走 native VLAN；trunk 埠的 native VLAN 設定看 `show interfaces <介面> switchport` 的 Trunking Native Mode VLAN 欄。

## 尚未解決的疑問
- 兩端改成一致後要等一段時間才恢復，原因我沒驗證；推測與 STP 依 VLAN 重新收斂有關。
- 10-4 實驗中 VLAN 1 帶標籤的原因（模擬器行為，或當時 native VLAN 不是 1）尚未回頭對照。
- VLAN 跳躍（雙標籤）攻擊與防護留到 Section 23。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/4-lab-view-802-1q-tag-with-wireshark|CCNA Section 10 Leaf 4 LAB Wireshark 看 802.1Q 標籤]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/5-dtp-dynamic-trunking-protocol|CCNA Section 10 Leaf 5 DTP 動態中繼協議]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/10-vlan-id-range-types-and-configuration-methods|CCNA Section 10 Leaf 10 VLAN-ID 範圍、類型與配置方法]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/15-lab-native-vlan-function|CCNA Section 10 Leaf 15 LAB Native VLAN 的具體作用]]
