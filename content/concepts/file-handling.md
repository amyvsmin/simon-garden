---
title: "檔案處理（File Handling）"
slug: file-handling
aliases: [File handling, 檔案處理, file operations, 檔案操作, file I/O, 讀寫檔案]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

檔案處理是在 [[python]] 裡開啟、讀取、寫入檔案的整套做法。資安分析師大量工作對象是 [[log]] 檔，所以這是把「人工翻 log」變成「程式自動處理」的第一步。標準寫法用 `with` 陳述搭配 `open()` 函式開檔（`with open("檔名", 模式) as file:`），離開 with 區塊會自動關檔；模式 `"r"` 讀取、`"w"` 覆寫或建新檔、`"a"` 附加到檔尾。讀用 `.read()`（文字模式下把檔案內容整段讀成一個字串）、寫用 `.write()`（把字串寫進檔案）。

## 關鍵面向

- **with + open() + as**：開檔三件套，with 會在離開區塊後自動關檔
- **三種模式**：`"r"` 讀／`"w"` 覆寫或建新（一開檔就清空原檔內容）／`"a"` 附加
- **讀寫方法**：`.read()`（檔→字串）、`.write()`（字串→檔）
- **檔案位置**：同目錄只給檔名、否則要給 [[file-path]]（[[absolute-path]]）

## 應用場景

- Simon 工作場景：讀資安 log、把核准 IP／使用者寫成 allow list 檔、批次改設定檔
- 一般場景：任何需要讀寫外部檔案的程式

## 相關概念

- [[file-path]]、[[absolute-path]]、[[relative-path]]：`open()` 第一參數指定位置
- [[parsing]]：讀進檔案後通常接著解析
- [[string]]：`.read()` 把檔案轉成字串
- [[log]]：最常處理的檔案類型

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/1-access-a-text-file-in-python|Course 7 Module 4 Section 2 Leaf 1 Access a text file in Python]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/2-import-files-into-python|Course 7 Module 4 Section 2 Leaf 2 Import files into Python]]
