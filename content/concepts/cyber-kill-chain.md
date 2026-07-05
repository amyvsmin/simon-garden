---
title: "Cyber Kill Chain（網路攻擊鏈）"
slug: cyber-kill-chain
aliases: [Cyber Kill Chain, 網路攻擊鏈, Kill Chain, 攻擊鏈, 洛克希德馬丁攻擊鏈, Lockheed Martin Kill Chain]
category: 資安
confidence: 已驗證
created: 2026-07-05
---

## 定義

由**洛克希德馬丁（Lockheed Martin）**提出的攻擊生命週期模型，把一次完整的網路攻擊拆成**七個依序推進的階段**。核心價值是給防守方一條「時間線」：攻擊者要一路走完七步才能達成目的，防守方只要在任一環節切斷，攻擊就失敗——越早切斷（前段的偵查、派送）代價越低。

## 關鍵面向

- **七個標準步驟（順序考點）**：**偵查（Reconnaissance）→ 武裝（Weaponization）→ 派送（Delivery）→ 漏洞利用（Exploitation）→ 安裝（Installation）→ 命令與控制（C2）→ 行動（Actions on Objectives）**。
- **各階段白話**：偵查＝收集目標資訊；武裝＝把惡意程式打包成攻擊武器；派送＝把武器送到目標（釣魚信、水坑）；漏洞利用＝觸發弱點取得執行權；安裝＝植入後門長期駐留；C2＝建立與外部控制端的通道；行動＝竊資、加密、破壞等真正目的。
- **防禦對應**：每個階段都有對應偵測與阻斷手段（如派送階段擋惡意附件、C2 階段偵測異常外連）；跟 [[mitre-attack]] 的差別是——Kill Chain 是**線性七階段的高層流程**，ATT&CK 是**矩陣式、更細的戰術技術編目**。
- **與駭客入侵五步驟的關係**：iPAS 講師課堂版是「足跡探測→掃描→列舉分析→系統入侵→網路監聽」（攻擊者操作視角）；EC-Council CEH 官方五階段則是「偵查→掃描→取得存取→維持存取→清除痕跡」，兩版第 3、5 步不同，考前以 iPAS 官方教材為準。Kill Chain 是防守方拆解視角，可與這些對照但不完全等同。

## 應用場景

- **Simon 工作場景**：規劃機房與產線的縱深防禦時，可用 Kill Chain 檢視「每個階段我這邊有沒有對應偵測／阻斷點」——例如派送階段的郵件過濾、C2 階段的對外連線監控、行動階段的資料外洩偵測，逐階段補洞。
- **一般場景**：資安事件覆盤時，把已知的攻擊軌跡對到七階段，判斷攻擊者走到哪一步、哪一環的防禦失效。

## 相關概念

- [[mitre-attack]]：更細緻的戰術技術矩陣，可與 Kill Chain 各階段對應
- [[footprinting]]：對應 Kill Chain 第一階段「偵查」
- [[defense-in-depth]]：Kill Chain 逐階段切斷的思路正是縱深防禦
- [[phishing]]：常見的「派送」階段手法

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/1-attack-frameworks-scanning-and-vuln-management|iPAS 培訓班 Day 2 上午 · 攻擊框架、掃描與弱點管理]]
