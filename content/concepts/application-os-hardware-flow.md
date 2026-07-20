---
title: "應用程式—作業系統—硬體資料流"
slug: application-os-hardware-flow
aliases: [application OS hardware flow, User Application OS Hardware, 應用程式作業系統硬體資料流, OS 資料流]
category: 運算基礎
confidence: 已驗證
created: 2026-07-19
---

## 定義

使用者要求由應用程式接收，應用程式再請作業系統調用硬體完成工作，結果沿相反方向回傳：User → Application → OS → Hardware → OS → Application → User。它描述的是通用作業系統如何替應用程式管理硬體，不等同於 Linux 專屬的 Shell／FHS／Kernel 分層。

## 關鍵面向

- **應用程式不直接控制硬體**：它透過作業系統提供的介面提出要求。
- **作業系統是中介與資源管理者**：協調 CPU、記憶體、儲存與輸入輸出裝置。
- **資料流是雙向的**：要求向下送、結果向上回，不只是一條單向管線。
- **通用模型與 Linux 架構要分開**：[[linux-architecture]] 是特定作業系統的細部分層，本卡是跨作業系統的抽象流程。

## 應用場景

- 排查「應用程式沒反應」時，依序區分應用、作業系統服務、驅動或硬體層問題。
- 學資安工具時，理解使用者操作如何變成 system call 與硬體 I/O，有助於判斷監控點位。

## 相關概念

- [[linux-architecture]]：Linux 對本模型的具體分層實作。
- [[linux-kernel]]：Linux 中直接管理硬體與 system call 的核心層。

## 來源

- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-1-introduction-to-operating-systems/section-3-the-operating-system-at-work/1-inside-the-operating-system|Inside the operating system]]
- [[1-learning/coursera/google-cybersecurity/course-4-tools-of-the-trade/module-1-introduction-to-operating-systems/section-3-the-operating-system-at-work/2-requests-to-the-operating-system|Requests to the operating system]]
