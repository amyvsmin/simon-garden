---
title: "雜湊值（Hash Value）"
slug: hash-value
aliases: [Hash Value, 雜湊值, hash, digest, 摘要, message digest, 雜湊摘要, 散列值]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
雜湊函數（[[hash-function]]）的輸出結果，又稱摘要（digest）。是一段固定長度的字串（如 SHA-256 產生 64 個十六進位字元），用於完整性驗證、密碼儲存、惡意軟體識別。

## 關鍵面向
- **固定長度**：不論輸入多大（1 byte 或 1 TB），同一雜湊函數的輸出長度固定（SHA-256 = 256 bits = 64 hex chars）
- **完整性驗證**：下載軟體後計算雜湊值、與官方公布的值比對；不一致 = 檔案被竄改或損毀
- **密碼儲存**：資料庫存的是密碼雜湊值 + salt、不是明文；即使資料庫外洩也無法直接看到密碼
- **惡意軟體識別**：IOC（入侵指標）中的檔案雜湊值是快速比對已知惡意軟體的核心手段
- **不可逆**：從雜湊值無法反推原始資料、這是與加密的根本差異

## 應用場景
- **Simon 工作場景**：資安事件調查時比對可疑檔案雜湊值與威脅情報資料庫、ISO 27001 變更管理中驗證部署檔案的完整性、Veeam 備份還原後驗證資料完整性
- **一般場景**：VirusTotal 上傳檔案比對雜湊、Git commit 用 SHA-1 識別、數位鑑識中的證據鏈保管

## 相關概念
- [[hash-function]]：產生雜湊值的函數
- [[cia-triad]]：雜湊值用於驗證完整性（Integrity）
- [[cryptography]]：雜湊值是密碼學工具的產出物
- [[patch-management]]：驗證 patch 檔案完整性時用雜湊值比對

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
