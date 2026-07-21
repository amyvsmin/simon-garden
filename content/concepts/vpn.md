---
title: "VPN 虛擬私有網路（Virtual Private Network）"
slug: vpn
aliases: [VPN, Virtual Private Network, 虛擬私有網路, 虛擬私人網路, 虛擬私網]
category: 網路基礎
confidence: 已驗證
created: 2026-07-11
---

## 定義
VPN 是在**公共網際網路**上建立**加密通道**連接據點、模擬私有連接的技術。優點是**成本低、易部署**；缺點是**效能與可靠性較差**——因為底層依賴公共 [[internet]]、品質不可控。

## 關鍵面向
- **公共 Internet 上的加密通道**：不必自拉專線，借公共網路走加密連線。
- **成本低、易部署**：相對專線/MPLS 便宜很多。
- **效能/可靠性受公共網路影響**：塞車時一樣塞、品質不保證。
- **兩種典型用途**：站對站（site-to-site，連分支據點）與遠端存取（remote access，員工連公司）。
- **WAN 低成本選項**：常作備援或次要據點互連（對比 [[wide-area-network]] 的專線/MPLS）。
- **資安評估重點**：跨公共 Internet，加密強度、憑證、端點都要把關。

## 應用場景
- **Simon 工作場景**：連次要廠區或遠端員工常用 VPN 當低成本/備援方案；對接 ISO 27001，VPN 段落（加密演算法、憑證管理、端點安全）是資安評估必查項。
- **一般場景**：CCNA 送分題（「成本最低但可靠性最差的 WAN 技術」→VPN）；VPN 在資安領域（IPsec/SSL、遠端存取）跨域反覆出現。

## 相關概念
- [[wide-area-network]]：VPN 是 WAN 連接技術的低成本選項
- [[internet]]：VPN 建於公共 Internet 之上
- [[tls]]：SSL VPN 的加密基礎

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/1-lan-man-wan-and-internet|CCNA Section 6 Leaf 1 LAN/MAN/WAN 與 Internet]]
- [[1-learning/udemy/ccna-all-in-one/section-06-network-topology/4-man-and-wan-topologies|CCNA Section 6 Leaf 4 MAN/WAN 連接技術]]
