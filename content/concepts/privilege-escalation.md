---
name: 權限提升
aliases: [Privilege Escalation, 提權, 本機提權]
category: 資安
status: active
confidence: unverified
last-queried: ""
query-count: 0
notion-page-id: 351f85da-554f-8185-ad30-e13192bfcfad
---

## 定義

攻擊者以普通使用者身分進入系統後，透過漏洞、設定錯誤或邏輯瑕疵取得更高權限（典型為 root／SYSTEM）的攻擊階段，是 MITRE ATT&CK 與 CISSP 安全模型中的關鍵戰術。

## 關鍵面向

- 分本機提權（Local PE）跟遠端提權（Remote PE）
- MITRE ATT&CK TA0004 階段
- CISSP / SSCP / Google Cyber 必考主題

## 應用場景

- Simon 工作場景：貫穿 Google Cyber、CC、SSCP、CISSP 各階段；ISO 27001 風險評鑑、稽核日誌設計常用觀測點
- 一般場景：滲透測試、紅隊演練、藍隊偵測

## 相關概念

- [[pack2theroot]]：權限提升的真實案例
- [[red-team]]：紅隊演練常測權限提升
- [[firmware-attack-surface]]：韌體層也可能成為提權路徑

## 尚未解決的疑問

- AI 時代會出現多少新型提權鏈

## 來源（自動維護）

- [[2026-04-29-pack2theroot-packagekit-vuln]]
