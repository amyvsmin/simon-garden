---
title: "雜湊函數（Hash Function）"
slug: hash-function
aliases: [Hash Function, 雜湊函數, 雜湊, hash, 散列函數, 哈希函數, hashing]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
把任意長度的輸入資料壓縮成固定長度摘要（[[hash-value]]）的單向數學函數。單向意味著無法從雜湊值反推原始資料。用於完整性驗證、密碼儲存、數位簽章、惡意軟體比對。

## 關鍵面向
- **代表演算法**：SHA-256（目前業界標準）、SHA-3、MD5（已不安全、仍用於非安全用途的校驗）
- **三大特性**：確定性（同輸入同輸出）、雪崩效應（輸入微變輸出全變）、抗碰撞（極難找到兩個不同輸入產生相同輸出）
- **不是加密**：雜湊是單向的、不能「解密」回原文；跟 [[symmetric-encryption]] / [[asymmetric-encryption]] 的雙向轉換不同
- **密碼儲存**：系統不存明文密碼、存密碼的雜湊值 + 鹽值（salt）；驗證時重新雜湊比對
- **數位簽章中的角色**：先對文件雜湊、再用私鑰加密雜湊值 = 數位簽章

## 應用場景
- **Simon 工作場景**：ISO 27001 要求的檔案完整性驗證、惡意軟體比對（比對已知惡意檔案的雜湊值）、資安事件調查中驗證證據未被竄改
- **一般場景**：軟體下載校驗（比對官方公布的 SHA-256）、區塊鏈、密碼儲存機制

## 相關概念
- [[hash-value]]：雜湊函數的輸出結果
- [[cryptography]]：雜湊屬密碼學範疇但不是加密
- [[cia-triad]]：雜湊主要維護完整性（Integrity）
- [[authentication]]：密碼驗證靠雜湊比對

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
