---
name: 命令選項
aliases: [options, command options, flags, 旗標, 命令旗標]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

修改命令行為的輸入、通常以 `-` 開頭（短選項如 `-l`）或 `--` 開頭（長選項如 `--long`）。例：`ls -l` 中的 `-l` 是 option。跟 [[command-argument]]（命令的操作對象）成對。

# 關鍵面向

- **短 vs 長**：`-l` vs `--long`、長版可讀性高、短版打字快
- **多個短選項可連寫**：`ls -la` 等於 `ls -l -a`
- **case sensitive**：`-a` vs `-A` 通常是不同 option
- **常見坑**：`usermod -G` 不加 `-a` 會清掉舊 secondary groups

# 應用場景

- **Simon 工作場景**：`tail -f`（追加 log）/ `cp -p`（保留 metadata、IR 收 evidence 用）/ `chmod -R`（遞迴）/ `rm -rf`（高風險）
- **可怕案例**：`-rf` flag 讓 rm 變遞迴強制刪、是 Linux 災難主因

# 相關概念

- [[command-argument]]：成對概念
- [[linux-command]]：option 是 command 結構的一部分
- [[linux-filter-commands]]：find 跟 grep 大量使用 option

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-2-manage-file-content-in-bash/2-filter-content-in-linux|Course 4 Module 3 Section 2 Leaf 2 Filter content in Linux]]
