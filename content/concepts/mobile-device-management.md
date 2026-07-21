---
title: "行動裝置管理 MDM／MAM／UEM（Mobile Device & Endpoint Management）"
slug: mobile-device-management
aliases: [MDM, MAM, UEM, 行動裝置管理, 端點裝置管理, Mobile Device Management, Mobile Application Management, Unified Endpoint Management]
category: 資安・安全營運
confidence: 已驗證
created: 2026-07-06
---

## 定義

管理公司裝置與其上應用程式的工具家族，重點在「管好設備、確保合規」，而非偵測威脅（那是 EDR 那一路）。MDM、MAM、UEM 是「管理範圍逐步擴大」的演進：從管整台裝置、到只管公司 App、再到統管所有端點。

## 關鍵面向

- **MDM（Mobile Device Management）**：管「整台裝置」，可遠端鎖定、清除、強制密碼、限制功能。粒度大、連個人的也管，適合公司配發設備。
- **MAM（Mobile Application Management）**：只管裝置上的公司 App 與其資料、不碰個人部分。粒度細，適合 BYOD 員工自帶設備、不侵犯個人隱私。
- **UEM（Unified Endpoint Management）**：把手機、平板、筆電、桌機等所有端點整合到一個平台統管，是管理範圍最大的演進終點。
- **演進邏輯**：MDM（管整台，但 BYOD 下員工反感個人手機被全控）→ MAM（只管公司 App 與資料）→ UEM（再納入筆電、桌機，一個平台統管所有端點）。
- **與偵測回應家族的分野**：這組是「管理裝置與應用程式」家族；[[edr]]、SIEM、SOAR 是「偵測與回應」家族。判斷產品時看「能力」不看名稱——市場產品會互相融合（防毒加行為分析、MDM 加威脅偵測），名稱因行銷而模糊、能力不會。
- **行動裝置管理模式（配套政策）**：BYOD（Bring Your Own Device，員工自帶、安全低自由高）／COPE（Corporate-Owned, Personally Enabled，公司配發允許私用、居中）／COBO（Corporate-Owned, Business Only，公司配發僅限公務、安全高自由低）。

## 應用場景

- **Simon 工作場景**：公司端點與行動裝置的統一納管與合規落地，正對應曾評估的 Omnissa Workspace ONE MDM POC（測 Windows 筆電遠端鎖定、抹除、定位）；MDM 管整台適合公司配發機、MAM 只管公司 App 適合員工自帶機不侵犯隱私，選型看裝置歸屬與 BYOD／COPE／COBO 政策。
- **一般場景**：企業手機艦隊管理、遠端辦公筆電合規基線、遺失裝置的遠端清除。

## 相關概念

- [[edr]]：同屬端點但分屬不同家族——MDM 家族管理合規、EDR 家族偵測回應
- [[security-hardening]]：MDM 強制密碼、限制功能是端點強化的落地手段
- [[legally-protected-information]]：MAM 只管公司資料、隔開個人部分，兼顧個資保護
- [[zero-trust]]：裝置合規狀態是零信任存取決策的重要訊號

## 來源

- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
