---
title: "SOC 服務組織控制報告（SOC Report）"
slug: soc-report
aliases: [SOC Report, SOC 報告, 服務組織控制報告, SOC 1, SOC 2, SOC 3, Service Organization Control]
category: 資安・風險管理
confidence: 已驗證
created: 2026-07-06
---

## 定義

評估「服務組織」（如雲端業者、資料中心、外包 IT）內部控制是否健全的第三方稽核報告。當你把系統或資料交給外部供應商，你沒辦法親自進去查它做得好不好，就靠它委託獨立稽核師出具的 SOC 報告來取得保證。注意別跟資安監控中心（Security Operation Center，同縮寫 SOC）搞混，那是團隊、這是報告。

## 關鍵面向

- **依範圍分三型**：SOC 1（針對影響客戶財務報告的內部控制）／SOC 2（針對安全性、可用性、處理完整性、機密性、隱私五項信任服務準則）／SOC 3（SOC 2 的公開簡化摘要版）。評估雲端與 IT 服務安全時看的是 SOC 2／SOC 3。
- **依時間維度分兩型**：Type 1 評「某一時間點」的控制設計適當性（設計對不對）；Type 2 評「一段期間（6–12 個月）」的控制運作有效性（不只設計對、還真的持續有在運作）。Type 2 分量比 Type 1 重。
- **SOC 2 詳細但受限**：內容完整，但要看得簽 NDA（保密協定）或有業務往來才拿得到。
- **SOC 3 公開可下載**：是對外的摘要版，任何人可從官網直接下載，用來對外證明「我有做」。實務上想看 AWS、Azure 的 SOC 2 要先簽 NDA，SOC 3 則直接下載即可。

## 應用場景

- **Simon 工作場景**：導入或續用雲端服務、外包 IT 供應商時，SOC 2 Type 2 報告是評估對方內控、寫進 ISO 27001 供應商管理與 [[supply-chain-risk]] 評鑑的關鍵佐證；先抓公開的 SOC 3 初篩，需要細節再走 NDA 拿 SOC 2。BIA 或稽核要證明「委外部分的控制有人把關」時，這份報告就是現成證據。
- **一般場景**：企業採購 SaaS／IaaS、金融與受監管產業的第三方風險管理、供應商資安盡職調查。

## 相關概念

- [[supply-chain-risk]]：SOC 報告是評估第三方／供應鏈內控最常用的稽核依據
- [[security-control-types]]：報告評的正是服務組織布署的各類控制措施是否有效
- [[nist-sp-800-53]]：SOC 2 的信任服務準則與正式控制目錄框架相互呼應
- [[three-lines-of-defense]]：SOC 由獨立稽核師出具，等同把「第三道獨立驗證」外包給客戶信任的第三方

## 來源

- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
