---
title: "端點偵測與回應（EDR）"
slug: edr
aliases: [EDR, endpoint detection and response, 端點偵測與回應, 端點偵測, 端點防護]
category: 資安・安全營運
confidence: 已驗證
created: 2026-06-05
---

## 定義
裝在 [[endpoint]]（端點）上、監看該端點是否有惡意活動的應用程式（Endpoint Detection and Response）。它監看、記錄、分析端點系統活動以辨識、告警並回應可疑行為。跟 [[ids]]／[[ips]] 最大不同在監看位置（裝在端點上、看程序與檔案行為）；課程特別強調 EDR 會做 behavioral analysis（行為分析，用機器學習與 AI 分析系統行為找惡意或異常），而且能用自動化阻擋攻擊（如自動擋掉異常啟動的 process），不必人工介入。

## 關鍵面向
- **裝在端點**：在 endpoint 端點（電腦、手機、平板等連網裝置）上執行
- **行為分析**：用 ML／AI 找出端點上的威脅模式。課程把它列為 EDR 相對 IDS／IPS 的特色，但行為分析不是 EDR 獨有：NIST SP 800-94 也有專看網路流量行為的「網路行為分析」類 IDPS，差別在看端點還是看網路（見 [[ips]]）
- **自動回應**：自動阻擋可疑行為（例：阻止平常不用的 process 啟動）
- **能力全集**：偵測、記錄、告警、阻擋、行為分析（課程說法：比傳統網路型 IDS／IPS 多了端點上的行為分析）
- **常見工具**：Open EDR、Bitdefender Endpoint Detection and Response、FortiEDR

## 應用場景
- **Simon 工作場景**：對應公司端點防護，跟 Omnissa／MDM 的端點管理場景銜接；若用 Fortinet 生態，FortiEDR 直接對上
- **一般場景**：企業端點威脅偵測、勒索軟體行為阻擋、EDR／XDR 平台

## 相關概念
- [[endpoint]]：EDR 監看的對象
- [[ids]]、[[ips]]：網路層偵測／阻擋，EDR 補端點層的行為分析
- [[anomaly-detection]]：行為分析的底層心法
- [[false-positive]]：行為分析同樣要面對誤報／漏報

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/4-overview-of-detection-tools|Course 6 Module 1 Section 4 Leaf 4 Overview of detection tools]]
