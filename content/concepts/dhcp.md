---
title: "DHCP 動態主機配置協定（Dynamic Host Configuration Protocol）"
slug: dhcp
aliases: [DHCP, Dynamic Host Configuration Protocol, 動態主機配置協定, 動態主機設定協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
DHCP 是用於 IP 網路、自動把 IP 位址與相關設定派發給客戶端的協定，走 [[udp]] 的 67/68 埠。它把「人工逐台設 IP／遮罩／網關／DNS」變成「設備一上線就自動取得」，是家用與企業網路最普及的基礎服務之一。客戶端尚無 IP 時用 0.0.0.0 來源加廣播找伺服器。

## 關鍵面向
- **UDP 67/68 雙埠方向**：67 是伺服器監聽埠、68 是客戶端監聽埠（記法：號碼小的給伺服器）。Discover/Request 送往 67、Offer/ACK 送往 68。
- **DORA 四階段**：Discover（發現，客戶端廣播找伺服器）→ Offer（提供，伺服器報價租約，可能多台同時報價）→ Request（請求，客戶端選一台正式請求）→ Acknowledge（確認，伺服器回 ACK，一併下發遮罩/網關/DNS）。
- **租約加位址池**：伺服器維護位址池（pool/scope），記錄哪些位址派給誰、各自租約時間多久；到期未續租就回收，這是 DHCP 能集中管理的核心。
- **前身與規格**：前身為 BOOTP（沿用同一組 67/68 埠），DHCP 加上動態位址池與租約能力；現行權威規格是 RFC 2131。

## 應用場景
- **Simon 工作場景**：辦公網段幾乎都靠 DHCP 派 IP，位址池/租約正是管理 DHCP scope 的日常。ISO 27001 盤點時，DHCP 紀錄（哪個 MAC 何時拿哪個 IP）是資產追蹤與事件溯源的關鍵紀錄；也要留意流氓 DHCP（Rogue DHCP）與交換器上的 DHCP Snooping 防護。
- **一般場景**：DHCP 67/68 埠與 DORA 四階段是 CCNA 必考；DHCP Snooping、DHCP Relay 在後段 IP 服務與安全章展開。

## 相關概念
- [[dns]]：DHCP 在 ACK 階段一併下發 DNS 伺服器位址給客戶端。
- [[application-layer]]：DHCP 屬 OSI 第七層的應用層服務。
- [[port]]：DHCP 使用 UDP 67（伺服器）與 68（客戶端）。
- [[broadcast-domain]]：Discover 與 Request 以廣播送出，只在同一廣播網域內傳遞。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/4-dhcp-and-dora-process|CCNA Section 2 Leaf 4 DHCP 與 DORA 四階段]]
