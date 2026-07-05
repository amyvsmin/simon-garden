---
title: "TLS / SSL（傳輸層安全協定）"
slug: tls
aliases: [TLS, SSL, 傳輸層安全, Transport Layer Security, TLS/SSL, 心臟出血, Heartbleed, POODLE, 貴賓犬漏洞]
category: 資安
confidence: 已驗證
created: 2026-07-05
---

## 定義

在網路傳輸層之上，為通訊雙方建立加密通道的協定，是 HTTPS、加密郵件、VPN 等的安全基礎。TLS 是 SSL 的後繼者；SSL 各版本與早期 TLS 已被證明不安全，現今**至少要用 TLS 1.2 或 1.3**。

## 關鍵面向

- **版本安全（考點）**：SSL 2.0／3.0、TLS 1.0／1.1 皆不安全、不應再用；安全版本為 **TLS 1.2／1.3**。
- **三大基本功能**：**加密**（先用非對稱交換金鑰、再用對稱加密傳資料）、**身份驗證**（憑證確認對方身份）、**資料完整性**（防篡改）。
- **知名漏洞**：
  - **心臟出血（Heartbleed，2014）**：OpenSSL 心跳擴展驗證不足，攻擊者可讀取伺服器記憶體中的私鑰等機密。
  - **貴賓犬（POODLE）**：強制把連線降級到 SSL 3.0，導致中間人攻擊；防法是禁用舊版本。
- **評估與憑證**：**SSL Labs（SSL Server Test）**可免費替網站憑證打分（A+~D）；**Let's Encrypt** 提供免費憑證、效期僅 90 天，鼓勵自動化排程更新、同時縮短憑證外洩的影響期。

## 應用場景

- **Simon 工作場景**：對公司對外網站與內部服務，用 SSL Labs 定期檢測憑證與協議版本、把仍開著的 TLS 1.0/1.1 與弱密文停用；用 Let's Encrypt＋自動續期腳本管理憑證，避免過期造成服務中斷。
- **一般場景**：Web 服務加密設定、郵件加密、法遵要求（PCI-DSS 等）停用不安全協議。

## 相關概念

- [[man-in-the-middle]]：TLS 是防範中間人攻擊的核心手段；POODLE 則是降級 TLS 觸發 MITM
- [[hash-function]]：TLS 用雜湊確保資料完整性
- [[cvss]]：Heartbleed 等漏洞以 CVSS 評分嚴重度
- [[defense-in-depth]]：傳輸加密是縱深防禦的一層

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
