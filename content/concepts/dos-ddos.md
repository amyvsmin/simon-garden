---
title: "DoS / DDoS（阻斷服務攻擊）"
slug: dos-ddos
aliases: [DoS, DDoS, 阻斷服務, 分散式阻斷服務, 阻斷服務攻擊, Denial of Service, SYN Flood, SYN 洪水, LAND 攻擊, 淚滴攻擊, 死亡之 Ping]
category: 資安・網路安全
confidence: 已驗證
created: 2026-07-05
---

## 定義

透過大量流量或利用協定漏洞，耗盡目標的頻寬、連線或運算資源，使其無法對正常使用者提供服務的攻擊。**DoS** 由單一來源發動；**DDoS** 由多台被感染的殭屍設備分散來源同時發動，來源難以封鎖。

## 關鍵面向

- **頻寬消耗型**：
  - **UDP 洪水**：不需三向交握、持續送大量 UDP 封包。
  - **ICMP 洪水**：大量 ICMP 請求。
  - **放大攻擊**：小請求換大量回應（DNS／NTP），並偽造來源 IP，把回應灌向受害者。
- **資源消耗型**：
  - **SYN 洪水**：送大量 SYN 封包塞滿連線佇列、用假 IP 讓伺服器一直等 ACK。
  - **LAND 攻擊**：來源與目的 IP 都設成目標 IP，使主機陷入迴圈。
  - **死亡之 Ping（PoD）**：送超大 Ping 封包使早期系統當機。
  - **淚滴攻擊（Teardrop）**：製造重疊／不合法的 IP 分片、害目標重組失敗崩潰。
- **工具**：hping3、UDP Unicorn、LOIC（低軌道離子砲）、HOIC（高軌道離子砲）。
- **預防**：**SYN Cookies**（用數學編碼 TCP 序號驗證合法性、不存半開連線資源）、設 TCP 連線超時值、DDoS 緩解服務（Cloudflare、Akamai）、**流量清洗**（透過 BGP 把流量導到清洗中心過濾、多由 ISP 提供）。

## 應用場景

- **Simon 工作場景**：對外服務（公司網站、VPN 閘道）要評估 DDoS 緩解方案（雲端清洗或 ISP 服務）；內部則要防自家被入侵的 IoT／主機被組成殭屍網路對外發動攻擊（出向流量監控）。
- **一般場景**：電商、金融、遊戲等對外服務的可用性防護。

## 相關概念

- [[iot-security]]：被入侵的 IoT 常被組成 DDoS 殭屍網路
- [[man-in-the-middle]]：同屬網路層攻擊，但目的不同（阻斷 vs 攔截）
- [[ips]]：可在偵測到洪水攻擊時主動封鎖來源
- [[cyber-kill-chain]]：DDoS 多屬「行動」階段的破壞目的

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
