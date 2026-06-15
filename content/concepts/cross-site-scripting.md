---
title: "跨站腳本（Cross-site Scripting / XSS）"
slug: cross-site-scripting
aliases: [Cross-site scripting, XSS, 跨站腳本, cross site scripting, reflected XSS, 反射型 XSS, stored XSS, 儲存型 XSS, DOM-based XSS, DOM 型 XSS]
category: 資安
confidence: 已驗證
created: 2026-05-30
---

## 定義

跨站腳本（XSS）是一種把程式碼注入有漏洞網站或 Web 應用的 [[injection]] 攻擊。利用大多數網站使用的 HTML 與 JavaScript，攻擊者可取得受感染網頁載入的所有內容——包含 session cookies、地理位置、甚至攝影機與麥克風。

## 關鍵面向

- **三種類型**：reflected（反射型，腳本送到伺服器、在回應時啟動）、stored（儲存型，腳本直接注入伺服器端、使用者造訪即觸發）、DOM-based（在瀏覽器端、修改 URL 參數觸發、不經伺服器）
- **能竊取的範圍**：session cookies、geolocation、webcam／microphone——凡網頁載入的都可能被取得
- **根因**：Web 應用接收輸入卻未做 input validation／sanitization
- **防禦**：輸入驗證與輸出編碼、內容安全政策（CSP）、框架內建的跳脫機制

## 應用場景

- **Simon 工作場景**：公司對外 Web 應用的弱點掃描重點之一；納入 ISO 27001 技術控制與弱點管理流程
- **一般場景**：OWASP Top 10 常客、CISSP Domain 8／SSCP 核心考點（三種類型的區分是選擇題常見考法）

## 相關概念

- [[injection]]：XSS 屬於注入攻擊家族
- [[web-based-exploit]]：XSS 是網頁型攻擊的代表
- [[sql-injection]]：另一種常見注入攻擊（針對資料庫）

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-4-threats-to-asset-security/section-3-web-based-exploits/1-cross-site-scripting-xss|Course 5 Module 4 Section 3 Leaf 1 Cross-site scripting (XSS)]]
