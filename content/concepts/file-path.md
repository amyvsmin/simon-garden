---
name: 檔案路徑
aliases: [file path, path, 路徑]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

檔案／目錄在檔案系統內的位置表達。Linux 用 `/` 分隔各層級、跟 Windows 的 `\` 不同。分兩種：[[absolute-path]]（從 root `/` 開始）跟 [[relative-path]]（從當前目錄算起）。

# 關鍵面向

- **路徑分隔符**：Linux 用 `/`、Windows 用 `\`
- **絕對 vs 相對**：寫 script 用絕對、互動用相對
- **特殊路徑**：`.`（當前）/ `..`（上層）/ `~`（家目錄）/ `-`（cd 上一個目錄）
- **資安**：path injection（`../../etc/passwd`）是常見 web 漏洞

# 應用場景

- **Simon 工作場景**：每個檔案操作都需要路徑、`pwd` 印當前路徑、`ls PATH` 看 PATH 內容
- **跨平台**：寫腳本要注意 Windows / Linux 路徑差異

# 相關概念

- [[absolute-path]]：路徑的一種
- [[relative-path]]：路徑的另一種
- [[linux-filesystem-hierarchy]]：路徑的容器
- [[linux-navigation-commands]]：操作路徑的命令

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/4-navigate-linux-and-read-file-content|Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content]]
