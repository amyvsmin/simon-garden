---
title: "PEP 8 風格指南（PEP 8 Style Guide）"
slug: pep-8
aliases: [PEP 8 style guide, PEP 8, PEP8, pep-8, Python Enhancement Proposals]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

PEP 8 是「提供 Python 程式設計師風格準則的資源」，是 Python 的代表性 [[style-guide]]。PEP 是 Python Enhancement Proposals（Python 改進提案）的縮寫。PEP 8 提供與語法有關的風格建議——**非強制**，但能建立程式設計師之間的一致性、讓別人容易讀懂程式碼。核心原則：**程式碼被讀的次數遠多於被寫的次數**。涵蓋的建議包含 [[code-comment]]（清楚、隨碼更新）、[[indentation]]（4 個空格）、每行長度（79 字元以內）等。

## 關鍵面向

- **PEP＝Python Enhancement Proposals**：PEP 8 是其中第 8 號
- **建議而非強制**：用於建立一致性、非語法硬規定
- **核心原則**：程式碼讀多於寫，要為「讀的人」優化
- **涵蓋範圍**：註解、縮排（4 空格）、每行長度（< 79 字元）等

## 應用場景

- Simon 工作場景：寫資安自動化腳本時照 PEP 8，未來自己或同事接手好維護（呼應講師「無 style guide 導致防火牆腳本一年後難讀」的故事）
- 一般場景：團隊程式碼風格一致、降低協作成本

## 相關概念

- [[style-guide]]：PEP 8 是 Python 的 style guide
- [[code-comment]]、[[indentation]]：PEP 8 規範的兩個重點
- [[syntax-error]]：可讀性之外，正確語法也是腳本能跑的前提

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/3-code-readability|Course 7 Module 2 Section 3 Leaf 3 Code readability]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-2-write-effective-python-code/section-3-learn-from-the-python-community/4-ensure-proper-syntax-and-readability-in-python|Course 7 Module 2 Section 3 Leaf 4 Ensure proper syntax and readability in Python]]
