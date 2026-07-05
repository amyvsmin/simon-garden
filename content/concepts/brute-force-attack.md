---
title: "暴力攻擊（Brute Force Attack）"
slug: brute-force-attack
aliases: [Brute Force Attack, 暴力攻擊, 暴力破解, brute force, 窮舉攻擊, 密碼窮舉]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義

透過系統性嘗試所有可能的密碼、金鑰或憑證組合來破解認證機制的攻擊手法。變體包括字典攻擊（dictionary attack，用常見密碼清單）和憑證填充（credential stuffing，用外洩帳密嘗試其他服務）。

## 關鍵面向

- **攻擊類型**：純暴力（窮舉所有組合）、字典攻擊（常見密碼表）、憑證填充（重用外洩帳密）、反向暴力（固定密碼測多帳號）
- **成功因素**：密碼長度與複雜度決定破解時間——8 字元純數字秒破，12 字元混合大小寫+符號需數千年
- **防禦機制**：帳號鎖定（lockout policy）、MFA（[[authentication]]）、CAPTCHA、速率限制（rate limiting）、密碼複雜度政策
- **工具生態**：Hydra、John the Ripper、Hashcat 是常見暴力破解工具；防禦方需了解攻擊工具能力才能設計足夠強度的政策

## 應用場景

- **Simon 工作場景**：SQL Server MFA 專案正是為防暴力攻擊加上第二因素；公司 AD 密碼政策需設定鎖定閾值與複雜度要求；資安 KPI 月簡報可追蹤帳號鎖定事件數量
- **一般場景**：所有面向網際網路的登入介面（SSH、RDP、Web 應用）都是暴力攻擊目標；雲端服務帳號被暴力攻擊是常見事件

## 相關概念

- [[authentication]]：暴力攻擊的目標就是突破認證機制
- [[attack-vector]]：暴力攻擊是一種常見的攻擊向量
- [[security-hardening]]：密碼政策與帳號鎖定是硬化的基本項目
- [[principle-of-least-privilege]]：即使帳號被暴力破解，最小權限可限制損害範圍

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-3-cyber-attacker-mindset/7-fortify-against-brute-force-cyber-attacks|Course 5 Module 3 Section 3 Leaf 7 fortify against brute force cyber attacks]]
- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
