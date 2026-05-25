---
title: "進階持續性威脅（Advanced Persistent Threat / APT）"
slug: apt
aliases: [APT, Advanced Persistent Threat, 進階持續性威脅, 高級持續性威脅, 國家級攻擊]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義

由國家政府或資源充沛的組織發動，針對特定目標進行長期、隱蔽、多階段的網路攻擊行動。「Advanced」指技術精密、「Persistent」指潛伏時間長（數月到數年）、「Threat」指具明確戰略目標。

## 關鍵面向

- **特徵三要素**：高度客製化攻擊工具、長期潛伏不求速戰速決、明確的情報蒐集或破壞目標
- **攻擊鏈**：偵察 → 初始入侵（常用魚叉式釣魚）→ 建立據點 → 橫向移動 → 資料外洩 → 持續潛伏
- **產業偏好**：半導體、國防、能源、金融、電信是常見目標產業
- **已知案例**：[[earth-kurma]]（東南亞政府與電信商）、APT41（中國）、Lazarus Group（朝鮮）
- **防禦挑戰**：傳統特徵碼偵測難以發現 APT 使用的 [[zero-day]]；需要 [[defense-in-depth]] + 行為分析 + 威脅情報

## 應用場景

- **Simon 工作場景**：光電半導體產業是 APT 的高價值目標，供應鏈（[[supply-chain-risk]]）和智財是主要攻擊動機；ISO 27001 風險評鑑需將 APT 列為最高等級威脅來源；[[security-hardening]] 和 [[patch-management]] 是基本防禦底線
- **一般場景**：國家關鍵基礎設施（[[critical-infrastructure]]）的首要威脅；SOC 團隊需具備 APT 狩獵（threat hunting）能力

## 相關概念

- [[threat-actor]]：APT 組織是國家級威脅行為者的代表
- [[earth-kurma]]：vault 中已記錄的 APT 組織案例
- [[insider-threat]]：APT 有時會收買內部人員作為初始入侵管道
- [[attack-vector]]：APT 常用多條攻擊向量並行突破
- [[vulnerability-management]]：持續性的漏洞管理是抵禦 APT 的基礎

## 來源

- Course 5 Assets, Threats, and Vulnerabilities — Module 3
