---
title: 美國電力商 Itron 遭駭與 DC 電源調節器新攻擊面 — 關鍵基礎設施資安警訊
date: 2026-04-29
type: 來源分析
url: https://www.informationsecurity.com.tw/article/article_detail.aspx?aid=12865
tags: [cybersecurity, ot, firmware, critical-infrastructure]
concepts: [power-conditioner, firmware-attack-surface, critical-infrastructure, supply-chain-risk, secure-boot]
inbox-id: 351f85da-554f-8188-973a-f0cf6e70a728
notion-page-id: 351f85da-554f-8142-8448-df618c34875d
---

## 摘要

美國公用事業科技商 Itron 於 2026-04-13 揭露部分內部系統遭未授權存取，已封鎖入侵並引入外部顧問調查，未擴及客戶端。同時資安研究人員示警直流電源調節器正成為新興攻擊面，因其運作於作業系統層之下，傳統防毒與 EDR 工具無法監控，攻擊者可建立後門悄悄藏匿、影響效能、觸發關機甚至實體損壞硬體。意法半導體可程式化電源設備累積數十筆 CVE，凸顯韌體繼承軟體供應鏈風險。專家建議將電源調節納入資安架構，強制密碼簽署與安全開機，搭配網路分割與持續監控等既有實踐。

## 核心概念

- [[power-conditioner]]：穩壓的可程式化韌體硬體，作業系統層之下的低可見度節點
- [[firmware-attack-surface]]：EDR 看不到的層級，駭客建後門與長期潛伏的新通道
- [[critical-infrastructure]]：電網水網等公共服務系統，風險已從 IT 下沉到 OT 與電力層
- [[supply-chain-risk]]：韌體繼承軟體供應鏈風險，CVE 揭露速度令人擔憂
- [[secure-boot]]：配合密碼簽署，是抵禦韌體層植入的核心控制

## 對 Simon 的應用

- **ISO 27001 資產盤點**：把機房 PDU、UPS、電源調節器列入資產清冊，並標記「韌體版本／簽章狀態」欄位；後續可作為控制 A.8.9（組態管理）佐證
- **CISSP 學習素材**：本文可作為領域 1 風險管理（CIP 案例）、領域 3 安全架構（安全開機、密碼簽署）、領域 4 網路安全（網路分割）的綜合案例題材
- **Omnissa MDM POC**：把「端點韌體完整性與安全開機策略」加入 POC 評估清單，檢查 MDM 是否能回報筆電 Secure Boot 狀態與韌體版本
- **BIGFIX POC 評估面向**：若 POC 進到實作階段，可加一個維度「是否能盤點韌體與電源相關元件版本」
- **資安 KPI 月簡報素材**：「機房電源／OT 攻擊面」屬於可寫入趨勢章節的新議題，幫主管 Sam 補一筆對外資安事件的脈絡
- **Google Cybersecurity 學習聯動**：學完課程 3（Connect and Protect）的網路分割概念後，本案是真實情境的延伸閱讀

## 原文要點

- Itron 於 2026-04-13 接獲通報，有未授權第三方存取部分內部系統；現已封鎖、通知執法、引入外部顧問，未擴及客戶端，無勒索軟體組織宣稱負責
- Itron 為總部位於華盛頓州的上市公用事業科技商，員工 5,600 人，2025 年營收 24 億美元，端點管理規模 1.12 億個，覆蓋電網／水／天然氣三大基礎設施
- NCC Group Andy Davis 指出，DC 電源調節器運作於作業系統之下，傳統防毒無法觸及，攻擊者可悄悄建立後門
- ExtraHop Chad LeMaire 表示成功入侵者可影響效能、觸發關機，甚至實體損壞硬體；建議強制密碼簽署、安全開機、網路分割、持續監控
- NetRise Gary Schwartz 點出意法半導體可程式化電源設備在美國 NVD 已累積數十筆韌體與支援軟體 CVE
- AI 與量子運算高耗電需求推升電源管理系統複雜度，預計此攻擊面將持續攀升

## 原始連結

- 原文：https://www.informationsecurity.com.tw/article/article_detail.aspx?aid=12865
- 短網址來源：https://share.google/QvpXfddap5YqItXs1
- 媒體：資安人雜誌（資安人科技網）
