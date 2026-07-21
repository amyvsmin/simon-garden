---
title: "挖礦劫持（Cryptojacking）"
slug: cryptojacking
aliases: [Cryptojacking, 挖礦劫持, 加密劫持, 非法挖礦]
category: 資安・安全營運
confidence: 已驗證
created: 2026-07-19
---

## 定義

攻擊者未經授權使用受害者的運算資源挖掘加密貨幣。課程案例描述其從個人電腦擴展到有漏洞的伺服器，惡意挖礦程式在背景執行，讓受害者只看到效能、電力或穩定性異常。

## 關鍵面向

- **目的是竊取算力獲利**：與破壞資料不同，攻擊者希望長時間低調使用資源。
- **伺服器是高價值目標**：算力更高，也可能把感染擴散到與它通訊的裝置。
- **症狀偏資源面**：CPU 使用率異常、系統變慢、當機、耗電或電費上升。
- **隱蔽性重要**：背景執行讓使用者不易察覺，需結合資源監控與 [[ids]] 告警。

## 應用場景

- 伺服器長期高 CPU 卻沒有合理工作負載時，把挖礦劫持列入排查假設。
- 對外服務先修補漏洞，再比對同網段裝置是否出現相似資源與連線異常。

## 相關概念

- [[malware]]：挖礦劫持是以獲利為目的的惡意軟體類型。
- [[ids]]：可偵測部分異常活動，但新型態仍可能漏報。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-2-malware/3-the-rise-of-cryptojacking|The rise of cryptojacking]]
