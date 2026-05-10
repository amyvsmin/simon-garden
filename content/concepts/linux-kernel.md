---
name: Linux 核心
aliases: [linux kernel, kernel, Linux 內核]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 作業系統的核心元件、管理硬體（CPU / 記憶體 / 設備）、process 排程、記憶體配置、I/O 系統呼叫。是 Linus Torvalds 1991 年開始的 project、Linux 名稱來自 kernel。Kernel 在 [[linux-architecture]] 的最底層、跟 hardware 直接互動。

# 關鍵面向

- **責任**：process / memory / device driver / file system / 網路堆疊
- **歷史**：1991 Torvalds 在芬蘭 University of Helsinki 開始
- **vs GNU**：Linus 寫 kernel、GNU project（Stallman）寫 kernel 之外的 OS 元件、合稱 GNU/Linux
- **資安重點**：kernel exploit（如 dirty pipe）一旦得手 = 完全控制系統

# 應用場景

- **Simon 工作場景**：`uname -r` 看 kernel 版本、套 security patch 主要就是更新 kernel；CVE 對 kernel 的影響評估
- **IR**：rootkit 在 kernel 層運作、傳統 antivirus 抓不到

# 相關概念

- [[linux-architecture]]：kernel 是其中最底層
- [[linux-shell]]：跟 kernel 透過 system call 溝通
- [[package-manager]]：管理 kernel 跟其他套件的工具

# 來源

- Course 4 Module 2 Section 1 Linux architecture explained
