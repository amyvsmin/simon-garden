---
title: "殭屍網路（Botnet）"
slug: botnet
aliases: [Botnet, bot net, 殭屍網路, 機器人網路]
category: 資安
confidence: 已驗證
created: 2026-07-19
---

## 定義

由一群遭惡意軟體感染的裝置組成、受單一威脅行為者（bot-herder）集中控制的網路。病毒、蠕蟲或木馬可用來建立初始感染，受控裝置則成為可被統一下令的 bot。

## 關鍵面向

- **規模是核心**：botnet 不是單台受感染主機，而是許多 bot 的受控集合。
- **感染與控制分兩層**：[[malware]] 負責把裝置變成 bot，bot-herder 再對群體下達命令。
- **擴散管道多元**：課程列出檔案分享、email 與社群媒體等傳播途徑。

## 應用場景

- 事件分析時，不只清理單一端點，也要查相同感染指標與控制活動是否出現在其他裝置。
- 區分「某台主機感染 malware」與「組織資產已成為受控網路的一部分」。

## 相關概念

- [[malware]]：建立 botnet 的感染手段。
- [[command-and-control]]：威脅行為者對受控裝置下令的通道。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-2-malware/1-malicious-software|Malicious software]]
