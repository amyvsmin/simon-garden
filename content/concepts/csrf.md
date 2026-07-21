---
title: "CSRF（跨站請求偽造）"
slug: csrf
aliases: [CSRF, 跨站請求偽造, Cross-Site Request Forgery, One-Click Attack, 一鍵攻擊]
category: 資安・軟體開發安全
confidence: 已驗證
created: 2026-07-05
---

## 定義

一種 Web 攻擊：攻擊者利用受害者「已登入某網站」的身份狀態，誘導受害者在不知情下對該網站發出未授權的請求（如轉帳、改密碼、改帳戶資訊）。因為受害者常常只要點一下惡意連結就中招，又稱 **One-Click Attack**。關鍵在於瀏覽器會自動帶上受害者的登入憑證（Cookie），伺服器誤以為是本人操作。

## 關鍵面向

- **成立條件**：受害者已登入目標網站、且該站僅靠自動帶上的 Cookie 判斷身份、沒有額外驗證請求是否為本人主動發起。
- **與 XSS 的差別**：XSS 是注入惡意腳本在受害者瀏覽器執行；CSRF 是「借用」受害者已驗證的身份去發合法格式的請求，攻擊者其實看不到回應內容。
- **預防**：
  - **CSRF Token**：每次表單提交由伺服器產生一個一次性隨機 Token 並驗證，攻擊者無法預先取得。
  - **避免用 GET 執行敏感操作**、改用 POST。
  - 輔以 SameSite Cookie、驗證 Referer/Origin 等。

## 應用場景

- **Simon 工作場景**：檢視公司內部 Web 系統（表單、後台）時，確認敏感操作是否有 CSRF Token 保護、是否誤用 GET 執行寫入操作；納入源碼檢測（SAST）與滲透測試的檢查項。
- **一般場景**：Web 應用開發的安全需求、OWASP 合規檢查。

## 相關概念

- [[sql-injection]]：同為 OWASP 關注的 Web 應用攻擊
- [[owasp-top-10]]：CSRF 屬經典 Web 風險（現多歸入存取控制失效類）
- [[ssdlc]]：CSRF 防護應在安全開發生命週期的設計與測試階段納入
- [[cross-site-scripting]]：同屬 Web 用戶端攻擊——XSS 注入並執行惡意腳本、CSRF 借用已驗證身份發請求，常拿來對比

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
