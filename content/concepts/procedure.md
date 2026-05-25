---
title: "程序（Procedure）"
slug: procedure
aliases: [Procedure, 程序, 操作程序, SOP, Standard Operating Procedure, 標準作業程序, 操作指引]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義

落實 [[policy]]（政策）的逐步操作指引，明確規定「誰在什麼情況下做什麼、按什麼順序做」。程序是治理架構中最接近執行層的文件，直接指導日常操作。

## 關鍵面向

- **層級定位**：[[regulations]]（法規）→ [[policy]]（政策）→ [[standard]]（標準）→ 程序（操作步驟），程序在最底層、最具體
- **特性**：步驟化、可重複執行、通常含截圖或指令範例；修改頻率比政策高（系統或工具更新時就需連動更新）
- **好的程序特徵**：每一步有明確動作（動詞開頭）、指明使用的工具或系統、包含例外處理路徑、有版本控制與審核紀錄
- **與 checklist 的差異**：程序是敘述性的操作指引，checklist 是確認表；兩者常搭配使用
- **ISO 27001 對應**：多項 Annex A 控制措施要求「建立程序」，如 A.16.1 事件管理程序、A.9.2 帳號管理程序

## 應用場景

- **Simon 工作場景**：SQL Server MFA + Kerberos 專案目標之一就是產出可重用 SOP；事件回應程序（IR SOP）是 ISO 27001 必備；帳號離職程序（[[soft-disable-vs-hard-delete]]）需文件化
- **一般場景**：所有 IT 維運團隊的標準交付物；新進人員 onboarding 依程序操作；稽核時程序文件是合規證據

## 相關概念

- [[policy]]：程序是政策的具體執行落實
- [[standard]]：標準定義要達到的門檻，程序定義怎麼達到
- [[regulations]]：法規要求通常透過政策→標準→程序三層落地
- [[patch-management]]：修補管理的典型流程就是程序化的六步驟

## 來源

- Course 5 Assets, Threats, and Vulnerabilities — Module 1
