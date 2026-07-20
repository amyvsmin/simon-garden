---
title: "未授權存取（Unauthorized Access）"
slug: unauthorized-access
aliases: [Unauthorized Access, unauthorized access, 未授權存取, 非授權存取]
category: 資安
confidence: 已驗證
created: 2026-07-19
---

## 定義

個人在未取得許可的情況下，獲得對系統、應用程式或實體資源的存取。課程把它列為必須升級的事件類型；急迫程度再依受影響系統與資料對營運的重要性判斷。

## 關鍵面向

- **數位與實體都算**：未經許可進入系統、應用或管制區域都屬此類。
- **授權是判準**：不以是否已造成破壞作為成立條件。
- **都要升級、但優先序不同**：製造系統或 PII 資料庫的事件，比低關鍵資產更急。
- **暴力破解是常見手法**：[[brute-force-attack]] 可用試誤取得密碼、憑證或金鑰。

## 應用場景

- 異常登入、權限提升、門禁進入或非業務所需資料查閱。
- 先確認受影響資產與資料分類，再依 [[incident-criticality]] 決定升級速度。

## 相關概念

- [[incident-classification]]：未授權存取是課程中的三類事件之一。
- [[principle-of-least-privilege]]：降低未授權存取可觸及範圍的控制原則。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-2-to-escalate-or-not-to-escalate/1-prepare-to-escalate-through-security-recognition|Prepare to escalate through security recognition]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-2-escalate-incidents/section-3-timing-is-everything/3-escalation-timing|Escalation timing]]
