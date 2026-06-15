---
title: "會話層（Session Layer，OSI L5）"
slug: session-layer
aliases: [Session Layer, 會話層, OSI 第五層, L5]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
會話層是 [[osi-model]] 的第五層，負責兩個節點之間會話的建立、管理與終止，為通訊提供有序、同步的交換機制。需要時開連線、資料交換完就關，並能同時管理多條連線，位於 [[presentation-layer]] 之下、[[transport-layer]] 之上。

## 關鍵面向
- **會話建立／管理／終止**：在需要時建立連線、交換完所有資料後終止，涵蓋會話的建立、維護、控制與結束。
- **同步點（Synchronization Point）**：在長傳輸中插入還原點，出錯時回復到最近同步點續傳、而非從頭重來，保證資料一致性。
- **多連線管理**：允許在兩個系統之間建立並管理多條連線。
- **三種通訊模式**：全雙工（雙向同時，如電話）、半雙工（輪流單向，如對講機）、單工（永遠單向，如廣播）；協定有 NetBIOS、RPC（遠端程序呼叫）。

## 應用場景
- **Simon 工作場景**：同步點／會話續傳的概念對應大型檔案傳輸、備份中斷後的續傳設計，呼應 Veeam 備份的還原點思維。全/半/單工觀念則延伸到交換器埠的 duplex 設定。
- **一般場景**：會話層的協定在 CCNA 屬「知道即可」、非考試重點；但全雙工／半雙工／單工延伸到交換器埠的 duplex 設定與 duplex mismatch 排錯，是 CCNA／Network+ 的實打實考點。

## 相關概念
- [[osi-model]]：會話層是 OSI 七層中的第五層。
- [[presentation-layer]]：會話層之上、OSI 第六層，管資料格式轉換。
- [[transport-layer]]：會話層之下、OSI 第四層，建立端對端資料通道。

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/6-presentation-and-session-layers|CCNA Section 2 Leaf 6 表示層與會話層]]
