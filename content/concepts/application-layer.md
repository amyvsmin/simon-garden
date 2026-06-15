---
title: "應用層（Application Layer，OSI L7）"
slug: application-layer
aliases: [Application Layer, 應用層, OSI 第七層, L7]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
應用層是 [[osi-model]] 的第七層、最頂層，最接近使用者，直接為使用者的應用程式行程提供服務，是我們「存取網際網路的大門」。它只負責標準化通訊、本身不搬資料，要靠 [[transport-layer]] 建立主機到主機的資料通道。

## 關鍵面向
- **只標準化通訊、不搬資料**：應用層提供存取介面與協定規範，實際把資料從一台主機送到另一台主機靠的是傳輸層。
- **主從式模型為主**：多數應用層協定建立在 Client-Server（主從式）模型上，客戶端送請求、伺服器處理後回送回應。
- **多協定並行不衝突**：同時瀏覽網頁、視訊聊天、打遊戲、聽音樂能並存，正因各自走不同的應用層協定。
- **常見協定**：[[http]]、[[https]]、[[ftp]]、[[ssh]]、[[dns]]、[[dhcp]]，以及明文遠端登入的 Telnet。

## 應用場景
- **Simon 工作場景**：日常用 SSH 進伺服器、HTTPS 存取對外服務、DNS 解析內網主機名，都是在跟應用層協定打交道。ISO 27001 盤點時，盤的「服務與協定」清單（哪些埠開著、是否加密）多半落在這一層。
- **一般場景**：能說出應用層定位（第七層、最頂層、最接近使用者）與「只標準化通訊、靠傳輸層搬資料」的分工，是 CCNA／Network+／SSCP 的基礎考點。

## 相關概念
- [[osi-model]]：應用層是 OSI 七層中的第七層、最頂層。
- [[http]]：典型應用層協定，瀏覽網頁用、走 TCP 80。
- [[dns]]：應用層協定，負責網域名稱解析。
- [[transport-layer]]：應用層依賴傳輸層建立的資料通道才能搬資料。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/2-application-layer-protocols|CCNA Section 2 Leaf 2 應用層與常見協定]]
