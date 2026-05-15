---
name: 最小權限原則
aliases: [principle of least privilege, PoLP, least privilege, 最小特權, need-to-know]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

## 定義

只給使用者完成任務所需的「最低必要」存取權限、不給多餘權限。違反此原則會放大攻擊面——一旦帳號被攻陷、攻擊者能存取的範圍跟該帳號的權限同等大。資安四大基本原則之一（其他：fail-safe defaults / separation of duties / defense in depth）。

## 關鍵面向

- **need-to-know basis**：跟 PoLP 等價的另一說法
- **落實方式**：Linux file permission（chmod）+ user/group 管理 + sudo + RBAC
- **常見違反**：`chmod -R 777`（人人可寫）/ 全員 sudo / group 過度開放
- **動態執行**：人員調職／離職時就要收回相關權限、不該累積

## 應用場景

- **Simon 工作場景**：公司 ISO 27001 A.9.1.1（access control policy）+ A.9.4.1（資訊存取限制）的核心要求；HR / 財務檔案不該全員可讀；季度 audit 必查項目
- **資安實務**：sudoers 設計（每個 user 只開該動作的 sudo）/ container 跑 non-root 使用者 / API key 只給必要 scope

## 相關概念

- [[authorization]]：PoLP 是 authorization 設計的指導原則
- [[file-permissions]]：PoLP 在 Linux 的落實工具
- [[linux-permission-commands]]：chmod / chown 是落實命令
- [[sudo-responsibility]]：sudo 設計遵循 PoLP

## 尚未解決的疑問

- 開發環境 vs 正式環境的 PoLP 差異（dev 較鬆、prod 嚴格）

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/1-file-permissions-and-ownership|Course 4 Module 3 Section 3 Leaf 1 File permissions and ownership]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/3-permission-commands|Course 4 Module 3 Section 3 Leaf 3 Permission commands]]
