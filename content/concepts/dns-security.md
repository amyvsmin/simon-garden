---
title: "DNS 安全（DNS Security）"
slug: dns-security
aliases: [DNS Security, DNS 安全, DNSSEC, DoH, DoT, dns security]
category: 資安
confidence: 已驗證
created: 2026-07-06
---

## 定義
原始 DNS 查詢既不驗證也不加密，容易被竄改（DNS 汙染、快取投毒）與竊聽。DNS 安全機制分成三種、保護目標各不相同：DNSSEC 保完整性與真實性、DoH 與 DoT 保機密性。搞清楚「誰保什麼」是這題的關鍵，別把三者混為一談。

## 關鍵面向
- **DNSSEC（DNS Security Extensions）**：用數位簽章驗證 DNS 回應，保護「完整性與真實性」——確認回應沒被竄改、確實來自正牌權威伺服器。簽章機制見 [[digital-signature]]。
- **DNSSEC 不提供機密性（常考陷阱）**：它只防竄改、不加密，查詢內容仍是明文，旁人照樣看得到你查了哪個網域。
- **DoH（DNS over HTTPS）**：把 DNS 查詢包進 HTTPS 加密傳輸，保護「機密性」，還能混在一般網頁流量裡不易被辨識封鎖。
- **DoT（DNS over TLS）**：透過 [[tls]] 對 DNS 查詢加密（專用 Port 853），同樣保護機密性，但因走獨立 Port 較易被辨識管理。
- **三者可互補**：DNSSEC 管「回應可不可信」、DoH／DoT 管「查詢會不會被偷看」，同時上才能兼顧真實性與機密性。

## 應用場景
- **Simon 工作場景**：公司內部 DNS 與對外解析設定時，用 DNSSEC 驗證外部回應防快取投毒，避免員工被導到假的公司服務或釣魚站；評估是否對端點強制走 DoH／DoT 保護查詢隱私，同時留意這會讓資安側較難用 DNS 日誌做內部監控（機密性與可視性的取捨）。
- **一般場景**：企業 DNS 加固、iPAS 與 CISSP「DNSSEC 只驗證不加密」的高頻是非題、個人裝置用 DoH 保護查詢隱私。

## 相關概念
- [[dns]]：DNS 安全是補足 DNS 原生「不驗證、不加密」缺陷的一組機制
- [[digital-signature]]：DNSSEC 用數位簽章驗證回應的真實性與完整性
- [[tls]]：DoT 以 TLS 加密 DNS 查詢，DoH 則走 HTTPS（底層同樣是 TLS）
- [[network-protocol]]：DNS 是網路基礎協定，其安全擴充補上機密性與完整性

## 來源
- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
