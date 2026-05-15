---
name: Pack2TheRoot
aliases: [CVE-2026-41651, PackageKit 漏洞]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8130-b735-c3e6c3ca21f1
---

## 定義

PackageKit 套件管理服務的本機權限提升漏洞，CVE-2026-41651、CVSS 8.8 分；非特權使用者可在無需密碼的情況下安裝或移除系統套件，進而取得 root 權限。

## 關鍵面向

- 潛伏 14 年（最早可追溯至 0.8.1 版）
- 影響 Ubuntu / Debian / Fedora / Rocky Linux 主流發行版
- PackageKit 1.3.5 版已修補
- 由 Anthropic Claude Opus 協助挖掘

## 應用場景

- Simon 工作場景：ISO 27001 A.12.6.1 技術性弱點管理案例；Google Cyber Course 3 權限提升真實案例；CISSP Domain 3/7 記憶錨點
- 一般場景：Linux 主機修補、稽核、漏洞管理

## 相關概念

- [[packagekit]]：本漏洞所在的套件
- [[privilege-escalation]]：本漏洞的攻擊類型
- [[cvss]]：本漏洞的評分標準
- [[ai-vuln-discovery]]：本漏洞的發現方法

## 尚未解決的疑問

- 為何潛伏 14 年都沒被發現

## 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
