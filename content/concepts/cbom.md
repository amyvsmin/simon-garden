---
title: "加密資產清單"
slug: cbom
aliases: [CBOM, Cryptographic Bill of Materials, 加密物料清單, 密碼資產盤點]
category: 資安
confidence: 已驗證
created: 2026-05-07
query-count: 0
---

# 加密資產清單

## 定義

把組織內所有正在使用的加密演算法、金鑰、憑證、函式庫、相依硬體（HSM／晶片卡／TPM）以結構化方式列表的盤點清單。概念類比 SBOM（軟體物料清單）、但聚焦於密碼學使用面。CBOM 是 PQC 遷移的 Day 1 工作：你看不到的東西就保護不了、不知道哪裡用了 RSA/ECC 就無從規劃遷移優先序。

## 關鍵面向

- **盤點對象**：終端、伺服器、行動 App、韌體、HSM、晶片卡、CA／PKI、TLS gateway、VPN、程式碼簽章、檔案／磁碟加密
- **欄位**：演算法名稱、金鑰長度、用途、相依函式庫版本（OpenSSL／Bouncy Castle）、資料保留年限、所有者
- **連結 [[mosca-theorem]]**：CBOM 給 x（資料壽命）盤點所需的橫向視角、輸出 Mosca 風險矩陣
- **自動工具 vs 大廠付費**：陳君明點出大廠利用資訊不對稱把 CBOM 工具賣得很貴、推薦用 open source 替代
- **Open source 工具**：CycloneDX CBOM 規格、IBM Crypto Bill of Materials、CryptoBOM Forge 等
- **與 [[supply-chain-risk]] 連動**：第三方軟體相依也要盤點、不只是自家程式碼

## 應用場景

- Simon 工作場景：ISO 27001 資產盤點直接擴充加密欄位、跟 BIGFIX/Veeam/Omnissa/SQL Server 等系統一起盤；給 Sam 的資安 KPI 月簡報加「CBOM 完成率」這條
- 一般場景：金融、半導體、醫療、政府機關 PQC 遷移計畫的起點

## 相關概念

- [[post-quantum-cryptography]]：CBOM 是 PQC 遷移前置作業
- [[mosca-theorem]]：CBOM 提供 Mosca 框架所需的 x 與系統清單
- [[crypto-agility]]：CBOM 也是敏捷性的監視儀表板
- [[supply-chain-risk]]：CBOM 必須含第三方相依

## 尚未解決的疑問

- CycloneDX CBOM 規格 vs IBM CBOM 是否會合流
- 韌體層加密（HSM／TPM）的自動化盤點工具成熟度

## 來源（自動維護）

- [[2026-05-07-jimmy-chen-pqc-migration-cybersec]]
