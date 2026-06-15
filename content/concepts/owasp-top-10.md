---
title: "OWASP 十大風險（OWASP Top 10）"
slug: owasp-top-10
aliases: [OWASP Top 10, OWASP 十大風險, OWASP 十大, OWASP Top Ten, Web 十大風險, OWASP 風險排行]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義
OWASP（Open Worldwide Application Security Project，開放全球應用程式安全專案）定期發布的 Web 應用程式十大安全風險排行榜。這份清單是全球 Web 安全的共同語言，也是開發與資安團隊對齊優先級的基準。

## 關鍵面向
- **定期更新**：約每 3-4 年更新一次（最近版本 2021），反映攻擊趨勢變化
- **2021 版重點**：Broken Access Control 升至第一、Injection 降至第三、新增 Insecure Design 和 SSRF
- **不只是清單**：每個風險項目附帶攻擊場景、防禦指引、參考資料，是完整的改善指南
- **通用語言**：開發者、資安人員、稽核人員都用 OWASP Top 10 對齊風險認知
- **與 [[injection]] 的關係**：注入攻擊從 2017 版第一名降至 2021 版第三名，反映輸入驗證意識提升

## 應用場景
- **Simon 工作場景**：公司內部 Web 系統（如 ERP、MES）的安全檢查可對照 OWASP Top 10 做 checklist；ISO 27001 A.14.2.5 安全系統開發原則可引用 OWASP 指引
- **一般場景**：Web 應用滲透測試的測試項目依據、DevSecOps 的安全編碼標準、資安教育訓練教材

## 相關概念
- [[injection]]：OWASP Top 10 的經典項目
- [[vulnerability]]：OWASP Top 10 列出的是最常見的弱點類別
- [[security-control]]：OWASP 對每個風險項目都建議對應的控制措施
- [[defense-in-depth]]：OWASP 防禦指引體現縱深防禦思維

## 來源
- Course 5 Assets, Threats, and Vulnerabilities — Module 3
- [[2026-06-02-owasp-llm-top-10-genai-security]]
