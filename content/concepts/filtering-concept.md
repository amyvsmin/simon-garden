---
name: 過濾
aliases: [filtering, filter, 資料過濾, 篩選]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

選出符合特定條件的資料子集。資安分析師日常工作的核心動作——從海量 log / 檔案 / 報表中找出符合 IOC 條件的部分。Linux 用 [[linux-filter-commands]]（grep / pipe / find）落實、SQL 用 WHERE 落實、後續課程會學。

# 關鍵面向

- **資安日常**：80% 的分析工作是 filter（找含 error 的 log 行 / 找最近被改的檔 / 找含特定字的 user）
- **三大工具**：grep（字串）/ pipe（命令串接）/ find（檔/目錄屬性）
- **跨領域共通**：Linux grep / SQL WHERE / Python filter / Splunk SPL 本質一樣
- **vs 搜尋**：filter 是「從給定集合過濾」、search 是「找特定目標」

# 應用場景

- **Simon 工作場景**：`grep "Failed password" /var/log/auth.log` 找 SSH brute force / `find / -mtime -1` 找 24h 內被改檔
- **IR / forensics**：從 GB 級 log 中過濾出嫌疑事件、是 IR 第一波調查必修

# 相關概念

- [[linux-filter-commands]]：filter 在 Linux 的命令工具
- [[ioc-search]]：filter 的具體應用（找 IOC）

# 來源

- Course 4 Module 3 Section 2 Leaf 1 Find what you need with Linux
- Course 4 Module 3 Section 2 Leaf 2 Filter content in Linux
