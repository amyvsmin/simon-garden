---
title: "DTP 動態中繼協定（Dynamic Trunking Protocol）"
slug: dtp
aliases: [DTP, Dynamic Trunking Protocol, 動態中繼協議, 動態中繼協定, dynamic auto, dynamic desirable, switchport nonegotiate]
category: 網路基礎
confidence: 已驗證
created: 2026-09-30
---

## 定義
Cisco 私有的二層協定，預設啟動，讓兩端交換器自動協商鏈路當 access 還是 [[trunk]]，以及 trunk 的封裝類型（ISL 或 [[ieee-802-1q]]）；DTP 訊息每 30 秒送一次。

## 關鍵面向
- **四種埠模式**：

| 模式 | 類型 | 行為 |
|---|---|---|
| access | 靜態 | 永遠是 access，接終端 |
| trunk | 靜態 | 永遠是 trunk，接交換器或路由器 |
| dynamic auto | 動態（被動） | 對方主動（trunk 或 desirable）才變 trunk |
| dynamic desirable | 動態（主動） | 只有對方是 access 才變 access，其餘都變 trunk |

- **協商結果（本端＼對端）**：

| | access | trunk | auto | desirable |
|---|---|---|---|---|
| auto | access | trunk | access | trunk |
| desirable | access | trunk | trunk | trunk |

  口訣：auto 要遇到主動的一方才成 trunk，所以兩端都是 auto 會變 access；desirable 只有被明確拒絕時才是 access。前提是對端有送 DTP：對端若是 trunk 加 `switchport nonegotiate`（不送 DTP），動態模式這端協商不起來，要手動把本端也設成 trunk（依 Cisco 設定指南，審查者查得）。兩端都手動設、卻一端 access 一端 trunk，不屬於協商，鏈路會異常。
- **封裝也會協商**：兩端經 DTP 協商成 trunk、封裝都留在 negotiate 時，講師環境協商出 ISL；只要一端手動設 802.1Q，另一端會跟著用 802.1Q。埠實際工作在 access 時，`show interfaces <介面> switchport` 的 Operational Trunking Encapsulation 欄顯示 native，意思是「沒有 trunk 封裝」，跟 [[native-vlan]] 無關。
- **預設模式看平台**：講師模擬器的 15.1 映像預設 desirable、15.2 預設 auto；實體 Catalyst 交換器多為 dynamic auto。所以拿到設備先看版本與介面預設（`show interfaces <介面> switchport`），不要背成通則。
- **怎麼關掉**：`switchport nonegotiate` 關閉 DTP，但只能用在手動設定的 access 或 trunk 埠；或者直接把埠設成 access。已關閉協商的埠不能再設成 dynamic 模式。
- **觀察命令**：`show interfaces <介面> switchport` 看 Administrative Mode（設定值）與 Operational Mode（實際結果）；`show dtp` 看封包統計；`show dtp interface` 看 TOS／TAS／TNS（實際、設定、鄰居的埠狀態）與 TOT／TAT／TNT（對應的封裝類型）。

## 應用場景
- **Simon 工作場景**：交換器互連與終端埠都明確手動設定，不交給 DTP 協商，結果才不會隨設備版本不同而改變。排「線有亮、VLAN 卻不通」時，兩端先看 Operational Mode，確認是不是兩端都 auto 而默默成了 access。
- **一般場景**：CCNA 考協商結果（給兩端模式問最後是 access 還是 trunk）；安全上常建議關閉不需要協商的埠的 DTP。

## 相關概念
- [[trunk]]：DTP 協商的目標狀態之一。
- [[ieee-802-1q]]：DTP 協商的封裝類型之一。
- [[native-vlan]]：trunk 上不打標籤的 VLAN；依 Cisco 文件，DTP 在 802.1Q trunk 上就是走 native VLAN。
- [[vlan]]：只有 access 埠才能被分配到具體 VLAN。

## 尚未解決的疑問
- 課程附件的完整協商表沒對照過，上表依逐字稿規則與 10-7 實測整理；desirable 對 access 等幾格課程沒逐一實測。
- TOT／TAT／TNT 的全稱是依命名規律推的，未逐條查官方文件。
- 利用 DTP 的交換器偽裝攻擊與防護留到 Section 23。

## 來源（自動維護）
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/5-dtp-dynamic-trunking-protocol|CCNA Section 10 Leaf 5 DTP 動態中繼協議]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/6-commands-dtp-configuration|CCNA Section 10 Leaf 6 DTP 配置命令]]
- [[1-learning/udemy/ccna-all-in-one/section-10-vlan/7-lab-dtp-negotiation-results|CCNA Section 10 Leaf 7 LAB DTP 協商結果]]
