---
title: "網路分段（Network Segmentation）"
slug: network-segmentation
aliases: [Network Segmentation, 網路分段, 網段切割, 網路區隔, network segmentation, 分段, 安全區域]
category: 資安
confidence: 已驗證
created: 2026-06-28
---

## 定義
把網路依信任等級切成多個區段、各段有自己的存取權限與安全規則的技術。三個核心目的：控制誰能存取哪段網路、作為內網的屏障、防止問題擴散到整個網路（contamination containment）。安全區域（security zones）的四區架構是它的具體實作。

## 關鍵面向
- **四區架構（由外到內）**：Uncontrolled Zone（Internet，不信任）→ DMZ（對外服務：web／proxy／DNS／外部 mail）→ Internal Network（員工日常）→ Restricted Zone（高機密：人資／財務／密碼保險庫）。
- **逐層 firewall 隔開**：每層之間放一道防火牆，攻擊者攻破一層也卡在下一道防線。
- **是縱深防禦的具體實作**：對應 [[defense-in-depth]]——不押注單一防線；與 [[zero-trust]]「不預設信任任何網段」互補。
- **擴散控制**：一台主機被攻陷時，分段把橫向移動限制在同一區段內，降低全網淪陷風險。

## 應用場景
- **Simon 工作場景**：機房內不同 VLAN 之間用 L3 firewall 控管；規劃內網安全區域、把高機密系統放進限制區；ISO 27001 網路控制項與 BIA 盤點時界定區段邊界。
- **一般場景**：企業網路防禦設計、CISSP 第四域（通訊與網路安全）核心、技術面試常考的基本功。

## 相關概念
- [[network-security]]：網路分段是其網路架構面的核心手段
- [[defense-in-depth]]：分段是縱深防禦的落實方式
- [[zero-trust]]：分段提供區段邊界、零信任在邊界上做逐次驗證
- [[ids]] / [[ips]]：常部署在區段邊界偵測／攔截跨段異常

## 來源
- [[1-learning/coursera/google-cybersecurity/course-3-connect-and-protect/module-2-network-operations/section-2-system-identification/3-security-zones|Course 3 Module 2 Section 2 Leaf 3 Security zones]]
