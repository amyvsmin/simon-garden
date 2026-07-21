---
title: "韌體攻擊面"
slug: firmware-attack-surface
aliases: [firmware attack surface, BIOS, UEFI, 低層攻擊, power conditioner, 電源調節器, 電壓穩壓器, 電源管理]
category: 資安・安全營運
confidence: 已驗證
created: 2026-05-05
---

## 定義

作業系統層以下的可程式化硬體（BIOS／UEFI／嵌入式控制器／電源控制晶片）所暴露的弱點集合；傳統防毒與 EDR 監控範圍無法觸及，成為駭客藏匿後門的低可見度通道。

## 關鍵面向

- EDR / 防毒看不到
- 攻擊者可長期潛伏、難偵測
- 修補需要韌體更新管道（很多設備沒有）

## 電源調節器（Power Conditioner）

穩定電壓、防止突波損壞下游設備的可程式化韌體驅動硬體，廣泛部署於電信、工業自動化、資料中心、消費性電子。是韌體攻擊面的典型實例。
- 作業系統層之下，EDR 看不見
- 韌體可被遠端更新（也可被攻擊者植入）
- 失效時可能直接物理損壞下游設備

## 應用場景

- Simon 工作場景：CISSP、SSCP、ISO 27001、供應鏈風險、Omnissa MDM 端點韌體完整性都引用同一概念；機房 PDU、UPS、電源調節器列入 ISO 27001 資產清冊、機房管理職責直接相關
- 一般場景：資安研究者、紅隊、藍隊、稽核、資料中心維運、工業自動化、電信業

## 相關概念

- [[secure-boot]]：抵禦韌體攻擊的核心控制
- [[supply-chain-risk]]：韌體繼承上游供應鏈風險
- [[critical-infrastructure]]：電源調節器是關鍵基礎設施的薄弱環節

## 尚未解決的疑問

- 中小企業如何在資源有限下做韌體完整性監控

## 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
