---
title: "中間人攻擊（Man-in-the-Middle, MITM）"
slug: man-in-the-middle
aliases: [中間人攻擊, MITM, Man-in-the-Middle, 中間人, Evil Twin, ARP Spoofing, DNS Spoofing, 惡魔雙胞胎]
category: 資安・網路安全
confidence: 已驗證
created: 2026-07-05
---

## 定義

攻擊者暗中插入通訊雙方之間，攔截、竊聽甚至篡改往來訊息，而通訊雙方都以為自己在跟對方直接對話、毫無察覺。核心防線是端到端加密與身份驗證，讓攻擊者即使攔到流量也解不開、也無法假冒。

## 關鍵面向

- **常見類型**：
  - **Wi-Fi 中間人（Evil Twin）**：偽造與正牌同名的公共 Wi-Fi 熱點，攔截連上的所有流量。
  - **ARP Spoofing**：在內網搶先偽造 ARP 回應、污染受害者 ARP Table，把流量導向攻擊者。
  - **DNS Spoofing**：竄改 DNS 回應、把使用者導向惡意網站。
  - **E-mail 中間人**：冒充或入侵 Mail Server 攔截、篡改信件（常見於 BEC 詐騙）。
- **防範**：加密通訊（TLS 1.2/1.3）、用 VPN、設靜態 ARP Table、用可信 DNS、啟用雙因子驗證（2FA）。
- **Email 防護機制**：**SPF**（確認來自授權郵件伺服器）、**DKIM**（郵件標頭加數位簽章驗完整性）、**DMARC**（結合 SPF+DKIM）、**PGP**（去中心化非對稱加密）、**S/MIME**（郵件加密與數位簽章）。

## 應用場景

- **Simon 工作場景**：內網部署靜態 ARP 或 ARP 偵測防 ARP Spoofing；公司郵件系統設定 **SPF/DKIM/DMARC** 三件套防冒名與 BEC；宣導員工不連不明公共 Wi-Fi、遠端一律走 VPN。
- **一般場景**：公共 Wi-Fi 環境的個人防護、企業郵件防偽、金融交易保護。

## 相關概念

- [[tls]]：端到端加密是防中間人的核心手段；POODLE 則是降級 TLS 觸發 MITM
- [[phishing]]：BEC 商務郵件詐騙常結合 E-mail 中間人
- [[network-scanning]]：ARP 掃描是 ARP Spoofing 的前置
- [[dos-ddos]]：同屬網路層攻擊、但目的為攔截而非阻斷

## 來源

- [[1-learning/ipas/subject-2-protection/training-day2/2-web-network-attacks-defense-and-secops|iPAS 培訓班 Day 2 下午 · Web／網路攻擊、防護與維運]]
