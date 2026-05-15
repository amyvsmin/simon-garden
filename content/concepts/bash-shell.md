---
name: Bash
aliases: [bash, Bash shell, Bourne Again Shell, 預設 shell]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

Bourne Again Shell、多數 Linux distro 預設的 [[linux-shell]]。是 Bourne Shell（sh）的「重生版」、加入命令歷史、tab completion、scripting 等現代功能。Bash prompt 預設用 `$`（一般 user）或 `#`（root）。

## 關鍵面向

- **預設 shell**：Ubuntu / Debian / RHEL / CentOS 等多數 distro 預設
- **核心命令跨 shell 通用**：[[linux-navigation-commands]] / [[linux-file-mgmt-commands]] 在 zsh / fish 等其他 shell 也通用
- **prompt `$` vs `#`**：看到 `#` 表示在 root 身份、要警覺
- **scripting**：`.sh` 檔通常以 `#!/bin/bash` 開頭、用 bash 語法

## 應用場景

- **Simon 工作場景**：公司 Linux server 預設 bash、日常 ssh 進去就在 bash 環境
- **替代品**：zsh（Mac 預設）/ fish（互動友善）/ dash（Ubuntu /bin/sh）；scripting 跨 shell 相容性是考量

## 相關概念

- [[linux-shell]]：bash 是其中一種具體實作
- [[linux-command]]：bash 解譯的對象
- [[stdin-stdout-stderr]]：bash 的 I/O 模型

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/2-linux-commands-via-the-bash-shell|Course 4 Module 3 Section 1 Leaf 2 Linux commands via the Bash shell]]
- Course 4 Module 2 Section 3 The shell
