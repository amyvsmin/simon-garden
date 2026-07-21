---
title: "曝露（Exposure）"
slug: exposure
aliases: [Exposure, 曝露, 暴露, 資訊曝露, security exposure, 安全曝露]
category: 資安・評估與測試
confidence: 已驗證
created: 2026-05-25
---

## 定義

系統中可被外部觀察到或意外存取到的弱點或敏感資訊。與 [[vulnerability]]（弱點）相關但更強調「被看見」的面向——弱點可能隱藏在內部，而曝露意味著該弱點已暴露在潛在攻擊者的視線範圍內。

## 關鍵面向

- **與 vulnerability 的區別**：[[vulnerability]] 是系統本身的缺陷，exposure 是該缺陷或敏感資訊被外部可觀測的狀態；一個弱點若未被曝露，被利用的機會較低
- **常見曝露類型**：未關閉的測試埠口、公開的 API 金鑰、搜尋引擎可索引的內部文件、錯誤訊息洩漏系統版本資訊、DNS 記錄暴露內部架構
- **與攻擊面的關係**：所有曝露的總和構成 [[attack-surface]]；減少曝露 = 縮小攻擊面
- **偵測手段**：外部掃描（Shodan、Censys）、滲透測試偵察階段、Attack Surface Management（ASM）工具
- **CVE 命名**：部分 CVE 條目分類為 exposure（E），如 CWE-200 Information Exposure

## 應用場景

- **Simon 工作場景**：公司伺服器若有不必要的埠口對外開放就是曝露；Veeam 備份管理介面若未限制存取也是曝露；ISO 27001 資產盤點時需同時盤點各資產的曝露狀態
- **一般場景**：雲端環境中公開的 S3 bucket 是最典型的曝露案例；Bug bounty 獵人的第一步就是找目標的曝露點

## 相關概念

- [[vulnerability]]：弱點是內在缺陷，曝露是弱點被外界看見的狀態
- [[attack-surface]]：所有曝露點的集合就是攻擊面
- [[cve-list]]：CVE 資料庫中部分條目歸類為 exposure
- [[security-hardening]]：硬化的核心目標之一就是減少不必要的曝露

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-1-flaws-in-the-system/5-common-vulnerabilities-and-exposures|Course 5 Module 3 Section 1 Leaf 5 common vulnerabilities and exposures]]
