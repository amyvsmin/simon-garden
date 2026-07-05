---
title: "CVSS"
slug: cvss
aliases: [Common Vulnerability Scoring System, 漏洞評分]
category: 資安
confidence: 已驗證
created: 2026-05-05
---

## 定義

Common Vulnerability Scoring System，業界通用的漏洞嚴重性量化標準，依攻擊向量、複雜度、衝擊面等維度計分（0.0–10.0），8.8 分屬高風險，常作為修補優先序與內部稽核 KPI 的判斷依據。

## 關鍵面向

- 風險分級：低 0.1–3.9／中 4.0–6.9／高 7.0–8.9／重大（Critical）9.0–10.0
- Base Score / Temporal Score / Environmental Score 三層；4.0 版（FIRST 2023 發布）在基礎分外正式提出 CVSS-BT（威脅情資）、CVSS-BE（環境因素）、CVSS-BTE（綜合評估），指標組分 Base／Threat／Environmental／Supplemental 四組
- 業界事實標準（NVD、CVE Mitre 都用）；MITRE 發 CVE 編號、NVD 評 CVSS 分數
- **實務現狀**：理論上企業該按自身環境做威脅與環境加權，實務上資安人員鮮少有餘裕——「NVD 給幾分、企業就照單全收」（DevOpsDays 高于凱）
- **四個盲點（分數高 ≠ 會被打）**：基礎分不含時間因素（漏洞發現 5 年後分數不變、Exploit 工具可能早已成熟）；不含你的環境情境（系統沒暴露在網際網路、Critical 也跟你無關）；Critical 通膨（NVD 2024 年 Critical 級 CVE 超過 4,000 個、每個都最高優先等於沒有優先順序）；同分漏洞被利用差異巨大（同為 9.8、有的從未被利用、有的已被 APT 組織納入攻擊工具箱）——所以要搭配 [[epss]] 與 [[kev]] 一起判

## 應用場景

- Simon 工作場景：漏洞管理、修補排程、資安 KPI 月簡報、ISO 27001 風險評鑑通用指標
- 一般場景：資安團隊、稽核、SaaS 廠商

## 相關概念

- [[pack2theroot]]：用 CVSS 8.8 分標示嚴重度
- [[supply-chain-risk]]：CVSS 是供應鏈漏洞排序的常見指標
- [[epss]]：互補維度——CVSS 講嚴重度、EPSS 講被利用機率
- [[kev]]：實證權重可蓋過 CVSS 理論分數
- [[vulnerability-prioritization]]：CVSS 是漏斗式篩選的第一層、「起點但不是終點」

## 尚未解決的疑問

- ~~CVSS v4.0 跟 v3.1 在企業實務上的差異~~（2026-07-02 部分解答：4.0 新增 BT／BE／BTE 與 Supplemental 指標組、但實務上大家最常引用的仍是 NVD 基礎分）

## 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
- [[2026-07-02-ithome-cvss-epss-kev]]
- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
