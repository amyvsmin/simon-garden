---
name: 命令參數
aliases: [argument, command argument, 參數, 命令補充資訊]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

命令所需的具體資訊、補在命令後面、缺了命令不完整。例：`echo "Hello"` 中的 `"Hello"` 是 echo 的 argument。一個命令可接 0~多個 argument。跟 [[command-options]]（修改命令行為的 flag）成對。

# 關鍵面向

- **必要性**：有些命令必要（如 `mkdir DIR`）、有些可選（如 `ls` 可不接）
- **多個 argument**：用空格分隔（如 `cp source dest`）
- **vs option**：argument = 命令操作的對象；option = 命令行為的修飾
- **shell quoting**：含空格／特殊字元的 argument 要用引號（`echo "hello world"`）

# 應用場景

- **Simon 工作場景**：寫 shell script 時、`$1`、`$2` 等 positional parameter 取用 argument；命令行內互動時為大宗
- **資安 IR**：`grep PATTERN FILE` 兩個 argument 缺一不可

# 相關概念

- [[command-options]]：成對概念
- [[linux-command]]：argument 是 command 結構的一部分
- [[linux-filter-commands]]：grep / find 等都重度使用 argument

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/2-linux-commands-via-the-bash-shell|Course 4 Module 3 Section 1 Leaf 2 Linux commands via the Bash shell]]
