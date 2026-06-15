---
title: "TCP 傳輸控制協定（Transmission Control Protocol）"
slug: tcp
aliases: [TCP, Transmission Control Protocol, 傳輸控制協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
TCP（傳輸控制協定）是工作在 [[transport-layer]] 的連線導向、可靠的位元組流服務協定，在兩終端的應用程式間建立可雙向傳輸的虛擬通道。傳前用 [[tcp-three-way-handshake]] 建連線、傳完用四次揮手釋放，靠序號、確認與重傳保證資料可靠且按序到達。相對於 [[udp]] 的「求快」，TCP 是「求穩」。

## 關鍵面向
- **連線導向、可靠**：三次握手建連線、四次揮手拆連線；以序號／確認號排序、ACK 確認、遺失或損毀就重傳，確保可靠與順序。
- **流量控制**：用滑動視窗依接收方緩衝區動態調整可發送量，避免把接收方緩衝區灌爆。
- **壅塞控制**：偵測網路壅塞就降速，用慢啟動、壅塞避免等演算法緩解壅塞。
- **標頭開銷**：固定標頭最少 20 bytes（含可選欄位最長 60 bytes），序號／確認號各 4 bytes，關鍵旗標 SYN／ACK／FIN。
- **埠號定址**：用 [[port]] 區分同主機上的不同服務，做多工與解多工。

## 應用場景
- **Simon 工作場景**：日常 SSH 遠端登入交換器、路由器、伺服器，以及 FTP/SFTP 檔案傳輸、內網 Web、email 都走 TCP；抓包看「只有 SYN 沒有 SYN+ACK」即對端埠沒開或被防火牆擋。
- **一般場景**：CCNA／Network+／SSCP 必考的傳輸層核心協定，標頭欄位與 TCP/UDP 差異是常考點。

## 相關概念
- [[udp]]：傳輸層另一主角，無連線、求快，與 TCP 對照
- [[tcp-three-way-handshake]]：TCP 建立／拆除連線的固定流程
- [[transport-layer]]：TCP 所在的 OSI 第 4 層
- [[port]]：TCP 用埠號做多工／解多工
- [[tcp-ip-model]]：TCP 是此協定堆疊的核心傳輸協定

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/7-transport-layer-tcp-and-udp|CCNA Section 2 Leaf 7 傳輸層 TCP 與 UDP]]、[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/8-tcp-handshake-and-teardown|CCNA Section 2 Leaf 8 TCP 三次握手與四次揮手]]
