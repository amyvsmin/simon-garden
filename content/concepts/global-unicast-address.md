---
title: "GUA 全球單播位址（Global Unicast Address）"
slug: global-unicast-address
aliases: [GUA, Global Unicast Address, 全球單播位址, 全域單播位址, 公網單播位址, IPv6 公網位址]
category: 資安
confidence: 已驗證
created: 2026-07-03
---

## 定義
IPv6 中**可在整個網際網路被路由**的公網單播位址，前綴 **`2000::/3`**（首組落在 2000–3FFF），等同 [[ipv4]] 的公網位址。由三個欄位組成——**公網路由前綴(48)＋子網 ID(16)＋介面 ID(64)**，是 IPv6 設備對外的正式身份。

## 關鍵面向
- **前綴 `2000::/3`**：001 開頭、首組 2000–3FFF；看到這開頭就能判定是 GUA
- **三欄位切法**：公網路由前綴 48（ISP 分配）＋子網 ID 16（客戶自劃）＋介面 ID 64
- **314／π 規則**：前三個 16 位＝路由前綴、第四個 16 位＝子網 ID、後四組＝介面 ID（π 前三碼 314）
- **三種取得方式**：手動靜態、[[slaac]] 無狀態、DHCPv6 有狀態
- **子網不佔主機位**：與 IPv4 不同，IPv6 切子網用專屬子網 ID 欄位、介面 ID 恆 64 位

## 應用場景
- **Simon 工作場景**：公司若導入 IPv6，對外服務用的就是 ISP 分配的 GUA 前綴；規劃網段時對照 IPv4 公網位址理解
- **一般場景**：CCNA 必考「看前綴判類型」與 GUA 三欄位切分；設定路由器介面 IPv6 幾乎都配 GUA

## 相關概念
- [[ipv6]]：GUA 是 IPv6 的位址類型之一
- [[unique-local-address]]：ULA 是 IPv6 私網版，配法相同、只差前綴
- [[link-local-address]]：配 GUA 時會連動生成的本地鏈路位址
- [[eui-64]]：可自動生成 GUA 的 64 位介面 ID
- [[slaac]]：無狀態自動取得 GUA 的方式

## 來源
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/3-ipv6-address-types|CCNA Section 5 Leaf 3 IPv6 位址類型]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/4-configuring-ipv6-on-cisco|CCNA Section 5 Leaf 4 在 Cisco 設定 IPv6]]
- [[1-learning/udemy/ccna-all-in-one/section-05-ipv6/5-configuring-ipv6-on-cisco-router-lab|CCNA Section 5 Leaf 5 IPv6 路由器實驗]]
