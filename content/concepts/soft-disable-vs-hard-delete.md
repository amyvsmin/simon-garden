---
name: 軟鎖 vs 硬刪
aliases: [soft disable vs hard delete, usermod -L, userdel -r, 帳號離職流程, account disable]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

離職／停權帳號的兩種策略：**軟鎖**（`usermod -L`、保留資料、可解鎖）vs **硬刪**（`userdel -r`、完全清除）。實務應該先軟鎖、確認檔案有人接、最後才硬刪——避免把 user 名下機敏檔意外清掉。

## 兩種策略對照

| 動作 | 命令 | 結果 | 適用 |
|---|---|---|---|
| **軟鎖**（lock） | `sudo usermod -L USER` | 不能登入、檔案／group 全保留 | 離職立即停權 |
| **解鎖** | `sudo usermod -U USER` | 恢復登入 | 復職／調職 |
| **刪帳號（保留 home）** | `sudo userdel USER` | 帳號刪、home 留 | 確認無歸屬問題 |
| **完全刪除** | `sudo userdel -r USER` | 全清 | 最後一步、確認備份 |

## 標準離職 SOP（Simon 公司可借鑑）

```bash
## T-1 day（離職前一天）
sudo usermod -L simon                    # 軟鎖、立即停權
echo "Account locked for offboarding" | mail simon

## T+0（離職當天）
## 1. 交接檔案 ownership
sudo chown -R 接手人:接手 group /home/simon/projects/

## 2. 歸檔備份
sudo tar -czf /backup/simon-home-$(date +%F).tar.gz /home/simon/

## 3. 清 cron job
sudo crontab -u simon -r 2>/dev/null

## 4. kill 殘留 process
sudo pkill -u simon

## T+30 days（緩衝期後）
sudo userdel -r simon                    # 完全清除帳號 + home
sudo groupdel simon                      # 清 useradd 自動建的同名 group
```

## 為什麼要緩衝期 30 天

- **避免誤刪資料**：交接漏的檔案還在 home、可救
- **法規需求**：台灣個資法／GDPR 對員工資料保留有要求
- **稽核保留**：ISO 27001 / SOC 2 audit 需要保留變動紀錄
- **接手人問題回報**：交接後發現缺東西、可以查

## 反例：直接 `userdel -r` 的災難

- 員工名下的 production script 直接消失
- 員工負責的 cron job 隨 home 一起刪、後續服務中斷
- 機敏檔（如業務客戶 list）沒人發現就清空、難救

## 應用場景

- **Simon 工作場景**：公司 ISO 27001 A.9.2.6（access right removal）對應；HR 通知離職→IT 標準 SOP 跑這套
- **資安實務**：跟密碼過期（`chage`）配合用、構成完整 user lifecycle

## 相關概念

- [[linux-user-mgmt-commands]]：相關命令工具集
- [[authentication]]：軟鎖是 authentication 層的禁用
- [[principle-of-least-privilege]]：離職立即停權是 PoLP 落實

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/9-add-and-delete-users|Course 4 Module 3 Section 3 Leaf 9 Add and delete users]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/10-responsible-use-of-sudo|Course 4 Module 3 Section 3 Leaf 10 Responsible use of sudo]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/13-exemplar-add-and-manage-users-with-linux-commands|Course 4 Module 3 Section 3 Leaf 13 Exemplar add and manage users]]
