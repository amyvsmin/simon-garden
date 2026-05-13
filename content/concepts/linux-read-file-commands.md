---
name: Linux 讀檔命令
aliases: [linux read file commands, cat, head, tail, less, cat-command, head-command, tail-command, less-command, tail-f]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

讀檔內容的四個核心命令。`cat` 全顯示（小檔）/ `head` 印前 N 行 / `tail` 印末 N 行（log 主力）/ `less` 互動分頁。對資安分析師來說、`tail -f` 即時追 log 是最常用的 incantation。

# 關鍵面向

| 命令 | 用途 | 適合 |
|---|---|---|
| `cat` | 全顯示 | 小檔、設定檔 |
| `head FILE` | 前 10 行（`-n N` 自訂） | peek 大檔開頭 |
| `tail FILE` | 末 10 行 | log 看最新（log 是 append-only） |
| `tail -f FILE` | 即時追加 | live log 監控 |
| `less FILE` | 互動分頁、可往回 | 大檔瀏覽、`/keyword` 搜 |

# 應用場景

- **Simon 工作場景**：
  - `tail -f /var/log/messages` — server 出問題即時看
  - `tail -f /var/log/auth.log` — SSH 登入即時監控
  - `cat /etc/ssh/sshd_config | grep "PermitRoot"` — 設定快速確認
  - `less /var/log/syslog` — 大 log 翻找
- **IR / forensics**：log 看末尾找最新事件、tail -f 配合 alert 即時調查

# 相關概念

- [[linux-navigation-commands]]：navigate 到目錄後再 read
- [[linux-filter-commands]]：cat / head / tail 常配 grep 用
- [[stdin-stdout-stderr]]：less 內建分頁器跟 stdin 概念有關

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/3-core-commands-for-navigation-and-reading-files|Course 4 Module 3 Section 1 Leaf 3 Core commands for navigation and reading files]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/4-navigate-linux-and-read-file-content|Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content]]
