---
title: "主機型入侵偵測系統（HIDS）"
slug: hids
aliases: [HIDS, Host-based IDS, host based intrusion detection system, 主機型 IDS, 主機型入侵偵測系統]
category: 資安
confidence: 已驗證
created: 2026-07-19
---

## 定義

安裝在單一主機上的 [[ids]] agent，監看該主機內部活動並對可疑行為產生日誌與告警。可觀察檔案系統、系統資源、使用者活動，以及與該主機相關的網路活動。

## 關鍵面向

- **觀測範圍是單一 host**：能看見主機內部細節，但不代表整體網路可見度。
- **以 agent 部署**：每台要監看的端點或伺服器都需安裝或啟用對應元件。
- **看得到內部變化**：例如未授權應用程式、檔案異動與資源使用異常。

## 應用場景

- 需要判斷某台伺服器內部發生什麼事，而網路封包本身不足以回答時。
- 與 [[nids]] 搭配：主機端看內部、網路端看跨裝置流量。

## 相關概念

- [[ids]]：HIDS 所屬的偵測系統上位類別。
- [[nids]]：以網路流量為觀測面的另一種部署型態。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-2-overview-of-intrusion-detection-systems-ids/1-security-monitoring-with-detection-tools|Security monitoring with detection tools]]
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-4-network-traffic-and-logs-using-ids-and-siem-tools/section-2-overview-of-intrusion-detection-systems-ids/2-detection-tools-and-techniques|Detection tools and techniques]]
