---
title: "暴力攻擊（Brute Force Attack）"
slug: brute-force-attack
aliases: [Brute Force Attack, 暴力攻擊, 暴力破解, brute force, 窮舉攻擊, 密碼窮舉]
category: 資安・身分與存取
confidence: 已驗證
created: 2026-05-25
updated: 2026-11-04
---

## 定義

透過系統性嘗試所有可能的密碼、金鑰或憑證組合來破解認證機制的攻擊手法。變體包括字典攻擊（dictionary attack，用常見密碼清單）和憑證填充（credential stuffing，用外洩帳密嘗試其他服務）。

## 關鍵面向

- **攻擊類型**：純暴力（窮舉所有組合）、字典攻擊（常見密碼表）、憑證填充（重用外洩帳密）、反向暴力（固定密碼測多帳號）
- **成功因素**：密碼長度與可預測程度決定破解時間。「幾秒破、幾千年破」這類數字一定要附前提，見下方模型；猜測速度差 100 倍，結論就差 100 倍。
- **長度模型（附前提才能引用）**：假設每個位置都從 62 種字元（大小寫英文＋數字）獨立隨機挑選，組合數＝62 的長度次方；離線猜測每秒 10 億次、平均猜到一半組合才中，則 8 字元約 1.3 天、12 字元約 5.1 萬年、14 字元約 2 億年（12 字元若每秒 1,000 億次，降到約 500 年）。這只適用真正隨機的字串，不是任何真實系統的實測，也不保證密碼能安全用這麼久。
- **模型之外的三個現實**：①人選的密碼常是「單字＋年份＋符號」或公司名重複，攻擊者會先試這些組合，長度增加但規律明顯，實際強度遠低於模型；②同一組密碼重複用在別的服務，一處外洩就會被拿去憑證填充；③自己把密碼填進釣魚頁面，對方根本不必猜。
- **NIST SP 800-63B（800-63-4 版）密碼要求**：只用密碼單一因子時最少 15 字元，搭配 MFA 時可降到最少 8 字元；應允許至少 64 字元；**不得**另加字元種類混合規則；**不得**要求定期更換，但有外洩證據時必須強制更換；新設密碼要比對常見及外洩密碼黑名單；必須限制登入失敗次數。很多企業密碼政策仍採複雜度規則加定期更換，和 NIST 現行建議不同，引用時要分清「公司規定」和「NIST 建議」。
- **防禦機制**：帳號鎖定（lockout policy）、MFA（[[authentication]]）、CAPTCHA、速率限制（rate limiting）、密碼複雜度政策
- **工具生態**：Hydra、John the Ripper、Hashcat 是常見暴力破解工具；防禦方需了解攻擊工具能力才能設計足夠強度的政策

## 應用場景

- **Simon 工作場景**：SQL Server MFA 專案正是為防暴力攻擊加上第二因素；公司 AD 密碼政策需設定鎖定閾值與複雜度要求；2026-11 資安教育訓練用上方長度模型（附前提）示範 8 到 14 字元的差距；資安 KPI 月簡報可追蹤帳號鎖定事件數量
- **一般場景**：所有面向網際網路的登入介面（SSH、RDP、Web 應用）都是暴力攻擊目標；雲端服務帳號被暴力攻擊是常見事件

## 相關概念

- [[authentication]]：暴力攻擊的目標就是突破認證機制
- [[attack-vector]]：暴力攻擊是一種常見的攻擊向量
- [[security-hardening]]：密碼政策與帳號鎖定是硬化的基本項目
- [[principle-of-least-privilege]]：即使帳號被暴力破解，最小權限可限制損害範圍
- [[password-spraying]]：多帳號試同一組常見密碼，是避開帳號鎖定的變體
- [[mfa-multi-factor-authentication]]：密碼被猜中或外洩後的下一道防線

## 來源

- NIST SP 800-63B（800-63-4 版）第 3.1.1.2 節 Password Verifiers：https://pages.nist.gov/800-63-4/sp800-63b/authenticators/ （2026-11-04 核對）；附錄 A Strength of Passwords：https://pages.nist.gov/800-63-4/sp800-63b/passwords/
- [[1-learning/sat-cool/esor-workflow-redesign/ch4-knowledge-management/2-para-and-ai-card-box|CH4-2 實驗紀錄]]：長度模型來自 2026-11 資安教育訓練的回寫，數字於 2026-11-04 重算
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-3-cyber-attacker-mindset/7-fortify-against-brute-force-cyber-attacks|Course 5 Module 3 Section 3 Leaf 7 fortify against brute force cyber attacks]]
- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
