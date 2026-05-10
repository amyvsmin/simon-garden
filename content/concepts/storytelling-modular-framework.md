---
title: "故事化模組化拼積木框架"
slug: storytelling-modular-framework
aliases: [Storytelling Modular Framework, 拼積木框架, 角色卡手法卡場景卡, Persona x Tactic x Scene, 模組化故事設計]
category: 資安
confidence: 已驗證
created: 2026-05-07
query-count: 0
---

# 故事化模組化拼積木框架

## 定義

把資安訓練情境設計拆成「角色 × 攻擊手法 × 場景」三維組合的可規模化框架。CYBERSEC 2026 飛飛提出、解決資安意識訓練「只有少數人會寫情境、年年從零開始」的規模化難題。給定三組卡片庫、隨機抽取或主動配置就能五分鐘產出一個訓練情境、加上 AI 生成可降到一分鐘。

## 關鍵面向

- **三維公式**：**角色 × 手法 × 場景 = 訓練情境**
- **角色卡（Persona Card）**：
  - 8 種以上 persona 範本：新人/主管/業務/財務/IT/助理/遠端員工/資深員工
  - 每張寫：動機、壓力點、可被利用的心理（如「新人怕問被罵」、「業務怕業績不達」、「助理習慣幫忙」）
- **手法卡（Tactic Card）**：[[social-engineering-playbook]] 四大套路
  - 權威冒充 / 緊急施壓 / 利益誘惑 / 好奇陷阱
  - 每張附三段式公式
- **場景卡（Scene Card）**：
  - 時間：週五下班前、假日晚上、月底結帳期
  - 管道：Email、Line、Teams、電話、簡訊
  - 背景：趕案子、家庭壓力、新功能上線
- **組合範例**：助理 + 權威冒充 + 週五晚上 Line = 假老闆要求買禮品卡
- **AI 賦能**：把卡片格式餵 Claude／ChatGPT、5 分鐘→ 1 分鐘
- **可建系統**：用 Vibe Coding 讓 AI 產出卡片庫管理系統、卡片新增、組合、抽卡、輸出情境一條龍
- **不過時的設計**：手法卡幾年內不太變（人性套路穩定）、只要更新場景卡就能讓訓練永遠新鮮

## 應用場景

- Simon 工作場景：公司資安訓練不再依賴外包顧問、ISO 27001 教育訓練模組化、減少每年重做投影片的時間；個人寫作可借鑑「角色 × 衝突 × 場景」結構
- 一般場景：HR 培訓、合規訓練、學校資訊倫理課、保險業反詐騙訓練

## 相關概念

- [[security-awareness-design]]：拼積木框架是有感訓練的落地工具
- [[social-engineering-playbook]]：手法卡庫
- [[phishing-drill-improved]]：演練情境的快速生成途徑

## 尚未解決的疑問

- 卡片庫長期維護的所有權誰負責（HR vs 資安部門）
- 三維框架是否可擴展到其他訓練主題（職安、ESG、合規）

## 來源（自動維護）

- [[2026-05-07-phoebe-security-awareness-training-cybersec]]
