---
name: CVSS
aliases: [Common Vulnerability Scoring System, 漏洞評分]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-81cb-b5c8-d1ff2aa02d35
---

## 定義

Common Vulnerability Scoring System，業界通用的漏洞嚴重性量化標準，依攻擊向量、複雜度、衝擊面等維度計分（0.0–10.0），8.8 分屬高風險，常作為修補優先序與內部稽核 KPI 的判斷依據。

## 關鍵面向

- 0.0–10.0 分數表
- Base Score / Temporal Score / Environmental Score 三層
- 業界事實標準（NVD、CVE Mitre 都用）

## 應用場景

- Simon 工作場景：漏洞管理、修補排程、資安 KPI 月簡報、ISO 27001 風險評鑑通用指標
- 一般場景：資安團隊、稽核、SaaS 廠商

## 相關概念

- [[pack2theroot]]：用 CVSS 8.8 分標示嚴重度
- [[supply-chain-risk]]：CVSS 是供應鏈漏洞排序的常見指標

## 尚未解決的疑問

- CVSS v4.0 跟 v3.1 在企業實務上的差異

## 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
