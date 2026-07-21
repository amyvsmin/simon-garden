---
title: "TCP/IP 模型（TCP/IP Model）"
slug: tcp-ip-model
aliases: [TCP/IP Model, TCP/IP 模型, TCP/IP 四層模型, TCP/IP four-layer model, 四層模型, internet protocol suite]
category: 網路基礎
confidence: 已驗證
created: 2026-06-07
---

## 定義
把資料如何在網路上組織與傳輸視覺化的四層框架。各層負責不同職責，封包逐層處理。[[internet-protocol]]（IP）運作在其中的 internet layer（網際網路層），是網際網路所有通訊的基礎、負責讓封包抵達目的地。

## 關鍵面向
- **四層**：application（應用層）、transport（傳輸層）、internet（網際網路層）、network access／link（網路存取層）
- **internet layer**：IP 在此運作，像郵差不看信封外觀、而用 [[packet]] header 裡的 IP 位址決定最佳路由，把資料在主機間送達
- **IP 兩版本**：[[ipv4]]（網際網路通訊的基礎、目前最廣用）與 IPv6（最新版本）；兩者 header 不同、欄位相似只是名稱不同
- **跟封包的關係**：IP 封包 header 的欄位（Version／Protocol／TTL／來源目的位址等）就是 internet layer 的運作細節

## 應用場景
- **Simon 工作場景**：CCNA 今年必過目標的硬核基礎；手讀封包、判斷封包走哪一層、排查路由問題時的分層框架
- **一般場景**：CCNA／Network+／SSCP 必背；常與 OSI 七層模型對照理解

## 相關概念
- [[packet]]：在各層被封裝、傳輸
- [[internet-protocol]]、[[ipv4]]：internet layer 的核心協定
- [[network-protocol]]：各層所遵循的規則集

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
