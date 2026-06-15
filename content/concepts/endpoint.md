---
title: "端點（Endpoint）"
slug: endpoint
aliases: [Endpoint, 端點, 端點裝置, endpoint device, 終端裝置, end-user device]
category: 資安
confidence: 待驗證
created: 2026-06-05
---

## 定義
任何連到網路的裝置。例子包含終端使用者裝置——電腦、手機、平板等，也涵蓋伺服器與 IoT 裝置。端點是組織攻擊面的重要部分，也是 [[edr]]（端點偵測與回應）監看與保護的對象。

## 關鍵面向
- **範圍**：任何連網裝置（電腦、手機、平板、伺服器、IoT）
- **攻擊面**：端點是攻擊者常見的初始立足點（釣魚附件、惡意程式落地）
- **保護手段**：EDR、防毒、MDM／端點管理、修補管理
- **端點 vs 網路**：端點防護補網路層（IDS／IPS）看不到的主機內行為

## 應用場景
- **Simon 工作場景**：直接對應 Omnissa Workspace ONE／MDM 的端點管理（遠端抹除、定位）；端點修補、資產盤點都圍繞端點
- **一般場景**：BYOD 管理、端點防護平台、零信任的裝置驗證

## 相關概念
- [[edr]]：裝在端點上做偵測與回應
- [[ids]]、[[ips]]：網路層偵測，與端點層互補
- [[attack-surface]]：端點是攻擊面的主要組成

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-1-introduction-to-detection-and-incident-response/section-4-incident-response-tools/4-overview-of-detection-tools|Course 6 Module 1 Section 4 Leaf 4 Overview of detection tools]]
