---
name: Linux 過濾命令
aliases: [linux filter commands, grep, pipe, find, grep-command, pipe-operator, find-command, command-chaining, command-pipeline, wildcard-asterisk, mtime-option, ioc-search 工具集]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

把海量資料縮小到目標子集的命令工具——`grep` 搜檔內字串 / `|` pipe 串接命令 / `find` 找符合條件的檔／目錄。是資安分析師日常 80% 工作的工具集、跟 [[filtering-concept]] 對應的具體實作。

# 核心命令

## grep（搜檔內）

| 用法 | 例子 |
|---|---|
| 搜字串 | `grep error /var/log/messages` |
| 大小寫不敏感 | `grep -i ERROR log.txt` |
| 遞迴搜目錄 | `grep -r "TODO" /var/www/` |
| 配 pipe | `ls /tmp \| grep cache` |
| 計次 | `grep -c "Failed" auth.log` |

## pipe `|`（串命令）

把左邊的 stdout 接成右邊的 stdin。例：
- `ls -l \| grep "^d"`（只看目錄）
- `cat file \| grep PATTERN \| wc -l`（算符合次數）
- `ps aux \| grep nginx`（看 nginx process）
- `tail -f auth.log \| grep "Failed"`（即時追失敗登入）

## find（搜檔／目錄）

| Option | 用途 | 例子 |
|---|---|---|
| `-name "*X*"` | 大小寫敏感名稱搜 | `find . -name "*.log"` |
| `-iname "*X*"` | 不敏感 | `find . -iname "*LOG*"` |
| `-mtime -N` | N 天內被改 | `find / -mtime -1`（IR 第一招） |
| `-mtime +N` | N 天前 | `find /tmp -mtime +30` |
| `-mmin -N` | N 分鐘內 | `find / -mmin -30` |
| `-perm -o+w` | world-writable | `find / -perm -o+w` |
| `-type f` / `-type d` | 只檔 / 只目錄 | `find . -type d` |

# 關鍵面向

- **wildcards `*`**：0 或多個字元、要加雙引號避免 bash 提前展開
- **資安實務組合**：`find / -mtime -1` 找新檔 + `grep` 找 IOC 字串 = IR 兩件套
- **跨命令**：grep + pipe + find 三者串聯威力遠大於各自獨立

# 應用場景

- **Simon 工作場景**：
  - `grep "Failed password" /var/log/auth.log` SSH brute force 偵測
  - `find / -mtime -1 -type f 2>/dev/null` IR 接 server 第一招
  - `find /var/www -name "*.php" -exec grep -l "eval(base64" {} \;` 找 webshell
- **IR / forensics**：grep + find 是事件調查的核心工具

# 相關概念

- [[filtering-concept]]：filter 在 Linux 的命令實作
- [[ioc-search]]：grep + find 結合的具體應用
- [[stdin-stdout-stderr]]：pipe 的底層機制

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/1-find-what-you-need-with-linux|Course 4 Module 3 Section 2 Leaf 1 Find what you need with Linux]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/2-filter-content-in-linux|Course 4 Module 3 Section 2 Leaf 2 Filter content in Linux]]
