---
title: "ICMP 網際網路控制訊息協定（Internet Control Message Protocol）"
slug: icmp
aliases: [ICMP, Internet Control Message Protocol, 網際網路控制訊息協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
ICMP（網際網路控制訊息協定）在設備之間傳遞**控制、狀態與錯誤訊息**，是網路連通性診斷的底層協定。它直接騎在 [[internet-protocol]] 上（IP 協定號 1）、不使用埠號，屬於網路層協定，常見的 ping、traceroute（純文字）診斷工具都建立在它之上。

## 關鍵面向
- **用途**：回報網路錯誤與狀態，例如目標不可達、逾時、需要分片等。
- **承載方式**：直接掛在 IP 上、IP 協定號 1，不走傳輸層的 [[port]]（埠）。
- **診斷工具基礎**：ping 測連通、traceroute 測路徑，都靠 ICMP 訊息運作。
- **分層**：屬 [[network-layer]]（OSI 第 3 層）。

## 應用場景
- **Simon 工作場景**：日常用 ping/traceroute 查內網連通與路徑、定位斷點；防火牆策略上常需評估是否放行 ICMP（全擋會讓診斷失效、全開又增加被探測風險）。
- **一般場景**：CCNA/Network+/SSCP 的網路層必考內容，是理解網路故障排查的入門。

## 相關概念
- [[network-layer]]：ICMP 所屬的 OSI 第 3 層
- [[internet-protocol]]：ICMP 直接承載於其上（協定號 1）
- [[packet]]：ICMP 訊息以封包形式在網路層傳遞

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/9-network-layer|CCNA Section 2 Leaf 9 網路層]]
