---
title: "USB 誘餌攻擊（USB Baiting）"
slug: usb-baiting
aliases: [USB Baiting, USB 誘餌攻擊, USB 誘餌, USB drop attack, USB 釣餌, 隨身碟攻擊]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義

攻擊者故意將含有惡意程式的 USB 隨身碟放置在目標可能拾取的地點（停車場、大廳、茶水間），誘使目標出於好奇插入電腦，藉此取得系統存取權限。屬於社交工程的實體攻擊類型。

## 關鍵面向

- **攻擊流程**：準備惡意 USB（自動執行惡意程式或偽裝成正常文件）→ 放置在目標環境 → 等待受害者插入 → 惡意程式自動或被誘導執行
- **利用心理**：好奇心（「這是誰的？」）、貪念（「裡面有什麼好東西？」）、善意（「應該還給失主」先看看內容）
- **進階手法**：Rubber Ducky 類裝置偽裝成 USB 但實為鍵盤模擬器，插入瞬間自動輸入指令
- **防禦措施**：USB 埠管控（群組原則或 MDM 禁用 USB）、資安意識訓練、端點防護軟體偵測異常 USB 裝置

## 應用場景

- **Simon 工作場景**：Omnissa MDM 可管控公司設備的 USB 存取政策；ISO 27001 實體安全要求涵蓋可攜式媒體管控；資安意識訓練教材可加入 USB 誘餌情境（[[security-awareness-design]] 的場景卡素材）
- **一般場景**：滲透測試（[[penetration-testing]]）中的實體社交工程環節；軍事與政府機構常將 USB 埠以物理方式封鎖

## 相關概念

- [[attack-vector]]：USB 誘餌是實體攻擊向量的代表
- [[social-engineering-playbook]]：USB 誘餌利用好奇心與善意，屬社交工程四大套路延伸
- [[security-awareness-design]]：教育使用者辨識 USB 誘餌是資安意識訓練重點
- [[threat-actor]]：從腳本小子到國家級攻擊者都可能使用此手法

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-3-cyber-attacker-mindset/8-activity-identify-the-attack-vectors-of-a-usb-drive|Course 5 Module 3 Section 3 Leaf 8 activity identify the attack vectors of a usb drive]]
