---
name: sudo 責任使用
aliases: [sudo responsibility, sudo design, sudo elevated privileges, sudo-elevated-privileges, sudo-command, sudoers-file, root-login-bad-practice]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

sudo（super-user-do）的設計理念——以「暫時提權」取代「直接 root login」、解決三大問題：資安攻擊面 / typo 災難 / 無 accountability。每次 sudo 用自己密碼、有完整 log、可細粒度控管。但 sudo 是特權、要珍惜（hotel master key 類比）。

# 為什麼不該直接 root login

| 問題 | 解釋 | sudo 解法 |
|---|---|---|
| **資安** | 攻擊者最先試 root 帳號 | sudo 只在需要時短暫提權 |
| **typo 災難** | 一個錯字（`rm -rf / var/log/*`）毀整個系統 | sudo 至少有「啊我用了 sudo」的心理煞車 |
| **無 accountability** | 多人都用 root、出事不知是誰 | sudo 每條命令進 log、誰跑什麼一清二楚 |

# sudoers 設計

`/etc/sudoers` 設定誰能 sudo、能跑什麼。**永遠用 `visudo` 編、不直接編檔**（visudo 會 syntax check）。

```
# sudoers 範例
simon ALL=(ALL:ALL) ALL                          # simon 可 sudo 跑任何命令
webuser ALL=NOPASSWD: /bin/systemctl restart nginx   # webuser 不必密碼能重啟 nginx
%wheel ALL=(ALL) ALL                             # wheel group 全員可 sudo
```

# sudo log 位置（IR 必看）

```bash
# Debian/Ubuntu
sudo grep "sudo" /var/log/auth.log

# RHEL/CentOS
sudo grep "sudo" /var/log/secure

# systemd 環境
sudo journalctl _COMM=sudo

# 看誰 sudo 過什麼
sudo grep "COMMAND" /var/log/auth.log | tail -20
```

# 責任使用 checklist

- [ ] 跑 sudo 前確認命令本身正確（沒 typo）
- [ ] 從網路抄的命令、移除不必要的 sudo
- [ ] 不用 `sudo -i` 進 root shell 連續做事（log 不夠精準）
- [ ] sudo 後馬上 `ls` / `cat` 確認結果
- [ ] 高風險命令（`rm -rf`、`chown -R`、`chmod -R`）多想一次

# Hotel master key 類比

清潔工有萬能鑰匙清房間是必要的、但鑰匙被偷整棟旅館就完蛋。所以：
1. 只給真正需要的人 sudo 權限
2. sudo 只跑必要的命令、不用慣
3. 從網路抄命令時、特別小心 sudo

# 應用場景

- **Simon 工作場景**：公司 Linux server 一律 disable root SSH（`PermitRootLogin no`）、所有 admin 動作走 sudo；ISO 27001 A.9.2.3（特權存取管理）對應 sudoers 設計
- **IR**：被入侵後馬上看 sudo log、追攻擊者借誰的權限做什麼

# 相關概念

- [[root-user]]：sudo 提權的目標身份
- [[principle-of-least-privilege]]：sudo 設計遵循
- [[linux-user-mgmt-commands]]：sudo 的相關命令工具
- [[authentication]]：sudo 是身份升級的 authentication

# 來源

- Course 4 Module 3 Section 3 Leaf 9 Add and delete users
- Course 4 Module 3 Section 3 Leaf 10 Responsible use of sudo
