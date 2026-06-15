---
title: "雜湊函數（Hash Function）"
slug: hash-function
aliases: [Hash Function, 雜湊函數, 雜湊, hash, 散列函數, 哈希函數, hashing, Hash Value, 雜湊值, digest, 摘要, message digest, 雜湊摘要, 散列值]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
把任意長度的輸入資料壓縮成固定長度摘要（雜湊值）的單向數學函數。單向意味著無法從雜湊值反推原始資料。用於完整性驗證、密碼儲存、數位簽章、惡意軟體比對。

## 關鍵面向
- **代表演算法**：SHA-256（目前業界標準）、SHA-3、MD5（已不安全、仍用於非安全用途的校驗）
- **三大特性**：確定性（同輸入同輸出）、雪崩效應（輸入微變輸出全變）、抗碰撞（極難找到兩個不同輸入產生相同輸出）
- **不是加密**：雜湊是單向的、不能「解密」回原文；跟 [[symmetric-encryption]] / [[asymmetric-encryption]] 的雙向轉換不同
- **密碼儲存**：系統不存明文密碼、存密碼的雜湊值 + 鹽值（salt）；驗證時重新雜湊比對
- **數位簽章中的角色**：先對文件雜湊、再用私鑰加密雜湊值 = 數位簽章

## 雜湊值（Hash Value）

雜湊函數的輸出結果，又稱摘要（digest）。固定長度字串（SHA-256 = 256 bits = 64 hex chars），不論輸入大小、同一函數輸出長度固定。從雜湊值無法反推原始資料。用途：
- **完整性驗證**：下載軟體後計算雜湊值與官方公布值比對
- **惡意軟體識別**：IOC（入侵指標）中的檔案雜湊值是快速比對已知惡意軟體的核心手段
- **證據鏈保管**：數位鑑識中驗證證據未被竄改

## 應用場景
- **Simon 工作場景**：ISO 27001 要求的檔案完整性驗證、惡意軟體比對（比對已知惡意檔案的雜湊值）、資安事件調查中驗證證據未被竄改、ISO 27001 變更管理中驗證部署檔案的完整性、Veeam 備份還原後驗證資料完整性
- **一般場景**：軟體下載校驗（比對官方公布的 SHA-256）、區塊鏈、密碼儲存機制、VirusTotal 上傳檔案比對、Git commit 用 SHA-1 識別

## 相關概念
- [[cryptography]]：雜湊屬密碼學範疇但不是加密
- [[cia-triad]]：雜湊主要維護完整性（Integrity）
- [[authentication]]：密碼驗證靠雜湊比對
- [[patch-management]]：驗證 patch 檔案完整性時用雜湊值比對

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-2-encryption-methods/9-non-repudiation-and-hashing|Course 5 Module 2 Section 2 Leaf 9 non repudiation and hashing]]
- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-2-protect-organizational-assets/section-2-encryption-methods/10-the-evolution-of-hash-functions|Course 5 Module 2 Section 2 Leaf 10 the evolution of hash functions]]
