---
title: "LLA 本地鏈路位址（Link-Local Address）"
slug: link-local-address
aliases: [LLA, Link-Local Address, 本地鏈路位址, 鏈路本地位址, 連結本地位址, FE80]
category: 資安
confidence: 已驗證
created: 2026-07-03
---

## 定義
IPv6 中前綴 **`FE80::/10`**、**僅在單一鏈路內有效**的單播位址。設備一啟用 IPv6 就**自動生成**（常用 [[eui-64]] 規則），無需 [[dhcp]]。功能對應 [[ipv4]] 的 [[apipa]]（169.254），但關鍵差異是——**IPv6 的 LLA 永久保留**，不像 APIPA 一取得有效位址就被覆蓋。

## 關鍵面向
- **前綴 `FE80::/10`**：首組範圍 FE80–FEBF；結構＝前綴 10 位＋其餘 54 位（通常全 0）＋介面 ID 64 位
- **自動生成、免 DHCP**：介面上電即有，同鏈路設備靠它就能互通
- **僅單鏈路、不跨路由器**：無全域唯一性，[[ipv4]] 跨網段用不上
- **恆存（IPv6 vs IPv4 的分水嶺）**：另配 GUA 後 LLA 仍在（講師若說「被替換」是口誤）
- **NDP 的載體**：[[neighbor-discovery-protocol]] 鄰居發現的控制流量走 LLA；ping LLA 需指定出介面

## 應用場景
- **Simon 工作場景**：排查主機／路由器網路時，`ipconfig /all`／`show ipv6 interface` 看到 `fe80::` 就知道介面活著、驅動正常，即使 DHCP 掛了也能做同網段連通測試
- **一般場景**：CCNA 常考 LLA 前綴與「恆存 vs APIPA 被覆蓋」對比；路由協定的 IPv6 鄰居關係多以 LLA 建立

## 相關概念
- [[apipa]]：IPv4 對應物（但 APIPA 會被覆蓋、LLA 恆存）
- [[ipv6]]：LLA 是 IPv6 的位址類型之一
- [[eui-64]]：自動生成 LLA 介面 ID 的規則
- [[neighbor-discovery-protocol]]：以 LLA 為載體運作
- [[global-unicast-address]]：與 LLA 並存於同介面

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/5-configuring-ipv6-on-cisco-router-lab|CCNA Section 5 Leaf 5 IPv6 路由器實驗]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/6-configuring-ipv6-on-windows-and-linux|CCNA Section 5 Leaf 6 在 Windows 與 Linux 設定 IPv6]]
