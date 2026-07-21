---
title: "資料治理角色（Data Governance Roles）"
slug: data-governance-roles
aliases: [Data Governance Roles, data governance roles, 資料治理角色]
category: 資安・資產安全
confidence: 已驗證
created: 2026-06-23
---

## 定義
資料治理（[[data-governance]]）中、與資料保護及事件升級相關的五種角色：data owner（擁有者）、data controller（控管者）、data processor（處理者）、data custodian（保管者）、data protection officer（DPO，保護長）。釐清這些角色，能讓分析師知道「哪一類事件該升級給誰」。

## 關鍵面向
- **Data owner（資料擁有者）**：決定誰能存取／編輯／使用／銷毀某項資訊；對存放該資訊的硬體或軟體有管理控制權，並對資料的分類、保護、存取、使用負最終責任。例：員工取得工作上不需用到的軟體之未授權存取 → 升給該軟體的 data owner
- **Data controller（資料控管者）**：決定處理資料的目的與程序、聚焦蒐集客戶個資、並確保合規。敏感客戶資訊有風險 → 升給 data controller
- **Data processor（資料處理者）**：直屬 controller、代為處理資料，通常是廠商（vendor）、常負責安裝保護措施。處理問題 → 升給負責該第三方的窗口
- **Data custodian（資料保管者）**：實際指派與撤銷存取、落實並監控安全控制、訂儲存與傳輸政策。控制需強化或已被破壞 → 通知 custodian
- **Data protection officer（DPO，資料保護長）**：監督組織資料保護程序的內部合規、提供義務建議與評估。標準或協定被違反 → 通知 DPO
- **實務定位**：不同組織角色名稱可能不同；entry-level 分析師通常升給直屬主管，但要懂這些角色才知道事件最終該報給誰

## 應用場景
- **Simon 工作場景**：ISO 27001 資產與權限治理——盤點誰能存取哪台主機其實就是釐清 owner／custodian；評估委外廠商、簽資料處理合約時要分清 controller／processor 的責任歸屬
- **一般場景**：GDPR 控管者／處理者／DPO 的法定角色、企業資料治理 RACI

## 相關概念
- [[data-governance]]：本角色體系所屬的上位治理框架
- [[data-classification]]：owner 對資料分類負責
- [[legally-protected-information]]：controller／DPO 主要守護的個資
- [[incident-escalation]]：角色決定事件升給誰
- [[acceptable-use-policy]]：違規事件常升給對應的 owner

## 來源
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-2-to-escalate-or-not-to-escalate/2-recognize-roles-and-responsibilities-during-escalation|Course 8 Module 2 Section 2 Leaf 2 Recognize roles and responsibilities during escalation]]
