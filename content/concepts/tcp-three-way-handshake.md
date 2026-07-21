---
title: "TCP 三次握手與四次揮手（Three-Way Handshake / Teardown）"
slug: tcp-three-way-handshake
aliases: [TCP Three-Way Handshake, 三次握手, TCP 三次握手, 四次揮手, four-way teardown, SYN ACK FIN]
category: 網路基礎
confidence: 已驗證
created: 2026-06-15
---

## 定義
三次握手與四次揮手是 [[tcp]] 在 [[transport-layer]] 建立與拆除連線的固定流程。建立連線走 **SYN → SYN+ACK → ACK** 三步、發起方一律是客戶端；拆除連線走 **FIN → ACK → FIN → ACK** 四步、誰先關閉誰先發 FIN。全程靠 SYN／ACK／FIN 三個旗標與序號（SEQ）／確認號搭配，確認號＝對方序號 +1。

## 關鍵面向
- **三次握手（建連線）**：客戶端送 SYN(x) → 伺服器送 SYN+ACK(SEQ=y、確認號 x+1) → 客戶端送 ACK(確認號 y+1)；做完開好一條雙向虛擬隧道。
- **為何三次**：要讓雙方都確認「自己能送、對方能收」；少了第三步伺服器無法確認客戶端真的收得到。
- **四次揮手（拆連線）**：FIN → ACK → FIN → ACK；多一步是因為 FIN 與 ACK 分開送，收到 FIN 先回 ACK，自己還有資料可送完才再發 FIN（半關閉 half-close）。
- **關鍵旗標**：SYN（同步、發起）、ACK（確認）、FIN（中斷）；旗標值 1＝使用、0＝沒用。輔助旗標另有 PSH／RST／URG。
- **Wireshark 觀察**：顯示的是相對序號（從 0 起）方便閱讀，實際初始序號 ISN 是隨機產生的，用來防猜測與注入攻擊。

## 應用場景
- **Simon 工作場景**：SSH/Telnet 進設備背後就是這套流程；抓包看「只有 SYN 沒有 SYN+ACK」＝對端埠沒開或被防火牆擋，看到大量 RST＝連線被強制重置，TIME_WAIT 堆積常從揮手序列查起。
- **一般場景**：CCNA／Network+／SSCP 必考，SYN flood 半開連線攻擊、RST 注入在資安章節會再深入。

## 相關概念
- [[tcp]]：三次握手與四次揮手是 TCP 連線導向的招牌動作
- [[transport-layer]]：握手／揮手發生在 OSI 第 4 層

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/8-tcp-handshake-and-teardown|CCNA Section 2 Leaf 8 TCP 三次握手與四次揮手]]
