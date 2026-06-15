---
title: "ARP 位址解析協定（Address Resolution Protocol）"
slug: arp
aliases: [ARP, Address Resolution Protocol, 位址解析協定, 地址解析協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
ARP（位址解析協定）解決 L3 與 L2 之間的地址映射問題：**已知對方的 IP 位址、求出對方的 MAC 位址**，讓封包在同網段內能正確封進乙太網路訊框遞送。它像一本通訊錄，只是記的是「IP↔MAC」對應，概念上和 [[dns]] 把「網域名稱↔IP」互相映射很類似。

## 關鍵面向
- **功能方向**：已知 IP→求 MAC，是 [[internet-protocol]] 邏輯位址與 [[mac-address]] 實體位址之間的橋樑。
- **反向協定 RARP**：已知 MAC→求 IP，用於無碟工作站開機；早已被 [[dhcp]] 取代（RARP 用純文字、不另立概念）。
- **分層歸屬有爭議**：ARP 封包直接封裝在乙太網路訊框裡、不包在 IP 內，所以不少教材把它歸在 L2 或 L2/L3 之間。
- **CCNA 取捨**：分層爭議知道即可，考試重點是記住「ARP 做 IP→MAC」這個功能。

## 應用場景
- **Simon 工作場景**：內網維運常用 `arp -a` 看 ARP 表排查 IP 衝突；資安面 ARP spoofing（ARP 欺騙）是內網中間人攻擊常見手法，對應 ISO 27001 的傳輸與存取安全控制。
- **一般場景**：CCNA/Network+/SSCP 的網路層必考基礎，理解同網段封包遞送的前置步驟。

## 相關概念
- [[mac-address]]：ARP 的求得目標（L2 實體位址）
- [[internet-protocol]]：ARP 的已知輸入（L3 邏輯位址）
- [[network-layer]]：講師把 ARP 歸在此層（連結 L3 與 L2）
- [[dhcp]]：取代了反向協定 RARP 的開機取址功能
- [[dns]]：同為「映射對照表」性質的協定（網域名稱↔IP）

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/9-network-layer|CCNA Section 2 Leaf 9 網路層]]
