---
title: "監管鏈（Chain of Custody）"
slug: chain-of-custody
aliases: [Chain of Custody, 監管鏈, 證據監管鏈, 保管鏈, chain of custody, 證據鏈]
category: 資安
confidence: 待驗證
created: 2026-06-13
---

## 定義
在事件生命週期中記錄「證據持有與控制」歷程的流程與表單（chain of custody）。證據一被收集就啟動，之後每次經手都登記。目的是讓證據移動完全透明、留下「誰在何時、何地、為何經手證據」的紙本軌跡（paper trail），使證據在法律程序中可採信。是 [[security-documentation]] 產生透明性（transparency）的典型例子。

## 關鍵面向
- **觸發時機**：證據一收集就啟動表單，每次轉交都登記
- **數位鑑識流程**：搭配 [[digital-forensics]]——先 write protect（防寫）→ 算並記錄 [[hash-function]] 雜湊 → 逐站轉交並登記，原始雜湊用來偵測竄改
- **表單常見欄位**：證據描述（location／hostname／MAC／IP）＋ custody log（經手人、日期時間、轉交目的）
- **broken chain of custody（監管鏈斷裂）**：登記錯誤或缺漏造成不一致；重大斷裂破壞證據的 integrity／reliability／accuracy，使其無法在法庭採用
- **無標準範本**：格式因組織而異，但都含上述共通元素

## 應用場景
- **Simon 工作場景**：公司發生入侵需保全證據（硬碟、log）時，write protect → 做映像 → 記 hash → 轉交登記，讓證據日後可採信；呼應 ISO 27001 證據保全
- **一般場景**：數位鑑識、法律訴訟證據、稽核軌跡

## 相關概念
- [[digital-forensics]]：監管鏈最典型的使用場景
- [[hash-function]]：偵測證據竄改的工具
- [[security-documentation]]：監管鏈是其透明性好處的載體

## 來源
- [[1-learning/coursera/google-cybersecurity/course-6-sound-the-alarm/module-3-incident-investigation-and-response/section-2-create-and-use-documentation/2-document-evidence-with-chain-of-custody-forms|Course 6 Module 3 Section 2 Leaf 2 Document evidence with chain of custody forms]]
