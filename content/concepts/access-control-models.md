---
title: "存取控制模型（DAC / MAC / RBAC / ABAC / RuBAC）"
slug: access-control-models
aliases: [存取控制模型, Access Control Models, DAC, MAC, RBAC, ABAC, RuBAC, 任意型存取控制, 強制型存取控制, 角色型存取控制, 屬性型存取控制, 規則型存取控制, 存取控制類型]
category: 資安
confidence: 已驗證
created: 2026-07-04
---

## 定義

決定「哪個主體能對哪個資源做什麼操作」的五種授權模型。回答的是 [[authorization]]（你能存取什麼）而非 [[authentication]]（你是誰）。各模型差在「由誰、依什麼準則」決定權限。

## 關鍵面向

- **DAC（任意型 Discretionary）**：資源擁有者／管理員自行決定給誰權限，設定簡單但大規模難管理；用 ACL 可層層授權。Windows NTFS 檔案權限是典型。
- **MAC（強制型 Mandatory）**：依機密等級貼標籤（Top Secret/Secret…），系統強制比對主體與客體標籤，個人不能自行放寬；常用於軍事與關鍵基礎設施。相關模型 BLP（保機密）、Biba（保完整）。
- **RBAC（角色型 Role-Based）**：權限綁在**角色／群組**、使用者被指派角色，一個使用者可有多角色；管理彈性高、企業最常用，**近年常考**。
- **ABAC（屬性型 Attribute-Based）**：依使用者屬性＋環境條件（IP、時間、設備健康度）動態決定；是 [[zero-trust]] 的核心機制，**今年已考**。
- **RuBAC（規則型 Rule-Based）**：依事先定義的規則／策略（如防火牆 policy）判斷，**不看使用者角色**。
- **選用心法**：要嚴格分級保機密→MAC；企業日常大量帳號→RBAC；細緻情境化＋零信任→ABAC；設備策略導向（防火牆）→RuBAC。

## 應用場景

- **Simon 工作場景**：AD 群組權限＝RBAC；防火牆規則＝RuBAC；ISO 27001 存取控制政策要能講清楚公司用哪種模型、對應最小權限與職務區隔。
- **一般場景**：作業系統檔案權限、雲端 IAM policy、資料庫授權。

## 相關概念

- [[authorization]]：存取控制模型是授權的具體實作方式
- [[principle-of-least-privilege]]：所有模型都應在最小權限前提下設定
- [[separation-of-duties]]：與 RBAC 搭配防止單人權力過大
- [[zero-trust]]：ABAC 是零信任動態授權的基礎
- [[aaa-framework]]：授權（Authorization）是 AAA 的中段

## 來源

- [[1-learning/ipas/subject-1-planning/training-day1/2-cryptography-iam-and-risk|iPAS 培訓班 Day 1 下午 · 密碼學/IAM/風險]]
