---
title: "HTTPS 加密超文字傳輸協定（HTTP Secure）"
slug: https
aliases: [HTTPS, HTTP Secure, 加密 HTTP, HTTP over TLS]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
HTTPS 是 [[http]] 的加密安全版，預設走 [[tcp]] 443 埠。它在 HTTP 之上加上 SSL/TLS，提供加密傳輸與身分驗證，保護通訊不被攔截與篡改。網址列出現小鎖圖示，就代表該站受 HTTPS 保護。

## 關鍵面向
- **TCP 443 埠**：HTTPS 預設用 TCP 443 建立連線，與 HTTP 的 80 埠區隔。
- **SSL/TLS 加密**：在 HTTP 基礎上以 SSL（安全套接層）或 TLS（傳輸層安全）對會話加密並驗證身分；現行實作用 TLS。
- **可視標記**：瀏覽器網址列的小鎖圖示（或 `https://`）即代表連線受 HTTPS 保護。
- **適用情境**：用於電子商務、個資交換等敏感交易，防止通訊被攔截與竄改。

## 應用場景
- **Simon 工作場景**：對外服務的傳輸加密要求由 HTTPS（443 埠、憑證、小鎖）落實；內部仍跑純 HTTP 的服務在 ISO 27001 盤點會被列為傳輸加密缺口，應換成 HTTPS 或限制在隔離管理網段。
- **一般場景**：HTTPS 443 埠是 CCNA 必考；SSL/TLS、憑證與中間人攻擊概念在 SSCP/CISSP 的通訊與網路安全領域深入。

## 相關概念
- [[http]]：HTTPS 是其加密版本，多了加密傳輸與身分驗證。
- [[ssh]]：同屬「加密取代明文」的安全協定思路（SSH 取代 Telnet、HTTPS 取代 HTTP）。
- [[application-layer]]：HTTPS 屬 OSI 第七層的應用層協定。
- [[port]]：HTTPS 預設使用 TCP 443。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/2-application-layer-protocols|CCNA Section 2 Leaf 2 應用層與常見協定]]
