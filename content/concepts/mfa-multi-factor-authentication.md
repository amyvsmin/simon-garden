---
title: "多因子認證（Multi-Factor Authentication / MFA）"
slug: mfa-multi-factor-authentication
aliases: [MFA, multi-factor authentication, 多因子認證, 多因子驗證, 雙因子認證, 2FA, two-factor authentication, 多重驗證]
category: 資安・身分與存取
confidence: 已驗證
created: 2026-05-25
updated: 2026-11-04
---

## 定義
要求使用者在 [[authentication]] 過程中提供兩個或以上不同類別認證因子的安全機制。三大因子類別：知識因子（你知道的——密碼、PIN）、持有因子（你擁有的——手機、硬體 token）、生物因子（你是的——指紋、臉部辨識）。同類別的兩個因子（如密碼 + 安全問題）不算 MFA。

## 關鍵面向
- **三大因子**：Knowledge（知識）/ Possession（持有）/ Inherence（生物）；部分框架加入 Location（位置）與 Behavior（行為）
- **常見組合**：密碼 + OTP（TOTP/SMS）、密碼 + 硬體金鑰（YubiKey）、生物辨識 + PIN
- **SMS OTP 的弱點**：SIM swap 攻擊、SS7 協定漏洞；NIST 建議優先使用 TOTP 或 FIDO2
- **FIDO2/WebAuthn**：無密碼（passwordless）的進階型態，用公鑰密碼學取代知識因子
- **使用者摩擦**：MFA 增加登入步驟，需在安全性與使用者體驗之間平衡
- **MFA 推播疲勞（MFA fatigue／push bombing）**：攻擊者已拿到帳密，就反覆發起登入，讓手機一直跳出核准要求，等使用者為了停止通知、或被假冒 IT 的訊息催促而按下同意。這說明 MFA 的第二道核對只在使用者確實核對時才有效：**核准前先問「這筆登入是不是我剛剛發起的」**，對不上就拒絕並通報。課程筆記所列的技術防線是數字配對（number matching）與防釣魚 MFA（FIDO2）。

### 案例：Uber 2022（依 Uber 官方說明）

1. **帳密先外洩**：外包人員的個人裝置中了惡意程式，Uber 研判攻擊者很可能是在暗網買到他的公司帳密。密碼外洩的原因是推測，不能說成密碼設得太短。
2. **第二道一開始有擋住**：攻擊者反覆登入，外包人員每次都收到二步驗證要求，起初都沒有通過。
3. **一次同意就被登入**：外包人員最後核准了其中一筆，攻擊者登入，再進入多個內部系統。Uber 表示沒有證據顯示存取了使用者敏感資料，也沒看到攻擊者進入支撐 App 的正式環境。官方認為攻擊者與駭客組織 Lapsus$ 有關。

教學上要分開講的兩件事：帳密遭取得、驗證遭誤核准，是兩個要各自防守的點。門禁比喻：帳密像一張有效的員工卡，被拿走後對方還卡在下一道門外；核准不是自己發起的登入，就等於替拿卡的人開門。

## 應用場景
- **Simon 工作場景**：**SQL Server MFA 專案**（測試完成、做給客戶驗收，未實際導入）——為資料庫存取加上多因子驗證；公司 VPN 登入 MFA，2026-11 資安教育訓練以 Uber 案例講「只核准自己發起的驗證」；Omnissa MDM 管理後台 MFA；ISO 27001 A.9.4.2 安全登入程序
- **一般場景**：銀行網路銀行強制 MFA、雲端服務（AWS/Azure/GCP）root 帳號 MFA、企業 Email MFA

## 相關概念
- [[authentication]]：MFA 是 authentication 的增強版
- [[sso-single-sign-on]]：SSO + MFA 是現代企業身份管理標配
- [[aaa-framework]]：MFA 強化 AAA 的第一個 A（Authentication）
- [[principle-of-least-privilege]]：MFA 保護的是進入系統的大門，PoLP 管的是進門後能做什麼
- [[public-key-infrastructure]]：FIDO2 依賴 PKI 架構
- [[social-engineering]]：推播疲勞常搭配假冒 IT、製造急迫感的社交工程
- [[brute-force-attack]]：帳密被猜中或外洩後，MFA 是下一道防線

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-3-authentication-authorization-and-accounting/2-the-rise-of-sso-and-mfa|Course 5 Module 2 Section 3 Leaf 2 the rise of sso and mfa]]
- Uber 官方事件說明（2022-09-16 發布，更新至 2022-09-19）：https://www.uber.com/us/en/newsroom/security-update/ （2026-11-04 核對）
- [[1-learning/sat-cool/esor-workflow-redesign/ch4-knowledge-management/2-para-and-ai-card-box|CH4-2 實驗紀錄]]：本次擴寫來自 2026-11 資安教育訓練的回寫
