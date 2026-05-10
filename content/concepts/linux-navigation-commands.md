---
name: Linux 導覽命令
aliases: [linux navigation commands, pwd, ls, cd, whoami, pwd-command, ls-command, cd-command, whoami-command, ls-long-format, ls-all-flag, ls-la-combined]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

在 [[linux-filesystem-hierarchy]] 內走動的核心命令——`pwd`（我在哪）/ `ls`（這裡有什麼）/ `cd`（去哪裡）/ `whoami`（我是誰）。資安 IR 進系統第一招就是這四個。

# 關鍵面向

- **pwd**：印當前 working directory 的 [[absolute-path]]、無 argument
- **ls**：列檔／子目錄、`-l` long format / `-a` 含 hidden / `-la` 兩者合併（IR 第一招）
- **cd**：切目錄、可絕對可相對、`cd ..` 上層 / `cd ~` 家 / `cd -` 上一個目錄
- **whoami**：印當前 user、IR 接別人 server 第一個確認自己是誰

# 操作節奏（肌肉記憶）

```
SSH 進系統
↓
whoami     # 我是誰
pwd        # 我在哪
ls -la     # 這裡有什麼（含 hidden）
↓
cd target  # 去目標
pwd        # 確認到了
ls -la     # 看現場
```

# 應用場景

- **Simon 工作場景**：每天 SSH 進公司 server 都跑這 4 個、是基礎中的基礎
- **IR / forensics**：接到可疑 server、`whoami && pwd && ls -la $HOME && ls -la /tmp` 是 baseline 動作

# 相關概念

- [[linux-filesystem-hierarchy]]：navigation 的容器
- [[absolute-path]] / [[relative-path]]：cd 的 argument 兩種形式
- [[linux-read-file-commands]]：navigate 到位後配套用

# 來源

- Course 4 Module 3 Section 1 Leaf 3 Core commands for navigation
- Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content
