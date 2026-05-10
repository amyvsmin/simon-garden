---
name: 根目錄
aliases: [root directory, /, Linux 根目錄, 檔案系統根]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 最高層目錄、用單一斜線 `/` 表示。所有 subdirectory 從這裡分支。注意跟 root user 的 home directory `/root` 不同——`/` 是檔案系統頂、`/root` 是 superuser 的家目錄。

# 關鍵面向

- **單一斜線 `/`**：絕對路徑都從這開始
- **vs `/root`**：兩個不同概念、容易混淆
- **唯一性**：每台 Linux 只有一個 `/`、不像 Windows 有 C:/D:/E:
- **資安重點**：`/` 的 ownership 是 root:root、權限 755

# 應用場景

- **Simon 工作場景**：`cd /`、`ls /` 看頂層結構、`du -sh /*` 看各分支磁碟使用
- **災難警告**：`rm -rf /` 是自殺指令（現代 distro 會擋、要加 `--no-preserve-root` 才執行）

# 相關概念

- [[linux-filesystem-hierarchy]]：root directory 是 FHS 的頂
- [[absolute-path]]：絕對路徑的起點
- [[root-user]]：另一個 root 概念、容易混淆

# 來源

- Course 4 Module 3 Section 1 Leaf 3 Core commands for navigation
