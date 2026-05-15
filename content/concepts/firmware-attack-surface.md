---
name: 韌體攻擊面
aliases: [firmware attack surface, BIOS, UEFI, 低層攻擊]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-819f-b47e-d46c4fd90aba
---

## 定義

作業系統層以下的可程式化硬體（BIOS／UEFI／嵌入式控制器／電源控制晶片）所暴露的弱點集合；傳統防毒與 EDR 監控範圍無法觸及，成為駭客藏匿後門的低可見度通道。

## 關鍵面向

- EDR / 防毒看不到
- 攻擊者可長期潛伏、難偵測
- 修補需要韌體更新管道（很多設備沒有）

## 應用場景

- Simon 工作場景：CISSP、SSCP、ISO 27001、供應鏈風險、Omnissa MDM 端點韌體完整性都引用同一概念
- 一般場景：資安研究者、紅隊、藍隊、稽核

## 相關概念

- [[power-conditioner]]：韌體攻擊面的典型實例
- [[secure-boot]]：抵禦韌體攻擊的核心控制
- [[supply-chain-risk]]：韌體繼承上游供應鏈風險

## 尚未解決的疑問

- 中小企業如何在資源有限下做韌體完整性監控

## 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
