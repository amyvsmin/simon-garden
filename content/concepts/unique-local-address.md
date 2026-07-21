---
title: "ULA 本地唯一位址（Unique Local Address）"
slug: unique-local-address
aliases: [ULA, Unique Local Address, 本地唯一位址, 唯一本地位址, IPv6 私有位址, FC00, FD00]
category: 網路基礎
confidence: 已驗證
created: 2026-07-03
---

## 定義
IPv6 中前綴 **`FC00::/7`**（實務慣用 **`FD00::/8`**）、**不可在公網被路由、僅限私網使用**的單播位址，等同 [[ipv4]] 的 [[private-ip-address]]（192.168 那類）。設定方式與 [[global-unicast-address]] 完全相同，只靠前綴區分是公網還是私網。

## 關鍵面向
- **前綴 `FC00::/7`**：範圍 FC00–FDFF；第 8 位是 **L（local）旗標**
- **L 位**：L=1 → `FD00::/8`（目前唯一慣用、可本地自行分配）；L=0 → `FC00::/8`（保留、未用）
- **僅私網、不公網路由**：對應 [[ipv4]] 的 RFC 1918 私有位址
- **結構**：前綴/L(8)＋全域 ID(40)＋子網 ID(16)＋介面 ID(64)
- **設定同 GUA**：`ipv6 address` 指令一致，`show ipv6 interface` 中列在 GUA 分類下、靠開頭區分

## 應用場景
- **Simon 工作場景**：IPv6 內網規劃就用 ULA，等同現在用的 192.168／10.x 私網段；日後公司導入 IPv6 雙堆疊時的內部定址主力
- **一般場景**：CCNA 考「看前綴判 GUA vs ULA」；ULA 讓內網有穩定私有位址、不依賴 ISP 前綴變動

## 相關概念
- [[private-ip-address]]：IPv4 對應物
- [[ipv6]]：ULA 是 IPv6 的位址類型之一
- [[global-unicast-address]]：配法相同、只差前綴（公網 vs 私網）

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/5-configuring-ipv6-on-cisco-router-lab|CCNA Section 5 Leaf 5 IPv6 路由器實驗]]
