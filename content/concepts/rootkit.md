---
title: "Rootkit（根工具組）"
slug: rootkit
aliases: [Rootkit, root kit, 根工具組, 根工具包]
category: 資安・安全營運
confidence: 已驗證
created: 2026-07-19
---

## 定義

用來在系統建立後門並提供遠端管理存取的 [[malware]]。攻擊者取得持續存取後，可再安裝其他惡意程式或發動後續網路攻擊。

## 關鍵面向

- **目標是維持高權限存取**：價值在於讓攻擊者持續控制，而不只是一次性破壞。
- **常採多階段投遞**：課程描述 dropper 偽裝成合法檔案投遞程式碼，再由 loader 下載並安裝後續內容。
- **是 malware 成員，不是 malware 的同義詞**：需獨立辨識其持久化與後門特性。

## 應用場景

- 發現不明遠端管理能力、持久化機制或多階段下載行為時，把 rootkit 列入假設。
- 清除時不能只刪初始投遞檔，也要確認後門與後續 payload 是否仍存在。

## 相關概念

- [[malware]]：rootkit 所屬上位類別。
- [[command-and-control]]：後門建立後常需持續接收攻擊者指令。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-2-malware/1-malicious-software|Malicious software]]
