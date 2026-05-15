---
name: Linux Shell
aliases: [linux shell, shell, shell 殼層, 命令列介面]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

使用者跟 Linux 作業系統溝通的程式介面、接收命令、解譯後傳給 [[linux-kernel]] 執行、回傳結果。多種 shell 並存（[[bash-shell]] / zsh / fish / dash 等）、bash 是大多 distro 預設。Shell 是 [[linux-architecture]] 五層之一。

## 關鍵面向

- **角色**：使用者跟 kernel 之間的「翻譯者」
- **多種 shell**：bash（預設）/ zsh（Mac 預設）/ fish（互動友善）/ dash（POSIX 嚴格）
- **互動 vs 腳本**：互動式 = 終端互動；腳本式 = `.sh` 檔執行
- **shell 跟 kernel 關係**：shell 在 user space、kernel 在 kernel space、靠 system call 溝通

## 應用場景

- **Simon 工作場景**：SSH 進公司 Linux server 第一個碰到的就是 shell；自動化都靠 shell scripting
- **資安實務**：shell access 是 root 等同——拿到 shell = 拿到主機

## 相關概念

- [[bash-shell]]：最常見的 shell 實作
- [[linux-command]]：shell 解譯的對象
- [[linux-architecture]]：shell 是 5 層架構之一
- [[stdin-stdout-stderr]]：shell 的 I/O 模型

## 來源

- Course 4 Module 2 Section 3 The shell
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/2-linux-commands-via-the-bash-shell|Course 4 Module 3 Section 1 Leaf 2 Linux commands via the Bash shell]]
