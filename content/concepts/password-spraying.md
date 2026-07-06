---
title: "密碼潑灑（Password Spraying）"
slug: password-spraying
aliases: [Password Spraying, 密碼潑灑, 密碼噴灑, spray attack]
category: 資安
confidence: 已驗證
created: 2026-07-06
---

## 定義

拿**同一組常見密碼**（例如 123456）去試**多個不同帳號**（alice、bob、charlie 都試 123456）的密碼攻擊。刻意讓每個帳號只失敗一兩次、壓在鎖定門檻之下，藉此避開「同一帳號連續失敗就鎖定」的防禦機制，讓攻擊在雷達下橫向鋪開一整批帳號。

## 關鍵面向

- **和暴力破解方向相反**：[[brute-force-attack]] 是「同一帳號、密碼隨機亂試」，往縱深打穿一個帳號；密碼潑灑是「多帳號、同一組常見密碼」，橫向掃過一堆帳號。
- **跟其他密碼攻擊的分辨**：字典攻擊（同帳號、套常見弱密碼清單 password／123456／qwerty）／憑證填充 Credential Stuffing（多帳號、用其他網站外洩的真實帳密組合、前提是跨站重複用同一密碼）／彩虹表 Rainbow Table（不是猜密碼，而是拿到資料庫雜湊後離線反查、主機 log 看不到）。密碼潑灑的辨識特徵是「多帳號、同一個常見密碼」。
- **log 特徵**：同一時間窗內大量不同帳號各失敗一兩次、且用的都是同一組密碼；不像暴力破解集中在單一帳號。
- **共通防禦**：[[mfa-multi-factor-authentication]]（即使密碼被試中也無法單獨登入）、不同網站不重複密碼（擋憑證填充）、帳號鎖定機制（擋暴力破解與字典攻擊）、風險評分 Risk-based Authentication（偵測異常 IP／地點／時間）、密碼雜湊加鹽（擋彩虹表）。

## 應用場景

- **Simon 工作場景**：公司 AD、伺服器 SSH、VPN 的登入介面都是攻擊面，密碼潑灑最愛拿預設密碼或常見弱密碼掃全體員工帳號，一次只試一輪就換帳號、規避帳號鎖定。落地防線是全面強制 [[mfa-multi-factor-authentication]]、設帳號鎖定門檻、以及靠風險評分抓異常來源 IP 與登入時間。
- **一般場景**：雲端郵件（Microsoft 365、Google Workspace）大規模帳號接管最常見的起手式之一。

## 相關概念

- [[brute-force-attack]]：同屬猜密碼攻擊，方向相反（縱向打單帳號 vs 橫向掃多帳號）
- [[mfa-multi-factor-authentication]]：對密碼潑灑最有效的共通首選防禦
- [[hash-function]]：密碼儲存加鹽（Salt）是擋彩虹表那一路的防禦

## 來源

- [HackMD·資訊安全概論筆記（hiiii，iPAS 初級）](https://hackmd.io/@hiiii/BJYND6jE-g)
