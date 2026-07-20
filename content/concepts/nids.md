---
title: "網路型入侵偵測系統（NIDS）"
slug: nids
aliases: [NIDS, Network-based IDS, network intrusion detection system, 網路型 IDS, 網路型入侵偵測系統]
category: 資安
confidence: 已驗證
created: 2026-07-19
---

## 定義

部署在網路觀測點、收集並分析跨裝置流量的 [[ids]]。它的運作近似 packet sniffer：看到經過感測點的封包或流量，命中可疑模式時記錄並告警。

## 關鍵面向

- **觀測面是網路流量**：適合發現跨主機連線與惡意流量，不等同主機內部活動。
- **部署位置決定可見度**：大型網路通常需要多個 sensor，單一點位看不到所有路徑。
- **規則依產品而異**：不同 NIDS 的 signature 語言與預寫規則不完全相同。

## 應用場景

- 在網路邊界或關鍵網段監看跨裝置流量與可疑連線。
- 與 [[hids]] 搭配，把網路告警與主機內部檔案、程序、使用者活動交叉比對。

## 相關概念

- [[ids]]：NIDS 所屬的偵測系統上位類別。
- Suricata：課程用來示範 NIDS 規則與告警的開源工具。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-2-overview-of-intrusion-detection-systems-ids/1-security-monitoring-with-detection-tools|Security monitoring with detection tools]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-2-overview-of-intrusion-detection-systems-ids/2-detection-tools-and-techniques|Detection tools and techniques]]
