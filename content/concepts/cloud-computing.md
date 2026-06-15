---
title: "雲端運算（Cloud Computing）"
slug: cloud-computing
aliases: [cloud computing, 雲端運算, 雲端服務, cloud, 雲, IaaS, PaaS, SaaS, 雲端]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
透過網路按需使用共享運算資源（伺服器、儲存、資料庫、網路、應用程式）的服務模式，使用者不需自行購置與維護實體硬體。NIST SP 800-145 定義五大特性：按需自助、廣泛網路存取、資源池化、快速彈性、計量服務。

## 關鍵面向
- **服務模式**：IaaS（基礎設施即服務，如 AWS EC2）、PaaS（平台即服務，如 Heroku）、SaaS（軟體即服務，如 Notion、Google Workspace）
- **部署模式**：公有雲、私有雲、混合雲、社群雲——安全控制責任依模式不同而分配
- **共享責任模式**：雲端供應商負責基礎設施安全，客戶負責資料與存取控制安全；IaaS 客戶責任最大、SaaS 最小
- **資安風險**：資料外洩、帳號劫持、不安全的 API、設定錯誤（misconfiguration 是雲端事件首因）
- **合規挑戰**：資料落地（data residency）、跨境傳輸、多租戶隔離

## 應用場景
- **Simon 工作場景**：公司可能使用混合雲架構（地端機房 + 雲端服務）；Omnissa MDM 本身是 SaaS；Veeam 備份可對接雲端儲存；Cloudflare Workers 是 Simon 個人 serverless 應用
- **一般場景**：企業數位轉型上雲、新創以雲原生架構起步、災難復原即服務（DRaaS）

## 相關概念
- [[cia-triad]]：雲端環境下 CIA 的挑戰與地端不同
- [[data-lifecycle]]：雲端資料的生命週期管理需考慮供應商鎖定
- [[cryptography]]：雲端靜態與傳輸加密是基本要求
- [[sso-single-sign-on]]：雲端多服務環境下 SSO 是存取管理關鍵
- [[mfa-multi-factor-authentication]]：雲端帳號 MFA 是防帳號劫持的第一道防線

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
