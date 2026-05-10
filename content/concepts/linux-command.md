---
name: Linux 命令
aliases: [linux command, command, Linux 指令, 指令]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

給電腦的執行指示、由 [[linux-shell]] 解譯。三段語法：`COMMAND [OPTIONS] [ARGUMENTS]`——命令名 + 修改行為的 [[command-options]] + 操作對象 [[command-argument]]。例：`ls -l /home`。Linux 一切大小寫敏感、含命令、option、檔名。

# 關鍵面向

- **三段結構**：command + options + arguments（缺一不可、order 通常固定）
- **case sensitive**：`LS` 跟 `ls` 不同
- **可組合**：用 [[stdin-stdout-stderr]] 跟 pipe 把多命令串起來
- **找命令**：[[linux-help-commands]] 的 man / whatis / apropos 三件套

# 應用場景

- **Simon 工作場景**：日常 server 維運、IR 調查、自動化 script 全靠命令組合
- **學習路徑**：50 個常用命令掌握 = Linux 入門完成

# 相關概念

- [[linux-shell]]：執行命令的環境
- [[command-argument]]：命令結構之一
- [[command-options]]：命令結構之二
- [[bash-shell]]：最常見的 shell 環境

# 來源

- Course 4 Module 3 Section 1 Leaf 2 Linux commands via the Bash shell
