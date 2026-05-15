---
name: PackageKit
aliases: [Linux 套件管理服務, D-Bus, apt, dnf]
category: 網管
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8188-a7fb-ee5cf40ee0dd
---

## 定義

抽象化各 Linux 發行版底層套件管理器（apt、dnf、rpm 等）的中介服務元件，透過 D-Bus 介面提供桌面應用統一的安裝、更新、查詢介面，廣泛內建於 Ubuntu、Debian、Fedora。

## 關鍵面向

- D-Bus 中介，桌面應用不需直接呼叫 apt / dnf
- 影響範圍橫跨主流 Linux
- 因為跨發行版，漏洞影響面也跟著放大

## 應用場景

- Simon 工作場景：ISO 27001 資產盤點 Linux 主機時必盤；修補管理、伺服器強化會用到
- 一般場景：Linux 桌面開發、套件管理稽核

## 相關概念

- [[pack2theroot]]：PackageKit 的高風險漏洞案例
- [[privilege-escalation]]：PackageKit 漏洞的典型攻擊型態

## 尚未解決的疑問

- 中小企業的 Linux 主機如何快速盤點 PackageKit 版本

## 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
