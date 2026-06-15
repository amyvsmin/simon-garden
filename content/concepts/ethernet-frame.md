---
title: "乙太網路訊框（Ethernet Frame）"
slug: ethernet-frame
aliases: [Ethernet Frame, 乙太網路訊框, 乙太網訊框, 二層訊框, MAC frame]
category: 資安
confidence: 待驗證
created: 2026-06-15
---

## 定義
乙太網路訊框是 [[data-link-layer]]（OSI L2）的封裝單位，由標頭、負載與尾部三部分組成；負載就是上層傳下來的 L3 封包。標頭攜帶來源與目標 [[mac-address]] 做相鄰節點定址，尾部則用校驗碼偵測傳輸是否損壞。

## 關鍵面向
- **三段結構**：標頭（header）＋負載（payload，即 L3 封包）＋尾部（trailer）。
- **標準標頭 14 bytes**：目標 MAC 6 bytes ＋ 來源 MAC 6 bytes ＋ 類型 Type 2 bytes。
- **加 VLAN 標籤 18 bytes**：插入 802.1Q VLAN 標籤 4 bytes 後，標頭由 14 變 18 bytes。
- **尾部 FCS 4 bytes**：訊框檢查序列，內含 CRC 循環冗餘校驗，偵測資料是否在傳輸中損壞。
- **前導碼與 SFD 抓不到**：前導碼（7 bytes）＋幀起始定界符 SFD（1 bytes）在 OSI L1 被網卡剝離後才上交 L2，封包嗅探軟體擷取不到。

## 應用場景
- **Simon 工作場景**：用 Wireshark 抓封包排查交換網路時，看得到標頭三欄與 802.1Q 標籤；FCS/CRC 錯誤計數飆高常代表線材或介面問題，是 L2 排錯的線索。
- **一般場景**：CCNA/Network+/SSCP 的 L2 高頻考點，要能默畫訊框各欄位與長度。

## 相關概念
- [[mac-address]]：訊框標頭的來源/目標位址欄位
- [[data-link-layer]]：訊框封裝所在的 OSI 層（L2）
- [[csma-cd]]：決定何時能把訊框送上共享介質的存取機制

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/11-data-link-layer|CCNA Section 2 Leaf 11 資料連結層]]
