---
name: 超級使用者
aliases: [root user, superuser, root, UID 0, 最高權限帳號]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

Linux 系統的最高權限帳號、UID 0、可建／改／刪任何檔、跑任何程式。只有 root 或有 sudo 權限的 user 能新增其他 user。直接以 root 身份登入是 Linux 大忌——三個原因：資安攻擊面、typo 災難、無 accountability。應該用 [[sudo-responsibility]] 暫時提權替代。

# 關鍵面向

- **UID 0**：唯一識別、`/etc/passwd` 中第三欄為 0 即 root
- **不該直接 login**：SSH 應 disable root login（`PermitRootLogin no`）
- **vs sudo**：sudo 是受控提權、有 log、有問責；root login 完全相反
- **vs `/root`**：`/root` 是 root 的 home directory、不是 root 帳號本身

# 應用場景

- **Simon 工作場景**：公司 Linux server 一律 disable root SSH、日常用普通帳號 + sudo；ISO 27001 A.9.2.3（特權存取管理）對應 root 使用控管
- **災難避免**：以普通 user 登入、需要 root 權限再 sudo

# 相關概念

- [[sudo-responsibility]]：取代直接 root login 的工具
- [[principle-of-least-privilege]]：root 是 least privilege 的反面、要慎用
- [[authentication]]：root login 通過後拿到的最高身份
- [[root-directory]]：另一個 root 概念、容易混淆

# 來源

- Course 4 Module 3 Section 3 Leaf 9 Add and delete users
- Course 4 Module 3 Section 3 Leaf 10 Responsible use of sudo
