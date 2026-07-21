---
title: "FTP 檔案傳輸協定（File Transfer Protocol）"
slug: ftp
aliases: [FTP, File Transfer Protocol, 檔案傳輸協定]
category: 網路基礎
confidence: 已驗證
created: 2026-06-15
---

## 定義
FTP（File Transfer Protocol，檔案傳輸協定）是一種用於主機間傳檔的 [[application-layer]] 協定，用 **TCP 21（控制埠）** 傳控制命令（登入、切目錄、列目錄）、**TCP 20（資料埠）** 傳實際檔案資料。它設計於 1971 年，當時未考慮安全性，所以全程明文是它最大的問題。

## 關鍵面向
- **雙埠設計**：把「下命令」（21 控制連線）與「搬檔案」（資料連線）分成兩條連線，這是它跟一般單連線協定最不同的地方。
- **主動模式（Active）**：伺服器用 20 埠主動連客戶端的隨機埠（PORT 命令觸發），會被客戶端防火牆擋；且是否真用 20 埠由伺服器軟體決定，RFC 959 並未強制。
- **被動模式（Passive）**：客戶端主動連伺服器給的隨機埠（PASV 命令觸發），連線方向由內往外、不被防火牆擋，實務優先選用。
- **加密路線**：FTPS 是 FTP 加 SSL/TLS 的安全擴充；SFTP 走 [[ssh]]（22 埠）、並非 FTP 的擴充，兩者常被混淆。

## 應用場景
- **Simon 工作場景**：公司內若還有設備或流程在跑明文 FTP（20/21），在 ISO 27001 盤點裡等同把帳密與檔案攤在網路上，應改走 SFTP（SSH 22）或 FTPS。被動模式「少配防火牆」這點，對應機房對外傳檔時防火牆規則的取捨。
- **一般場景**：FTP 20/21、主動/被動模式、FTPS vs SFTP 是 CCNA 考點；被動埠計算與封包分析延伸到 Network+／SSCP／CISSP 的網路鑑識與通訊安全。

## 相關概念
- [[ssh]]：SFTP 走 SSH 提供加密檔案傳輸；SSH 設計初衷之一即取代明文 FTP。
- [[application-layer]]：FTP 屬 OSI 第七層應用層協定。
- [[port]]：FTP 控制埠 TCP 21、資料埠 TCP 20。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/3-ftp-and-secure-file-transfer|CCNA Section 2 Leaf 3 FTP 工作模式與安全檔案傳輸]]
