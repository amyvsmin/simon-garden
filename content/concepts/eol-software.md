---
title: "終止支援軟體（End-of-Life Software）"
slug: eol-software
aliases: [End-of-Life Software, EoL Software, 終止支援軟體, 停止支援軟體, end of life, EOL, EOS, End of Support, 終止生命週期]
category: 資安
confidence: 未驗證
created: 2026-05-25
query-count: 0
---

## 定義
廠商不再提供安全修補或技術支援的軟體。一旦軟體進入 EoL（End of Life）狀態，新發現的弱點將永遠不會被修補，繼續使用等於持續暴露在已知和未知風險中。

## 關鍵面向
- **EoL vs EoS**：End of Life（完全停止所有支援）vs End of Support（停止主流支援、可能還有延伸支援）；實務上兩者風險類似
- **為何組織仍在用**：升級成本高、相容性問題、使用者抗拒變更、管理層不重視
- **風險疊加**：EoL 軟體隨時間推移弱點只增不減，成為攻擊者的容易目標
- **緩解策略**：網路隔離（不讓 EoL 系統接觸網際網路）、虛擬修補（WAF 規則補償）、加速替換計畫
- **合規影響**：ISO 27001、PCI DSS 等框架要求管理軟體生命週期，使用 EoL 軟體可能導致稽核不合格

## 應用場景
- **Simon 工作場景**：公司伺服器若有 EoL 作業系統或軟體需列入 ISO 27001 風險登錄；BIGFIX 可盤點全公司 EoL 軟體清單；老舊網路設備（見 [[aging-network-infrastructure]]）也有同樣問題
- **一般場景**：Windows Server 2012 R2 已 EoL、仍廣泛使用；Java 舊版本的安全風險；工控系統（ICS/SCADA）常因設備綁定而被迫使用 EoL 軟體

## 相關概念
- [[vulnerability]]：EoL 軟體的弱點永遠不會被修補
- [[patch-management]]：EoL 軟體超出修補管理的涵蓋範圍
- [[attack-surface]]：EoL 軟體擴大組織的攻擊面
- [[risk]]：EoL 軟體是高機率、高衝擊的風險來源
- [[aging-network-infrastructure]]：硬體端的同類問題

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
