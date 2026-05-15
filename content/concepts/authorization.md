---
name: 授權
aliases: [authorization, 存取授權, 授權控管]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

判定「你能存取什麼資源」的過程——系統根據已認證使用者的身份、角色、群組、規則等決定可讀／可寫／可執行哪些檔案／資料／API。Authorization 是 access control 的後半段、跟 [[authentication]]（你是誰）成對。

## 關鍵面向

- **DAC vs MAC vs RBAC**：自由裁量／強制／角色式三大模型、Linux 預設是 DAC
- **Linux 落實工具**：[[file-permissions]]（chmod）+ [[linux-user-mgmt-commands]]（user/group）+ [[sudo-responsibility]]
- **粒度**：可細到單一檔／單一 API 動作、也可粗到整個 group
- **vs authentication**：先認證再授權、兩者不可省略其一

## 應用場景

- **Simon 工作場景**：公司 file server 的部門 group ACL、SQL Server 的 DB role 設計、ISO 27001 A.9.4.1（資訊存取限制）控制項落實
- **一般場景**：API gateway 的 OAuth scopes、AWS IAM policy、Active Directory 群組原則

## 相關概念

- [[authentication]]：成對概念、先 authentication 再 authorization
- [[principle-of-least-privilege]]：authorization 設計的最高指導原則
- [[file-permissions]]：authorization 在 Linux 的具體實作機制
- [[linux-permission-commands]]：authorization 的命令工具箱

## 尚未解決的疑問

- 公司 Active Directory 跟 Linux file permission 的整合策略（LDAP / SSSD）

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/1-file-permissions-and-ownership|Course 4 Module 3 Section 3 Leaf 1 File permissions and ownership]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/9-add-and-delete-users|Course 4 Module 3 Section 3 Leaf 9 Add and delete users]]
