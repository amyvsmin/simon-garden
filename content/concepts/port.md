---
title: "連接埠（Port）"
slug: port
aliases: [Port, 連接埠, 通訊埠, 埠號]
category: 資安
confidence: 待驗證
created: 2026-06-15
query-count: 0
---

## 定義
網路通訊的端點，封包透過它被接收與傳送。Port 常（但不總是）對應某個[[network-protocol|網路協定]]，例如 port 443 慣例上對應 HTTPS。

## 關鍵面向
- **port 與協定的慣例對應**：port 443＝HTTPS、port 80＝HTTP 是常見約定，但「不總是」成立——這正是 [[tcpdump]] 預設名稱解析可能誤導的原因（port 80 不必然是 HTTP）
- **port／協定錯配是警訊**：攻擊者刻意用非慣例組合（如 HTTPS 走 port 8088 而非 443）維持與被入侵主機的通訊，這就是 [[command-and-control]]（C2）的徵兆
- **流量分析的一環**：flow analysis 看 packet、protocol、port 三者，組織要清楚哪些 port 該開、並盯 port 與協定的錯配
- **tcpdump 解讀**：每行輸出含 source port 與 destination port；加 `-nn` 可讓 tcpdump 不把 port 解析成服務名

## 應用場景
- **Simon 工作場景**：機房防火牆規則與網路監看的核心——盤點該開的 port、設告警抓 port／協定錯配，是該排進 ISO 27001 監控的 IoC
- **一般場景**：port 與常見服務對應是 CCNA、Network+ 必背；C2 偵測是 SSCP、Blue Team 考點

## 相關概念
- [[network-protocol]]：port 常對應特定協定
- [[command-and-control]]：port／協定錯配是 C2 的徵兆
- [[network-monitoring]]：flow analysis 監看 port
- [[packet]]：封包 header 含 port 資訊

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-1-understand-network-traffic/4-maintain-awareness-with-network-monitoring|Course 6 Module 2 Section 1 Leaf 4 Maintain awareness with network monitoring]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/2-overview-of-tcpdump|Course 6 Module 2 Section 3 Leaf 2 Overview of tcpdump]]
