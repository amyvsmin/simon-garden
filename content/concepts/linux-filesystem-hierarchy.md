---
name: 檔案系統階層標準
aliases: [Filesystem Hierarchy Standard, FHS, filesystem-hierarchy-standard, Linux 目錄結構, 檔案系統樹]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 組織資料的元件、規範所有 distro 統一的目錄結構。樹狀階層、從 root（`/`）長出來、所有 subdirectory 從 root 分支。萬物皆檔——任何 Linux 上做的事都是某個目錄底下的某個檔案。

# 關鍵面向

- **root `/` 是頂**：所有路徑追溯到底都是 `/`
- **5 個常見標準目錄**：`/home`（user 家）/ `/bin`（執行檔）/ `/etc`（設定檔）/ `/tmp`（暫存、人人可寫）/ `/mnt`（外接掛載）
- **絕對 vs 相對路徑**：[[absolute-path]] 從 `/` 開始、[[relative-path]] 從當前目錄算起
- **資安重點**：`/tmp` 是 [[tmp-attack-surface]]、`/etc` 機敏、`/var/log` 是 audit log 主場
- **查階層說明**：`man hier` 看完整定義

# 應用場景

- **Simon 工作場景**：公司 Linux server troubleshoot 第一招就是 `cd /var/log` + `tail -f`、`ls -la /etc` 查設定異常、`cat /etc/passwd` 看 user
- **IR / forensics**：FHS 知識決定能不能快速定位可疑活動位置

# 相關概念

- [[root-directory]]：FHS 的最頂層
- [[absolute-path]]：FHS 內定位用法
- [[relative-path]]：另一種定位用法
- [[linux-navigation-commands]]：在 FHS 內走動的命令
- [[tmp-attack-surface]]：FHS 內具體資安風險案例

# 尚未解決的疑問

- 不同 distro（RHEL vs Debian）對 FHS 的微小差異（如 `/run` vs `/var/run`）

# 來源

- Course 4 Module 3 Section 1 Leaf 3 Core commands for navigation
- Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content
