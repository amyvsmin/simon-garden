---
title: "權限蔓延（Privilege Creep）"
slug: privilege-creep
aliases: [privilege creep, 權限蔓延, 權限膨脹, 權限累積, permission creep, access creep, 累積權限]
category: 資安
confidence: 待驗證
created: 2026-05-25
---

## 定義
員工因部門轉調、職務變更或專案結束後，原有權限未被收回，導致逐漸累積超出當前職務所需的存取權限。是違反 [[principle-of-least-privilege]] 最常見的型態，長期下來會顯著擴大攻擊面。

## 關鍵面向
- **成因**：轉調時只加新權限不收舊權限、專案結束後臨時權限未撤銷、主管直接複製前任者的權限設定
- **風險放大**：帳號被攻陷時，攻擊者直接繼承所有累積權限；內部人員（[[insider-threat]]）濫用的空間更大
- **偵測方法**：定期權限審查（access review）、與 HR 異動資料交叉比對、UEBA 偵測異常存取模式
- **預防機制**：角色式存取控制（RBAC）+ 定期清點 + 離職／轉調 SOP 自動觸發權限重設
- **補償控制**：無法即時修正時，至少加強該帳號的日誌監控與異常告警

## 應用場景
- **Simon 工作場景**：ISO 27001 A.9.2.5 要求定期審查使用者存取權限；員工轉部門時 AD 群組權限清點；公司季度 audit 檢查是否有離職員工帳號仍啟用；Omnissa MDM 裝置群組權限也可能蔓延
- **一般場景**：雲端服務 IAM 角色定期清理、SaaS 帳號權限年度覆核、特權帳號管理（PAM）系統自動化

## 相關概念
- [[principle-of-least-privilege]]：權限蔓延是 PoLP 的反面
- [[separation-of-duties]]：SoD 被權限蔓延破壞時，單人可完成應分離的操作
- [[insider-threat]]：累積過多權限的內部人員風險更高
- [[authorization]]：權限蔓延的根源在於授權管理不到位
- [[soft-disable-vs-hard-delete]]：離職流程的帳號處理直接影響權限蔓延

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 2
