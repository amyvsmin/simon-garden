---
title: "網路協定（Network Protocol）"
slug: network-protocol
aliases: [Network Protocol, 網路協定, 通訊協定, 網路通訊協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
網路上的裝置用來彼此通訊、交換資料的一套規則與標準。協定決定資料怎麼格式化、傳送與接收；[[internet-protocol]]（IP）、TCP、UDP、HTTP、HTTPS 都是常見的網路協定。

## 關鍵面向
- **裝置靠協定溝通**：網路把裝置連起來，裝置之間透過網路協定交換資料；連線資訊（來源／目的 IP、傳輸量、時間）就是協定運作的產物
- **協定常對應 [[port]]**：例如 HTTPS 慣例走 port 443；但對應「不總是」成立，攻擊者會用非慣例組合做 [[command-and-control]]
- **封包 header 標明協定**：[[ipv4]] header 的 Protocol 欄位用數值對應協定（6＝TCP、17＝UDP、1＝ICMP），讓接收端知道怎麼解讀 payload
- **分析對象**：[[network-protocol-analyzer]]（封包嗅探器，如 [[tcpdump]]、Wireshark）就是用來擷取與分析這些協定流量的工具

## 應用場景
- **Simon 工作場景**：判讀機房流量時，先認協定才知道某條連線在做什麼；盯協定與 port 的錯配是設告警的依據
- **一般場景**：協定堆疊（TCP/IP）是 CCNA、Network+ 的整門課基礎

## 相關概念
- [[internet-protocol]]：internet layer 的核心協定
- [[port]]：常對應特定協定
- [[tcp-ip-model]]：把協定分層組織的框架
- [[network-protocol-analyzer]]：擷取分析協定流量的工具

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/4-maintain-awareness-with-network-monitoring|Course 6 Module 2 Section 1 Leaf 4 Maintain awareness with network monitoring]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/4-reexamine-the-fields-of-a-packet-header|Course 6 Module 2 Section 2 Leaf 4 Reexamine the fields of a packet header]]
