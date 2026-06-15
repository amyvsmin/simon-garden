---
title: "安全強化（Security Hardening）"
slug: security-hardening
aliases: [Security Hardening, 安全強化, 系統強化, 系統加固, hardening, 安全加固, OS hardening]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
移除不必要的服務、關閉預設帳號、縮減攻擊面的系統加固流程。安全強化的核心原則是「系統預設狀態通常不安全」——出廠設定為了方便使用犧牲了安全性，需要主動加固。

## 關鍵面向
- **常見措施**：關閉不必要的服務與埠口、移除預設帳號與密碼、啟用日誌與稽核、設定防火牆規則、移除不必要的軟體
- **CIS Benchmarks**：Center for Internet Security 發布的各系統安全基準設定指南（Windows、Linux、雲端平台等），是強化的標準參考
- **最小安裝原則**：只安裝必要元件，減少 [[attack-surface]]
- **持續性**：不是一次性動作，系統每次更新或變更後都需要重新檢視
- **自動化**：Ansible、Puppet、BIGFIX 等工具可自動化強化流程，確保一致性

## 應用場景
- **Simon 工作場景**：公司伺服器上線前應對照 CIS Benchmark 做強化；BIGFIX POC 可自動化部署強化設定；ISO 27001 A.12.6 技術弱點管理涵蓋系統強化
- **一般場景**：雲端 VM 的安全基線設定、Docker 容器的安全強化、新部署伺服器的標準化加固 SOP

## 相關概念
- [[attack-surface]]：安全強化的直接效果是縮減攻擊面
- [[defense-in-depth]]：安全強化是縱深防禦中主機層的核心實作
- [[security-control]]：安全強化是技術性控制措施的集合
- [[vulnerability]]：強化可消除設定面弱點
- [[principle-of-least-privilege]]：強化的核心指導原則之一

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
