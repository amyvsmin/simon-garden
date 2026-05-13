---
name: Linux 架構
aliases: [linux architecture, Linux 五層架構, application-os-hardware-flow, OS 分層]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 作業系統的分層架構、五層由上到下：User → Application → Shell → FHS → Kernel → Hardware。每層只跟相鄰層互動、形成清楚的責任分工。理解這個架構是 Linux 進階學習（kernel module、driver、syscall）的基礎。

# 關鍵面向

- **5 層**：User（人）/ Application（程式）/ Shell（命令列）/ FHS（檔案系統組織）/ Kernel（核心）/ Hardware（硬體）
- **Shell 角色**：[[linux-shell]] 是 user 跟 kernel 的翻譯
- **Kernel 角色**：[[linux-kernel]] 管 hardware / process / memory
- **FHS 角色**：[[linux-filesystem-hierarchy]] 組織所有資料

# 應用場景

- **Simon 工作場景**：Troubleshoot 時知道每層責任、能快速定位問題（kernel panic vs application crash 差很多）
- **資安實務**：理解攻擊者在哪一層、決定防禦策略（rootkit 在 kernel / webshell 在 application）

# 相關概念

- [[linux-kernel]]：架構的核心層
- [[linux-shell]]：架構的中介層
- [[linux-filesystem-hierarchy]]：架構的資料組織層

# 來源

- Course 4 Module 2 Section 1 All about Linux
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-2-the-linux-operating-system/section-1-all-about-linux/4-linux-architecture|Course 4 Module 2 Section 1 Linux architecture]]
