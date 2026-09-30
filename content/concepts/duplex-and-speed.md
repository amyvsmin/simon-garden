---
title: "雙工與速度（Duplex & Speed，含雙工不匹配）"
slug: duplex-and-speed
aliases: [Duplex, Speed, 雙工, 全雙工, 半雙工, Full Duplex, Half Duplex, 雙工不匹配, Duplex Mismatch, duplex-mismatch, 介面速度]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
乙太網介面的兩個實體參數：**雙工**決定能否同時收發（全雙工可以、半雙工要輪流），**速度**是實際傳輸速率（10／100／1000Mbps）。都可設 auto 協商或手動強制，兩端結果必須一致。

## 關鍵面向
- **兩種不一致的後果不同**：
  - **雙工不匹配**（一端全雙工、一端半雙工）：鏈路還能傳資料，但很不穩定。
  - **速度不匹配**（兩端都強制、數值不同，例如 10 對 1000）：鏈路根本起不來。
- **命令**：介面下 `duplex auto／full／half`、`speed 10／100／1000／auto`。課程建議互連埠設全雙工、速度設為介面最高值；但強制速度要謹慎：若對端臨時換成只有 100Mbps 的埠，強制 1000 的那端會讓鏈路起不來，兩端都 auto 則可以自動降速。
- **一端手動、一端 auto 容易出事**：課程在模擬器中看到 auto 端會跟著對端匹配（實驗中對端手動設的是半雙工，兩端一致）；我的理解是實體設備的 auto 端通常偵測得到對端速度，卻偵測不到對端手動設定的雙工，在 10／100Mbps 時可能退回半雙工；若對端手動設的是全雙工，就形成典型的雙工不匹配（未實測）。穩妥做法是兩端都手動，或兩端都 auto。
- **BW 不是實際速度**：`show interfaces` 裡的 BW（單位 Kbit/sec）是給路由協定算度量值的邏輯參數；實際傳輸速度看同一個輸出裡的速度欄。課程比喻：BW 像道路寬度，速度像車能跑多快。
- **雙工影響 STP 的鏈路類型**：介面是全雙工時，STP 判為 P2P（點對點）；半雙工時判為 shared（共享）。講者說成鏈路類型決定雙工，因果是反的。
- **CDP 會報雙工不匹配**：CDP 每 60 秒交換一次設備與介面資訊，發現兩端雙工不同就跳出 duplex mismatch 訊息。
- **平台差異**：課程模擬器裡（IOL、vIOS 都是在 GNS3／PNETLab 跑的 Cisco IOS 映像檔），IOL 映像的介面上限就是 10Mbps，沒有 `speed` 命令；vIOS 的千兆口要先 `no negotiation auto` 才能手動設 duplex。命令打不下去時，先想是不是平台或模組限制。

## 應用場景
- **Simon 工作場景**：網路時通時斷、速度異常慢時，兩端各跑 `show interfaces <介面>` 與 `show interfaces status`，對照雙工與速度是否一致，再看日誌裡有沒有 CDP 的 duplex mismatch 訊息。機房換線或接舊設備之後出現「燈有亮但很不穩」，也先查這兩個參數。
- **一般場景**：CCNA 排錯題常見的起點；要分清雙工不匹配（通但不穩）與速度不匹配（不通）。

## 相關概念
- [[physical-layer]]：雙工與速度都是實體層參數。
- [[ethernet]]：這兩個參數所屬的介面技術。
- [[csma-cd]]：半雙工環境才需要碰撞偵測。
- [[collision-domain]]：全雙工的交換器埠沒有碰撞問題。

## 尚未解決的疑問
- 一端手動、一端 auto 在實體交換器上的確切行為，未在實機驗證。
- STP 鏈路類型對收斂速度的影響留到 Section 12。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/8-lab-duplex-and-speed-configuration|CCNA Section 10 Leaf 8 LAB Duplex & Speed 雙工與速度]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/9-commands-duplex-and-speed-configuration|CCNA Section 10 Leaf 9 Duplex & Speed 命令]]
