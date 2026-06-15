---
title: "OSI 七層參考模型（OSI Model）"
slug: osi-model
aliases: [OSI Model, OSI 模型, OSI 七層模型, OSI 參考模型, OSI seven-layer model, 開放系統互連模型]
category: 資安
confidence: 已驗證
created: 2026-06-15
---

## 定義
OSI（開放系統互連）是 ISO 在 1970 年代末提出的七層分層參考框架，把「資料如何在網路上傳輸」依功能職責切成七層，每層只專注自己的職責並對上一層提供服務。它是標準化的概念模型而非實作規範，協定與設備不必嚴格對應到單一層；實務上更常用 [[tcp-ip-model]] 四層模型。

## 關鍵面向
- **七層由上而下**：應用層／表示層／會話層／傳輸層（[[transport-layer]]）／網路層（[[network-layer]]）／資料連結層（[[data-link-layer]]）／實體層（[[physical-layer]]），口訣「應表會傳網資實」（L7→L1）。
- **參考框架定位**：提供跨國、跨廠商設備互通的「通用語言」，並把複雜網路拆層化繁為簡，方便學習與分層排錯。
- **資料封裝**：發送端由上而下逐層加標頭（資料連結層另加標尾），各層 PDU 名稱為 Data → Segment → [[packet|Packet]] → Frame → Bits；接收端由下而上逐層剝除還原。
- **與 TCP/IP 對比**：OSI 七層是教學與標準參考，TCP/IP 四層是實務主流，CCNA 兩者都要會對應。

## 應用場景
- **Simon 工作場景**：網路排錯的「分層問診」順序，從實體層（線、光纖、燈號）往上查到應用層；防火牆規則多落在 L3/L4（比對 IP＋埠號），解釋了「一條規則為何要同時寫 IP 和 port」。
- **一般場景**：CCNA／Network+／SSCP 的網路基礎必考地基，分層與封裝概念在後續每章反覆回扣。

## 相關概念
- [[tcp-ip-model]]：實務主流的四層模型，與 OSI 七層對照
- [[transport-layer]]：OSI 第 4 層，端對端送達
- [[network-layer]]：OSI 第 3 層，跨網路定址找路
- [[data-link-layer]]：OSI 第 2 層，同網路內實體定址
- [[physical-layer]]：OSI 第 1 層，唯一實體可見的層

## 來源
[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/1-osi-reference-model|CCNA Section 2 Leaf 1 OSI 參考模型]]、[[1-learning/udemy/ccna-all-in-one/section-02-osi-model/12-physical-layer|CCNA Section 2 Leaf 12 實體層]]
