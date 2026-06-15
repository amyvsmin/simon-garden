---
title: "SSH 安全殼協定（Secure Shell）"
slug: ssh
aliases: [SSH, Secure Shell, 安全殼協定, 安全外殼協定]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
SSH（Secure Shell，安全殼協定）是一種加密的遠端登入與管理協定，走 **TCP 22** 埠，屬 [[application-layer]]。它由 Tatu Ylönen 於 1995 年設計，目的是取代既不強化身份驗證、也不保證機密性的明文協定 Telnet 與 [[ftp]]；刻意挑選夾在 FTP（21）與 Telnet（23）中間的 22 號埠。

## 關鍵面向
- **加密遠端管理**：全程加密傳輸，連帳號密碼都不會以明文外露，是生產環境遠端操控 Linux 伺服器、交換器、路由器的標準做法。
- **取代明文協定**：為取代 Telnet（明文遠端登入）與 FTP（明文檔案傳輸）而生，從根本上抵抗封包竊聽與中間人攻擊（MITM）。
- **SSH v2（2006）三大強化**：導入基於 Diffie-Hellman 的金鑰交換、用 MAC（如 MD5／SHA）做資料完整性檢查、加入更強的 AES 加密。
- **SFTP 走 SSH**：SFTP 是走 SSH（22 埠）的檔案傳輸，並非 FTP 的擴充；體感與 FTP 一致，只是埠號換成 22 且全程加密。

## 應用場景
- **Simon 工作場景**：日常 SSH 進 Linux 伺服器、交換器、路由器做管理就是這一層。公司內若還有設備開著 Telnet（23 埠、明文帳密），在 ISO 27001 盤點裡會被列為風險項，應改用 SSH 或至少限制在隔離管理網段。
- **一般場景**：協定對應埠號（SSH 22）是 CCNA 必考點；Telnet vs SSH、金鑰交換、MITM 等概念在 Network+／SSCP／CISSP 的通訊與網路安全領域會再深入。

## 相關概念
- [[ftp]]：SSH 是為取代明文 FTP 而生；SFTP 即走 SSH 的安全檔案傳輸。
- [[https]]：同屬加密的應用層協定，HTTPS 加密走 SSL/TLS、SSH 走自有加密機制。
- [[application-layer]]：SSH 屬 OSI 第七層應用層協定。
- [[port]]：SSH 預設埠 TCP 22，連號於 FTP 21、Telnet 23。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/2-application-layer-protocols|CCNA Section 2 Leaf 2 應用層與常見協定]]
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/3-ftp-and-secure-file-transfer|CCNA Section 2 Leaf 3 FTP 工作模式與安全檔案傳輸]]
