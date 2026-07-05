---
title: "入侵防禦系統（IPS）"
slug: ips
aliases: [IPS, intrusion prevention system, 入侵防禦系統, 入侵防護系統, 入侵預防系統]
category: 資安
confidence: 已驗證
created: 2026-06-05
---

## 定義
監看系統活動找出入侵行為、並採取行動阻止的應用程式（Intrusion Prevention System）。具備 [[ids]] 的全部能力（偵測、記錄、告警），再多一項「主動阻止入侵」。像珠寶店櫥窗玻璃碎裂感測器一觸發就讓鋼捲門落下、擋住未授權進入。許多工具可同時擔任 IDS 與 IPS。

## 關鍵面向
- **偵測 ＋ 阻擋**：例如發告警並修改 router 的 ACL 擋掉特定流量
- **與 IDS 差別**：IDS 只告警不擋、IPS 會擋；EDR 多了行為分析
- **常見工具**：Suricata、Snort、Sagan 多可同時做 IDS／IPS
- **部署考量**：阻擋規則太嚴會誤殺正常流量，常先偵測模式觀察再切防禦

## 應用場景
- **Simon 工作場景**：對應公司網路邊界／內網的阻擋設備；設定防禦模式前先用偵測模式驗證規則不誤殺
- **一般場景**：SOC 網路防護、NGFW／UTM 內建 IPS、CCNA 安全章節

## 相關概念
- [[ids]]：IPS 是 IDS ＋ 主動阻擋
- [[edr]]：端點層，多了行為分析與自動回應
- [[siem]]：IPS 可作為資料來源
- [[false-positive]]：阻擋型工具誤報的代價更高（誤殺正常流量）

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/3-intrusion-detection-systems|Course 6 Module 1 Section 4 Leaf 3 Intrusion detection systems]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/4-overview-of-detection-tools|Course 6 Module 1 Section 4 Leaf 4 Overview of detection tools]]
- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
