---
title: "HTTP 超文字傳輸協定（HyperText Transfer Protocol）"
slug: http
aliases: [HTTP, HyperText Transfer Protocol, 超文字傳輸協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
HTTP 是瀏覽網頁的應用層協定，預設走 [[tcp]] 80 埠，為主從式（Client-Server）架構：瀏覽器是客戶端、被存取的網站是伺服器。客戶端送請求、伺服器處理後回送回應。它傳輸明文，敏感資料應改用加密版 [[https]]。

## 關鍵面向
- **TCP 80 埠**：HTTP 預設用 TCP 80 建立連線，網址後其實隱含 `:80`。
- **主從式模型**：瀏覽器（Firefox/Chrome）當客戶端、站點（YouTube、Udemy）當伺服器，是現代網際網路互動最常見的架構。
- **URL 組成**：在瀏覽器輸入的網址即 URL（統一資源定位器），格式為協定加主機名加檔名，用來定位並檢索資源。
- **版本演進**：最新版是 2022 年的 HTTP/3；HTTP 明文傳輸，敏感交易要走 HTTPS。

## 應用場景
- **Simon 工作場景**：管理內部網站服務、檢視伺服器與設備的 Web 管理介面時會接觸 HTTP；對外服務一律要求走 HTTPS（443 埠、傳輸加密），純 HTTP 的內部介面在 ISO 27001 盤點會被視為傳輸加密缺口。
- **一般場景**：協定對應埠號（HTTP 80）是 CCNA 必考點；HTTP 與 HTTPS、SSL/TLS 概念在 SSCP/CISSP 通訊與網路安全領域再深入。

## 相關概念
- [[https]]：HTTP 的加密安全版，在 HTTP 之上加 SSL/TLS、走 TCP 443。
- [[application-layer]]：HTTP 屬 OSI 第七層的應用層協定。
- [[port]]：HTTP 預設使用 TCP 80。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/2-application-layer-protocols|CCNA Section 2 Leaf 2 應用層與常見協定]]
