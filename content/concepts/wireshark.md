---
title: "Wireshark"
slug: wireshark
aliases: [Wireshark, 圖形化封包分析器, GUI packet analyzer, 圖形介面封包嗅探器]
category: 資安
confidence: 待驗證
created: 2026-06-07
query-count: 0
---

## 定義
開源的圖形介面（GUI）[[network-protocol-analyzer]]，把擷取到的封包以清單視覺化、加顏色標示，支援逐層展開封包與 follow stream，適合互動式的深度封包分析。

## 關鍵面向
- **vs [[tcpdump]]**：Wireshark 是 GUI、跨平台（含 Windows）、需另外安裝、體積較大、對新手較友善；tcpdump 是 CLI、多預裝、輕量
- **過濾**：capture filter（BPF）＋強大的 display filter（如 `ip.addr ==`、`tcp contains "..."`），display filter 是它相對 tcpdump 的關鍵優勢
- **與 tcpdump 的共同點**：都是 packet sniffer、都免費開源（Wireshark 為 GPL 授權）、共用 libpcap/pcap 檔格式、抓即時流量都需 root／`sudo`、都支援過濾
- **pcap 互通**：tcpdump `-w` 抓的檔可直接拿 Wireshark 開，不需轉檔，支撐「現場抓、回去看」的分工

## 應用場景
- **Simon 工作場景**：工作站端細看從機房 server 帶回的 [[packet-capture]]（用 display filter + follow stream 逐層分析可疑連線）
- **一般場景**：封包深度分析、教學與資安分析師面試常見工具

## 相關概念
- [[network-protocol-analyzer]]：Wireshark 是其 GUI 實作
- [[tcpdump]]：CLI 對照、共用 pcap 格式
- [[packet-capture]]：Wireshark 開啟分析的素材

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/7-activity-research-network-protocol-analyzers|Course 6 Module 2 Section 3 Leaf 7 Activity Research network protocol analyzers]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-2-capture-and-view-network-traffic/1-packets-and-packet-captures|Course 6 Module 2 Section 2 Leaf 1 Packets and packet captures]]
