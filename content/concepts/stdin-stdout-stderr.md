---
name: 標準輸入輸出
aliases: [stdin, stdout, stderr, standard input, standard output, standard error, 標準輸入, 標準輸出, 標準錯誤, file descriptor]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

Linux 每個 process 預設有的三個 I/O 通道：stdin（標準輸入、fd 0）、stdout（標準輸出、fd 1）、stderr（標準錯誤、fd 2）。stdin 預設來自鍵盤、stdout/stderr 預設印到螢幕。Pipe `|` 跟重導向 `>` `>>` 改變這些預設。

## 關鍵面向

- **三個通道**：stdin (0) / stdout (1) / stderr (2)
- **預設來源／去處**：stdin 來自鍵盤、stdout/stderr 印到螢幕
- **改變預設**：pipe `|`（左 stdout → 右 stdin）/ `>` 覆寫到檔 / `>>` 追加到檔 / `2>` 重導 stderr / `2>&1` stderr 併進 stdout
- **資安重點**：寫 script 把 stderr 也寫入 log（`command > log 2>&1`）才不會漏錯誤訊息

## 應用場景

- **Simon 工作場景**：cron job `command >> /var/log/myjob.log 2>&1` 把所有輸出 + 錯誤都寫入 log；shell pipeline `cmd1 | cmd2 | cmd3` 串接資料流
- **資安實務**：攻擊者會用 `> /dev/null 2>&1` 隱藏命令輸出、IR 看 process 命令列要留意

## 相關概念

- [[bash-shell]]：實現 I/O 模型的 shell
- [[linux-filter-commands]]：pipe 重度依賴 stdin/stdout
- [[linux-file-mgmt-commands]]：`>` `>>` 重導向是 file 管理工具的延伸

## 來源

- Course 4 Module 2 Section 3 The shell
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/1-find-what-you-need-with-linux|Course 4 Module 3 Section 2 Leaf 1 Find what you need with Linux]]
