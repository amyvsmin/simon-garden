---
title: "入侵偵測系統（IDS）"
slug: ids
aliases: [IDS, intrusion detection system, 入侵偵測系統, 入侵偵測, NIDS, HIDS]
category: 資安
confidence: 待驗證
created: 2026-06-05
query-count: 0
---

## 定義
監看系統與網路活動、對可能入侵發出告警的應用程式（Intrusion Detection System）。像家用入侵感測器：蒐集分析系統資訊找異常活動，發現異常就對適當管道與人員發告警。關鍵特性是「只偵測＋告警、不主動阻擋」——由資安人員調查告警後再決定是否處置。與 [[ips]]（會主動阻擋）成對。

## 關鍵面向
- **只告警不阻擋**：例如未知 IP 在異常時間登入就告警，但不會擋下登入
- **能力**：偵測惡意活動、記錄活動（log）、產生告警；不做行為分析（那是 [[edr]]）
- **常見工具**：Zeek、Suricata、Snort、Sagan、Kismet
- **NIDS vs HIDS**：網路型（監看網段流量）vs 主機型（監看單一主機）
- **訊號來源**：可餵給 [[siem]] 當資料來源

## 應用場景
- **Simon 工作場景**：對應網路邊界與內網的偵測設備（很多 NGFW／UTM 內建）；先用偵測模式觀察、確認不誤殺再切防禦
- **一般場景**：SOC 網路監看、Suricata／Snort 規則偵測、CCNA 安全章節

## 相關概念
- [[ips]]：IDS 能力 ＋ 主動阻擋
- [[edr]]：端點層偵測，多了行為分析
- [[siem]]：IDS 告警的彙整分析平台
- [[false-positive]]：IDS 告警要面對的誤報／漏報問題

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/3-intrusion-detection-systems|Course 6 Module 1 Section 4 Leaf 3 Intrusion detection systems]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/4-overview-of-detection-tools|Course 6 Module 1 Section 4 Leaf 4 Overview of detection tools]]
