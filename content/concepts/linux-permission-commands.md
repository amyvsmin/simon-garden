---
name: Linux 權限命令
aliases: [linux permission commands, chmod, chown, chmod-command, chown-command, chmod-symbolic-mode, chmod-equals-operator, permission-modification-syntax, change-permissions-when, permission-string, permission-rwx, file-owners-trio, ls-long-format, ls-all-flag, ls-la-combined]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

操作 [[file-permissions]] 的命令工具集——`ls -l` 看權限、`chmod` 改權限、`chown` 改 owner。是 [[principle-of-least-privilege]] 在 Linux 的具體落實工具。

## 核心命令

## ls 看權限

```
$ ls -la
-rw-r--r-- 1 analyst security 1234 May 9 12:00 file.txt
↑↑↑↑↑↑↑↑↑↑   ↑       ↑
類型|user|group|other  owner  group
```

## chmod symbolic mode

| 寫法 | 意義 |
|---|---|
| `chmod u+x FILE` | user 加 execute |
| `chmod g-w FILE` | group 減 write |
| `chmod o=r FILE` | other 設成只 read（=覆蓋） |
| `chmod a+r FILE` | all（u+g+o）加 read |
| `chmod u+w,g-r FILE` | 多動作（逗號、無空格） |

## chmod numeric mode

| Octal | rwx | 用例 |
|---|---|---|
| 7 | rwx | full |
| 6 | rw- | read+write |
| 5 | r-x | read+execute |
| 4 | r-- | read only |
| 0 | --- | none |

常用：
- `chmod 644 FILE` = `-rw-r--r--`（一般檔）
- `chmod 755 DIR` = `-rwxr-xr-x`（可執行檔／目錄）
- `chmod 600 FILE` = `-rw-------`（SSH key 必用）
- `chmod -R u+rwX,go+rX DIR`（大寫 X 只給目錄／已執行檔）

## chown 改 owner

| 寫法 | 意義 |
|---|---|
| `sudo chown USER FILE` | 改 user owner |
| `sudo chown :GROUP FILE` | 改 group（冒號開頭） |
| `sudo chown USER:GROUP FILE` | 同時改 |
| `sudo chown -R apache:apache /var/www/` | 遞迴 |

## 關鍵面向

- **chmod 三 operator**：`+` 加 / `-` 減 / `=` 覆蓋（清舊的）
- **`chmod 777` 是災難**：world-writable + executable = webshell 落地點
- **`chmod -R` 慎用**：遞迴影響整棵樹、改錯難救
- **chown 冒號語法**：`USER:GROUP` 同改、`:GROUP` 只改 group

## 應用場景

- **Simon 工作場景**：
  - SSH key `chmod 600 ~/.ssh/id_rsa`（OpenSSH 強制）
  - web server `chown -R apache:apache /var/www/`
  - 設定檔備份後 `chmod -w` 唯讀防誤改
- **IR / forensics**：找 world-writable 檔、找 SUID 後門、修復被改 ownership

## 相關概念

- [[file-permissions]]：權限本身的概念
- [[principle-of-least-privilege]]：權限設計指導原則
- [[world-writable-file]]：常見 misconfig
- [[linux-user-mgmt-commands]]：user/group 是權限的對象

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/1-file-permissions-and-ownership|Course 4 Module 3 Section 3 Leaf 1 File permissions and ownership]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/2-change-permissions|Course 4 Module 3 Section 3 Leaf 2 Change permissions]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/3-permission-commands|Course 4 Module 3 Section 3 Leaf 3 Permission commands]]
