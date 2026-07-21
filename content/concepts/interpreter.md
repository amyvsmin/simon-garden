---
title: "直譯器（Interpreter）"
slug: interpreter
aliases: [Interpreter, 直譯器, python interpreter, 解譯器, 直譯程式]
category: 運算基礎
confidence: 已驗證
created: 2026-06-21
---

## 定義

直譯器是「把 [[python]] 程式碼逐行翻譯成可執行指令」的程式。Python 程式碼必須先經直譯器轉換，電腦才能處理。這跟 compiler（編譯器，先把整份程式翻完再執行）不同——直譯器像即時口譯、逐行處理。

## 關鍵面向

- **逐行翻譯**：一行一行把 Python 轉成電腦可執行的指令
- **直譯 vs 編譯**：直譯像即時口譯（逐句翻）、編譯像先把整本書翻完再交（對照學習）
- **執行前置**：沒有直譯器，電腦無法直接處理 Python 原始碼
- **底層去向**：最終仍轉成 binary（0／1）讓 CPU 執行

## 應用場景

- Simon 工作場景：理解「Python 是直譯語言」有助於判斷執行效能與部署方式（不需編譯、可直接跑腳本）
- 一般場景：理解程式語言執行模型、選擇直譯／編譯語言

## 相關概念

- [[python]]：Python 程式靠直譯器逐行執行
- [[python-syntax]]：直譯器依語法規則解析程式碼

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-2-introduction-to-python-programming-in-cybersecurity/3-get-to-know-python|Course 7 Module 1 Section 2 Leaf 3 Get to know Python]]
