---
name: 任意可寫檔
aliases: [world writable file, world-writable, chmod 777 災難, 任意可寫]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

other（系統上任何 user）有 write 權限的檔——permission string 第 9 字元是 `w`、numeric 含 `2/3/6/7` 在 other 位置。最常見錯誤是 `chmod 777` 圖方便、變成嚴重資安風險：任何 user 都能改、攻擊者進系統後可植入後門。

# 為什麼是嚴重風險

- **任意 user 可改**：包括低權限服務帳號、攻擊者進系統後第一步往往去找 world-writable 檔
- **後門落地點**：cron job / systemd unit / web root 的設定檔變 world-writable = 提權通道
- **違反 [[principle-of-least-privilege]]**：給 other 寫入 = 給整個系統寫入

# 找出 world-writable 檔（資安掃描）

```bash
# 全系統掃 world-writable 檔
find / -perm -o+w -type f 2>/dev/null | head -50

# 排除 /proc 跟 /sys（這些是 kernel 提供的虛擬檔）
find / -perm -o+w -type f \
  -not -path "/proc/*" \
  -not -path "/sys/*" \
  2>/dev/null

# 找 root-owned 且 world-writable（雙倍風險）
find / -user root -perm -o+w 2>/dev/null

# 找 world-writable 目錄（更危險、可建檔）
find / -perm -o+w -type d 2>/dev/null
```

# 例外（合法 world-writable）

- **`/tmp`**：設計上 world-writable + sticky bit、見 [[tmp-attack-surface]]
- **`/var/tmp`**、**`/var/spool/mail`**：類似情況
- **lock file 目錄**：某些服務需要

# 修復

```bash
# 拿掉 other 的 w
chmod o-w FILE

# 或設成標準 644
chmod 644 FILE

# 大規模修復（謹慎、先 dry-run）
find /var/www -perm -o+w -type f -exec chmod o-w {} \;
```

# 災難案例

```bash
chmod -R 777 /var/www              # 整個 web root 開放
chmod 777 /etc/sudoers             # sudoers 變 world-writable = 提權門票
chmod 777 /home                    # 任何 user 可改任何 user 的檔
```

**鐵律**：聽到「chmod 777」立刻警覺、99% 是設計錯誤。

# 應用場景

- **Simon 工作場景**：公司每季 ISO 27001 audit 跑 world-writable 掃描；新 server 上線前的 hardening checklist 必含
- **IR**：剛接到入侵 server、`find / -perm -o+w` 是必跑指令

# 相關概念

- [[file-permissions]]：world-writable 是其常見錯誤
- [[linux-permission-commands]]：chmod 是修復工具
- [[tmp-attack-surface]]：唯一合法 world-writable 案例
- [[principle-of-least-privilege]]：world-writable 是違反此原則的典型

# 來源

- Course 4 Module 3 Section 3 Leaf 1 File permissions and ownership
