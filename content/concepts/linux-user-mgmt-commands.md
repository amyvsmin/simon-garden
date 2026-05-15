---
name: Linux 用戶管理命令
aliases: [linux user management commands, sudo, useradd, usermod, userdel, passwd, groupadd, groupdel, sudo-command, useradd-command, usermod-command, userdel-command, groupdel-command, sudoers-file, user-lifecycle, useradd-options]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

完整 user lifecycle 的命令工具集——sudo 提權 / useradd 建 / passwd 設密 / usermod 改 / userdel 刪 / groupadd / groupdel。對應 ISO 27001 A.9.2.x（user lifecycle）的全部要求。

## 完整 user lifecycle SOP

```bash
## === 1. 建立 ===
sudo useradd -m -s /bin/bash -g security simon
sudo passwd simon
sudo useradd -e 2026-12-31 -m contractor1   # 設到期日

## === 2. 賦權 ===
sudo usermod -aG project_x,users simon       # ⚠️ -aG 連用！
sudo chown -R simon:security /home/simon/projects/

## === 3. 修改 ===
sudo usermod -g new_group simon              # 改 primary
sudo usermod -d /new/home simon              # 改 home
sudo usermod -l new_name simon               # 改 login name

## === 4. 暫停／恢復 ===
sudo usermod -L simon                        # 軟鎖（離職）
sudo usermod -U simon                        # 解鎖

## === 5. 提權執行 ===
sudo COMMAND                                 # 暫提
sudo -l                                      # 看自己能 sudo 哪些
sudo visudo                                  # 編 sudoers（不直接編檔）

## === 6. 刪除 ===
sudo userdel simon                           # 留 home
sudo userdel -r simon                        # 連 home 一起刪
sudo groupdel simon                          # 清 useradd 自動建的同名 group
```

## ⚠️ 兩個常見坑

1. **`usermod -G` 不加 `-a`**：清掉所有舊 secondary groups。永遠寫 `-aG`
2. **userdel 留下殘留 group**：useradd 會自動建同名 group、userdel 不會清、要手動 groupdel

## sudo 設計理念

- **暫時提權**、不像直接 root login 永久暴露
- **需自己密碼**、不是 root 密碼
- **全程 log**：`/var/log/auth.log`（Debian）/ `/var/log/secure`（RHEL）
- **可細粒度控管**：sudoers 可設「user X 只能 sudo 重啟 nginx」

## 關鍵面向

- **三層管控**：sudo（提權）+ useradd/usermod（用戶）+ groupadd（群組）
- **密碼相關**：`passwd`（改密碼）/ `chage`（改有效期、`-M 90`）
- **看 user 屬性**：`id USER` / `groups USER` / `getent passwd`
- **離職建議**：先軟鎖（`-L`）、交接檔案 ownership、T+30 才 `userdel -r`

## 應用場景

- **Simon 工作場景**：
  - 新人入職、季度離職、外包合約到期帳號全靠這套
  - ISO 27001 A.9.2.1 / A.9.2.5 / A.9.2.6 落實
  - 公司 audit 季度 `getent passwd | grep -v "^_"` 列所有 user
- **IR**：被入侵後馬上看 sudo log、看攻擊者借誰的權限

## 相關概念

- [[sudo-responsibility]]：sudo 設計理念跟責任
- [[root-user]]：root 是 sudo 提權的目標
- [[soft-disable-vs-hard-delete]]：離職流程選擇
- [[principle-of-least-privilege]]：sudo 設計遵循

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/9-add-and-delete-users|Course 4 Module 3 Section 3 Leaf 9 Add and delete users]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/10-responsible-use-of-sudo|Course 4 Module 3 Section 3 Leaf 10 Responsible use of sudo]]
