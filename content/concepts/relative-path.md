---
name: 相對路徑
aliases: [relative path, relative file path, 相對位置, 相對檔案路徑]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

從當前 working directory 算起的路徑、不以 `/` 開頭。例：`projects` 或 `./projects` 或 `../projects`。常用三個捷徑：`.`（當前目錄）/ `..`（上層）/ `~`（當前 user 家目錄）。跟 [[absolute-path]] 成對。

## 關鍵面向

- **依賴當前位置**：在不同 cwd 跑同一條相對路徑、可能指到不同檔案
- **三個捷徑**：`.` 當前 / `..` 上層 / `~` 家目錄
- **適用情境**：互動式 shell、同層切換、簡短易讀
- **資安提醒**：script 用相對路徑會被 cwd 影響、可能被攻擊者誘導執行錯誤檔（path injection）

## 應用場景

- **Simon 工作場景**：互動式 shell 切目錄都用相對（`cd ..`、`cd subdir`）、寫 script 才改絕對
- **公司 server**：log 整理 `cd /var/log && head -n 50 messages` 混用絕對 + 相對

## 相關概念

- [[absolute-path]]：成對概念
- [[linux-navigation-commands]]：操作工具
- [[linux-filesystem-hierarchy]]：相對路徑在 FHS 內表達相對位置

## 尚未解決的疑問

- script 內混用相對／絕對的最佳實踐（`cd $(dirname "$0")` 的安全性）

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-1-navigate-the-linux-file-system/4-navigate-linux-and-read-file-content|Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content]]
