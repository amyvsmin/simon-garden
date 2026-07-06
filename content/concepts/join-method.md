---
title: ".join() 方法（Join Method）"
slug: join-method
aliases: [join method, .join(), 清單合併成字串, join 方法]
category: 資安
confidence: 已驗證
created: 2026-06-22
---

## 定義

`.join()` 把可迭代物（如 [[list]]）的元素串接成一個 [[string]]。**被串接的每個元素都必須已經是字串，否則會丟 TypeError**——要串數字清單得先轉字串（如 `",".join(str(x) for x in nums)`）。它的語法跟其他方法相反——把方法接在「分隔字元」後、把要串接的清單當參數傳入，例如 `",".join(清單)` 用逗號分隔、`"\n".join(清單)` 用換行分隔。常用在「處理完清單、要寫回檔案」前——因為 `.write()` 只吃字串，得先用 `.join()` 把清單轉回字串。是 [[parsing]] 的主力方法之一，跟 [[split-method]] 互逆。

## 關鍵面向

- **清單 → 字串**
- **語法相反**：`分隔字元.join(清單)`，分隔字元在前、清單當參數傳入
- **元素必須是字串**：非字串元素（如數字）會丟 TypeError，要先用 `str()` 轉換
- 寫回檔案前的必要轉換（`.write()` 只吃字串）
- 跟 [[split-method]]（字串→清單）互逆

## 應用場景

- Simon 工作場景：把處理完的名單／log 清單串回字串、再覆寫回檔
- 一般場景：把清單輸出成 CSV／文字檔

## 相關概念

- [[parsing]]、[[split-method]]：互逆的兩個主力方法
- [[list]]、[[string]]：join 在兩者間轉換
- [[file-handling]]：寫回檔案前用 join 轉字串

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-2-work-with-files-in-python/4-work-with-files-in-python|Course 7 Module 4 Section 2 Leaf 4 Work with files in Python]]
