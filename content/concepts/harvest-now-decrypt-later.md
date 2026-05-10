---
title: "Harvest Now Decrypt Later"
slug: harvest-now-decrypt-later
aliases: [HNDL, Harvest Now Decrypt Later, 現在收割之後解密, 量子收割攻擊]
category: 資安
confidence: 已驗證
created: 2026-05-06
query-count: 0
---

# Harvest Now Decrypt Later

## 定義

攻擊者今天大量收集加密敏感資料、儲存等量子電腦成熟後再回頭破解的長期攻擊策略。對應目標是任何「十年後仍重要」的資料：病歷、商業機密、外交通訊、軍事情報、企業併購紀錄。國家級攻擊者與組織犯罪集團都已在進行。

## 關鍵面向

- **時間軸假設**：量子電腦成熟需 5–15 年、HNDL 賭的是「資料 still 有價值」
- **目標資料類型**：長壽命機密、不會因短時間流逝失去價值
- **加密技術受影響**：當前主流 RSA／ECC 等公鑰加密、HTTPS／VPN／銀行加密
- **特別針對**：關鍵基礎設施（電力、金融、政府、國防）
- **對應解法**：[[post-quantum-cryptography]] 後量子密碼遷移、NIST 2024 已完成第一批標準化
- **Palo Alto Unit 42 觀察**：「This is no longer hypothetical」、Nicole Quinn 強調已在發生

## 應用場景

- Simon 工作場景：公司若有 10 年以上長壽命資料（員工醫療紀錄、財務歷史、商業機密）已在 risk window；下一步盤點哪些系統用 RSA／ECC、評估遷移時程
- 一般場景：金融、醫療、政府、半導體 IP、長壽命合約資料

## 相關概念

- [[post-quantum-cryptography]]：對應防禦技術
- [[critical-infrastructure]]：HNDL 主要攻擊目標
- [[supply-chain-risk]]：HNDL 也攻擊供應商收割
- [[mosca-theorem]]：x + y > z 即 HNDL 攻擊成立、量化遷移急迫性

## 尚未解決的疑問

- 量子電腦真實成熟時點（保守估 2030+ vs 樂觀估 2028）
- 對中小企業的最低底線是什麼

## 來源（自動維護）

- [[2026-05-06-palo-alto-harvest-now-decrypt-later-cybersec]]
- [[2026-05-07-jimmy-chen-pqc-migration-cybersec]]
