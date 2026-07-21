---
title: "UDP 使用者資料報協定（User Datagram Protocol）"
slug: udp
aliases: [UDP, User Datagram Protocol, 使用者資料報協定]
category: 網路基礎
confidence: 已驗證
created: 2026-06-15
---

## 定義
UDP（使用者資料報協定）是工作在 [[transport-layer]] 的無連線、訊息導向協定，傳前不必建立連線、直接把封包盡力送達目標埠。它不分段重組、不排序、不重傳、無確認，也不做流量與壅塞控制，只用校驗和驗證資料完整性。相對於 [[tcp]] 的「求穩」，UDP 是「求快」。

## 關鍵面向
- **無連線、盡力送達**：發送端直接送，資料遺失不重傳、接收方不回確認、發送端也不知是否送到。
- **不保證可靠**：不排序、不重傳、無流量控制、無壅塞控制；只靠校驗和（Checksum）偵測傳輸途中是否被改動。
- **標頭極小、延遲低**：固定標頭 8 bytes（來源埠、目的埠、長度、校驗和各 2 bytes），非有效載荷開銷小，適合即時應用。
- **常見應用**：DNS（[[dns]]）、SNMP、RIP、DHCP（[[dhcp]]）以及即時影音、語音、線上遊戲。
- **埠號定址**：用 [[port]] 決定資料送到哪個應用或服務。

## 應用場景
- **Simon 工作場景**：日常碰到走 UDP 的服務正好是 DNS 解析、SNMP 監控網路設備、DHCP 派 IP、路由器間的 RIP；排查「某服務通不通」時先分清它走 TCP 還是 UDP，決定該不該期待三次握手與重傳。
- **一般場景**：CCNA／Network+／SSCP 必考，「哪些應用走 UDP」「TCP 與 UDP 差異」是高頻考點。

## 相關概念
- [[tcp]]：傳輸層另一主角，連線導向、求穩，與 UDP 對照
- [[transport-layer]]：UDP 所在的 OSI 第 4 層
- [[port]]：UDP 用埠號決定送往哪個應用
- [[dns]]：典型走 UDP 的應用層協定
- [[dhcp]]：典型走 UDP 的應用層協定

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/7-transport-layer-tcp-and-udp|CCNA Section 2 Leaf 7 傳輸層 TCP 與 UDP]]
