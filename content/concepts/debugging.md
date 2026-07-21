---
title: "除錯（Debugging）"
slug: debugging
aliases: [Debugging, 除錯, debug, 偵錯, 除錯策略]
category: 運算基礎
confidence: 已驗證
created: 2026-06-22
---

## 定義

除錯是「找出並修正程式碼錯誤的做法」。修複雜錯誤有時跟寫程式一樣花時間、甚至更久，是所有程式設計師的必備技能。三大錯誤類型：[[syntax-error]]（語法錯誤、會報錯且訊息會給位置）、[[logic-error]]（邏輯錯誤、不報錯但結果不如預期）、[[exception]]（例外、語法對卻無法執行）。常用策略：讀錯誤訊息、插 print（標行號＋位置）定位、用 debugger（除錯器）設中斷點（breakpoint）切段檢查；現代也可用 AI 助手（如 Gemini Code Assist）輔助，但產出要自己驗證、保留把關責任。

## 關鍵面向

- **定義**：找出並修正程式碼錯誤
- **三類錯誤**：[[syntax-error]]／[[logic-error]]／[[exception]]
- **策略**：讀錯誤訊息、print 定位、debugger＋breakpoint、AI 助手（需驗證）
- **流程**：先讓程式能跑（修語法、例外）、再驗結果對不對（修邏輯）

## 應用場景

- Simon 工作場景：維護記帳／Veeam 等自動化腳本時，定位並修正錯誤
- 一般場景：所有程式開發的必經環節

## 相關概念

- [[syntax-error]]、[[logic-error]]、[[exception]]：debug 要處理的三類錯誤
- [[ide]]：整合開發環境多附帶 debugger

## 來源（自動維護）

- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/1-debugging-strategies|Course 7 Module 4 Section 3 Leaf 1 Debugging strategies]]
- [[1-learning/coursera/google-cybersecurity/course-7-automate-cybersecurity-tasks-with-python/module-4-python-in-practice/section-3-debug-python-code/4-explore-debugging-techniques|Course 7 Module 4 Section 3 Leaf 4 Explore debugging techniques]]
