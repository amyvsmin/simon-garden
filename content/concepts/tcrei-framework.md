---
title: "TCREI 提示框架（Task, Context, References, Evaluate, Iterate）"
slug: tcrei-framework
aliases: [TCREI, TCREI framework, TCREI 框架, Task Context References Evaluate Iterate, Thoughtfully Create Really Excellent Inputs, T-C-R-E-I]
category: AI 與 Agent
confidence: 已驗證
created: 2026-06-25
---

## 定義
Google 教的「寫有效 prompt」五步框架，是 [[prompt-engineering]] 的具體操作法。五步：**Task（任務）、Context（脈絡）、References（參考）、Evaluate（評估）、Iterate（迭代）**。記憶口訣是各步字首組成的句子 **Thoughtfully Create Really Excellent Inputs**。順序不如 prompt 的「實質內容」重要。

## 關鍵面向
- **Task（任務）**：要模型做什麼；可再拆 persona（扮演的專業／產出對象）＋ format（輸出長相）
- **Context（脈絡）**：幫 AI 理解需求的必要細節
- **References（參考）**：給範例供它模仿
- **Evaluate（評估）**：拿到輸出後自問「有沒有換到我要的」
- **Iterate（迭代）**：不滿意就補資訊或改寫再試——迭代是有效提示的關鍵
- **漸進練法**：可先只給 Task，再逐步加 Context、References 與輸出格式（format 是 Task 底下的子項、非獨立第六步），每輪 evaluate 找缺口

## 應用場景
- **Simon 工作場景**：把 TCREI 當給芙莉蓮下指令的固定結構；用 gen AI 解讀 NIST／ISO 27001 控制項時靠 Context 與 Iterate 逼出貼合的答案
- **一般場景**：資安人用 AI 解讀框架、找 bug、寫文件時的通用提示骨架

## 相關概念
- [[prompt-engineering]]：TCREI 是提示工程的招牌框架
- [[generative-ai]]：TCREI 服務的對象
- [[human-in-the-loop]]：Evaluate／Iterate 是人類介入的具體展現

## 來源

- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/4-boost-your-cybersecurity-skills-with-ai|Course 8 Module 5 Section 1 Leaf 4 Boost your cybersecurity skills with AI]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/8-understand-system-vulnerabilities-with-ai|Course 8 Module 5 Section 1 Leaf 8 Understand system vulnerabilities with AI]]
