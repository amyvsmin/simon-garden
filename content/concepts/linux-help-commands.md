---
name: Linux 求助命令
aliases: [linux help commands, man, whatis, apropos, man-pages, whatis-command, apropos-command, builtin-help-vs-online, linux-man-pages]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

Linux 內建的求助命令三件套——`man`（完整手冊）/ `whatis`（一行簡介）/ `apropos`（反向找命令）。離線可用、權威、版本準確。比 Google 快、且在 air-gapped 隔離環境是唯一管道。

## 三件套使用時機

| 我的狀態 | 該用哪個 |
|---|---|
| 知道命令、想看完整文件 | `man COMMAND` |
| 知道命令、只要一行提醒 | `whatis COMMAND` |
| 不知道命令、有 keyword | `apropos -a STR1 STR2` |

## 核心命令

```bash
## 完整手冊（內建用 less 顯示）
man ls
man 5 sshd_config         # 指定 section（5=設定檔）
man hier                  # 看 FHS 目錄階層說明

## 一行簡介
whatis tail
whatis tail head cat       # 多個一次

## 反向找命令
apropos password
apropos -a change password   # 多 keyword AND
man -k password              # 等同 apropos
man -f tail                  # 等同 whatis

## 命令快速 usage（不必開 man）
ls --help
useradd --help

## 找命令位置
whereis ls
which ls
```

## man 9 個 sections

| 章節 | 內容 | 範例 |
|---|---|---|
| 1 | 一般用戶命令 | `man 1 ls` |
| 5 | 設定檔格式 | `man 5 sshd_config` |
| 8 | 系統管理員命令 | `man 8 useradd` |

常見坑：`passwd` 同名命令（1）跟設定檔（5）並存、預設給 1、要看 5 用 `man 5 passwd`。

## less 翻頁鍵控（man 內建）

`space`下一頁 / `b`上一頁 / `/keyword`往下搜 / `n`下個結果 / `q`離開

## 關鍵面向

- **離線可用**：air-gapped 環境唯一答案來源
- **跟 binary 同版本**：比 Google 抓的版本準
- **進階替代品**：`tldr`（簡化版 man、要先 `apt install`）/ `info`（GNU 風格）/ `--help`（短版）

## 應用場景

- **Simon 工作場景**：公司 RHEL server 不上網時、man 是唯一管道；新環境的命令第一招 `man COMMAND` 確認版本可用
- **養成習慣**：先 man 再 Google、又快又準

## 相關概念

- [[bash-shell]]：man / less 跑在 shell 內
- [[linux-command]]：man 文件每個命令都有

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-4-get-help-in-linux/3-man-pages-within-the-shell|Course 4 Module 3 Section 4 Leaf 3 Man pages within the shell]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-4-get-help-in-linux/4-linux-resources|Course 4 Module 3 Section 4 Leaf 4 Linux resources]]
