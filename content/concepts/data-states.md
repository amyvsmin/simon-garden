---
title: "資料三態（Data States）"
slug: data-states
aliases: [Data States, 資料三態, 資料狀態, data in use, data in transit, data at rest, 使用中資料, 傳輸中資料, 靜態資料]
category: 資安
confidence: 待驗證
created: 2026-05-25
query-count: 0
---

## 定義
資料在其生命週期中存在的三種狀態：使用中（in use，正被應用程式處理）、傳輸中（in transit，在網路上移動）、靜態（at rest，儲存於磁碟或資料庫中）。每種狀態面臨不同的安全威脅，需要對應的保護措施。

## 關鍵面向
- **Data at Rest（靜態資料）**：存在硬碟、資料庫、備份媒體上；保護手段包含全磁碟加密（BitLocker、LUKS）、資料庫加密（TDE）、存取控制
- **Data in Transit（傳輸中資料）**：在網路傳輸中；保護手段包含 TLS/SSL、VPN、IPSec、[[asymmetric-encryption]] 建立安全通道
- **Data in Use（使用中資料）**：正被 CPU 或應用程式處理；保護手段最困難、包含記憶體加密、可信執行環境（TEE）
- **三態都要保護**：只加密傳輸但不加密儲存 = 半套防禦
- **資料分級影響保護層級**：機密資料三態都要強加密；一般內部資料可適度降級

## 應用場景
- **Simon 工作場景**：Veeam 備份資料屬 at rest 需確保加密、SQL Server 連線走 TLS 保護 in transit、伺服器記憶體中處理的敏感資料屬 in use
- **一般場景**：雲端儲存加密政策、HTTPS 強制部署、合規審計檢查三態保護涵蓋率

## 相關概念
- [[cryptography]]：三態保護的核心技術手段
- [[symmetric-encryption]]：at rest 加密常用 AES
- [[asymmetric-encryption]]：in transit 金鑰交換常用 RSA/ECC
- [[cia-triad]]：三態保護維護的是機密性與完整性
- [[compliance]]：法規常要求三態都有加密措施

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 1
