---
name: 套件管理工具
aliases: [package manager, apt, yum, dnf, dpkg, rpm, 套件管理器]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 套件（軟體）安裝、更新、移除、依賴解析的工具。分高階（apt / dnf / yum、面向使用者）跟低階（dpkg / rpm、面向 distro 開發者）。不同 distro 家族用不同工具：Debian 系（Ubuntu）用 apt+dpkg、Red Hat 系（RHEL/CentOS）用 dnf/yum+rpm。

# 關鍵面向

- **依賴解析**：自動解決 A 套件需要 B、B 需要 C 的安裝順序
- **倉庫（repo）**：套件來源、預設用 distro 官方、可加第三方（PPA / EPEL）
- **資安角色**：套件 + 補丁的主要管道、CVE 修補靠 package manager update
- **常見命令**：`apt update && apt upgrade` / `dnf install nginx` / `apt list --installed`

# 應用場景

- **Simon 工作場景**：公司 RHEL server 用 dnf 管套件、Ubuntu server 用 apt；ISO 27001 要求 patch management 直接靠 package manager
- **vulnerability**：[[packagekit]] 漏洞（CVE-2026-41651）就是 package manager 服務的本機提權

# 相關概念

- [[linux-distribution]]：每個 distro 有對應的 package manager
- [[packagekit]]：跨 distro 抽象化的 package manager 服務（已有 concept）
- [[linux-architecture]]：package manager 在 application 層

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-2-the-linux-operating-system/section-2-linux-distributions/1-linux-distributions|Course 4 Module 2 Section 2 Linux distributions]]
