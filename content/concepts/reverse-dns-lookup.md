---
title: "反向 DNS 查詢（Reverse DNS Lookup）"
slug: reverse-dns-lookup
aliases: [Reverse DNS Lookup, 反向 DNS 查詢, rDNS, 反查]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
用 IP 位址反查其對應網域名稱的查詢（正向 DNS 是用網域查 IP，反向相反）。在封包分析裡，它是 [[tcpdump]] 預設名稱解析會用到的動作，也是一個 OPSEC（行動保密）陷阱。

## 關鍵面向
- **tcpdump 預設會做**：tcpdump 預設把 IP 轉成名稱、port 轉成常見服務，名稱解析這一步就會發出反向 DNS 查詢
- **兩個問題**：一是不一定準（port 80 不必然是 HTTP）；二是對攻擊者的系統做反查，可能透過對方的 DNS 紀錄驚動對方，讓他知道你在調查
- **最佳實務 `-n`／`-nn`**：分析流量時加 `-n`（不解析主機名）甚至 `-nn`（主機名與 [[port]] 都不解析）避免上述兩個問題
- **OPSEC 心法**：調查可疑連線時，少留下會驚動對手的足跡，是事件回應的基本紀律

## 應用場景
- **Simon 工作場景**：機房用 tcpdump 排查可疑連線時養成加 `-n` 的習慣（如 `sudo tcpdump -i any -n 'host <可疑IP>' -w case.pcap`），既避免被誤導的 port→服務對應，也避免反查驚動對方
- **一般場景**：reverse DNS lookup 與 tcpdump 的 `-n` 是 CCNA、Network+、SSCP、Blue Team 實務常見內容

## 相關概念
- [[tcpdump]]：預設名稱解析會觸發反向 DNS 查詢
- [[port]]：`-nn` 連 port 也不解析
- [[packet-capture]]：分析 p-cap 時的名稱解析考量

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/2-overview-of-tcpdump|Course 6 Module 2 Section 3 Leaf 2 Overview of tcpdump]]
