---
title: "tcpdump"
slug: tcpdump
aliases: [tcpdump, 命令列封包分析器, command-line packet analyzer, CLI packet sniffer]
category: 資安
confidence: 待驗證
created: 2026-06-07
query-count: 0
---

## 定義
命令列型的 [[network-protocol-analyzer]]（封包嗅探器），用來擷取與檢視網路通訊。多數 Linux 預裝、類 Unix 系統（含 macOS）可安裝。分析師拿它做的事從排查網路問題到辨識惡意活動都有。

## 關鍵面向
- **語法骨架**：`sudo tcpdump [-i interface] [option(s)] [expression(s)]`；擷取即時流量需 root／`sudo`
- **常用選項**：`-i`（介面，`-i any` 抓全部）、`-D`（列介面）、`-w`（寫 p-cap）、`-r`（讀 p-cap）、`-v`/`-vv`/`-vvv`（詳細度）、`-c`（限制封包數）、`-n`/`-nn`（不解析主機名／連 port 也不解析）
- **選項規則**：大小寫敏感（`-w` ≠ `-W`）、短選項空白可省（`-c 3` ≡ `-c3`）、可合併（`-vn`）但接參數的選項（如 `-c 1`、`-r file`）不能再黏其他選項
- **expressions**：用協定、布林運算子（and/or/not）、括號分組過濾（[[filtering-concept]]），如 `'ip and (port 80 or port 443)'`，引號確保整串被執行
- **`-n` 的 OPSEC 理由**：一是避免不準的 port→服務對應（port 80 不必然是 HTTP），二是避免 [[reverse-dns-lookup]] 反查驚動攻擊者
- **輸出判讀**：每封包印一行、行首是 timestamp，主要標記 timestamp → source IP/port → destination IP/port，其餘為 TCP 連線細節

## 應用場景
- **Simon 工作場景**：無圖形介面的 Linux server 排查可疑連線主力，如 `sudo tcpdump -i any -n 'host <可疑IP>' -w case.pcap`，`-n` 既避免誤導也避免反查驚動對方；存 p-cap 帶回用 Wireshark 細看
- **一般場景**：CCNA／Network+／SSCP／Blue Team 高頻實務

## 相關概念
- [[network-protocol-analyzer]]：tcpdump 是其 CLI 實作
- [[wireshark]]：GUI 對照、共用 pcap 格式
- [[packet-capture]]：tcpdump 的產出
- [[filtering-concept]]：expression 過濾的本質

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/1-packet-captures-with-tcpdump|Course 6 Module 2 Section 3 Leaf 1 Packet captures with tcpdump]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-2-network-monitoring-and-analysis/section-3-packet-inspection/2-overview-of-tcpdump|Course 6 Module 2 Section 3 Leaf 2 Overview of tcpdump]]
