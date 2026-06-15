---
title: "CI/CD 管線（CI/CD Pipeline）"
slug: cicd-pipeline
aliases: [CI/CD Pipeline, CI/CD 管線, CI/CD, 持續整合, 持續交付, Continuous Integration, Continuous Delivery, Continuous Deployment]
category: 資安
confidence: 已驗證
created: 2026-05-25
---

## 定義

持續整合（CI）與持續交付/部署（CD）的自動化軟體開發流程。CI 在程式碼合併時自動跑建置與測試，CD 將通過測試的版本自動部署到環境。若管線缺乏安全檢查，則本身會成為攻擊面（[[attack-surface]]）。

## 關鍵面向

- **CI 階段**：開發者推送程式碼 → 自動編譯 → 自動跑測試 → 報告結果；頻繁整合避免「大爆炸合併」
- **CD 階段**：Continuous Delivery（交付到 staging 需手動核准）vs Continuous Deployment（全自動到 production）
- **安全風險**：管線本身是高價值目標——攻擊者若控制 CI/CD 可注入惡意程式碼並自動部署到 production（[[supply-chain-risk]]）
- **安全左移**：[[devsecops]] 核心理念就是在 CI/CD 各階段插入安全掃描（SAST、DAST、SCA、容器掃描）
- **常見工具**：Jenkins、GitHub Actions、GitLab CI/CD、Azure DevOps Pipeline

## 應用場景

- **Simon 工作場景**：目前公司軟體開發流程未導入 CI/CD，但理解管線安全有助於評估未來自動化部署的風險；ISO 27001 A.14 安全開發中若涉及內部工具開發可參考
- **一般場景**：所有軟體公司的標準開發實踐；SaaS 產品的部署頻率直接依賴 CI/CD 管線的穩定與安全

## 相關概念

- [[devsecops]]：在 CI/CD 管線中嵌入安全實踐的方法論
- [[attack-surface]]：CI/CD 管線若未受保護本身就是攻擊面
- [[supply-chain-risk]]：CI/CD 遭入侵等於供應鏈攻擊
- [[vulnerability-management]]：管線中的自動掃描是漏洞管理的一環

## 來源

- [[1-learning/coursera/google-cybersecurity/course-5-assets-threats-and-vulnerabilities/module-3-vulnerabilities-in-systems/section-1-flaws-in-the-system/3-vulnerabilities-of-cicd|Course 5 Module 3 Section 1 Leaf 3 vulnerabilities of cicd]]
