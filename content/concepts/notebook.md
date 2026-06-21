---
title: "筆記本（Notebook）"
slug: notebook
aliases: [Notebook, 筆記本, Jupyter Notebook, Jupyter, Google Colab, Colaboratory, 互動式筆記本]
category: 資安
confidence: 已驗證
created: 2026-06-21
---

## 定義

筆記本（notebook）是「線上寫、存、執行程式碼」的介面，還能記錄程式相關的說明文字，是本課程跟 [[python]] 互動的主要環境。內容分兩種儲存格：code cell（寫並執行程式碼、輸出顯示在下方）與 markdown cell（用 markdown 描述程式）。常見環境有 Jupyter Notebook 與 Google Colaboratory（Colab）。

## 關鍵面向

- **code cell vs markdown cell**：前者寫並跑程式（常有播放鍵）、後者用文字描述程式
- **互動式**：邊寫邊試、即時看輸出，適合探索與記錄並行
- **常見環境**：Jupyter Notebook、Google Colab（都能跑含 Python 在內的多種語言）
- **與其他環境並列**：notebook、[[ide]]、[[cli]]（命令列）都能跑 Python

## 應用場景

- Simon 工作場景：對 Veeam 報表或記帳資料做一次性探索分析時，notebook 適合「邊算邊記錄」；正式自動化腳本則走 CLI／IDE
- 一般場景：資料分析、教學、原型探索、可重現的分析報告

## 相關概念

- [[ide]]：另一種寫 Python 的環境、含 GUI 與編輯輔助
- [[cli]]：命令列也能跑 Python
- [[python]]：notebook 是與 Python 互動的環境之一

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-1-introduction-to-python/section-2-introduction-to-python-programming-in-cybersecurity/5-python-environments|Course 7 Module 1 Section 2 Leaf 5 Python environments]]
