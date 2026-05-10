---
name: Linux 檔案管理命令
aliases: [linux file management commands, mkdir, rmdir, touch, rm, mv, cp, mkdir-command, rmdir-command, touch-command, rm-command, mv-command, cp-command, file-management-commands, mv-rename, redirection, output-redirection, redirect-overwrite, redirect-append]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

檔案系統 CRUD 操作的核心命令——建（mkdir / touch）、刪（rmdir / rm）、搬（mv）、複（cp）、編（[[nano-editor]]）、寫（重導向 `>` `>>`）。對資安分析師而言、log 整理 / evidence 收集 / 設定備份都靠這套。

# 核心命令

| 動作 | 命令 | 例子 |
|---|---|---|
| 建目錄 | `mkdir DIR` / `mkdir -p A/B/C` | `mkdir logs` |
| 刪空目錄 | `rmdir DIR`（非空擋下） | `rmdir empty/` |
| 建空檔 | `touch FILE` | `touch tasks.txt` |
| 刪檔 | `rm FILE` / `rm -r DIR`（遞迴） | `rm old.txt` |
| 搬／改名 | `mv SRC DEST` | `mv a.txt b.txt`（改名）/ `mv f /tmp/`（搬） |
| 複製 | `cp SRC DEST` / `cp -r DIR DEST`（遞迴） / `cp -p`（保留 metadata） | `cp -p evidence.bin /backup/` |

# 重導向（寫入檔案）

| 運算子 | 用途 |
|---|---|
| `>` | 覆寫到檔（**危險**、不可救） |
| `>>` | 追加到檔尾（**安全**、寫 log 主力） |
| `2>` | 重導 stderr |
| `2>&1` | stderr 併進 stdout |

# 關鍵面向

- **`rm` 不可救**：Linux 沒資源回收筒、刪錯就完
- **`rmdir` 安全限制**：只刪空目錄、配 `rm -r` 補完整刪除流程
- **`mv` 雙用**：同層 = 改名 / 跨層 = 搬移
- **`cp -p` IR 必加**：保留 mtime / owner / permission、收 evidence 用

# 應用場景

- **Simon 工作場景**：log 歸檔（`mv old.log archive/`）、設定檔備份（`cp -p config config.bak`）、cleanup script
- **IR / forensics**：`cp -p` 保留 metadata 收 evidence、`sha256sum` 配套確保 chain of custody

# 相關概念

- [[nano-editor]]：編輯命令的延伸
- [[linux-navigation-commands]]：先 navigate 才能 manage
- [[stdin-stdout-stderr]]：重導向是 I/O 模型的一部分

# 來源

- Course 4 Module 3 Section 2 Leaf 6 Create and modify directories and files
- Course 4 Module 3 Section 2 Leaf 7 Identify Key Linux commands
