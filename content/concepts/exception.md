---
title: "例外（Exception）"
slug: exception
aliases: [Exception, 例外, exceptions, 例外錯誤, NameError, IndexError, FileNotFoundError]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

例外是「語法正確、在執行期間（runtime）發生的錯誤」。它不是「完全無法執行」——程式會開始跑、執行到某處才拋出例外；若用 `try`／`except` 攔截還能繼續執行，沒攔到才中斷。即使程式碼語法沒問題，執行時仍可能因各種原因丟出例外。常見類型：NameError（用到未指派的變數或未定義的函式）、IndexError（用 bracket notation 取了序列裡不存在的 index）、[[type-error|TypeError]]（用錯資料型別，如字串加整數）、FileNotFoundError（開啟不存在的檔；課程教材簡寫成 `FileNotFound`，但 Python 實際的類別名是 `FileNotFoundError`）。也可能因數學上不可能（如除以 0）而發生。可用 print 與 debugger 定位。

## 關鍵面向

- **語法對、執行時卻無法執行**
- 常見：NameError／IndexError／TypeError／FileNotFoundError
- 其他成因：除以 0、存取不存在的 index、用錯型別
- 定位法：print ＋ debugger

## 應用場景

- Simon 工作場景：跑記帳／Veeam 腳本最常遇到的——檔案不在（FileNotFoundError）、欄位型別不符（TypeError）、index 超界（IndexError）
- 一般場景：執行期錯誤處理（try／except）

## 相關概念

- [[debugging]]：例外的處理屬除錯一環
- [[syntax-error]]、[[logic-error]]：另外兩類錯誤
- [[type-error]]：TypeError 是例外的一種

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/1-debugging-strategies|Course 7 Module 4 Section 3 Leaf 1 Debugging strategies]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/4-explore-debugging-techniques|Course 7 Module 4 Section 3 Leaf 4 Explore debugging techniques]]
