---
name: 關鍵基礎設施
aliases: [critical infrastructure, CIP, 關鍵資訊基礎設施]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8193-839f-c6a8571b8425
---

## 定義

電網、水資源、天然氣、電信、金融、運輸等一旦中斷將危及公共安全與經濟運作的系統；台灣 NCCST、美國 CISA 皆有對應分類，近年已從純 IT 風險擴展到 OT／韌體層。

## 關鍵面向

- 跨產業、跨國家定義一致
- 攻擊代價高（國家支持的攻擊者目標）
- 風險已從 IT 下沉到 OT 與電力層
- **Harvest Now Decrypt Later 主要目標**：Palo Alto Unit 42 觀察、國家級攻擊者已在大量收集加密敏感資料、等量子電腦成熟解密
- **台灣九類別**（陳伯榆 CYBERSEC 2026）：銀行、交通（港口／機場／高鐵）、水資源、能源（中油／台電）、通訊傳播、糧食、政府機關、高科技產業

## 應用場景

- Simon 工作場景：CISSP Domain 1（風險管理）、ISO 27001 範圍界定、iPAS 中級資安都會用到
- 一般場景：政府單位、公用事業、稽核

## 相關概念

- [[power-conditioner]]：關鍵基礎設施的薄弱環節
- [[firmware-attack-surface]]：CIP 風險已沉到韌體層
- [[supply-chain-risk]]：CIP 採購多來自全球供應鏈

## 尚未解決的疑問

- 私有企業如何配合國家級 CIP 防護要求

## 來源（自動維護）

- [[2026-04-29-itron-power-conditioner-attack]]
- [[2026-05-06-palo-alto-harvest-now-decrypt-later-cybersec]]
- [[2026-05-06-cisco-aging-infrastructure-cybersec]]
