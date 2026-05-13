---
name: 絕對路徑
aliases: [absolute path, absolute file path, 完整路徑, full path]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

從 root（`/`）開始、一路寫到目標檔／目錄的完整路徑。例：`/home/analyst/projects`。每個 `/` 表示「往下分支一層」。跟 [[relative-path]]（從當前目錄算起）成對。

# 關鍵面向

- **從 `/` 開始**：第一個字元就是 `/`
- **不依賴當前位置**：不論 user 在哪、絕對路徑指向同一個位置
- **適用情境**：script 內、跨層切換、要明確避免歧義時
- **代表性**：絕對路徑等於檔案的「身分證號」

# 應用場景

- **Simon 工作場景**：寫 cron job / systemd service / backup script 時用絕對路徑、避免 cwd 變動造成執行錯誤；公司 SOP 寫「設定檔在 `/etc/postgresql/14/main/postgresql.conf`」用絕對路徑指明
- **vs 相對路徑**：互動式 shell 用相對快、自動化用絕對穩

# 相關概念

- [[relative-path]]：成對概念
- [[root-directory]]：絕對路徑的起點
- [[linux-filesystem-hierarchy]]：絕對路徑表達 FHS 內位置
- [[linux-navigation-commands]]：用 cd / pwd 操作

# 尚未解決的疑問

- symlink 對絕對路徑解析的影響（`pwd -P` vs `pwd -L`）

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/3-core-commands-for-navigation-and-reading-files|Course 4 Module 3 Section 1 Leaf 3 Core commands for navigation]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/4-navigate-linux-and-read-file-content|Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content]]
