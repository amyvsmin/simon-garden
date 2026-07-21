---
title: "被路由協定（Routed Protocol）"
slug: routed-protocol
aliases: [Routed Protocol, 被路由協定, 可路由協定, routed protocols]
category: 網路基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義
被路由協定是「被路由器搬運」的網路層協定／地址格式本身，例如 IP、IPX、AppleTalk、CLNP。它定義位址的編制規則（就像信封上的地址寫法），是被遞送的對象；和負責讀懂地址、決定路徑、分送封包的 [[routing-protocols]]（路由協定）角色相對——兩者常被混淆，務必分清。

## 關鍵面向
- **寄信比喻**：被路由協定＝信封上的地址寫法（被搬運的那封信）；[[routing-protocols]]（路由協定）＝看得懂地址、負責分送的郵差。
- **代表格式**：IP（最主流、通用度最強）、IPX（Novell NetWare）、AppleTalk（Apple）、CLNP（OSI 無連線網路層協定）。不同格式就像不同國家的信封書寫規則。
- **與路由協定的支援關係**：OSPF 只懂 IP；EIGRP 懂 IP／IPX／AppleTalk；IS-IS 最初為 CLNP 設計、擴充後也支援 IP（Integrated IS-IS）。
- **為何 IP 獨大**：IP 是最通用格式，現在所有路由協定都看得懂它，TCP/IP 模型一律用 IP 寫位址——這是 TCP/IP 成為主流協定棧的原因之一。

## 應用場景
- **Simon 工作場景**：公司網路設備幾乎清一色跑 IP，正是「IP 最主流、所有路由協定都支援」的寫照；分清「地址格式（被路由協定） vs 路由協定」兩層角色，排查時才不會把「位址設定錯」跟「路由協定沒收斂」混在一起。
- **一般場景**：CCNA 高頻觀念，是 RIP／EIGRP／OSPF 路由章節的前置基礎。

## 相關概念
- [[routing-protocols]]：負責讀懂被路由協定地址、找路分送的角色（成對概念）
- [[internet-protocol]]：目前最主流的被路由協定
- [[tcp-ip-model]]：一律採用 IP 這個被路由協定來寫位址

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-03-tcp-ip/2-tcp-ip-vs-osi-model|CCNA Section 3 Leaf 2 TCP/IP 與 OSI 模型差異]]
