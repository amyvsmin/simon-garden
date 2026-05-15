---
name: 檔案權限
aliases: [file permissions, permissions, 權限, rwx, ugo, 10-character permission string]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

對檔案／目錄的存取資格、是 [[authorization]] 在 Linux 的落實機制。Linux 用 10 字元字串表示：第 1 字檔案類型（`d` 目錄 / `-` 檔）+ 後 9 字分三組 rwx 給 user / group / other。是 [[principle-of-least-privilege]] 的具體工具。

## 關鍵面向

- **rwx 對檔 vs 對目錄**：對檔 r=讀內容 w=改內容 x=可執行；對目錄 r=列檔 w=加減檔 x=cd 進去
- **三層 owner**：u（user）/ g（group）/ o（other），每層各 rwx 三 bit
- **改權限工具**：[[linux-permission-commands]] 的 chmod（symbolic / numeric）跟 chown
- **常見風險**：world-writable 檔（`o+w`）、過度開放給 group、目錄 x 沒收回

## 應用場景

- **Simon 工作場景**：公司 Linux server 機敏設定檔 `chmod 600`、SSH key `chmod 600` 強制要求、HR/財務檔的 group ACL 設計、ISO 27001 A.9.4.1 落實
- **資安 IR**：`find / -perm -o+w -type f` 掃 world-writable / `ls -la /tmp` 看異常檔

## 相關概念

- [[authorization]]：file-permissions 是其在 Linux 的實作
- [[principle-of-least-privilege]]：file-permissions 設計遵循的原則
- [[linux-permission-commands]]：操作工具集
- [[world-writable-file]]：檔案權限的常見資安風險案例
- [[tmp-attack-surface]]：world-writable 設計的官方範例（攻擊者愛用）

## 尚未解決的疑問

- ACL（Access Control Lists、`setfacl`）跟傳統 9-bit permission 的整合策略

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/1-file-permissions-and-ownership|Course 4 Module 3 Section 3 Leaf 1 File permissions and ownership]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/2-change-permissions|Course 4 Module 3 Section 3 Leaf 2 Change permissions]]
