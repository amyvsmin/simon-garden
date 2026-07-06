---
title: "IPsec（VPN 網路層加密協定）"
slug: ipsec
aliases: [IPsec, IPSec, IP Security, 網路層加密, VPN 加密協定, ipsec]
category: 資安
confidence: 已驗證
created: 2026-07-06
---

## 定義
IPsec 是運作在網路層的加密協定、安全性高，是 VPN 最常見的協定之一。另一種 VPN 是應用層的 SSL/TLS VPN，透過瀏覽器即可使用。VPN 用來在不可信網路上建立一條加密的私人通道，讓遠端流量像在內網一樣傳輸。

## 關鍵面向
- **VPN 兩種型態**：站對站（Site-to-Site，總部與分公司互連兩個網路）、遠端存取（Remote Access，遠距辦公的使用者連回內網）。
- **兩個核心協定**：AH（Authentication Header）提供完整性與身分驗證但**不加密**；ESP（Encapsulating Security Payload）提供完整性、身分驗證**再加上加密**。實務幾乎都用 ESP。
- **兩種模式**：傳輸模式（Transport Mode，只加密原封包的「資料」、保留原 IP 標頭，用於主機對主機）、通道模式（Tunnel Mode，把「整個原封包」加密再包上新 IP 標頭，藏住原始來源與目的，站對站 VPN 最常見）。
- **最常見組合＝ESP＋通道模式**：ESP 負責加密、通道模式把整個原封包包起來，兩者一搭就是站對站 VPN 的標準配置。
- **VPN 不是萬能**：VPN 提供機密性與完整性，但擋不了「已加密通道內」的惡意流量，仍需搭配防火牆與端點防護。

## 應用場景
- **Simon 工作場景**：公司總部與分點之間用站對站 IPsec VPN（ESP＋通道模式）互連；出差或在家的同仁用遠端存取 VPN 連回公司內網做伺服器維運與遠端連線；VPN 落地後仍在對外邊界擺防火牆，不把 VPN 當唯一防線。
- **一般場景**：企業跨點組網、遠距辦公安全連線、iPAS 與 CISSP 網路防護域「AH／ESP、傳輸／通道模式」的高頻考點。

## 相關概念
- [[tls]]：SSL/TLS VPN 是應用層的另一種 VPN，走瀏覽器即可用，與網路層的 IPsec 分工不同
- [[network-protocol]]：IPsec 屬網路層協定，加密整段 IP 傳輸
- [[wifi-security]]：連不可信無線網路時走 VPN，可擋 Evil Twin 的中間人竊聽
- [[zero-trust]]：傳統 VPN 給的是「網段級」信任，零信任主張連進來也要逐次驗證，兩者思路對照

## 來源
- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
