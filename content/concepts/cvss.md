---
title: "CVSS"
slug: cvss
aliases: [Common Vulnerability Scoring System, 漏洞評分]
category: 資安・評估與測試
confidence: 已驗證
created: 2026-05-05
---

## 定義

Common Vulnerability Scoring System，業界通用的漏洞嚴重性量化標準，依攻擊向量、複雜度、衝擊面等維度計分（0.0–10.0），8.8 分屬高（High）等級，常作為修補優先序與內部稽核 KPI 的判斷依據。

## 關鍵面向

- 定性嚴重性分級（Qualitative Severity Rating Scale，**分的是嚴重性、不是風險**；NVD 原文：CVSS is not a measure of risk）：無 0.0／低 0.1–3.9／中 4.0–6.9／高 7.0–8.9／重大（Critical）9.0–10.0。**定性等級是 v3.0 才正式寫進規格的**：v2.0 規格本身沒有官方定性等級，常見的 v2「低／中／高、7.0–10.0 為高、無重大級」是 NVD 自行標註的（NVD 原文：The NVD notates qualitative severity ratings of "Low", "Medium", and "High" for CVSS v2.0 base score ranges in addition to the qualitative severity ratings for CVSS v3.x and CVSS v4.0 as they are defined in their respective specifications）
- **度量組沿革（v2.0–v3.1 三組 → v4.0 四組）**：v2.0（2007）到 v3.1（2019）的規格都是 Base／Temporal／Environmental 三組；2023 年 11 月發布的 v4.0 改成 Base／Threat／Environmental／Supplemental 四組，並定義四種分數命名（規格 Nomenclature 表）：CVSS-B（只用 Base）、CVSS-BT（Base ＋ Threat）、CVSS-BE（Base ＋ Environmental）、CVSS-BTE（三組全用）。**實務上流通的幾乎只有 CVSS-B**，規格 Additional Notes 明講評分提供者與 NVD 這類機構通常只給 Base 分數（typically provide only the Base Scores enumerated as CVSS-B）。**考題易錯點：v4.0 的 Threat 不是把 Temporal 改個名字而已**——原 Temporal 組的修補等級（Remediation Level，RL）與報告可信度（Report Confidence，RC）已退場，Threat 組現在只剩漏洞利用成熟度（Exploit Maturity，E）一個度量。所以「CVSS 只由基本、時間、環境三個度量組構成」這句話對 v3.1 以前成立、對現行版本不成立
- **Supplemental（補充度量組）不計入分數**：六個度量——安全性（Safety，S）、可自動化（Automatable，AU）、供應者急迫性（Provider Urgency，U）、可復原性（Recovery，R）、價值密度（Value Density，V）、弱點應變投入（Vulnerability Response Effort，RE）。規格 Metrics 章明文「No metric will, within its specification, have any impact on the final CVSS score (e.g. CVSS-BTE)」（同一份文件的 Supplemental Metrics 專章措辭略有出入、多一個 calculated，引用時標章節較不易被挑），這組是給消費端做決策參考用、不動分數
- **Environmental（環境度量組）分兩個子組**：安全需求（Security Requirements，CR／IR／AR）讓消費端依受影響資產對組織的重要性調整；修改後基本度量（Modified Base Metrics）讓消費端依自身環境特性覆寫個別 Base 度量值——**既有的緩解與補償控制就是由這個子組承接的**（規格原文：define the mitigations and compensating controls that are in place for a given environment）。兩點易誤解：①覆寫**不是只會降分**，規格明講可以用來表達讓分數變高的情境（It is acceptable to use the modified metrics to represent situations that increase the resulting score）；②兩個子組不平行獨立，CR／IR／AR 的效果要靠對應的 Modified Base Impact 度量才實現
- **「CVSS 分數 ≠ 風險」的精確判準（最常講反的地方，v4.0 改過口徑）**：一個常見但錯誤的說法是「CVSS 沒把資產價值、既有控制、威脅可能性算進去，所以不等於風險」。錯在把 Base 分數的限制當成整套 CVSS 的限制——資產重要性由 Environmental 的 CR／IR／AR 承接，既有控制由 Modified Base Metrics 承接，威脅可能性由 Threat 的 Exploit Maturity 承接，三者規格內都有對應度量。**官方那句「不可單獨用來評估風險」限定的主詞是 Base 分數、不是整套 CVSS**：v4.0 User Guide 的章名逐字是 `CVSS Base Score (CVSS-B) Measures Severity, not Risk`，而同一章對補齊三組後的分數給的是相反方向的陳述——`For an organization that employs automated methods to comprehensively utilize the Environmental and Threat metric groups, the resulting CVSS-BTE score can be considered much closer to "Risk"`。這正是 v3.1 到 v4.0 的口徑變更：v3.1 User Guide 第 2.1 節原句沒限定主詞（`CVSS is designed to measure the severity of a vulnerability and should not be used alone to assess risk`），v4.0 才改成限定 CVSS-B，FIRST 列的 v4.0 變更第一條就是 `Reinforce the concept that CVSS is not just the Base score`。所以正確判準是：**CVSS-B 只是嚴重性、不可單獨評估風險；CVSS-BTE 已被官方認為相當接近風險，但仍不是完整的風險評估**——因為規格另舉了一批不在 CVSS 範圍內的因子（非窮舉，v4.0 規格 Introduction 版本）：法規要求、受影響客戶數、資料外洩的金錢損失、危及人命或財產、商譽衝擊（原文：Such factors may include, but are not limited to: regulatory requirements, number of customers impacted, monetary losses due to a breach, life or property threatened, or reputational impacts of a potential exploited vulnerability. These factors are outside the scope of CVSS。注意 v3.1 規格的對應清單措辭不同，引用時要標版本）
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

- ~~CVSS v4.0 跟 v3.1 在企業實務上的差異~~（2026-07-02 部分解答：4.0 新增 BT／BE／BTE 與 Supplemental 指標組、但實務上大家最常引用的仍是 NVD 基礎分。2026-08-02 補完規格層差異：Temporal 更名 Threat 且 RL／RC 退場、Supplemental 六度量不計分、Environmental 兩子組分工、定性等級的版本歸屬，均已對 FIRST v4.0 規格與 NVD 原文核對，見上方關鍵面向）

## 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
- [[2026-07-02-ithome-cvss-epss-kev]]
- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
