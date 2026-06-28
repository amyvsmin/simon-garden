---
title: "IPv4 位址枯竭（IPv4 Address Exhaustion）"
slug: ipv4-address-exhaustion
aliases: [IPv4 Address Exhaustion, IPv4 位址枯竭, IPv4 位址耗盡, IPv4 位址池耗盡, 位址枯竭, address exhaustion, IP 枯竭]
category: 資安
confidence: 已驗證
created: 2026-06-28
---

## 定義
[[ipv4]] 只有 2³² ≈ 43 億個位址，隨連網裝置爆量逐漸用罄的結構性問題。2011-02-03 IANA（網際網路號碼分配機構）把最後 5 個 A 類網段分配給 5 大區域註冊機構（RIR）後，全球位址池正式宣告耗盡。它是 IPv6、NAT、私有位址、CIDR 等一系列「節省與擴增位址」工程手段的共同起因。

## 關鍵面向
- **數量天花板**：32 bit 位址、約 43 億個。1980 年看似取之不盡（當時全球人口也才約 43 億），1990 年代就預見會用罄。
- **耗盡時點**：2011-02-03 IANA 分配最後 5 個 A 類網段給 5 大 RIR，標誌頂層位址池見底；其後各 RIR 也陸續耗盡手中資源。
- **緩解手段（不是取代）**：私有位址（[[private-ip-address]]）＋ NAT 讓大量內網裝置共用少數公共 IP；[[cidr]]／[[subnetting]] 提升位址利用率；IPv6 是長期擴增方案。
- **IPv6 共存而非速換**：IPv6 1998 年提出，但短期內無法完全取代，兩者長期共存（2024 年仍約 55% 流量走 IPv4）——這正是 IPv4 仍是必修知識的原因。

## 應用場景
- **Simon 工作場景**：公司內網清一色私有段 + NAT，正是位址枯竭逼出來的工程結果；理解這點才知道為何內網看到的幾乎都是 10.x／172.16–31.x／192.168.x，以及新專案要不要啟用 IPv6 雙堆疊。
- **一般場景**：CCNA／Network+ 常識題（記住 32 bit、43 億、2011 枯竭、IPv6 共存四個錨點）；理解 NAT／私有位址／CIDR 為何存在的前提。

## 相關概念
- [[ipv4]]：枯竭的就是它的位址空間
- [[private-ip-address]]：搭配 NAT 緩解枯竭的關鍵手段
- [[cidr]]：提升位址分配效率、延緩枯竭
- [[subnetting]]：精準切割位址、減少浪費

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/1-ipv4-history|CCNA Section 4 Leaf 1 IPv4 歷史]]
