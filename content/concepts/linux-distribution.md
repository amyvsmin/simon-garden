---
name: Linux 發行版
aliases: [linux distribution, distro, Linux distro, ubuntu, debian, kali, parrot, red hat, RHEL, CentOS, AlmaLinux]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

把 [[linux-kernel]] + GNU 工具 + [[package-manager]] + 預裝軟體打包成可開機可用的完整 OS。基於不同 distro 家族（Debian / Red Hat / Slackware）演化、各家適合不同用途。Linux 不是「一個 OS」、是「一群基於同 kernel 的 OS」。

# 關鍵面向

- **三大家族**：
  - Debian 系：Ubuntu / Kali / Parrot OS（apt + dpkg）
  - Red Hat 系：RHEL / CentOS / Fedora / AlmaLinux / Rocky（dnf/yum + rpm）
  - Slackware 系（少數）
- **資安專用**：Kali Linux（攻擊測試）/ Parrot OS（攻擊+隱私）/ SIFT（forensics）
- **企業選擇**：RHEL（付費 + 支援）/ AlmaLinux/Rocky（CentOS 替代品、免費）/ Ubuntu LTS
- **CentOS 大事件**：2020 IBM 把 CentOS 改 Stream / AlmaLinux + Rocky 接手

# 應用場景

- **Simon 工作場景**：公司有 RHEL（付費支援）+ Ubuntu（一般 server）、要熟兩家 package manager
- **資安實務**：紅隊 / pentester 用 Kali、藍隊 server 用 RHEL/Ubuntu LTS

# 相關概念

- [[linux-kernel]]：所有 distro 共用的核心
- [[package-manager]]：每個 distro 家族有對應的 manager
- [[linux-architecture]]：distro 是 5 層架構的完整實作

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-2-the-linux-operating-system/section-2-linux-distributions/1-linux-distributions|Course 4 Module 2 Section 2 Linux distributions]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-2-the-linux-operating-system/section-2-linux-distributions/3-more-linux-distributions|Course 4 Module 2 Section 2 More Linux distributions]]
