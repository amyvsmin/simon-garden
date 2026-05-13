---
name: 認證
aliases: [authentication, 身份驗證, 驗證, 認證流程]
category: 資安
status: active
confidence: verified
last-queried: ""
query-count: 0
---

# 定義

證明「你是誰」的過程——使用者透過密碼、生物辨識、多因子驗證等方式向系統證明自身身份。Authentication（你是誰）跟 [[authorization]]（你能做什麼）是 access control 的兩個必備步驟、先 authentication 再 authorization。

# 關鍵面向

- **三大 factors**：知道的（密碼）/ 擁有的（手機 token）/ 是的（生物辨識）
- **MFA**：多因子組合、現代資安基本要求
- **vs authorization**：兩者並列、不可混用
- **失敗的 authentication**：未經授權存取的入口、IR 必查

# 應用場景

- **Simon 工作場景**：公司 Linux server SSH key + sudo 密碼雙重驗證、ISO 27001 A.9.2.4（管理 secret authentication）控制項落實、Omnissa Workspace ONE MDM 對筆電的身份驗證
- **一般場景**：登入流程、API key 驗證、Federation（SAML / OIDC）

# 相關概念

- [[authorization]]：成對概念、判定「能存取什麼」
- [[root-user]]：authentication 過後拿到 superuser 身份
- [[principle-of-least-privilege]]：authentication 通過後才談權限大小
- [[sudo-responsibility]]：sudo 是「身份升級」的 authentication 動作

# 尚未解決的疑問

- 公司導入 passwordless（FIDO2）的時程

# 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/9-add-and-delete-users|Course 4 Module 3 Section 3 Leaf 9 Add and delete users]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-3-linux-commands-in-the-bash-shell/section-3-authenticate-and-authorize-users/1-file-permissions-and-ownership|Course 4 Module 3 Section 3 Leaf 1 File permissions and ownership]]
