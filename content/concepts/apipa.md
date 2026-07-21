---
title: "APIPA 自動私有位址（Automatic Private IP Addressing）"
slug: apipa
aliases: [APIPA, Automatic Private IP Addressing, 自動私有位址, 169.254]
category: 網路基礎
confidence: 已驗證
created: 2026-06-28
---

## 定義
位於 `169.254.0.0/16`（傳統 B 類範圍）的本地鏈路位址。當裝置**沒手動設 IP 又取不到 [[dhcp]]** 時，網卡自動生成一個此範圍內的位址，保證至少有一個可用 IP、能在同一條本地鏈路內互通。是排查「沒拿到 DHCP」的高頻訊號。

## 關鍵面向
- **範圍**：169.254.0.0 – 169.254.255.255（/16）
- **觸發條件**：無手動 IP ＋ 網段內無 DHCP 伺服器（或拿不到）
- **作用**：自動給網卡一個有效本地位址、本鏈路內可互通；但**無法跨路由器、無法上網**
- **排錯訊號**：Windows `ipconfig` 看到 `169.254.x.x` ＝ DHCP 沒通（線路/服務/VLAN 任一環節）
- **修復**：確認/開啟 DHCP 後，停用→啟用網卡刷新即可取得正式位址
- **vs [[private-ip-address]]**：兩者都不上公網，但 APIPA 是「拿不到位址時的兜底自動值」、私有位址是「刻意規劃的內網段」

## 應用場景
- **Simon 工作場景**：現場排錯第一眼——使用者反映上不了網、`ipconfig` 一看 169.254 就知道是 DHCP 鏈路問題，直接往 DHCP 服務/交換器埠/VLAN 查
- **一般場景**：CCNA／Network+／桌面支援必備判讀

## 相關概念
- [[dhcp]]：APIPA 是拿不到 DHCP 時的兜底
- [[private-ip-address]]：另一種不上公網的位址
- [[ip-address]]：APIPA 是一種自動取得的 IP
- [[default-gateway]]：APIPA 狀態下通常無有效閘道

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/3-ipv4-addressing-and-classification|CCNA Section 4 Leaf 3 IPv4 位址表示與分類]]
- [[1-learning/udemy/ccna-all-in-one/section-04-ipv4/6-configuring-ipv4-on-cisco-windows-linux|CCNA Section 4 Leaf 6 設定 IPv4]]
