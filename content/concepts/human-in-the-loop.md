---
title: "人在迴圈中（Human-in-the-loop）"
slug: human-in-the-loop
aliases: [Human-in-the-loop, human in the loop, 人在迴圈中, 人類在迴圈, HITL, 人機協作驗證, 人類監督]
category: AI／Agent／LLM
confidence: 已驗證
created: 2026-06-25
---

## 定義
負責任使用 AI 的方法：結合機器智慧與人類的監督、參與、驗證，去**訓練、使用、驗證、修正** AI 的結果。核心前提是「沒有 AI 工具具備人類的經驗深度、實務知識與互動技巧」，所以 AI 是補強人類能力的工具、不是取代；產出要由人來把關。

## 關鍵面向
- **永遠驗證輸出**：AI 輸出可能不準或過時，要對照可靠來源核對（如漏洞資訊比對 NVD／官方公告）
- **留意輸入**：用到機密／敏感資訊前先查組織政策；工作外也避免輸入個資，並確認資料會被如何使用
- **具體手法**：找同事覆核 AI 結果、把 AI 建議當 checklist 逐項 check 而非照單全收
- **與評估迭代相通**：[[tcrei-framework]] 的 Evaluate／Iterate 就是 human-in-the-loop 的操作面

## 應用場景
- **Simon 工作場景**：公司機敏資料（infra 拓樸、Veeam 原始報表）丟進任何 AI 前先對照 ISO 27001／公司政策；AI 改的腳本自己審過再上；對照「先查證再用值」的工作紀律
- **一般場景**：資安決策、事件分析、對外內容等高風險產出的 AI 把關

## 相關概念
- [[generative-ai]]：human-in-the-loop 是負責任使用 gen AI 的核心機制
- [[responsible-ai]]：human-in-the-loop 是 responsible AI 的一項實踐
- [[adversarial-verification]]：更強的「派獨立驗證者推翻」版本，同屬「檢查的人不該是動手的人」
- [[tcrei-framework]]：Evaluate／Iterate 是 human-in-the-loop 的具體步驟

## 來源

- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/2-luis-driving-impact-with-ai-in-the-workplace|Course 8 Module 5 Section 1 Leaf 2 Luis: Driving impact with AI in the workplace]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/4-boost-your-cybersecurity-skills-with-ai|Course 8 Module 5 Section 1 Leaf 4 Boost your cybersecurity skills with AI]]
- [[1-learning/coursera/google-cybersecurity/course-8-put-it-to-work/module-5-use-ai-to-optimize-workflows/section-1-ai-in-cybersecurity/7-refine-code-with-help-from-ai|Course 8 Module 5 Section 1 Leaf 7 Refine code with help from AI]]
