---
title: "DNS 網域名稱系統（Domain Name System）"
slug: dns
aliases: [DNS, Domain Name System, 網域名稱系統, 域名系統, 網域名稱解析]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
DNS 是把網域名稱與 IP 位址互相對應的分散式資料庫，核心工作是「網域名稱解析」——把人記得住的網址翻成電腦要用的 IP。它走 [[udp]] 與 [[tcp]] 的 53 埠，分散在全球成千上萬台伺服器互相通訊、共享對應記錄，沒有單一中央伺服器。像手機通訊錄：記不住每個號碼，靠「名字→號碼」的對應表來撥。

## 關鍵面向
- **UDP/TCP 53 雙協定**：一般查詢走 UDP 53（快、適合短訊息）；回應大於 512 bytes 或區域傳送（zone transfer）走 TCP 53（要可靠）。是少數同時用兩種協定且埠號相同的協定。
- **遞迴查詢**：發生在客戶端與本地解析器之間，「幫我查到底、直接給結果」，由被問的解析器扛到底。
- **迭代查詢**：發生在解析器與根/TLD/權威之間，「告訴我下一步問誰」，由發問方一站站逼近。
- **解析流程**：本機快取（OS／瀏覽器／hosts）→ 遞迴解析器（ISP）→ 根（全球 13 組）→ TLD（如 .com）→ 權威 → 回傳 IP 給瀏覽器建連線。
- **DNS 階層**：根（指向 TLD）→ TLD（指向權威）→ 權威（持有真正的網域名稱↔IP 記錄）。

## 應用場景
- **Simon 工作場景**：DNS 是日常排錯高頻對象（`nslookup`、`ipconfig /flushdns`、檢查 hosts 檔案、內部 AD DNS 與條件式轉發）。DNS 屬關鍵基礎服務，一掛使用者就覺得「整個網路都壞了」，正對應 ISO 27001 BIA 裡替 DNS 主機標 RTO/RPO 的理由。
- **一般場景**：CCNA 屬「了解即可」，但 53 埠、遞迴/迭代仍可能出現；DNS 安全（DNSSEC、快取毒化）留到 SSCP/CISSP 深入。

## 相關概念
- [[dhcp]]：同屬讓上網自動化的應用層核心服務，DHCP 在 ACK 階段一併下發 DNS 伺服器位址。
- [[internet-protocol]]：DNS 解析的最終目標就是取得對方主機的 IP 位址。
- [[port]]：DNS 同時佔用 UDP 53 與 TCP 53。
- [[application-layer]]：DNS 是 OSI 第七層的應用層服務。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/5-dns-domain-name-system|CCNA Section 2 Leaf 5 DNS 網域名稱系統]]
