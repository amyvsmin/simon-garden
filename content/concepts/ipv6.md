---
title: "IPv6（網際網路協定第 6 版）"
slug: ipv6
aliases: [IPv6, IP version 6, 網際網路協定第六版, IPv6 位址, 128 位元位址]
category: 網路基礎
confidence: 已驗證
created: 2026-07-05
updated: 2026-07-06
---

## 定義
[[internet-protocol]] 的第 6 版：位址從 [[ipv4]] 的 32 位元擴大到 **128 位元**（約 3.4×10³⁸ 個），從根本解決 [[ipv4-address-exhaustion]]。位址以 8 組 16 進位數（每組 16 位元、冒號分隔）表示，可用省略規則縮寫（去前導 0、連續全 0 段整段縮成 `::`、整個位址只能縮一次）。

## 關鍵面向
- **位址類型**：單播分 [[global-unicast-address]]（全球可路由）、[[unique-local-address]]（私網用）、[[link-local-address]]（`FE80::/10`、僅單一鏈路有效）；另有 multicast 與 [[anycast]]（由最近節點回應）；**沒有廣播**
- **自動組態**：[[slaac]] 無狀態位址自動組態、可搭 [[eui-64]] 從 MAC 位址生成介面 ID；也可用 DHCPv6
- **鄰居發現**：[[neighbor-discovery-protocol]]（NDP）取代 ARP，靠 ICMPv6 做位址解析與路由器發現
- **與 IPv4 並存**：雙堆疊（dual stack）、隧道、轉換三類過渡機制；位址夠用後 NAT 不再是必需品
- **IPv6 資安盲點（iPAS／資安高頻考點）**：① **NAT 那層順手的遮蔽不見了**——每台主機可直接擁有公開位址、外部可直連，不能再像 IPv4 靠 NAT 間接擋一層，主機端本身的防護更吃重；② **預設開著、卻沒人在看**——多數作業系統預設啟用 IPv6，但防火牆、IDS/IPS 規則常只盯 IPv4，IPv6 流量遂成沒人管的後門；雙堆疊、隧道等過渡機制也可能繞過原本只管 IPv4 的管控

## 應用場景
- **CCNA 備考**：Section 5 整章主軸（位址表示法、位址類型、Cisco／Windows／Linux 設定），年底 CCNA 應考範圍
- **工作**：評估公司內網 IPv6 就緒度；防火牆與監控規則要同步涵蓋 IPv6 流量，只防 IPv4 會留盲區

## 相關概念
- [[ipv4]]、[[ipv4-address-exhaustion]]：前代版本與其位址枯竭問題
- [[global-unicast-address]]、[[unique-local-address]]、[[link-local-address]]、[[anycast]]：位址類型族
- [[slaac]]、[[eui-64]]、[[neighbor-discovery-protocol]]：自動組態與鄰居發現機制

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/1-ipv6-introduction|CCNA Section 5 Leaf 1 IPv6 簡介]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/2-ipv6-address-representation|CCNA Section 5 Leaf 2 IPv6 位址表示法]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
