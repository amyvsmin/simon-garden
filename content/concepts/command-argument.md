---
title: "命令參數"
slug: command-argument
aliases: [command argument, 命令補充資訊]
category: 運算基礎
confidence: 已驗證
created: 2026-05-10
---

## 定義

補在命令後面、告訴命令要操作什麼對象的具體資訊。有些命令少了必要的 argument 就無法完成（如 `mkdir` 沒給目錄名會報錯），有些命令不接也能跑（如 `ls` 預設列出目前目錄）。例：`echo "Hello"` 中的 `"Hello"` 是 echo 的 argument。一個命令可接 0~多個 argument。跟 [[command-options]]（修改命令行為的 flag）成對。

## 關鍵面向

- **必要性**：有些命令必要（如 `mkdir DIR`）、有些可選（如 `ls` 可不接）
- **多個 argument**：用空格分隔（如 `cp source dest`）
- **vs option**：argument = 命令操作的對象；option = 命令行為的修飾
- **shell quoting**：含空格／特殊字元的 argument 要用引號（`echo "hello world"`）

## 應用場景

- **Simon 工作場景**：寫 shell script 時、`$1`、`$2` 等 positional parameter 取用 argument；命令行內互動時為大宗
- **資安 IR**：`grep PATTERN FILE` 的 PATTERN 必填；FILE 可省略，省略時 grep 改讀標準輸入（如 `cat auth.log | grep Failed`）

## 相關概念

- [[command-options]]：成對概念
- [[linux-command]]：argument 是 command 結構的一部分
- [[linux-filter-commands]]：grep / find 等都重度使用 argument

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/2-linux-commands-via-the-bash-shell|Course 4 Module 3 Section 1 Leaf 2 Linux commands via the Bash shell]]
